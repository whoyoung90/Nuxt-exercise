<template>
  <div class="input-wrapper flex">
    <!-- :value와 @input을 합치면 v-model -->
    <!-- 컴포넌트끼리의 대화수단인 이벤트 emit -->
    <input
      type="text"
      class="search-input"
      :value="searchKeyword"
      @input="$emit('inputEvent', $event.target.value)"
    />
    <!-- v-model시 input 태그 -->
    <!-- <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    /> -->
    <button type="button" class="btn" @click="$emit('searchEvent')">
      search
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // v-model시 props value
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
