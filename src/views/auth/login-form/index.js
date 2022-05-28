import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import "./style.css";
import DropDown from "../../../components/DropDown";
import styled from 'styled-components';
import {Checkbox} from "../../../components/CheckBox";

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

const LoginForm = ({handleSignUp, handleSignIn, registered, codeValue, setValue}) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [phoneHandled, setPhoneHandled] = useState(false);


    const onSubmitSignUp = (data) => {
        console.log(data)
        handleSignUp(data);
        setPhoneHandled(!phoneHandled);
        console.log(phoneHandled);
    };

    const onSubmitSignIn = (data) => {
        console.log(data)
        handleSignIn(data);
        setPhoneHandled(!phoneHandled);
        console.log(phoneHandled);
    };

    // console.log(errors);
    console.log(registered)



    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked)
        console.log('checked', checked)
    }


    return (
        <>
            {

                    <>
                    <form className="sign-up" onSubmit={!registered ? handleSubmit(onSubmitSignUp) : handleSubmit(onSubmitSignIn)}>
                        <div className='flexWrapper'>
                            <FlexWrapper>
                                <DropDown codeValue={codeValue} setValue={setValue}/>


                                <PhoneInput  style={{display: phoneHandled ? 'none' : 'block'}}
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
                            <CodeInput
                                style={{display: phoneHandled ? 'block' : 'none'}}
                                id="code"
                                placeholder="Код"
                                {...register("code", {
                                    required: "required",
                                })}
                                type="password"
                            />
                        </div>

                        <SubmitButton
                            disabled={!checked}
                            type="submit"
                        />
                    </form>
                    <FlexWrapper onClick={handleCheckboxChange}>
                        <Checkbox checked={checked} onChange={() => console.log('Changed')}/>
                        <TextContent>При входе в аккаунт, я соглашаюсь с<LinkSpan href='#' >политикой конфиденциальности</LinkSpan></TextContent>
                    </FlexWrapper>
                        </>
                    // :
                    // <form className="sign-in" onSubmit={handleSubmit(onSubmitSignIn)}>
                    //     <PhoneInput  style={{display: phoneHandled ? 'none' : 'block'}}
                    //             type="phone"
                    //            placeholder="phone"
                    //            {...register("phone_number", {
                    //                required: true,
                    //                pattern: {
                    //                    value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
                    //                    message: 'CPF inválido',
                    //                }
                    //            })
                    //            } />
                    //     <CodeInput
                    //         style={{display: phoneHandled ? 'block' : 'none'}}
                    //         id="code"
                    //         placeholder="Код"
                    //         {...register("code", {
                    //             required: "required",
                    //         })}
                    //         type="password"
                    //     />
                    //     <input className='submitButton' type="submit"/>
                    // </form>
            }
        </>
    );
}
export default LoginForm;
