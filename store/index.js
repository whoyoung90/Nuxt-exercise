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
    commit(
      'setCartItems',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },

  /**
   * @description nuxtServerInit
   * (asyncData보다 이른 시점)
   * 넉스트의 universal 모드에서 사용할 수 있는 액션 함수
   * 데이터가 담겨진 상태로 store 생성
   *
   * new Vuex.Store()처럼 인스턴스를 생성할 때, 이미 NuxtServerInit이 호출이 된다
   * 페이지에 진입하기 전에, store가 생성되는 시점에 이미 API를 다 들고와서 스토어에 데이터를 "미리 셋업"!
   */
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS) // 각각의 로직들을 action으로 분리하고 여기서는 호출만!
  },
}
