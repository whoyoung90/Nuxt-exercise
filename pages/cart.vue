<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <div class="list-wrapper">
      <ul>
        <li
          v-for="(cartItem, index) in $store.state.cartItems"
          :key="index"
          class="list-item"
        >
          <img
            class="thumbnail"
            :src="cartItem.imageUrl"
            :alt="cartItem.name"
          />
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
// store에서 action/mutation 함수를 상수화 하면 import해서 쓸 수 있다!
import { FETCH_CART_ITEMS } from '@/store'

export default {
  async asyncData({ store }) {
    // await를 하지 않으면, 비동기 요청에서 "데이터를 받기도 전에 페이지에 진입"하겠죠? 데이터 빈 상테..
    await store.dispatch(FETCH_CART_ITEMS) // 데이터를 받아올 때까지 await
  },
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
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
