import {Row, Col} from 'react-bootstrap'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Rating = ({rating, numReviews}) => {
  return (
    <div className='rating'>
        <Row>
            <Col>
                <span style={{color: 'gold'}}>
                    {rating >= 1 ? (<FaStar />) : rating >= 0.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                    {rating >= 2 ? (<FaStar />) : rating >= 1.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                    {rating >= 3 ? (<FaStar />) : rating >= 2.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                    {rating >= 4 ? (<FaStar />) : rating >= 3.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                    {rating >= 5 ? (<FaStar />) : rating >= 4.5 ? (<FaStarHalfAlt />) : (<FaRegStar />)}
                </span>
                <span>  {numReviews} reviews</span>
            </Col>
        </Row>
    </div>

  )
}

export default Rating