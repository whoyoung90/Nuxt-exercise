export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, item) {
    state.cartItems.push(item)
  },
}
