import { TabNavigator } from 'app/navigators/tabNavigator/ui';
import { UnAuthorizedNavigator } from 'app/navigators/unAuthorizedNavigator/ui';
import { ChatNavigator } from 'app/navigators/chatNavigator/ui';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainNavigatorConfig = {
  Authorized: () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        name="ChatNavigator"
        component={ChatNavigator}
      />
    </Stack.Navigator>
  ),
  UnAuthorized: UnAuthorizedNavigator,
};
