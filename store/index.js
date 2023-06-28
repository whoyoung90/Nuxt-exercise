export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, item) {
    const newCartItem = {
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
}
