import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogined } from '../Reducers'
import { withNavigation } from 'react-navigation'

const withLoginedContainer = Component => (props) => {
  const { isLogined, navigation } = props
  // if user has not logined then redirect to Auth screen
  if(!isLogined) {
    navigation.navigate('Auth')
  }
  return <Component
    {...props}
  />
}

const mapStateToProps = (state) => ({
  isLogined: getLogined(state)
})

const withLogined = Component => (
  withNavigation(
    connect(
      mapStateToProps,
      null
    )(withLoginedContainer(Component))
  )
)

export default withLogined
