import { StyleSheet } from 'react-native';
import { defaultFontSize, scale, screenWidth } from '../lib/constants';

const appStyles = StyleSheet.create({
  screen: {
    flex: 1,
    width: screenWidth,
  },
  container: {
    width: '100%',
    paddingTop: 5,
    paddingHorizontal: 8,
  },
  column: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 8,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrollView: { position: 'relative', marginTop: 10, marginBottom: 60 },
  text: {
    fontSize: scale(defaultFontSize),
  },
});

export default appStyles;
