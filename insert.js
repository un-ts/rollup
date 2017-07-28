import {createFilter} from 'rollup-pluginutils'

const transform = (insert, options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  return {
    name: 'insert',
    transform(code, id) {
      if (!filter(id)) return
      return {
        code: insert(code, id)
      }
    }
  }
}

export default {
  append: (append, options) => transform(code => append + code, options),
  prepend: (prepend, options) => transform(code => code + prepend, options),
  wrap: (begin, end, options) => transform(code => begin + code + end, options),
  transform
}
