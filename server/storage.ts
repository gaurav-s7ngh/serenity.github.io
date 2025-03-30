import { 
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  messages, type Message, type InsertMessage,
  chatSessions, type ChatSession, type InsertChatSession
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  addToWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
  getAllWaitlist(): Promise<Waitlist[]>;
  
  // Contact form methods
  saveMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  
  // Chatbot methods
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(sessionId: string): Promise<ChatSession | undefined>;
  updateChatSession(sessionId: string, messages: {role: string, content: string}[]): Promise<ChatSession | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  private contactMessages: Map<number, Message>;
  private chatSessions: Map<string, ChatSession>;
  
  private currentUserId: number;
  private currentWaitlistId: number;
  private currentMessageId: number;
  private currentChatSessionId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.contactMessages = new Map();
    this.chatSessions = new Map();
    
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentMessageId = 1;
    this.currentChatSessionId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Waitlist methods
  async addToWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    const joinedAt = new Date();
    const waitlistEntry: Waitlist = { ...entry, id, joinedAt };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email === email,
    );
  }
  
  async getAllWaitlist(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }
  
  // Contact form methods
  async saveMessage(messageData: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const createdAt = new Date();
    const message: Message = { ...messageData, id, createdAt };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Chatbot methods
  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    const id = this.currentChatSessionId++;
    const now = new Date();
    const chatSession: ChatSession = { 
      ...session, 
      id,
      createdAt: now,
      updatedAt: now
    };
    this.chatSessions.set(session.sessionId, chatSession);
    return chatSession;
  }
  
  async getChatSession(sessionId: string): Promise<ChatSession | undefined> {
    return this.chatSessions.get(sessionId);
  }
  
  async updateChatSession(sessionId: string, messages: {role: string, content: string}[]): Promise<ChatSession | undefined> {
    const session = this.chatSessions.get(sessionId);
    if (!session) return undefined;
    
    session.messages = messages;
    session.updatedAt = new Date();
    this.chatSessions.set(sessionId, session);
    return session;
  }
}

export const storage = new MemStorage();
