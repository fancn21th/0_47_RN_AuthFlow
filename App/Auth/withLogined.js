import React, { Component } from 'react'

const LoginedContainer = Component => (props) => {
  const { isLogined, navigation } = props
  // if user has not logined then redirect to Auth screen
  if(!isLogined) {
    navigation.navigate('Auth')
  }
  return <Component
    {...props}
  />
}

export default LoginedContainer
