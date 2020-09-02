import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Stack = createStackNavigator();

const NavigationLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};
export {NavigationLogin};
