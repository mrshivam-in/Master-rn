import {View, Text} from 'react-native';
import React from 'react';
import Onpress from './src/components/OnPress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';

const App = () => {
  return (
    <View>
      {/* <Text>Master RN</Text>
      <Text style={{fontSize: 25}}>React Native Mobile App Develper</Text>
      <Onpress />
      <UseStateHook />
      <Props />
      <InputText />
      <Styling /> */}
      {/* <FlatListScreen /> */}
      {/* Only work on array data */}
      <SectionListScreen />
      {/*Nested Data show in list */}
    </View>
  );
};

export default App;
