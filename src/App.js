import React from 'react';
import './app.css'
import { Router, Route, hashHistory, Redirect } from 'react-router'


import AuthOrApp from './authOrApp'
import Register from './screens/CreateUser/Register'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp }/>
    <Route path='/register' component={Register } />
  </Router>
)
