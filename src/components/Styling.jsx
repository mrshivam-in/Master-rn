import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Styling = () => {
  return (
    <View>
      <Text style={style.text}>Styling</Text>
      <Text style={style.text}>Inline</Text>
      <Text style={style.text}>Internal</Text>
      <Text style={style.text}>External</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 10,
    color: 'red',
    marginVertical: 5,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
});

export default Styling;
