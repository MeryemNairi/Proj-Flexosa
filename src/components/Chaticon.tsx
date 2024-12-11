'use client'

import { useState } from 'react'

const ChatIcon = ({ toggleChat }: { toggleChat: () => void }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-blue-600 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleChat}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      {isHovered && (
        <span className="absolute right-full mr-2 bg-gray-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          Chat with us
        </span>
      )}
    </div>
  )
}

export default ChatIcon

