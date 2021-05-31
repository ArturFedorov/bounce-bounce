<template>
  <div class="plugin">
    <div class="plugin-content"><slot /></div>
    <div class="plugin-submenu">
      <p class="plugin-label">Component name</p>
      <div class="plugin-likes">
        <IconButton color="crimson" icon="heart" />
        <span>432</span>
      </div>
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
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $purple-light;
      border-radius: $building-unit-x4;
      height: 280px;
    }

    &-label {
      margin: 0;
      font-weight: $font-medium;
    }

    &-likes {
      display: flex;
      margin-left: auto;
      align-items: center;
    }

    &-submenu {
      display: flex;
      align-items: center;
      margin-top: $building-unit;
      padding: 0 $building-unit-x2;
    }
  }
</style>
