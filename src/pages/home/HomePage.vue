<template>
  <div class="home">
    <PluginsHeader />
    <div class="container home-info">
      <AnimatedSkeleton class="home-animation" />
      <AnimatedSkeleton class="home-animation is-second" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PluginsHeader from '/@/components/plugins/plugins-header/PluginsHeader.vue'
  import AnimatedSkeleton from '/@/components/home/animated-skeleton/AnimatedSkeleton.vue'

  export default defineComponent({
    components: {
      AnimatedSkeleton,
      PluginsHeader
    }
  })
</script>

<style scoped lang="scss">
  .home {
    min-height: 100vh;
    height: 100%;
    background-color: $chemical;
    display: flex;
    flex-direction: column;

    &-animation {
      left: 0;
      z-index: 2;

      &.is-second {
        top: 20%;
        animation: slide-right 1s ease-in-out both 0.1s;
        z-index: 1;
      }
    }

    &-info {
      position: relative;
      overflow: hidden;
      flex: 1;
    }
  }

  @keyframes slide-right {
    0% {
      transform: translateX(100%) scale(0.6) scaleY(0);
    }
    100% {
      transform: translateX(100%) scale(0.8) scaleY(1);
    }
  }
</style>
