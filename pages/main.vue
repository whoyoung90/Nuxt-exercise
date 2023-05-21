<template>
  <div>
    <p>메인 페이지입니다</p>
    <div>{{ products }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /**
   * @decription asyncData
   * "페이지가 그려지기 전에" 호출되는 속성
   * "pages 컴포넌트에서만" 유효한 인스턴스 옵션 속성 (components에 등록시 에러)
   *
   * - 컴포넌트가 생성되기 이전이기 때문에, 기존 this로 접근했던 동작들은 asyncData에서는 할 수 없음
   * - 뷰 라우터 네비게이션 가드(beforeEnter)와 유사한 동작
   * - asyncData 안에 로직이 잘못되면 당연히 페이지 진입이 안된다
   * - 페이지 진입시 화면깜박임(CSR)이 사라진다
   */
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    // this.products = response.data
    const products = response.data
    return { products } // 리턴값이 vue의 인스턴스 '데이터'와 동일하게 동작
  },

  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   this.products = response.data
  // },
}
</script>
