import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const style = {
  container: {
    border: '2px solid black',
    background: 'blue',
    color: 'white',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center'
  },
  card: {
    background: 'red',
    padding: 20
  },
  typography: {
    background: 'green',
    color: 'red'
  }
}

const About = () => {
  return (
    <div style={style.container}>
      <Card style={style.card}>
        <div>
          <Typography style={style.typography} type='display1' gutterBottom=''>
            Hello from About.js inside PagesFolder inside ComponentsFolder
          </Typography>
        </div>
      </Card>
    </div>
  )
}

export default About
