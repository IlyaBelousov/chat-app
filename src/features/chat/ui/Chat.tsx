import React, { useEffect, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useChatStore } from 'features/chat/model';
import { chatSelectors } from 'features/chat/model/useChatStore';
import { sendMessage } from 'features/chat/api';

export const Chat = () => {
  const [text, setText] = useState('');

  const chat = useChatStore(chatSelectors.chat);

  const height = useHeaderHeight();

  const onSendMessage = () => {
    sendMessage(text);
    setText('');
  };

  if (chat === null) {
    return <Text> Loading ...</Text>;
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        backgroundColor: 'green',
        flexGrow: 1,
        // justifyContent: 'space-between',
      }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: 'blue' }}>
        {chat.messages.map((message) => (
          <Text key={message.toString()}>{message}</Text>
        ))}
      </ScrollView>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: 'white',
          }}
        />

        <Button title="SEND" onPress={onSendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};
