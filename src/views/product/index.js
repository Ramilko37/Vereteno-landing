import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import image from '../../static/images/fable-image.jpg';
import { Link, useParams } from "react-router-dom";
import useWindowDimensions from "../../mainApi/getWIndowDimensions";
import styles from "../../components/Swiper/styles.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import BigSwiperItem from "../../components/BigProductsSwiper";
import axios from "axios";
import login from "../../components/Login/Login";
import {PRODUCTS_DATA} from "../../mainApi/constants";
import {removeDirectivesFromDocument} from "@apollo/client/utilities";


const fablesMock = [
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999',
        description: 'Иммерсивный аудио-квест погрузившись в который, ты проживешь самую важную трансформацию в своей жизни'
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


const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 700px;
  position: relative;
`

const CardImage = styled.img`
  filter: drop-shadow(0px -16px 44px rgba(11, 23, 34, 0.13));
  border-radius: 24px 24px 0px 0px;
  z-index: 10;
`

const CardContent = styled.div`
  width: 390px;
  height: 490px;
  border: 1px solid red;
  position: absolute;
  top: 330px;
  z-index: 100;
  background: #fff;
  border-radius: 24px 24px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  box-sizing: border-box;
`

const ContentTitle = styled.h2`
  font-family: 'Viaoda Libre', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  font-feature-settings: 'ordn' on;
  color: #414141;
  margin: 0 0 24px 0;
  align-self: flex-start;
`

const ContentPrice = styled.span`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  margin-bottom: 24px;
`

const ContentDescription = styled.p`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin: 0 0 24px 0;
`

const ContentDate = styled.span`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin: 0 0 24px 0;
`

const ContentBullet = styled.a`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  box-sizing: border-box;
  background: #FDFAF7;
  border-radius: 16px;
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin-right: 16px;
  :last-child {
    margin-right: 0;
  }
`

const ChooseTarifButton = styled.button`
  width: 100%;
  background: #CEA687;
  border-radius: 8px;
  height: 56px;
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  appearance: none;
  border: none;
  padding: 16px 95px;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 93px auto 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  opacity: 0;
  transition: .9s opacity ease-in-out;й
`


function ProductCard() {

    const {id} = useParams()


    const MyQuery = `{
     vereteno_product {
    description
    picture
    picture_preview
    product_type_id
    title
    id
  }
}`

    const [fable, setFable] = useState([]);
    const {width, height} = useWindowDimensions();


        React.useEffect(() => {
            axios.get(`http://newapi-env.eba-extbp2py.eu-central-1.elasticbeanstalk.com/product_types/${id}`)
                // .then(res => res.data.filter(
                //     item => item.id === parseInt(id)
                // ))
                // .then(res => console.log(res.data.filter(item => item.id === parseInt(id))))
                .then(data => setFable(data.data))

        }, []);

    console.log(fable)



    return (<Wrapper style={{ opacity: 1 }}>
        <CardContainer>
            <CardImage src={fable.picture}/>
        </CardContainer>
        <CardContent>
            <ContentTitle>{fable.title}</ContentTitle>
            <ContentPrice>{`От ${fable.price} P`}</ContentPrice>
            <ContentDescription>{fable.description}</ContentDescription>
            <ContentDate>Старт сказки: 24.06.2022</ContentDate>
            <div style={{display: "flex"}}>
                <ContentBullet>12 глав</ContentBullet>
                <ContentBullet>5 импринтингов</ContentBullet>
            </div>
            <Link to='/tariff'><ChooseTarifButton>Выберите тариф</ChooseTarifButton></Link>
        </CardContent>
    </Wrapper>)
}


    export default ProductCard;




                        {/*:*/}

                        {/*<>*/}
                        {/*    <Swiper*/}
                        {/*        spaceBetween={16}*/}
                        {/*        slidesPerView={2}*/}
                        {/*        className={styles.bigSwiperWrapper}*/}
                        {/*        touchEventsTarget={"container"}*/}
                        {/*        simulateTouch={true}*/}
                        {/*        pagination={true}*/}
                        {/*        slideToClickedSlide={true}*/}
                        {/*        onSlideChange={() => console.log('slide change')}*/}
                        {/*        onSwiper={(swiper) => console.log(swiper)}*/}
                        {/*    >*/}
                        {/*        {fable.map(item => {*/}
                        {/*            return <SwiperSlide key={item.name} className={styles.bigSwiperSlide}>*/}


                        {/*                <BigSwiperItem img={item.picture} title={item.title} price={item.price}/>*/}


                        {/*            </SwiperSlide>*/}

                        {/*        })}*/}
                        {/*    </Swiper>*/}
                        {/*</>*/}






