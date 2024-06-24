import { NavigationContainer } from '@react-navigation/native';
import { MainNavigatorConfig } from 'app/navigators/mainNavigator/config/mainNavigatorConfig';
import { useAuthStore } from 'features/auth/store';

export const MainNavigator = () => {
  const { isAuth } = useAuthStore();

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
