import { VoidFunction } from 'shared/types';

export type AuthState = {
  isAuth: boolean;
  isAuthLoading: boolean;
  setIsAuthLoading: (value: boolean) => void;
  setIsAuth: (value: boolean) => void;
  clientId: string;

  setClientId: (value: string) => void;

  getClientId: VoidFunction;
  getIsAuthFromStorage: VoidFunction;
  auth: VoidFunction;
};
