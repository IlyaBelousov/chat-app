import React from 'react';
import {View} from 'react-native';

const ChatImage = () => {
  return (
    <View
      style={{
        width: 50,
        backgroundColor: 'green',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 30,
          backgroundColor: '#FFFFFF',
        }}
      />
    </View>
  );
};

const ChatContent = () => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'red',
        flex: 0.8,
      }}
    />
  );
};

const ChatInfo = () => {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: 'blue',
        height: '100%',
      }}
    />
  );
};

const ChatCard = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 4,
      }}>
      <ChatImage />
      <ChatContent />
      <ChatInfo />
    </View>
  );
};

export default ChatCard;
