import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {id: '1', name: 'React'},
  {id: '2', name: 'React Native'},
  {id: '3', name: 'Node'},
  {id: '4', name: 'Express'},
  {id: '5', name: 'MongoDB'},
  {id: '6', name: 'Firebase'},
  {id: '7', name: 'React Navigation'},
  {id: '8', name: 'React Native Elements'},
  {id: '9', name: 'React Native Paper'},
  {id: '10', name: 'React Native Vector Icons'},
];

const FlatListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginTop: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    marginVertical: 10,
    backgroundColor: '#56CCF2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#56CCF2',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // elevation: 5,
  },
  name: {
    fontSize: 15,
    color: 'Black', // Corrected case sensitivity
  },
});

export default FlatListScreen;
