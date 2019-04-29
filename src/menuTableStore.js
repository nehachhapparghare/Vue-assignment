import Vue from "vue";
import Vuex from "vuex";
import { getData } from "./service.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        headers: [],
        list: [],
        orderList: []
    },
    getters: {
        getHeaders: state => {
            return state.headers;
        },
        getList: state => {
            return state.list;
        },
        cartItems: state => {
            return state.orderList;
        }
    },
    actions: {
        loadData({commit}) {
            getData().then(data1 => {
                commit('getJsonData', data1)
            });
        },
        addToWishList({ commit }, listOfItems) {
            commit('getWishList', listOfItems)
        }
    },
    mutations: {
        getJsonData(state, posts) {
            state.headers = posts.headers;
            state.list = posts.menu;
        },
        getWishList(state, order) {
            state.orderList = order;
        }
    }
})




