import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {RESET_YOUR_PASSWORD} from '../../utils/Constants';
import {TITLE_SIZE, TITLE_MARGIN_VERTICAL} from '../../utils/StylesConstants';
import ConfirmEmailCode from '../../components/ConfirmEmailCode';
import CodeConfirmTxtInput from '../../components/CodeConfirmTxtInput';

const ResetPassConfirm = ({route}) => {
  const {usersEmail} = route.params;
  const fieldId = ['fieldOne', 'fieldTwo', 'fieldThree', 'fieldFour'];

  const showInputs = () => {
    return fieldId.map((field) => {
      return <CodeConfirmTxtInput key={field} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{RESET_YOUR_PASSWORD.title}</Text>
        <View style={styles.codeConfirmContainer}>
          <ConfirmEmailCode usersEmail={usersEmail} />
          <View style={styles.codeConfirmInputsContainer}>{showInputs()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: TITLE_SIZE,
    marginVertical: TITLE_MARGIN_VERTICAL,
    textAlign: 'center',
  },
  codeConfirmContainer: {
    flex: 2,
  },
  codeConfirmInputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
