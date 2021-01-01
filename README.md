# pinyin for Han （汉字）

---

Convert Han to pinyin. useful for phonetic notation, sorting, and searching.

> Note: This module support Deno.  
> Dependency and Inspired by: [pinyin](https://github.com/hotoo/pinyin)

---

## Feature

* Segmentation for heteronym words.
* Support Traditional and Simplified Chinese.
* Support multiple pinyin style.

## Install

via Deno:

```bash
$ deno install --name=pinyin https://deno.land/x/pinyin/cli.ts
```

## Usage

for cli:

```bash
$ pinyin 中心
zhōng xīn
$ pinyin
### showing help ###
```

for developer (In progress):

```js
import pinyin from "https://deno.land/x/pinyin/mod.ts";

console.log(pinyin("中心"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true                // Enable heteronym mode.
}));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true,              // Enable heteronym mode.
  segment: true                 // Enable Chinese words segmentation, fix most heteronym problem.
}));                            // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("我喜欢你", {
  segment: true,                // Enable segmentation. Needed for grouping.
  group: true                   // Group pinyin segments
}));                            // [ [ 'wǒ' ], [ 'xǐhuān' ], [ 'nǐ' ] ]
console.log(pinyin("中心", {
  style: pinyin.STYLE_INITIALS, // Setting pinyin style.
  heteronym: true
}));                            // [ [ 'zh' ], [ 'x' ] ]
```

## API

### `<Array> pinyin(words[, options])`

Convert Han （汉字） to pinyin.

`options` argument is optional, for sepcify heteronym mode and pinyin styles.

Return a `Array<Array<String>>`. If one of Han is heteronym word, it would be
have multiple pinyin.

### `Number pinyin.compare(a, b)`

Default compare implementation for pinyin.


## Options

#### `<Boolean> options.segment`

Enable Chinese word segmentation. Segmentation is helpful for fix heteronym
problem, but performance will be more slow, and need more CPU and memory.

Default is `false`.

### `<Boolean> options.heteronym`

Enable or disable heteronym mode. default is disabled, `false`.

### `<Object> options.style`

Specify pinyin style. please use static properties like `STYLE_*`.
default is `.STYLE_TONE`. see Static Property for more.

## License

[MIT](http://hotoo.mit-license.org/)
