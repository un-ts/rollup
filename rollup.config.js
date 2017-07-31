import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')

export default {
  banner: `/*!
 * ${pkg.name} - ${pkg.description}
 * Version ${pkg.version}
 * Copyright (C) 2017 JounQin <admin@1stg.me>
 * Released under the MIT license
 *
 * Github: https://github.com/JounQin/rollup-plugin-insert
 */`,
  entry: 'insert.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [buble()],
  external: ['rollup-pluginutils']
}
