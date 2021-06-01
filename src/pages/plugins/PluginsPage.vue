<template>
  <div>
    <PluginsHeader />
    <main>
      <div class="container">
        <PluginsNavigation class="plugins-section" />
        <PluginsList class="plugins-section" :plugins="plugins" :plugin-type="pluginType" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, watch, watchEffect } from 'vue'
  import { useStore } from 'vuex'
  import PluginsHeader from '/@/components/plugins/plugins-header/PluginsHeader.vue'
  import PluginsNavigation from '/@/components/plugins/plugins-navigation/PluginsNavigation.vue'
  import PluginsList from '/@/components/plugins/plugins-list/PluginsList.vue'
  import { PluginType } from '/@/shared/types/enums/PluginType'
  import { PluginModule } from '/@/store/features/plugins'
  import { GET_PLUGINS } from '/@/store/features/plugins'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: {
      PluginsList,
      PluginsHeader,
      PluginsNavigation
    },
    setup() {
      const route = useRoute()
      const params = computed(() => route.params)
      console.log(params.value)
      const store = useStore<PluginModule>()

      return {
        plugins: computed(() =>
          store.getters[GET_PLUGINS].filter((plugin) => plugin.type === params.value.type)
        ),
        pluginType: params
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-section {
    margin-top: $building-unit-x3;
  }
</style>
