import React from 'react';
import {Image, ImageStyle, StyleSheet, View, ViewStyle} from 'react-native';
import {DefaultAvatarIcon} from 'shared/assets/icons';
import {useTheme} from 'shared/lib';

const DEFAULT_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const UniversalAvatar = (props: {
  image?: string;
  containerStyle?: ViewStyle;
  containerSize?: number;
  defaultImageColor?: string;
}) => {
  const {colorScheme} = useTheme();
  const {
    image,
    containerStyle,
    containerSize = DEFAULT_SIZE,
    defaultImageColor,
  } = props;

  const iconSize = containerSize / 1.6;
  return image ? (
    <View style={[styles.container, containerStyle]}>
      <Image source={{uri: image}} />
    </View>
  ) : (
    <View style={[styles.container, containerStyle]}>
      <DefaultAvatarIcon
        width={iconSize}
        height={iconSize}
        fill={defaultImageColor || colorScheme.secondary}
      />
    </View>
  );
};

export default UniversalAvatar;
