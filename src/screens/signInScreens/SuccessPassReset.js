import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SUCCESS_PASS_RESET} from '../../utils/Constants';
import {Colors} from '../../utils/Colors';
import {TITLE_SIZE, LOGIN_BUTTON} from '../../utils/StylesConstants';

const SuccessPassReset = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.successImg}
          source={require('../../assets/images/success.png')}
        />
        <Text style={styles.title}>{SUCCESS_PASS_RESET.title}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            console.log('Hello world');
          }}>
          <Text style={styles.txtNext}>{SUCCESS_PASS_RESET.button}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessPassReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    flex: 2,
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  title: {
    fontSize: TITLE_SIZE,
  },
  successImg: {
    height: 160,
    width: 160,
    marginVertical: 35,
  },
  btnNext: {
    height: LOGIN_BUTTON.height,
    margin: LOGIN_BUTTON.margin,
    display: LOGIN_BUTTON.flex,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnsColor,
    borderRadius: LOGIN_BUTTON.borderRadius,
  },
  txtNext: {
    color: Colors.white,
    fontSize: 22,
  },
});
