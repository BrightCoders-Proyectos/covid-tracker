import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../utils/Colors';

const RegisterAccount = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Correo electrónico</Text>
              <Text style={[styles.titleText, styles.requiredText]}>
                Requerido
              </Text>
            </View>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Clave</Text>
              <Text style={[styles.titleText, styles.requiredText]}>
                Requerido
              </Text>
            </View>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.requirementsContainer}>
            <Text style={styles.textInfo}>La clave debe:</Text>
            <View style={styles.unorderedListContainer}>
              <Text style={styles.textInfo}>
                <Text style={styles.dash}>-</Text> tener 8 o más caracteres
              </Text>
              <Text style={styles.textInfo}>
                <Text style={styles.dash}>-</Text> contener por lo menos 1 letra
                minúscula
              </Text>
              <Text style={styles.textInfo}>
                <Text style={styles.dash}>-</Text> contener por lo menos 1 letra
                mayúscula
              </Text>
              <Text style={styles.textInfo}>
                <Text style={styles.dash}>-</Text> contener por lo menos 1
                dígito
              </Text>
            </View>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Escribe de nuevo la clave</Text>
              <Text style={[styles.titleText, styles.requiredText]}>
                Requerido
              </Text>
            </View>
            <TextInput style={styles.textInput} />
          </View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              console.log('Hello world');
            }}>
            <Text style={styles.nextBtnText}>Siguiente</Text>
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
    paddingLeft: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.textGray,
    borderRadius: 10,
  },
  requirementsContainer: {
    flex: 1,
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  textInfo: {
    fontSize: 15,
  },
  unorderedListContainer: {
    paddingHorizontal: 10,
  },
  dash: {
    fontWeight: 'bold',
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
