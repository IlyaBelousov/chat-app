import { Chats } from 'pages/Chats';
import { Camera } from 'pages/Camera';
import { Contacts } from 'pages/Contacts';
import { TabScreen } from 'shared/types';
import { TabScreenProps } from 'app/navigators';

export const tabsConfig: Record<TabScreen, TabScreenProps> = {
  [TabScreen.chats]: {
    name: TabScreen.chats,
    component: Chats,
  },
  // [TabScreen.call]: {
  //   name: TabScreen.call,
  //   component: Call,
  // },
  // [TabScreen.addContacts]: {
  //   name: TabScreen.addContacts,
  //   component: AddContacts,
  // },
  [TabScreen.camera]: {
    name: TabScreen.camera,
    component: Camera,
  },
  [TabScreen.contacts]: {
    name: TabScreen.contacts,
    component: Contacts,
  },
};
