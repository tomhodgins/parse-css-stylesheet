# parse-css-stylesheet

Parse a string of text as a CSS stylesheet with JavaScript in the browser environment

## about

When working in the browser environment strings containing HTML can be parsed into DOM using the [`DOMParser()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) interface, but no equivalent interface exists for parsing a string containing CSS text parsed into a [`CSSStyleSheet`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) object. That's what this module provides, and it only works in the browser environment.

## usage

This software is distributed as an ES module and should work in all modern browsers (including Chrome/Safari/Edge/Firefox).

```js
import parseStylesheet from 'https://unpkg.com/parse-css-stylesheet/index.js'

// Log the parsed CSSStyleSheet object to the console
console.log(
  parseStylesheet(`
    :root { background-color: lime }
    body { background-color: hotpink }
  `)
)
```