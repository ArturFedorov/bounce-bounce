<template>
  <div class="animated-skeleton">
    <div class="loader-circle"></div>
    <div :key="section" v-for="section of [1, 3]" class="loader-section">
      <div class="loader-line is-thick"></div>
      <div class="loader-line"></div>
      <div class="loader-line is-shorter"></div>
    </div>
    <div class="loader-button"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style scoped lang="scss">
  $loader-height: $building_unit * 50;
  $animation-delay: 0;
  $animation-delay-second: $animation-delay + 0.6;
  $animation-delay-third: $animation-delay + 1.2;
  $animation-delay-fourth: $animation-delay + 1.5;

  .animated-skeleton {
    border-radius: $border-radius;
    background-image: url('/@/assets/images/bg-small.svg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: $box-shadow-darker;
    height: $loader-height;
    background-color: $black;
    width: $building_unit * 55;
    position: absolute;
    padding: $building-unit-x4;
    top: 20%;
    animation: grow-from-bottom 1s ease-out #{$animation-delay} + s;
    transform-origin: bottom;
  }

  .loader {
    &-button {
      background-color: $chemical;
      border-radius: 4px;
      margin-top: $building-unit-x2;
      width: $building-unit-x9;
      height: $building-unit-x3;
      animation: grow-from-bottom 0.4s ease-in-out #{$animation-delay-fourth}+ s both;
    }

    &-circle {
      background-color: $chemical;
      border-radius: 50%;
      height: $building-unit-x6;
      width: $building-unit-x6;
      transform-origin: center center;
      animation: center-scale 0.8s cubic-bezier(0, 0, 0.03, 0.9) #{$animation-delay-second}+ s both;
    }

    &-line {
      background-color: $chemical;
      border-radius: 2px;
      width: 90%;
      height: $building-unit;
      margin-bottom: $building-unit;
      transform-origin: left center;
      animation: left-right-scale 0.8s cubic-bezier(0, 0, 0.09, 0.9) #{$animation-delay-third}+ s
        backwards;

      &.is-thick {
        border-radius: 4px;
        height: $building-unit-x2;
        width: 100%;
      }

      &.is-shorter {
        width: 80%;
      }
    }

    &-section {
      margin-top: $building-unit-x4;
    }
  }

  @keyframes grow-from-bottom {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    10% {
      opacity: 0.3;
      transform: scaleY(0.3);
    }

    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes center-scale {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes left-right-scale {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }

    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
</style>
