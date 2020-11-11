import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  RESET_YOUR_PASSWORD,
  DONT_RECEIVE_YOUR_CODE,
  IS_REQUIRED,
  RESET_PASSWORD,
  NEW_PASSWORD,
  KEYBOARD_TYPE,
} from '../../utils/Constants';
import {TITLE_SIZE, TITLE_MARGIN_VERTICAL} from '../../utils/StylesConstants';
import {Colors} from '../../utils/Colors';
import ConfirmEmailCode from '../../components/ConfirmEmailCode';
import CodeConfirmTxtInput from '../../components/CodeConfirmTxtInput';
import EmailPassTxtInput from '../../components/EmailPassTxtInput';
import PasswordRequirements from '../../components/PasswordRequirements';

const ResetPassConfirm = ({route, navigation}) => {
  const {usersEmail} = route.params;
  const fieldId = ['fieldOne', 'fieldTwo', 'fieldThree', 'fieldFour'];

  const showInputsCode = () => {
    return fieldId.map((field) => {
      return <CodeConfirmTxtInput key={field} id={field} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{RESET_YOUR_PASSWORD.title}</Text>
        <View style={styles.codeConfirmContainer}>
          <ConfirmEmailCode usersEmail={usersEmail} />
          <View style={styles.codeConfirmInputsContainer}>
            {showInputsCode()}
          </View>
        </View>
        <View style={styles.requireNewCodeContainer}>
          <Text style={styles.newCodeInstructions}>
            {DONT_RECEIVE_YOUR_CODE.title}
          </Text>
          <Text style={styles.newCodeInstructions}>
            {DONT_RECEIVE_YOUR_CODE.instructions}
          </Text>
          <TouchableOpacity
            style={styles.sendNewCodeBtn}
            onPress={() => console.log('Hello world')}>
            <Text style={styles.sendNewCodeTxt}>
              {DONT_RECEIVE_YOUR_CODE.button}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.passInputsContainer}>
          <EmailPassTxtInput
            title={NEW_PASSWORD.firstRequirement}
            isRequired={IS_REQUIRED.toLocaleLowerCase()}
            password={true}
            keyboard={KEYBOARD_TYPE.default}
          />
          <PasswordRequirements />
          <EmailPassTxtInput
            title={NEW_PASSWORD.secondRequirement}
            isRequired={IS_REQUIRED.toLocaleLowerCase()}
            password={true}
            keyboard={KEYBOARD_TYPE.default}
          />
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => {
              navigation.navigate('SuccessPassReset');
            }}>
            <Text style={styles.resetBtnText}>{RESET_PASSWORD}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: TITLE_SIZE,
    marginVertical: TITLE_MARGIN_VERTICAL,
    textAlign: 'center',
  },
  codeConfirmContainer: {
    flex: 2,
  },
  codeConfirmInputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  requireNewCodeContainer: {
    flex: 1,
    paddingLeft: 35,
    paddingVertical: 15,
  },
  newCodeInstructions: {
    fontSize: 15,
  },
  sendNewCodeBtn: {
    marginTop: 10,
  },
  sendNewCodeTxt: {
    fontSize: 15,
    color: Colors.btnsColor,
    fontWeight: 'bold',
  },
  passInputsContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  resetBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  resetBtnText: {
    color: Colors.white,
    fontSize: 22,
    marginVertical: 10,
  },
});
