import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const SuccessPassReset = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
    </SafeAreaView>
  );
};

export default SuccessPassReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});
