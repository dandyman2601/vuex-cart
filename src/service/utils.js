import Axios from 'axios';

export const actGetPin = (pin) => {
   return Axios.get('https://api.postalpincode.in/pincode/' + pin);
}


