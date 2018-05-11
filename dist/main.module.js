!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,punctuation:/[{}[\]);,]/,operator:/:/g,boolean:/\b(?:true|false)\b/i,null:/\bnull\b/i},Prism.languages.jsonp=Prism.languages.json},function(e,t){e.exports=':host{--code-font:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;--code-font-size:1rem;--code-font-height:1.5;--code-color:var(--theme-color,#3f3f3f);--code-background:var(--theme-background,#f5f2f0);--code-text-shadow:none;--code-t-text:green;--code-t-number:#905;--code-t-selector:#690;--code-t-operator:#9a6e3a;--code-t-keyword:#07a;--code-t-variable:#e90;--code-t-function:#dd4a68;--code-line-number-color:#999;--code-line-number-divider:1px solid var(--code-line-number-color);--code-el-cdata:var(--code-t-text);--code-el-comment:var(--code-t-text);--code-el-doctype:var(--code-t-text);--code-el-prolog:var(--code-t-text);--code-el-namespace:var(--code-t-text);--code-el-property:var(--code-t-number);--code-el-tag:var(--code-t-number);--code-el-boolean:var(--code-t-number);--code-el-number:var(--code-t-number);--code-el-constant:var(--code-t-number);--code-el-symbol:var(--code-t-number);--code-el-deleted:var(--code-t-number);--code-el-selector:var(--code-t-selector);--code-el-attr-name:var(--code-t-selector);--code-el-string:var(--code-t-selector);--code-el-char:var(--code-t-selector);--code-el-builtin:var(--code-t-selector);--code-el-inserted:var(--code-t-selector);--code-el-operator:var(--code-t-operator);--code-el-entity:var(--code-t-operator);--code-el-url:var(--code-t-operator);--code-el-atrule:var(--code-t-keyword);--code-el-attr-value:var(--code-t-keyword);--code-el-keyword:var(--code-t-keyword);--code-el-regex:var(--code-t-variable);--code-el-important:var(--code-t-variable);--code-el-variable:var(--code-t-variable);--code-el-function:var(--code-t-function);--code-el-class-name:var(--code-t-function);--code-el-punctuation:#999;display:block;overflow:auto;padding:10px 0;font-family:var(--code-font);font-size:var(--code-font-size);line-height:var(--code-font-height);color:var(--code-color);background:var(--code-background)}#container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;position:relative;padding:var(--code-padding,0 10px);background:var(--code-container-background)}#higlighter{position:absolute;background:rgba(255,255,104,.15);width:calc(100% - 2px);left:1px;top:0;height:0;z-index:0;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.1);box-shadow:0 0 3px 0 rgba(0,0,0,.1);margin-top:-2px;border-radius:.25em}#counter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;margin-right:1em;padding-right:.5em;text-align:right;z-index:1;color:var(--code-line-number-color);border-right:var(--code-line-number-divider)}#code{z-index:1;overflow-x:auto}code,pre{margin:0;padding:0;text-align:left;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;font-size:1em;font-family:var(--code-font);text-shadow:var(--code-text-shadow)}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.namespace{color:var(--code-el-namespace)}.token.cdata{color:var(--code-el-cdata)}.token.comment{color:var(--code-el-comment)}.token.doctype{color:var(--code-el-doctype)}.token.prolog{color:var(--code-el-prolog)}.token.property{color:var(--code-el-property)}.token.tag{color:var(--code-el-tag)}.token.boolean{color:var(--code-el-boolean)}.token.number{color:var(--code-el-number)}.token.constant{color:var(--code-el-constant)}.token.symbol{color:var(--code-el-symbol)}.token.deleted{color:var(--code-el-deleted)}.token.selector{color:var(--code-el-selector)}.token.attr-name{color:var(--code-el-attr-name)}.token.string{color:var(--code-el-string)}.token.char{color:var(--code-el-char)}.token.builtin{color:var(--code-el-builtin)}.token.inserted{color:var(--code-el-inserted)}.token.punctuation{color:var(--code-el-punctuation)}.token.operator{color:var(--code-el-operator)}.token.entity{color:var(--code-el-entity)}.token.url{color:var(--code-el-url)}.token.atrule{color:var(--code-el-atrule)}.token.attr-value{color:var(--code-el-attr-value)}.token.keyword{color:var(--code-el-keyword)}.token.function{color:var(--code-el-function)}.token.class-name{color:var(--code-el-class-name)}.token.regex{color:var(--code-el-regex)}.token.important{color:var(--code-el-important)}.token.variable{color:var(--code-el-variable)}'},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=r.util.type(e);switch(t=t||{},n){case"Object":if(t[r.util.objId(e)])return t[r.util.objId(e)];var o={};for(var a in t[r.util.objId(e)]=o,e)e.hasOwnProperty(a)&&(o[a]=r.util.clone(e[a],t));return o;case"Array":if(t[r.util.objId(e)])return t[r.util.objId(e)];o=[];return t[r.util.objId(e)]=o,e.forEach(function(e,n){o[n]=r.util.clone(e,t)}),o}return e}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var a=(o=o||r.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(a[i]=n[i]);return a}var l={};for(var c in a)if(a.hasOwnProperty(c)){if(c==t)for(var i in n)n.hasOwnProperty(i)&&(l[i]=n[i]);l[c]=a[c]}return r.languages.DFS(r.languages,function(t,n){n===o[e]&&t!=e&&(this[t]=l)}),o[e]=l},DFS:function(e,t,n,o){for(var a in o=o||{},e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==r.util.type(e[a])||o[r.util.objId(e[a])]?"Array"!==r.util.type(e[a])||o[r.util.objId(e[a])]||(o[r.util.objId(e[a])]=!0,r.languages.DFS(e[a],t,a,o)):(o[r.util.objId(e[a])]=!0,r.languages.DFS(e[a],t,null,o)))}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o);for(var a,i=o.elements||e.querySelectorAll(o.selector),l=0;a=i[l++];)r.highlightElement(a,!0===t,o.callback)},highlightElement:function(t,o,a){for(var i,l,c=t;c&&!e.test(c.className);)c=c.parentNode;c&&(i=(c.className.match(e)||[,""])[1].toLowerCase(),l=r.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(c=t.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var s={element:t,language:i,grammar:l,code:t.textContent};if(r.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(r.hooks.run("before-highlight",s),s.element.textContent=s.code,r.hooks.run("after-highlight",s)),void r.hooks.run("complete",s);if(r.hooks.run("before-highlight",s),o&&n.Worker){var u=new Worker(r.filename);u.onmessage=function(e){s.highlightedCode=e.data,r.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(s.element),r.hooks.run("after-highlight",s),r.hooks.run("complete",s)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=r.highlight(s.code,s.grammar,s.language),r.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(t),r.hooks.run("after-highlight",s),r.hooks.run("complete",s)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,o,a,i,l){var c=r.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==l)return;var u=n[s];u="Array"===r.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var h=u[d],g=h.inside,p=!!h.lookbehind,f=!!h.greedy,m=0,v=h.alias;if(f&&!h.pattern.global){var y=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}h=h.pattern||h;for(var b=o,w=a;b<t.length;w+=t[b].length,++b){var k=t[b];if(t.length>e.length)return;if(!(k instanceof c)){if(f&&b!=t.length-1){if(h.lastIndex=w,!(C=h.exec(e)))break;for(var x=C.index+(p?C[1].length:0),_=C.index+C[0].length,L=b,j=w,F=t.length;L<F&&(j<_||!t[L].type&&!t[L-1].greedy);++L)x>=(j+=t[L].length)&&(++b,w=j);if(t[b]instanceof c)continue;E=L-b,k=e.slice(w,j),C.index-=w}else{h.lastIndex=0;var C=h.exec(k),E=1}if(C){p&&(m=C[1]?C[1].length:0);_=(x=C.index+m)+(C=C[0].slice(m)).length;var S=k.slice(0,x),A=k.slice(_),P=[b,E];S&&(++b,w+=S.length,P.push(S));var O=new c(s,g?r.tokenize(C,g):C,v,C,f);if(P.push(O),A&&P.push(A),Array.prototype.splice.apply(t,P),1!=E&&r.matchGrammar(e,t,n,b,w,!0,s),i)break}else if(i)break}}}}},tokenize:function(e,t,n){var o=[e],a=t.rest;if(a){for(var i in a)t[i]=a[i];delete t.rest}return r.matchGrammar(e,o,t,0,0,!1),o},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,a=0;o=n[a++];)o(t)}}},o=r.Token=function(e,t,n,r,o){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!o};if(o.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return o.stringify(n,t,e)}).join("");var a={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}r.hooks.run("wrap",a);var l=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(l?" "+l:"")+">"+a.content+"</"+a.tag+">"},!n.document)return n.addEventListener?(r.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),o=t.language,a=t.code,i=t.immediateClose;n.postMessage(r.highlight(a,r.languages[o],o)),i&&n.close()},!1),n.Prism):n.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(r.filename=a.src,r.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.languages.css,r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css",greedy:!0}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript",greedy:!0}}),r.languages.js=r.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,o=t.getAttribute("data-src"),a=t,i=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;a&&!i.test(a.className);)a=a.parentNode;if(a&&(n=(t.className.match(i)||[,""])[1]),!n){var l=(o.match(/\.(\w+)$/)||[,""])[1];n=e[l]||l}var c=document.createElement("code");c.className="language-"+n,t.textContent="",c.textContent="Loading…",t.appendChild(c);var s=new XMLHttpRequest;s.open("GET",o,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(c.textContent=s.responseText,r.highlightElement(c)):s.status>=400?c.textContent="✖ Error "+s.status+" while fetching file: "+s.statusText:c.textContent="✖ Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&r.plugins.toolbar&&r.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=o,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(3)),o=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var i=t[o](a),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}("next")})}}n(0);const l=document.createElement("template");l.innerHTML=`\n<style>${o.default}</style>\n<div id="container">\n  <div id="higlighter"></div>\n  <div id="counter"></div>\n  <div id="code"></div>\n</div>`,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(l,"codin-codeblock");t.default=class extends HTMLElement{constructor(){super();const e=l.content.cloneNode(!0);this.attachShadow({mode:"open"}).appendChild(e),this._prism=Object.assign({},r.default),this.$=new Proxy(this.shadowRoot,{get:(e,t)=>e.getElementById(t)}),this.attr=new Proxy(this,{get:(e,t)=>e.getAttribute(t),set:(e,t,n)=>e.setAttribute(t,n)}),this._connected=!1,this._createConent()}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._connected=!0}get Prism(){return this._prism}static get observedAttributes(){return["src","highlight"]}attributeChangedCallback(e,t,n){if(this._connected)switch(e){case"src":console.log(t,n),this._updateContent();break;case"highlight":this._updateLineHighLighter()}}_resolveLang(){const e={javascript:/.(js|jsx)$/,match:function(e){return Object.keys(this).find(t=>e.match(this[t]))}},t=this.attr.src;return t&&(e.match(t)||t.split(".").pop())||"javascript"}_getFileContent(e){return i(function*(){const t=yield fetch(e);if(!t||!t.ok)throw new Error("bad response");const n=yield t.text();if(!n)throw new Error("bad content");return n.trim()})()}_getInlineContent(e){const t=document.createElement("textarea");return t.innerHTML=e.innerHTML,t.value.trim()}_getContent(){var e=this;return i(function*(){const t=e.attr.src;return e.attr.src&&(yield e._getFileContent(t))||e._getInlineContent(e)})()}_createConent(){var e=this;return i(function*(){const t=yield e._getContent();if(0===t.length)return!1;const n=yield e._highlightContent(t);e.$.code.appendChild(n),e._addLineCounter(t),e._addLineHighLighter(t)})()}_updateContent(){this._clearContent(),this._createConent()}_clearContent(){this.$.code.innerHTML="",this.$.counter.innerHTML=""}_highlightContent(e){var t=this;return i(function*(){return e=e||(yield t._getContent()),new Promise(function(n){const r=document.createElement("pre"),o=document.createElement("code"),a=t.Lang||t._resolveLang();r.className=`language-${a}`,r.appendChild(o),o.textContent=e,t._prism.highlightElement(o),n(r)})})()}_getNumberOfLines(){const e=this.$.code.innerText.match(/\n(?!$)/g);return e&&e.length+1||1}_addLineCounter(){var e=this;return i(function*(){const t=e._getNumberOfLines();for(let n=0;n<t;n++){const t=document.createElement("span");t.innerText=n+1,e.$.counter.appendChild(t)}})()}_addLineHighLighter(){var e=this;return i(function*(){e.Highlight&&(e.$.higlighter.codeLineCount=yield e._getNumberOfLines(),e.$.higlighter.codelineHeight=e.$.code.clientHeight/e.$.higlighter.codeLineCount,e._updateLineHighLighter())})()}_updateLineHighLighter(){const e=this.attr.highlight,t=e&&e.match(/(^[0-9]+)-([0-9]+$)|(^[0-9]+$)/);if(t){const e={start:t[3]||t[1],end:t[2]||t[3]};this._higlightLines(e.start,e.end-e.start+1)}}_higlightLines(e,t){const n=this._getNumberOfLines(),r=this.$.code.clientHeight/n,o=this.$.higlighter.style;o.top=r*e-r,o.height=r*t}}},function(e,t,n){"use strict";var r,o=n(4),a=(r=o)&&r.__esModule?r:{default:r};customElements.define("codin-codeblock",a.default)},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=w;var d="suspendedStart",h="suspendedYield",g="executing",p="completed",f={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==r&&o.call(y,i)&&(m=y);var b=L.prototype=x.prototype=Object.create(m);_.prototype=b.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},u.awrap=function(e){return{__await:e}},j(F.prototype),F.prototype[l]=function(){return this},u.AsyncIterator=F,u.async=function(e,t,n,r){var o=new F(w(e,t,n,r));return u.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},j(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),f}}}function w(e,t,n,r){var o=t&&t.prototype instanceof x?t:x,a=Object.create(o.prototype),i=new A(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===g)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=C(i,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var c=k(e,t,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function k(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function x(){}function _(){}function L(){}function j(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function F(e){var t;this._invoke=function(n,r){function a(){return new Promise(function(t,a){!function t(n,r,a,i){var l=k(e[n],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(s).then(function(e){c.value=e,a(c)},i)}i(l.arg)}(n,r,t,a)})}return t=t?t.then(a,a):a()}}function C(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,C(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=k(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,n){"use strict";n(6),n(5)}]);