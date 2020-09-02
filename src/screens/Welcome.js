import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const welcome = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Hello world</Text>
      <Button
        title="go privacy"
        onPress={() => {
          navigation.navigate('PrivacyPolicy');
        }}
      />
    </SafeAreaView>
  );
};

export default welcome;
