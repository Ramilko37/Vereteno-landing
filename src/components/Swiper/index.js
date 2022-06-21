import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.css';
import ProductItem from "../ProductItem";
import SwiperItem from "../SwiperItem";
import styled from "styled-components/macro";
import {useState} from "react";
import { useSwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom";


const SwiperPagination = styled.div`
  position: absolute;
  text-align: center;
  transition: .3s opacity;
  transform: translate(0);
  z-index: 10;
`

const DescriptionTitle = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #414141;
  margin: 0;
  margin-bottom: 20px;
  font-family: 'Acherus Feral', sans-serif;
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
  z-index: 100;
`
const DescriptionSubtitle = styled.div`
    width: 100%;
`


const tarrifs = [
    {
        title: 'Философ',
        subtitle: 'Он же волшебник в начале пути ',
        startPrice: 'На премьере 15.555',
        secondPrice: 'С 28 июня 17.777',
        id: 0
    },
    {
        title: 'Посвященный',
        subtitle: 'Он же маг, выбирающий путь волшебной практики, имея доступ к ключам',
        startPrice: 'На премьере 15.555',
        secondPrice: 'С 28 июня 17.777',
        id: 1
    },
    {
        title: 'Мастер',
        subtitle: 'Он же волшебник 3 стадии, где чудеса это каждодневная норма, тот который уже ничего не говорит, он просто знает, чувствует, создает ',
        startPrice: 'На премьере 33.333',
        secondPrice: 'С 28 июня 35.555',
        id: 2
    },
];

const bulletsPhilosoph = ['Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»', 'Доступ ко всем основным записям',
    'Чат в телеграмме с другими сказочниками этого же тарифа', 'Доступ 1 месяц после выхода всех записей в приложении'];

const bulletsRookie = [' ⁃ Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»',
                        '⁃ Доступ ко всем основным записям',
                        '⁃ Доступ к новым аудиозаписям: Комната тени; Аудио «любой сценарий»; Динамическая медитация ; Комната мастеров (4 аудиозаписи); Аудио «жить, а не выживать»',
                        '⁃ Канал с аудио ключами к сказке от Мари (послания из реального мира)',
                        '⁃ Чат в телеграмме с другими сказочниками этого же тарифа и с хранителями-помощниками ',
                        ' ⁃ Доступ 3 месяца после выхода всех записей в приложении ',
                        ' ⁃ ZOOM созвон (мастер майнд с разборами Мари)'
];

const bulletsMaster = [' ⁃ Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»',
    '⁃ Доступ ко всем основным записям',
    '⁃ Доступ к новым аудиозаписям: Комната тени; Аудио «любой сценарий»; Динамическая медитация ; Комната мастеров (4 аудиозаписи); Аудио «жить, а не выживать»',
    '⁃ Канал с аудио ключами к сказке от Мари (послания из реального мира)',
    '⁃ Чат в телеграмме с другими сказочниками этого же тарифа и с хранителями-помощниками ',
    ' ⁃ Доступ 8 месяцев после выхода всех записей в приложении ',
    ' ⁃ 3 ZOOM созвона (мастер майнда с разборами Мари) ',
    '⁃ Лекции по этикету «НЕОЭЛИТА» в записи (бессрочный доступ) ',
    ' ⁃ Запись созвано «ПЕРЕХОД 2.0» (бессрочный доступ)  ',
    ' ⁃ «МЕТОД» - 2 сезона (бессрочный доступ)'
];

export const SwiperContainer = (visibility) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const swiperSlide = useSwiperSlide();

    console.log(swiperSlide)

    return (
        <div className={styles.swiperContainer}>

        <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            className={styles.swiperWrapper}
            touchEventsTarget={"container"}
            simulateTouch={true}
            pagination={true}
            slideToClickedSlide={true}
            onSlideChange={(swiper) => {
                console.log(swiper.activeIndex);
                setActiveSlide(swiper.activeIndex)
            }}
            onSwiper={(swiper) => console.log(swiper.activeIndex)}


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
            {tarrifs.map(tariff => {
                return <SwiperSlide key={tariff.title} className={styles.swiperSlide}>

                    <SwiperItem
                                key={tariff.title}
                                title={tariff.title}
                                startPrice={tariff.startPrice}
                                secondPrice={tariff.secondPrice}
                    />

                </SwiperSlide>

            })}
        </Swiper>
            <Description>
                <DescriptionTitle>Описание тарифа</DescriptionTitle>
                <DescriptionSubtitle>{tarrifs[activeSlide].subtitle}</DescriptionSubtitle>
                <List>
                    {activeSlide === 0 ? bulletsPhilosoph : bulletsRookie.map(bullet => {
                        return(<ListItem>{bullet}</ListItem>)
                    })}
                </List>
            </Description>
            <ButtonWrapper>
                <Link style={{margin: '0 auto'}} to={'/getcourse'}>
                    <Button>Продолжить оформление</Button>
                </Link>
            </ButtonWrapper>
        </div>
    );
};
