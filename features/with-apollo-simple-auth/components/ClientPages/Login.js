import React from 'react'
import { Mutation } from 'react-apollo'
import { navigate } from 'gatsby'

import { getToken, setToken } from '../../utils/auth'
import { LOGIN } from '../../GraphQL/mutations'

class Login extends React.Component {
  state = {
    email: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    if (getToken()) {
      navigate(`/app/profile`)
    }

    return (
      <Mutation
        mutation={LOGIN}
        onCompleted={data => {
          setToken(data.login.token)
          navigate(`/app/profile`)
        }}
      >
        {login => (
          <form
            method="post"
            onSubmit={e => {
              e.preventDefault()
              login({ variables: this.state })
            }}
          >
            <p>For this demo, please log in with any email and password.</p>
            <label>
              Username
              <input type="email" name="email" onChange={this.handleUpdate} />
            </label>
            <label>
              Password
              <input type="password" name="password" onChange={this.handleUpdate} />
            </label>
            <input type="submit" value="Log In" />
          </form>
        )}
      </Mutation>
    )
  }
}

export { Login }
