import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {TabNavigator} from 'app/navigators';
import {ThemeProvider} from 'app/providers/ui';

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabNavigator />
    </ThemeProvider>
  );
}
