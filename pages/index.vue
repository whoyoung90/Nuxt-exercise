<template>
  <div class="app">
    <main>
      <!-- 하위 컴포넌트에서 올려보낸 @inputEvent -->
      <SearchInput
        :search-keyword="searchKeyword"
        @inputEvent="updateSearchKeyword"
        @searchEvent="searchProducts"
      ></SearchInput>
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @inputEvent="searchKeyword = $event"
      ></SearchInput> -->
      <!-- <SearchInput v-model="searchKeyword"></SearchInput> -->
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import { fetchProducts, fetchProductsByKeyword } from '@/api'

export default {
  name: 'IndexPage',
  components: { SearchInput },
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
    const response = await fetchProducts()
    // this.products = response.data
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    return { products } // ✅ asyncData 리턴값이 뷰 data() 속성으로 설정된다!
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    /**
     * @description updateSearchKeyword
     * @parameter 하위 컴포넌트의 $event.target.value
     */
    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword)

      // ✅
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    },
    moveToDetailPage(id) {
      this.$router.push(`/detail/${id}`)
    },
    moveToCartPage() {
      this.$router.push('/cart')
    },
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

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
