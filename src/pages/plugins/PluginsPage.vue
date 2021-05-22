<template>
  <div>
    <PluginsHeader />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PluginsHeader from '@/components/plugins/plugins-header/PluginsHeader.vue'

  export default defineComponent({
    components: {
      PluginsHeader
    }
  })
</script>

<style scoped lang="scss"></style>
