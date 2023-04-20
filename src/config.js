import { createChatBotMessage } from 'react-chatbot-kit';
import { data } from './data';
import ListItems from './weidgets/ListItems';
const Data = data;
const botName = 'Service bot';

const initialMessage  = `1.show `
const config = {
  initialMessages: [createChatBotMessage(`Hi from PsatLink ${botName}`)],
  botName,
    state:{
        shopItem:Data,

    },
    widgets:[
        {
            widgets:"ItemList",
            widgetFunc:(props)=><ListItems {...props}/>,
            mapStateToProps:["shopItem"]    
        }
    ]
};

export default config;