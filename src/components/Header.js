import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Header() {
  return (
    <Head>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Products</Link></li>
      <li><Link to="/">About Us</Link></li>
      <li><Link to="/checkout.js">Cart</Link></li>
    </Head>
  )
}

const Head = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #d0c3ae;

  li {
    float: left;

    &:last-child {
      float: right;
    }
  }

  li a,
  li Link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  
    &:hover {
      background: #a29888;
    }
  }  

  
`

export default Header