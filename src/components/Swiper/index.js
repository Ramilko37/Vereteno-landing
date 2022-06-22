import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.css';
import SwiperItem from "../SwiperItem";
import styled from "styled-components/macro";
import {useState} from "react";
import {Link} from "react-router-dom";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";


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


const tarifs = [
    {
        title: 'Посвященный',
        subtitle: 'Он же маг, выбирающий путь волшебной практики, имея доступ к ключам',
        startPrice: 'На премьере 15.555',
        secondPrice: 'С 28 июня 17.777',
        bullets: [
            'Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»',
            'Доступ ко всем основным записям',
            '⁃ Доступ к новым аудиозаписям: Комната тени; Аудио «любой сценарий»; Динамическая медитация Комната мастеров (4 аудиозаписи); Аудио «жить, а не выживать»',
            'Чат в телеграмме с другими сказочниками этого же тарифа', 'Доступ 1 месяц после выхода всех записей в приложении',
            '⁃ Канал с аудио ключами к сказке от Мари (послания из реального мира)',
            '⁃ Чат в телеграмме с другими сказочниками этого же тарифа и с хранителями-помощниками ',
            '⁃ Доступ 3 месяца после выхода всех записей в приложении ',
            '⁃ ZOOM созвон (мастер майнд с разборами Мари) '
        ],
        id: 0
    },
    {
        title: 'Мастер',
        subtitle: 'Он же волшебник 3 стадии, где чудеса это каждодневная норма, тот который уже ничего не говорит, он просто знает, чувствует, создает ',
        startPrice: '355.555',
        bullets: [
            'Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»',
            'Доступ ко всем основным записям',
            '⁃ Доступ к новым аудиозаписям: Комната тени; Аудио «любой сценарий»; Динамическая медитация Комната мастеров (4 аудиозаписи); Аудио «жить, а не выживать»',
            'Чат в телеграмме с другими сказочниками этого же тарифа', 'Доступ 1 месяц после выхода всех записей в приложении',
            '⁃ Канал с аудио ключами к сказке от Мари (послания из реального мира)',
            '⁃ Чат в телеграмме с другими сказочниками этого же тарифа и с хранителями-помощниками ',
            '⁃ Лекции по этикету «НЕОЭЛИТА» в записи (бессрочный доступ)',
            '⁃ Запись созвона «ПЕРЕХОД 2.0» (бессрочный доступ) ',
            '«МЕТОД» - 2 сезона (бессрочный доступ)'
        ],
        id: 1
    },
    {
        title: 'Философ',
        subtitle: 'Он же волшебник в начале пути ',
        startPrice: 'На премьере 15.555',
        secondPrice: 'С 28 июня 17.777',
        bullets: ['Доступ в приложении VERETENO к сказке «ЗАМОК ЛЮБВИ»',  'Доступ ко всем основным записям', 'Чат в телеграмме с другими сказочниками этого же тарифа', 'Доступ 1 месяц после выхода всех записей в приложении'],
        id: 2
    },
];

export const SwiperContainer = (visibility) => {
    const [activeSlide, setActiveSlide] = useState(0);



    return (
        <div className={styles.swiperContainer}>

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={'auto'}
            className={styles.swiperWrapper}
            touchEventsTarget={"container"}
            simulateTouch={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slideToClickedSlide={true}
            loop={true}
            onSlideChange={(swiper) => {
                setActiveSlide(() => (swiper.realIndex));
            }}
            breakpoints={{
                389: {
                    width: 374,
                    slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 4,
                },
            }}
        >
            {tarifs.map(tariff => {
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
                <DescriptionSubtitle>{tarifs[activeSlide].subtitle}</DescriptionSubtitle>
                <List>
                    {tarifs[activeSlide].bullets.map(item =>
                        <ListItem>{item}</ListItem>
                    )}
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
