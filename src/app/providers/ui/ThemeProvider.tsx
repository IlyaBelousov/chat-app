import React, {FC, useEffect, useMemo, useState} from 'react';
import {ThemeContext} from 'shared/lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKeys} from 'shared/constants';
import {ThemeContextProps, ThemeKeys} from 'shared/types/themeTypes';
import {themeConfig} from 'shared/config';

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState(ThemeKeys.dark);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
      colorScheme: themeConfig[theme],
    }),
    [theme],
  );

  useEffect(() => {
    const getThemeFromStorage = async () => {
      const savedTheme = await AsyncStorage.getItem(LocalStorageKeys.theme);
      if (savedTheme) {
        setTheme(savedTheme as ThemeKeys);
      }
    };

    getThemeFromStorage();
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps as ThemeContextProps}>
      {children}
    </ThemeContext.Provider>
  );
};
