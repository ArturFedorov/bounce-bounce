<template>
  <div class="plugins-header">
    <div class="container plugins-header-container">
      <div class="plugins-header-section">
        <h1 class="plugins-header-heading is-white-text">
          UI Components <br />
          that are not for everybody.
        </h1>
        <div class="plugins-header-description">
          <p class="plugins-header-text is-white-text">
            There are tons of UI component libraries, that look generic and boring.
          </p>
          <p class="plugins-header-text is-white-text">This is a place for experiments.</p>
        </div>
      </div>
    </div>
    <img class="plugins-header-bg" src="../../../assets/images/bg.svg" alt="bg" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<style scoped lang="scss">
  $height: 440px;

  .plugins-header {
    background-color: $black;
    display: flex;
    height: $height;
    width: 100%;
    position: relative;
    overflow: hidden;

    &-bg {
      top: 0;
      position: absolute;
      right: 0;
      z-index: 0;
      left: 0;
      width: 100%;
    }

    &-container {
      display: flex;
      align-items: center;
      position: relative;
    }

    &-description {
      margin-top: $building-unit-x2;
    }

    &-heading {
      margin: 0;
    }

    &-section {
      position: relative;
      z-index: 1;
    }

    &-text {
      margin: 0;
    }
  }
</style>
