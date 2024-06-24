import { server } from 'features/ws';
import { getStringifyedObject } from 'shared/lib/utils';

export const getChatRequest = (id: string) => {
  server.send(
    getStringifyedObject({
      event: 'chat',
      id,
    }),
  );
};
