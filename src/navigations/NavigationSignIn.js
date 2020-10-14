import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import {LOGIN} from '../utils/Constants';
import SignIn from '../screens/signInScreens/SignIn';

const SignInStack = createStackNavigator();

const NavigationSignIn = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="SignIn"
        options={{
          title: LOGIN,
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={SignIn}
      />
    </SignInStack.Navigator>
  );
};

export {NavigationSignIn};
