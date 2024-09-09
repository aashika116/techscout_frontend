import React, { useState, useEffect } from 'react';
import './ChatComponent.css';

function ChatComponent() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showHelperText, setShowHelperText] = useState(true); // For displaying the "Hi!" text

  useEffect(() => {
    const timer = setTimeout(() => setShowHelperText(false), 3000); // Hide helper text after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
    if (!chatOpen && chatMessages.length === 0) {
      setChatMessages([{ text: 'Hi! How can I help you?', isAI: true }]); // Automated AI message
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, isAI: false }]);
      setMessage('');

      // Simulate AI response after a delay
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { text: "This is an automated response.", isAI: true }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>
        <div className="chat-icon-circle">💬</div>
        {showHelperText && <div className="helper-text">Hi! How can I help you?</div>}
      </div>
      <div className={`chat-window ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>AI Chat</h4>
        </div>
        <div className="chat-body">
          {chatMessages.map((msg, index) => (
            <p
              key={index}
              className={`chat-message ${msg.isAI ? 'ai-message1' : 'user-message1'}`}
            >
              {msg.text}
            </p>
          ))}
        </div>
        <div className="chatt-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default ChatComponent;
