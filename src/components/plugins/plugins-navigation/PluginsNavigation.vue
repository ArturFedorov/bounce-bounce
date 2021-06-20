<template>
  <div class="plugins-navigation">
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.COMPONENTS } }"
      class="plugins-navigation-link"
    >
      <span>Components</span>
    </router-link>
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.LOADERS } }"
      class="plugins-navigation-link"
    >
      <span>Loaders</span>
    </router-link>
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.CONTROLS } }"
      class="plugins-navigation-link"
    >
      <span>Controls</span>
    </router-link>
    <router-link
      :to="{ name: routes.PLUGINS, params: { type: pluginType.ILLUSTRATION } }"
      class="plugins-navigation-link"
    >
      <span>Illustration</span>
    </router-link>
    <p v-if="pluginsCount > 0" class="plugins-navigation-label">
      {{ pluginsCount }} {{ pluginsCount > 1 ? 'plugins' : 'plugin' }}
    </p>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { Routes } from '/@/router/router'
  import { PluginType } from '/@/shared/types/enums/PluginType'
  import { useStore } from 'vuex'
  import { GET_PLUGINS_BY_TYPE, PluginModule } from '/@/store/features/plugins'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    setup() {
      const store = useStore<PluginModule>()
      const route = useRoute()
      const params = computed(() => route.params)

      return {
        routes: Routes,
        pluginType: PluginType,
        pluginsCount: computed(() => store.getters[GET_PLUGINS_BY_TYPE](params.value.type).length)
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-navigation {
    display: flex;
    align-items: center;

    &-label {
      margin-left: auto;
      padding: 0 $building-unit-x2_5;
    }

    &-link {
      background-color: $purple-light;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: $building-unit-x1_5;
      padding: $building-unit-x1_5 $building-unit-x3;
      transition: $default-transition;
      color: $black;
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .router-link-exact-active {
    background-color: $black;
    font-weight: $font-bold;

    span {
      color: $white;
    }
  }
</style>
