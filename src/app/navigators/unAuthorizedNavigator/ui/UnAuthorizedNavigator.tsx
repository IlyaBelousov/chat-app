import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from 'shared/lib/useAuth';

const Stack = createNativeStackNavigator();

const NavComp = () => {
  const {auth} = useAuth();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={auth}
        style={{
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <Text
          style={{
            color: 'black',
          }}>
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
