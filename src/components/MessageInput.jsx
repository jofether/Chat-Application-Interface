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
    <footer className="bg-white p-4 border-t border-gray-200 flex-shrink-0">
      <form className="flex items-center space-x-4 max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <button 
          type="button"
          className="text-gray-400 hover:text-gray-600 text-2xl transition"
        >
          +
        </button>
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-gray-100 text-gray-800 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
        />
        <button 
          type="submit"
          className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 transition shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </button>
      </form>
    </footer>
  );
}
