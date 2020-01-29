# rollup-plugin-insert

[![GitHub Actions](https://github.com/rx-ts/rollup-plugin-insert/workflows/Node%20CI/badge.svg)](https://github.com/rx-ts/rollup-plugin-insert/actions?query=workflow%3A%22Node+CI%22)
[![Codecov](https://img.shields.io/codecov/c/github/rx-ts/rollup-plugin-insert.svg)](https://codecov.io/gh/rx-ts/rollup-plugin-insert)
[![Codacy Grade](https://img.shields.io/codacy/grade/8060dfc2d0f84494b715af1fc08e4c50)](https://www.codacy.com/gh/rx-ts/rollup-plugin-insert)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Frollup-plugin-insert%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/rollup-plugin-insert.svg)](https://www.npmjs.com/package/rollup-plugin-insert)
[![GitHub Release](https://img.shields.io/github/release/rx-ts/rollup-plugin-insert)](https://github.com/rx-ts/rollup-plugin-insert/releases)

[![David Peer](https://img.shields.io/david/peer/rx-ts/rollup-plugin-insert.svg)](https://david-dm.org/rx-ts/rollup-plugin-insert?type=peer)
[![David](https://img.shields.io/david/rx-ts/rollup-plugin-insert.svg)](https://david-dm.org/rx-ts/rollup-plugin-insert)
[![David Dev](https://img.shields.io/david/dev/rx-ts/rollup-plugin-insert.svg)](https://david-dm.org/rx-ts/rollup-plugin-insert?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codechecks.io](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)](https://codechecks.io)

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
