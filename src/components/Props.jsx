import {Button, View, Text} from 'react-native';
import React, {useState} from 'react';
import Child from '../components/Child';

const Props = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 30}}>Props</Text>
      <Button title="Counter" onPress={() => setCount(count + 1)} />
      <Child data={count} />
    </View>
  );
};

export default Props;
