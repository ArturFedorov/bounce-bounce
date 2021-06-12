<template>
  <div class="plugins-header">
    <div class="container plugins-header-container">
      <div class="plugins-header-section">
        <h1 class="plugins-header-heading is-green-text">
          UI Components <br />
          that are not for everybody.
        </h1>
        <div class="plugins-header-description">
          <p class="plugins-header-text is-white-text">
            There are tons of UI component libraries, that look generic and boring.
          </p>
          <p class="plugins-header-text is-white-text">This is a place for experiments.</p>
        </div>
        <router-link to="/components" class="plugins-header-link">
          <Button>Get Started</Button>
        </router-link>
      </div>
    </div>
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
    min-height: $height;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-image: url('/@/assets/images/bg.svg');

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

    &-link {
      display: block;
      margin-top: $building-unit-x3;
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
