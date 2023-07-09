<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList'
// import { FETCH_CART_ITEMS } from '@/store'

export default {
  components: { CartList },
  /* nuxtServerInit을 사용하기 때문에 필요X */
  // async asyncData({ store }) {
  //   // await를 하지 않으면, 비동기 요청에서 "데이터를 받기도 전에 페이지에 진입"하겠죠? 데이터 빈 상테..
  //   await store.dispatch(FETCH_CART_ITEMS) // 데이터를 받아올 때까지 await
  // },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
</style>
