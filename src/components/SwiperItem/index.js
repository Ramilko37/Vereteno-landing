import React from 'react';
import styled from 'styled-components/macro'


const Container = styled.section`
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  position: relative;
`

const Title = styled.h3`
  font-family: 'Viaoda Libre', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #414141;
  margin: 30px 0 0;
  justify-self: start;
`
const SubTitle = styled.span`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #414141;
`

const StartPrice = styled.span`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: #414141;
  margin-top: 35px;
`

const SecondPrice = styled.span`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin-top: 10px;
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


function SwiperItem({title, subtitle, startPrice, secondPrice}) {
    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <SecondPrice>{secondPrice}</SecondPrice>
            <StartPrice>{startPrice}</StartPrice>
        </Container>
    );
}

export default SwiperItem;
