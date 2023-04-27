import './App.css';
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import { FaRobot } from "react-icons/fa";
import { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import NavBar from './component/NavBar';
function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="App">
      <NavBar/>






      <div style = {{position:'fixed', bottom:'10px', right:'10px'}}>
        <button hidden={showChatbot} style={{padding:'10px 20px', background:'blue',color:'white', cursor:'pointer', borderRadius:'5px'}} onClick={()=>{setShowChatbot(true)}}>{showChatbot?'close Chat':"Start Chat"}</button>
        {
          showChatbot &&
          <div style = {{border:'1px solid red',padding:'10px',borderRadius:'10px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style = {{fontSize:'24px',position:"fixed",right:'30px',cursor:'pointer'}} onClick={()=>{setShowChatbot(false)}}>X</div>
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
          }
      </div>
    </div>
  )
}

export default App;
