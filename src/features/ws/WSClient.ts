import Config from 'react-native-config';

class WSClient extends WebSocket {
  static instance: WebSocket | null;
  url: string;
  constructor(url: string) {
    super(url);
    if (!WSClient.instance) {
      this.url = url;
      WSClient.instance = new WebSocket(url);
    }
  }
}

export const server = new WSClient(Config.URL || 'ws://localhost:3000');
