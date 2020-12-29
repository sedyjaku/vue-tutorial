import counterMutations from '@/store/modules/counter/mutations';
import counterActions from '@/store/modules/counter/actions';
import counterGetters from '@/store/modules/counter/getters';

const counterModule = {
  //detached from the store
  namespaced: true,
  state(){
    return {
      counter: 0,
    }
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
}

export default counterModule;