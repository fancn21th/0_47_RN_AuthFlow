import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'

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

const HomeScreen = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Text>
      Home Screen!
    </Text>
  </View>
)

export default HomeScreen
