import { products_list, user_list } from './data';
import {ApiService} from './configApiService';
export const fetchData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        /* const response2 = await fetch('http://localhost:3000/users');
        const data2 = await response2.json(); */
        // console.log('day la ket qua khi ghe api', {data, products_list});
        // console.log('listproduct', listproduct);
        return {data, products_list};
    } catch (e) {
        console.log(e);
    }
};
// https://quoctho.herokuapp.com/api/users/authenticate
export const fetchUserData = async (req) => {
    try {
        let payload = `email=${req.email}&password=${req.password}`;
        const response = await fetch('https://quoctho.herokuapp.com/api/users/authenticate', {
            method : 'POST',
            headers: {
                'Accept'      : 'application/json, application/xml, text/play, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: payload

        });
        const data = await response.json();
        return {data};
    } catch (e) {
        console.log(e);
    }
};
export const fetchUserToken = async (req) => {
    try {
        let token = `token=${req}`;
        const response = await fetch('https://quoctho.herokuapp.com/api/users/id', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: token
        });
        const data = await response.json();
        return {data};
    } catch (e) {
        console.log(e);
    }
};
export const fetchUpdateUser = async (object) => {
    try {
        let user = JSON.stringify(object.user);
        let data = new FormData();
        data.append('file', object.image);
        data.append('user', user);
        const response = await fetch('https://quoctho.herokuapp.com/api/upload', {
            method: 'Post',
            body  : data
        });
        const res_data = await response.json();
        return {payload: res_data};
    } catch (e) {
        console.log(e);
    }
};
