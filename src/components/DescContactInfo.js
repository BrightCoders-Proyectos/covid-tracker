import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DescContactInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInstructions}>
        Esta información servirá para ponernos en contacto contigo más rapido
        cuando sea necesario
      </Text>
    </View>
  );
};

export default DescContactInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  textInstructions: {
    fontSize: 18,
    textAlign: 'justify',
  },
});
