import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from 'features/auth/store';

const Stack = createStackNavigator();

const NavComp = () => {
  const { auth } = useAuthStore();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={auth}
        style={{
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text
          style={{
            color: 'black',
          }}
        >
          ENTER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const UnAuthorizedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nav" component={NavComp} />
    </Stack.Navigator>
  );
};
