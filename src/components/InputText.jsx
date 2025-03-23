import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const InputText = () => {
  const [username, setUserName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>InputText</Text>
      <Text>Username : {username}</Text>
      <TextInput
        style={{fontSize: 15, borderWidth: 1, borderColor: 'black', margin: 10}}
        placeholder="Enter Your username"
        onChangeText={data => setUserName(data)}
      />
    </View>
  );
};

export default InputText;
