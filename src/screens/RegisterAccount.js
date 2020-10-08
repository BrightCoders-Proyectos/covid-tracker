import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
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
  const [color, setColor] = useState({
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

    if (isEmailEmpty && isPasswordEmpty && isValidatePassEmpty) {
      validateOnPasswords();
      if (validateOnEmail() === true && validateOnPasswords() === true) {
        console.log('Exito');
      } else {
        console.log('Sin exito');
      }
    } else {
      setColor({...color, emailInput: true, passwordInput: true});
    }
  };

  const validateOnEmail = () => {
    const isEmailCorrect = validateEmail(data.email);

    if (isEmailCorrect) {
      setColor({...color, emailInput: false});
      return true;
    } else {
      setColor({...color, emailInput: true});
      return false;
    }
  };

  const validateOnPasswords = () => {
    const arePasswordsCorrect = validatePasswords(
      data.password,
      data.validatePassword,
    );
    if (arePasswordsCorrect.lengthPassword) {
      console.log('>= 8');
      setColor({...color, passwordInput: false, firsTerm: false});
      if (arePasswordsCorrect.lowerCase) {
        setColor({...color, passwordInput: false, secondTerm: false});

        console.log('>= 8 y minuscula');
        if (arePasswordsCorrect.caps) {
          setColor({...color, passwordInput: false, thirdTerm: false});
          console.log('>= 8 y minuscula y mayuscula');
          if (arePasswordsCorrect.number) {
            setColor({...color, passwordInput: false, fourthdTerm: false});
            console.log('>= 8 y minuscula y mayuscula y numero');
            if (data.password === data.validatePassword) {
              setColor({...color, passwordInput: false});
              return true;
            } else {
              setColor({...color, passwordInput: true});
              Alert.alert('Las contraseñas no coinciden');
              return false;
            }
          } else {|
            setColor({...color, passwordInput: true, fourthTerm: true});
            console.log('< 8, no minuscula, no mayusc, no num');
          }
        } else {
          setColor({...color, passwordInput: true, thirdTerm: true});
          console.log('< 8, no minuscula, no mayusc');
        }
      } else {
        setColor({...color, passwordInput: true, secondTerm: true});
        console.log('< 8 no minuscula');
      }
    } else {
      setColor({...color, passwordInput: true, firstTerm: true});
      console.log(' es < 8');
    }
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
