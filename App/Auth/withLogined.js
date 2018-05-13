import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogined } from '../Reducers'
import { withNavigation } from 'react-navigation'
import { REDIRECTION } from '../Actions/Types/Navigation'

const withLoginedContainer = Component => (props) => {
  const { isLogined, navigation, onRedirect } = props
  // if user has not logined then redirect to Auth screen
  if(!isLogined) {
    onRedirect(navigation.state.routeName)
    navigation.navigate('Auth')
  }
  return <Component
    {...props}
  />
}

const mapStateToProps = (state) => ({
  isLogined: getLogined(state)
})

const mapDispatchToProps = (dispatch) => ({
  onRedirect(screen) {
    dispatch({
      type: REDIRECTION,
      payload: {
        screen
      }
    })
  }
})

const withLogined = Component => (
  withNavigation(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(withLoginedContainer(Component))
  )
)

export default withLogined
