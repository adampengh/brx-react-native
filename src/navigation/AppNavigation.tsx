import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BrxContentScreen, HomeScreen, ProfileScreen } from '../screens';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  const linking = {
    prefixes: [],
    config: {
      screens: {
        home: {
          path: '/',
        },
        profile: {
          path: '/profile',
        },
        brxContent: {
          path: '/:id'
        }
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='profile' component={ProfileScreen} />
        <Stack.Screen name='brxContent' component={BrxContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
