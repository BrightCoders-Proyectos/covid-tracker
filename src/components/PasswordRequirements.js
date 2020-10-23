import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PASS_REQUIREMENTS} from '../utils/Constants';
import {Colors} from '../utils/Colors';

const PasswordRequirements = (props) => {
  const firstTermWrong = props.firstTerm ? Colors.red : Colors.black;
  const secondTermWrong = props.secondTerm ? Colors.red : Colors.black;
  const thirdTermWrong = props.thirdTerm ? Colors.red : Colors.black;
  const fourthTermWrong = props.fourthTerm ? Colors.red : Colors.black;
  return (
    <View style={styles.requirementsContainer}>
      <Text style={styles.textInfo}>La clave debe:</Text>
      <View style={styles.unorderedListContainer}>
        <Text style={[styles.textInfo, {color: firstTermWrong}]}>
          <Text style={styles.dash}>- </Text>
          {PASS_REQUIREMENTS.firstTerm}
        </Text>
        <Text style={[styles.textInfo, {color: secondTermWrong}]}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.secondTerm}
        </Text>
        <Text style={[styles.textInfo, {color: thirdTermWrong}]}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.thirdTerm}
        </Text>
        <Text style={[styles.textInfo, {color: fourthTermWrong}]}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.fourthTerm}
        </Text>
      </View>
    </View>
  );
};

export default PasswordRequirements;

const styles = StyleSheet.create({
  requirementsContainer: {
    flex: 1,
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  textInfo: {
    fontSize: 15,
    // color: Colors.red
  },
  unorderedListContainer: {
    paddingHorizontal: 10,
  },
  dash: {
    fontWeight: 'bold',
  },
});
