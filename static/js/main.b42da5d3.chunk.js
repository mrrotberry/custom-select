(this["webpackJsonpselect-cra"]=this["webpackJsonpselect-cra"]||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var i,o,r,a,s,l,c,d,u,b,p,h,m,f,g,x,v,y=t(17),j=t(1),O=t(11),w=t(16),k=t(25),C=t(9),z=t(13),I=t(15),E=40,S=200,R=8,A=40,q=5,F=250,P={Caret:C.c.svg((function(n){var e=n.$dropdownIsOpen;return Object(C.b)(i||(i=Object(O.a)(["\n  margin-left: auto;\n\n  transform: rotate(",");\n\n  transition: transform ","ms;\n"])),e?"180deg":"0deg",F)}))},M=t(3),$=function(n){var e=n.dropdownIsOpen;return Object(M.jsx)(P.Caret,{viewBox:"8 8 16 16",width:"1rem",height:"1rem",$dropdownIsOpen:e,children:Object(M.jsx)("path",{d:"M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"})})},D={Content:C.c.span(o||(o=Object(O.a)([""]))),Pill:C.c.span(r||(r=Object(O.a)(["\n  padding: 0.25rem;\n\n  border-radius: 0.25rem;\n  \n  background-color: #4a99d5;\n  color: #fff;\n  \n  &:not(:last-child) {\n    margin-right: 1rem;\n  }\n"]))),DeleteButton:C.c.button(a||(a=Object(O.a)(["\n  margin-left: 0.5rem;\n  padding: 0.25rem;\n  \n  border: none;\n  background: none;\n  \n  color: #fff;\n"]))),Placeholder:C.c.span(s||(s=Object(O.a)(["\n  color: #656565;\n"])))},B=function(n){var e=n.options,t=n.value,i=n.handlePillClick,o=n.placeholder,r=Object(j.useMemo)((function(){var n;return"string"===typeof t?null===(n=e.find((function(n){return n.value===t})))||void 0===n?void 0:n.label:Array.isArray(t)?t.map((function(n){return e.find((function(e){return e.value===n}))})).map((function(n){return Object(M.jsxs)(D.Pill,{children:[null===n||void 0===n?void 0:n.label,Object(M.jsx)(D.DeleteButton,{"data-value":null===n||void 0===n?void 0:n.value,onClick:i,children:Object(M.jsxs)("svg",{viewBox:"0 0 12 12",width:"12",height:"12",children:[Object(M.jsx)("line",{x1:"1",y1:"11",x2:"11",y2:"1",stroke:"#fff",strokeWidth:"2"}),Object(M.jsx)("line",{x1:"1",y1:"1",x2:"11",y2:"11",stroke:"#fff",strokeWidth:"2"})]})})]},null===n||void 0===n?void 0:n.value)})):void 0}),[e,t]);return r?Object(M.jsx)(D.Content,{children:r}):Object(M.jsx)(D.Placeholder,{children:o})},T=t(26),L={Option:C.c.button((function(n){var e=n.$isSelected,t=n.$isRtl;return Object(C.b)(l||(l=Object(O.a)(["\n  display: block;\n\n  width: 100%;\n  height: ","px;\n\n  padding: 0.5rem;\n\n  border: none;\n  background-color: ",";\n\n  text-align: ",";\n  color: ",";\n\n  user-select: none;\n  appearance: none;\n  cursor: pointer;\n  transition: background-color 0.25s, color 0.25s;\n\n  &:hover {\n    background-color: #4a99d5;\n    color: #fff;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #444;\n  }\n\n  &[disabled] {\n    background-color: #919191;\n    color: #000;\n    cursor: not-allowed;\n  }\n"])),A,e?"#4a99d5":"#fff",t?"right":"left",e?"#fff":"#000")}))},K=function(n){var e=n.value,t=n.onClick,i=n.style,o=n.isSelected,r=n.isDisabled,a=n.isRtl,s=n.children;return Object(M.jsx)(L.Option,{type:"button","data-value":e,onClick:t,style:i,disabled:r,$isSelected:o,$isRtl:a,children:s})},W=Object(C.d)(c||(c=Object(O.a)(["\n  from {\n    max-height: 0;\n  }\n\n  to {\n    max-height: ","px;\n  }\n"])),S),H=Object(C.d)(d||(d=Object(O.a)(["\n  from {\n    max-height: ","px;\n  }\n\n  to {\n    max-height: 0;\n  }\n"])),S),U={Wrapper:C.c.div((function(n){var e=n.$isOpen,t=n.$dropdownPosition,i=E+R;return Object(C.b)(u||(u=Object(O.a)(["\n    position: absolute;\n    ",";\n\n    left: 0;\n    right: 0;\n    z-index: 10;\n\n    animation: "," ","ms;\n\n    overflow: hidden;\n\n    transition: ","ms;\n  "])),"top"===t?"bottom: ".concat(i,"px"):"top: ".concat(i,"px"),e?W:H,F,F)})),Dropdown:C.c.div(b||(b=Object(O.a)(["\n  border: 1px solid #444;\n  background-color: #fff;\n"]))),SearchField:C.c.input(p||(p=Object(O.a)(["\n  width: 100%;\n  height: ","px;\n\n  padding: 0 0.5rem;\n\n  border: none;\n  border-bottom: 1px solid #444;\n"])),A),Options:C.c.div(h||(h=Object(O.a)([""]))),EmptyOptionsText:C.c.div(m||(m=Object(O.a)(["\n  padding: 0.5rem;\n\n  text-align: center;\n  color: #888;\n\n  user-select: none;\n"])))},J=function(n){var e=n.isOpen,t=n.options,i=n.value,o=n.handleOptionClick,r=n.selectClientRect,a=n.isSearchable,s=n.searchFieldPlaceholder,l=n.emptyOptionsText,c=n.isRtl,d=Object(j.useState)(e),u=Object(I.a)(d,2),b=u[0],p=u[1],h=Object(j.useState)(""),m=Object(I.a)(h,2),f=m[0],g=m[1];Object(j.useEffect)((function(){e&&p(!0)}),[e]);var x=Object(j.useCallback)((function(){e||(f&&g(""),p(!1))}),[e,f]),v=Object(j.useCallback)((function(n){g(n.target.value)}),[]),y=Object(j.useRef)(null),O=Object(j.useMemo)((function(){return f?t.filter((function(n){var e="".concat(n.label).trim().toLowerCase(),t=f.trim().toLocaleLowerCase();return e.includes(t)})):t}),[t,f]);Object(j.useEffect)((function(){b&&setTimeout((function(){y.current&&y.current.focus()}),F)}),[b,y]);var w=Object(j.useMemo)((function(){var n=r.bottom+S;return n>window.innerHeight&&n>r.top?"top":"bottom"}),[r]),k=Object(j.useMemo)((function(){return 0===t.length||0!==f.length&&0===O.length}),[t,f,O]),C=Object(j.useMemo)((function(){return O.length>q?"".concat(S,"px"):"".concat(O.length*A,"px")}),[O]),z=Object(j.useCallback)((function(n){return"string"===typeof i?i===n:!!Array.isArray(i)&&i.includes(n)}),[i]);return b?Object(M.jsx)(U.Wrapper,{$isOpen:e,onAnimationEnd:x,$dropdownPosition:w,children:Object(M.jsxs)(U.Dropdown,{"aria-expanded":"true",children:[t.length>=q&&a&&Object(M.jsx)(U.SearchField,{type:"text",value:f,onChange:v,placeholder:s,autoComplete:"off",ref:y}),Object(M.jsxs)(U.Options,{role:"list",children:[k&&Object(M.jsx)(U.EmptyOptionsText,{children:l}),t.length>=q?Object(M.jsx)(T.a,{style:{height:C,transition:"height ".concat(F,"ms")},children:function(n){var e=n.width,t=n.height;return Object(M.jsx)(T.b,{scrollToIndex:i?O.findIndex((function(n){return n.value===i})):0,height:t,width:e,scrollToAlignment:"start",rowCount:O.length,rowHeight:A,rowRenderer:function(n){var e=n.index,t=n.style,i=n.key;return Object(M.jsx)(K,{value:O[e].value,onClick:o,isSelected:z(O[e].value),isDisabled:O[e].isDisabled,isRtl:c,style:t,children:O[e].label},i)},style:{height:"".concat(0!==O.length?S:0,"px")}})}}):t.map((function(n){return Object(M.jsx)(K,{value:n.value,onClick:o,isSelected:z(n.value),isDisabled:n.isDisabled,isRtl:c,children:n.label},n.value)}))]})]})}):null},X={Wrapper:C.c.div(f||(f=Object(O.a)(["\n  position: relative;\n\n  font-family: sans-serif;\n"]))),Select:C.c.div((function(n){var e=n.$isReadOnly,t=n.$isRtl;return Object(C.b)(g||(g=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n\n  width: 100%;\n  height: ","px;\n\n  padding: 0.5rem;\n\n  border: 1px solid ",";\n\n  background-color: ",";\n\n  text-align: ",";\n\n  appearance: none;\n  cursor: ",";\n  transition: border-color ",'ms;\n\n  &[aria-invalid="true"] {\n    border-color: red;\n  }\n\n  &[aria-invalid="false"] {\n    border-color: green;\n  }\n'])),t?"flex-end":"flex-start",E,e?"#ccc":"#444",e?"#ccc":"#fff",t?"right":"left",e?"not-allowed":"pointer",F)}))},N=function(n){var e=n.id,t=n.name,i=n.mode,o=void 0===i?"single":i,r=n.value,a=n.options,s=void 0===a?[]:a,l=n.onChange,c=n.onBlur,d=n.placeholder,u=void 0===d?"Please, select":d,b=n.fillingIsCorrected,p=n.isReadOnly,h=void 0!==p&&p,m=n.isSearchable,f=void 0!==m&&m,g=n.searchFieldPlaceholder,x=void 0===g?"Please, type a search string":g,v=n.emptyOptionsText,y=void 0===v?"No options":v,O=n.isRtl,w=void 0!==O&&O,k=Object(j.useRef)(null),C=Object(j.useRef)(null),E=Object(j.useState)(!1),S=Object(I.a)(E,2),R=S[0],A=S[1],q=Object(j.useRef)([]);Object(j.useEffect)((function(){var n=function(n){"Escape"===n.key&&A(!1)},e=function(n){k.current&&!k.current.contains(n.target)&&A(!1)};return document.addEventListener("keydown",n,!0),document.addEventListener("click",e,!0),function(){document.removeEventListener("keydown",n,!0),document.removeEventListener("click",e,!0)}}),[k]);var F=Object(j.useCallback)((function(){!h&&A((function(n){return!n}))}),[h]),P=Object(j.useCallback)((function(n){c();var e,t=n.currentTarget.getAttribute("data-value");("single"===o&&(l(t!==r?t:void 0),A(!1)),"multi"===o)&&(e=q.current.includes(t)?q.current.filter((function(n){return n!==t})):[].concat(Object(z.a)(q.current),[t]),q.current=e,l(e))}),[r]);return Object(M.jsxs)(X.Wrapper,{ref:k,children:[Object(M.jsxs)(X.Select,{id:e,role:"button",ref:C,"data-name":t,onClick:F,"aria-invalid":"boolean"===typeof b?!b:void 0,$isReadOnly:h,$isRtl:w,children:[Object(M.jsx)(B,{options:s,value:r,handlePillClick:P,placeholder:u}),Object(M.jsx)($,{dropdownIsOpen:R})]}),C.current&&Object(M.jsx)(J,{isOpen:R,options:s,value:r,handleOptionClick:P,selectClientRect:C.current.getBoundingClientRect(),isSearchable:f,searchFieldPlaceholder:x,emptyOptionsText:y,isRtl:w})]})},G=Object(C.a)(x||(x=Object(O.a)(['\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* make sure to set some focus styles for accessibility */\n  :focus {\n    outline: 0;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  input[type=search]::-webkit-search-cancel-button,\n  input[type=search]::-webkit-search-decoration,\n  input[type=search]::-webkit-search-results-button,\n  input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  input[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n\n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n\n  /**\n   * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n   */\n\n  audio,\n  canvas,\n  video {\n    display: inline-block;\n    display: inline;\n    zoom: 1;\n    max-width: 100%;\n  }\n\n  /**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  /**\n   * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n   * Known issue: no IE 6 support.\n   */\n\n  [hidden] {\n    display: none;\n  }\n\n  /**\n   * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n   *    `em` units.\n   * 2. Prevent iOS text size adjust after orientation change, without disabling\n   *    user zoom.\n   */\n\n  html {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n  }\n\n  /**\n   * Address `outline` inconsistency between Chrome and other browsers.\n   */\n\n  a:focus {\n    outline: thin dotted;\n  }\n\n  /**\n   * Improve readability when focused and also mouse hovered in all browsers.\n   */\n\n  a:active,\n  a:hover {\n    outline: 0;\n  }\n\n  /**\n   * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n   * 2. Improve image quality when scaled in IE 7.\n   */\n\n  img {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n  }\n\n  /**\n   * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n   */\n\n  figure {\n    margin: 0;\n  }\n\n  /**\n   * Correct margin displayed oddly in IE 6/7.\n   */\n\n  form {\n    margin: 0;\n  }\n\n  /**\n   * Define consistent border, margin, and padding.\n   */\n\n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n  /**\n   * 1. Correct color not being inherited in IE 6/7/8/9.\n   * 2. Correct text not wrapping in Firefox 3.\n   * 3. Correct alignment displayed oddly in IE 6/7.\n   */\n\n  legend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    margin-left: -7px; /* 3 */\n  }\n\n  /**\n   * 1. Correct font size not being inherited in all browsers.\n   * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n   *    and Chrome.\n   * 3. Improve appearance and consistency in all browsers.\n   */\n\n  button,\n  input,\n  select,\n  textarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    vertical-align: middle; /* 3 */\n  }\n\n  /**\n   * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\n\n  button,\n  input {\n    line-height: normal;\n  }\n\n  /**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n   * Correct `select` style inheritance in Firefox 4+ and Opera.\n   */\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  /**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n   *    Known issue: inner spacing remains in IE 6.\n   */\n\n  button,\n  html input[type="button"], /* 1 */\n  input[type="reset"],\n  input[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    overflow: visible; /* 4 */\n  }\n\n  /**\n   * Re-set default cursor for disabled elements.\n   */\n\n  button[disabled],\n  html input[disabled] {\n    cursor: default;\n  }\n\n  /**\n   * 1. Address box sizing set to content-box in IE 8/9.\n   * 2. Remove excess padding in IE 8/9.\n   * 3. Remove excess padding in IE 7.\n   *    Known issue: excess padding remains in IE 6.\n   */\n\n  input[type="checkbox"],\n  input[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    height: 13px; /* 3 */\n    width: 13px; /* 3 */\n  }\n\n  /**\n   * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n   *    (include `-moz` to future-proof).\n   */\n\n  input[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n  }\n\n  /**\n   * Remove inner padding and search cancel button in Safari 5 and Chrome\n   * on OS X.\n   */\n\n  input[type="search"]::-webkit-search-cancel-button,\n  input[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * Remove inner padding and border in Firefox 3+.\n   */\n\n  button::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  /**\n   * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n   * 2. Improve readability and alignment in all browsers.\n   */\n\n  textarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n  }\n\n  /**\n   * Remove most spacing between table cells.\n   */\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  html,\n  button,\n  input,\n  select,\n  textarea {\n    color: #222;\n  }\n\n\n  ::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  ::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  img {\n    vertical-align: middle;\n  }\n\n  fieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  .chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n  }\n\n  :root {\n    font-size: 16px;\n    min-height: 100vh;\n  }\n  \n  body {\n    display: flex;\n    min-height: 100vh;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n  }\n'],['\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* make sure to set some focus styles for accessibility */\n  :focus {\n    outline: 0;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  input[type=search]::-webkit-search-cancel-button,\n  input[type=search]::-webkit-search-decoration,\n  input[type=search]::-webkit-search-results-button,\n  input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  input[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n\n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n\n  /**\n   * Correct \\`inline-block\\` display not defined in IE 6/7/8/9 and Firefox 3.\n   */\n\n  audio,\n  canvas,\n  video {\n    display: inline-block;\n    display: inline;\n    zoom: 1;\n    max-width: 100%;\n  }\n\n  /**\n   * Prevent modern browsers from displaying \\`audio\\` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  /**\n   * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n   * Known issue: no IE 6 support.\n   */\n\n  [hidden] {\n    display: none;\n  }\n\n  /**\n   * 1. Correct text resizing oddly in IE 6/7 when body \\`font-size\\` is set using\n   *    \\`em\\` units.\n   * 2. Prevent iOS text size adjust after orientation change, without disabling\n   *    user zoom.\n   */\n\n  html {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n  }\n\n  /**\n   * Address \\`outline\\` inconsistency between Chrome and other browsers.\n   */\n\n  a:focus {\n    outline: thin dotted;\n  }\n\n  /**\n   * Improve readability when focused and also mouse hovered in all browsers.\n   */\n\n  a:active,\n  a:hover {\n    outline: 0;\n  }\n\n  /**\n   * 1. Remove border when inside \\`a\\` element in IE 6/7/8/9 and Firefox 3.\n   * 2. Improve image quality when scaled in IE 7.\n   */\n\n  img {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n  }\n\n  /**\n   * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n   */\n\n  figure {\n    margin: 0;\n  }\n\n  /**\n   * Correct margin displayed oddly in IE 6/7.\n   */\n\n  form {\n    margin: 0;\n  }\n\n  /**\n   * Define consistent border, margin, and padding.\n   */\n\n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n  /**\n   * 1. Correct color not being inherited in IE 6/7/8/9.\n   * 2. Correct text not wrapping in Firefox 3.\n   * 3. Correct alignment displayed oddly in IE 6/7.\n   */\n\n  legend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    margin-left: -7px; /* 3 */\n  }\n\n  /**\n   * 1. Correct font size not being inherited in all browsers.\n   * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n   *    and Chrome.\n   * 3. Improve appearance and consistency in all browsers.\n   */\n\n  button,\n  input,\n  select,\n  textarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    vertical-align: middle; /* 3 */\n  }\n\n  /**\n   * Address Firefox 3+ setting \\`line-height\\` on \\`input\\` using \\`!important\\` in\n   * the UA stylesheet.\n   */\n\n  button,\n  input {\n    line-height: normal;\n  }\n\n  /**\n   * Address inconsistent \\`text-transform\\` inheritance for \\`button\\` and \\`select\\`.\n   * All other form control elements do not inherit \\`text-transform\\` values.\n   * Correct \\`button\\` style inheritance in Chrome, Safari 5+, and IE 6+.\n   * Correct \\`select\\` style inheritance in Firefox 4+ and Opera.\n   */\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  /**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \\`audio\\`\n   *    and \\`video\\` controls.\n   * 2. Correct inability to style clickable \\`input\\` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    \\`input\\` and others.\n   * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n   *    Known issue: inner spacing remains in IE 6.\n   */\n\n  button,\n  html input[type="button"], /* 1 */\n  input[type="reset"],\n  input[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    overflow: visible; /* 4 */\n  }\n\n  /**\n   * Re-set default cursor for disabled elements.\n   */\n\n  button[disabled],\n  html input[disabled] {\n    cursor: default;\n  }\n\n  /**\n   * 1. Address box sizing set to content-box in IE 8/9.\n   * 2. Remove excess padding in IE 8/9.\n   * 3. Remove excess padding in IE 7.\n   *    Known issue: excess padding remains in IE 6.\n   */\n\n  input[type="checkbox"],\n  input[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    height: 13px; /* 3 */\n    width: 13px; /* 3 */\n  }\n\n  /**\n   * 1. Address \\`appearance\\` set to \\`searchfield\\` in Safari 5 and Chrome.\n   * 2. Address \\`box-sizing\\` set to \\`border-box\\` in Safari 5 and Chrome\n   *    (include \\`-moz\\` to future-proof).\n   */\n\n  input[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n  }\n\n  /**\n   * Remove inner padding and search cancel button in Safari 5 and Chrome\n   * on OS X.\n   */\n\n  input[type="search"]::-webkit-search-cancel-button,\n  input[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * Remove inner padding and border in Firefox 3+.\n   */\n\n  button::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  /**\n   * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n   * 2. Improve readability and alignment in all browsers.\n   */\n\n  textarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n  }\n\n  /**\n   * Remove most spacing between table cells.\n   */\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  html,\n  button,\n  input,\n  select,\n  textarea {\n    color: #222;\n  }\n\n\n  ::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  ::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  img {\n    vertical-align: middle;\n  }\n\n  fieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  .chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n  }\n\n  :root {\n    font-size: 16px;\n    min-height: 100vh;\n  }\n  \n  body {\n    display: flex;\n    min-height: 100vh;\n  }\n\n  #root {\n    display: flex;\n    width: 100%;\n  }\n']))),Q=C.c.div(v||(v=Object(O.a)(["\n  width: 100%;\n\n  margin: 3rem;\n"]))),V=function(n,e,t){return Object(w.b)(e,n)||Object(w.b)(t,n)?!Object(w.b)(t,n):void 0},Y=function(){var n=Object(w.c)({mode:"all",criteriaMode:"all",shouldUnregister:!0}),e=n.control,t=n.handleSubmit,i=n.formState,o=Object(j.useCallback)((function(n){console.log(n)}),[]),r=Object(j.useMemo)((function(){return Array.from({length:400},(function(n,e){return{value:"test-value-".concat(e+1),label:"test label ".concat(e+1),isDisabled:Math.random()>.5}}))}),[]),a=Object(j.useMemo)((function(){return Array.from({length:3},(function(n,e){return{value:"test-value-".concat(e+1),label:"test label ".concat(e+1),isDisabled:Math.random()>.5}}))}),[]);return Object(M.jsxs)(Q,{children:[Object(M.jsxs)("form",{onSubmit:t(o),children:[Object(M.jsx)("textarea",{cols:30,rows:10}),Object(M.jsxs)("div",{children:[Object(M.jsx)(w.a,{name:"singleSelect",control:e,rules:{required:{value:!0,message:"Required field"}},render:function(n){var e=n.field,t=e.name,o=e.value,a=e.onChange,s=e.onBlur;return Object(M.jsx)(N,{name:t,options:r,value:o,onChange:a,onBlur:s,placeholder:"Please, select",fillingIsCorrected:V("singleSelect",i.touchedFields,i.errors),isReadOnly:!1,isSearchable:!0})}}),Object(M.jsx)(k.a,{name:"singleSelect",errors:i.errors,render:function(n){var e=n.message;return Object(M.jsx)("div",{children:e})}})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)(w.a,{name:"multiSelect",control:e,rules:{required:{value:!0,message:"Required field"}},render:function(n){var e=n.field,t=e.name,o=e.value,r=e.onChange,s=e.onBlur;return Object(M.jsx)(N,{name:t,mode:"multi",options:a,value:o,onChange:r,onBlur:s,placeholder:"Please, select few items",fillingIsCorrected:V("multiSelect",i.touchedFields,i.errors),isReadOnly:!1,isSearchable:!0})}}),Object(M.jsx)(k.a,{name:"multiSelect",errors:i.errors,render:function(n){var e=n.message;return Object(M.jsx)("div",{children:e})}})]}),Object(M.jsx)("button",{type:"submit",children:"Submit"})]}),Object(M.jsx)(G,{})]})};Object(y.render)(Object(M.jsx)(j.StrictMode,{children:Object(M.jsx)(Y,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b42da5d3.chunk.js.map