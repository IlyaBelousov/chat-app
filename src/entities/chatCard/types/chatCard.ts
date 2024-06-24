export type Chat = {
  id: string;
  name: string;
  image?: string;
  lastMessage?: string;
  date?: string;

  onPress: (chat: any) => void;
};
