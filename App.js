import React,{Component} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    data : []
  };
 componentWillMount = async () => {
   try {
     const response = await fetch('http://192.168.0.102:8080/')
     const data = await response.json()
     this.setState(data)
   } catch (e) {

   } finally {

   }
 }
 render() {
   return (
     <View style={styles.center}>
       <Text>
         {JSON.stringify(this.state)}
       </Text>
     </View>
   )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
