import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Shivam');
  const updateName = () => {
    setName('Anurag Kushwaha');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>UseStateHook</Text>
      <Text style={{fontSize: 20}}>Name :{name}</Text>
      <Button title="Press" onPress={updateName} />
    </View>
  );
};

export default UseStateHook;
