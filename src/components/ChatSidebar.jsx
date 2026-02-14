import React from 'react';

export function ChatSidebar({ contacts, selectedId, onSelectContact }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <button className="text-gray-400 hover:text-gray-600">✎</button>
        </div>
        <input 
          type="text" 
          placeholder="Search conversations..." 
          className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelectContact(contact.id)}
            className={`w-full p-4 border-b border-gray-100 flex items-center space-x-3 hover:bg-gray-50 transition ${
              selectedId === contact.id ? 'bg-indigo-50' : ''
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
              {contact.avatar}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="font-semibold text-gray-800 truncate">{contact.name}</p>
              <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
              <span className="text-xs text-gray-400">{contact.lastTime}</span>
            </div>
            {contact.unread && (
              <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {contact.unread}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <button className="w-full flex items-center justify-center space-x-2 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition">
          <span className="text-xl">⚙️</span>
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
