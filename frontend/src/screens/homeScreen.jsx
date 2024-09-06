import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        console.log(response)
        setProducts(response.data)
      } catch (err) {
        setError(err.message);  // Lida com erros
      } 
    };

    getProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;