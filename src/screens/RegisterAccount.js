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
  const [color, setColor] = useState({
    emailInput: false,
    passwordInput: false,
  });

  const handleOnChange = ({value, id}) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,50}$/;

  const isEmptyInput = () => {
    if (
      data.email === '' ||
      data.password === '' ||
      data.validatePassword === ''
    ) {
      console.log('Faltan campos por llenar');
    } else {
      alert('Campos completos');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <EmailPassTxtInput
            isCorrect={color.emailInput}
            id="email"
            value={data.email}
            title="Correo electrónico"
            isRequired={IS_REQUIRED}
            password={false}
            onChangeText={handleOnChange}
          />
          <EmailPassTxtInput
            isCorrect={color.passwordInput}
            id="password"
            value={data.password}
            title="Clave"
            isRequired={IS_REQUIRED}
            password={true}
            onChangeText={handleOnChange}
          />
          <PasswordRequirements />
          <EmailPassTxtInput
            isCorrect={color.passwordInput}
            id="validatePassword"
            value={data.validatePassword}
            title={REREQUEST_PASS}
            isRequired={IS_REQUIRED}
            password={true}
            onChangeText={handleOnChange}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              isEmptyInput();
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
