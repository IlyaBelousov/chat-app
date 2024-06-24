import { server } from 'features/ws';
import { getStringifyedObject } from 'shared/lib/utils';

export const sendMessage = (message: string) => {
  console.log('BIS message',message);
  server.send(getStringifyedObject({
    event: 'chat_message',
    message,
  }));
};
