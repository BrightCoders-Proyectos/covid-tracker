import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

const CodeConfirmTxtInput = () => {
  return (
    <TextInput
      style={styles.codeTxtInput}
      keyboardType="numeric"
      maxLength={1}
    />
  );
};

export default CodeConfirmTxtInput;

const styles = StyleSheet.create({
  codeTxtInput: {
    width: '15%',
    height: 65,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.bordersInputs,
    borderRadius: 10,
  },
});
