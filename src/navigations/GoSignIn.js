import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import {LOGIN, RESET_PASS_STEPS} from '../utils/Constants';
import SignIn from '../screens/signInScreens/SignIn';
import ForgotYourPassword from '../screens/signInScreens/ForgotYourPassword';

const SignInStack = createStackNavigator();

const GoSignIn = () => {
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
      <SignInStack.Screen
        name="ForgotYourPassword"
        options={{
          title: RESET_PASS_STEPS.step_one,
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={ForgotYourPassword}
      />
    </SignInStack.Navigator>
  );
};

export {GoSignIn};
