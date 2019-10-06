import React, { useState, useEffect } from 'react';
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
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('hi there!')
    try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose'
      }
    })
    setResults(response.data.businesses)
  } catch (err) {
    setErrorMessage('Something Went Wrong')
  }
}
  useEffect(() => {
    searchApi('pasta')
  }, [])

  return(
  <View style={styles.container}>
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
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
