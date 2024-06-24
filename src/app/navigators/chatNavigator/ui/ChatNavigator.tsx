import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat } from 'features/chat/ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useChatStore } from 'features/chat/model';

const Stack = createNativeStackNavigator();
export const ChatNavigator = () => {
  const route = useRoute();

  const { params } = route;

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: params?.chatName,
        }}
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
};
