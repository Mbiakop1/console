(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9080],{39080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(18489),o=n(35531),i=n(50390),a=n(38342),c=n.n(a),l=n(86509),s=n(4285),u=n(66946),p=n(76352),d=n(25594),f=n(58217),y=n(65771),m=n(70758),b=n(33034),h=n.n(b),g=n(52813),v=n(72462),x=n(62559),w=(0,s.Z)((function(e){return(0,l.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,r.Z)((0,r.Z)({},v.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,i=e.classes,a=void 0===i?{}:i;return(0,x.jsxs)("div",{className:a.container,children:[(0,x.jsxs)("div",{className:a.inputLabel,children:[n,":"]}),(0,x.jsx)("div",{className:a.inputWithCopy,children:(0,x.jsx)(f.Z,{value:o,readOnly:!0,endAdornment:(0,x.jsx)(y.Z,{position:"end",children:(0,x.jsx)(h(),{text:o,children:(0,x.jsx)(m.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,x.jsx)(g.TI,{})})})})})})]})})),C=n(47424),j=(0,s.Z)((function(e){return(0,l.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,l=e.closeModal,s=e.entity;if(!n)return null;var f=c()(n,"console",null),y=c()(n,"idp",!1);return(0,x.jsx)(p.Z,{modalOpen:a,onClose:function(){l()},title:(0,x.jsx)("div",{className:t.promptTitle,children:(0,x.jsxs)("div",{children:["New ",s," Created"]})}),titleIcon:(0,x.jsx)(g.tV,{}),children:(0,x.jsxs)(d.ZP,{container:!0,children:[(0,x.jsxs)(d.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",s," has been created with the following details:",!y&&f&&(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)(d.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,x.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(f)&&f.map((function(e,t){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w,{label:"Access Key",value:e.accessKey}),(0,x.jsx)(w,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(f)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w,{label:"Access Key",value:f.accessKey}),(0,x.jsx)(w,{label:"Secret Key",value:f.secretKey})]})]})}),y?(0,x.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,x.jsxs)("div",{className:t.warningBlock,children:[(0,x.jsx)(C.Z,{}),(0,x.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,x.jsxs)(d.ZP,{item:!0,xs:12,className:t.buttonContainer,children:[(0,x.jsx)(u.Z,{variant:"outlined",className:t.buttonSpacer,onClick:function(){l()},color:"primary",children:"Done"}),!y&&(0,x.jsx)(u.Z,{onClick:function(){var e={};if(f)if(Array.isArray(f)){var t=f.map((function(e){return{access_key:e.accessKey,secret_key:e.secretKey}}));e={console:(0,o.Z)(t)}}else e={console:[{access_key:f.accessKey,secret_key:f.secretKey}]};!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("credentials.json",JSON.stringify((0,r.Z)({},e)))},endIcon:(0,x.jsx)(g._8,{}),variant:"contained",color:"primary",children:"Download"})]})]})})}))},20409:function(e,t,n){"use strict";var r=n(61498),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},12900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=i(n(50390)),o=i(n(20409));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?f(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;s(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return m(f(n=p(this,(e=d(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=n.props,i=t.text,a=t.onCopy,c=t.children,l=t.options,s=r.default.Children.only(c),u=(0,o.default)(i,l);a&&a(i,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],i&&u(n.prototype,i),a&&u(n,a),t}(r.default.PureComponent);t.CopyToClipboard=b,m(b,"defaultProps",{onCopy:void 0,options:void 0})},33034:function(e,t,n){"use strict";var r=n(12900).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},61498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9080.51badfd4.chunk.js.map