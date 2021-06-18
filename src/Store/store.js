import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({
    state: {
        items: ['apple']
    },
    mutations: {
        setItems: (state, newItem) => {
            (state.items).push(newItem)
        }
    },
    getters: {
        getItems: (state) => {
            return state.items
        }
    }
 })
