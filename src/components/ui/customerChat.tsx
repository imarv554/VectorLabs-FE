"use client";
import { ChatContext } from "@/context";
import { VLDark, VlLight } from "../../../public/img";
import React, { useContext, useState, useEffect } from "react";
import { SiChatwoot } from "react-icons/si";
import MagicBell from "@magicbell/magicbell-react";

const Chat = () => {
  const { messages, setUnreadCount } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // MagicBell configuration
  // @ts-ignore
  const magicbell = new MagicBell({
    // @ts-ignore
    apiKey: process.env.NEXT_PUBLIC_MAGICBELL_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_MAGICBELL_API_SECRET,
  });

  // Show notification when chat is opened
  useEffect(() => {
    // Define the notification content
    const notificationMessage = {
      id: "welcome",
      text: "Welcome to our chat! How can we be of assistance?",
      sender: "Vetor Labs",
      logo: VLDark,
    };

    // Trigger the MagicBell notification each time the page loads
    if (magicbell && magicbell.showNotification) {
      magicbell.showNotification({
        title: "Welcome to Vetor Labs",
        message: "How can we be of assistance?",
        type: "info",
        // Include logo, sender, and text in the custom data
        customData: {
          logo: notificationMessage.logo,
          sender: notificationMessage.sender,
          text: notificationMessage.text,
        },
      });
    }
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-5 right-5 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg xl:h-20 xl:w-20 h-16 w-16 z-[1000]"
        onClick={handleOpenChat}
      >
        {messages.length > 0 && (
          <span className="absolute top-0 right-0 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {messages.length}
          </span>
        )}
        <SiChatwoot className="text-3xl" />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 bg-white border border-gray-300 rounded-lg shadow-lg xl:w-96 lg:w-96 md:w-96 w-auto max-w-full z-[1000]">
          <div className="bg-black text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <div className="flex gap-1 items-center">
              <img src={VlLight.src} alt="logo" className="h-10 w-10" />
              <span>Customer Care Rep</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-xl">
              ✖
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map(
              (msg: { id: string; text: string; sender: string }) => (
                <div
                  key={msg.id}
                  className={`mb-2 p-2 ${msg.sender === "company" ? "bg-blue-500 text-white" : "bg-black text-white"} rounded-lg w-fit max-w-xs`}
                >
                  {msg.text}
                </div>
              ),
            )}
          </div>

          {/* Input Field and Send Button */}
          <form
            onSubmit={sendMessage}
            className="flex gap-2 p-2 border-t border-gray-300"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
