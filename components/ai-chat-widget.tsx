"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  // ✅ STREAM FROM NEW API (OpenRouter)
  const streamAIResponse = async (userText: string) => {
    const res = await fetch("/api/farming-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userText }),
    });

    if (!res.ok || !res.body) {
      throw new Error("Streaming failed");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let aiText = "";
    const aiMessageId = crypto.randomUUID();

    // Insert empty assistant message first
    setMessages((prev) => [
      ...prev,
      { id: aiMessageId, role: "assistant", text: "" },
    ]);

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;

        aiText += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? { ...msg, text: aiText }
              : msg
          )
        );
      }
    } finally {
      reader.releaseLock();
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!input.trim() || isThinking) return;

  const userMessage: Message = {
    id: crypto.randomUUID(),
    role: "user",
    text: input.trim(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsThinking(true);

  try {
    await streamAIResponse(userMessage.text);
  } catch {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "Sorry, the AI service is currently unavailable. Please try again later.",
      },
    ]);
  } finally {
    // 🔐 THIS IS THE FIX
    setTimeout(() => {
      setIsThinking(false);
    }, 1500);
  }
};


  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#2D7A3E] hover:bg-[#236530] text-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2D7A3E] to-[#1e5228] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">BOAR Agro Assistant</h3>
                  <p className="text-xs text-white/80">
                    Farming & sustainability support
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <Bot className="w-10 h-10 mx-auto text-[#2D7A3E] mb-3" />
                  <p className="text-sm text-gray-600">
                    Ask anything about farming, crops, sustainability, or exports.
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-[#2D7A3E] rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-[#2D7A3E] text-white"
                        : "bg-white border border-gray-200 text-gray-900"
                    }`}
                  >
                    {message.text}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {isThinking && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#2D7A3E] rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white border rounded-2xl px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  disabled={isThinking}
                  className="flex-1 rounded-full"
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isThinking}
                  className="bg-[#2D7A3E] hover:bg-[#236530] rounded-full w-12 h-12 p-0"
                >
                  {isThinking ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI — real-time farming assistant
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
