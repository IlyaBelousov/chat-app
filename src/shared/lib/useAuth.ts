import {useContext, useEffect, useState} from 'react';
import {AuthContext} from 'shared/lib/authContext';
import {LocalStorageKeys} from 'shared/constants';
import {useAsyncStorage} from 'shared/lib/useAsyncStorage';

export const useAuth = () => {
  const {isAuth, setIsAuth, setIsAuthLoading, clientId, isAuthLoading} =
    useContext(AuthContext);
  const {setItem} = useAsyncStorage();

  const auth = async () => {
    setIsAuthLoading(true);
    await setItem(LocalStorageKeys.isAuth, 'true');
    setIsAuth(true);
    setIsAuthLoading(false);
  };

  return {
    auth,
    isAuth,
    isAuthLoading,
    setIsAuthLoading,
    clientId,
  };
};
