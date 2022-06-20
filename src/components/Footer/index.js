import React from 'react';
import styled from 'styled-components/macro';
import {ReactComponent as Logo} from '../../static/images/vereteno.svg';
import {ReactComponent as Lines} from '../../static/images/lines.svg';


const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 4px solid #CEA687;
  background: #111D34;
  padding: 37px 0 38px;
  box-sizing: border-box;
  height: 400px;
  margin-top: 76px;
`
const FooterLink = styled.a`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  margin-top: 23px;
  margin-bottom: 16px;
  :last-child {
    margin: 0;
  }
`

function Footer(props) {

    return (
        <FooterContainer>
            <Logo style={{ margin: '0 auto 23px' }}/>
            <Lines style={{ width: '100%' }}/>
            <FooterLink>Политика конфиденциальности</FooterLink>
            <FooterLink>Публичная оферта</FooterLink>
        </FooterContainer>
    );
}

export default Footer;
