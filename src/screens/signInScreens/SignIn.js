import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {
  NEXT_MESSAGE,
  DONT_ACCOUNT,
  FORGOT_PASSWORD,
} from '../../utils/Constants';
import EmailPassTxtInput from '../../components/EmailPassTxtInput';

const SignIn = ({navigation}) => {
  const inputType = ['Correo electrónico', 'Clave'];

  const showInputs = () => {
    const inputs = inputType.map((type) => {
      if (type === 'Correo electrónico') {
        return (
          <EmailPassTxtInput
            key={type}
            title="Correo electrónico"
            password={false}
          />
        );
      } else {
        return <EmailPassTxtInput key={type} title="Clave" password={true} />;
      }
    });
    return inputs;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        {showInputs()}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            console.log('Hello world');
          }}>
          <Text style={styles.textBtnAccept}>{NEXT_MESSAGE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.labelBtns}
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}>
          <Text style={styles.textBtns}>{DONT_ACCOUNT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.labelBtns}
          onPress={() => {
            console.log('Hello world');
          }}>
          <Text style={styles.textBtns}>{FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 25,
  },
  nextBtn: {
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  textBtnAccept: {
    color: Colors.white,
    fontSize: 22,
  },
  labelBtns: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textBtns: {
    color: Colors.btnsColor,
    fontSize: 15,
  },
});
