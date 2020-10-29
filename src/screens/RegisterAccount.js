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
import {NEXT_MESSAGE, IS_REQUIRED, REREQUEST_PASS} from '../utils/Constants';
import EmailPassTxtInput from '../components/EmailPassTxtInput';
import PasswordRequirements from '../components/PasswordRequirements';

const initialState = {
  email: '',
  password: '',
  validatePassword: '',
};

const RegisterAccount = () => {
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
        console.log('Exito');
        navigation.navigate('ConfirmEmail', {
          usersEmail: 'sent.email@domain.com',
        });
      } else {
        console.log('Sin exito');
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
    console.log('validateOnPasswords -> lengthPassword', lengthPassword);
    const isPasswordInputWrong =
      !lengthPassword ||
      !lowerCase ||
      !caps ||
      !number ||
      !(data.password === data.validatePassword);

    setWrongTerm((prevState) => ({
      ...prevState,
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

const RegisterAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <EmailPassTxtInput
            isCorrect={color.emailInput}
            id="email"
            keyboard="email-address"
            value={data.email}
            title="Correo electrónico"
            isRequired={IS_REQUIRED}
            password={false}
            onChangeText={handleOnChange}
          />
          <EmailPassTxtInput
            isCorrect={color.passwordInput}
            id="password"
            keyboard="default"
            value={data.password}
            title="Clave"
            isRequired={IS_REQUIRED}
            password={true}
            onChangeText={handleOnChange}
          />
          <PasswordRequirements
            firstTerm={color.firstTerm}
            secondTerm={color.secondTerm}
            thirdTerm={color.thirdTerm}
            fourthTerm={color.fourthTerm}
          />
          <EmailPassTxtInput
            isCorrect={color.passwordInput}
            id="validatePassword"
            keyboard="default"
            value={data.validatePassword}
            title={REREQUEST_PASS}
            isRequired={IS_REQUIRED}
            password={true}
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
