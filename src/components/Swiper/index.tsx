import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import styles from './styles.module.css';
import Image from "next/image";

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

export const SwiperContainer = () => {
    return (
        <div className={styles.swiperContainer}>
            <h4 className={styles.swiperTitle}>{fablesMock[0].title}</h4>
        <Swiper
            spaceBetween={16}
            slidesPerView={3}
            className={styles.swiperWrapper}
            touchEventsTarget={"container"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                // when window width is >= 640px
                389: {
                    width: 374,
                    slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
            }}
        >
            {fablesMock.map(fable => {
                return <SwiperSlide key={fable.name} className={styles.swiperSlide}>
                    <div className={styles.columnWrapper}>
                        <Image width={163} height={184} className={styles.swiperImage} src={fable.image}/>
                        <span className={styles.swiperName}>{fable.name}</span>
                        <span className={styles.swiperPrice}>{fable.price}</span>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
        </div>
    );
};
