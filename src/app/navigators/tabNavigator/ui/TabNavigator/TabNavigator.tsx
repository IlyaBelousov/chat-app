import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getTabBarOptions, tabsConfig } from 'app/navigators/tabNavigator/config';
import { TabsParamList } from 'shared/types';
import { useTheme } from 'shared/lib';

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => {
  const { colorScheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => getTabBarOptions({
        route,
        navigation,
        tabBarActiveTintColor: colorScheme.primary,
      })}
    >
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
