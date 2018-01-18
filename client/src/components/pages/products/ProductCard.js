import React from 'react'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  media: {
    border: '2px red solid',
    height: 200
  },
  link: {
    color: 'white'
  }
}
const ProductCard = ({name, price, img, category, _id, deleteProduct}) => {
  return (
    <div>
      <Card>
        <CardMedia
          style={style.media}
          title={category}
          image={img}
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            Name:{name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary' onClick={() => deleteProduct(_id)}>Delete</Button>
          <Button raised color='primary'><Link to={`/product/${_id}`} style={style.link}>View</Link></Button>
        </CardActions>
      </Card>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired
}
export default ProductCard
