import React, {useContext, useState} from "react";
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import DropDown from "../../components/DropDown";
import {Checkbox} from "../../components/CheckBox";
import Signup from "../../components/SignUp/SignUp";


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
  margin-bottom: 16px;
`
const SubmitButton = styled.input`
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


    const handleCheckboxChange = () => {
        setChecked(!checked)
        console.log('checked', checked)
    }


    // const handleSignUp = (data, e) => {
    //     e.preventDefault()
    //    setPhoneHandled(!phoneHandled)
    //     setPhoneHandled(!phoneHandled);
    //     console.log(phoneHandled)
    //     data.recaptcha = "1";
    //     fetch('https://community.polyana-it.ru/api/auth/sign-in/', {
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
    //             console.log('signUp')
    //             setRegistered(true)
    //             // setUsername(json.user.username)
    //         })
    //         .catch(errors => {
    //             console.log(errors)
    //         });
    // };
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

    console.log(registered)
    console.log(errors)


    return (


        // <AuthWrapper>
        //     {
        //         !phoneHandled
        //             ?
        //
        //                 <form style={{display: phoneHandled ? 'none' : 'flex'}}
        //                       className="sign-up"
        //                       >
        //                     <div className='flexWrapper'>
        //                         <FlexWrapper>
        //                             <DropDown codeValue={codeValue} setValue={setValue}
        //                             />
        //                             <PhoneInput
        //                                 type="phone"
        //                                 placeholder="phone"
        //                                 {...register("phone_number", {
        //                                     required: true,
        //                                     pattern: {
        //                                         value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
        //                                         message: 'CPF inválido',
        //                                     }
        //                                 })
        //                                 } />
        //                         </FlexWrapper>
        //                         <SubmitButton
        //                             disabled={!checked}
        //                             type="submit"
        //
        //                         />
        //                     </div>
        //                 </form>
        //                 :
        //                 <form className="sign-up" onSubmit={() => console.log('COde')}
        //                       style={{display: !phoneHandled ? 'none' : 'block'}}
        //                 >
        //                     <CodeInput
        //                         id="code"
        //                         placeholder="Код"
        //                         maxlength='4'
        //                         {...register("code", {
        //                             required: "required",
        //                         })}
        //                         type="password"
        //                     />
        //                     <SubmitButton
        //                         disabled={!checked}
        //                         type="submit"
        //                     />
        //                 </form>
        //     }
        //
        //                 <FlexWrapper onClick={handleCheckboxChange}>
        //                     <Checkbox checked={checked} onChange={() => console.log('Handled')}/>
        //                     <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#'>политикой
        //                         конфиденциальности</LinkSpan></TextContent>
        //                 </FlexWrapper>
        //
        //
        // </AuthWrapper>




        <Signup />
    )

            }

export default Auth;




