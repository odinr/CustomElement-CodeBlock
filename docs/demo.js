import "../dist/main.js";
import style_light from "../src/theme/light.pcss";
import style_dark from "../src/theme/dark.pcss";
import style_c64 from "../src/theme/c64.pcss";

const css = `
    codin-codeblock.light{${style_light}}
    codin-codeblock.dark{${style_dark}}
    codin-codeblock.c64{${style_c64}}
`;
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');
style.type = "text/css";
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

require("prismjs/components/prism-markup-templating.js");
require("prismjs/components/prism-php.js");