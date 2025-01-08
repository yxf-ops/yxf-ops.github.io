"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3467],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(7953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),y=a,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(5890),a=(n(7953),n(8860));const o={title:"Window",slug:"window",hidden:!1,createdAt:"2021-08-01T07:50:23.044Z",updatedAt:"2021-08-01T07:52:51.347Z",tags:["Docs"]},i=void 0,l={unversionedId:"sql-syntax/functions/window",id:"version-0.2.0/sql-syntax/functions/window",title:"Window",description:"ByConity supports the standard syntax of window functions. A list of window related features are explained below.",source:"@site/versioned_docs/version-0.2.0/sql-syntax/functions/window.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/window",permalink:"/docs/0.2.0/sql-syntax/functions/window",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/functions/window.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Window",slug:"window",hidden:!1,createdAt:"2021-08-01T07:50:23.044Z",updatedAt:"2021-08-01T07:52:51.347Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"UUID",permalink:"/docs/0.2.0/sql-syntax/functions/uuid"},next:{title:"Hash",permalink:"/docs/0.2.0/sql-syntax/hash"}},s={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"ByConity supports the standard syntax of window functions. A list of window related features are explained below."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Feature"),(0,a.yg)("th",{parentName:"tr",align:null},"Status"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ROWS mode"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported. Please specify ROWs mode explicitly since RANGE mode is the default mode, so please always specify ",(0,a.yg)("inlineCode",{parentName:"td"},"ROWS")," keyword in the window specification.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"RANGE mode"),(0,a.yg)("td",{parentName:"tr",align:null},"not supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GROUPS mode"),(0,a.yg)("td",{parentName:"tr",align:null},"not supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Expressions involving window function like:"),(0,a.yg)("td",{parentName:"tr",align:null},"supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Use of aggregate functions in window"),(0,a.yg)("td",{parentName:"tr",align:null},"supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Navigations functions:"),(0,a.yg)("td",{parentName:"tr",align:null},"supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Window alias like:"),(0,a.yg)("td",{parentName:"tr",align:null},"supported")))))}c.isMDXComponent=!0}}]);