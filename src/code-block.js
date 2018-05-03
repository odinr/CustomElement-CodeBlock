// import regeneratorRuntime from "regenerator-runtime";

import Prism from "prismjs";
import style from "./style.pcss";


require("prismjs/components/prism-json.js");

const tmpl = document.createElement("template");
tmpl.innerHTML = `
<style>${style}</style>
<div id="container">
  <div id="higlighter"></div>
  <div id="counter"></div>
  <div id="code"></div>
</div>`;

/**
 * Custom HTML element for displaying code content.
 *
 * auto resolves file content by extension
 *
 * Depends on prismjs
 */
export default class CodinCodeBlock extends HTMLElement {
  constructor() {
    super();

    /** open shadow dom and add template content */
    const template = tmpl.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(template);

    /** create an issolated instance for component */
    this._prism = Object.assign({}, Prism);

    this.$ = new Proxy(this.shadowRoot, {
      get: (obj, prop) => obj.getElementById(prop)
    });
    this.attr = new Proxy(this, {
      get: (obj, prop) => obj.getAttribute(prop),
      set: (obj, prop, value) => obj.setAttribute(prop, value)
    });
    this._connected = false;
    this._createConent();
  }

  connectedCallback() {
    this._connected = true;
  }
  /**
   * @returns {Prism} - Local instance of prism
   */
  get Prism() {
    return this._prism;
  }

  static get observedAttributes() {
    return ["src", "highlight"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    if(!this._connected) return;
    switch (attrName) {
      case "src":
      console.log(oldVal, newVal);
        this._updateContent();
        break;
      case "highlight":
        this._updateLineHighLighter();
        break;
    }
  }

  /**
   * tries to resolve the type of content that this element contains
   * @default {String} - javascript
   */
  _resolveLang() {
    const types = {
      javascript: /.(js|jsx)$/,
      match: function(src) {
        return Object.keys(this).find(v => src.match(this[v]));
      }
    };
    const src = this.attr.src;
    return (
      (src && (types.match(src) || src.split(".").pop())) ||
      "javascript"
    );
  }

  async _getFileContent(src) {
    const response = await fetch(src);
    if (!response || !response.ok) {
      throw new Error("bad response");
    }
    const content = await response.text();
    if (!content) {
      throw new Error("bad content");
    }
    return content.trim();
  }

  _getInlineContent(el) {
    const parser = document.createElement("textarea");
    parser.innerHTML = el.innerHTML;
    return parser.value.trim();
  }

  async _getContent() {
    const src = this.attr.src;
    return this.attr.src
      ? (await this._getFileContent(src)) || this._getInlineContent(this)
      : this._getInlineContent(this);
  }

  async _createConent() {
    const content = await this._getContent();
    if (content.length === 0) {
      return false;
    }
    const el = await this._highlightContent(content);
    this.$.code.appendChild(el);

    this._addLineCounter(content);
    this._addLineHighLighter(content);
  }

  _updateContent() {
    this._clearContent();
    this._createConent();
  }

  _clearContent() {
    this.$.code.innerHTML = "";
    this.$.counter.innerHTML = "";
  }

  async _highlightContent(content) {
    content = content || (await this._getContent());
    return new Promise(resolve => {
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      const lang = this.Lang || this._resolveLang();

      pre.className = `language-${lang}`;
      pre.appendChild(code);

      code.textContent = content;
      this._prism.highlightElement(code);
      resolve(pre);
    });
  }

  _getNumberOfLines() {
    const lines = this.$.code.innerText.match(/\n(?!$)/g);
    return (lines && lines.length + 1) || 1;
  }

  async _addLineCounter() {
    const lineCount = this._getNumberOfLines();
    for (let i = 0; i < lineCount; i++) {
      const counter = document.createElement("span");
      counter.innerText = i + 1;
      this.$.counter.appendChild(counter);
    }
  }

  async _addLineHighLighter() {
    if (this.Highlight) {
      this.$.higlighter.codeLineCount = await this._getNumberOfLines();
      this.$.higlighter.codelineHeight =
        this.$.code.clientHeight / this.$.higlighter.codeLineCount;
      this._updateLineHighLighter();
    }
  }

  _updateLineHighLighter() {
    const highlight = this.attr.highlight;
    const match = highlight && highlight.match(/(^[0-9]+)-([0-9]+$)|(^[0-9]+$)/);
    if (match){
      const range = {
        start: match[3] || match[1],
        end: match[2] || match[3],
      };
      this._higlightLines(range.start, range.end - range.start + 1);
    }
  } 
  
  _higlightLines(line, lines){
    const lineCount = this._getNumberOfLines();
    const lineHeight = this.$.code.clientHeight / lineCount;
    const style = this.$.higlighter.style;
    
    style.top = lineHeight * line - lineHeight;
    style.height = lineHeight * lines;
  }
}

