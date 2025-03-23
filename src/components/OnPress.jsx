import {Button, View, Text} from 'react-native';
import React from 'react';

const App = () => {
  const getAlert = () => {
    alert('Hello  World');
  };
  const getName = name => {
    alert(`Name: ${name}`); // Using template literal for the message
  };
  return (
    <View>
      <Text>Master RN</Text>
      <Button title="Press Here" onPress={getAlert} />
      <Button title="Press Here" onPress={() => getName('Shivam')} />
    </View>
  );
};

export default App;
