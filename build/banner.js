import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export const banner = `/**
 * ${pkg.libName} v${pkg.version}
 * (c) 2020-${new Date().getFullYear()} ${pkg.author}
 * Email: rocyuan666@163.com
 * Released under the ${pkg.license} License.
 */`
