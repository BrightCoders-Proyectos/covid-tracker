import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RESET_YOUR_PASSWORD} from '../utils/Constants';
import PropTypes from 'prop-types';

const ConfirmEmailCode = (props) => {
  return (
    <View>
      <Text style={styles.textInstruction}>
        {RESET_YOUR_PASSWORD.instructions}{' '}
        <Text style={styles.userEmail}>{props.usersEmail}</Text>
      </Text>
    </View>
  );
};

ConfirmEmailCode.prototype = {
  usersEmail: PropTypes.string.isRequired,
};

export default ConfirmEmailCode;

const styles = StyleSheet.create({
  textInstruction: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  userEmail: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
