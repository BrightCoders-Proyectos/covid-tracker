import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DESC_CONTACT_INFO} from '../utils/Constants';

const DescContactInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInstructions}>{DESC_CONTACT_INFO}</Text>
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
