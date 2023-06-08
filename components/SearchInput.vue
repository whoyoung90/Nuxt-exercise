<template>
  <div>
    <!-- :value와 @input을 합치면 v-model -->
    <!-- 하위 컴포넌트에서 올려보내는 이벤트('input')와 페이로드($event.target.value) -->
    <input
      type="text"
      :value="searchKeyword"
      @input="$emit('input', $event.target.value)"
    />
    <button>search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped></style>
