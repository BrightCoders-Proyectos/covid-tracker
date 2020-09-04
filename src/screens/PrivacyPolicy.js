import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const privacyPolicy = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Política de privacidad</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        aliquid reprehenderit cumque repellendus doloremque ea at velit ipsa,
        quo neque maiores sed sunt voluptate alias laudantium atque illo impedit
        eos.
      </Text>
      <Button title="Go back" onPress={() => navigation.navigate('Welcome')} />
    </SafeAreaView>
  );
};

export default privacyPolicy;
