import Vuex from "vuex";
import Vue from 'vue';
import {LoadingApi} from 'rainbow-mobile-core';
Vue.use(Vuex);
LoadingApi.install(Vue)
const store = new Vuex.Store({});
store.registerModule('loading', { 
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})



export default store;