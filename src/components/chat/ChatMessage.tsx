import React from 'react';
import './ChatMessage.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className="message">
      <AccountCircleIcon />
      <div className="messageInfo">
        <h4>
          てすと
          <span className="messageTimestamp">2023/01/01</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
