import { getChats } from 'pages/Chats/api';
import { chatActions } from 'features/chat/model';

enum MessageEvent {
  chat = 'chat',
  chats = 'chats',
  chat_message = 'chat_message',
}
export const messageEventHandlers = {
  [MessageEvent.chats]: (message) => {
    getChats(message);
  },
  [MessageEvent.chat]: (message) => {
    const { chat } = message;
    chatActions.setChatToStore(chat);
  },

  [MessageEvent.chat_message]: (message) => {
    const { chat } = message;

    console.log('BIS chat_message', message);
    chatActions.setChatToStore(chat);
  },
};
