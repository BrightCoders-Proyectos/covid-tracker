import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

const PassTxtInput = (props) => {
  return (
    <View style={styles.inputsContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={[styles.titleText, styles.requiredText]}>
          {props.isRequired}
        </Text>
      </View>
      <TextInput style={styles.textInput} secureTextEntry={true} />
    </View>
  );
};

export default PassTxtInput;

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  textContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 20,
  },
  requiredText: {
    fontSize: 15,
    color: Colors.textGray,
    marginTop: 4,
    paddingRight: 8,
  },
  textInput: {
    marginTop: 5,
    paddingLeft: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.textGray,
    borderRadius: 10,
  },
});
