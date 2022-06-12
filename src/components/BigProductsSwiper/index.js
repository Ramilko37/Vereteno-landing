import React from 'react';
import styled from 'styled-components/macro'
import ProductItem from "../ProductItem";
import BigProductItem from "../BigProductItem";


const Container = styled.section`
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  position: relative;
`

const Title = styled.h3`
  font-family: 'Viaoda Libre',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #414141;
  margin: 30px 0 55px;
  justify-self: start;
`

const OldPrice = styled.span`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  text-decoration-line: line-through;
  color: #868686;
`

const NewPrice = styled.span`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #414141;
`

const Popular = styled.div`
  width: 85px;
  height: 24px;
  background: #CEA687;
  border-radius: 4px;
  content: 'Popular';
  color: #FFFFFF;
  position: absolute;
  top: -15px;
  right: 5px;
  display: ${props => props.visibility? 'block': 'none'} ;
`


function BigSwiperItem(visibility) {
    return (
        <Container>
            <BigProductItem/>
        </Container>
    );
}

export default BigSwiperItem;
