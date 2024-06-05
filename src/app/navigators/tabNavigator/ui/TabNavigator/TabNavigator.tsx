import React, {ReactNode, useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {getTabBarOptions, tabsConfig} from 'app/navigators/tabNavigator/config';
import {TabsParamList} from 'shared/types';
import {useTheme} from 'shared/lib';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useAuth} from 'shared/lib/useAuth';

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => {
  const {colorScheme} = useTheme();

  const {clientId} = useAuth();

  console.log('BIS clientId', clientId);

  const socket = useRef<WebSocket>();

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:3000');
    if (clientId) {
      socket.current.onopen = () => {
        const message = {
          event: 'connection',
          roomId: clientId,
        };

        socket.current?.send(JSON.stringify(message));
      };

      socket.current.onmessage = event => {
        const message = JSON.parse(event.data);

        console.log('BIS message', message);
      };
    }
  }, [clientId]);

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) =>
        getTabBarOptions({
          route,
          navigation,
          tabBarActiveTintColor: colorScheme.primary,
        })
      }>
      {Object.entries(tabsConfig).map(([tabName, screenProps]) => {
        return (
          <Tab.Screen
            key={tabName}
            name={tabName as keyof tabsConfig}
            component={screenProps?.component as ReactNode}
          />
        );
      })}
    </Tab.Navigator>
  );
};
