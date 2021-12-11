<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img
      style="max-width: 512px"
      src="@/assets/icon.svg"
    />
    <br>
    <snake-graphic
      style="max-width: 700px"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Snake from "@/assets/snake.vue"

export default Vue.extend({
  name: 'About',
  components: {
    SnakeGraphic: Snake,
  },
})
</script>