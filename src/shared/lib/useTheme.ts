import {useContext} from 'react';
import {ThemeContext} from 'shared/lib/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKeys} from 'shared/constants';
import {ThemeKeys} from 'shared/types';

export const useTheme = () => {
  const {theme, setTheme, colorScheme} = useContext(ThemeContext);

  const toggleTheme = async () => {
    const prevTheme = (await AsyncStorage.getItem(
      LocalStorageKeys.theme,
    )) as ThemeKeys;

    const correctedTheme =
      prevTheme === ThemeKeys.dark ? ThemeKeys.light : ThemeKeys.dark;

    setTheme(correctedTheme);
    await AsyncStorage.setItem(LocalStorageKeys.theme, correctedTheme);
  };

  return {
    theme,
    colorScheme,
    toggleTheme,
  };
};
