import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    data: []
  };
  test = [];
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    //response = await fetch("https://reqres.in/api/users/2");
    //json = await response.json();
    this.test = ["data"];
    text = this.text.toString();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.text}
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
