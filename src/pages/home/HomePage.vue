<template>
  <div class="home">
    <PluginsHeader />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PluginsHeader from '/@/components/plugins/plugins-header/PluginsHeader.vue'

  export default defineComponent({
    components: {
      PluginsHeader
    }
  })
</script>

<style scoped lang="scss">
  .home {
    min-height: 100vh;
    background-color: $chemical;
  }
</style>
