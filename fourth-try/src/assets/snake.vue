<template>
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="100%"
      height="100%"
      fill="green"
    />
    <path
      d="
        M 0 0
        L 100 100
      "
      fill="none"
      stroke="#4ac"
      stroke-width="10"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      d="
        M 0 50
        L 50 50
        L 50 100
        Z
      "
      fill="none"
      stroke="#4ca"
      stroke-width="10"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Snake',
})
</script>