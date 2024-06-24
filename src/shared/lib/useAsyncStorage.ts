import { useContext } from 'react';
import { LoaderContext } from 'shared/lib/loaderContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageKeys } from 'shared/constants';

export const useAsyncStorage = () => {
  const getItem = async (name: LocalStorageKeys) => {
    await AsyncStorage.getItem(name);
  };

  const setItem = async (name: LocalStorageKeys, value: string) => {
    await AsyncStorage.setItem(name, value);
  };

  const clearItem = async (name: LocalStorageKeys) => {
    await AsyncStorage.setItem(name, '');
  };

  return {
    getItem,
    setItem,
    clearItem,
  };
};
