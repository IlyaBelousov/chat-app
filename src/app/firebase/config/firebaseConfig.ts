import Config from 'react-native-config';

export const firebaseConfig = {
  apiKey: Config.FB_API_KEY,
  authDomain: Config.FB_AUTH_DOMAIN,
  projectId: Config.FB_PROJECT_ID,
  storageBucket: Config.FB_STORAGE_BUCKET,
  messagingSenderId: Config.FB_MESSAGE_SENDER,
  appId: Config.FB_APP_ID,
};
