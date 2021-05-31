const fs = require('fs')
const path = require('path')

try {
  const x = fs.readdirSync(path.join(__dirname, '../components/plugins/plugins-src'))
  console.log(x)
} catch (err) {
  console.error(err)
}
