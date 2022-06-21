import React from 'react';
import styled from 'styled-components/macro'
import {SwiperContainer} from "../../components/Swiper";
import {Link} from "react-router-dom";

const Container = styled.section`
  font-family: 'Acherus Feral',sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`

const Title = styled.h4`
  font-family: 'Viaoda Libre',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  text-align: left;
  margin-left: 16px;
  margin-bottom: 32px;
  margin-top: 114px;
  font-feature-settings: 'ordn' on;
  color: #414141;
`

const Subtitle = styled.h5`
  font-family: "Acherus Feral", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
  margin: 0 0 26px 16px;
`




function Tariff(props) {
    return (
        <Container>
            <Title>Замок любви</Title>
            <Subtitle>Тарифы</Subtitle>
           <SwiperContainer/>

        </Container>
    );
}

export default Tariff;
