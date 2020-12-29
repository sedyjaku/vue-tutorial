const cartActions={
  addProductToCart(context, productData) {
    context.commit('addProductToCart', productData)
  },

  removeProductFromCart(context, prodId) {
    console.log('removing')
    context.commit('removeProductFromCart', prodId)
  }
}

export default cartActions;