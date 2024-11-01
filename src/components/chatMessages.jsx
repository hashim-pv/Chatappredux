import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import socket from '../socket';

const ChatMessages = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen for 'chat message' event from the server
    socket.on('chat message', (message) => {
      // Add the received message to the Redux store
      dispatch(addMessage(message));
    });

    return () => {
      socket.off('chat message');
    };
  }, [dispatch]);

  return (
    <div style={{background: 'linear-gradient(to bottom right, #2874a6, #5b2c6f'}} >
      <ul>
        {messages.map((msg, index) => (
          <li className='shadow' key={msg.id || index}>
            <strong>{msg.user}:</strong> {msg.text} {/* Display user name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatMessages;


