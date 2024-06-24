import { create } from 'zustand';
import { chatsSlice } from 'pages/Chats/model/chatsSlice';

export const useChatsStore = create(chatsSlice);
