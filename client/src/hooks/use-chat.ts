import { useState, useCallback, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export function useChat() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Get or start a chat session
  const startNewChatMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/chat/session", {});
    },
    onSuccess: async (response) => {
      const data = await response.json();
      setSessionId(data.data.sessionId);
      setMessages(data.data.messages);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to start a chat session. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Send a message mutation
  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      if (!sessionId) throw new Error("No active session");
      return apiRequest("POST", `/api/chat/${sessionId}/message`, { message });
    },
    onSuccess: async (response) => {
      const data = await response.json();
      setMessages(data.data.messages);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const startNewChat = useCallback(() => {
    startNewChatMutation.mutate();
  }, [startNewChatMutation]);

  const sendMessage = useCallback((message: string) => {
    // Optimistically update UI with user message
    setMessages(prev => [...prev, { role: "user", content: message }]);
    sendMessageMutation.mutate(message);
  }, [sendMessageMutation]);

  return {
    messages,
    isLoading: startNewChatMutation.isPending || sendMessageMutation.isPending,
    sendMessage,
    startNewChat,
    sessionId,
  };
}
