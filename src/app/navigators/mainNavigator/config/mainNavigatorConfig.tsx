import {TabNavigator} from 'app/navigators/tabNavigator/ui';
import {UnAuthorizedNavigator} from 'app/navigators/unAuthorizedNavigator/ui';

export const MainNavigatorConfig = {
  Authorized: TabNavigator,
  UnAuthorized: UnAuthorizedNavigator,
};
