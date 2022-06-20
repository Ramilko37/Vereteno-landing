import React, { useState } from 'react';
import { firebase, auth } from '../../firebase';
import DropDown from "../DropDown";
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 390px) {
    width: 90%;
  }
`

const NumberInput = styled.input`
  width: 248px;
  height: 43px;
  background: #FFFFFF;
  border: 2px solid #CEA687;
  border-radius: 8px;
  padding: 12px 16px;
  
`

const Button = styled.button`
  width: 358px;
  height: 43px;
  background: #CEA687;
  border-radius: 8px;
  appearance: none;
  border: none;
  margin: 16px auto 0;
  color: #fff;
  display: ${props => props.visible || 'none'};
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  @media (max-width: 390px) {
    width: 90%;
  }
`


const Login = (registration, login) => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [visible, setVisible] = useState(false);
    const [final, setfinal] = useState('');

    const handleRegister = () => {
        registration();
    }

    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setVisible(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            window.location.href="/catalog";
        }).catch((err) => {
            alert("Wrong code");
        })
    }


    return (
        <div style={{ "marginTop": "200px", display: 'flex', flexDirection: 'column' }}>
            <Container>
                    <DropDown />
                    <NumberInput type='number' value={mynumber} onChange={(e) => {
                        setnumber(e.target.value) }}
                           placeholder="(123) 456-78-90 " />
                    <br /><br />
                    <div id="recaptcha-container"></div>

                <div style={{ display: visible ? "block" : "none" }}>
                    <NumberInput type="number" placeholder={"Enter your OTP"}
                           onChange={(e) => { setotp(e.target.value + '7')}}></NumberInput>
                    <br /><br />
                </div>
            </Container>

            <Button visible={!visible} onClick={handleRegister}>Register</Button>

            <Button visible={visible} onClick={ValidateOtp}>Verify</Button>
        </div>
    );
}

export default Login;
