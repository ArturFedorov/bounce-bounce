<template>
  <div class="plugins-navigation">
    <router-link
      :to="{ name: routes.LOADERS, params: { type: 'components' } }"
      class="plugins-navigation-link"
    >
      <SvgIcon color="#220C22" name="list" />
      Components
    </router-link>
    <router-link
      :to="{ name: routes.LOADERS, params: { type: 'loaders' } }"
      class="plugins-navigation-link"
    >
      Loaders
    </router-link>
    <router-link
      :to="{ name: routes.LOADERS, params: { type: 'other' } }"
      class="plugins-navigation-link"
    >
      Other
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Routes } from '../../../router/router'

  export default defineComponent({
    setup() {
      const routes = Routes

      return {
        routes
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-navigation {
    border-radius: $building-unit-x2;
    display: flex;
    background-color: $black;

    &-link {
      color: $white;
      border-right: 1px dashed $gray;
      min-width: $building-unit-x14;
      padding: $building-unit-x1_5 $building-unit-x2_5;
      text-align: center;
      transition: $default-transition;
      position: relative;
    }
  }

  .router-link-exact-active {
    font-weight: $font-bold;

    &:after {
      opacity: 1;
    }
  }
</style>
