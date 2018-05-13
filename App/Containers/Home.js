import React from 'react'
import { View, Text, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

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

const HomeScreen = ({ navigation }) => (
  <View style={[styles.container, styles.horizontal]}>
    <Text>
      Home Screen!
    </Text>
    <Button
      onPress={() => navigation.navigate('Other')}
    >
      <Text>
        Go to others
      </Text>
    </Button>
  </View>
)

export default withNavigation(
  HomeScreen
)
