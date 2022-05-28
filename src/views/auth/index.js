import React, {useState} from "react";
import LoginForm from "./login-form";
import styled from 'styled-components';

// interface IProps {
//     handleLoggedIn: (e: boolean) => void
//     loggedIn: boolean
// }

const AuthWrapper = styled.div`
  width: 100%;
`

const Auth = ({handleLoggedIn, loggedIn, checked}) => {

    const [registered, setRegistered] = useState(false);

    const handleSignUp = (data) => {
        data.recaptcha = "1";
        fetch('https://community.polyana-it.ru/api/auth/sign-in/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                console.log("json: ", json);
                console.log('signUp')
                setRegistered(true)
                // setUsername(json.user.username)
            });
    };

    const handleSignIn = (data) => {
        data.recaptcha = "1";
        fetch('https://community.polyana-it.ru/api/auth/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                console.log("json: ", json);
                console.log('signIn')
                localStorage.setItem('token', json.token);
                handleLoggedIn(true);
            });
    };

    return (
        <AuthWrapper>
            {
                loggedIn ? <></> :
                    <LoginForm handleSignUp={handleSignUp} handleSignIn={handleSignIn} registered={registered}/>
            }
        </AuthWrapper>
    )
}

export default Auth




