<template>
  <div>
    <PluginsHeader />
    <main>
      <div class="container">
        <PluginsNavigation class="plugins-section" />
        <PluginsList
          class="plugins-section"
          :plugins="plugins"
          :plugin-type="pluginType.COMPONENTS"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useStore } from 'vuex'
  import PluginsHeader from '/@/components/plugins/plugins-header/PluginsHeader.vue'
  import PluginsNavigation from '/@/components/plugins/plugins-navigation/PluginsNavigation.vue'
  import PluginsList from '/@/components/plugins/plugins-list/PluginsList.vue'
  import { PluginType } from '/@/shared/types/enums/PluginType'
  import { PluginModule } from '/@/store/features/plugins'
  import { GET_PLUGINS } from '/@/store/features/plugins'

  export default defineComponent({
    components: {
      PluginsList,
      PluginsHeader,
      PluginsNavigation
    },
    setup() {
      const store = useStore<PluginModule>()

      return {
        plugins: computed(() => store.getters[GET_PLUGINS]),
        pluginType: PluginType
      }
    }
  })
</script>

<style scoped lang="scss">
  .plugins-section {
    margin-top: $building-unit-x3;
  }
</style>
