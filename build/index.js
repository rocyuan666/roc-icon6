import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vuePlugin from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'
import { umdOutputOptions, umdMinOutputOptions, esOutputOptions } from './outputOptions.js'

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
    scss({ fileName: 'assets/css/roc-cli-rollup-vue-template.css' }),
    vuePlugin({
      css: false,
    }),
    replace({
      'process.env.NODE_ENV': 'development',
    }),
  ],
}).then((bundle) => {
  /**
   * umd 打包
   */
  bundle.write(umdOutputOptions).then(() => {
    console.log('umd 打包成功')
  })
  /**
   * umd.min 打包
   */
  bundle.write(umdMinOutputOptions).then(() => {
    console.log('umd.min 打包成功')
  })
  /**
   * es 打包
   */
  bundle.write(esOutputOptions).then(() => {
    console.log('es 打包成功')
  })
})
