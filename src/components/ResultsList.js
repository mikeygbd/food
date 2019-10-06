import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const ResultsList = ({ title, results }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>
      }}
    />
  </View>
);

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',

  }
});
