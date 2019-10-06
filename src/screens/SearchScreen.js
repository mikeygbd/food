import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = ({}) => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  return(
  <View style={styles.container}>
    <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => console.log('term was submitted')}
      />
    <Text>We have found {results.length} results.</Text>
  </View>
);
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
