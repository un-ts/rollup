import { createFilter } from 'rollup-pluginutils'

export const transform = (insert, options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  return {
    name: 'insert',
    transform(code, id) {
      if (!filter(id)) return
      return {
        code: insert(code, id),
      }
    },
  }
}

export const append = (append, options) =>
  transform(code => code + append, options)

export const prepend = (prepend, options) =>
  transform(code => prepend + code, options)

export const wrap = (begin, end, options) =>
  transform(code => begin + code + end, options)
