<template>
  <div class="plugin">
    <div class="plugin-content"><slot /></div>
    <div>
      <p class="plugin-label">Component name</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<style scoped lang="scss">
  .plugin {
    &-content {
      background-color: $purple-light;
      border-radius: $building-unit-x4;
      height: 280px;
    }

    &-label {
      font-weight: $font-medium;
      margin: $building-unit 0 0 0;
      padding-left: $building-unit-x2;
    }
  }
</style>
