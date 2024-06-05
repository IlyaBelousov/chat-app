import React, {ReactNode, useEffect, useState} from 'react';
import {AuthContext} from 'shared/lib/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKeys} from 'shared/constants';
import uuid from 'react-native-uuid';
import {AuthProps} from 'shared/types';

export const AuthProvider = (props: {children: ReactNode}) => {
  const {children} = props;
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [clientId, setClientId] = useState<string>('');

  const defaultProps: AuthProps = {
    isAuth,
    setIsAuth,
    setIsAuthLoading,
    isAuthLoading,
    clientId,
  };

  useEffect(() => {
    setIsAuthLoading(true);
    const getIsAuthFromStorage = async () => {
      const isAuthFromStorage = await AsyncStorage.getItem(
        LocalStorageKeys.isAuth,
      );

      const parsedData = JSON.parse(isAuthFromStorage as string);
      if (parsedData !== '') {
        setIsAuth(parsedData);
      }

      setIsAuthLoading(false);
    };

    const getClientId = async () => {
      const clientIdFromStorage = await AsyncStorage.getItem(
        LocalStorageKeys.clientId,
      );
      console.log('BIS clientIdFromStorage', clientIdFromStorage);

      setClientId(clientIdFromStorage);
      if (!clientIdFromStorage) {
        const newClientId = uuid.v4();

        setClientId(newClientId as string);

        await AsyncStorage.setItem(
          LocalStorageKeys.clientId,
          newClientId,
        );
      }
    };
    getIsAuthFromStorage();
    getClientId();
  }, []);

  console.log('BIS clientId', clientId);

  return (
    <AuthContext.Provider value={defaultProps}>{children}</AuthContext.Provider>
  );
};
