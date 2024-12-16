"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1741],{58860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),y=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=y(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=y(a),p=r,d=g["".concat(o,".").concat(p)]||g[p]||m[p]||i;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var y=2;y<i;y++)l[y]=a[y];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},31387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var n=a(75890),r=(a(37953),a(58860));const i={title:"Direct Access via MySQL",sidebar_position:5,tags:["Docs"]},l="Data Direct Access",s={unversionedId:"data-import/import-methods/direct-access-via-mysql",id:"data-import/import-methods/direct-access-via-mysql",title:"Direct Access via MySQL",description:"Importing via MySQL",source:"@site/docs/data-import/import-methods/direct-access-via-mysql.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/direct-access-via-mysql",permalink:"/docs/data-import/import-methods/direct-access-via-mysql",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-import/import-methods/direct-access-via-mysql.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:5,frontMatter:{title:"Direct Access via MySQL",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Import from Kafka",permalink:"/docs/data-import/import-methods/import-from-kafka"},next:{title:"Direct Access via Hive",permalink:"/docs/data-import/import-methods/direct-access-via-hive"}},o={},y=[{value:"Importing via MySQL",id:"importing-via-mysql",level:2},{value:"Creating tables in MySQL",id:"creating-tables-in-mysql",level:3},{value:"Creating a MySQL table in ByConity",id:"creating-a-mysql-table-in-byconity",level:3},{value:"Creating a ByConity table using the MySQL table engine:",id:"creating-a-byconity-table-using-the-mysql-table-engine",level:4},{value:"Testing in ByConity",id:"testing-in-byconity",level:3}],c={toc:y},g="wrapper";function m(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-direct-access"},"Data Direct Access"),(0,r.yg)("h2",{id:"importing-via-mysql"},"Importing via MySQL"),(0,r.yg)("p",null,"The MySQL engine allows users to access MySQL tables through ByConity and perform SELECT and INSERT queries."),(0,r.yg)("h3",{id:"creating-tables-in-mysql"},"Creating tables in MySQL"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creating a database:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creating a table in MySQL:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table1(\n    id Int,\n    column1 VARCHAR(255)\n);\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Inserting some data:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n    (id, column1)\nvalues\n    (1, 'mysql-ab'),\n    (2, 'mysql-cd');\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creating a user in MySQL for connecting from ByConity:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'mysql_byconity'@'%' IDENTIFIED BY 'Password123!';\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Granting permissions (e.g., granting admin privileges to the ",(0,r.yg)("inlineCode",{parentName:"li"},"mysql_byconity")," user):")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON *.* TO 'mysql_byconity'@'%';\n")),(0,r.yg)("h3",{id:"creating-a-mysql-table-in-byconity"},"Creating a MySQL table in ByConity"),(0,r.yg)("h4",{id:"creating-a-byconity-table-using-the-mysql-table-engine"},"Creating a ByConity table using the MySQL table engine:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_table1 (\n  id UInt64,\n  column1 String\n)\nENGINE = MySQL('mysql-host.domain.com','db1','table1','mysql_byconity','Password123!');\n")),(0,r.yg)("p",null,"The parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"MySQL")," engine are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"Domain name or IP:Port"),(0,r.yg)("td",{parentName:"tr",align:null},"mysql-host.domain.com")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL database name"),(0,r.yg)("td",{parentName:"tr",align:null},"db1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL table name"),(0,r.yg)("td",{parentName:"tr",align:null},"table1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL connection user"),(0,r.yg)("td",{parentName:"tr",align:null},"mysql_byconity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL connection password"),(0,r.yg)("td",{parentName:"tr",align:null},"Password123!")))),(0,r.yg)("p",null,'Note: There are a few typos and inconsistencies in the original text (e.g., "tabele" should be "table", "ByConity" is not a recognized database system, and some commands/syntax may not be accurate). I have corrected some of these issues in the translation, but please keep in mind that the ByConity system mentioned in the text may be fictitious or a typo for an existing database system.'),(0,r.yg)("h3",{id:"testing-in-byconity"},"Testing in ByConity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Testing SELECT Queries")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from mysql_table1;\n")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(33504).A,width:"1310",height:"416"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Testing INSERT Queries")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_table1\n    (id, column1)\nVALUES\n    (3, 'byconity-test');\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Verifying Inserted Data from ByConity in MySQL")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mysql> select id, column1 from db1.table1;\n")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(27930).A,width:"1368",height:"336"})))}m.isMDXComponent=!0},33504:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/boxcnJv89B9UChc3nI0EPHoba6c-fa2c29d57ba43284b475b4cd8ea404f6.png"},27930:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/boxcnQdV8Jpg8jcqEKwAOjONxkh-8eae2b77e5168bc6c15fdbb742018db9.png"}}]);