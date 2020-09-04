import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../utils/Colors';

const welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.welcomeScreenContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../utils/example-covid.png')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.elementsContainer}>
        <Text style={styles.titleText}>Covid Tracker</Text>
        {/* <Button
        title="go privacy"
        onPress={() => {
          navigation.navigate('PrivacyPolicy');
        }}
      /> */}
        <View style={styles.btnsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('PrivacyPolicy');
              }}>
              Registro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default welcome;

const styles = StyleSheet.create({
  welcomeScreenContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  imageContainer: {
    height: 300,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageLogo: {
    height: '90%',
    width: '90%',
    resizeMode: 'stretch',
  },

  elementsContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    marginTop: 10,
    fontSize: 30,
  },
  btnsContainer: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    backgroundColor: Colors.btnsColor,
    height: 55,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 25,
  },
});
