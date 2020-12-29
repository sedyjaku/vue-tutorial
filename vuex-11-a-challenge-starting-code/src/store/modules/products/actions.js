const productsActions={
  removeProduct(context, payload){
    context.commit('removeProduct', payload);
  },
  addProduct(context, payload){
    context.commit('addProduct', payload);
  }
}

export default productsActions;