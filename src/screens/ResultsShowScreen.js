import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
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
