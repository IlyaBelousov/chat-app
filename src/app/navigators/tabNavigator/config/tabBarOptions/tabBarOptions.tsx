import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {TabScreen, TabsParamList} from 'shared/types';
import {RouteProp} from '@react-navigation/native';
import {CameraIcon, ChatIcon, ContactsIcon} from 'shared/assets/icons';
import {View} from 'react-native';
import {getHeightWithPercentage} from 'shared/constants';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'shared/lib';
const TAB_ICON_SIZE = 30;

const TAB_BAR_HEIGHT = getHeightWithPercentage(14);

type OptionsParams = {
  route: RouteProp<TabsParamList>;
  navigation: any;

  tabBarActiveTintColor: string;
};
export const getTabBarOptions = ({
  route,
  tabBarActiveTintColor,
}: OptionsParams): BottomTabNavigationOptions => {
  const {name} = route;

  const {colorScheme} = useTheme();

  const tabByRouteName = {
    [TabScreen.chats]: {
      tabBarIcon: ({color, focused}) => {
        const additionalIconStyle = focused
          ? {
              fill: color,
            }
          : {stroke: color};
        return (
          <ChatIcon
            {...additionalIconStyle}
            width={TAB_ICON_SIZE}
            height={TAB_ICON_SIZE}
          />
        );
      },
    },
    [TabScreen.camera]: {
      tabBarIcon: ({color, focused}) => (
        <View
          style={{
            height: TAB_ICON_SIZE * 2,
            width: TAB_ICON_SIZE * 2,
            borderRadius: (TAB_ICON_SIZE * 2) / 2,
            backgroundColor: 'aquamarine',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#06c0f8', '#06f8cc', colorScheme.primary]}
            style={{
              height: TAB_ICON_SIZE * 2,
              width: TAB_ICON_SIZE * 2,
              borderRadius: (TAB_ICON_SIZE * 2) / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CameraIcon
              fill={colorScheme.tertiary}
              width={TAB_ICON_SIZE}
              height={TAB_ICON_SIZE}
            />
          </LinearGradient>
        </View>
      ),
    },
    [TabScreen.contacts]: {
      tabBarIcon: ({color, focused}) => (
        <ContactsIcon
          fill={color}
          width={TAB_ICON_SIZE}
          height={TAB_ICON_SIZE}
        />
      ),
    },
  };

  return {
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: colorScheme.quaternary,
      height: TAB_BAR_HEIGHT,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopColor: colorScheme.secondary,
      borderRightColor: colorScheme.secondary,
      borderLeftColor: colorScheme.secondary,
    },
    headerShown: false,
    tabBarActiveTintColor,
    tabBarShowLabel: false,
    ...tabByRouteName[name],
  };
};
