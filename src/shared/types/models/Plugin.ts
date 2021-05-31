import { PluginType } from '../enums/PluginType'

export interface Plugin {
  name: string
  type: PluginType
  likes: number
}
