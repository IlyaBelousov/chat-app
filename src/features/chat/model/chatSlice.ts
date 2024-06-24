import { Chat } from 'src/entities/chatCard/types';
import { VoidFunction } from 'shared/types';

type ChatState = {
  chat: Chat | null;
  setChat: (data: { chats: Chat[] }) => void;
  clearChat: VoidFunction
};

export const chatSlice = (set): ChatState => ({
  chat: null,
  setChat: (chat) => set(() => ({
    chat,
  })),
  clearChat: () => set(() => ({
    chat: null,
  })),
});
