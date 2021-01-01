// import  from "./deps.ts"
import pinyin from "./deps.ts";
import { parse } from "./deps.ts";
import { version } from "./version.ts";

const args = parse(Deno.args);

const isHelp = args._.length === 0 && Object.keys(args).length === 1;
if (isHelp) {
  console.log(`usage: [options] 汉字.
-v, --version, output the version number
-s, --style <style>, pinyin styles: [NORMAL,TONE,TONE2,INITIALS,FIRST_LETTER]
-S, --segment, segmentation word to phrases
-h, --heteronym, output heteronym pinyins
-p, --separator <separator>, separator between words
`);
  Deno.exit(0);
}

if (args.v || args.version) {
  console.log(version);
  Deno.exit(0);
}

const options = {
  style: pinyin["STYLE_" + (args.style || args.s || "TONE").toUpperCase()],
  heteronym: args.heteronym || args.h || false,
  segment: args.segment || args.S || false,
};

console.dir(args);

const separator = args.separator ?? args.p ?? " ";
const words = args._.join(" ");
const py = pinyin(words, options).join(separator);
console.log(py);
