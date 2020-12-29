const counterActions = {
  increment(context, valToAdd){
    setTimeout(()=>{
      context.commit('increment', valToAdd)
    }, 2000)
  },
  increase(context){
    setTimeout(()=>{
      context.commit('increment', 1)
    }, 2000)
  },
}

export default counterActions;