import React, {Component, useState} from "react";
import styled from 'styled-components/macro';

import NewLogin from "../NewLogin";
import {ReactComponent as AppStore} from "../../static/images/appStore.svg";

const Title = styled.h1`
  text-align: left;
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 110%;
  color: #414141;
  margin-bottom: 45px;
  margin-top: 166px;
  width: 358px;
  
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 275px;
  margin-bottom: 64px;
`

export default function Home() {

    return (

           <>
                <Title>Войти или создать
                    профиль</Title>
                <NewLogin />
                {/*<FlexWrapper onClick={handleCheckboxChange}>*/}
                {/*    <Checkbox checked={checked} onChange={() => console.log('Changed')}/>*/}
                {/*    <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#' >политикой конфиденциальности</LinkSpan></TextContent>*/}
                {/*</FlexWrapper>*/}
                <ButtonsWrapper>
                    <AppStore onClick={() => console.log('Clicked')} />
                    <AppStore  onClick={() => console.log('Clicked')}/>
                </ButtonsWrapper>
            </>

    )
}
