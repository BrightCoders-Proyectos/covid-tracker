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

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.welcomeScreenContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/example-covid.png')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Covid Tracker</Text>
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}>
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('GoSignIn', {screen: 'SignIn'});
          }}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  imageContainer: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  imageLogo: {
    height: 265,
    width: 265,
    resizeMode: 'stretch',
  },

  titleContainer: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    marginTop: 10,
    fontSize: 30,
  },
  btnsContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: Colors.btnsColor,
    height: 55,
    width: '85%',
    display: 'flex',
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
