import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {RESET_PASSWORD} from '../../utils/Constants';
import {TITLE_SIZE} from '../../utils/StylesConstants';
import DescResetPass from '../../components/DescResetPass';
import EmailPassTxtInput from '../../components/EmailPassTxtInput';

const ForgotYourPassword = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.title}>{RESET_PASSWORD}</Text>
        <DescResetPass />
        <EmailPassTxtInput
          title="Correo electrónico"
          keyboard="email-address"
          password={false}
        />
        <TouchableOpacity
          style={styles.resetPassBtn}
          onPress={() => {
            console.log('Hello world');
          }}>
          <Text style={styles.resetPassTxt}>{RESET_PASSWORD}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotYourPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: TITLE_SIZE,
    marginTop: 25,
    textAlign: 'center',
  },
  resetPassBtn: {
    height: 55,
    marginVertical: 50,
    marginHorizontal: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  resetPassTxt: {
    color: Colors.white,
    fontSize: 22,
  },
});
