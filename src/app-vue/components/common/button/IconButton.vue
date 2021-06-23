<template>
  <button class="icon-button" @click="$emit('click')">
    <SvgIcon :width="18" :height="18" :color="color" :name="icon" />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      icon: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="scss" scoped>
  .icon-button {
    appearance: none;
    cursor: pointer;
    display: inline-flex;
    background-color: transparent;
    border: none;
    outline: none;
  }
</style>
