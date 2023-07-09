<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="(cartItem, index) in $store.state.cartItems"
        :key="index"
        class="list-item"
      >
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
  /* 일반 컴포넌트 영역이므로 fetch 활용 (asyncData X) */
  // async ayncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // },
  async fetch() {
    console.log(this) // 바로 URL 진입시와 다른 URL에서 이동시의 this 값이 다르다!
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style scoped>
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
