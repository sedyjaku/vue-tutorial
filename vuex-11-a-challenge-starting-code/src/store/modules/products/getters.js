const productsGetters = {
  getProducts(state){
    return state.products;
  },
  getProductById: (state) => (productId) => {
    console.log("INSIDE PRODUCT BY ID")
    console.log(state)
    console.log(productId)
    return state.products.find(product => product.id === productId);
  }
}

export default productsGetters;