import { createFilter } from 'rollup-pluginutils'
import MagicString from 'magic-string'

export const transform = (insert, options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  const sourceMap = options.sourceMap !== false

  return {
    name: 'insert',
    transform(code, id) {
      if (!filter(id)) return

      let magicString = new MagicString(code)
      const output = insert(magicString, code, id)

      if (typeof output === 'string') {
        magicString.overwrite(0, code.length, output)
      } else if (output instanceof MagicString) {
        magicString = output
      } else if (output != null) {
        let received
        try {
          received = JSON.stringify(output)
        } catch (e) {
          /* istanbul ignore next */
          received = output.toString()
        }
        throw new TypeError(
          `The output content should be an instance of string or MagicString, but received: ${received}`,
        )
      }

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

export default {
  transform,
  append,
  prepend,
  wrap,
}
