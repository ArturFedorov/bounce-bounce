<template>
  <h1>{{ msg }}</h1>
  <h1>that are not for everybody.</h1>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    }
  })
</script>

<style scoped lang="scss">
  a {
    color: green;
  }

  h1 {
    font-size: 48px;
    font-weight: 900;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
