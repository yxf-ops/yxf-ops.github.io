"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7859],{8860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(7953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(5890),o=(n(7953),n(8860));const a={title:"\u6570\u636e\u538b\u7f29",sidebar_position:4,tags:["Docs"]},i="\u6570\u636e\u538b\u7f29",l={unversionedId:"table-design/data-compression",id:"table-design/data-compression",title:"\u6570\u636e\u538b\u7f29",description:"ByConity\u652f\u6301\u5bf9\u5217\u8868\u7684Codec\uff0c\u5373\u538b\u7f29\u548c\u89e3\u538b\u7f29\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u548c\u63d0\u9ad8I/O\u6027\u80fd\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/data-compression.mdx",sourceDirName:"table-design",slug:"/table-design/data-compression",permalink:"/zh-cn/docs/table-design/data-compression",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/data-compression.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u538b\u7f29",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u7d22\u5f15",permalink:"/zh-cn/docs/table-design/indexes"},next:{title:"\u552f\u4e00\u952e",permalink:"/zh-cn/docs/table-design/unique-key"}},c={},s=[{value:"\u901a\u7528\u7f16\u7801",id:"\u901a\u7528\u7f16\u7801",level:2},{value:"\u7279\u6b8a\u7f16\u7801",id:"\u7279\u6b8a\u7f16\u7801",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u6570\u636e\u538b\u7f29"},"\u6570\u636e\u538b\u7f29"),(0,o.yg)("p",null,"ByConity\u652f\u6301\u5bf9\u5217\u8868\u7684Codec\uff0c\u5373\u538b\u7f29\u548c\u89e3\u538b\u7f29\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u548c\u63d0\u9ad8I/O\u6027\u80fd\u3002"),(0,o.yg)("h2",{id:"\u901a\u7528\u7f16\u7801"},"\u901a\u7528\u7f16\u7801"),(0,o.yg)("p",null,"ByConity\u652f\u6301\u4e86\u56db\u79cd\u901a\u7528\u7f16\u7801\uff1alz4 / lz4hc / zstd / deflate_qpl\u3002\u5176\u4e2dlz4\u5f52\u5c5e\u4e8e\u5feb\u901f\u538b\u7f29\u7b97\u6cd5\uff0c\u800c\u538b\u7f29\u6548\u7387\u5e76\u975e\u5176\u8ffd\u6c42\u7684\u4e3b\u8981\u76ee\u6807\uff0c\u56e0\u6b64\u5176\u538b\u7f29\u6bd4\u7387\u8f83zstd\u4f4e\u3002Intel\u7684IAA\uff08Intel Advanced Analytics\uff09\u5e73\u53f0\u652f\u6301qpl\u7f16\u7801\uff0c\u56e0\u6b64\u5728\u8be5\u5e73\u53f0\u4e0a\u53ef\u4ee5\u8003\u8651\u4f7f\u7528qpl\u3002\u6587\u6863\u7684\u94fe\u63a5\u7ed9\u51fa\u4e86\u7f16\u7801\u7684\u8be6\u7ec6\u53c2\u8003\u3002"),(0,o.yg)("h2",{id:"\u7279\u6b8a\u7f16\u7801"},"\u7279\u6b8a\u7f16\u7801"),(0,o.yg)("p",null,"ByConity\u4e5f\u652f\u6301\u4e86\u51e0\u79cd\u7279\u6b8a\u7f16\u7801\uff0c\u53ef\u4ee5\u548c\u901a\u7528\u7f16\u7801\u4e00\u8d77\u4f7f\u7528\uff0c\u5305\u62ec\uff1aDelta / DoubleDelta / Gorilla / FPC / T64\u3002\u5176\u4e2d\uff0c\u5bf9\u4e8e\u65f6\u5e8f\u6570\u636e\u53ef\u4ee5\u8003\u8651\u4f7f\u7528DoubleDelta\u7f16\u7801\uff0c\u5bf9\u4e8e\u968f\u65f6\u95f4\u53d8\u5316\u7684\u503c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528Gorilla\u7f16\u7801\u3002\u5bf9\u4e8e64\u4f4d\u6d6e\u70b9\u6570\uff0cFPC\u7f16\u7801\u6548\u679c\u826f\u597d\u3002T64\u7f16\u7801\u5219\u662f\u5bfb\u627e64\u4e2a\u503c\u7684\u5171\u540c\u9ad8\u4f4d\u8fdb\u884c\u88c1\u526a\uff0c\u53ea\u8bb0\u5f55\u53d8\u5316\u7684\u90e8\u5206\u3002"),(0,o.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"DateTime \u7c7b\u578b: \u672a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 Delta+LZ4"),(0,o.yg)("li",{parentName:"ul"},"DateTime \u7c7b\u578b\uff1a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 LZ4"),(0,o.yg)("li",{parentName:"ul"},"Date \u7c7b\u578b\uff1a\u672a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 ZSTD"),(0,o.yg)("li",{parentName:"ul"},"Date \u7c7b\u578b\uff1a\u6392\u5e8f\uff08\u4f8b\uff1aPK\uff09\uff0c\u5efa\u8bae\u7528 LZ4")))}d.isMDXComponent=!0}}]);