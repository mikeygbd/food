import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = ({}) => {
  const [term, setTerm] = useState('')
  return(
  <View style={styles.container}>
    <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)}/>
    <Text>{term}</Text>
  </View>
);
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
