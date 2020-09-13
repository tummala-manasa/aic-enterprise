import React from 'react';
import styled from 'styled-components';

import { Categories } from './categories/Categories';
import { Brands } from './brands/Brands';
import { ProductList } from './ProductList';

const Container = styled.div`

`;

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 30px 200px;
  margin-bottom: 30px;
`;


export const Products = () => {
  return (
    <Container id='products_id'>
      <Header>Divisions</Header>
      <Categories />
      
      <Header>Brands</Header>
      <Brands />

      <Header style={{ textAlign: 'center' }}>Products</Header>
      <ProductList />
    </Container>
  )
}
