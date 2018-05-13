import React, { Component } from 'react'
import SignIn from '../Components/SignIn'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { REQUEST_LOGIN } from '../Actions/Types/Login'
import { getLastScreen, getLogined } from '../Reducers'

class SignInContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const { isLogined, navigation, lastScreen } = nextProps
    if(isLogined){
      navigation.navigate(lastScreen)
    }
  }

  render( ) {
    return (
      <SignIn
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  lastScreen: getLastScreen(state),
  isLogined: getLogined(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSignIn(email, password) {
    dispatch({
      type: REQUEST_LOGIN,
      payload: {
        email,
        password,
      }
    })
  }
})


export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
)
