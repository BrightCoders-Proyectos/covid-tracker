import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import Welcome from '../screens/Welcome';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import RegisterAccount from '../screens/RegisterAccount';

const Stack = createStackNavigator();

const NavigationLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          title: 'Paso 1 de 4',
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        name="RegisterAccount"
        options={{
          title: 'Paso 2 de 4',
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={RegisterAccount}
      />
    </Stack.Navigator>
  );
};
export {NavigationLogin};
