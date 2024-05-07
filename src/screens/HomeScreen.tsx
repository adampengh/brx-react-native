import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useBrxPage } from '../hooks';
import { BrPage, BrComponent } from '@bloomreach/react-sdk';

import BRX_MAPPING from '../lib/bloomreach/mapping';
import {
  screenHeight,
  screenWidth,
} from '../lib/constants';


export const HomeScreen = ({ navigation }: any) => {
  const { brxConfiguration, brxPage } = useBrxPage();

  return !brxPage || !brxConfiguration ? (
    <Text style={styles.text}>Loading...</Text>
  ) : (
    <>
      <BrPage
        configuration={brxConfiguration}
        mapping={BRX_MAPPING}
        page={brxPage}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Button
              title="Go to Jane's profile"
              onPress={() => navigation.navigate('profile', { name: 'Jane' })}
            />
            <View>
              <BrComponent path='main' />
            </View>
          </ScrollView>
        </SafeAreaView>
      </BrPage>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? 'black' : 'whtie',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    height: screenHeight,
    marginHorizontal: 'auto',
    width: screenWidth,
    zIndex: 1,
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
