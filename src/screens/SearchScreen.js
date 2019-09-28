import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SearchScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm SearchScreen</Text>
  </View>
);

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
