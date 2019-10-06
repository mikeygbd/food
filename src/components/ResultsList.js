import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ResultsList = ({ title, results }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text> Results: {results.length}</Text>
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
