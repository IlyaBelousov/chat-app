export type AuthProps = {
  isAuth: boolean;
  isAuthLoading: boolean;
  setIsAuthLoading: (value: boolean) => void;
  setIsAuth: (value: boolean) => void;
  clientId: string;
};
