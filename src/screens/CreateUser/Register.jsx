import React, { Component } from 'react'
import {connect} from 'react-redux'

import {
  userActions
} from '../../store/actions'

import FormRegister from '../../Components/Register'

class Register extends Component {
  render() {
    const { onNewUser } = this.props
    return (
      <FormRegister
        submit={(query) => onNewUser(query)}
        onCancel = {() => {window.location.replace("#");}}
      />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  onNewUser: query => dispatch(userActions.newUser(query))
})

export default connect(null, mapDispatchToProps)(Register)