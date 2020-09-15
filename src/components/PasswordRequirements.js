import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PasswordRequirements = () => {
  return (
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
          <Text style={styles.dash}>-</Text> contener por lo menos 1 dígito
        </Text>
      </View>
    </View>
  );
};

export default PasswordRequirements;

const styles = StyleSheet.create({
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
});
