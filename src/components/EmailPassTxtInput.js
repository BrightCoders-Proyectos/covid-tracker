import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

const EmailPassTxtInput = (props) => {
  const wrong = props.isCorrect ? 'red' : Colors.textGray;
  return (
    <View style={styles.inputsContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={[styles.titleText, styles.requiredText, {color: wrong}]}>
          {props.isRequired}
        </Text>
      </View>
      <TextInput
        id={props.id}
        style={[styles.textInput, {borderColor: wrong}]}
        secureTextEntry={props.password}
        keyboardType="email-address"
        onChangeText={(value) =>
          props.onChangeText({
            value: value,
            id: props.id,
          })
        }
      />
    </View>
  );
};

export default EmailPassTxtInput;

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
