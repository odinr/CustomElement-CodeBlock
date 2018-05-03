# Code Block
```
npm install @codin/codin-code-block
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
- <input type="checkbox" disabled> esLint
- <input type="checkbox" disabled> document code
- **Events**
    - <input type="checkbox" disabled> onFileLoad
    - <input type="checkbox" disabled> onFileLoaded
    - <input type="checkbox" disabled> onContentParse
    - <input type="checkbox" disabled> onContentParsed
- **Observers**
    - <input type="checkbox" disabled> customElement.innerHtml
    - <input type="checkbox" disabled checked> attr.Src
    - <input type="checkbox" disabled checked> attr.HighLight
- **Style**
    - <input type="checkbox" disabled> Split to theme files
