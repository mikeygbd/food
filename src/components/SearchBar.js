import React from 'react';
import {
  View,

  StyleSheet,
  TextInput,
  Icon,
} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({}) => (
  <View style={styles.background}>
  <Feather name="search" size={30}/>
    <TextInput
    placeholder="Search"
    
    />
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
  },


});
