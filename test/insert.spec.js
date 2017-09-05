import fs from 'fs'
import path from 'path'

import {rollup} from 'rollup'

import * as insert from '../insert'

const resolve = file => path.resolve(__dirname, file + '.js')
const read = file => fs.readFileSync(resolve(file)).toString()

const format = {format: 'es'}

test('should add file path comment in html template correctly', async done => {
  const bundle = await rollup({
    input: resolve('transform'),
    plugins: [
      insert.transform((code, id) => `export default ${JSON.stringify(`<!--${id}-->\n${code}`)}`, {
        include: '**/*.html'
      })
    ]
  })

  const {code} = await bundle.generate(format)

  expect(code).toBe(read('transform-expect').replace('$$', path.resolve(__dirname, 'template.html')))
  done()
})

test('should append code correctly', async done => {
  const bundle = await rollup({
    input: resolve('append'),
    plugins: [insert.append('export default append')]
  })

  const {code} = await bundle.generate(format)

  expect(code).toMatch(/export default append;\s*$/)

  done()
})

test('should prepend code correctly', async done => {
  const bundle = await rollup({
    input: resolve('prepend'),
    plugins: [insert.prepend('const prepend = () => {}\n')]
  })

  const {code} = await bundle.generate(format)

  expect(code).toMatch(/^const prepend = \(\) => {}/)

  done()
})

test('should wrap code correctly', async done => {
  const bundle = await rollup({
    input: resolve('wrap'),
    plugins: [insert.wrap('const wrap = () => {}\n', 'export default wrapped')]
  })

  const {code} = await bundle.generate(format)

  expect(code).toMatch(/^const wrap = \(\) => {}[\s\S]+export default wrapped;\s*$/)

  done()
})
