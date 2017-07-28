import fs from 'fs'
import path from 'path'

import {rollup} from 'rollup'

import config from '../rollup.config'

const read = file => fs.readFileSync(path.resolve(__dirname, '..', file + '.js')).toString()

test('should generate correctly', done =>
  rollup(config).then(bundle => bundle.write(config)).then(() => {
    expect(read('dist/index')).toBe(read('test/expect'))
    done()
  }))
