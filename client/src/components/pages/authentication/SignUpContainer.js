import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  }

  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    console.log('newUser message')
    this.props.domainData.newUser(this.state)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <SignUpForm
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default withRouter(SignUpContainer)
