import { createFilter } from 'rollup-pluginutils'
import MagicString from 'magic-string'

export const transform = (insert, options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  const sourceMap = options.sourceMap !== false

  return {
    name: 'insert',
    transform(code, id) {
      if (!filter(id)) return

      const magicString = new MagicString(code)
      insert(magicString, id)

      return {
        code: magicString.toString(),
        map: sourceMap ? magicString.generateMap() : null,
      }
    },
  }
}

export const append = (append, options) =>
  transform(magicString => magicString.append(append), options)

export const prepend = (prepend, options) =>
  transform(magicString => magicString.prepend(prepend), options)

export const wrap = (begin, end, options) =>
  transform(magicString => magicString.prepend(begin).append(end), options)
