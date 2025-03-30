import { useState, useEffect, useRef } from "react";
import { useChat } from "@/hooks/use-chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const { toast } = useToast();
  const { 
    messages, 
    isLoading, 
    sendMessage, 
    startNewChat, 
    sessionId 
  } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    sendMessage(input.trim());
    setInput("");
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Start a new chat session if we don't have one
  useEffect(() => {
    if (!sessionId) {
      startNewChat();
    }
  }, [sessionId, startNewChat]);

  return (
    <section id="chatbot" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Try Our Initial Assessment</h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Chat with our AI assistant to get a preliminary understanding of your needs and how we can help.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#F0E6D2] p-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold">Serenity Assistant</h3>
            </div>
            
            <div 
              ref={messagesContainerRef}
              className="p-4 h-80 overflow-y-auto bg-neutral-50"
            >
              {isLoading && messages.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`
                      ${message.role === 'assistant' 
                        ? 'bg-white rounded-[18px_18px_18px_0]' 
                        : 'bg-primary text-white ml-auto rounded-[18px_18px_0_18px]'
                      } 
                      p-3 rounded-lg shadow-sm max-w-[80%] mb-4 transition-all
                    `}
                  >
                    <p>{message.content}</p>
                  </div>
                ))
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex items-center">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="ml-2" 
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white text-opacity-80 mb-4">Ready to take the next step?</p>
            <Button asChild variant="secondary" size="lg">
              <a href="#waitlist">Join Our Waitlist</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
