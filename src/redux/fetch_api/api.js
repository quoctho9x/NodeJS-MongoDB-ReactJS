import { products_list } from './data';

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
