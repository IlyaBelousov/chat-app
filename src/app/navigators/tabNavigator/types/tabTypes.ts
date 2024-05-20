import {TabScreen} from 'shared/types';
import {ReactNode} from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export type TabScreenProps = {
  name: keyof TabScreen;
  component?: ReactNode;
  options?: BottomTabNavigationOptions;
};
