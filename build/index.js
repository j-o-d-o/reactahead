!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=r.a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),s=n.n(i),u=n(3),c=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.asynRequests=void 0,n.formatedSuggestions={},n.state={filteredSuggestions:{},currentValueRaw:""},n.onChange=n.onChange.bind(n),n.onSubmit=n.onSubmit.bind(n),n.clearInput=n.clearInput.bind(n),n.filterSuggestions=n.filterSuggestions.bind(n),n.selectSuggestion=n.selectSuggestion.bind(n),n.handleKeyPress=n.handleKeyPress.bind(n),n.boldString=n.boldString.bind(n),n}return a(t,e),c(t,[{key:"onChange",value:function(e){var t=this;this.props.onChange(e);var n=e.target.value;this.setState({currentValueRaw:n}),n.length>=1?(Object.keys(this.props.suggestions).forEach(function(e,r){t.formatedSuggestions[e]=t.props.suggestions[e],t.filterSuggestions(n,e)}),clearTimeout(this.asynRequests),this.asynRequests=setTimeout(function(){Object.keys(t.props.asyncLoadingFuncs).forEach(function(e,r){t.props.asyncLoadingFuncs[e](n).then(function(r){t.formatedSuggestions[e]=r,t.filterSuggestions(n,e)})})},this.props.threshold)):(this.formatedSuggestions={},this.filterSuggestions(""))}},{key:"filterSuggestions",value:function(e,t){for(var n=e.toLowerCase().match(/\S+/g)||[],r=[],o=void 0!==this.formatedSuggestions[t]?this.formatedSuggestions[t].length:0,a=0;a<o;a++){for(var i=this.formatedSuggestions[t][a].value,s=[],u=0;u<n.length;u++)if(n[u].length>1){var c=i.toLowerCase().indexOf(n[u]);-1!==c&&s.push({position:c,searchString:n[u]})}s.length>0&&(s.sort(function(e,t){return e.position>t.position}),r.push({value:i,index:a,original:this.formatedSuggestions[t][a].original,stringsFound:s}))}r.sort(function(e,t){for(var n=0,r=0,o=0;o<e.stringsFound.length;o++)n+=10*e.stringsFound[o].searchString.length,n+=e.stringsFound[o].searchString.length/e.value.length;for(var a=0;a<t.stringsFound.length;a++)r+=10*t.stringsFound[a].searchString.length,r+=t.stringsFound[a].searchString.length/t.value.length;return r>n});var l=this.state.filteredSuggestions;l[t]=r,0===Object.keys(l).length&&e.length>=2&&(l.NO_RESULT=[{value:"No results",index:-1,stringsFound:[]}]),this.setState({filteredSuggestions:l})}},{key:"onSubmit",value:function(e){void 0!==e&&null!==e&&e.preventDefault();var t=!1;if(this.props.sendFirstSuggestionFlag){for(var n=void 0,r=void 0,o=Object.keys(this.state.filteredSuggestions),a=0;a<o.length;a++)for(var i=this.state.filteredSuggestions[o[a]],s=0;s<i.length;s++){n=i[s],r=o[a];break}if(void 0!==n){var u=n.original;void 0!==u&&(this.props.onSubmit(u,{isSuggestion:!0,valueRaw:this.state.currentValueRaw,groupName:r}),t=!0)}}t||this.props.onSubmit(null,{isSuggestion:!1,valueRaw:this.state.currentValueRaw,suggestions:this.state.filteredSuggestions})}},{key:"selectSuggestion",value:function(e,t){var n=void 0!==e.original?e.original:null;this.props.onSubmit(n,{isSuggestion:!0,valueRaw:this.state.currentValueRaw,groupName:t})}},{key:"handleKeyPress",value:function(e,t,n){"Enter"===e.key&&this.selectSuggestion(t,n)}},{key:"clearInput",value:function(){this.setState({currentValueRaw:"",filteredSuggestions:{}}),this.props.onCancel()}},{key:"boldString",value:function(e,t){if(void 0===t||0===t.length)return{__html:e};for(var n="",r=e,o=0,a=0;a<t.length;a++){var i=t[a].position-o,s=t[a].searchString.length,u=r.slice(0,i),c=r.slice(i,i+s),l=r.slice(i+s);r=l,o+=i+s,n+=u+"<b>"+c+"</b>"}return n+=l,{__html:n}}},{key:"render",value:function(){var e=this,t="reactahead "+this.props.className,n=s.a.createElement("div",null);return this.state.currentValueRaw.length>0&&(n=Object.keys(this.state.filteredSuggestions).map(function(t,n){var r=e.state.filteredSuggestions[t],o=r.map(function(n,r){return s.a.createElement("div",{key:"reactahead_suggestion_"+r,className:"reactahead-suggestion_field",onClick:function(){return e.selectSuggestion(n,t)},tabIndex:"0",onKeyPress:function(r){return e.handleKeyPress(r,n,t)}},s.a.createElement("span",{dangerouslySetInnerHTML:e.boldString(n.value,n.stringsFound)}))});return e.props.showGroups&&r.length>0&&"NO_RESULT"!==t?s.a.createElement("div",{key:"reactahead_group_"+n,className:"group_wrapper"},s.a.createElement("div",{className:"reactahead-group_heading"},t),o):o})),s.a.createElement("div",{id:this.props.id,className:t},s.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},s.a.createElement("div",{className:"reactahead-input-wrapper"},s.a.createElement("input",{className:"reactahead-input",value:this.state.currentValueRaw,placeholder:this.props.placeholder,onChange:function(t){return e.onChange(t)}}),s.a.createElement("i",{className:"reactahead-search material-icons",onClick:this.onSubmit},"search"),s.a.createElement("i",{className:"reactahead-clear_input material-icons",onClick:this.clearInput},"close")),s.a.createElement("div",{className:"reactahead-suggestions-wrapper"},n)))}}]),t}(s.a.Component);l.defaultProps={onChange:function(){},onSubmit:function(){},onCancel:function(){},threshold:200,className:"",id:"",placeholder:"Search",showGroups:!0,sendFirstSuggestionFlag:!0,maxSuggestions:20,suggestions:{},asyncLoadingFuncs:{}},t.a=l},function(t,n){t.exports=e},function(e,t,n){var r=n(4);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,".reactahead {\n  background: White;\n  width: 100%;\n  max-width: 700px;\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n  .reactahead .reactahead-input-wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    padding-left: 15px;\n    padding-right: 9px;\n    margin-top: 6px;\n    padding-bottom: 5px;\n    padding-top: 8px; }\n    .reactahead .reactahead-input-wrapper .reactahead-input {\n      width: 100%;\n      padding: 9px;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      border: 0px solid black;\n      outline: 0;\n      font-size: 16px; }\n    .reactahead .reactahead-input-wrapper .reactahead-search {\n      border-right: 1px solid #cccccc;\n      padding-top: 6px;\n      width: 37px;\n      margin-bottom: 4px;\n      color: #a0a0a0;\n      cursor: pointer; }\n    .reactahead .reactahead-input-wrapper .reactahead-clear_input {\n      padding-top: 5px;\n      width: 37px;\n      margin-bottom: 4px;\n      color: #a0a0a0;\n      padding-left: 5px;\n      cursor: pointer; }\n  .reactahead .reactahead-suggestions-wrapper {\n    max-height: 300px;\n    overflow-y: auto; }\n    .reactahead .reactahead-suggestions-wrapper .reactahead-suggestion_field {\n      width: 100%;\n      padding: 10px;\n      outline: 0px;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      padding-left: 22px;\n      font-size: 14px;\n      cursor: default; }\n      .reactahead .reactahead-suggestions-wrapper .reactahead-suggestion_field:focus, .reactahead .reactahead-suggestions-wrapper .reactahead-suggestion_field:hover {\n        background: #eee; }\n  .reactahead .reactahead-group_heading {\n    padding: 7px;\n    color: #969393;\n    padding-left: 14px;\n    border-top: 1px solid whitesmoke; }\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"===typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"===typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"===typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=g[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));g[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],u=a[2],c=a[3],l={css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function a(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=m++;n=v||(v=s(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(n=u(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=y(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var g={},h=function(e){var t;return function(){return"undefined"===typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return"undefined"===typeof t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,m=0,x=[],y=n(7);e.exports=function(e,t){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"===typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],u=g[s.id];u.refs--,a.push(u)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete g[u.id]}}}};var S=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!==typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!==typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}])});