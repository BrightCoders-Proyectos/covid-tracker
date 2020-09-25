import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

const CodeConfirmTxtInput = (props) => {
  return (
    <TextInput
      id={props.id}
      value={props.value}
      style={styles.codeTxtInput}
      keyboardType="numeric"
      maxLength={1}
      onChangeText={(value) =>
        props.onChangeText({number: value, id: props.id})
      }
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
