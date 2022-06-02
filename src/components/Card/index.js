import React from 'react';
import styled from "styled-components";

const CardContainer = styled.section`
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

function Card(props) {
    return (
       CardContainer
    );
}

export default Card;
