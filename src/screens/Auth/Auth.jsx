import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  userActions
} from '../../store/actions'

import Authe from '../../Components/Auth/Auth'

class Auth extends Component {
  render() {
    const { auth } = this.props
    return (
      <Authe
        submit={(data) => auth(data)}
        onRegister={() => {window.location.replace("#register");}} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  auth: query => dispatch(userActions.auth(query))
})

export default connect(null, mapDispatchToProps)(Auth)