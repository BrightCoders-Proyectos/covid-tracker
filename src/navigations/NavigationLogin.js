import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import {NavigationSignIn} from './NavigationSignIn';
import Welcome from '../screens/Welcome';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import RegisterAccount from '../screens/RegisterAccount';
import ConfirmEmail from '../screens/ConfirmEmail';
import ContactInformation from '../screens/ContactInformation';

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
      <Stack.Screen
        name="ConfirmEmail"
        options={{
          title: 'Paso 3 de 4',
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={ConfirmEmail}
      />
      <Stack.Screen
        name="ContactInformation"
        options={{
          title: 'Paso 4 de 4',
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={ContactInformation}
      />
      <Stack.Screen
        name="NavigationSignIn"
        component={NavigationSignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export {NavigationLogin};
