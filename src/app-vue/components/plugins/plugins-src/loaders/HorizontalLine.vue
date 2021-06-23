<template>
  <i class="horizontal-line" />
</template>

<style scoped lang="scss">
  .horizontal-line {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
    }

    &::before {
      height: 0.5vmin;
      width: 10vmin;
      background-color: $gray-dark;
      animation: horizontal-grow 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
    }
  }

  @keyframes horizontal-grow {
    0%,
    44%,
    88.1%,
    100% {
      transform-origin: left;
    }

    0%,
    100%,
    88% {
      transform: scaleX(0);
    }

    44.1%,
    88% {
      transform-origin: right;
    }

    33%,
    44% {
      transform: scaleX(1);
    }
  }
</style>
