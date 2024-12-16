"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3330],{8860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var a=t(7953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(t),y=r,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return t?a.createElement(d,o(o({ref:n},g),{},{components:t})):a.createElement(d,o({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(5890),r=(t(7953),t(8860));const i={title:"Encoding",slug:"encoding",hidden:!1,createdAt:"2021-07-29T12:03:22.612Z",updatedAt:"2021-09-23T03:57:43.648Z",tags:["Docs"]},o=void 0,l={unversionedId:"sql-syntax/functions/encoding",id:"sql-syntax/functions/encoding",title:"Encoding",description:"Notice:",source:"@site/docs/sql-syntax/functions/encoding.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/encoding",permalink:"/docs/sql-syntax/functions/encoding",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/sql-syntax/functions/encoding.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Encoding",slug:"encoding",hidden:!1,createdAt:"2021-07-29T12:03:22.612Z",updatedAt:"2021-09-23T03:57:43.648Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Date & Times",permalink:"/docs/sql-syntax/functions/date-times"},next:{title:"Encryption",permalink:"/docs/sql-syntax/functions/encryption"}},p={},s=[{value:"UUIDNumToString",id:"uuidnumtostring",level:2},{value:"UUIDStringToNum",id:"uuidstringtonum",level:2},{value:"bitmaskToArray",id:"bitmasktoarray",level:2},{value:"bitmaskToList",id:"bitmasktolist",level:2},{value:"hex",id:"hex",level:2}],g={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.yg)("h2",{id:"uuidnumtostring"},"UUIDNumToString"),(0,r.yg)("p",null,"Accepts a FixedString(16) value, and returns a string containing 36 characters in text format."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UUIDNumToString(FixedString(16))\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a FixedString(16) value")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"String.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    'a/<@];!~p{jTj={)' AS bytes,\n    UUIDNumToString(toFixedString(bytes, 16)) AS uuid\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 a/<@];!~p{jTj={) \u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"uuidstringtonum"},"UUIDStringToNum"),(0,r.yg)("p",null,"Accepts a string containing 36 characters in the format ",(0,r.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")," , and returns it as a set of bytes in a FixedString(16)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UUIDStringToNum(String)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a string in uuid format")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"FixedString(16)")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    '612f3c40-5d3b-217e-707b-6a546a3d7b29' AS uuid,\n    UUIDStringToNum(uuid) AS bytes\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502 a/<@];!~p{jTj={) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"bitmasktoarray"},"bitmaskToArray"),(0,r.yg)("p",null,"Accepts an integer. Returns an array of UInt64 numbers containing the list of powers of two that total the source number when summed. Numbers in the array are in ascending order."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"bitmaskToArray(num)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"num")," \u2013 an integer")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"an array of UInt64 numbers containing the list of powers of two that total the source number when summed.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmaskToArray(1), bitmaskToArray(3), bitmaskToArray(4)\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitmaskToArray(1)\u2500\u252c\u2500bitmaskToArray(3)\u2500\u252c\u2500bitmaskToArray(4)\u2500\u2510\n\u2502 [1]               \u2502 [1, 2]            \u2502 [4]               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",null,"1 = power(2,0)\n3 = power(2,0) + power(2,1)\n4 = power(2,2)"),(0,r.yg)("h2",{id:"bitmasktolist"},"bitmaskToList"),(0,r.yg)("p",null,"Accepts an integer. Returns a string containing the list of powers of two that total the source number when summed. They are comma-separated without spaces in text format, in ascending order."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"bitmaskToList(num)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"num")," \u2013 an integer")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a string containing the list of powers of two that total the source number when summed")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmaskToList(1), bitmaskToList(3), bitmaskToList(4)\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500bitmaskToList(1)\u2500\u252c\u2500bitmaskToList(3)\u2500\u252c\u2500bitmaskToList(4)\u2500\u2510\n\u2502 1                \u2502 1,2              \u2502 4                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",null,"1 = power(2,0)\n3 = power(2,0) + power(2,1)\n4 = power(2,2)"),(0,r.yg)("h2",{id:"hex"},"hex"),(0,r.yg)("p",null,"Returns a string containing the argument\u2019s hexadecimal representation."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"hex(arg)\n")),(0,r.yg)("p",null,"The function is using uppercase letters ",(0,r.yg)("inlineCode",{parentName:"p"},"A-F")," and not using any prefixes (like ",(0,r.yg)("inlineCode",{parentName:"p"},"0x")," ) or suffixes (like ",(0,r.yg)("inlineCode",{parentName:"p"},"h")," )."),(0,r.yg)("p",null,"For integer arguments, it prints hex digits (\u201cnibbles\u201d) from the most significant to least significant (big endian or \u201chuman readable\u201d order). It starts with the most significant non-zero byte (leading zero bytes are omitted) but always prints both digits of every byte even if leading digit is zero."),(0,r.yg)("p",null,"Values of type ",(0,r.yg)("inlineCode",{parentName:"p"},"Date")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DateTime")," are formatted as corresponding integers (the number of days since Epoch for Date and the value of Unix Timestamp for DateTime)."),(0,r.yg)("p",null,"For ",(0,r.yg)("inlineCode",{parentName:"p"},"String")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FixedString")," , all bytes are simply encoded as two hexadecimal numbers. Zero bytes are not omitted."),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Values of floating point and Decimal types are encoded as their representation in memory. As we support little endian architecture, they are encoded in little endian. Zero leading/trailing bytes are not omitted."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"arg")," \u2014 A value to convert to hexadecimal. Types: String, UInts, Date or DateTime.\nTODO: FLOAT & Decimal is not support by cnch")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"A string with the hexadecimal representation of the argument. Type: ",(0,r.yg)("inlineCode",{parentName:"li"},"String")," .")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT hex('a'), hex(1), hex(toDate('2019-01-01')), hex(toDateTime('2019-01-01 00:00:00'))\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500hex('a')\u2500\u252c\u2500hex(1)\u2500\u252c\u2500hex(toDate('2019-01-01'))\u2500\u252c\u2500hex(toDateTime('2019-01-01 00:00:00'))\u2500\u2510\n\u2502 61       \u2502 01     \u2502 45E9                      \u2502 5C2A3D00                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",{parentName:"admonition"},"TODO: NOT SUPPORT BY CNCH"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(toFloat32(number)) as hex_presentation FROM numbers(15, 2);\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500hex_presentation\u2500\u2510\n\u2502 00007041         \u2502\n\u2502 00008041         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(toFloat64(number)) as hex_presentation FROM numbers(15, 2);\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500hex_presentation\u2500\u2510\n\u2502 0000000000002E40 \u2502\n\u2502 0000000000003040 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{parentName:"admonition",id:"unhex"},"unhex"),(0,r.yg)("p",{parentName:"admonition"},"Performs the opposite operation of ",(0,r.yg)("inlineCode",{parentName:"p"},"hex"),". It interprets each pair of hexadecimal digits (in the argument) as a number and converts it to the byte represented by the number. The return value is a binary string (BLOB)."),(0,r.yg)("p",{parentName:"admonition"},"If you want to convert the result to a number, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"reverse")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"reinterpretAs<Type>")," functions."),(0,r.yg)("p",{parentName:"admonition"},'!!! note "Note"'),(0,r.yg)("p",{parentName:"admonition"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"unhex")," is invoked from within the ",(0,r.yg)("inlineCode",{parentName:"p"},"gateway-client")," , binary strings display using UTF-8."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"unhex(arg)\n")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"arg")," \u2014 A string containing any number of hexadecimal digits. Type: String.\nSupports both uppercase and lowercase letters ",(0,r.yg)("inlineCode",{parentName:"li"},"A-F")," . The number of hexadecimal digits does not have to be even. If it is odd, the last digit is interpreted as the least significant half of the ",(0,r.yg)("inlineCode",{parentName:"li"},"00-0F")," byte. If the argument string contains anything other than hexadecimal digits, some implementation-defined result is returned (an exception isn\u2019t thrown). For a numeric argument the inverse of hex(N) is not performed by unhex().")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"A binary string (BLOB). Type: String.")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT unhex('303132'), unhex('4D7953514C');\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500unhex('303132')\u2500\u252c\u2500unhex('4D7953514C')\u2500\u2510\n\u2502 012             \u2502 MySQL               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT reinterpretAsUInt64(reverse(unhex('FFF'))) AS num;\n")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500num\u2500\u2500\u2510\n\u2502 4095 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);