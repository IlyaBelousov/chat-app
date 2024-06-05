import React, {createContext} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {ThemeProvider} from 'app/providers/ui';

import {initializeApp} from 'firebase/app';
import {firebaseConfig} from 'app/firebase/config';
import Config from 'react-native-config';
import {MainNavigator} from 'app/navigators/mainNavigator/ui';
import {AuthProvider} from 'app/providers/ui/AuthProvider';
import LoaderProvider from 'app/providers/ui/LoaderProvider';

const app = initializeApp(firebaseConfig);

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <LoaderProvider>
        <ThemeProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <MainNavigator />
        </ThemeProvider>
      </LoaderProvider>
    </AuthProvider>
  );
}
