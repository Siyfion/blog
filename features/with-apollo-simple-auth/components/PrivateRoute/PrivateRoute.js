import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { getToken } from '../utils/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!getToken() && location.pathname !== `/app/login`) {
    // If we don't have a token and we aren't on the login page,
    // redirect to the login page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
