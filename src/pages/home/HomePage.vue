<template>
  <div class="home">
    <PluginsHeader />
    <div class="container home-info">
      <AnimatedSkeleton />
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

    &-info {
      position: relative;
      overflow: hidden;
      flex: 1;
    }
  }
</style>
