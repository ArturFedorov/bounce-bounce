import Button from '/@/app-vue/components/common/button/Button.vue'
import IconButton from '/@/app-vue/components/common/button/IconButton.vue'
import SvgIcon from '/@/app-vue/components/common/svg-icon/SvgIcon.vue'
import { App } from 'vue'

const components: { [key: string]: Record<string, unknown> } = {
  Button,
  IconButton,
  SvgIcon
}

function registerGlobalComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]))
}

export default registerGlobalComponents
