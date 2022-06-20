import {API_URL, BASE_URL} from "./constants";
import axios from "axios";
import login from "../components/Login/Login";



const USER_ROLE = "ROLE_ADMIN";

const checkAnswerCorrectness = (response) => {
    if (response.ok) {
        return response.json();
    }

    return Promise.reject(new Error(`Ошибка ${response.status}`));
};




export const register = async (username, email, password) => {
    return await fetch(`http://newapi-env.eba-extbp2py.eu-central-1.elasticbeanstalk.com/users/signup`, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            username: username, email: email, password: password, appUserRoles: [
                USER_ROLE
            ]
        })
    }).then((response) => console.log(response.json()));
};

export const authorize = (name, password) => {
    return axios.post(`http://newapi-env.eba-extbp2py.eu-central-1.elasticbeanstalk.com/users/signin?password=${password}&username=${name}`)
        .then(result => {
            return (result.data)
        })

};

export const checkToken = (token) => {
    return fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => console.log(response));
};

export const getSaveMovies = () =>
    fetch(`${API_URL}/movies`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => checkAnswerCorrectness(response));

// export const saveMovie = (data) => {
//     const urlImg = `${URL_NOMOREPATIES}` + data.image?.url;
//     return fetch(`${BASE_URL}/movies`, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         credentials: "omit",
//         body: JSON.stringify({
//             country: data.country,
//             director: data.director,
//             duration: data.duration,
//             year: data.year,
//             description: data.description,
//             image: urlImg,
//             trailer: data.trailerLink,
//             thumbnail: urlImg,
//             movieId: data.id,
//             nameRU: data.nameRU,
//             nameEN: data.nameEN,
//         }),
//     }).then((response) => checkAnswerCorrectness(response));
// };

export const deleteSaveMovie = (movieId) => {
    console.log(movieId)
    return fetch(`${API_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
        },
    }).then((response) => checkAnswerCorrectness(response));
};

export const getUserInfo = () => {
    return fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => checkAnswerCorrectness(response));
};

export const editUserInfo = (data) => {
    return fetch(`${API_URL}/users/me`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        }),
    }).then((response) => checkAnswerCorrectness(response));
};
