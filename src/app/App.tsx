import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'app/providers/ui';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'app/firebase/config';
import { MainNavigator } from 'app/navigators/mainNavigator/ui';
import LoaderProvider from 'app/providers/ui/LoaderProvider';
import { useAuthStore } from 'features/auth/store';
import { server } from 'features/ws';
import { messageEventHandlers } from 'features/ws/lib/messageHandler';
import { getParsedString } from 'shared/lib/utils';
import { setChatsRequest } from 'pages/Chats/api';

const app = initializeApp(firebaseConfig);

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const { getIsAuthFromStorage, getClientId } = useAuthStore();

  useEffect(() => {
    getClientId();
    getIsAuthFromStorage();
  }, []);

  const { clientId } = useAuthStore();

  useEffect(() => {
    if (clientId) {
      server.onopen = () => {
        setChatsRequest(clientId);
      };

      server.onmessage = (event) => {
        const message = getParsedString(event.data);

        const handlerFunction = messageEventHandlers[message.event];

        handlerFunction && handlerFunction(message);
      };
    }
  }, [clientId]);

  return (
    <LoaderProvider>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </ThemeProvider>
    </LoaderProvider>
  );
};
