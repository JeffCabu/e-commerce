import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const style = {
  container: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  card: {
    width: '50%'
  }
}
const SignUpForm = ({id, onChangeHandler, onSubmit}) => {
  return (
    <form style={style.container}>
      <div style={style.card}>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
            First Name:
          </Typography>
          <input type='text' onChange={onChangeHandler} placeholder='First Name' id='firstName' />
        </Card>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
            Last Name:
          </Typography>
          <input type='text' onChange={onChangeHandler} placeholder='Last Name' id='lastName' />
        </Card>
        <Card raised='true'>
          <Typography type='headline' component='h2' data-domain='.com'>
            Email:
          </Typography>
          <input type='text' onChange={onChangeHandler} placeholder='Email' id='email' />
        </Card>
      </div>
      <div>
        <Button raised onClick={onSubmit}>Sign-up</Button>
        <Link to='/'>Login</Link>
      </div>
    </form>
  )
}

SignUpForm.propTypes = {
  id: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
export default SignUpForm
