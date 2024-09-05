import React from 'react'
import products from '../products'


const homeScreen = () => {
  return (
    <main>
      {products.map((product) => (
          <div key={product._id}>{product.name}</div>
      ))}
    </main>
  )
}

export default homeScreen