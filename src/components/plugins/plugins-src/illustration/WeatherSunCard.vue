<template>
  <div :style="{ width, height }" class="card">
    <div class="sun">
      <div class="sun-ripple" />
    </div>
    <div v-for="item of hills" :key="item" :class="`hill-${item > 2 ? 'fg' : 'bg'}-${item}`" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      width: {
        type: String
      },
      height: {
        type: String
      }
    },
    setup() {
      const drops = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      return {
        craters: [...drops, 11],
        hills: drops.slice(0, 5)
      }
    }
  })
</script>

<style lang="scss" scoped>
  $sky-blue: #87ceeb;
  $dark-green: #136d15;
  $light-green: #41980a;
  $light-yellow: #f6edbd;
  $dark-yellow: #ece1a8;

  .card {
    background: $sky-blue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;

    &:hover {
      .sun-ripple {
        animation: ripple 1000ms linear infinite;
      }
    }
  }

  .sun {
    position: absolute;
    width: 67px;
    height: 67px;
    top: 15%;
    left: 10%;
    border-radius: 50%;
    background: $light-yellow;
    box-shadow: 0 0 10px 0 $light-yellow;
    animation: rise 1s ease-out;

    &-ripple {
      content: '';
      position: absolute;
      border-radius: 50%;
      transform: scale(1);
      background-color: $dark-yellow;
      opacity: 0.3;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  }

  .hill {
    &-bg-1 {
      position: absolute;
      z-index: 2;
      width: 337px;
      height: 281px;
      top: 201px;
      left: -57px;
      background: $dark-green;
      border-radius: 50%;
    }

    &-bg-2 {
      @extend .hill-bg-1;
      top: 197px;
      left: 177px;
    }

    &-fg-3 {
      @extend .hill-bg-1;
      background: $light-green;
      top: 248px;
      left: -137px;
    }

    &-fg-4 {
      @extend .hill-fg-3;
      top: 221px;
      left: 63px;
    }

    &-fg-5 {
      @extend .hill-fg-3;
      top: 248px;
      left: 292px;
    }
  }

  @keyframes ripple {
    to {
      transform: scale(8);
      opacity: 0;
    }
  }

  @keyframes rise {
    from {
      transform: translate(-20px, 200px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
</style>
