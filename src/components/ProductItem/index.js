import React from 'react';
import styled from 'styled-components/macro';

const ItemContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-size: cover;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
`

const ProductImg = styled.div`
  width: 171px;
  height: 228px;
  box-sizing: border-box;
  background-image: url(${props => props.img});
  background-size: contain;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
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
  justify-content: center;
  font-feature-settings: 'ordn' on;
  margin: 0;
  top: 20px;
`
const ProductPrice = styled.span`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  margin-top: 4px;
  
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
