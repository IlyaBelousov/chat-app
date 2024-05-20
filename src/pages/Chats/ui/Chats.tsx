import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {ChatCard} from 'entities/chat/ui';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'shared/lib';

export const Chats = () => {
  const {toggleTheme, colorScheme, theme} = useTheme();
  return (
    <LinearGradient
      start={{x: 1.1, y: 0.9}}
      style={{
        flex: 1,
      }}
      colors={[colorScheme.primary, colorScheme.quaternary]}>
      <View
        style={{
          flex: 1,
          paddingTop: initialWindowMetrics?.insets.top,
          paddingHorizontal: 12,
        }}>
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            width: '100%',
            height: 60,
            backgroundColor: colorScheme.tertiary,
          }}>
          <Text>{theme}</Text>
        </TouchableOpacity>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        {/*<FlatList data={} renderItem={} />*/}
      </View>
    </LinearGradient>
  );
};
