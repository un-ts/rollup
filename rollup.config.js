import insert from './insert'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'es',
  plugins: [
    insert.transform((code, id) => `export default ${JSON.stringify(`<!--${id}-->\n${code}`)}`, {
      include: '**/*.html'
    })
  ]
}
