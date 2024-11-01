import React, { useState } from 'react';
import socket from '../socket';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');   // Store the user name
  const [isNameSet, setIsNameSet] = useState(false); // Check if name is set

  const handleSetName = () => {
    if (name.trim()) {
      setIsNameSet(true); // Confirm name input
    }
  };

  const sendMessage = () => {
    if (message.trim() && isNameSet) {
      const newMessage = {
        id: Date.now(),
        text: message,
        user: name, // Use the user's name in the message
      };

      // Emit the message to the server
      socket.emit('chat message', newMessage);

      // Reset input field
      setMessage('');
    }
  };

  return (
    <>
      {/* Show name input if name is not set */}
      {!isNameSet ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
          />
          <button className='ms-1' onClick={handleSetName}>Set Name</button>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(to bottom right, , #ee0979'}}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className='btn btn-success rounded-circle shadow ms-3'><i className="fa-solid fa-angles-right"></i></button>
        </div>
      )}
    </>
  );
};

export default ChatInput;


