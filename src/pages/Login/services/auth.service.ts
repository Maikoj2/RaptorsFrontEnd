import { loginAdacter } from "../adacter/adacter.login";



const baseUrl = 'http://localhost:3000/';
const loginUrl = `${baseUrl}login`;

export const login =  async() => {
    return fetch(loginUrl)
    .then(res =>   res.json())
    .then(res => loginAdacter(res));
}