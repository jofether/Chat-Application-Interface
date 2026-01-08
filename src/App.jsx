import React from 'react';

function App() {
  return (
    // MAIN CONTAINER: Fixed height (h-screen) with no page scroll
    <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
      
      {/* HEADER: Fixed height, always at top */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">JD</div>
          <div>
            <h2 className="font-bold text-gray-800">Jane Doe</h2>
            <div className="flex items-center text-xs text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </header>

      {/* MESSAGE LIST: Takes all remaining space (flex-1) and scrolls internally */}
      {/* FUTURE BUG: Remove 'overflow-y-auto' to make content clip or spill over */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">
        
        {/* Incoming Message */}
        <div className="flex items-end">
          <div className="w-8 h-8 rounded-full bg-green-500 mb-1 mr-2 flex-shrink-0"></div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm max-w-md">
            <p className="text-gray-800">Hey! Did you see the new designs for the dashboard?</p>
            <span className="text-xs text-gray-400 mt-1 block">10:02 AM</span>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-end justify-end">
          <div className="bg-indigo-600 p-4 rounded-2xl rounded-br-none shadow-md max-w-md text-white">
            <p>Yes, I just took a look. The new sidebar layout is much cleaner!</p>
            <span className="text-xs text-indigo-200 mt-1 block text-right">10:05 AM</span>
          </div>
        </div>

        {/* Incoming Message Long */}
        <div className="flex items-end">
          <div className="w-8 h-8 rounded-full bg-green-500 mb-1 mr-2 flex-shrink-0"></div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm max-w-md">
            <p className="text-gray-800">
              Awesome. I'm going to push the changes to the staging branch. 
              Let me know if you spot any z-index issues with the modal.
            </p>
            <span className="text-xs text-gray-400 mt-1 block">10:08 AM</span>
          </div>
        </div>
      </main>

      {/* FOOTER INPUT: Fixed height at bottom */}
      <footer className="bg-white p-4 border-t border-gray-200 flex-shrink-0">
        <form className="flex items-center space-x-4 max-w-4xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <button className="text-gray-400 hover:text-gray-600 text-2xl">+</button>
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-gray-100 text-gray-800 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
          />
          <button className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 transition shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </form>
      </footer>

    </div>
  );
}

export default App;