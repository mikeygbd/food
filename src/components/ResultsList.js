import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return <ResultDetail result={item} />
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
