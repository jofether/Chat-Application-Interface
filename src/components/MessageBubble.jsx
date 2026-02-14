import React from 'react';

export function MessageBubble({ message, isMe }) {
  return (
    // [BUG - LAYOUT] 'grid' breaks the alignment logic (justify-end relies on flex)
    // [FIX] <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4 group`}>
    <div className={`grid ${isMe ? 'justify-end' : 'justify-start'} mb-4 group`}>
      
      <div
        className={`max-w-[70%] rounded-2xl px-5 py-3 shadow-sm relative transition-all duration-200 ${
          isMe
            // [BUG - COLOR] 'bg-yellow-100' + 'text-white' = impossible to read (Contrast fail)
            // [FIX] ? 'bg-blue-500 text-white rounded-br-sm'
            ? 'bg-yellow-100 text-white rounded-br-sm'
            : 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
        }`}
      >
        <p className="text-[15px] leading-relaxed break-words">{message.text}</p>
        <span
          className={`text-[10px] absolute -bottom-5 min-w-max font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            isMe ? 'right-1 text-gray-400' : 'left-1 text-gray-400'
          }`}
        >
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}