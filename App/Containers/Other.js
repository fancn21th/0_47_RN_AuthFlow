import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { getLogined } from '../Reducers'
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

const OtherScreen = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Text>
      Other Screen!
    </Text>
  </View>
)

const mapStateToProps = (state) => ({
  isLogined: getLogined(state)
})

export default (
  withNavigation(
    connect(
      mapStateToProps,
      null
    )(withLogined(OtherScreen))
  )
)
