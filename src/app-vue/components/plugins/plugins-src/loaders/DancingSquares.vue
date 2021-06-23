<template>
  <i class="dancing-squares"></i>
</template>

<style lang="scss" scoped>
  $square-size: 3vmin;

  .dancing-squares {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after,
    &::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      background-color: $gray-dark;
      height: $square-size;
      width: $square-size;
    }

    &::after {
      top: 50%;
      left: 50%;
      animation: changing-place-left-to-right 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    }

    &::before {
      top: calc(50% - #{$square-size});
      left: calc(50% - #{$square-size});
      animation: changing-place-right-to-left 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    }
  }

  @keyframes changing-place-left-to-right {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-100%) translateY(-100%);
    }

    75% {
      transform: translateY(-100%);
    }
  }

  @keyframes changing-place-right-to-left {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }
</style>
