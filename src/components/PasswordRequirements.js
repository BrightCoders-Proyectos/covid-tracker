import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PASS_REQUIREMENTS} from '../utils/Constants';

const PasswordRequirements = () => {
  return (
    <View style={styles.requirementsContainer}>
      <Text style={styles.textInfo}>La clave debe:</Text>
      <View style={styles.unorderedListContainer}>
        <Text style={styles.textInfo}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.firstTerm}
        </Text>
        <Text style={styles.textInfo}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.secondTerm}
        </Text>
        <Text style={styles.textInfo}>
          <Text style={styles.dash}>-</Text> {PASS_REQUIREMENTS.thirdTerm}
        </Text>
        <Text style={styles.textInfo}>
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
  },
  unorderedListContainer: {
    paddingHorizontal: 10,
  },
  dash: {
    fontWeight: 'bold',
  },
});
