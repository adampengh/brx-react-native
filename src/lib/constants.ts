import { Dimensions, Platform } from 'react-native';

// https://gs.statcounter.com/screen-resolution-stats/mobile/north-america
// using most common as baseline
const baseWidth = 393;
const baseHeight = 852;
const screenWidth =
  Platform.OS === 'web' ? baseWidth : Dimensions.get('screen').width;
const screenHeight =
  Platform.OS === 'web' ? baseHeight : Dimensions.get('screen').height;

const defaultFontSize = 16;

const scale = (size: number) => Math.round((screenWidth / baseWidth) * size);
export {
  defaultFontSize,
  scale,
  screenHeight,
  screenWidth,
};
