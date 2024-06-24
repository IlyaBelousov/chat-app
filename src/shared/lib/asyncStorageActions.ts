import { LocalStorageKeys } from 'shared/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageActions = {
  getItem: async (name: LocalStorageKeys) => {
    await AsyncStorage.getItem(name);
  },

  setItem: async (name: LocalStorageKeys, value: string) => {
    await AsyncStorage.setItem(name, value);
  },

  clearItem: async (name: LocalStorageKeys) => {
    await AsyncStorage.setItem(name, '');
  },
};
