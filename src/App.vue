<template>
  <div class="app">
    <HelloWorld msg="UI Components" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    }
  })
</script>

<style lang="scss">
  .app {
    background-color: green;
  }
</style>
