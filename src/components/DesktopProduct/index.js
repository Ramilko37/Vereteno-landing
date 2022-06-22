import React from 'react';
import styled from 'styled-components/macro';

const ItemContainer = styled.div`
    display: flex;
    position: relative;
    background-size: cover;
    justify-content: space-between;
    width: 753px;
    height: 416.15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 92px rgba(11, 21, 35, 0.15);
    border-radius: 8px;
    margin: 304px auto 0;
    padding: 55px 74px;
    box-sizing: border-box;
`

const ProductImg = styled.div`
  width: 274px;
  height: 306px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 0px 46.8877px rgba(6, 15, 33, 0.6));
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
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 32.2353px;
  line-height: 100%;
  /* or 32px */


  color: #000000;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
`

const Span = styled.span`

`

const Paragraph = styled.p`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #111D34;
  margin-bottom: 52px;
`
const Button = styled.button`
  width: 274px;
  height: 46px;
  background: #CEA687;
  border-radius: 8px;
  color: white;
  border: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
`

const FlexWrapper = styled.div`
  display: flex;
  width: 154px;
  justify-content: space-between; 
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
`

function DesktopProductItem({title, img, price, onClick}) {
    return (
        <ItemContainer onClick={onClick}>
            <ProductImg img={img}>
                <ProductTitle>{title}</ProductTitle>
            </ProductImg>

            <ColumnWrapper>
                <ProductPrice>{price}</ProductPrice>
                <FlexWrapper>
                    <Span>13 глав</Span>
                    <Span>46 минут</Span>
                </FlexWrapper>
                <Paragraph>Вы отправляетесь в таинcтвенное путешествие, после которого вы стали замечать перемены в вашей жизни</Paragraph>
                <Button>Купить</Button>
            </ColumnWrapper>

        </ItemContainer>
    );
}

export default DesktopProductItem;
