import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const RestaurantList = ({}) => (
  <View style={styles.container}>
    <Text>I'm RestaurantList</Text>
  </View>
);

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
