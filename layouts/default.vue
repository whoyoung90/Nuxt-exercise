<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지</h1>
      <!-- router-link -->
      <nuxt-link to="/">홈페이지</nuxt-link>
      <nuxt-link to="/product">상품 페이지</nuxt-link>
    </header>
    <!-- router-view -->
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>
