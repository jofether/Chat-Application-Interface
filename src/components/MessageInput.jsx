import React, { useState } from 'react';

export function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-gray-200 flex items-center gap-3 relative z-20"
    >
      <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors text-xl">
        📎
      </button>
      
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full py-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
        />
        <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-lg">
          😊
        </button>
      </div>

      <button
        type="submit"
        disabled={!message.trim()}
        className="p-3 bg-blue-500 text-white rounded-ful hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 fixed top-0 right-0 text-lg"
      >
        ✈️
      </button>
    </form>
  );
}