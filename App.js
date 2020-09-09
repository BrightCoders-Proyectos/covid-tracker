import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationLogin} from './src/navigations/NavigationLogin';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationLogin />
    </NavigationContainer>
  );
};

export default App;
