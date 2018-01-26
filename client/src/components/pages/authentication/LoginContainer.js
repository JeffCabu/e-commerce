import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  handleChange = (e) => this.setState({[e.target.id]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    console.log('loginUser message')
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm
          {...this.state}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default withRouter(LoginContainer)
