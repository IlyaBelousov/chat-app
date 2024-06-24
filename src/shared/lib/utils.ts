import { NavigationProp } from '@react-navigation/core/src/types';
import { VoidFunction } from 'shared/types';

export const getParsedString = (string: string) => {
  return JSON.parse(string);
};

export const getStringifyedObject = (object: Object) => {
  return JSON.stringify(object);
};

export const addNavigationListener = (params: {
  navigation: NavigationProp<ReactNavigation.RootParamList>
  event: 'focus' | 'blur' | 'state' | 'beforeRemove'
  callback: VoidFunction
}) => {
  const {
    navigation,
    event,
    callback,
  } = params;

  const unsubscribe = navigation.addListener(event, callback);

  return {
    unsubscribe,
  };
};
