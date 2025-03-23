import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Banana'},
    ],
  },
  {
    title: 'Vegetables',
    data: [
      {id: 4, name: 'Potato'},
      {id: 5, name: 'Tomato'},
      {id: 6, name: 'Onion'},
    ],
  },
];

const SectionListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View style={styles.header}>
      <Text style={styles.header}>{section.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SectionList
        sections={listItems} // Corrected prop name
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id.toString()} // Added keyExtractor for efficiency
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
  title: {
    fontSize: 15,
    color: 'Black', // Corrected case sensitivity
  },
  header: {
    fontSize: 20,
    backgroundColor: '#90ee90',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default SectionListScreen;
