import { AuthState } from 'features/auth/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageKeys } from 'shared/constants';
import uuid from 'react-native-uuid';
import { AsyncStorageActions } from 'shared/lib/asyncStorageActions';

export const authSlice = (set): AuthState => ({
  isAuth: false,
  isAuthLoading: false,
  clientId: '',
  setIsAuthLoading: (value) => set(() => ({
    isAuthLoading: value,
  })),
  setIsAuth: (value) => set(() => ({
    isAuth: value,
  })),
  setClientId: (value) => set(() => ({
    clientId: value,
  })),
  getClientId: () => set(async (state) => {
    const clientIdFromStorage = await AsyncStorage.getItem(
      LocalStorageKeys.clientId,
    );

    state.setClientId(clientIdFromStorage);
    if (!clientIdFromStorage) {
      const newClientId = uuid.v4();

      state.setClientId(newClientId as string);

      await AsyncStorage.setItem(
        LocalStorageKeys.clientId,
        newClientId as string,
      );
    }
  }),
  getIsAuthFromStorage: () => set(async (state) => {
    state.setIsAuthLoading(true);
    const isAuthFromStorage = await AsyncStorage.getItem(
      LocalStorageKeys.isAuth,
    );

    const parsedData = JSON.parse(isAuthFromStorage as string);
    if (parsedData !== '') {
      state.setIsAuth(parsedData);
    }

    state.setIsAuthLoading(false);
  }),
  auth: () => set(async (state) => {
    state.setIsAuthLoading(true);
    await AsyncStorageActions.setItem(LocalStorageKeys.isAuth, 'true');
    state.setIsAuth(true);
    state.setIsAuthLoading(false);
  }),
});
