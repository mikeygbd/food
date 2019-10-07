import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {

  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return(
  <>
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <ScrollView>
    <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
    <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier"/>
    <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender"/>
    <ResultsList navigation={navigation} results={filterResultsByPrice('$$$$')} title="Baller"/>
    </ScrollView>
  </>
);
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
  },
});
