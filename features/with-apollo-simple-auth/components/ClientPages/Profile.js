import React from 'react'
import PropTypes from 'prop-types'
import { Query, withApollo } from 'react-apollo'
import { navigate } from 'gatsby'

import { setToken } from '../../utils/auth'
import { GET_USER } from '../../GraphQL/queries'

const propTypes = {
  client: PropTypes.object.isRequired,
}

const Profile = ({ client }) => {
  const logout = e => {
    e.preventDefault()
    setToken()
    client.clearStore()
    navigate(`/app/login`)
  }

  return (
    <Query query={GET_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <div>
            <ul>
              <li>First name: {data.me.firstName}</li>
              <li>Last name: {data.me.lastName}</li>
              <li>Email address: {data.me.email}</li>
              <img src={data.me.avatar} />
            </ul>
            <button onClick={logout}>Logout</button>
          </div>
        )
      }}
    </Query>
  )
}

Profile.propTypes = propTypes

// Wrap the Profile, so that it gains access to the Apollo 'client'
const ApolloProfile = withApollo(Profile)

export { ApolloProfile as Profile }
