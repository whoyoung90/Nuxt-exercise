import { fetchCartItems } from '@/api'

/**
 * @description constants
 * action/mutation 함수를 별도로 상수화 시켜서 그 상수를 import하는 방식!
 * 동일한 action/mutation 함수를 여러번 호출할 때 사용

 * 문자열 값이 "변수"로 관리될 때, 변수의 값을 action/mutation 함수에 연결
 * (문자열을 동적으로 연결해주는 문법 ✨)
 */
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

// store
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
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  // 동적 키값 정의 방식 (ES6+) ✨
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  },
}
