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

function Register({ preloader, error, onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState("Имя не должен быть пустым");
    const [emailError, setEmailError] = useState("Email не должен быть пустым");
    const [passwordError, setPasswordError] = useState(
        "Пароль не должен быть пустым"
    );
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, nameError, passwordError]);

    const handlerBlur = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.name) {
            case "name":
                setNameDirty(true);
                break;
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

    const nameHandler = (event) => {
        setName(event.target.value);
        if (event.target.value.length > 30) {
            if (!event.target.value) {
                setNameError("Имя не должен быть пустым");
            }
            setNameError("Имя должено быть меньше 255-ти символов");
        } else if (event.target.value.length < 2) {
            setNameError("Имя не должно быть больше 2х букв");
        } else {
            setNameError("");
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
        onRegister(name, email, password);
    };

    return (
        <AuthWrapper className = 'register'>
            <form className = 'register__container' onSubmit={handleSubmit} name='login'>
                <span className = 'register__span'>Имя</span>
                <EmailInput className = 'register__input'
                       value={name}
                       id='name-input'
                       type='name'
                       name='name'
                       required
                       onBlur={(event) => handlerBlur(event)}
                       onChange={(event) => nameHandler(event)}
                />
                <div className = 'register__line'></div>
                {nameDirty && nameError && (
                    <span id='name-input-error' className={
                        nameError
                            ? "register__error register__error_active"
                            : "register__error"
                    }>
            {nameError}
          </span>
                )}
                {/* <span className = 'register__error'>Что-то пошло не так...</span> */}
                <span className = 'register__span'>E-mail</span>
                <EmailInput className = 'register__input'
                       value={email}
                       id='email-input'
                       type='email'
                       name='email'
                       required
                       onBlur={(event) => handlerBlur(event)}
                       onChange={(event) => emailHandler(event)}
                />
                <div className = 'register__line'></div>
                {emailDirty && emailError && (
                    <span id='email-input-error' className={
                        emailError
                            ? "register__error register__error_active"
                            : "register__error"
                    }>
            {emailError}
          </span>
                )}
                {/* <span className = 'register__error'>Что-то пошло не так...</span> */}
                <span className = 'register__span'>Пароль</span>
                <EmailInput className = 'register__input'
                       value={password}
                       id='password-input'
                       type='password'
                       name='password'
                       required
                       onBlur={(event) => handlerBlur(event)}
                       onChange={(event) => passwordHandler(event)}
                />
                <div className = 'register__line'></div>
                {passwordDirty && passwordError && (
                    <span id='password-input-error' className={
                        passwordError
                            ? "register__error register__error_active"
                            : "register__error"
                    }>
            {passwordError}
          </span>
                )}
                {/* <span className = 'register__error'>Что-то пошло не так...</span> */}
                <div className = 'register-footer'>
                    <div className = 'register-footer__container'>
                        <button
                            className = 'register-footer__btn'
                            disabled={!formValid}
                            type='submit'
                            value='Зарегистрироваться'>Зарегестрироваться</button>
                        <span className = 'register-footer__span'>Уже зарегестрированы? <Link to = '/signin' className = 'register-footer__link'>Войти</Link></span>
                    </div>
                </div>
            </form>
        </AuthWrapper>
    );
}

export default Register;
