"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7957],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(37953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(75890),o=(a(37953),a(58860));const r={title:"Data Model",sidebar_position:1,tags:["Docs"]},i="Data Model",l={unversionedId:"table-design/data-model",id:"table-design/data-model",title:"Data Model",description:"Columnar Storage Design Principles",source:"@site/docs/table-design/data-model.mdx",sourceDirName:"table-design",slug:"/table-design/data-model",permalink:"/docs/table-design/data-model",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/table-design/data-model.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Data Model",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Ad-hoc Import",permalink:"/docs/data-import/import-methods/ad-hoc-import"},next:{title:"Table Engines",permalink:"/docs/table-design/table-engine"}},s={},c=[{value:"Columnar Storage Design Principles",id:"columnar-storage-design-principles",level:2},{value:"Data Layout",id:"data-layout",level:3},{value:"Part Delta",id:"part-delta",level:3},{value:"Part File",id:"part-file",level:2},{value:"Compaction",id:"compaction",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"data-model"},"Data Model"),(0,o.yg)("h2",{id:"columnar-storage-design-principles"},"Columnar Storage Design Principles"),(0,o.yg)("p",null,"Typically, transactional databases adopt row-based storage for supporting transactions and high-concurrency read-write operations, while analytical databases use column-based storage to reduce IO and facilitate compression. ByConity employs a columnar storage approach to ensure read-write performance, support transactional consistency, and accommodate large-scale data computation."),(0,o.yg)("h3",{id:"data-layout"},"Data Layout"),(0,o.yg)("p",null,"Table data is physically divided into multiple parts based on the partition key and stored in a unified distributed file system or cloud storage logical storage path. Each part has limits on data size and the number of rows. Computing groups obtain their corresponding parts based on service node allocation strategies (pre-allocation and real-time allocation)."),(0,o.yg)("h3",{id:"part-delta"},"Part Delta"),(0,o.yg)("p",null,"Initially, part data is constructed as a hybrid row-column storage part data file. As DML, data dictionaries, bitmap indexes, and other construction tasks progress, there may be incremental data for the part. This incremental data can be stored in two ways:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Rewriting the entire part data during each construction."),(0,o.yg)("li",{parentName:"ol"},"Generating incremental data and asynchronously merging it into a larger part file in the background.")),(0,o.yg)("p",null,"The first approach can have a significant impact on the overall cluster's availability. Therefore, we primarily adopt the second approach, considering the following two points:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Each DML, data dictionary, or other construction task may involve full IO operations on all parts of the table, which can be costly."),(0,o.yg)("li",{parentName:"ul"},"Construction times can be relatively long, causing DML and other operations to take a considerable amount of time to complete, which is not user-friendly.")),(0,o.yg)("h2",{id:"part-file"},"Part File"),(0,o.yg)("p",null,"Part data typically consists of two components: metadata and actual data."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Metadata: Contains important information about the location of data within the data file (e.g., offset), the number of rows it contains, the data schema, and column data information. This metadata needs to be persistently stored and is often cached in compute nodes for fast data location and access."),(0,o.yg)("li",{parentName:"ul"},"Actual Data: This includes the actual column data (Column Bin Data), column marker data (Column Mrk Data), Map key binary data (Map Key Bin), Map key index (Map Key Index), data dictionary data (Data Dictionary Data), bitmap index data (Bitmap Index Data), etc. This data is stored sequentially in the part's data file according to the offset information in the metadata.")),(0,o.yg)("h2",{id:"compaction"},"Compaction"),(0,o.yg)("p",null,"ByConity supports splitting a part file into multiple smaller files. The compacted parts need to satisfy the maximum size and row limits configured for parts."),(0,o.yg)("p",null,"Compaction in ByConity is performed globally, maintaining consistency with the globally unique block IDs mentioned earlier."))}u.isMDXComponent=!0}}]);