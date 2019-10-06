import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({}) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()


  return(
  <View style={styles.container}>
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length} results.</Text>
    <ResultsList title="Cost Effective"/>
    <ResultsList title="Bit Pricier"/>
    <ResultsList title="Big Spender"/>
  </View>
);
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
