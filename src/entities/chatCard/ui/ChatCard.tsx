import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from 'shared/lib';
import { Chat } from 'src/entities/chatCard/types';
import UniversalAvatar from 'shared/ui/UniversalAvatar';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
    paddingBottom: 8,
    paddingLeft: 4,
  },
  chatName: {
    fontSize: 14,
    fontWeight: '700',
  },
  chatMessage: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
  },
});

const ChatImage = (props: { image?: string }) => {
  const { colorScheme } = useTheme();
  const { image } = props;
  return (
    <UniversalAvatar
      image={image}
      containerStyle={{
        backgroundColor: colorScheme.tertiary,
        borderRadius: 30,
      }}
    />
  );
};

const ChatContent = (props: { name: string; message?: string }) => {
  const { name, message } = props;

  const { colorScheme } = useTheme();
  return (
    <View
      style={{
        height: '100%',
        flex: 0.8,
        marginLeft: 12,
      }}
    >
      <Text
        style={[
          styles.chatName,
          {
            color: colorScheme.textPrimary,
          },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.chatMessage,
          {
            color: colorScheme.textPrimary,
          },
        ]}
      >
        {message}
      </Text>
    </View>
  );
};

const ChatInfo = (props: { date?: string }) => {
  const { date } = props;
  return (
    <View
      style={{
        flex: 0.2,
        height: '100%',
      }}
    >
      <Text>{date}</Text>
    </View>
  );
};

const ChatCard = (props: Chat) => {
  const {
    image, name, date, lastMessage, id, onPress,
  } = props;

  const { colorScheme } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => onPress({ name, id })}
      style={[
        styles.container,
        {
          backgroundColor: colorScheme.quaternary,
          borderBottomWidth: 1,
          borderBottomColor: colorScheme.secondary,
        },
      ]}
    >
      <ChatImage image={image} />
      <ChatContent name={name} message={lastMessage} />
      <ChatInfo date={date} />
    </TouchableOpacity>
  );
};

export default ChatCard;
