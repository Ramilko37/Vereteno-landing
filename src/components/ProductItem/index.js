import React from 'react';
import styled from 'styled-components';


const Product = styled.div`
    width: 171px;
    height: 228px;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
    background-image: url(${props => props.img});
    background-size: cover;
    border-radius: 24px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
      :first-child{
    width: 100%;
    height: 156px;
        grid-column-start: 1;
        grid-column-end: 3;
  }
`

const ProductTitle = styled.h4`
  font-family: 'Viaoda Libre', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #FFFFFF;
  text-shadow: 0px 3.52941px 7.05882px rgba(0, 0, 0, 0.15);
  bottom: 0;
  margin: 0 auto;
  justify-content: center;
`
const ProductPrice = styled.span`
  font-family: 'Acherus Feral', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  bottom: -28px;
`


function ProductItem({title, img, price}) {

    return (

        <Product img={img}>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
        </Product>


    );
}

export default ProductItem;
