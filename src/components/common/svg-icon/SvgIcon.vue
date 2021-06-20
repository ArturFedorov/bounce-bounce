<template>
  <svg aria-hidden="true" :height="height" :width="width">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    props: {
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      className: {
        type: String,
        required: false
      },
      color: {
        type: String,
        default: '#333'
      },
      height: {
        type: Number,
        default: 24
      },
      width: {
        type: Number,
        default: 24
      }
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      return { symbolId }
    }
  })
</script>
