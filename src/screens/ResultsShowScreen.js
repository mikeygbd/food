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
    <Text style={styles.title}>{result.name}</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  image: {
    marginVertical: 15,
    alignSelf: 'center',
    height: 200,
    width: 300
  }
});
