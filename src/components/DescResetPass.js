import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RESET_PASS_INSTRUCTIONS} from '../utils/Constants';
import {INSTRUCTION_TXT_SIZE} from '../utils/StylesConstants';

const DescResetPass = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.txtInstructions}>{RESET_PASS_INSTRUCTIONS}</Text>
    </View>
  );
};

export default DescResetPass;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 25,
    marginBottom: 30,
  },
  txtInstructions: {
    fontSize: INSTRUCTION_TXT_SIZE,
    textAlign: 'justify',
    paddingHorizontal: 38,
  },
});
