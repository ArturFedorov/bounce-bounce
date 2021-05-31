<template>
  <div class="plugin-list">
    <PluginItem :key="item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]">
      <component :is="item === 1 ? `BouncingBalls` : 'PluginsPlaceholder'" />
    </PluginItem>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PluginItem from '/@/components/plugins/plugins-list/plugin-item/PluginItem.vue'
  import PluginsPlaceholder from '/@/components/plugins/plugins-src/plugins-placeholder/PluginsPlaceholder.vue'
  import BouncingBalls from '/@/components/plugins/plugins-src/loaders/BouncingBalls.vue'

  export default defineComponent({
    components: {
      BouncingBalls,
      PluginItem,
      PluginsPlaceholder
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
    setup(props, context) {
      // const
      console.log(context)
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
