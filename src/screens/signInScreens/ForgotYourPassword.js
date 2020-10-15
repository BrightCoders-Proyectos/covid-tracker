import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {RESET_PASSWORD, RESET_PASS_INSTRUCTIONS} from '../../utils/Constants';
import {TITLE_SIZE, INSTRUCTION_TXT_SIZE} from '../../utils/StylesConstants';

const ForgotYourPassword = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>{RESET_PASSWORD}</Text>
      <View>
        <Text style={styles.txtInstructions}>{RESET_PASS_INSTRUCTIONS}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgotYourPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: TITLE_SIZE,
    marginVertical: 25,
    textAlign: 'center',
  },
  txtInstructions: {
    fontSize: INSTRUCTION_TXT_SIZE,
    textAlign: 'justify',
    paddingHorizontal: 38,
  },
});
