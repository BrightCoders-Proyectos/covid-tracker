import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import EmailPassTxtInput from '../../components/EmailPassTxtInput';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <EmailPassTxtInput title="Correo electrónico" />
        <EmailPassTxtInput title="Clave" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
