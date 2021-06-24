import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

 export const store = new Vuex.Store({
    state: {
        
        products: [],
        counter:0
    },
    mutations: {
        
        setProducts: (state, newProdct) => {
            state.products = newProdct;
        },
        setCounter: (state, newCounter) => {
            state.counter = newCounter;
        }
    },
    getters: {
       
        getProducts: (state) => {
            return state.products;
        },
        getCounter: (state) => {
            return state.counter
        }
    },
    actions: {
        actGetProducts: () => {
            return Axios.get('https://fakestoreapi.com/products?limit=7');
        }
    }
 })
