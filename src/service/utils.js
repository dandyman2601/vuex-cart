import Axios from 'axios';

export const actGetPin = (pin) => {
   return Axios.get('https://api.postalpincode.in/pincode/' + pin);
}

export const actGetProducts = () => {
   return Axios.get('https://fakestoreapi.com/products?limit=7');
}



