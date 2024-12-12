"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9383],{8860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var r=n(7953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=s(n),d=a,u=y["".concat(c,".").concat(d)]||y[d]||p[d]||i;return n?r.createElement(u,o(o({ref:t},g),{},{components:n})):r.createElement(u,o({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(5890),a=(n(7953),n(8860));const i={title:"TPC-DS\u57fa\u51c6\u6d4b\u8bd5",tags:["Docs"]},o="TPC-DS\u57fa\u51c6\u6d4b\u8bd5",l={unversionedId:"benchmarks/tpc-ds",id:"benchmarks/tpc-ds",title:"TPC-DS\u57fa\u51c6\u6d4b\u8bd5",description:"\u968f\u7740\u6570\u636e\u91cf\u548c\u6570\u636e\u590d\u6742\u6027\u7684\u4e0d\u65ad\u589e\u52a0\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4f01\u4e1a\u5f00\u59cb\u4f7f\u7528OLAP\uff08\u8054\u673a\u5206\u6790\u5904\u7406\uff09\u5f15\u64ce\u6765\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u5e76\u63d0\u4f9b\u5373\u65f6\u5206\u6790\u7ed3\u679c\u3002\u5728\u9009\u62e9OLAP\u5f15\u64ce\u65f6\uff0c\u6027\u80fd\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u56e0\u7d20\u3002\u56e0\u6b64\uff0c\u672c\u6587\u5c06\u4f7f\u7528TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\u6765\u5bf9\u6bd4\u5f00\u6e90\u7684ClickHouse\u3001Doris\u3001Presto\u4ee5\u53caByConity\u8fd94\u4e2aOLAP\u5f15\u64ce\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4ee5\u4fbf\u4e3a\u4f01\u4e1a\u9009\u62e9\u5408\u9002\u7684OLAP\u5f15\u64ce\u63d0\u4f9b\u53c2\u8003\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/benchmarks/tpc-ds.mdx",sourceDirName:"benchmarks",slug:"/benchmarks/tpc-ds",permalink:"/zh-cn/docs/benchmarks/tpc-ds",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/benchmarks/tpc-ds.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"TPC-DS\u57fa\u51c6\u6d4b\u8bd5",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u52a1\u7ba1\u7406",permalink:"/zh-cn/docs/admin-guides/transaction-management"},next:{title:"\u6784\u5efa\u7f16\u8bd1",permalink:"/zh-cn/docs/developer-guides/how-to-build-byconity"}},c={},s=[{value:"TPC-DS\u7b80\u4ecb",id:"tpc-ds\u7b80\u4ecb",level:2},{value:"\u6d4b\u8bd5\u5f15\u64ce\u4ecb\u7ecd",id:"\u6d4b\u8bd5\u5f15\u64ce\u4ecb\u7ecd",level:2},{value:"\u6d4b\u8bd5\u73af\u5883\u548c\u65b9\u6cd5",id:"\u6d4b\u8bd5\u73af\u5883\u548c\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c\u53ca\u5206\u6790",id:"\u6d4b\u8bd5\u7ed3\u679c\u53ca\u5206\u6790",level:2},{value:"\u57fa\u7840\u67e5\u8be2\u573a\u666f\u4e0b",id:"\u57fa\u7840\u67e5\u8be2\u573a\u666f\u4e0b",level:2},{value:"\u8fde\u63a5\u67e5\u8be2\u573a\u666f",id:"\u8fde\u63a5\u67e5\u8be2\u573a\u666f",level:2},{value:"\u805a\u5408\u67e5\u8be2\u573a\u666f",id:"\u805a\u5408\u67e5\u8be2\u573a\u666f",level:2},{value:"\u5b50\u67e5\u8be2\u573a\u666f",id:"\u5b50\u67e5\u8be2\u573a\u666f",level:2},{value:"\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u573a\u666f",id:"\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u573a\u666f",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],g={toc:s},y="wrapper";function p(e){let{components:t,...i}=e;return(0,a.yg)(y,(0,r.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tpc-ds\u57fa\u51c6\u6d4b\u8bd5"},"TPC-DS\u57fa\u51c6\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u968f\u7740\u6570\u636e\u91cf\u548c\u6570\u636e\u590d\u6742\u6027\u7684\u4e0d\u65ad\u589e\u52a0\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4f01\u4e1a\u5f00\u59cb\u4f7f\u7528OLAP\uff08\u8054\u673a\u5206\u6790\u5904\u7406\uff09\u5f15\u64ce\u6765\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u5e76\u63d0\u4f9b\u5373\u65f6\u5206\u6790\u7ed3\u679c\u3002\u5728\u9009\u62e9OLAP\u5f15\u64ce\u65f6\uff0c\u6027\u80fd\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u56e0\u7d20\u3002\u56e0\u6b64\uff0c\u672c\u6587\u5c06\u4f7f\u7528TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\u6765\u5bf9\u6bd4\u5f00\u6e90\u7684ClickHouse\u3001Doris\u3001Presto\u4ee5\u53caByConity\u8fd94\u4e2aOLAP\u5f15\u64ce\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4ee5\u4fbf\u4e3a\u4f01\u4e1a\u9009\u62e9\u5408\u9002\u7684OLAP\u5f15\u64ce\u63d0\u4f9b\u53c2\u8003\u3002"),(0,a.yg)("h2",{id:"tpc-ds\u7b80\u4ecb"},"TPC-DS\u7b80\u4ecb"),(0,a.yg)("p",null,"TPC-DS\uff08Transaction Processing Performance Council Decision Support Benchmark\uff09\u662f\u4e00\u4e2a\u9762\u5411\u51b3\u7b56\u652f\u6301\u7cfb\u7edf\uff08Decision Support System\uff0c\u7b80\u79f0DSS\uff09\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u8be5\u5de5\u5177\u662f\u7531TPC\u7ec4\u7ec7\u5f00\u53d1\uff0c\u5b83\u6a21\u62df\u4e86\u591a\u7ef4\u5206\u6790\u548c\u51b3\u7b56\u652f\u6301\u573a\u666f\uff0c\u5e76\u63d0\u4f9b\u4e8699\u4e2a\u67e5\u8be2\u8bed\u53e5\uff0c\u7528\u4e8e\u8bc4\u4f30\u6570\u636e\u5e93\u7cfb\u7edf\u5728\u590d\u6742\u7684\u591a\u7ef4\u5206\u6790\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002\u6bcf\u4e2a\u67e5\u8be2\u90fd\u8bbe\u8ba1\u7528\u4e8e\u6a21\u62df\u590d\u6742\u7684\u51b3\u7b56\u652f\u6301\u573a\u666f\uff0c\u5305\u62ec\u8de8\u591a\u4e2a\u8868\u7684\u8fde\u63a5\u3001\u805a\u5408\u548c\u5206\u7ec4\u3001\u5b50\u67e5\u8be2\u7b49\u9ad8\u7ea7SQL\u6280\u672f\u3002"),(0,a.yg)("h2",{id:"\u6d4b\u8bd5\u5f15\u64ce\u4ecb\u7ecd"},"\u6d4b\u8bd5\u5f15\u64ce\u4ecb\u7ecd"),(0,a.yg)("p",null,"ClickHouse\u3001Doris\u3001Presto\u548cByConity\u90fd\u662f\u5f53\u524d\u6bd4\u8f83\u6d41\u884c\u7684\u5f00\u6e90OLAP\u5f15\u64ce\uff0c\u5b83\u4eec\u90fd\u5177\u6709\u9ad8\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u7684\u7279\u70b9\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ClickHouse\u662f\u7531\u4fc4\u7f57\u65af\u641c\u7d22\u5f15\u64ce\u516c\u53f8Yandex\u5f00\u53d1\u7684\u4e00\u4e2a\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u5b83\u4e13\u6ce8\u4e8e\u5927\u89c4\u6a21\u6570\u636e\u7684\u5feb\u901f\u67e5\u8be2\u548c\u5206\u6790\u3002"),(0,a.yg)("li",{parentName:"ul"},"Doris\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u5217\u5f0f\u5b58\u50a8\u548c\u5206\u6790\u7cfb\u7edf\uff0c\u5b83\u652f\u6301\u5b9e\u65f6\u67e5\u8be2\u548c\u5206\u6790\uff0c\u5e76\u53ef\u4ee5\u4e0eHadoop\u3001Spark\u548cFlink\u7b49\u5927\u6570\u636e\u6280\u672f\u8fdb\u884c\u96c6\u6210\u3002"),(0,a.yg)("li",{parentName:"ul"},"Presto\u662f\u4e00\u4e2a\u5206\u5e03\u5f0fSQL\u67e5\u8be2\u5f15\u64ce\uff0c\u5b83\u7531Facebook\u5f00\u53d1\uff0c\u53ef\u4ee5\u5728\u5927\u89c4\u6a21\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u5feb\u901f\u67e5\u8be2\u548c\u5206\u6790\u3002"),(0,a.yg)("li",{parentName:"ul"},"ByConity\u662f\u7531\u5b57\u8282\u5f00\u6e90\u7684\u4e91\u539f\u751f\u6570\u4ed3\uff0c\u91c7\u7528\u4e86\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u7684\u67b6\u6784\uff0c\u5b9e\u73b0\u79df\u6237\u8d44\u6e90\u9694\u79bb\u3001\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u5e76\u5177\u6709\u6570\u636e\u8bfb\u5199\u7684\u5f3a\u4e00\u81f4\u6027\u7b49\u7279\u6027\uff0c\u5b83\u652f\u6301\u4e3b\u6d41\u7684OLAP\u5f15\u64ce\u4f18\u5316\u6280\u672f\uff0c\u8bfb\u5199\u6027\u80fd\u975e\u5e38\u4f18\u5f02\u3002\n\u672c\u6587\u5c06\u4f7f\u7528\u8fd9\u56db\u4e2aOLAP\u5f15\u64ce\u5bf9TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\uff0c\u5e76\u5bf9\u6bd4\u5b83\u4eec\u5728\u4e0d\u540c\u7c7b\u578b\u7684\u67e5\u8be2\u4e2d\u7684\u6027\u80fd\u5dee\u5f02\u3002")),(0,a.yg)("h2",{id:"\u6d4b\u8bd5\u73af\u5883\u548c\u65b9\u6cd5"},"\u6d4b\u8bd5\u73af\u5883\u548c\u65b9\u6cd5"),(0,a.yg)("p",null,"\u6d4b\u8bd5\u73af\u5883\u914d\u7f6e\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"\u914d\u7f6e\u9879"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Clickhouse"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Presto"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u73af\u5883\u914d\u7f6e"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Memory: 256GB, Disk: ATA, 7200rpm, partitioned:gpt, System: Linux 4.14.81.bm.30-amd64 x86_64, Debian GNU/Linux 9"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6d4b\u8bd5\u6570\u636e\u91cf"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u4f7f\u75281TB\u7684\u6570\u636e\u8868\uff0c\u76f8\u5f53\u4e8e28\u4ebf\u884c\u6570\u636e\u91cf\u7ea7"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u8f6f\u4ef6\u5305\u7248\u672c"),(0,a.yg)("td",{parentName:"tr",align:"center"},"23.4.1.1943"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.4.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.28.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7248\u672c\u53d1\u5e03\u65f6\u95f4"),(0,a.yg)("td",{parentName:"tr",align:"center"},"2023-04-26"),(0,a.yg)("td",{parentName:"tr",align:"center"},"2023-04-27"),(0,a.yg)("td",{parentName:"tr",align:"center"},"2023-03-16")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u8282\u70b9\u6570\u91cf"),(0,a.yg)("td",{parentName:"tr",align:"center"},"5\u4e2aWorker"),(0,a.yg)("td",{parentName:"tr",align:"center"},"5\u4e2aBE\uff0c1\u4e2aFE"),(0,a.yg)("td",{parentName:"tr",align:"center"},"5\u4e2aWorker\uff0c1\u4e2aCoordinator")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5176\u4ed6\u914d\u7f6e"),(0,a.yg)("td",{parentName:"tr",align:"center"},"distributed_product_mode = 'global',partial_merge_join_optimizations = 1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"bucket\u914d\u7f6e:\u7ef4\u88681\uff0creturns\u886810-20\uff0csales\u8868100-200"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Hive Catalog\uff0cORC format, Xmx200GB")))),(0,a.yg)("p",null,"\u670d\u52a1\u5668\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Architecture:          x86_64\nCPU op-mode(s):        32-bit, 64-bit\nByte Order:            Little Endian\nCPU(s):                48\nOn-line CPU(s) list:   0-47\nThread(s) per core:    2\nCore(s) per socket:    12\nSocket(s):             2\nNUMA node(s):          2\nVendor ID:             GenuineIntel\nCPU family:            6\nModel:                 79\nModel name:            Intel(R) Xeon(R) CPU E5-2650 v4 @ 2.20GHz\nStepping:              1\nCPU MHz:               2494.435\nCPU max MHz:           2900.0000\nCPU min MHz:           1200.0000\nBogoMIPS:              4389.83\nVirtualization:        VT-x\nL1d cache:             32K\nL1i cache:             32K\nL2 cache:              256K\nL3 cache:              30720K\nNUMA node0 CPU(s):     0-11,24-35\nNUMA node1 CPU(s):     12-23,36-47\n")),(0,a.yg)("p",null,"\u6d4b\u8bd5\u65b9\u6cd5\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\uff0c\u548c1TB\uff0828\u4ebf\u884c\uff09\u7684\u6570\u636e\u6d4b\u8bd54\u4e2aOLAP\u5f15\u64ce\u7684\u6027\u80fd\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u5f15\u64ce\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u6d4b\u8bd5\u6570\u636e\u96c6\uff0c\u5e76\u4fdd\u6301\u76f8\u540c\u7684\u914d\u7f6e\u548c\u786c\u4ef6\u73af\u5883\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6bcf\u4e2a\u67e5\u8be2\uff0c\u591a\u6b21\u6267\u884c\u5e76\u53d6\u5e73\u5747\u503c\uff0c\u4ee5\u51cf\u5c11\u6d4b\u91cf\u8bef\u5dee\uff0c\u8bbe\u7f6e\u6bcf\u6b21\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u4e3a500\u79d2\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8bb0\u5f55\u67e5\u8be2\u6267\u884c\u7684\u7ec6\u8282\uff0c\u4f8b\u5982\u67e5\u8be2\u6267\u884c\u8ba1\u5212\u3001I/O\u548cCPU\u4f7f\u7528\u60c5\u51b5\u7b49\u3002")),(0,a.yg)("h2",{id:"\u6d4b\u8bd5\u7ed3\u679c\u53ca\u5206\u6790"},"\u6d4b\u8bd5\u7ed3\u679c\u53ca\u5206\u6790"),(0,a.yg)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86\u76f8\u540c\u7684\u6570\u636e\u96c6\u548c\u786c\u4ef6\u73af\u5883\u6765\u6d4b\u8bd5\u8fd9\u56db\u4e2aOLAP\u5f15\u64ce\u7684\u6027\u80fd\u3002\u6d4b\u8bd5\u6570\u636e\u96c6\u5927\u5c0f\u4e3a1TB\uff0c\u786c\u4ef6\u548c\u8f6f\u4ef6\u73af\u5883\u5982\u4e0a\u4ecb\u7ecd\uff0c\u6211\u4eec\u4f7f\u7528\u4e86TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u4e2d\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\u5206\u522b\u5728\u56db\u4e2aOLAP\u5f15\u64ce\u4e0a\u8fdb\u884c\u4e86\u8fde\u7eed\u4e09\u6b21\u7684\u6d4b\u8bd5\uff0c\u5e76\u53d6\u4e09\u6b21\u5e73\u5747\u7ed3\u679c\u3002\u5176\u4e2dByConity\u8dd1\u901a\u4e86\u6240\u670999\u4e2a\u67e5\u8be2\u6d4b\u8bd5\u3002Doris\u5728SQL15\u51fa\u73b0Crash\uff0c\u53e6\u5916\u67094\u6b21\u7684Timeout\uff0c\u5206\u522b\u662fSQL54\u3001SQL67\u3001SQL78\u548cSQL95\u3002Presto\u53ea\u5728SQL67\u548cSQL72\u53d1\u751fTimeout\uff0c\u5176\u4ed6\u67e5\u8be2\u6d4b\u8bd5\u90fd\u8dd1\u901a\u4e86\u3002\u800cClickhouse\u53ea\u8dd1\u901a\u4e8650%\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5927\u6982\u6709\u4e00\u90e8\u5206\u662fTimeout\uff0c\u53e6\u4e00\u90e8\u5206\u662f\u7cfb\u7edf\u62a5\u9519\uff0c\u5206\u6790\u539f\u56e0\u662fClickhouse\u4e0d\u80fd\u6709\u6548\u7684\u652f\u6301\u591a\u8868\u5173\u8054\u67e5\u8be2\u5bfc\u81f4\uff0c\u53ea\u80fd\u628a\u8fd9\u7c7bSQL\u8bed\u53e5\u505a\u624b\u52a8\u6539\u5199\u62c6\u5206\u624d\u80fd\u6267\u884c\u3002\u56e0\u6b64\u5728\u5bf9\u6bd4\u603b\u8017\u65f6\u6211\u4eec\u6682\u65f6\u6392\u9664Clickhouse\uff0c\u5176\u4ed6\u4e09\u4e2aOLAP\u5f15\u64ceTPC-DS\u6d4b\u8bd5\u603b\u8017\u65f6\u5982\u4e0b\u56fe1\u6240\u793a\uff0c\u4ece\u56fe1 \u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\u5f00\u6e90\u7684ByConity\u67e5\u8be2\u6027\u80fd\u660e\u663e\u4f18\u4e8e\u5176\u4ed6\u5f15\u64ce\uff0c\u6027\u80fd\u7ea6\u662f\u5176\u4ed6\u76843-4\u500d\u3002\uff08\u6ce8\uff1a\u4ee5\u4e0b\u6240\u6709\u56fe\u8868\u7eb5\u5750\u6807\u5355\u4f4d\u4e3a\u79d2\uff09\n",(0,a.yg)("img",{src:n(9648).A,width:"1280",height:"780"}),"\n\u56fe1 TPC-DS 99\u6761\u67e5\u8be2\u603b\u8017\u65f6\n\u9488\u5bf9TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u6309\u7167\u67e5\u8be2\u573a\u666f\u7684\u4e0d\u540c\u8fdb\u884c\u5206\u7c7b\uff0c\u4f8b\u5982\u57fa\u7840\u67e5\u8be2\u3001\u8fde\u63a5\u67e5\u8be2\u3001\u805a\u5408\u67e5\u8be2\u3001\u5b50\u67e5\u8be2\u3001\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u7b49\u3002\u4e0b\u9762\u6211\u4eec\u5c06\u4f7f\u7528\u8fd9\u4e9b\u5206\u7c7b\u65b9\u5f0f\u6765\u5bf9ClickHouse\u3001Doris\u3001Presto\u548cByConity\u56db\u4e2aOLAP\u5f15\u64ce\u8fdb\u884c\u6027\u80fd\u5206\u6790\u5bf9\u6bd4\uff1a"),(0,a.yg)("h2",{id:"\u57fa\u7840\u67e5\u8be2\u573a\u666f\u4e0b"},"\u57fa\u7840\u67e5\u8be2\u573a\u666f\u4e0b"),(0,a.yg)("p",null,"\u8be5\u573a\u666f\u5305\u542b\u7b80\u5355\u7684\u67e5\u8be2\u64cd\u4f5c\uff0c\u4f8b\u5982\u4ece\u5355\u4e2a\u8868\u4e2d\u67e5\u8be2\u6570\u636e\uff0c\u8fc7\u6ee4\u548c\u6392\u5e8f\u7ed3\u679c\u7b49\u3002\u57fa\u7840\u67e5\u8be2\u7684\u6027\u80fd\u6d4b\u8bd5\u4e3b\u8981\u5173\u6ce8\u5904\u7406\u5355\u4e2a\u67e5\u8be2\u7684\u80fd\u529b\u3002\u5176\u4e2dByConity\u7684\u8868\u73b0\u6700\u4f73\uff0cPresto\u548cDoris\u7684\u6027\u80fd\u4e5f\u8868\u73b0\u90fd\u4e0d\u9519\uff0c\u8fd9\u662f\u56e0\u4e3a\u57fa\u7840\u67e5\u8be2\u901a\u5e38\u53ea\u6d89\u53ca\u5230\u5c11\u91cf\u7684\u6570\u636e\u8868\u548c\u5b57\u6bb5\uff0c\u56e0\u6b64\u80fd\u591f\u5145\u5206\u5229\u7528Presto\u548cDoris\u7684\u5206\u5e03\u5f0f\u67e5\u8be2\u7279\u6027\u548c\u5185\u5b58\u8ba1\u7b97\u80fd\u529b\uff0cClickhouse\u5bf9\u591a\u8868\u5173\u8054\u652f\u6301\u4e0d\u597d\uff0c\u51fa\u73b0\u4e00\u4e9b\u8dd1\u4e0d\u901a\u7684\u73b0\u8c61\uff0c\u5176\u4e2dSQL5\u30018\u300111\u300113\u300114\u300117\u300118\u5747\u8d85\u65f6\uff0c\u6211\u4eec\u6309Timeout=500\u79d2\u8ba1\u7b97\uff0c\u4f46\u5e0c\u671b\u663e\u793a\u66f4\u6e05\u6670\u622a\u53d6Timeout=350\u79d2\u3002\u4e0b\u56fe2 \u662f\u57fa\u7840\u67e5\u8be2\u573a\u666f\u4e0b\u56db\u4e2a\u5f15\u64ce\u7684\u5e73\u5747\u67e5\u8be2\u65f6\u95f4\uff1a\n",(0,a.yg)("img",{src:n(4778).A,width:"1280",height:"788"}),"\n\u56fe2 TPC-DS \u57fa\u7840\u67e5\u8be2\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,a.yg)("h2",{id:"\u8fde\u63a5\u67e5\u8be2\u573a\u666f"},"\u8fde\u63a5\u67e5\u8be2\u573a\u666f"),(0,a.yg)("p",null,"\u8fde\u63a5\u67e5\u8be2\u662f\u5e38\u89c1\u7684\u591a\u8868\u67e5\u8be2\u573a\u666f\uff0c\u5b83\u901a\u5e38\u4f7f\u7528JOIN\u8bed\u53e5\u8fde\u63a5\u591a\u4e2a\u8868\uff0c\u5e76\u6839\u636e\u6307\u5b9a\u6761\u4ef6\u8fdb\u884c\u6570\u636e\u68c0\u7d22\u3002\u5982\u56fe3 \u6211\u4eec\u770b\u5230ByConity\u7684\u6027\u80fd\u6700\u4f73\uff0c\u4e3b\u8981\u5f97\u76ca\u4e8e\u5bf9\u67e5\u8be2\u4f18\u5316\u5668\u7684\u4f18\u5316\uff0c\u5f15\u5165\u4e86\u57fa\u4e8e\u4ee3\u4ef7\u7684\u4f18\u5316\u80fd\u529b\uff08CBO\uff09\uff0c\u5728\u591a\u8868Join\u65f6\u5019\u8fdb\u884cre-order\u7684\u7b49\u4f18\u5316\u64cd\u4f5c\u3002\u5176\u6b21\u662fPresto\u548cDoris\uff0cClickhouse\u5728\u591a\u8868Join\u7684\u6548\u679c\u76f8\u6bd4\u5176\u4ed6\u4e09\u4e2a\u6027\u80fd\u4e0d\u662f\u5f88\u597d\uff0c\u4e14\u5bf9\u5f88\u591a\u590d\u6742\u8bed\u53e5\u7684\u652f\u6301\u4e0d\u591f\u597d\u3002\n",(0,a.yg)("img",{src:n(8046).A,width:"1280",height:"787"}),"\n\u56fe3 TPC-DS\u8fde\u63a5\u67e5\u8be2\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,a.yg)("h2",{id:"\u805a\u5408\u67e5\u8be2\u573a\u666f"},"\u805a\u5408\u67e5\u8be2\u573a\u666f"),(0,a.yg)("p",null,"\u805a\u5408\u67e5\u8be2\u662f\u5bf9\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u8ba1\u7b97\u7684\u573a\u666f\uff0c\u4f8b\u5982\u6d4b\u8bd5SUM\u3001AVG\u3001COUNT\u7b49\u805a\u5408\u51fd\u6570\u7684\u4f7f\u7528\u3002ByConity\u4f9d\u7136\u8868\u73b0\u4f18\u5f02\uff0c\u5176\u6b21\u662fDoris\u548cPresto\uff0cClickhouse\u51fa\u73b0\u4e86\u56db\u6b21Timeout\uff0c\u4e3a\u4e86\u65b9\u4fbf\u770b\u51fa\u5dee\u5f02\uff0c\u6211\u4eec\u622a\u53d6Timeout\u503c\u5230250\u79d2\u3002\n",(0,a.yg)("img",{src:n(5077).A,width:"1280",height:"787"}),"\n\u56fe4 TPC-DS\u805a\u5408\u67e5\u8be2\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,a.yg)("h2",{id:"\u5b50\u67e5\u8be2\u573a\u666f"},"\u5b50\u67e5\u8be2\u573a\u666f"),(0,a.yg)("p",null,"\u5b50\u67e5\u8be2\u662f\u5728SQL\u8bed\u53e5\u4e2d\u5d4c\u5957\u4f7f\u7528\u7684\u67e5\u8be2\u573a\u666f\uff0c\u5b83\u901a\u5e38\u4f5c\u4e3a\u4e3b\u67e5\u8be2\u7684\u6761\u4ef6\u6216\u9650\u5236\u6761\u4ef6\u3002\u5982\u4e0b\u56fe5\u6240\u793a\uff0cByConity\u8868\u73b0\u6700\u4f73\uff0c\u539f\u56e0\u662fByConity\u5b9e\u73b0\u4e86\u57fa\u4e8e\u89c4\u5219\u7684\u4f18\u5316\u80fd\u529b\uff08RBO\uff09\u8fdb\u884c\u67e5\u8be2\u4f18\u5316\uff0c\u901a\u8fc7\u7b97\u5b50\u4e0b\u63a8\u3001\u5217\u88c1\u526a\u548c\u5206\u533a\u88c1\u526a\u7b49\u6280\u672f\uff0c\u628a\u590d\u6742\u7684\u5d4c\u5957\u67e5\u8be2\u8fdb\u884c\u6574\u4f53\u4f18\u5316\uff0c\u66ff\u9664\u6240\u6709\u7684\u5b50\u67e5\u8be2\uff0c\u628a\u5e38\u89c1\u7b97\u5b50\u8f6c\u5316\u6210Join+Agg\u7684\u5f62\u5f0f\u3002\u5176\u6b21\u662fDoris\u548cPresto\u8868\u73b0\u76f8\u5bf9\u8f83\u597d\uff0c\u4f46Presto\u5728SQL68\u548cSQL73\u51fa\u73b0Timeout\uff0cDoris\u4e5f\u57283\u4e2aSQL\u67e5\u8be2\u51fa\u73b0Timeout\uff0cClickhouse\u540c\u6837\u51fa\u73b0\u4e86\u90e8\u5206\u8d85\u65f6\u548c\u7cfb\u7edf\u62a5\u9519\uff0c\u539f\u56e0\u4e0a\u9762\u6709\u63d0\u5230\u3002\u540c\u6837\u4e3a\u65b9\u4fbf\u770b\u51fa\u5dee\u5f02\uff0c\u6211\u4eec\u622a\u53d6Timeout\u503c\u7b49\u4e8e250\u79d2\u3002\n",(0,a.yg)("img",{src:n(752).A,width:"1280",height:"796"}),"\n\u56fe5 TPC-DS\u5b50\u67e5\u8be2\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,a.yg)("h2",{id:"\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u573a\u666f"},"\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u573a\u666f"),(0,a.yg)("p",null,"\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u662f\u4e00\u79cd\u9ad8\u7ea7\u7684SQL\u67e5\u8be2\u573a\u666f\uff0c\u5b83\u53ef\u4ee5\u5728\u67e5\u8be2\u7ed3\u679c\u4e2d\u8fdb\u884c\u6392\u540d\u3001\u5206\u7ec4\u3001\u6392\u5e8f\u7b49\u64cd\u4f5c\u3002\u5982\u4e0b\u56fe6\u6240\u793a\uff0cByConity\u7684\u6027\u80fd\u6700\u4f18\uff0c\u5176\u6b21\u662fPresto\uff0cDoris\u51fa\u73b0\u4e86\u4e00\u6b21Timeout\u7684\u60c5\u51b5\uff0cClickhouse\u4f9d\u7136\u6709\u90e8\u5206\u6ca1\u6709\u8dd1\u901aTPC-DS\u6d4b\u8bd5\u3002\n",(0,a.yg)("img",{src:n(7595).A,width:"1280",height:"792"}),"\n\u56fe6 TPC-DS\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,a.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.yg)("p",null,"\u672c\u6587\u5bf9ClickHouse\u3001Doris\u3001Presto\u548cByConity\u56db\u4e2aOLAP\u5f15\u64ce\u5728TPC-DS\u57fa\u51c6\u6d4b\u8bd5\u768499\u4e2a\u67e5\u8be2\u8bed\u53e5\u4e0b\u7684\u6027\u80fd\u8fdb\u884c\u4e86\u5206\u6790\u548c\u6bd4\u8f83\u3002\u6211\u4eec\u53d1\u73b0\uff0c\u5728\u4e0d\u540c\u7684\u67e5\u8be2\u573a\u666f\u4e0b\uff0c\u56db\u4e2a\u5f15\u64ce\u7684\u6027\u80fd\u8868\u73b0\u5b58\u5728\u5dee\u5f02\u3002ByConity\u5728\u6240\u6709TPC-DS\u768499\u4e2a\u67e5\u8be2\u573a\u666f\u4e0b\u90fd\u8868\u73b0\u4f18\u5f02\uff0c\u8d85\u8fc7\u5176\u4ed6\u4e09\u4e2aOLAP\u5f15\u64ce\uff1bPresto\u548cDoris\u5728\u8fde\u63a5\u67e5\u8be2\u3001\u805a\u5408\u67e5\u8be2\u548c\u7a97\u53e3\u51fd\u6570\u67e5\u8be2\u573a\u666f\u4e0b\u8868\u73b0\u8f83\u597d\uff1b\u7531\u4e8eClickhouse\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u5e76\u4e0d\u662f\u4e13\u95e8\u9488\u5bf9\u5173\u8054\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\uff0c\u56e0\u6b64\u5728\u591a\u8868\u5173\u8054\u67e5\u8be2\u65b9\u9762\u6574\u4f53\u8868\u73b0\u5dee\u5f3a\u4eba\u610f\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u53d6\u51b3\u4e8e\u591a\u4e2a\u56e0\u7d20\uff0c\u5305\u62ec\u6570\u636e\u7ed3\u6784\u3001\u67e5\u8be2\u7c7b\u578b\u3001\u6570\u636e\u6a21\u578b\u7b49\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u7efc\u5408\u8003\u8651\u5404\u79cd\u56e0\u7d20\uff0c\u4ee5\u9009\u62e9\u6700\u9002\u5408\u81ea\u5df1\u7684OLAP\u5f15\u64ce\u3002\n\u5728\u9009\u62e9OLAP\u5f15\u64ce\u65f6\uff0c\u8fd8\u9700\u8981\u8003\u8651\u5176\u4ed6\u56e0\u7d20\uff0c\u5982\u53ef\u6269\u5c55\u6027\u3001\u6613\u7528\u6027\u3001\u7a33\u5b9a\u6027\u7b49\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u4e1a\u52a1\u9700\u6c42\u8fdb\u884c\u9009\u62e9\uff0c\u5e76\u5bf9\u5f15\u64ce\u8fdb\u884c\u5408\u7406\u7684\u914d\u7f6e\u548c\u4f18\u5316\uff0c\u4ee5\u83b7\u5f97\u6700\u4f73\u7684\u6027\u80fd\u8868\u73b0\u3002\n\u603b\u4e4b\uff0cClickHouse\u3001Doris\u3001Presto\u3001ByConity\u90fd\u662f\u975e\u5e38\u4f18\u79c0\u7684OLAP\u5f15\u64ce\uff0c\u5177\u6709\u4e0d\u540c\u7684\u4f18\u70b9\u548c\u9002\u7528\u573a\u666f\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u4e1a\u52a1\u9700\u6c42\u8fdb\u884c\u9009\u62e9\uff0c\u5e76\u8fdb\u884c\u5408\u7406\u7684\u914d\u7f6e\u548c\u4f18\u5316\uff0c\u4ee5\u83b7\u5f97\u6700\u4f73\u7684\u6027\u80fd\u8868\u73b0\u3002\u540c\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u9009\u62e9\u5177\u6709\u4ee3\u8868\u6027\u7684\u67e5\u8be2\u573a\u666f\u548c\u6570\u636e\u96c6\uff0c\u5e76\u9488\u5bf9\u4e0d\u540c\u7684\u67e5\u8be2\u573a\u666f\u8fdb\u884c\u6d4b\u8bd5\u548c\u5206\u6790\uff0c\u4ee5\u4fbf\u66f4\u5168\u9762\u5730\u8bc4\u4f30\u5f15\u64ce\u7684\u6027\u80fd\u3002"))}p.isMDXComponent=!0},4778:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-19-00a78c3b1d2b94ce8eb03ecc0f3f506a.png"},8046:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-42-1acbfa4ea42175c44667256a6ced5206.png"},5077:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-52-fb103d3e66cdefc5d8dd4e5cff4388e0.png"},752:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-79-0ae53bb8245ec87a9ac998d1b0b5614f.png"},7595:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-98-334f3bbe8cdd726ae7f6131839b71d43.png"},9648:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tpc-ds-total-b501a6894b07e84ebbcbea991548633f.png"}}]);