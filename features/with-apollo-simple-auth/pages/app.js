import React from 'react'
import { Router } from '@reach/router'

import { Layout } from '../components/Layout'
import { PrivateRoute } from '../components/PrivateRoute'
import { Login, Profile } from '../components/ClientPages'

const NotFound = () => (
  <div>
    <h1>NOT FOUND - APP ROUTE</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. 😢</p>
  </div>
)

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <NotFound default />
    </Router>
  </Layout>
)

export default App
