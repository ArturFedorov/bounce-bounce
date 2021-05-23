<template>
  <div>
    <PluginsHeader />
    <main>
      <div class="container">
        <PluginsNavigation />
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

<style scoped lang="scss"></style>
