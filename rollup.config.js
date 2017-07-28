import buble from 'rollup-plugin-buble'

export default {
  entry: 'insert.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [buble()],
  external: ['rollup-pluginutils']
}
