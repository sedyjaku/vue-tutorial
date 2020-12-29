import { createStore } from 'vuex';
import rootActions from './actions.js';
import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import counterModule from '@/store/modules/counter';

const store = createStore ( {
  modules: {
    counter: counterModule
  },
  state(){
    return {
      logged: false
    }
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
})

export default store;