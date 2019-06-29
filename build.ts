import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const FORMATS = ['cjs', 'es'] as const

async function build() {
  for (const format of FORMATS) {
    await rollup({
      input: 'insert.ts',
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              module: 'esnext',
            },
            files: ['insert.ts'],
          },
        }),
      ],
      external: ['magic-string', 'rollup-pluginutils'],
    }).then(bundle =>
      bundle.write({
        banner: `/*!
* ${pkg.name} - ${pkg.description}
* Version ${pkg.version}
* Copyright (C) 2017-present JounQin <admin@1stg.me>
* Released under the MIT license
*
* Github: https://github.com/JounQin/rollup-plugin-insert
*/`,
        exports: 'named',
        file: `insert.${format}.js`,
        format,
      }),
    )
  }
}

build()
