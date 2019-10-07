import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
          <ResultDetail result={item}/>
          </TouchableOpacity>
        )

      }}
    />
  </View>
);

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,

  }
});
