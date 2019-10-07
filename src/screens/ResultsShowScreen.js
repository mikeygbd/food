import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null) // null when you want your state to be an object but have not yet fetched any data from api
    const id = navigation.getParam('id')

    const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
    }
    useEffect(() => {
      getResult(id)
    }, [])

    if(!result) {
      return null
    }

return (
  <View style={styles.container}>
    <Text>{result.name}</Text>
    <FlatList
    data={result.photos}
    keyExtractor={(photo) => photo}
    renderItem={({ item }) => {

      return <Image style={styles.image} source={{ uri: item }} />
    }}
    />

  </View>
);
}

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 300
  }
});
