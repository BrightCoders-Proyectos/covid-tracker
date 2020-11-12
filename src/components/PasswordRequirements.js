import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PASS_REQUIREMENTS} from '../utils/Constants';
import {Colors} from '../utils/Colors';
import PropTypes from 'prop-types';

const PasswordRequirements = (props) => {
  const passwordTerms = ['firstTerm', 'secondTerm', 'thirdTerm', 'fourthTerm'];

  const showRequirements = () => {
    return passwordTerms.map((term) => {
      const color = props[term] ? Colors.red : Colors.black;
      const text = PASS_REQUIREMENTS[term];
      return (
        <Text key={term} style={[styles.textInfo, {color: color}]}>
          <Text style={styles.dash}>- </Text>
          {text}
        </Text>
      );
    });
  };

  return (
    <View style={styles.requirementsContainer}>
      <Text style={styles.textInfo}>La clave debe:</Text>
      <View style={styles.unorderedListContainer}>{showRequirements()}</View>
    </View>
  );
};

PasswordRequirements.propTypes = {
  firstTerm: PropTypes.bool.isRequired,
  secondTerm: PropTypes.bool.isRequired,
  thirdTerm: PropTypes.bool.isRequired,
  fourthTerm: PropTypes.bool.isRequired,
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
