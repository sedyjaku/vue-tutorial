const cartGetters = {
  getCurrentCart(state){
    console.log(state);
    console.log(state.cart)
    return state.cart
  },
  getCartTotal(state){
    return state.cart.total
  },
  getItemTotal: (state) => (itemId) => {
    console.log('___INSIDE GET ITEM TOTAL___')
    console.log(state)
    console.log(itemId)
    let relevantItem = state.cart.items.find(item => item.productId === itemId);
    return relevantItem.price * relevantItem.qty;
  }
}

export default cartGetters;