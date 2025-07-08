"use client";
import { useState, useEffect } from "react";
import type React from "react";

import { supabase, type Message } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Calendar,
  User,
  MessageSquare,
  Eye,
  EyeOff,
  Lock,
  LogOut,
} from "lucide-react";

export default function MessagesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const CORRECT_PASSWORD = "1234";

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setMessages([]);
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
        return;
      }

      setMessages(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("messages")
        .update({ read: !currentStatus })
        .eq("id", id);

      if (error) {
        console.error("Error updating message:", error);
        return;
      }

      // Update local state
      setMessages(
        messages.map((msg) =>
          msg.id === id ? { ...msg, read: !currentStatus } : msg
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const filteredMessages = messages.filter((message) => {
    if (filter === "read") return message.read;
    if (filter === "unread") return !message.read;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  // Password Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#171717_80%)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#2B1942]/80 backdrop-blur-sm p-8 rounded-lg border border-[#98B4C9]/30 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="p-4 bg-[#E48A57]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#E48A57]" />
            </div>
            <h1 className="text-2xl font-bold text-[#98B4C9] mb-2">
              Access Messages
            </h1>
            <p className="text-white/60">
              Enter password to view contact form submissions
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Enter password"
                className="w-full p-4 bg-[#171717]/50 border border-[#98B4C9]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E48A57] transition-colors"
                autoFocus
              />
              <AnimatePresence>
                {passwordError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {passwordError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-gradient-to-r from-[#E48A57] to-[#98B4C9] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Access Messages
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Messages Dashboard
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Header */}
      <div className="bg-[#2B1942]/50 backdrop-blur-sm border-b border-[#98B4C9]/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#98B4C9]">
                Contact Messages
              </h1>
              <p className="text-white/60 text-sm">
                {messages.length} total messages • {unreadCount} unread
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-[#E48A57]/20 text-[#E48A57] rounded-lg hover:bg-[#E48A57]/30 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex space-x-4">
            {(["all", "unread", "read"] as const).map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterType
                    ? "bg-[#E48A57] text-white shadow-lg"
                    : "bg-[#2B1942]/50 text-white/70 hover:text-white hover:bg-[#2B1942]/80"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                {filterType !== "all" && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {
                      messages.filter((m) =>
                        filterType === "read" ? m.read : !m.read
                      ).length
                    }
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-8 h-8 border-2 border-[#E48A57] border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMessages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <MessageSquare className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <p className="text-white/60 text-lg">
                  {filter === "all"
                    ? "No messages found"
                    : `No ${filter} messages`}
                </p>
              </motion.div>
            ) : (
              <AnimatePresence>
                {filteredMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`relative bg-[#2B1942]/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:transform hover:scale-[1.01] ${
                      message.read
                        ? "border-[#98B4C9]/20 hover:border-[#98B4C9]/40"
                        : "border-[#E48A57]/40 hover:border-[#E48A57]/60 shadow-lg"
                    }`}
                  >
                    {/* Unread indicator */}
                    {!message.read && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-[#E48A57] rounded-full animate-pulse" />
                    )}

                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-[#E48A57]/20 rounded-full">
                          <User className="w-6 h-6 text-[#E48A57]" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">
                            {message.name}
                          </h3>
                          <div className="flex items-center space-x-6 text-white/60 text-sm mt-1">
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4" />
                              <span>{message.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(message.created_at)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={() =>
                          toggleReadStatus(message.id, message.read)
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full transition-all duration-300 ${
                          message.read
                            ? "bg-[#98B4C9]/20 text-[#98B4C9] hover:bg-[#98B4C9]/30"
                            : "bg-[#E48A57]/20 text-[#E48A57] hover:bg-[#E48A57]/30"
                        }`}
                        title={message.read ? "Mark as unread" : "Mark as read"}
                      >
                        {message.read ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </motion.button>
                    </div>

                    <div className="bg-[#171717]/50 rounded-lg p-4 border border-[#98B4C9]/10">
                      <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
                        {message.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
