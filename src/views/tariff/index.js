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

const DescriptionTitle = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin: 0;
  font-family: 'Acherus Feral', sans-serif;
  color: #414141;
`

const List = styled.ul`
  width: 92%;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  justify-content: start;
  color: #414141;
  list-style: inside;
`

const ListItem = styled.li`
  width: 100%;
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #414141;
`

const Description = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Button = styled.button`
  width: 358px;
  height: 56px;
  left: 16px;
  bottom: 40px;
  background: #CEA687;
  border-radius: 8px;
  border: none;
  appearance: none;
  color: #FFFFFF;
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  margin: 0 auto 40px;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 40px;
`

function Tariff(props) {
    return (
        <Container>
            <Title>Замок любви</Title>
            <Subtitle>Тарифы</Subtitle>
           <SwiperContainer/>
            <Description>
                <DescriptionTitle>Описание тарифа</DescriptionTitle>
                <List>
                    <ListItem>
                         6 записей в башне наслаждения
                    </ListItem>
                    <ListItem>
                         6 записей в башне наслаждения
                    </ListItem>
                    <ListItem>
                         6 записей в башне наслаждения
                    </ListItem>
                    <ListItem>
                         6 записей в башне наслаждения
                    </ListItem>
                    <ListItem>
                         6 записей в башне наслаждения
                    </ListItem>
                </List>
            </Description>
            <ButtonWrapper>
                <Link style={{margin: '0 auto'}} to={'/getcourse'}>
                    <Button>Продолжить оформление</Button>
                </Link>
            </ButtonWrapper>
        </Container>
    );
}

export default Tariff;
