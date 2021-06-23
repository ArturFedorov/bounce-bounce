<template>
  <div class="plugin-list">
    <template v-if="plugins.length">
      <PluginItem v-for="plugin in plugins" :key="plugin.name">
        <template #name>{{ breakWord(plugin.name) }}</template>
        <template #content>
          <component :is="plugin.name" />
        </template>
      </PluginItem>
    </template>
    <template v-else>
      <PluginsEmpty class="plugin-list-empty" />
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { breakWord } from '/@/shared/utils/typography.util'
  import PluginItem from '/@/app-vue/components/plugins/plugins-list/plugin-item/PluginItem.vue'
  import components from '/@/app-vue/components/plugins/plugins-src'

  export default defineComponent({
    components: {
      PluginItem,
      ...components
    },
    props: {
      pluginType: {
        type: String,
        required: true
      },
      plugins: {
        type: Array as () => Plugin[],
        required: true
      }
    },
    setup() {
      return {
        breakWord: breakWord
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugin-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, calc(33.3% - 1.5em)));
    grid-gap: 1.5em;

    &-empty {
      grid-column: span 4;
    }
  }
</style>
