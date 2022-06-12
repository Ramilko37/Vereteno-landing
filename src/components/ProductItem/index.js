import React from 'react';
import styled from 'styled-components/macro';

const ItemContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-size: cover;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    justify-content: start;
`

const ProductImg = styled.div`
  width: 100%;
  height: 228px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  justify-content: flex-end;
  position: relative;
  
`

const ProductTitle = styled.h4`
  position: absolute;
  bottom: 0;
  font-family: 'Viaoda Libre', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #FFFFFF;
  text-shadow: 0px 3.52941px 7.05882px rgba(0, 0, 0, 0.15);
  justify-content: center;
  font-feature-settings: 'ordn' on;
  margin: 0 auto 16px;
`
const ProductPrice = styled.span`
  width: 100%;
  height: 30px;
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  margin-top: 4px;
  position: absolute;
  bottom: 0;
`


function ProductItem({title, img, price, onClick}) {
    return (
        <ItemContainer onClick={onClick}>
            <ProductImg img={img}>
                <ProductTitle>{title}</ProductTitle>
            </ProductImg>
            <ProductPrice>{price}</ProductPrice>
        </ItemContainer>
    );
}

export default ProductItem;
