import { create } from 'zustand';
import { chatSlice } from 'features/chat/model/chatSlice';

export const useChatStore = create(chatSlice);

/*
 * Actions
 * */

const setChatToStore = (chat) => {
  useChatStore.getState().setChat(chat);
};

/*
 * Selectors
 * */
const chat = (state) => state.chat;

export const chatSelectors = {
  chat,
};

export const chatActions = {
  setChatToStore,
};
