import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 166px 1rem 64px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
`

const Title = styled.h3`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 110%;
  color: #414141;
  margin-bottom: 48px;
`

const Text = styled.p`
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin-bottom: 426px;
`

const BackToAppBtn = styled.button`
  width: 358px;
  height: 43px;
  left: calc(50% - 358px/2);
  top: calc(50% - 43px/2 + 336.5px);
  background: #CEA687;
  border-radius: 8px;
  margin: 0 auto;
  appearance: none;
  border: none;
  color: #FFFFFF;
  font-family: "Acherus Feral", sans-serif;
`

function Confirmed(props) {
    return (
        <Container>
            <Title>Заказ оформлен</Title>
            <Text>Вы купили Замок Любви. Скоро эта сказка появится в приложении на главной странице</Text>
            <BackToAppBtn onClick={() => console.log('Back to mobile')}>Вернуться в приложение</BackToAppBtn>
        </Container>
    );
}

export default Confirmed;
