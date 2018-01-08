import { List_News, products_list } from './data';
export const fetchNews = async () => {
    try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        await timeout(3000);
        /* const response2 = await fetch('http://localhost:3000/users');
        const data2 = await response2.json(); */
        // console.log('day la ket qua khi ghe api', {data, products_list});
        // console.log('listproduct', listproduct);
        return {products_list};
    } catch (e) {
        console.log(e);
    }
};

export const fetchAllNews = async () => {
    try {
        /* const response = await fetch('https://quoctho.herokuapp.com/api/products/all', {
            method : 'GET',
            headers: {
                'Accept'      : 'application/json, application/xml, text/play, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
        });
        const payload = await response.json(); */
        return {payload: List_News};
    } catch (e) {
        console.log(e);
    }
};

function timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
