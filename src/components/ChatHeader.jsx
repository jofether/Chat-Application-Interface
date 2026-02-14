import React from 'react';

export function ChatHeader({ contact }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full ${contact.color} flex items-center justify-center text-white font-bold`}>
          {contact.avatar}
        </div>
        <div>
          <h2 className="font-bold text-gray-800">{contact.name}</h2>
          <div className="flex items-center text-xs text-green-500">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-gray-600 text-xl">📞</button>
        <button className="text-gray-400 hover:text-gray-600 text-xl">📹</button>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>
    </header>
  );
}
