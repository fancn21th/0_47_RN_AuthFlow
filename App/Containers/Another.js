import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import withLogined from '../Auth/withLogined'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

// const AnotherScreen = () => (
//   <View style={[styles.container, styles.horizontal]}>
//     <Text>
//       Another Screen!
//     </Text>
//   </View>
// )

class AnotherScreen extends Component {
  render() {
   return (
     <View style={[styles.container, styles.horizontal]}>
       <Text>
         Another Screen!
       </Text>
     </View>
   )
  }
}


export default withLogined(AnotherScreen)

