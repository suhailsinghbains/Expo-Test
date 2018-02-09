import React,{Component} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
   loading: true,
   error: false,
   data: [],
 }
 componentWillMount = async () => {
   try {
     const response = await fetch('https://reqres.in/api/users?page=2')
     const data = await response.json()
     this.setState({loading: false, data})
   } catch (e) {
     this.setState({loading: false, error: true})
   }
 }
 render() {
   const {data, loading, error} = this.state
   if (loading) {
     return (
       <View style={styles.center}>
         <ActivityIndicator animating={true} />
       </View>
     )
   }
   if (error) {
     return (
       <View style={styles.center}>
         <Text>
           Failed to load posts!
         </Text>
       </View>
     )
   }
   return (
     <View style={styles.center}>
       <Text>
         {JSON.stringify(data["data"][0]["first_name"])}
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
