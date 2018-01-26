import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const style = {
  container: {
    border: '1px solid black',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center'
  },
  card: {
    width: '50vw'
  },
  butlin: {
    padding: 0
  },
  link: {
    color: 'black',
    width: 88,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '99%',
    height: 25,
    borderRadius: 5
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
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='First Name' id='firstName' />
        </Card>

        <Card raised='true'>
          <Typography type='headline' component='h2'>
            Last Name:
          </Typography>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='Last Name' id='lastName' />
        </Card>

        <Card raised='true'>
          <Typography type='headline' component='h2'>
            Email:
          </Typography>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='Email' id='email' />
        </Card>

        <Card>
          <Typography type='headline' component='h2'>
            Password:
          </Typography>
          <input style={style.inputField} type='text' onChange={onChangeHandler} id='password' placeholder='Password' />
        </Card>
      </div>
      <br />
      <div style={style.button}>
        <div>
          <small>Already signed-up? Click the LOGIN button</small>
        </div>
        <div>
          <Button raised onClick={onSubmit}>Register</Button>
          <Button style={style.butlin} raised><Link to='/login' style={style.link}>Login</Link></Button>
        </div>
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
