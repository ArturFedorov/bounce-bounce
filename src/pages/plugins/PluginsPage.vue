<template>
  <div>
    <PluginsHeader />
    <main>
      <div class="container">
        <PluginsNavigation class="plugins-navigation" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PluginsHeader from '@/components/plugins/plugins-header/PluginsHeader.vue'
  import PluginsNavigation from '@/components/plugins/plugins-navigation/PluginsNavigation.vue'

  export default defineComponent({
    components: {
      PluginsHeader,
      PluginsNavigation
    }
  })
</script>

<style scoped lang="scss">
  .plugins-navigation {
    margin-top: $building-unit-x3;
  }
</style>
