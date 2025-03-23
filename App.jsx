import {View, Text} from 'react-native';
import React from 'react';
import Onpress from './src/components/OnPress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';

const App = () => {
  return (
    <View>
      <Text>Master RN</Text>
      <Text style={{fontSize: 25}}>React Native Mobile App Develper</Text>
      <Onpress />
      <UseStateHook />
      <Props />
      <InputText />
    </View>
  );
};

export default App;
