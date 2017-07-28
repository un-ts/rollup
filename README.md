# rollup-plugin-insert

[![Greenkeeper badge](https://badges.greenkeeper.io/JounQin/rollup-plugin-insert.svg)](https://greenkeeper.io/)

string mutation plugin for rollup


## Usage

``` bash
// npm
npm install -D rollup-plugin-insert

// yarn
yarn add -D rollup-plugin-insert
```

``` js
import insert from 'rollup-plugin-insert'
```

## Common Usage

All following methods has an optional last argument `options` which is an object and contains key `include` and `exclude`.

It can be used to filter files as you like. For example you can wrapper your html template as following:

``` js
insert.transform((code, id) => `export default ${JSON.stringlify(`<!--add some comments-->${code}`)}`, {
  include: '**/*.html'
})
```

## Append

Appends a string onto the contents.

``` js
insert.append('world') // Appends 'world' to the contents of every file
```

## Prepend

Prepends a string onto the contents.

``` js
insert.prepend('Hello') // Prepends 'Hello' to the contents of every file
```
## Wrap

Wraps the contents with two strings.

``` js
insert.wrap('Hello', 'World') // prepends 'hello' and appends 'world' to the contents
```

## Transform

Calls a function with the contents of the file.

``` js
insert.transform((code, id) => code.toUpperCase())
```
