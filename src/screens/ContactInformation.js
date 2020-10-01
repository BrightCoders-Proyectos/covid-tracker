import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ContactInformation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Información de Contacto</Text>
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
  },
});
