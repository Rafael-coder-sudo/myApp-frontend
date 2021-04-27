import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './layout/Sidebar'
import Auth from './screens/Auth/Auth'
import Dashboard from './screens/Dashboard/Dashboard'

class AuthOrApp extends Component {
  
  render() {
    const  user  = localStorage.getItem('user')
    if (user) {
      return <Dashboard />
    }
    else if (!user) {
      return <Auth />
    } else {
      return false
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(AuthOrApp)