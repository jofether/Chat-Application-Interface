import React, { useState } from 'react';
import { ChatSidebar } from './components/ChatSidebar';
import { ChatHeader } from './components/ChatHeader';
import { MessageBubble } from './components/MessageBubble';
import { MessageInput } from './components/MessageInput';
import { EmptyChatState } from './components/EmptyChatState';
import { contactsData } from './data/contacts';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(1);
  const [messages, setMessages] = useState(
    contactsData.reduce((acc, contact) => {
      acc[contact.id] = contact.messages;
      return acc;
    }, {})
  );

  const selectedContact = contactsData.find(c => c.id === selectedContactId);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: (messages[selectedContactId]?.length || 0) + 1,
      content,
      isOwn: true,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      avatar: 'ME'
    };
    
    setMessages(prev => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage]
    }));
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar 
        contacts={contactsData}
        selectedId={selectedContactId}
        onSelectContact={setSelectedContactId}
      />

      {/* Main Chat Area */}
      {selectedContact ? (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <ChatHeader contact={selectedContact} />

          {/* Messages */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">
            {messages[selectedContactId]?.map((message) => (
              <MessageBubble 
                key={message.id} 
                message={message} 
                isOwn={message.isOwn}
              />
            ))}
          </main>

          {/* Input */}
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      ) : (
        <EmptyChatState />
      )}
    </div>
  );
}

export default App;