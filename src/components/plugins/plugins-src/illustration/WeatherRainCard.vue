<template>
  <div :style="{ width, height }" class="card">
    <div class="moon">
      <div v-for="item of craters" :key="item" :class="`moon-crater-${item}`" />
    </div>
    <div :class="`hill-${item > 2 ? 'fg' : 'bg'}-${item}`" :key="item" v-for="item of hills" />
    <div v-for="item of drops" :key="item" :class="`drop drop-big-${item}`" />
    <div v-for="item of drops" :key="item" :class="`drop drop-medium-${item}`" />
    <div v-for="item of drops" :key="item" :class="`drop drop-small-${item}`" />
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
        drops,
        hills: drops.slice(0, 5)
      }
    }
  })
</script>

<style lang="scss" scoped>
  $blue: #26314f;
  $dark-blue: #1a2238;
  $light-blue: #394568;
  $light-yellow: #f6edbd;
  $dark-yellow: #ece1a8;
  $drop-color: #7fc1f9;

  .card {
    background: $dark-blue;
    color: $light-blue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;

    &:hover {
      .drop {
        visibility: visible;
        animation-name: drop;
      }
    }
  }

  .moon {
    position: absolute;
    width: 67px;
    height: 67px;
    top: 15%;
    left: 10%;
    border-radius: 50%;
    background: $light-yellow;
    overflow: hidden;
    box-shadow: 0 0 10px 0 $light-yellow;
    animation: rise 1s ease-out;

    &-crater-1 {
      position: absolute;
      background-color: $dark-yellow;
      height: 11px;
      width: 11px;
      top: 9px;
      left: 28px;
      border-radius: 50%;
    }

    &-crater-2 {
      @extend .moon-crater-1;
      top: 12px;
      left: 0;
    }

    &-crater-3 {
      @extend .moon-crater-1;
      top: 56px;
      left: 10px;
    }

    &-crater-4 {
      @extend .moon-crater-1;
      transform: scale(0.5);
      top: 37px;
      left: 49px;
    }

    &-crater-5 {
      @extend .moon-crater-4;
      top: 24px;
      left: 61px;
    }

    &-crater-6 {
      @extend .moon-crater-4;
      top: 55px;
      left: 33px;
    }

    &-crater-7 {
      @extend .moon-crater-4;
      top: 17px;
      left: 46px;
    }

    &-crater-8 {
      @extend .moon-crater-4;
      top: 28px;
      left: 27px;
    }

    &-crater-9 {
      @extend .moon-crater-4;
      top: 39px;
      left: 17px;
    }

    &-crater-10 {
      @extend .moon-crater-1;
      width: 4px;
      height: 4px;
      top: 25px;
      left: 15px;
    }

    &-crater-11 {
      @extend .moon-crater-10;
      top: 37px;
      left: 37px;
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
      background: $blue;
      border-radius: 50%;
    }

    &-bg-2 {
      @extend .hill-bg-1;
      top: 197px;
      left: 177px;
    }

    &-fg-3 {
      @extend .hill-bg-1;
      background: $light-blue;
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

  .drop {
    visibility: hidden;
    animation-name: none;
  }

  @for $i from 1 through 10 {
    .drop-big-#{$i} {
      position: absolute;
      z-index: 20;
      left: (-20 + 38 * $i) + px;
      bottom: 90px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $drop-color;
      animation-duration: (0.7 + random(2) / 10) + s;
      animation-timing-function: linear;
      animation-delay: (random(50) / 25) + s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      transform-origin: 50% 100%;

      &:before {
        position: absolute;
        content: '';
        display: block;
        top: -2px;
        left: 1px;
        width: 6px;
        height: 6px;
        background: $drop-color;
        border-radius: 3px;
      }

      &:after {
        position: absolute;
        content: '';
        display: block;
        top: -5px;
        left: 2px;
        width: 4px;
        height: 10px;
        background: $drop-color;
        border-radius: 50%;
      }
    }

    .drop-medium-#{$i} {
      @extend .drop-big-1;
      left: (-20 + 38 * $i) + px;
      opacity: 0.6;
      width: 6px;
      height: 6px;
      animation-duration: (1.3 + random(2) / 10) + s;
      animation-timing-function: linear;
      animation-delay: (random(50) / 25) + s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;

      &:before {
        top: -2px;
        left: 1px;
        width: 4px;
        height: 4px;
      }

      &:after {
        top: -4px;
        left: 2px;
        width: 2px;
        height: 6px;
      }
    }

    .drop-small-#{$i} {
      @extend .drop-big-1;
      left: (-20 + 38 * $i) + px;
      opacity: 0.3;
      width: 4px;
      height: 4px;
      animation-duration: (1.9 + random(2) / 10) + s;
      animation-timing-function: linear;
      animation-delay: (random(50) / 25) + s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;

      &:before {
        top: -2px;
        left: 1px;
        width: 2px;
        height: 2px;
      }

      &:after {
        top: -3px;
        left: 1px;
        width: 2px;
        height: 4px;
      }
    }
  }

  @keyframes drop {
    0% {
      transform: translate3d(60px, -360px, 0) scaleX(1) scaleY(1) rotate(17deg);
    }
    85% {
      transform: translate3d(0, 100px, 0) scaleX(1) scaleY(1) rotate(17deg);
    }
    100% {
      transform: translate3d(0, 100px, 0) scaleX(3) scaleY(0) rotate(0deg);
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
