import { fullList, products_list } from './data';
export const fetchProducts = async () => {
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
function timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
