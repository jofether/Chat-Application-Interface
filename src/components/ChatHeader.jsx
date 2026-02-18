import React from 'react';

export function ChatHeader({ contact }) {
  return (
    <div className="h-16 px-6 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm -z-10 relative">
      
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          {contact.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-bold text-white leading-tight">{contact.name}</h2>
          
          <p className="text-xs text-gray-500 font-medium">
            {contact.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:text-blue-500 text-xl">
          📞
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:text-blue-500 text-xl">
          🎥
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:text-gray-600 text-xl">
          ⋯
        </button>
      </div>
    </div>
  );
}