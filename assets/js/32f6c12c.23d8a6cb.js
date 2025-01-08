"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2745],{8860:(e,n,l)=>{l.d(n,{xA:()=>s,yg:()=>d});var a=l(7953);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function g(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function u(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var i=a.createContext({}),p=function(e){var n=a.useContext(i),l=n;return e&&(l="function"==typeof e?e(n):g(g({},n),e)),l},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},o=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),y=p(l),o=t,d=y["".concat(i,".").concat(o)]||y[o]||m[o]||r;return l?a.createElement(d,g(g({ref:n},s),{},{components:l})):a.createElement(d,g({ref:n},s))}));function d(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,g=new Array(r);g[0]=o;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[y]="string"==typeof e?e:t,g[1]=u;for(var p=2;p<r;p++)g[p]=l[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,l)}o.displayName="MDXCreateElement"},6776:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>g,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=l(5890),t=(l(7953),l(8860));const r={title:"Arithmetic",slug:"arithmetic",hidden:!1,createdAt:"2021-07-29T11:53:16.539Z",updatedAt:"2021-09-23T03:36:30.482Z",tags:["Docs"]},g=void 0,u={unversionedId:"sql-syntax/functions/arithmetic",id:"sql-syntax/functions/arithmetic",title:"Arithmetic",description:"Notice:",source:"@site/docs/sql-syntax/functions/arithmetic.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/arithmetic",permalink:"/docs/sql-syntax/functions/arithmetic",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/sql-syntax/functions/arithmetic.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Arithmetic",slug:"arithmetic",hidden:!1,createdAt:"2021-07-29T11:53:16.539Z",updatedAt:"2021-09-23T03:36:30.482Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Aggregation",permalink:"/docs/sql-syntax/functions/aggregate"},next:{title:"Array",permalink:"/docs/sql-syntax/functions/array"}},i={},p=[{value:"abs",id:"abs",level:2},{value:"divide",id:"divide",level:2},{value:"gcd",id:"gcd",level:2},{value:"intDiv",id:"intdiv",level:2},{value:"intDivOrZero",id:"intdivorzero",level:2},{value:"lcm",id:"lcm",level:2},{value:"min",id:"min",level:2},{value:"minus",id:"minus",level:2},{value:"modulo",id:"modulo",level:2},{value:"multiply",id:"multiply",level:2},{value:"negate",id:"negate",level:2},{value:"plus",id:"plus",level:2}],s={toc:p},y="wrapper";function m(e){let{components:n,...l}=e;return(0,t.yg)(y,(0,a.A)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,t.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,t.yg)("h2",{id:"abs"},"abs"),(0,t.yg)("p",null,"Calculates the absolute value of the number (a). That is, if a \\< 0, it returns -a. For unsigned types it does not do anything. For signed integer types, it returns an unsigned number."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"abs(x)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"x")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The absolute value of the number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT abs(-2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500abs(-2)\u2500\u2510\n\u2502 2       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"divide"},"divide"),(0,t.yg)("p",null,"Calculates the quotient of the numbers. The result type is always a floating-point type."),(0,t.yg)("p",null,"It is not integer division. For integer division, use the \u2018intDiv\u2019 function."),(0,t.yg)("p",null,"When dividing by zero you get \u2018inf\u2019, \u2018-inf\u2019, or \u2018nan\u2019."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\ndivide(a, b) # a / b operator\n\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Value in floating-point type")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT divide(50, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500divide(50, 2)\u2500\u2510\n\u2502 2.5e+01       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"gcd"},"gcd"),(0,t.yg)("p",null,"Returns the greatest common divisor of the numbers."),(0,t.yg)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"gcd(a, b)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The greatest common divisor of the numbers")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT gcd(27,18);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500gcd(27, 18)\u2500\u2510\n\u2502 9           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"intdiv"},"intDiv"),(0,t.yg)("p",null,"Calculates the quotient of the numbers. Divides into integers, rounding down (by the absolute value)."),(0,t.yg)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"intDiv(a, b)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Quotient of the numbers in integer")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT intDiv(10, 2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500intDiv(10, 2)\u2500\u2510\n\u2502 5             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"intdivorzero"},"intDivOrZero"),(0,t.yg)("p",null,"Differs from \u2018intDiv\u2019 in that it returns zero when dividing by zero or when dividing a minimal negative number by minus one."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"intDivOrZero(a, b)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Quotient of the numbers in integer")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT intDivOrZero(10, -2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500intDivOrZero(10, -2)\u2500\u2510\n\u2502 -5                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"lcm"},"lcm"),(0,t.yg)("p",null,"Returns the least common multiple of the numbers."),(0,t.yg)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"lcm(a, b)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The least greatest common divisor of the numbers")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT lcm(27,18);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500lcm(27, 18)\u2500\u2510\n\u2502 54          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"min"},"min"),(0,t.yg)("p",null,"Aggregate function that calculates the minimum across a group of values."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"min(column)\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"column")," \u2013 The column name.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The minimum number in group of values")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_min(id Int32) ENGINE = CnchMergeTree ORDER BY id;\nINSERT INTO test.test_min(id) VALUES(1),(2),(3),(4),(5); -- insert 1,2,3,4,5 to table\nSELECT min(id) FROM test.test_min;\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500min(id)\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"minus"},"minus"),(0,t.yg)("p",null,"Calculates the difference. The result is always signed."),(0,t.yg)("p",null,"You can also calculate integer numbers from a date or date with time. The idea is the same \u2013 see above for \u2018plus\u2019."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"minus(a, b), a - b operator\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The difference between ",(0,t.yg)("inlineCode",{parentName:"li"},"a")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"b"),".")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT minus(10, 3);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500minus(10, 3)\u2500\u2510\n\u2502 7            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"modulo"},"modulo"),(0,t.yg)("p",null,"Calculates the remainder after division."),(0,t.yg)("p",null,"If arguments are floating-point numbers, they are pre-converted to integers by dropping the decimal portion."),(0,t.yg)("p",null,"The remainder is taken in the same sense as in C++. Truncated division is used for negative numbers."),(0,t.yg)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"modulo(a, b), a % b operator\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The remainder from a divide by b.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT modulo(10, 3);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500modulo(10, 3)\u2500\u2510\n\u2502 1             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"multiply"},"multiply"),(0,t.yg)("p",null,"Calculates the product of the numbers."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"multiply(a, b) # a * b operator\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Product value of the numbers.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT multiply(3,12);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500multiply(3, 12)\u2500\u2510\n\u2502 36              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"negate"},"negate"),(0,t.yg)("p",null,"Calculates a number with the reverse sign. The result is always signed."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"negate(a) # -a operator\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The number with the reverse sign.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT negate(20);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500negate(20)\u2500\u2510\n\u2502 -20        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("h2",{id:"plus"},"plus"),(0,t.yg)("p",null,"Calculates the sum of the numbers."),(0,t.yg)("p",null,"You can also add integer numbers with a date or date and time. In the case of a date, adding an integer means adding the corresponding number of days. For a date with time, it means adding the corresponding number of seconds."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Syntax")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"select plus(a, b) # a + b operator\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returned value")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The sum of the numbers.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"select plus(1,2);\n")),(0,t.yg)("p",null,"Result:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500plus(1, 2)\u2500\u2510\n\u2502 3          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);