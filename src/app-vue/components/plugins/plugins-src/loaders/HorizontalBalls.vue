<template>
  <div class="horizontal-balls">
    <div class="horizontal-balls-item" :key="item" v-for="item of [1, 2, 3, 4, 5]" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style scoped lang="scss">
  $ball-size: 25px;
  $loader-width: 250px;

  .horizontal-balls {
    display: block;
    width: $loader-width;

    &-item {
      animation: loader 2.5s ease-in-out infinite;
      background-color: $black;
      border-radius: 50%;
      height: $ball-size;
      width: $ball-size;
      position: absolute;
      border: 1px solid $white;

      &:first-child {
        animation-delay: 0.5s;
      }

      &:nth-child(2) {
        animation-delay: 0.4s;
      }

      &:nth-child(3) {
        animation-delay: 0.3s;
      }

      &:nth-child(4) {
        animation-delay: 0.2s;
      }

      &:nth-child(5) {
        animation-delay: 0.1s;
      }

      &:nth-child(6) {
        animation-delay: 0s;
      }
    }
  }

  @keyframes loader {
    15% {
      transform: translateX(0);
    }

    45% {
      transform: translateX($loader-width - $ball-size);
    }

    65% {
      transform: translateX($loader-width - $ball-size);
    }

    95% {
      transform: translateX(0);
    }
  }
</style>
