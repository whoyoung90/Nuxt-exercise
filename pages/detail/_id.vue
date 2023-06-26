<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api'
export default {
  /**
   * 페이지에 진입하기 전에 서버쪽에 데이터를 요청해서 받아오기 때문에 "this 접근이 불가!"
   * asyncData에 첫번째로 들어오는 파라미터인 context를 활용 (router와 관련된 파라미터 속성)
   */
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    const product = response.data
    return { product } // ✅ asyncData 리턴값이 뷰 data() 속성으로 설정된다!
  },

  // created() {
  //   fetchProductById(this.$route.params.id)
  // },
  methods: {
    addToCart() {
      // Nuxt에서는 뷰 라우터, 뷰 스토어 모두 인스턴스에서 제공이 되도록 이미 설정되어 있다! (따로 main.js에서 선언할 필요 X)
      this.$store.commit('addCartItem', this.product) // ✅
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
