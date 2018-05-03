# Code Block
demo **https://odinr.github.io/CustomElement-CodeBlock/**
```
npm i @codin/html-codeblock
```

```javascript
import "@codin/html-codeblock";
```

Import the source for more agile component.
When importing source, you need to handle building CSS and file import

```javascript
import "@codin/html-codeblock/src/code-block";
```

### Components

all componenets from prism are compatible, but they are not module based, so all components need to be required the old way with global scope.

```javascript
import {Prism} "@codin/html-codeblock/src/code-block";
require("prismjs/components/prism-markup-templating.js");
require("prismjs/components/prism-php.js");
```

### Plugins
Prism is ment to run in global window mode, so plugins are not recomended, but works...
```javascript
import {Prism} "@codin/html-codeblock/src/code-block";
require("prismjs/plugins/prism-custom-class");
```

### Styling

```css
--code-font: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
--code-font-size: 1rem;
--code-font-height: 1.5;
--code-color: var(--theme-color, #3f3f3f);
--code-background: var(--theme-background, #f5f2f0);
--code-text-shadow: none;

/* general grouped colors */
--code-t-text: green;
--code-t-number: #905;
--code-t-selector: #690;
--code-t-operator: #9a6e3a;
--code-t-keyword: #07a;
--code-t-variable: #e90;
--code-t-function: #dd4a68;

--code-line-number-color: #999999;
--code-line-number-divider: 1px solid var(--code-line-number-color);

/* element colors */
--code-el-cdata: var(--code-t-text);
--code-el-comment: var(--code-t-text);
--code-el-doctype: var(--code-t-text);
--code-el-prolog: var(--code-t-text);
--code-el-namespace: var(--code-t-text);

--code-el-property: var(--code-t-number);
--code-el-tag: var(--code-t-number);
--code-el-boolean: var(--code-t-number);
--code-el-number: var(--code-t-number);
--code-el-constant: var(--code-t-number);
--code-el-symbol: var(--code-t-number);
--code-el-deleted: var(--code-t-number);

--code-el-selector: var(--code-t-selector);
--code-el-attr-name: var(--code-t-selector);
--code-el-string: var(--code-t-selector);
--code-el-char: var(--code-t-selector);
--code-el-builtin: var(--code-t-selector);
--code-el-inserted: var(--code-t-selector);

--code-el-operator: var(--code-t-operator);
--code-el-entity: var(--code-t-operator);
--code-el-url: var(--code-t-operator);

--code-el-atrule: var(--code-t-keyword);
--code-el-attr-value: var(--code-t-keyword);
--code-el-keyword: var(--code-t-keyword);

--code-el-regex: var(--code-t-variable);
--code-el-important: var(--code-t-variable);
--code-el-variable: var(--code-t-variable);

--code-el-function: var(--code-t-function);
--code-el-class-name: var(--code-t-function);

--code-el-punctuation: #999999;
```

Themes are not included in the package to keep it lightweight, below an example of importing predefined themes to document
```javascript
import style_light from "@codin/html-codeblock/src/theme/light.pcss";
import style_dark from "@codin/html-codeblock/src/theme/dark.pcss";
import style_c64 from "@codin/html-codeblock/src/theme/c64.pcss";

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
```

@todo
-  esLint
-  document code
- **Events**
    - onFileLoad
    - onFileLoaded
    - onContentParse
    - onContentParsed
- **Observers**
    - customElement.innerHtml
