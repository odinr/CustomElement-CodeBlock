!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:null}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:null}}}),delete e.languages.php.string;var t={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:e.languages.php}};e.languages.php["heredoc-string"].inside.interpolation=t,e.languages.php["double-quoted-string"].inside.interpolation=t,e.hooks.add("before-tokenize",function(t){if(/(?:<\?php|<\?)/gi.test(t.code)){e.languages["markup-templating"].buildPlaceholders(t,"php",/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)}}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"php")})}(Prism)},function(e,t){Prism.languages["markup-templating"]={},Object.defineProperties(Prism.languages["markup-templating"],{buildPlaceholders:{value:function(e,t,n,r){e.language===t&&(e.tokenStack=[],e.code=e.code.replace(n,function(n){if("function"==typeof r&&!r(n))return n;for(var o=e.tokenStack.length;-1!==e.code.indexOf("___"+t.toUpperCase()+o+"___");)++o;return e.tokenStack[o]=n,"___"+t.toUpperCase()+o+"___"}),e.grammar=Prism.languages.markup)}},tokenizePlaceholders:{value:function(e,t){if(e.language===t&&e.tokenStack){e.grammar=Prism.languages[t];var n=0,r=Object.keys(e.tokenStack),o=function(a){if(!(n>=r.length))for(var i=0;i<a.length;i++){var c=a[i];if("string"==typeof c||c.content&&"string"==typeof c.content){var l=r[n],s=e.tokenStack[l],u="string"==typeof c?c:c.content,d=u.indexOf("___"+t.toUpperCase()+l+"___");if(d>-1){++n;var g,p=u.substring(0,d),f=new Prism.Token(t,Prism.tokenize(s,e.grammar,t),"language-"+t,s),h=u.substring(d+("___"+t.toUpperCase()+l+"___").length);if(p||h?(g=[p,f,h].filter(function(e){return!!e}),o(g)):g=f,"string"==typeof c?Array.prototype.splice.apply(a,[i,1].concat(g)):c.content=g,n>=r.length)break}}else c.content&&"string"!=typeof c.content&&o(c.content)}};o(e.tokens)}}}})},function(e,t){e.exports="--code-text-shadow: 1px 2px rgba(0,0,0,0.25);\n\n--code-c64-white: #fff;\n--code-c64-grey: #9f9f9f;\n--code-c64-greyer: #505050;\n--code-c64-greyest: #787878;\n--code-c64-black: #000;\n--code-c64-purple: #7869c4;\n--code-c64-voilet: #8b3f96;\n--code-c64-green: #94e089;\n--code-c64-yellow: #bfce72;\n\n--code-background: var(--code-c64-purple);\n\n--code-color: var(--code-c64-yellow);\n--code-t-text: var(--code-c64-grey);\n--code-t-number: var(--code-c64-voilet);\n--code-t-selector: var(--code-c64-green);\n--code-t-operator: var(--code-c64-grey);\n--code-t-keyword: var(--code-c64-grey);\n--code-t-variable: var(--code-c64-voilet);\n--code-t-function: var(--code-c64-white);"},function(e,t){e.exports="--code-color: #ffffff;\n--code-background: #333333;\n--code-t-text: darkseagreen;\n--code-t-number: #f08d49;\n--code-t-function: #f8c555;\n--code-t-keyword: #cc99cd;\n--code-text-shadow: 1px 2px rgba(0,0,0,0.25);"},function(e,t){e.exports="--code-color: #3f3f3f;\n--code-background: #f5f2f0;\n--code-text-shadow: none;\n\n--code-t-text: green;\n--code-t-number: #905;\n--code-t-selector: #690;\n--code-t-operator: #9a6e3a;\n--code-t-keyword: #07a;\n--code-t-variable: #e90;\n--code-t-function: #dd4a68;\n\n--code-line-number-color: #999999;\n--code-line-number-divider: 1px solid var(--code-line-number-color);"},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,punctuation:/[{}[\]);,]/,operator:/:/g,boolean:/\b(?:true|false)\b/i,null:/\bnull\b/i},Prism.languages.jsonp=Prism.languages.json},function(e,t){e.exports=":host {\n    --code-font: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    --code-font-size: 1rem;\n    --code-font-height: 1.5;\n    --code-color: var(--theme-color, #3f3f3f);\n    --code-background: var(--theme-background, #f5f2f0);\n    --code-text-shadow: none;\n\n    --code-t-text: green;\n    --code-t-number: #905;\n    --code-t-selector: #690;\n    --code-t-operator: #9a6e3a;\n    --code-t-keyword: #07a;\n    --code-t-variable: #e90;\n    --code-t-function: #dd4a68;\n\n    --code-line-number-color: #999999;\n    --code-line-number-divider: 1px solid var(--code-line-number-color);\n}\n\n:host{\n    --code-el-cdata: var(--code-t-text);\n    --code-el-comment: var(--code-t-text);\n    --code-el-doctype: var(--code-t-text);\n    --code-el-prolog: var(--code-t-text);\n    --code-el-namespace: var(--code-t-text);\n\n    --code-el-property: var(--code-t-number);\n    --code-el-tag: var(--code-t-number);\n    --code-el-boolean: var(--code-t-number);\n    --code-el-number: var(--code-t-number);\n    --code-el-constant: var(--code-t-number);\n    --code-el-symbol: var(--code-t-number);\n    --code-el-deleted: var(--code-t-number);\n\n    --code-el-selector: var(--code-t-selector);\n    --code-el-attr-name: var(--code-t-selector);\n    --code-el-string: var(--code-t-selector);\n    --code-el-char: var(--code-t-selector);\n    --code-el-builtin: var(--code-t-selector);\n    --code-el-inserted: var(--code-t-selector);\n\n    --code-el-operator: var(--code-t-operator);\n    --code-el-entity: var(--code-t-operator);\n    --code-el-url: var(--code-t-operator);\n\n    --code-el-atrule: var(--code-t-keyword);\n    --code-el-attr-value: var(--code-t-keyword);\n    --code-el-keyword: var(--code-t-keyword);\n\n    --code-el-regex: var(--code-t-variable);\n    --code-el-important: var(--code-t-variable);\n    --code-el-variable: var(--code-t-variable);\n\n    --code-el-function: var(--code-t-function);\n    --code-el-class-name: var(--code-t-function);\n\n    --code-el-punctuation: #999999;\n}\n\n:host {\n    display: block;\n    overflow: auto;\n    padding: 10px 0;\n    \n    font-family: var(--code-font);\n    font-size: var(--code-font-size);\n    line-height: var(--code-font-height);\n    color: var(--code-color);\n    background: var(--code-background);\n}\n\n#container{\n    display: flex;\n    flex-flow: row;\n    position: relative;\n    padding: var(--code-padding, 0 10px);\n    background: var(--code-container-background);\n}\n\n#higlighter{\n    position: absolute;\n    background: rgba(255,255,104,0.15);\n    width: calc(100% - 2px);\n    left:1px;\n    top: 0;\n    height: 0;\n    z-index: 0;\n    transition: all 300ms ease;\n    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);\n    margin-top: -2px;\n    border-radius: 0.25em;\n}\n\n#counter{\n    display: flex;\n    flex-flow: column;\n    margin-right: 1em;\n    padding-right: 0.5em;\n    text-align: right;\n    z-index: 1;\n\n    color: var(--code-line-number-color);\n    border-right: var(--code-line-number-divider);\n}\n\n#code{\n    z-index: 1;\n    overflow-x: auto;\n}\n\npre, code{\n    margin: 0;\n    padding: 0;\n    text-align: left;\n    tab-size: 4;\n    hyphens: none;\n    font-size:1em;\n    font-family: var(--code-font);\n    text-shadow: var(--code-text-shadow);\n    \n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n.token.entity {\n\tcursor: help;\n}\n\n.namespace{color: var(--code-el-namespace);}\n.token.cdata {color: var(--code-el-cdata);}\n.token.comment {color: var(--code-el-comment);}\n.token.doctype {color: var(--code-el-doctype);}\n.token.prolog {color: var(--code-el-prolog);}\n.token.property {color: var(--code-el-property);}\n.token.tag {color: var(--code-el-tag);}\n.token.boolean {color: var(--code-el-boolean);}\n.token.number {color: var(--code-el-number);}\n.token.constant {color: var(--code-el-constant);}\n.token.symbol {color: var(--code-el-symbol);}\n.token.deleted {color: var(--code-el-deleted);}\n.token.selector {color: var(--code-el-selector);}\n.token.attr-name {color: var(--code-el-attr-name);}\n.token.string {color: var(--code-el-string);}\n.token.char {color: var(--code-el-char);}\n.token.builtin {color: var(--code-el-builtin);}\n.token.inserted {color: var(--code-el-inserted);}\n.token.punctuation {color: var(--code-el-punctuation);}\n.token.operator {color: var(--code-el-operator);}\n.token.entity {color: var(--code-el-entity);}\n.token.url {color: var(--code-el-url);}\n.token.atrule {color: var(--code-el-atrule);}\n.token.attr-value {color: var(--code-el-attr-value);}\n.token.keyword {color: var(--code-el-keyword);}\n.token.function {color: var(--code-el-function);}\n.token.class-name {color: var(--code-el-class-name);}\n.token.regex {color: var(--code-el-regex);}\n.token.important {color: var(--code-el-important);}\n.token.variable {color: var(--code-el-variable);}"},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=r.util.type(e);switch(t=t||{},n){case"Object":if(t[r.util.objId(e)])return t[r.util.objId(e)];var o={};for(var a in t[r.util.objId(e)]=o,e)e.hasOwnProperty(a)&&(o[a]=r.util.clone(e[a],t));return o;case"Array":return t[r.util.objId(e)]?t[r.util.objId(e)]:(o=[],t[r.util.objId(e)]=o,e.forEach(function(e,n){o[n]=r.util.clone(e,t)}),o)}return e}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var a=(o=o||r.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(a[i]=n[i]);return a}var c={};for(var l in a)if(a.hasOwnProperty(l)){if(l==t)for(var i in n)n.hasOwnProperty(i)&&(c[i]=n[i]);c[l]=a[l]}return r.languages.DFS(r.languages,function(t,n){n===o[e]&&t!=e&&(this[t]=c)}),o[e]=c},DFS:function(e,t,n,o){for(var a in o=o||{},e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==r.util.type(e[a])||o[r.util.objId(e[a])]?"Array"!==r.util.type(e[a])||o[r.util.objId(e[a])]||(o[r.util.objId(e[a])]=!0,r.languages.DFS(e[a],t,a,o)):(o[r.util.objId(e[a])]=!0,r.languages.DFS(e[a],t,null,o)))}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o);for(var a,i=o.elements||e.querySelectorAll(o.selector),c=0;a=i[c++];)r.highlightElement(a,!0===t,o.callback)},highlightElement:function(t,o,a){for(var i,c,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),c=r.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var s={element:t,language:i,grammar:c,code:t.textContent};if(r.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(r.hooks.run("before-highlight",s),s.element.textContent=s.code,r.hooks.run("after-highlight",s)),void r.hooks.run("complete",s);if(r.hooks.run("before-highlight",s),o&&n.Worker){var u=new Worker(r.filename);u.onmessage=function(e){s.highlightedCode=e.data,r.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(s.element),r.hooks.run("after-highlight",s),r.hooks.run("complete",s)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=r.highlight(s.code,s.grammar,s.language),r.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(t),r.hooks.run("after-highlight",s),r.hooks.run("complete",s)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,o,a,i,c){var l=r.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==c)return;var u=n[s];u="Array"===r.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],p=g.inside,f=!!g.lookbehind,h=!!g.greedy,m=0,v=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var b=o,k=a;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof l)){if(h&&b!=t.length-1){if(g.lastIndex=k,!(E=g.exec(e)))break;for(var x=E.index+(f?E[1].length:0),_=E.index+E[0].length,L=b,j=k,P=t.length;L<P&&(j<_||!t[L].type&&!t[L-1].greedy);++L)x>=(j+=t[L].length)&&(++b,k=j);if(t[b]instanceof l)continue;O=L-b,w=e.slice(k,j),E.index-=k}else{g.lastIndex=0;var E=g.exec(w),O=1}if(E){f&&(m=E[1]?E[1].length:0),_=(x=E.index+m)+(E=E[0].slice(m)).length;var S=w.slice(0,x),C=w.slice(_),F=[b,O];S&&(++b,k+=S.length,F.push(S));var A=new l(s,p?r.tokenize(E,p):E,v,E,h);if(F.push(A),C&&F.push(C),Array.prototype.splice.apply(t,F),1!=O&&r.matchGrammar(e,t,n,b,k,!0,s),i)break}else if(i)break}}}}},tokenize:function(e,t,n){var o=[e],a=t.rest;if(a){for(var i in a)t[i]=a[i];delete t.rest}return r.matchGrammar(e,o,t,0,0,!1),o},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,a=0;o=n[a++];)o(t)}}},o=r.Token=function(e,t,n,r,o){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!o};if(o.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return o.stringify(n,t,e)}).join("");var a={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}r.hooks.run("wrap",a);var c=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(c?" "+c:"")+">"+a.content+"</"+a.tag+">"},!n.document)return n.addEventListener?(r.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),o=t.language,a=t.code,i=t.immediateClose;n.postMessage(r.highlight(a,r.languages[o],o)),i&&n.close()},!1),n.Prism):n.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(r.filename=a.src,r.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.languages.css,r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css",greedy:!0}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript",greedy:!0}}),r.languages.js=r.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,o=t.getAttribute("data-src"),a=t,i=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;a&&!i.test(a.className);)a=a.parentNode;if(a&&(n=(t.className.match(i)||[,""])[1]),!n){var c=(o.match(/\.(\w+)$/)||[,""])[1];n=e[c]||c}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var s=new XMLHttpRequest;s.open("GET",o,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(l.textContent=s.responseText,r.highlightElement(l)):s.status>=400?l.textContent="✖ Error "+s.status+" while fetching file: "+s.statusText:l.textContent="✖ Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&r.plugins.toolbar&&r.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=o,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,n(2))},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(3)),i=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}function s(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(s.prototype,HTMLElement.prototype),Object.setPrototypeOf(s,HTMLElement),n(0);var u=document.createElement("template");u.innerHTML="\n<style>"+i.default+'</style>\n<div id="container">\n  <div id="higlighter"></div>\n  <div id="counter"></div>\n  <div id="code"></div>\n</div>';var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=u.content.cloneNode(!0);return e.attachShadow({mode:"open"}).appendChild(n),e._prism=Object.assign({},a.default),e.$=new Proxy(e.shadowRoot,{get:function(e,t){return e.getElementById(t)}}),e.attr=new Proxy(e,{get:function(e,t){return e.getAttribute(t)},set:function(e,t,n){return e.setAttribute(t,n)}}),e._connected=!1,e._createConent(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),o(t,[{key:"connectedCallback",value:function(){this._connected=!0}},{key:"attributeChangedCallback",value:function(e,t,n){if(this._connected)switch(e){case"src":console.log(t,n),this._updateContent();break;case"highlight":this._updateLineHighLighter()}}},{key:"_resolveLang",value:function(){var e={javascript:/.(js|jsx)$/,match:function(e){var t=this;return Object.keys(this).find(function(n){return e.match(t[n])})}},t=this.attr.src;return t&&(e.match(t)||t.split(".").pop())||"javascript"}},{key:"_getFileContent",value:function(){var e=l(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent)&&n.ok){e.next=5;break}throw new Error("bad response");case 5:return e.next=7,n.text();case 7:if(r=e.sent){e.next=10;break}throw new Error("bad content");case 10:return e.abrupt("return",r.trim());case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_getInlineContent",value:function(e){var t=document.createElement("textarea");return t.innerHTML=e.innerHTML,t.value.trim()}},{key:"_getContent",value:function(){var e=l(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.attr.src,!this.attr.src){e.next=10;break}return e.next=4,this._getFileContent(t);case 4:if(e.t1=e.sent,e.t1){e.next=7;break}e.t1=this._getInlineContent(this);case 7:e.t0=e.t1,e.next=11;break;case 10:e.t0=this._getInlineContent(this);case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_createConent",value:function(){var e=l(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getContent();case 2:if(0!==(t=e.sent).length){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,this._highlightContent(t);case 7:n=e.sent,this.$.code.appendChild(n),this._addLineCounter(t),this._addLineHighLighter(t);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_updateContent",value:function(){this._clearContent(),this._createConent()}},{key:"_clearContent",value:function(){this.$.code.innerHTML="",this.$.counter.innerHTML=""}},{key:"_highlightContent",value:function(){var e=l(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,e.t0){e.next=5;break}return e.next=4,this._getContent();case 4:e.t0=e.sent;case 5:return t=e.t0,e.abrupt("return",new Promise(function(e){var r=document.createElement("pre"),o=document.createElement("code"),a=n.Lang||n._resolveLang();r.className="language-"+a,r.appendChild(o),o.textContent=t,n._prism.highlightElement(o),e(r)}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_getNumberOfLines",value:function(){var e=this.$.code.innerText.match(/\n(?!$)/g);return e&&e.length+1||1}},{key:"_addLineCounter",value:function(){var e=l(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this._getNumberOfLines(),n=0;n<t;n++)(r=document.createElement("span")).innerText=n+1,this.$.counter.appendChild(r);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_addLineHighLighter",value:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.Highlight){e.next=6;break}return e.next=3,this._getNumberOfLines();case 3:this.$.higlighter.codeLineCount=e.sent,this.$.higlighter.codelineHeight=this.$.code.clientHeight/this.$.higlighter.codeLineCount,this._updateLineHighLighter();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_updateLineHighLighter",value:function(){var e=this.attr.highlight,t=e&&e.match(/(^[0-9]+)-([0-9]+$)|(^[0-9]+$)/);if(t){var n={start:t[3]||t[1],end:t[2]||t[3]};this._higlightLines(n.start,n.end-n.start+1)}}},{key:"_higlightLines",value:function(e,t){var n=this._getNumberOfLines(),r=this.$.code.clientHeight/n,o=this.$.higlighter.style;o.top=r*e-r,o.height=r*t}},{key:"Prism",get:function(){return this._prism}}],[{key:"observedAttributes",get:function(){return["src","highlight"]}}]),t}();t.default=d},function(e,t,n){var r,o=(r=n(4))&&r.__esModule?r:{default:r};customElements.define("codin-codeblock",o.default)},function(e,t){!function(t){var n,o=Object.prototype,a=o.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==(void 0===e?"undefined":r(e)),d=t.regeneratorRuntime;if(d)u&&(e.exports=d);else{(d=t.regeneratorRuntime=u?e.exports:{}).wrap=w;var g="suspendedStart",p="suspendedYield",f="executing",h="completed",m={},v={};v[c]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(A([])));b&&b!==o&&a.call(b,c)&&(v=b);var k=j.prototype=_.prototype=Object.create(v);L.prototype=k.constructor=j,j.constructor=L,j[s]=L.displayName="GeneratorFunction",d.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},d.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(k),e},d.awrap=function(e){return{__await:e}},P(E.prototype),E.prototype[l]=function(){return this},d.AsyncIterator=E,d.async=function(e,t,n,r){var o=new E(w(e,t,n,r));return d.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},P(k),k[s]="Generator",k[c]=function(){return this},k.toString=function(){return"[object Generator]"},d.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=A,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function w(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),i=new F(r||[]);return a._invoke=function(e,t,n){var r=g;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return $()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===g)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=x(e,t,n);if("normal"===l.type){if(r=n.done?h:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function _(){}function L(){}function j(){}function P(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){var t;this._invoke=function(n,o){function i(){return new Promise(function(t,i){!function t(n,o,i,c){var l=x(e[n],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==(void 0===u?"undefined":r(u))&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,i,c)},function(e){t("throw",e,i,c)}):Promise.resolve(u).then(function(e){s.value=e,i(s)},c)}c(l.arg)}(n,o,t,i)})}return t=t?t.then(i,i):i()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:$}}function $(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,n){n(6),n(5)}])},function(e,t,n){"use strict";n(5);var r=i(n(4)),o=i(n(3)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var c="\n    codin-codeblock.light{"+r.default+"}\n    codin-codeblock.dark{"+o.default+"}\n    codin-codeblock.c64{"+a.default+"}\n",l=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=c:s.appendChild(document.createTextNode(c)),l.appendChild(s),n(1),n(0)}]);