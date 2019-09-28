import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = ({}) => (
  <View style={styles.container}>
    <SearchBar />
    <Text>I'm SearchScreen</Text>
  </View>
);

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
