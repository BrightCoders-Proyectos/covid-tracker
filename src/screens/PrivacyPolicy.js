import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../utils/Colors';

const privacyPolicy = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Política de privacidad</Text>
        </View>
        <View style={styles.paragraphsContainer}>
          <Text style={styles.paragraphs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquid reprehenderit cumque repellendus doloremque ea
            at velit ipsa, quo neque maiores sed sunt voluptate alias laudantium
            atque illo impedit eos.
          </Text>
          <Text style={styles.paragraphs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquid reprehenderit cumque repellendus doloremque ea
            at velit ipsa, quo neque maiores sed sunt voluptate alias laudantium
            atque illo impedit eos.
          </Text>
          <Text style={styles.paragraphs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquid reprehenderit cumque repellendus doloremque ea
            at velit ipsa, quo neque maiores sed sunt voluptate alias laudantium
            atque illo impedit eos.
          </Text>
          <Text style={styles.paragraphs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquid reprehenderit cumque repellendus doloremque ea
            at velit ipsa, quo neque maiores sed sunt voluptate alias laudantium
            atque illo impedit eos.
          </Text>
          <TouchableOpacity
            style={styles.btnAccept}
            onPress={() => console.log('Accept')}>
            <Text style={styles.textBtnAccept}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default privacyPolicy;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  paragraphsContainer: {
    marginBottom: 30,
  },
  paragraphs: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 15,
  },
  btnAccept: {
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.btnsColor,
    borderRadius: 60,
  },
  textBtnAccept: {
    color: Colors.white,
    fontSize: 22,
  },
});
