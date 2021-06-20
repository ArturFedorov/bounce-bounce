<template>
  <i class="bouncing-balls" />
</template>

<style lang="scss" scoped>
  $size-dot: 1.2vmin;

  .bouncing-balls {
    border-radius: $border-radius;
    position: relative;
    width: 50%;
    height: 50%;
    display: flex;
    place-items: center;

    &::before,
    &::after {
      width: $size-dot;
      height: $size-dot;
      background-color: $gray-dark;
      border-radius: 50%;
      animation: bounce 1.2s ease-in-out infinite;
      content: '';
      box-sizing: border-box;
      position: absolute;
    }

    &::before {
      left: calc(50% - 1.6vmin - #{$size-dot});
    }

    &::after {
      animation-delay: -0.4s;
      left: calc(50% + #{$size-dot});
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-2.6vmin);
    }

    44% {
      transform: translateY(2.6vmin);
    }
  }
</style>
