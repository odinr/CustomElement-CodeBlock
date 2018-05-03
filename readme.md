# Code Block
```
npm i @codin/html-codeblock
```

```javascript
import "@codin/codin-code-block";
```

Import the source for more agile component.
When importing source, you need to handle building CSS and file import

```javascript
import "../src/code-block";
```

### Components

all componenets from prism are compatible, but they are not module based, so all components need to be required the old way with global scope.

```javascript
import {Prism} "../src/code-block";
require("prismjs/components/prism-markup-templating.js");
require("prismjs/components/prism-php.js");
```

### Plugins
Prism is ment to run in global window mode, so plugins are not recomended, but works...
```javascript
import {Prism} "../src/code-block";
require("prismjs/plugins/prism-custom-class");
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
- **Style**
    - Split to theme files
