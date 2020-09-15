import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../utils/Colors';
import {NEXT_MESSAGE} from '../utils/Constants';
import EmailTxtInput from '../components/EmailTxtInput';
import PassTxtInput from '../components/PassTxtInput';
import PasswordRequirements from '../components/PasswordRequirements';

const RegisterAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <EmailTxtInput title="Correo electrónico" isRequired="Requerido" />
          <PassTxtInput title="Clave" isRequired="Requerido" />
          <PasswordRequirements />
          <PassTxtInput
            title="Escribe de nuevo la clave"
            isRequired="Requerido"
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
