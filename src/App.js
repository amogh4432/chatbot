import './App.css';
import { Chatbot } from "react-chatbot-kit";
import  ActionProvider  from "./ActionProvider";
import  MessageParser  from "./MessageParser";
import config  from "./config";
import { FaRobot } from "react-icons/fa";
import { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="App">
      <h1>Electronic Shop Chatbot</h1>
      <h3>Type 1 to see all available product</h3>
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
    </div>
  )
}

export default App;
