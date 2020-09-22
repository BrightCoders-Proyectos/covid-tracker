import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ConfirmEmail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Confirmación de correo</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.textInstruction}>
          Por favor ingresa el código enviado a{' '}
          <Text style={[styles.textInstruction, styles.userEmail]}>
            owen@example.com
          </Text>
        </Text>
      </View>
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
  instructionsContainer: {
    flex: 0.5,
    paddingHorizontal: 30,
  },
  textInstruction: {
    fontSize: 15,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
