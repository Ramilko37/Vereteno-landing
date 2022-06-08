import React, {useContext, useState} from "react";
import styled from 'styled-components/macro';
import {useForm} from "react-hook-form";
import DropDown from "../../components/DropDown";
import { firebase, auth } from '../../firebase';
import {Checkbox} from "../../components/CheckBox";
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';

// interface IProps {
//     handleLoggedIn: (e: boolean) => void
//     loggedIn: boolean
// }

const AuthWrapper = styled.div`
  width: 100%;
`

const FlexWrapper = styled.div`
  width: 358px;
  display: flex;
  margin: 16px auto;
`

const TextContent = styled.span`
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #414141;
  margin-left: 12px;
`

const LinkSpan = styled.a`
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #414141;
  margin-left: 12px;
  text-decoration: underline;
`

const PhoneInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 358px;
  height: 43px;
  background: #FFFFFF;
  border: 2px solid #CEA687;
  border-radius: 8px;
`

const CodeInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 358px;
  height: 43px;
  background: #FFFFFF;
  border: 2px solid #CEA687;
  border-radius: 8px;
  margin: 0 auto 16px;
`
const SubmitButton = styled.button`
  width: 358px;
  height: 43px;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  background: #CEA687;
  border: none;
  border-radius: 8px;
  margin: 0 auto;
  color: #FFFFFF;
  display: block;
  appearance: none;
  justify-content: center;
  //:hover {
  //  border: 5px solid wheat;
  //  transition-duration: 1s;
  //}
  :disabled {
   background: #858484;
 }
`



const Auth = ({handleLoggedIn, codeValue, setValue}) => {



    const [registered, setRegistered] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [phoneHandled, setPhoneHandled] = useState(false);
    const [checked, setChecked] = useState(false);
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [show, setShow] = useState(false);
    const [final, setFinal] = useState('');


    const handleCheckboxChange = () => {
        setChecked(!checked)
        console.log('checked', checked)
    }




    console.log(number)


    // const signIn = () => {
    //
    //     if (number === "" || number.length < 10) return;
    //
    //     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    //         size: "invisible",
    //         callback: function(response) {
    //             signIn();
    //         }
    //     });
    //     console.log('here')
    //
    //     auth.signInWithPhoneNumber(number, verify).then((result) => {
    //         console.log(number)
    //         console.log(verify)
    //         console.log('auth event')
    //         setFinal(result);
    //         alert("code sent")
    //         setShow(true);
    //         setPhoneHandled(!phoneHandled)
    //     })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            alert('HOORAY')
        }).catch((err) => {
            alert("Wrong code");
        })

        // console.log('OKAY');
        // navigate('/catalog');

    }



    // data.recaptcha = "1";
        // fetch('https://community.polyana-it.ru/api/auth/sign-in/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(json => {
        //         console.log("json: ", json);
        //         console.log('signUp')
        //         setRegistered(true)
        //         // setUsername(json.user.username)
        //     })
        //     .catch(errors => {
        //         console.log(errors)
        //     });

    //
    // const handleSignIn = (data) => {
    //     data.recaptcha = "1";
    //     fetch('https://community.polyana-it.ru/api/auth/auth/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(json => {
    //             console.log("json: ", json);
    //             console.log('signIn')
    //             localStorage.setItem('token', json.token);
    //             handleLoggedIn(true);
    //         });
    // };





    return (


        <AuthWrapper>
            {
                !phoneHandled
                    ?

                        <div style={{display: phoneHandled ? 'none' : 'flex'}}
                              className="sign-up"
                              >


                            <div className='flexWrapper'>
                                <FlexWrapper>
                                    <DropDown codeValue={codeValue} setValue={setValue}
                                    />
                                    {/*<PhoneInput*/}
                                    {/*    type="phone"*/}
                                    {/*    value={number} onChange={(e) => {*/}
                                    {/*    setNumber(e.target.value) }}*/}
                                    {/*    placeholder="phone number"*/}
                                    {/*/>*/}
                                    <PhoneInput
                                        type="phone"
                                        placeholder="phone"
                                        {...register("phone_number", {
                                            required: true,
                                            pattern: {
                                                value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
                                                message: 'CPF inválido',
                                            }
                                        })
                                        } />
                                </FlexWrapper>
                                <SubmitButton
                                    disabled={!checked}
                                    value={'Отправить'}
                                    onClick={() => console.log('SignIn')}
                                >Отправить</SubmitButton>
                                <div id="recaptcha-container"></div>
                            </div>
                        </div>
                        :
                        <div className="sign-up" onSubmit={() => console.log('COde')}
                              style={{display: !phoneHandled ? 'none' : 'block'}}
                        >
                            <CodeInput type="text" placeholder={"Enter your OTP"}
                                   onChange={(e) => { setOtp(e.target.value) }}></CodeInput>
                            <SubmitButton
                                disabled={!checked}
                                onClick={ValidateOtp}
                            >Отправить</SubmitButton>
                        </div>
            }

                        <FlexWrapper onClick={handleCheckboxChange}>
                            <Checkbox checked={checked} onChange={() => console.log('Handled')}/>
                            <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#'>политикой
                                конфиденциальности</LinkSpan></TextContent>
                        </FlexWrapper>


        </AuthWrapper>
    )

            }

export default Auth;




