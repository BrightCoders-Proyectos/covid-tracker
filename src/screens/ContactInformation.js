/* eslint-disable jsx-quotes */
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
  NEXT_MESSAGE,
  CONTACT_INFO,
  PREFERABLY_CELLPHONE,
} from '../utils/Constants';
import {Colors} from '../utils/Colors';
import DescContactInfo from '../components/DescContactInfo';
import EmailPassTxtInput from '../components/EmailPassTxtInput';

const ContactInformation = () => {
  const titleInput = ['Nombre', 'Teléfono'];

  const putInputs = () => {
    const inputs = titleInput.map((element) => {
      if (element === 'Nombre') {
        return (
          <EmailPassTxtInput
            key={element}
            id={element}
            title={element}
            isRequired='Recomendado'
            keyboard='default'
          />
        );
      } else {
        return (
          <EmailPassTxtInput
            key={element}
            id={element}
            title={element}
            isRequired='Recomendado'
            keyboard='phone-pad'
          />
        );
      }
    });
    return inputs;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{CONTACT_INFO}</Text>
        <DescContactInfo />
        <View style={styles.formContainer}>
          {putInputs()}
          <Text style={styles.suggestText}>{PREFERABLY_CELLPHONE}</Text>
          <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.txtNext}>{NEXT_MESSAGE}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 25,
  },
  formContainer: {
    marginVertical: 20,
  },
  suggestText: {
    paddingHorizontal: 15,
    fontStyle: 'italic',
    fontSize: 16,
  },
  btnNext: {
    height: 55,
    marginVertical: 30,
    marginHorizontal: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  txtNext: {
    color: Colors.white,
    fontSize: 22,
  },
});
