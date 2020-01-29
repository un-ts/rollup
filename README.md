# rollup-plugin-insert

[![Travis](https://img.shields.io/travis/rx-ts/rollup-plugin-insert.svg)](https://travis-ci.org/rx-ts/rollup-plugin-insert)
[![Codecov](https://img.shields.io/codecov/c/github/rx-ts/rollup-plugin-insert.svg)](https://codecov.io/gh/rx-ts/rollup-plugin-insert)
[![David](https://img.shields.io/david/rx-ts/rollup-plugin-insert.svg)](https://david-dm.org/rx-ts/rollup-plugin-insert)
[![David Dev](https://img.shields.io/david/dev/rx-ts/rollup-plugin-insert.svg)](https://david-dm.org/rx-ts/rollup-plugin-insert?type=dev)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> string mutation plugin for rollup

## Usage

```bash
# npm
npm install -D rollup-plugin-insert

# yarn
yarn add -D rollup-plugin-insert
```

```js
// all of following is fine
import * as insert from 'rollup-plugin-insert'
import insert from 'rollup-plugin-insert'
import { append, prepend, wrap, transform } from 'rollup-plugin-insert'

const insert = require('rollup-plugin-insert')
```

## Common Usage

All following methods have an optional last argument `options` which is an object and contains key `include`, `exclude` and `sourceMap` which is enabled by default.

It can be used to filter files as you like. For example you can wrapper your html template as following:

```js
insert.transform(
  (magicString, code, id) =>
    `export default ${JSON.stringify(`<!--add some comments-->${code}`)}`,
  {
    include: '**/*.html',
  },
)
```

If you do not need `sourceMap` at all, just change it to be `false`.

## Append

Appends a string onto the contents.

```js
insert.append('world') // Appends 'world' to the contents of every file
```

## Prepend

Prepends a string onto the contents.

```js
insert.prepend('Hello') // Prepends 'Hello' to the contents of every file
```

## Wrap

Wraps the contents with two strings.

```js
insert.wrap('Hello', 'World') // prepends 'hello' and appends 'world' to the contents
```

## Transform

Calls a function with the contents of the file.

```js
insert.transform((magicString, code, id) => code.toUpperCase()) // should return a string or MagicString
```
