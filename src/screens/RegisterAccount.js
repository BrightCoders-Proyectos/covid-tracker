import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../utils/Colors';
import {
  isEmptyInput,
  validateEmail,
  validatePasswords,
} from '../utils/validators';
import {
  NEXT_MESSAGE,
  IS_REQUIRED,
  REREQUEST_PASS,
  EMAIL,
  PASSWORD,
  KEYBOARD_TYPE,
} from '../utils/Constants';
import EmailPassTxtInput from '../components/EmailPassTxtInput';
import PasswordRequirements from '../components/PasswordRequirements';

const initialState = {
  email: '',
  password: '',
  validatePassword: '',
};

const RegisterAccount = ({navigation}) => {
  const [data, setData] = useState(initialState);
  const [color, setWrongTerm] = useState({
    emailInput: false,
    passwordInput: false,
    firstTerm: false,
    secondTerm: false,
    thirdTerm: false,
    fourthTerm: false,
  });

  const handleOnChange = ({value, id}) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const validateOnInputs = () => {
    const isEmailEmpty = isEmptyInput(data.email);
    const isPasswordEmpty = isEmptyInput(data.password);
    const isValidatePassEmpty = isEmptyInput(data.validatePassword);
    const isUserPasswordValidation = validateOnPasswords();
    if (isEmailEmpty && isPasswordEmpty && isValidatePassEmpty) {
      if (validateOnEmail() === true && isUserPasswordValidation === false) {
        navigation.navigate('ConfirmEmail', {
          usersEmail: data.email,
        });
      }
    } else {
      setWrongTerm({...color, emailInput: true, passwordInput: true});
    }
  };

  const validateOnEmail = () => {
    const isEmailCorrect = validateEmail(data.email);
    return isEmailCorrect;
  };

  const validateOnPasswords = () => {
    const {lengthPassword, lowerCase, caps, number} = validatePasswords(
      data.password,
      data.validatePassword,
    );
    const isPasswordInputWrong =
      !lengthPassword ||
      !lowerCase ||
      !caps ||
      !number ||
      !(data.password === data.validatePassword);

    setWrongTerm((prevState) => ({
      ...prevState,
      emailInput: validateEmail(),
      passwordInput: !lengthPassword,
      firstTerm: !lengthPassword,
      secondTerm: !lowerCase,
      thirdTerm: !caps,
      fourthTerm: !number,
    }));
    return isPasswordInputWrong;
  };

  const onSubmit = () => {
    validateOnInputs();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <EmailPassTxtInput
            title={EMAIL}
            isRequired={IS_REQUIRED}
            password={false}
            keyboard={KEYBOARD_TYPE.email}
            isCorrect={color.emailInput}
            id="email"
            value={data.email}
            onChangeText={handleOnChange}
          />
          <EmailPassTxtInput
            title={PASSWORD}
            isRequired={IS_REQUIRED}
            password={true}
            keyboard={KEYBOARD_TYPE.default}
            isCorrect={color.passwordInput}
            id="password"
            value={data.password}
            onChangeText={handleOnChange}
          />
          <PasswordRequirements
            firstTerm={color.firstTerm}
            secondTerm={color.secondTerm}
            thirdTerm={color.thirdTerm}
            fourthTerm={color.fourthTerm}
          />
          <EmailPassTxtInput
            title={REREQUEST_PASS}
            isRequired={IS_REQUIRED}
            password={true}
            keyboard={KEYBOARD_TYPE.default}
            isCorrect={color.passwordInput}
            id="validatePassword"
            value={data.validatePassword}
            onChangeText={handleOnChange}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              onSubmit();
            }}>
            <Text style={styles.nextBtnText}>{NEXT_MESSAGE}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginVertical: 25,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  nextBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  nextBtnText: {
    color: Colors.white,
    fontSize: 22,
    marginVertical: 10,
  },
});
