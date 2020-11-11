import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../utils/Colors';
import {LOGIN, RESET_PASS_STEPS, SUCCESS_PASS_RESET} from '../utils/Constants';
import SignIn from '../screens/signInScreens/SignIn';
import ForgotYourPassword from '../screens/signInScreens/ForgotYourPassword';
import ResetPassConfirm from '../screens/signInScreens/ResetPassConfirm';
import SuccessPassRest from '../screens/signInScreens/SuccessPassReset';

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
      <SignInStack.Screen
        name="ResetPassConfirm"
        options={{
          title: RESET_PASS_STEPS.step_two,
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={ResetPassConfirm}
      />
      <SignInStack.Screen
        name="SuccessPassReset"
        options={{
          title: SUCCESS_PASS_RESET.header,
          headerLeft: null,
          headerStyle: {
            backgroundColor: Colors.btnsColor,
          },
          headerTitleAlign: 'center',
        }}
        component={SuccessPassRest}
      />
    </SignInStack.Navigator>
  );
};

export {GoSignIn};
