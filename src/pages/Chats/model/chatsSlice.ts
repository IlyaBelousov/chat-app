import { Chat } from 'src/entities/chatCard/types';

type ChatsState = {
  chats: Chat[] | [];
  setChats: (data: { chats: Chat[] }) => void;
};

export const chatsSlice = (set): ChatsState => ({
  chats: [],
  setChats: (data) => set(() => ({
    chats: data.chats,
  })),
});
