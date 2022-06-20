import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import posterImg from '../../static/images/posterImg.svg'
import posterImgBig from '../../static/images/PosterBg.jpg'
import arrowRight from '../../static/images/arrow.svg'
import profileIcon from '../../static/images/profileIcon.svg'
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";




const CatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transition: .9s opacity ease-in-out;
  position: relative;
  @media (min-width: 768px) {
    width: 82%;
    margin: 0 auto;
    justify-self: left;
  }
`

const Poster = styled.div`
  width: 358px;
  height: 153px;
  margin: 0 auto;
  background-image: url(${posterImg});
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    width: 100%;
    height: 272px;
    background-image: url(${posterImgBig});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 24px;
  }
`

const PosterTitle = styled.h3`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #FFFFFF;
  white-space: pre-wrap;
  margin-bottom: 12px;
  margin-top: 49px;
`

const PosterLink = styled.a`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: #FFFFFF;
`

const FlexWrapper = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  padding-bottom: 2px;
  width: 289px;
  margin-left: 16px;
  position: relative;
`

const ArrowImage = styled.img`
  position: absolute;
  right: 5px;
  bottom: 5px;
`

const ProfileHead = styled.section`
  display: flex;
  width: 100%;
  height: 37px;
  background: transparent;
  margin: 27px auto 40px;
  position: relative;
`

const ProfileIcon = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${profileIcon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  right: 0;
  position: absolute;
  appearance: none;
  border: none;
  margin-top: 3px;
`



function Catalog(loggedIn) {


    return (
        <>
        <CatalogContainer style={loggedIn &&  { opacity: 1 }}>
            <ProfileHead>
                <ProfileIcon />
            </ProfileHead>


            <Poster>
                <FlexWrapper>
                <PosterTitle>Двери Замка Любви
                    открываются 24 июня</PosterTitle>
                    <PosterLink>Выберите тариф сейчас</PosterLink>
                    <ArrowImage src={arrowRight}/>
                </FlexWrapper>
            </Poster>
            <Categories/>
        </CatalogContainer>
    <Footer />
        </>
    );
}

export default Catalog;
