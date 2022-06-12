import React from 'react';
import styled from 'styled-components/macro';

const ItemContainer = styled.div`
    display: flex;
    position: relative;
    box-sizing: border-box;
    background-size: cover;
    justify-content: center;
    border: 1px solid red;
`

const ProductImg = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${props => props.img});
  background-size: cover;
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

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
`

const Span = styled.span`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #000000;
`

const Paragraph = styled.p`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #111D34;
`
const Button = styled.button`
  width: 274px;
  height: 46px;
  background: #CEA687;
  border-radius: 8px;
`


function BigProductItem({title, img, price, onClick}) {
    return (
        <ItemContainer onClick={onClick}>
            <ProductImg img={img}>
                <ProductTitle>{title}</ProductTitle>
            </ProductImg>

            <ColumnWrapper>
                <ProductPrice>{price}</ProductPrice>
                <Span>13 глав</Span>
                <Span>46 минут</Span>
                <Paragraph>Вы отправляетесь в таинcтвенное путешествие, после которого вы стали замечать перемены в вашей жизни</Paragraph>
                <Button>Купить</Button>
            </ColumnWrapper>

        </ItemContainer>
    );
}

export default BigProductItem;
