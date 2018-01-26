import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const style = {
  container: {
    border: '1px solid black'
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '99%'
  }
}

const LoginForm = ({id, handleChange, onSubmit}) => {
  return (
    <form style={style.container}>
      <div style={style.card}>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
            Email:
          </Typography>
          <input style={style.inputField} type='text' onChange={handleChange} placeholder='Email' id='email' />
        </Card>
        <Card>
          <Typography type='headline' component='h2'>
            Password:
          </Typography>
          <input style={style.inputField} type='text' onChange={handleChange} id='password' placeholder='password' />
        </Card>
      </div>
      <div style={style.button}>
        <Button raised onClick={onSubmit}>Login</Button>
        <Button style={style.butlin} raised><Link style={style.link} to='/sign-up'>Sign up</Link></Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  id: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
export default LoginForm
