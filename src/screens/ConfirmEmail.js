import React, {useEffect, useState} from 'react';
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
import {NEXT_MESSAGE} from '../utils/Constants';
import CodeConfirmTxtInput from '../components/CodeConfirmTxtInput';

const ConfirmEmail = ({route}) => {
  const {usersEmail} = route.params;
  let codeConfirmation = ['1', '2', '3', '4'];
  let auxiliarCounter = 0;
  const [formData, setFormData] = useState({
    fieldOne: '',
    fieldTwo: '',
    fieldThree: '',
    fieldFour: '',
  });

  useEffect(() => {
    setFormData({
      fieldOne: '',
      fieldTwo: '',
      fieldThree: '',
      fieldFour: '',
    });
  }, []);

  const handleOnChange = ({number, id}) => {
    setFormData({
      ...formData,
      [id]: number,
    });
  };

  const resetForm = () => {
    setFormData({
      fieldOne: '',
      fieldTwo: '',
      fieldThree: '',
      fieldFour: '',
    });
  };

  const checkCodeConfirmation = () => {
    if (
      formData.fieldOne === '' &&
      formData.fieldTwo === '' &&
      formData.fieldThree === '' &&
      formData.fieldFour === ''
    ) {
      Alert.alert('No has escrito el codigo ');
    } else {
      let userCodeConfirmation = [
        formData.fieldOne,
        formData.fieldTwo,
        formData.fieldThree,
        formData.fieldFour,
      ];
      for (let i = 0; i < 4; i++) {
        if (codeConfirmation[i] === userCodeConfirmation[i]) {
          auxiliarCounter++;
        }
      }
      if (auxiliarCounter === 4) {
        Alert.alert('Codigo correcto');
      } else {
        Alert.alert('El codigo es incorrecto');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Confirmación de correo</Text>
        <Text style={styles.textInstruction}>
          Por favor ingresa el código enviado a{' '}
          <Text style={[styles.textInstruction, styles.userEmail]}>
            {usersEmail}
          </Text>
        </Text>
        <View style={styles.inputsContainer}>
          <CodeConfirmTxtInput
            id="fieldOne"
            value={formData.fieldOne}
            onChangeText={handleOnChange}
          />
          <CodeConfirmTxtInput
            id="fieldTwo"
            value={formData.fieldTwo}
            onChangeText={handleOnChange}
          />
          <CodeConfirmTxtInput
            id="fieldThree"
            value={formData.fieldThree}
            onChangeText={handleOnChange}
          />
          <CodeConfirmTxtInput
            id="fieldFour"
            value={formData.fieldFour}
            onChangeText={handleOnChange}
          />
        </View>
        <View style={styles.requireNewCodeContainer}>
          <Text style={styles.newCodeInstructions}>
            ¿No recibiste el código? {'\n'} Revisa tu carpeta de correos no
            deseados
          </Text>
          <TouchableOpacity
            style={styles.sendNewCodeBtn}
            onPress={() => resetForm()}>
            <Text style={styles.sendNewCodeTxt}>Enviar código de nuevo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => checkCodeConfirmation()}>
          <Text style={styles.nextMessageTxt}>{NEXT_MESSAGE}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginVertical: 25,
    textAlign: 'center',
  },
  textInstruction: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  userEmail: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputsContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 15,
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
  nextBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
    marginHorizontal: '5%',
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  nextMessageTxt: {
    color: Colors.white,
    fontSize: 22,
    marginVertical: 10,
  },
});
