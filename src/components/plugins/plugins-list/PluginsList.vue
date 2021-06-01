<template>
  <div class="plugin-list">
    <PluginItem :key="plugin.name" v-for="plugin in plugins">
      <template #name>{{ breakWord(plugin.name) }}</template>
      <template #content>
        <component :is="plugin.name" />
      </template>
    </PluginItem>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { breakWord } from '/@/shared/utils/typography.util'
  import PluginItem from '/@/components/plugins/plugins-list/plugin-item/PluginItem.vue'

  export default defineComponent({
    components: {
      PluginItem
    },
    props: {
      pluginType: {
        type: String,
        required: true
      },
      plugins: {
        type: Array,
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
  }
</style>
