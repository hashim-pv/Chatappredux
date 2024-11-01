
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChatInput from './components/chatInput';
import ChatMessages from './components/chatMessages';
import socket from './socket';

const App = () => {
  useEffect(() => {
    socket.connect();
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <div style={{ padding: '20px', backgroundImage:"url(https://plus.unsplash.com/premium_photo-1670595337767-1af7ce73df5c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)" }}>
        <ChatMessages />
        <ChatInput />
      </div>
    </Provider>
  );
};

export default App;

