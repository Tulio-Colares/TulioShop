import React from 'react'
import products from '../products'
import Container  from 'react-bootstrap/Container'


const homeScreen = () => {
  return (
    <main>
        <Container>
            {products.map((product) => (
                <div key={product._id}>{product.name}</div>
            ))}
        </Container>
    </main>
  )
}

export default homeScreen