"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9711],{8860:(e,n,l)=>{l.d(n,{xA:()=>o,yg:()=>m});var a=l(7953);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function u(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var p=a.createContext({}),g=function(e){var n=a.useContext(p),l=n;return e&&(l="function"==typeof e?e(n):u(u({},n),e)),l},o=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=g(l),N=t,m=s["".concat(p,".").concat(N)]||s[N]||y[N]||r;return l?a.createElement(m,u(u({ref:n},o),{},{components:l})):a.createElement(m,u({ref:n},o))}));function m(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,u=new Array(r);u[0]=N;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:t,u[1]=i;for(var g=2;g<r;g++)u[g]=l[g];return a.createElement.apply(null,u)}return a.createElement.apply(null,l)}N.displayName="MDXCreateElement"},136:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=l(5890),t=(l(7953),l(8860));const r={title:"Nullable",slug:"nullable",hidden:!1,createdAt:"2021-07-29T12:24:54.251Z",updatedAt:"2021-09-23T06:35:02.401Z",tags:["Docs"]},u=void 0,i={unversionedId:"sql-syntax/functions/nullable",id:"version-0.2.0/sql-syntax/functions/nullable",title:"Nullable",description:"Notice:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/nullable.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/nullable",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/nullable",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/nullable.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Nullable",slug:"nullable",hidden:!1,createdAt:"2021-07-29T12:24:54.251Z",updatedAt:"2021-09-23T06:35:02.401Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/map"},next:{title:"Others",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/others"}},p={},g=[{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"coalesce",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"isNull",id:"isnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"toNullable",id:"tonullable",level:2}],o={toc:g},s="wrapper";function y(e){let{components:n,...l}=e;return(0,t.yg)(s,(0,a.A)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,t.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,t.yg)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,t.yg)("p",null,"Results in an equivalent non- ",(0,t.yg)("inlineCode",{parentName:"p"},"Nullable")," value for a Nullable type. In case the original value is ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," the result is undetermined. See also ",(0,t.yg)("inlineCode",{parentName:"p"},"ifNull")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"coalesce")," functions."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"assumeNotNull(x)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2014 The original value.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The original value from the non- ",(0,t.yg)("inlineCode",{parentName:"li"},"Nullable")," type, if it is not ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," ."),(0,t.yg)("li",{parentName:"ul"},"Implementation specific result if the original value was ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionAssumeNotNull ( x Int8,  y Nullable(Int8)) ENGINE = CnchMergeTree ORDER BY x;\nINSERT INTO test.functionAssumeNotNull VALUES (1,NULL),(2,3);\nSELECT * FROM test.functionAssumeNotNull;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"Apply the ",(0,t.yg)("inlineCode",{parentName:"p"},"assumeNotNull")," function to the ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," column."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT assumeNotNull(y),toTypeName(assumeNotNull(y))  FROM test.functionAssumeNotNull;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500assumeNotNull(y)\u2500\u252c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 0                \u2502 Int8                         \u2502\n\u2502 3                \u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"coalesce"},"coalesce"),(0,t.yg)("p",null,"Checks from left to right whether ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," arguments were passed and returns the first non- ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," argument."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"coalesce(x,...)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Any number of parameters of a non-compound type. All parameters must be compatible by data type.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The first non- ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," , if all arguments are ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example"),"\nConsider a list of contacts that may specify multiple ways to contact a customer."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionCoalesce (name String, mail Nullable(String), phone Nullable(String), icq Nullable(UInt32)) ENGINE=CnchMergeTree ORDER BY name;\nINSERT INTO test.functionCoalesce VALUES ('client 1', NULL, '123-45-67', 123), ('client 2', NULL, NULL, NULL);\nSELECT * FROM test.functionCoalesce;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500icq\u2500\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502 123  \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"mail")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"phone")," fields are of type String, but the ",(0,t.yg)("inlineCode",{parentName:"p"},"icq")," field is ",(0,t.yg)("inlineCode",{parentName:"p"},"UInt32")," , so it needs to be converted to ",(0,t.yg)("inlineCode",{parentName:"p"},"String")," .\nGet the first available contact method for the customer from the contact list:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT name, coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM test.functionCoalesce;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"ifnull"},"ifNull"),(0,t.yg)("p",null,"Returns an alternative value if the main argument is ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ifNull(x,alt)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2014 The value to check for ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," ."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"alt")," \u2014 The value that the function returns if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The value ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," , if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is not ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," ."),(0,t.yg)("li",{parentName:"ul"},"The value ",(0,t.yg)("inlineCode",{parentName:"li"},"alt")," , if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull('a', 'b');\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull(NULL, 'b');\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"isnotnull"},"isNotNull"),(0,t.yg)("p",null,"Checks whether the argument is NULL."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"isNotNull(x)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"0")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," ."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is not ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example"),"\nInput table"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionIsNotNull (x UInt8, y Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionIsNotNull VALUES (1, NULL),(2,3);\nSELECT * FROM test.functionIsNotNull;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM test.functionIsNotNull WHERE isNotNull(y);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"isnull"},"isNull"),(0,t.yg)("p",null,"Checks whether the argument is NULL."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"isNull(x)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," ."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"0")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is not ",(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," .")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example"),"\nInput table"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionIsNull (x UInt8, y Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionIsNull VALUES (1, NULL),(2,3);\nSELECT * FROM test.functionIsNull;\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM test.functionIsNull WHERE isNull(y);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"nullif"},"nullIf"),(0,t.yg)("p",null,"Returns ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," if the arguments are equal."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"nullIf(x, y)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," , ",(0,t.yg)("inlineCode",{parentName:"li"},"y")," \u2014 Values for comparison. They must be compatible types, or ByConity will generate an exception.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned values")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NULL")," , if the arguments are equal."),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," value, if the arguments are not equal.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 1);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 2);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502 1            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"tonullable"},"toNullable"),(0,t.yg)("p",null,"Converts the argument type to ",(0,t.yg)("inlineCode",{parentName:"p"},"Nullable")," ."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"toNullable(x)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2014 The value of any non-compound type.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The input value with a ",(0,t.yg)("inlineCode",{parentName:"li"},"Nullable")," type.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(10);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(toNullable(10));\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);