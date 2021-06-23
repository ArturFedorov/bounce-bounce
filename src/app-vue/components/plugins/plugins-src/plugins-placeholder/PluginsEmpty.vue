<template>
  <div class="plugins-empty">
    <img class="plugins-empty-image" src="/@/assets/images/no-items.svg" alt="no-items" />
  </div>
</template>

<style lang="scss" scoped>
  .plugins-empty {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $purple-light;
    border-radius: $building-unit-x4;
    height: 280px;

    &-image {
      transform-origin: center center;
      animation: grow 0.8s cubic-bezier(0, 0, 0.24, 1.21);
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0);
    }

    65% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
