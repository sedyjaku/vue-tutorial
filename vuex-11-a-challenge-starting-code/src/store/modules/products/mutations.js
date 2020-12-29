const productsMutations = {
  removeProduct(state, payload){
    const productIndex = state.products.findIndex(product => product.id === payload.productId);
    state.products.slice(productIndex, 1);
  },
  addProduct(state, payload){
    state.products.push(payload.product);
  }
}

export default productsMutations;