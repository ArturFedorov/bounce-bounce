<template>
  <div class="plugin-list">
    <PluginItem :key="item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Plugin } from '/@/shared/types/models/Plugin'
  import PluginItem from './plugin-item/PluginItem.vue'

  export default defineComponent({
    components: { PluginItem },
    props: {
      pluginType: {
        type: String,
        required: true
      },
      plugins: {
        type: Array,
        required: true
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
