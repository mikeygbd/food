import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const ResultDetail = ({ result }) => (
  <View style={styles.container}>
    <Text>{result.name}</Text>
  </View>
);

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
