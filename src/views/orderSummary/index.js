import React from 'react';
import styled from 'styled-components/macro';;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  font-family: "Acherus Feral", sans-serif;
`

const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 110%;
  color: #414141;
  margin-top: 133px;
`

const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #DFDFDF;
  box-sizing: border-box;
  margin-bottom: 24px; 
  :last-of-type {
    margin-bottom: 40px;
}
`
const DetailsChunk = styled.li`
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  color: #868686;
  margin-bottom: 24px;
  :last-of-type {
    margin-bottom: 40px;
  }
  `

const DetailsItem = styled.div`
  width: fit-content;
  :first-child, last-child{
    float: left;
  }
`

const Dots = styled.div`
  flex: 1 0;
  border-bottom: 1px dotted #868686;
  height: 1em;
  margin: 0 .4em;
`

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 70px;
  margin-bottom: 56px;
  margin-left: auto;
`
const SummaryTitle = styled.span`
  font-family: 'Acherus Feral', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #000000;
`

const SummaryPrice = styled(SummaryTitle)`
  font-size: 32px;
  text-align: right;
`

const PayBtn = styled.button`
  appearance: none;
  border: none;
  width: 100%;
  height: 56px;
  background: #CEA687;
  border-radius: 8px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 40px;
`

function OrderSummary(header) {
    return (
        <Container>
            <Title>Ваш заказ</Title>
            <DetailsList>
                <DetailsChunk>
                    <DetailsItem>Email</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
                <DetailsChunk>
                    <DetailsItem>Имя</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
                <DetailsChunk>
                    <DetailsItem>Телефон</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
            </DetailsList>
            <DetailsList>
                <DetailsChunk>
                    <DetailsItem>Сказка</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
                <DetailsChunk>
                    <DetailsItem>Тариф</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
                <DetailsChunk>
                    <DetailsItem>Дата начала</DetailsItem><Dots/><DetailsItem>Name</DetailsItem>
                </DetailsChunk>
            </DetailsList>
            <Summary>
                <SummaryTitle>Стоимость</SummaryTitle>
                <SummaryPrice>25555 ₽</SummaryPrice>
            </Summary>
            <PayBtn>Оплатить</PayBtn>
        </Container>

    );
}

export default OrderSummary;
