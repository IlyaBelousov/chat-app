import { getStringifyedObject } from 'shared/lib/utils';
import { useChatsStore } from 'pages/Chats/model/useChatsStore';
import { server } from 'features/ws';

export const setChatsRequest = (roomId) => {
  const message = getStringifyedObject({
    event: 'chats',
    roomId,
  });
  server.send(message);
};

export const getChats = (message) => {
  useChatsStore.getState().setChats(message);
};
