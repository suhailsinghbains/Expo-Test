import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    // var test= fetch("https://reqres.in/api/users/2").then(function(response) {
    //   return response.json().catch(function() {
    //     return response.text();
    //   });
    // });
    var test = {
      "data": {
        "id": 2,
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        }
    };
    //this.text = JSON.stringify(test).toString();
    this.text = JSON.stringify(test["data"]["id"]).toString();
  }
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
