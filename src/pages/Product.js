import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { PageWrapper, Button } from '../styledComponents';
import { motion } from "framer-motion";

function Product() {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php?id=' + params.id);
      const data = await response.json();

      setProduct(data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct();
  },)

  return (
    <PageWrapper>

      <motion.article
        initial={{ x: '100vw' }}
        animate={{
          x: 0,
          rotate: 360,
        }}
        transition={{
          type: 'spring',
          duration: 3,
          delay: 0.5
        }}
      >
        <img src={product.url} alt="" />
        
        <h3>{product.title}</h3>
        <h6>Epic Electronics</h6>
        <p>Stock: {product.storage} pc.</p>
        <p>Description: {product.description}</p>
      
          <p>{product.price} kr</p>
          <Button>Add to Cart</Button><br />
        
      </motion.article>

      <Link to={'/'}>
        <Button primary>Back</Button>
      </Link>
      
    </PageWrapper>
  )
}



export default Product