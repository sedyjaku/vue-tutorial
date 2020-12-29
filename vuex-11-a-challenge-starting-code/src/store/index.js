import rootMutations from './mutations';
import rootGetters from './getters';
import rootActions from './actions';
import { createStore } from 'vuex';
import cartModule from '@/store/modules/cart';
import productsModule from '@/store/modules/products';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule
  },
  state() {
    return {
      logged: false
    }
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
})
export default  store;