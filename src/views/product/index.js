import React from 'react';
import styled from 'styled-components';
import image from '../../static/images/fable-image.jpg';


const fablesMock = [
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
]


const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

const CardImage = styled.div`
  width: 390px;
  right: 20px;
  height: 288px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px -16px 44px rgba(11, 23, 34, 0.13));
  border-radius: 24px 24px 0px 0px;
 
  
`


function ProductCard() {
    return (
        <Container>
            <CardImage img={image} />
        </Container>
    );
}

export default ProductCard;
