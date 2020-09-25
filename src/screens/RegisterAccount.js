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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <EmailPassTxtInput
            id="email"
            value={data.email}
            title="Correo electrónico"
            isRequired={IS_REQUIRED}
            password={false}
          />
          <EmailPassTxtInput
            id="password"
            value={data.password}
            title="Clave"
            isRequired={IS_REQUIRED}
            password={true}
          />
          <PasswordRequirements />
          <EmailPassTxtInput
            id="validatePassword"
            value={data.validatePassword}
            title={REREQUEST_PASS}
            isRequired={IS_REQUIRED}
            password={true}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              console.log('Hello world');
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
