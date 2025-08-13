"use client";
import React, { createContext, useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { database } from "@/firebase/firebase";

export const ChatContext = createContext<any>(null);

export const ChatProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const messagesRef = collection(database, "messages");
    const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot: any) => {
      const msgs = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);

      if (document.visibilityState === "hidden") {
        setUnreadCount((prev) => prev + 1);
        playNotificationSound();
      }
    });

    return () => unsubscribe();
  }, []);

  const playNotificationSound = () => {
    const audio = new Audio("/assets/notification.mp3");
    audio.play();
  };

  return (
    <ChatContext.Provider value={{ messages, unreadCount, setUnreadCount }}>
      {children}
    </ChatContext.Provider>
  );
};
