import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {getTabBarOptions, tabsConfig} from 'app/navigators/tabNavigator/config';
import {TabsParamList} from 'shared/types';
import {useTheme} from 'shared/lib';

const Tab = createBottomTabNavigator<TabsParamList>();

const TabNavigator = () => {
  const {colorScheme} = useTheme();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default TabNavigator;
