const counterMutations = {
  increment(state, valToAdd){
    console.log(valToAdd)
    state.counter+=valToAdd
  },}

export default counterMutations;
