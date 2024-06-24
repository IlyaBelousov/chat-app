import {
  FlatList, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { useTheme } from 'shared/lib';
import { useChatsStore } from 'pages/Chats/model/useChatsStore';
import { useNavigation } from '@react-navigation/native';
import { ChatCard } from 'entities/chatCard/ui';
import { getChatRequest } from 'features/chat/api';
import { useEffect } from "react";

export const Chats = () => {
  const { toggleTheme, colorScheme, theme } = useTheme();
  const navigation = useNavigation();
  const onChatPress = async (chat: any) => {
    getChatRequest(chat.id);
    navigation.navigate('ChatNavigator', {
      chatName: chat.name,
    });
  };

  const chats = useChatsStore((state) => state.chats);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: initialWindowMetrics?.insets.top,
        paddingHorizontal: 12,
        backgroundColor: colorScheme.quaternary,
      }}
    >
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          width: '100%',
          height: 60,
          backgroundColor: colorScheme.tertiary,
        }}
      >
        <Text>{theme}</Text>
      </TouchableOpacity>
      <ScrollView>
        {chats.map((chat) => (
          <ChatCard
            key={chat.id}
            id={chat.id}
            name={chat.name}
            onPress={onChatPress}
          />
        ))}
      </ScrollView>
      {/* <FlatList data={} renderItem={} /> */}
    </View>
  );
};
