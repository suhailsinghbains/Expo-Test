import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  test = "Good Morning";
  componentWillMount(){
    this.changeText();
  }
  changeText = function() {
    this.test = "Hi!";
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.test}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
