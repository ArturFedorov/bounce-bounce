<template>
  <div>
    <main>
      <div class="container">
        <PluginsNavigation class="plugins-section" />
        <PluginsList class="plugins-section" :plugins="plugins" :plugin-type="pluginType" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useStore } from 'vuex'
  import PluginsNavigation from '/@/app-vue/components/plugins/plugins-navigation/PluginsNavigation.vue'
  import PluginsList from '/@/app-vue/components/plugins/plugins-list/PluginsList.vue'
  import { Plugin } from '/@/app-vue/shared/types/models/Plugin'
  import { PluginModule } from '/@/app-vue/store/features/plugins'
  import { GET_PLUGINS } from '/@/app-vue/store/features/plugins'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: {
      PluginsList,
      PluginsNavigation
    },
    setup() {
      const route = useRoute()
      const params = computed(() => route.params)
      const store = useStore<PluginModule>()

      return {
        plugins: computed(() =>
          store.getters[GET_PLUGINS].filter((plugin: Plugin) => plugin.type === params.value.type)
        ),
        pluginType: params.value.type as string
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-section {
    margin-top: $building-unit-x3;
  }
</style>
