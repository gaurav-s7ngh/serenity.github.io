import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertMessageSchema, insertChatSessionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

function handleZodError(err: ZodError, res: Response) {
  const errorMessage = err.errors.map(e => e.message).join(', ');
  return res.status(400).json({ message: `Validation error: ${errorMessage}` });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // Waitlist API
  app.post('/api/waitlist', async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists in waitlist
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ message: 'Email already exists in waitlist' });
      }
      
      const entry = await storage.addToWaitlist(validatedData);
      res.status(201).json({ 
        message: 'Successfully added to waitlist',
        data: { id: entry.id, email: entry.email } 
      });
    } catch (err) {
      if (err instanceof ZodError) {
        return handleZodError(err, res);
      }
      res.status(500).json({ message: 'An error occurred while adding to waitlist' });
    }
  });

  // Contact form API
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.saveMessage(validatedData);
      res.status(201).json({ 
        message: 'Message received successfully',
        data: { id: message.id } 
      });
    } catch (err) {
      if (err instanceof ZodError) {
        return handleZodError(err, res);
      }
      res.status(500).json({ message: 'An error occurred while saving your message' });
    }
  });

  // Chatbot API
  app.post('/api/chat/session', async (_req, res) => {
    try {
      const sessionId = uuidv4();
      const initialMessages = [
        { role: "system", content: "You are a helpful therapy assistant for Serenity Therapy, a mental health platform. Respond empathetically to users seeking therapy advice." },
        { role: "assistant", content: "Hi there! I'm the Serenity therapy assistant. I'm here to help understand what you're looking for and how we can support your mental health journey. Would you mind sharing what brings you here today?" }
      ];
      
      const session = await storage.createChatSession({
        sessionId,
        messages: initialMessages
      });
      
      res.status(201).json({ 
        message: 'Chat session created',
        data: { 
          sessionId: session.sessionId,
          messages: session.messages.filter(m => m.role !== "system")
        } 
      });
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while creating a chat session' });
    }
  });
  
  app.post('/api/chat/:sessionId/message', async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: 'Message is required and must be a string' });
      }
      
      // Get existing session
      const session = await storage.getChatSession(sessionId);
      if (!session) {
        return res.status(404).json({ message: 'Chat session not found' });
      }
      
      // Add user message to session
      const updatedMessages = [...session.messages, { role: "user", content: message }];
      
      // Generate bot response (simple hardcoded responses for demo)
      let botResponse = "";
      const lowercaseMessage = message.toLowerCase();
      
      if (lowercaseMessage.includes("anxious") || lowercaseMessage.includes("anxiety")) {
        botResponse = "I'm sorry to hear you're experiencing anxiety. Many people face similar struggles, and it's a sign of strength that you're looking for support. Would you be interested in exploring techniques to manage anxiety or would you prefer to speak with a therapist who specializes in anxiety?";
      } else if (lowercaseMessage.includes("depress")) {
        botResponse = "Thank you for sharing that with me. Depression can be really challenging to deal with alone. Our platform offers different types of therapy that have been shown to be effective for depression. Would you like to learn more about these options or would you prefer to be matched with a therapist?";
      } else if (lowercaseMessage.includes("relationship") || lowercaseMessage.includes("couple") || lowercaseMessage.includes("partner")) {
        botResponse = "Relationship challenges can be difficult to navigate. Our couples therapy services might be helpful for you. We have therapists who specialize in improving communication and resolving conflicts. Would you like more information about our couples therapy services?";
      } else if (lowercaseMessage.includes("stress") || lowercaseMessage.includes("overwhelm")) {
        botResponse = "It sounds like you're dealing with a lot of stress right now. That's something many people struggle with. We offer various approaches that can help with stress management, including mindfulness techniques and cognitive behavioral therapy. Would you like to explore these options?";
      } else {
        botResponse = "Thank you for sharing that with me. Based on what you've told me, I think speaking with one of our licensed therapists could be really beneficial. They can provide personalized support for your specific situation. Would you like to join our waitlist to be matched with a therapist?";
      }
      
      // Add bot response
      updatedMessages.push({ role: "assistant", content: botResponse });
      
      // Update session
      await storage.updateChatSession(sessionId, updatedMessages);
      
      res.json({ 
        message: 'Message processed',
        data: { 
          messages: updatedMessages.filter(m => m.role !== "system")
        } 
      });
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while processing your message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
