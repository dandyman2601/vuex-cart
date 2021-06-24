import Axios from 'axios';

export const actGetProducts = () => {
   return Axios.get('https://fakestoreapi.com/products?limit=7');
}



