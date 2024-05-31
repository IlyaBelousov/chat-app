import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {TabNavigator} from 'app/navigators';
import {ThemeProvider} from 'app/providers/ui';

import {initializeApp} from 'firebase/app';
import {firebaseConfig} from 'app/firebase/config';
import Config from 'react-native-config';

const app = initializeApp(firebaseConfig);

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabNavigator />
    </ThemeProvider>
  );
}
