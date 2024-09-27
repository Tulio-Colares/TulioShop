import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Pagination from '../components/Paginate';

const HomeScreen = () => {
  const { pageNumber } = useParams();
  console.log(pageNumber);
  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Pagination pages={data.pages} page={data.page}/>
        </>
    )}
    </>
  );
};

export default HomeScreen;