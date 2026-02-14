import React from 'react';

export function MessageBubble({ message, isOwn }) {
  const bgColor = isOwn ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-800';
  const alignment = isOwn ? 'justify-end' : 'items-end';
  const roundedClass = isOwn ? 'rounded-2xl rounded-br-none' : 'rounded-2xl rounded-bl-none';

  return (
    <div className={`flex ${alignment}`}>
      {!isOwn && (
        <div className="w-8 h-8 rounded-full bg-green-500 mb-1 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
          {message.avatar}
        </div>
      )}
      <div className={`${bgColor} p-4 ${roundedClass} shadow-sm max-w-md`}>
        <p className="break-words">{message.content}</p>
        <span className={`text-xs ${isOwn ? 'text-indigo-200' : 'text-gray-400'} mt-1 block ${isOwn ? 'text-right' : ''}`}>
          {message.time}
        </span>
      </div>
    </div>
  );
}
