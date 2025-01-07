"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9498],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,u=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(75890),o=(n(37953),n(58860));const i={title:"Data Compression",sidebar_position:4,tags:["Docs"]},a="Data Compression",s={unversionedId:"table-design/data-compression",id:"version-0.3.0/table-design/data-compression",title:"Data Compression",description:"ByConity supports codecs for lists, which are methods for compressing and decompressing data aimed at saving storage space and improving I/O performance.",source:"@site/versioned_docs/version-0.3.0/table-design/data-compression.mdx",sourceDirName:"table-design",slug:"/table-design/data-compression",permalink:"/docs/0.3.0/table-design/data-compression",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.3.0/table-design/data-compression.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:4,frontMatter:{title:"Data Compression",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Indexes",permalink:"/docs/0.3.0/table-design/indexes"},next:{title:"Unique Key",permalink:"/docs/0.3.0/table-design/unique-key"}},c={},l=[{value:"General Encodings",id:"general-encodings",level:2},{value:"Special Encodings",id:"special-encodings",level:2},{value:"Best Practices",id:"best-practices",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"data-compression"},"Data Compression"),(0,o.yg)("p",null,"ByConity supports codecs for lists, which are methods for compressing and decompressing data aimed at saving storage space and improving I/O performance."),(0,o.yg)("h2",{id:"general-encodings"},"General Encodings"),(0,o.yg)("p",null,"ByConity supports four general encodings: lz4, lz4hc, zstd, and deflate_qpl. Among them, lz4 belongs to the fast compression algorithm, and its compression efficiency is not its main goal. Therefore, its compression ratio is lower than that of zstd. Intel's IAA (Intel Advanced Analytics) platform supports qpl encoding, so you can consider using qpl on this platform. Links to the documentation provide detailed references for the encodings."),(0,o.yg)("h2",{id:"special-encodings"},"Special Encodings"),(0,o.yg)("p",null,"ByConity also supports several special encodings that can be used together with general encodings, including Delta, DoubleDelta, Gorilla, FPC, and T64. Among them, DoubleDelta encoding can be considered for time series data, and Gorilla encoding can be considered for values that change over time. FPC encoding works well for 64-bit floating-point numbers. T64 encoding finds the common high bits of 64 values and trims them, only recording the changing parts."),(0,o.yg)("h2",{id:"best-practices"},"Best Practices"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"For DateTime type (unsorted), it is recommended to use Delta+LZ4."),(0,o.yg)("li",{parentName:"ul"},"For DateTime type (sorted), LZ4 is recommended."),(0,o.yg)("li",{parentName:"ul"},"For Date type (unsorted), ZSTD is recommended."),(0,o.yg)("li",{parentName:"ul"},"For Date type (sorted, e.g., PK), LZ4 is recommended.")))}m.isMDXComponent=!0}}]);