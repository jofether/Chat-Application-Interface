import React from 'react';
import { Search } from 'lucide-react';

export function ChatSidebar({ contacts, selectedId, onSelectContact }) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full z-20 relative">
      
      {/* [BUG - SPACING] 'p-0' removes breathing room, making content touch borders */}
      {/* [FIX] <div className="p-4 border-b border-gray-200 bg-gray-50"> */}
      <div className="p-0 border-b border-gray-200 bg-gray-50">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">Chats</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* [BUG - SPACING] Negative margin pulls the list up, overlapping the search bar */}
      {/* [FIX] <div className="flex-1 overflow-y-auto custom-scrollbar"> */}
      <div className="flex-1 overflow-y-auto custom-scrollbar -mt-10">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onSelectContact(contact.id)}
            className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 border-l-4 ${
              selectedId === contact.id
                ? 'bg-blue-50 border-blue-500'
                : 'border-transparent'
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              {contact.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full ring-1 ring-white"></span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className={`font-semibold truncate ${selectedId === contact.id ? 'text-blue-700' : 'text-gray-900'}`}>
                  {contact.name}
                </h3>
                <span className="text-xs text-gray-400 font-medium">12:30</span>
              </div>
              <p className="text-sm text-gray-500 truncate">
                {contact.messages[contact.messages.length - 1]?.text || 'No messages yet'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}