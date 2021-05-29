<template>
  <div class="plugins-navigation">
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.COMPONENTS } }"
      class="plugins-navigation-link"
    >
      <SvgIcon color="#220C22" name="list" />
      <span class="is-white-text">Components</span>
    </router-link>
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.LOADERS } }"
      class="plugins-navigation-link"
    >
      <SvgIcon color="#220C22" name="loader" />
      <span class="is-white-text">Loaders</span>
    </router-link>
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.CONTROLS } }"
      class="plugins-navigation-link"
    >
      <SvgIcon color="#220C22" name="loaders" />
      <span class="is-white-text">Controls</span>
    </router-link>
    <p class="plugins-navigation-label is-white-text">1 234 plugins</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Routes } from '/@/router/router'
  import { PluginType } from '/@/shared/types/enums/PluginType'

  export default defineComponent({
    setup() {
      return {
        routes: Routes,
        pluginType: PluginType
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-navigation {
    border-radius: $building-unit-x2;
    display: flex;
    align-items: center;
    background-color: $black;

    &-label {
      margin-left: auto;
      padding: 0 $building-unit-x2_5;
    }

    &-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-right: 1px dashed $gray-dark;
      min-width: $building-unit-x17;
      padding: $building-unit-x1_5 $building-unit-x2_5;
      transition: $default-transition;

      .is-white-text {
        margin-left: $building-unit;
      }
    }
  }

  .router-link-exact-active {
    font-weight: $font-bold;
  }
</style>
