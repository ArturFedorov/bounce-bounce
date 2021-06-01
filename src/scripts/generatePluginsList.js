const fs = require('fs')
const path = require('path')

const template = `
import { Plugin } from '/@/shared/types/models/Plugin'

const pluginsList: Plugin[] = $PLUGINS

export default pluginsList`

const requiredFolders = ['components', 'loaders', 'controls']
const srcPath = '../components/plugins/plugins-src'
const fullSrcPath = path.join(__dirname, srcPath)

try {
  const folders = fs.readdirSync(fullSrcPath)
  const missingFolders = folders.filter((folder) => requiredFolders.indexOf(folder) !== -1)

  if (requiredFolders.length !== missingFolders.length) {
    throw new Error(
      `Required folders are ${requiredFolders}. You have only ${missingFolders}. Some folders are missing`
    )
  }

  let plugins = []

  missingFolders.forEach((folder) => {
    const folderContent = fs.readdirSync(path.resolve(fullSrcPath, folder))
    const pluginsInFolder = folderContent.map((file) => ({
      name: file.replace('.vue', ''),
      type: folder,
      likes: 0
    }))

    plugins = [...plugins, ...pluginsInFolder]
  })

  const newTemplate = template.replace('$PLUGINS', JSON.stringify(plugins))
  fs.writeFileSync(path.resolve(__dirname, '../shared/data/plugins.ts'), newTemplate)
} catch (err) {
  console.error(err)
}
