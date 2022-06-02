import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


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

const EmailInput = styled.input`
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

const PasswordInput = styled.input`
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

function NewLogin({ error, onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email не должен быть пустым");
    const [passwordError, setPasswordError] = useState(
        "Пароль не должен быть пустым"
    );
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);

        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const handlerBlur = (event) => {
        switch (event.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError("Некорректный email, пример: text@mail.ru");
            if (!event.target.value) {
                setEmailError("Email не должен быть пустым");
            }
        } else {
            setEmailError("");
        }
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
            setPasswordError("Пароль должен быть больше 8-ми символов");
            if (!event.target.value) {
                setPasswordError("Пароль не должен быть пустым");
            }
        } else if (event.target.value.length > 255) {
            setPasswordError("Пароль должен быть меньше 255-ти символов");
        } else {
            setPasswordError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <AuthWrapper className = 'login'>
            <form className = 'login__container' onSubmit={handleSubmit} name='login'>
                <span className = 'login__span'>E-mail</span>
                <EmailInput className = 'login__input'
                       value={email}
                       id='email-input'
                       type='email'
                       name='email'
                       required
                       onBlur={(event) => handlerBlur(event)}
                       onChange={(event) => emailHandler(event)}
                />
                <div className = 'login__line'></div>
                {emailDirty && emailError && (
                    <span id='email-input-error'  className={
                        emailError
                            ? "login__error login__error_active"
                            : "login__error"
                    }>
            {emailError}
          </span>
                )}
                <span className = 'login__span'>Пароль</span>
                <PasswordInput className = 'login__input'
                       value={password}
                       id='password-input'
                       type='password'
                       name='password'
                       required
                       onBlur={(event) => handlerBlur(event)}
                       onChange={(event) => passwordHandler(event)}
                />
                <div className = 'login__line'></div>
                {passwordDirty && passwordError && (
                    <span id='password-input-error' className={
                        passwordError
                            ? "login__error login__error_active"
                            : "login__error"
                    }>
              {passwordError}
            </span>
                )}
                <div className = 'login-footer'>
                    <div className = 'login-footer__container'>
                        <button className = 'login-footer__btn'
                                disabled={!formValid}
                                type='submit'
                                value='Войти'>Войти</button>
                        <span className = 'login-footer__span'>Ещё не зарегистрированы? <Link to = 'signup' className = 'login-footer__link'>Регистрация</Link></span>
                    </div>
                </div>
            </form>
        </AuthWrapper>
    );
}

export default NewLogin
