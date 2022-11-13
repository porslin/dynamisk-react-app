import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageWrapper, Button } from '../styledComponents';
import { motion } from "framer-motion";

function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty');
      const data = await response.json();

      setProducts(data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const PageVariant = {
    start: { opacity: 0 },
    stop: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  }

  return (
    <PageWrapper>
      <h1>Fenty Collection</h1>

      <Grid>
        {
          products.map(product => (

            <motion.article key={product.id}
              initial="start"
              animate="stop"
              variants={PageVariant}
            >
              <img src={product.api_featured_image} alt=""/>
              <h4>{product.name}</h4>
              <div>
              <p>$ {product.price}</p>
              <Button>Add to Cart</Button><br />
              <Link to={`/products/${product.id}`}>Read more...</Link>
              </div>
            </motion.article>
          )) 
        }
      </Grid>
    </PageWrapper>
  )
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3em;
  margin-top: 3em;
`

export default Products