import React, { useState } from 'react';
import { ChatSidebar } from './components/ChatSidebar';
import { ChatHeader } from './components/ChatHeader';
import { MessageBubble } from './components/MessageBubble';
import { MessageInput } from './components/MessageInput';
import { EmptyChatState } from './components/EmptyChatState';
import { contacts } from './data/contacts';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(contacts[0].id);
  const [chatHistory, setChatHistory] = useState(
    contacts.reduce((acc, contact) => ({
      ...acc,
      [contact.id]: contact.messages || []
    }), {})
  );

  const selectedContact = contacts.find(c => c.id === selectedContactId);
  const messages = chatHistory[selectedContactId] || [];

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatHistory(prev => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage]
    }));
  };

  return (
    // [BUG - LAYOUT] 'block' prevents the sidebar and chat from sitting side-by-side
    // [FIX] <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
    <div className="block h-screen bg-gray-100 font-sans overflow-hidden">
      
      <ChatSidebar
        contacts={contacts}
        selectedId={selectedContactId}
        onSelectContact={setSelectedContactId}
      />
      
      {/* [BUG - TYPO] 'overlfow-hidden' is misspelled, breaking overflow handling */}
      {/* [FIX] <div className="flex-1 flex flex-col bg-white shadow-xl relative z-0 overflow-hidden"> */}
      <div className="flex-1 flex flex-col bg-white shadow-xl relative z-0 overlfow-hidden">
        {selectedContact ? (
          <>
            <ChatHeader contact={selectedContact} />
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <MessageBubble 
                  key={msg.id} 
                  message={msg} 
                  isMe={msg.sender === 'me'} 
                />
              ))}
            </div>
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <EmptyChatState />
        )}
      </div>
    </div>
  );
}

export default App;