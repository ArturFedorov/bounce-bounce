<template>
  <div class="plugin-list">
    <Plugin :key="item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Plugin } from '@/shared/types/models/Plugin'
  import Plugin from './plugin/Plugin.vue'

  export default defineComponent({
    components: { Plugin },
    props: {
      pluginType: {
        type: String,
        required: true
      },
      plugins: {
        type: Array as () => Plugin,
        required: true
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugin-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(75px, 33.3%));
    grid-gap: 1.5em;
  }
</style>
