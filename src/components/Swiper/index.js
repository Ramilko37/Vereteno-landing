import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.css';
import ProductItem from "../ProductItem";
import SwiperItem from "../SwiperProduct";
import styled from "styled-components/macro";

const SwiperPagination = styled.div`
  position: absolute;
  text-align: center;
  transition: .3s opacity;
  transform: translate(0);
  z-index: 10;
`


const fablesMock = [
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
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
]

export const SwiperContainer = (visibility) => {
    return (
        <div className={styles.swiperContainer}>

        <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            className={styles.swiperWrapper}
            touchEventsTarget={"container"}
            pagination={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                // when window width is >= 640px
                // 389: {
                //     width: 374,
                //     slidesPerView: 2,
                // },
                // // when window width is >= 768px
                // 768: {
                //     width: 768,
                //     slidesPerView: 3,
                // },
            }}
        >
            {fablesMock.map(fable => {
                return <SwiperSlide key={fable.name} className={styles.swiperSlide}>
                    {/*<div className={styles.columnWrapper}>*/}
                    {/*    <img className={styles.swiperImage} src={fable.image}/>*/}
                    {/*    <span className={styles.swiperName}>{fable.name}</span>*/}
                    {/*    <span className={styles.swiperPrice}>{fable.price}</span>*/}
                    {/*</div>*/}

                    <SwiperItem visibility={visibility} />

                </SwiperSlide>

            })}
            <SwiperPagination/>
        </Swiper>
        </div>
    );
};
