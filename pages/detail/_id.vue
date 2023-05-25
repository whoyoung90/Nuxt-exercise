<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
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
    return { product }
  },

  // created() {
  //   fetchProductById(this.$route.params.id)
  // },
}
</script>
