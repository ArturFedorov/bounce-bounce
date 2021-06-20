<template>
  <div class="button" @click="$emit('click')">
    <p class="button-text">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style scoped lang="scss">
  .button {
    display: inline-block;
    padding: $building-unit $building-unit-x1_5;
    background-color: $chemical;
    border-radius: 8px;
    color: $black;

    &-text {
      font-weight: $font-medium;
      margin: 0;
    }
  }
</style>
