import React from 'react'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

const style = {
  formContainer: {
    border: '3px green solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItem: 'center'
  },
  container: {
    width: '50%'
  }
}
const AddProductForm = ({onChangeHandler, name, price, img, category, submitProductToServer}) => {
  return (
    <div style={style.container}>
      <Card>
        <form style={style.formContainer}>
          <Typography type='display1' gutterBottom=''>Add Product </Typography>
          <div>
            <TextField onChange={onChangeHandler} id={'name'} label='Name' placeholder='name' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id={'price'} label='Price' placeholder='Price' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id={'img'} label='Image' placeholder='Image' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id={'category'} label='Category' placeholder='Category' />
          </div>
          <div>
            <Button raised disabled={!name || !price || !img || !category} onClick={submitProductToServer}>Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

AddProductForm.propTypes = {
  onChangeHandler: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  submitProductToServer: PropTypes.func.isRequired
}
export default AddProductForm
