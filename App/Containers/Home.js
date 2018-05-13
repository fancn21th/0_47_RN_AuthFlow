import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import withLogined from '../Auth/withLogined'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { getLogined } from '../Reducers'

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

const mapStateToProps = (state) => ({
  isLogined: getLogined(state)
})

// export default withLogined(
//   withNavigation(
//     connect(
//       mapStateToProps,
//       null
//     )(HomeScreen)
//   )
// )

export default HomeScreen
