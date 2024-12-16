"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4211],{8860:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>d});var l=a(7953);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var g=l.createContext({}),y=function(e){var n=l.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=y(e.components);return l.createElement(g.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},o=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,p=e.originalType,g=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=y(a),o=t,d=u["".concat(g,".").concat(o)]||u[o]||s[o]||p;return a?l.createElement(d,i(i({ref:n},m),{},{components:a})):l.createElement(d,i({ref:n},m))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=a.length,i=new Array(p);i[0]=o;var r={};for(var g in n)hasOwnProperty.call(n,g)&&(r[g]=n[g]);r.originalType=e,r[u]="string"==typeof e?e:t,i[1]=r;for(var y=2;y<p;y++)i[y]=a[y];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},7233:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>r,toc:()=>y});var l=a(5890),t=(a(7953),a(8860));const p={title:"Bit & Bitmap",slug:"bit-bitmap",hidden:!1,createdAt:"2021-07-29T11:55:49.053Z",updatedAt:"2021-09-23T03:43:39.051Z",tags:["Docs"]},i=void 0,r={unversionedId:"sql-syntax/functions/bit-bitmap",id:"version-0.2.0/sql-syntax/functions/bit-bitmap",title:"Bit & Bitmap",description:"Notice:",source:"@site/versioned_docs/version-0.2.0/sql-syntax/functions/bit-bitmap.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/bit-bitmap",permalink:"/docs/0.2.0/sql-syntax/functions/bit-bitmap",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/functions/bit-bitmap.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Bit & Bitmap",slug:"bit-bitmap",hidden:!1,createdAt:"2021-07-29T11:55:49.053Z",updatedAt:"2021-09-23T03:43:39.051Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/docs/0.2.0/sql-syntax/functions/array"},next:{title:"Comparison",permalink:"/docs/0.2.0/sql-syntax/functions/comparison"}},g={},y=[{value:"bitTest",id:"bittest",level:2},{value:"bitTestAll",id:"bittestall",level:2},{value:"bitTestAny",id:"bittestany",level:2},{value:"bitmapAnd",id:"bitmapand",level:2},{value:"bitmapAndCardinality",id:"bitmapandcardinality",level:2},{value:"bitmapAndnot",id:"bitmapandnot",level:2},{value:"bitmapAndnotCardinality",id:"bitmapandnotcardinality",level:2},{value:"bitmapBuild",id:"bitmapbuild",level:2},{value:"bitmapCardinality",id:"bitmapcardinality",level:2},{value:"bitmapContains",id:"bitmapcontains",level:2},{value:"bitmapHasAll",id:"bitmaphasall",level:2},{value:"bitmapHasAny",id:"bitmaphasany",level:2},{value:"bitmapMax",id:"bitmapmax",level:2},{value:"bitmapMin",id:"bitmapmin",level:2},{value:"bitmapOr",id:"bitmapor",level:2},{value:"bitmapOrCardinality",id:"bitmaporcardinality",level:2},{value:"bitmapSubsetInRange",id:"bitmapsubsetinrange",level:2},{value:"bitmapSubsetLimit",id:"bitmapsubsetlimit",level:2},{value:"bitmapToArray",id:"bitmaptoarray",level:2},{value:"bitmapXor",id:"bitmapxor",level:2},{value:"bitmapXorCardinality",id:"bitmapxorcardinality",level:2}],m={toc:y},u="wrapper";function s(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,l.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,t.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,t.yg)("h2",{id:"bittest"},"bitTest"),(0,t.yg)("p",null,"Takes any integer and converts it into ","[binary form]","."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(number, index)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"number")," \u2013 Integer number.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"index")," \u2013 Position of bit."))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("p",null,"Returns a value of bit at specified position."),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt8")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 1);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTest(43, 1)\u2500\u2510\n\u2502 1              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"Another example:"),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTest(43, 2)\u2500\u2510\n\u2502 0              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bittestall"},"bitTestAll"),(0,t.yg)("p",null,"Returns result of ","[logical conjuction]"," (AND operator) of all bits at given positions. The countdown starts from 0 from the right to the left."),(0,t.yg)("p",null,"The conjuction for bitwise operations:"),(0,t.yg)("p",null,"0 AND 0 = 0"),(0,t.yg)("p",null,"0 AND 1 = 0"),(0,t.yg)("p",null,"1 AND 0 = 0"),(0,t.yg)("p",null,"1 AND 1 = 1"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(number, index1, index2, index3, index4, ...)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"number")," \u2013 Integer number.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"index1")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index2")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index3")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index4")," \u2013 Positions of bit. For example, for set of positions ( ",(0,t.yg)("inlineCode",{parentName:"p"},"index1")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index2")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index3")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index4")," ) is true if and only if all of its positions are true ( ",(0,t.yg)("inlineCode",{parentName:"p"},"index1")," \u22c0 ",(0,t.yg)("inlineCode",{parentName:"p"},"index2")," , \u22c0 ",(0,t.yg)("inlineCode",{parentName:"p"},"index3")," \u22c0 ",(0,t.yg)("inlineCode",{parentName:"p"},"index4")," )."))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("p",null,"Returns result of logical conjuction."),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt8")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5)\u2500\u2510\n\u2502 1                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"Another example:"),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5, 2)\u2500\u2510\n\u2502 0                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bittestany"},"bitTestAny"),(0,t.yg)("p",null,"Returns result of ","[logical disjunction]","(OR operator) of all bits at given positions. The countdown starts from 0 from the right to the left."),(0,t.yg)("p",null,"The disjunction for bitwise operations:"),(0,t.yg)("p",null,"0 OR 0 = 0"),(0,t.yg)("p",null,"0 OR 1 = 1"),(0,t.yg)("p",null,"1 OR 0 = 1"),(0,t.yg)("p",null,"1 OR 1 = 1"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT bitTestAny(number, index1, index2, index3, index4, ...)\n\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"number")," \u2013 Integer number.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"index1")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index2")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index3")," , ",(0,t.yg)("inlineCode",{parentName:"p"},"index4")," \u2013 Positions of bit."))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("p",null,"Returns result of logical disjuction."),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt8")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("p",null,"For example, the number 43 in base-2 (binary) numeral system is 101011."),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 0, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTestAny(43, 0, 2)\u2500\u2510\n\u2502 1                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"Another example:"),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 4, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitTestAny(43, 4, 2)\u2500\u2510\n\u2502 0                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapand"},"bitmapAnd"),(0,t.yg)("p",null,"Two bitmap and calculation, the result is a new bitmap."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapAnd(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The Bitmap object")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAnd(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 [3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapandcardinality"},"bitmapAndCardinality"),(0,t.yg)("p",null,"Two bitmap and calculation, return cardinality of type UInt64."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapAndCardinality(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The cardinality in type ",(0,t.yg)("inlineCode",{parentName:"li"},"UInt64"),".")),(0,t.yg)("p",null,"Type:",(0,t.yg)("inlineCode",{parentName:"p"},"Uint64")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapandnot"},"bitmapAndnot"),(0,t.yg)("p",null,"Two bitmap andnot calculation, the result is a new bitmap."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnot(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The Bitmap object")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAndnot(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2510\n\u2502 [1, 2] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapandnotcardinality"},"bitmapAndnotCardinality"),(0,t.yg)("p",null,"Two bitmap andnot calculation, return cardinality of type UInt64."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnotCardinality(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The cardinality in ",(0,t.yg)("inlineCode",{parentName:"li"},"UInt64"),".")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt64")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndnotCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 2   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapbuild"},"bitmapBuild"),(0,t.yg)("p",null,"Build a bitmap from unsigned integer array."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapBuild(array)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"array")," \u2013 Unsigned integer array.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The bitmap object")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(bitmapBuild([1, 2, 3, 4, 5]));\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(bitmapBuild([1, 2, 3, 4, 5]))\u2500\u2510\n\u2502 AggregateFunction(groupBitmap, UInt8)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapcardinality"},"bitmapCardinality"),(0,t.yg)("p",null,"Return bitmap cardinality of type UInt64."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapCardinality(bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The bitmap cardinality in type ",(0,t.yg)("inlineCode",{parentName:"li"},"UInt64"),".")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt64")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapCardinality(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 5   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapcontains"},"bitmapContains"),(0,t.yg)("p",null,"Checks whether the bitmap contains an element."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapContains(haystack, needle)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"haystack")," \u2013 ","[Bitmap object]",", where the function searches."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"needle")," \u2013 Value that the function searches. Type: ","[UInt32]"," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"0 \u2014 If ",(0,t.yg)("inlineCode",{parentName:"li"},"haystack")," does not contain ",(0,t.yg)("inlineCode",{parentName:"li"},"needle")," ."),(0,t.yg)("li",{parentName:"ul"},"1 \u2014 If ",(0,t.yg)("inlineCode",{parentName:"li"},"haystack")," contains ",(0,t.yg)("inlineCode",{parentName:"li"},"needle")," .")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt8")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapContains(bitmapBuild([1,5,7,9]), toUInt32(9)) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmaphasall"},"bitmapHasAll"),(0,t.yg)("p",null,"Analogous to ",(0,t.yg)("inlineCode",{parentName:"p"},"hasAll(array, array)")," returns 1 if the first bitmap contains all the elements of the second one, 0 otherwise."),(0,t.yg)("p",null,"If the second argument is an empty bitmap then returns 1."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAll(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1")," , returns 1 if the first bitmap contains all the elements of the second one or If the second argument is an empty bitmap ."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"0")," , otherwise.")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt8")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAll(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 0   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmaphasany"},"bitmapHasAny"),(0,t.yg)("p",null,"Checks whether two bitmaps have intersection by some elements."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAny(bitmap1, bitmap2)\n")),(0,t.yg)("p",null,"If you are sure that ",(0,t.yg)("inlineCode",{parentName:"p"},"bitmap2")," contains strictly one element, consider using the ","[bitmapContains]"," function. It works more efficiently."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap*")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Return values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1")," , if ",(0,t.yg)("inlineCode",{parentName:"li"},"bitmap1")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"bitmap2")," have one similar element at least."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"0")," , otherwise.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAny(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapmax"},"bitmapMax"),(0,t.yg)("p",null,"Return the greatest value of type UInt64 in the set, 0 if the set is empty."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapMax(bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Return values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Return the greatest value of type UInt64 in the set.")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt64")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMax(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 5   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapmin"},"bitmapMin"),(0,t.yg)("p",null,"Return the smallest value of type UInt64 in the set, UINT32_MAX if the set is empty."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapMin(bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Return values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Return the smallest value of type UInt64 in the set.")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt64")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMin(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapor"},"bitmapOr"),(0,t.yg)("p",null,"Two bitmap or calculation, the result is a new bitmap."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapOr(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The Bitmap object")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapOr(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1, 2, 3, 4, 5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmaporcardinality"},"bitmapOrCardinality"),(0,t.yg)("p",null,"Two bitmap or calculation, return cardinality of type UInt64."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapOrCardinality(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Return values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Return or calculation result in cardinality.")),(0,t.yg)("p",null,"Type:",(0,t.yg)("inlineCode",{parentName:"p"},"UInt64")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapOrCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 5   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapsubsetinrange"},"bitmapSubsetInRange"),(0,t.yg)("p",null,"Return subset in specified range (not include the range_end)."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapSubsetInRange(bitmap, range_start, range_end)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"bitmap")," \u2013 ","[Bitmap object]",".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"range_start")," \u2013 Range start point. Type: ","[UInt32]",".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"range_end")," \u2013 Range end point (excluded). Type: ","[UInt32]","."))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Return values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Return or calculation result.")),(0,t.yg)("p",null,"Type:",(0,t.yg)("inlineCode",{parentName:"p"},"array")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetInRange(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30, 31, 32, 33, 100] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapsubsetlimit"},"bitmapSubsetLimit"),(0,t.yg)("p",null,"Creates a subset of bitmap with n elements taken between ",(0,t.yg)("inlineCode",{parentName:"p"},"range_start")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"cardinality_limit")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapSubsetLimit(bitmap, range_start, cardinality_limit)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"bitmap")," \u2013 ","[Bitmap object]",".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"range_start")," \u2013 The subset starting point. Type: ","[UInt32]",".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"cardinality_limit")," \u2013 The subset cardinality upper limit. Type: ","[UInt32]","."))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The subset.")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("p",null,"Query:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetLimit(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30, 31, 32, 33, 100, 200, 500] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmaptoarray"},"bitmapToArray"),(0,t.yg)("p",null,"Convert bitmap to integer array."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapToArray(bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"An array.")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"array")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1, 2, 3, 4, 5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapxor"},"bitmapXor"),(0,t.yg)("p",null,"Two bitmap xor calculation, the result is a new bitmap."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapXor(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The Bitmap object")),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapXor(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1, 2, 4, 5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"bitmapxorcardinality"},"bitmapXorCardinality"),(0,t.yg)("p",null,"Two bitmap xor calculation, return cardinality of type UInt64."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"bitmapXorCardinality(bitmap,bitmap)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"bitmap")," \u2013 Bitmap object.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Returned value"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The Bitmap object"))),(0,t.yg)("p",null,"Type: ",(0,t.yg)("inlineCode",{parentName:"p"},"Bitmap object"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapXorCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 4   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}s.isMDXComponent=!0}}]);