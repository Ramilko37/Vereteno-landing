import React, {Component, useState} from "react";
import styled from 'styled-components';
import appStore from "../../static/images/appStore.svg";
import Auth from "../../views/auth";
import playMarket from '../../static/images/playMarket.svg'

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

const AppStore = styled.img`
  margin-left: 10px;
`

export default function Home() {

    return (

           <>
                <Title>Войти или создать
                    профиль</Title>
                <Auth />
                {/*<FlexWrapper onClick={handleCheckboxChange}>*/}
                {/*    <Checkbox checked={checked} onChange={() => console.log('Changed')}/>*/}
                {/*    <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#' >политикой конфиденциальности</LinkSpan></TextContent>*/}
                {/*</FlexWrapper>*/}
                <ButtonsWrapper>
                    <img src={playMarket} onClick={() => console.log('Clicked')}/>
                    <AppStore src={appStore} onClick={() => console.log('Clicked')}/>
                </ButtonsWrapper>
            </>

    )
}
