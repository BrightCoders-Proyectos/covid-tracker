import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import Welcome from '../screens/Welcome';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Stack = createStackNavigator();

const NavigationLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
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
    </Stack.Navigator>
  );
};
export {NavigationLogin};
