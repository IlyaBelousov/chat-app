import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const getHeightWithPercentage = (percentage: number) => {
  return (percentage / 100) * windowHeight;
};
export const getWidthWithPercentage = (percentage: number) => {
  return (percentage / 100) * windowWidth;
};
