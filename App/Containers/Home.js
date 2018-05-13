import React from 'react'
import { View, Text, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})

const HomeScreen = ({ navigation }) => (
  <View style={[styles.container]}>
    <Text>
      Home Screen!
    </Text>
    <Button
      onPress={() => navigation.navigate('Other')}
    >
      <Text>
        Go to other
      </Text>
    </Button>
    <Button
      onPress={() => navigation.navigate('Another')}
    >
      <Text>
        Go to another
      </Text>
    </Button>
  </View>
)

export default withNavigation(
  HomeScreen
)
