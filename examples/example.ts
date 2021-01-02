import pinyin from "https://deno.land/x/pinyin/mod.ts";

console.log(pinyin("中心")); // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true, // Enable heteronym mode.
})); // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true, // Enable heteronym mode.
  segment: true, // Enable Chinese words segmentation, fix most heteronym problem.
})); // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("我喜欢你", {
  segment: true, // Enable segmentation. Needed for grouping.
  group: true, // Group pinyin segments
})); // [ [ 'wǒ' ], [ 'xǐhuān' ], [ 'nǐ' ] ]
console.log(pinyin("中心", {
  style: pinyin.STYLE_INITIALS, // Setting pinyin style.
  heteronym: true,
})); // [ [ 'zh' ], [ 'x' ] ]
