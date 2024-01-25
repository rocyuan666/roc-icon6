import { createRequire } from 'node:module'
import terser from '@rollup/plugin-terser'
import { banner } from './banner.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

/**
 * umd 打包配置
 * @type {import("rollup").OutputOptions}
 */
export const umdOutputOptions = {
  name: pkg.umdName,
  format: 'umd',
  globals: {
    vue: 'Vue',
  },
  file: `dist/${pkg.libName}.umd.js`,
  compact: true,
  banner,
}

/**
 * umd.min 打包配置
 * @type {import("rollup").OutputOptions}
 */
export const umdMinOutputOptions = {
  ...umdOutputOptions,
  file: `dist/${pkg.libName}.umd.min.js`,
  plugins: [terser()],
}

/**
 * es 打包配置
 * @type {import("rollup").OutputOptions}
 */
export const esOutputOptions = {
  format: 'es',
  file: `dist/${pkg.libName}.es.js`,
  compact: true,
  banner,
}
