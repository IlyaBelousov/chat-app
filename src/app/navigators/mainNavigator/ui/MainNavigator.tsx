import {NavigationContainer} from '@react-navigation/native';
import {MainNavigatorConfig} from 'app/navigators/mainNavigator/config/mainNavigatorConfig';
import {useAuth} from 'shared/lib/useAuth';

export const MainNavigator = () => {
  const {isAuth} = useAuth();

  return (
    <NavigationContainer>
      {isAuth ? (
        <MainNavigatorConfig.Authorized />
      ) : (
        <MainNavigatorConfig.UnAuthorized />
      )}
    </NavigationContainer>
  );
};
