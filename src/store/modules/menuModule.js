import { getData } from "../../service.js";

export const menuModule = {
    state: {
        headers: [],
        list: [],
        orderList: [],
        total: 0,
        totalPrice: 0
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
        },
        totalCost: state => {
            return state.totalPrice;
        }
    },
    actions: {
        loadData({ commit }) {
            getData().then(data1 => {
                commit('getJsonData', data1)
            });
        },
        addToWishList({ commit }, listOfItems) {
            commit('getWishList', listOfItems)
        },
        resetList({ commit }) {
            commit('getResetWishList')
        },
        showTotalPrice({ commit }) {
            commit('getTotalPrice')
        }
    },
    mutations: {
        getJsonData(state, posts) {
            state.headers = posts.headers;
            state.list = posts.menu;
        },
        getWishList(state, order) {
            state.orderList = order;
            state.orderList.filter(el => {
                state.total += el.price;
            });
            state.totalPrice = state.total
        },
        getResetWishList(state) {
            state.orderList = [];
            state.total = 0;
            state.totalPrice = 0;
        } 
    }
}






