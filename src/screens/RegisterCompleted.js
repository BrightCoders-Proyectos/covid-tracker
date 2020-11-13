import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from '../utils/Colors';
import {REGISTER_COMPLETED_TEXT} from '../utils/Constants';

const RegisterCompleted = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.heartHandsImage}
          source={require('../assets/images/heart-handshake.png')}
        />
      </View>
      <View style={styles.succesContainer}>
        <View style={styles.mainText}>
          <Text style={styles.title}>
            {REGISTER_COMPLETED_TEXT.account_created}
          </Text>
          <View style={styles.textContainer}>
            <Text style={styles.paragraphs}>
              {REGISTER_COMPLETED_TEXT.thanks}
            </Text>
            <Text style={styles.paragraphs}>
              Juntos podemos detener la propagación del COVID-19
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnAccept}
          onPress={() => {
            console.log('Register Completed');
          }}>
          <Text style={styles.textBtnAccept}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterCompleted;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 15,
  },
  heartHandsImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  mainText: {
    flex: 2,
  },

  title: {
    fontSize: 27,
    textAlign: 'center',
    flex: 0.5,
  },
  succesContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 2,
  },

  paragraphs: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  btnAccept: {
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  textBtnAccept: {
    color: Colors.white,
    fontSize: 22,
  },
});
