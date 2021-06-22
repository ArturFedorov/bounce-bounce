import { UserConfig } from 'vite'

export function mergeConfigObjects(sourceConfig: UserConfig, targetConfig: UserConfig) {
  if (targetConfig.plugins && sourceConfig.plugins) {
    for (let i = 0; i <= targetConfig.plugins.length - 1; i++) {
      if (!sourceConfig.plugins.includes(targetConfig.plugins[i])) {
        sourceConfig.plugins.push(targetConfig.plugins[i])
      }
    }
  }

  return Object.assign(targetConfig, sourceConfig)
}
