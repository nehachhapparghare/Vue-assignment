import { getCredentials } from "../../service.js";

export const loginModule = {
    state: {
        userDetails: []
    },
    getters: {
        userLogin(state) {
            return state.userDetails;
        }
    },
    actions: {
        checkData({ commit }) {
            return new Promise((resolve)=>{
                getCredentials().then(credentials => { 
                    resolve(credentials);
                    commit('getJsonData', credentials)
                });
            })
           
        }
    },
    mutations: {
        getJsonData(state, credentials) {
            state.userDetails = credentials
            console.log(credentials);
        }
    }
}