import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null) // null when you want your state to be an object but have not yet fetched any data from api
    const id = navigation.getParam('id')

    console.log(result)

    const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
    }
    useEffect(() => {
      getResult(id)
    }, [])

return (
  <View style={styles.container}>
    <Text>I'm ResultsShowScreen</Text>
  </View>
);
}

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
