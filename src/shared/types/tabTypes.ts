export enum TabScreen {
  chats = 'chats',
  call = 'call',
  addContacts = 'addContacts',
  camera = 'camera',
  contacts = 'contacts',
}

export type TabsParamList = {
  [TabScreen.chats]: undefined;
  [TabScreen.call]: undefined;
  [TabScreen.addContacts]: undefined;
  [TabScreen.camera]: undefined;
  [TabScreen.contacts]: undefined;
};
