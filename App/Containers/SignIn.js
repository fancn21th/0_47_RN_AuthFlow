import React from 'react'
import SignIn from '../Components/SignIn'
import { connect } from 'react-redux'
import { REQUEST_LOGIN } from '../Actions/Types/Login'

const mapStateToProps = (state) => ({})

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


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
