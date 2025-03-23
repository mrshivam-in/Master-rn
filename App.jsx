import {Button, View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>Master RN</Text>
      <Text style={{fontSize: 25}}>React Native Mobile App Develper</Text>
      <Button title="Press Here" onPress={() => alert('Hello  World')} />
    </View>
  );
};

export default App;
