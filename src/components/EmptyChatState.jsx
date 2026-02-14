import React from 'react';

export function EmptyChatState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
      <div className="text-6xl mb-4">💬</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a conversation</h2>
      <p className="text-gray-500">Choose a contact from the list to start messaging</p>
    </div>
  );
}
