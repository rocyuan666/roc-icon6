import { EOL } from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vuePlugin from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import { umdOutputOptions, umdMinOutputOptions, esOutputOptions } from './outputOptions.js'
import { banner } from './banner.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 打包配置
 */
rollup({
  input: 'src/main.ts',
  external: ['vue'],
  plugins: [
    typescript({ tsconfig: false, experimentalDecorators: true, module: 'es2015' }),
    nodeResolve(),
    commonjs(),
    scss({ fileName: 'assets/css/roc-icon-plus.css' }),
    vuePlugin({
      css: false,
    }),
    replace({
      'process.env.NODE_ENV': 'development',
    }),
    copy({
      targets: [{ src: 'src/components/RocIconPlus/styles/fonts', dest: 'dist/assets' }],
    }),
  ],
}).then((bundle) => {
  Promise.all([
    bundle.write(umdOutputOptions),
    bundle.write(umdMinOutputOptions),
    bundle.write(esOutputOptions),
  ]).then((result) => {
    handleCssFontPath()
    handleMinBanner()
    console.log('打包成功，已打包：')
    result.forEach((item) => {
      console.log(item.output[0]?.fileName)
    })
  })
})

/**
 * 处理 min 版本的 banner
 */
function handleMinBanner() {
  const minPath = path.resolve(__dirname, '../dist/roc-icon-plus.umd.min.js')
  const minJs = fs.readFileSync(minPath)
  const newMinJs = `${banner}${EOL}${minJs}`
  fs.writeFileSync(minPath, newMinJs)
}

/**
 * css 字体路径处理
 */
function handleCssFontPath() {
  const cssPath = path.resolve(__dirname, '../dist/assets/css/roc-icon-plus.css')
  const rocIconCss = fs.readFileSync(cssPath)
  const newRocIconCss = rocIconCss.toString().replace(/styles\/fonts/g, '../fonts')
  fs.writeFileSync(cssPath, newRocIconCss)
}
