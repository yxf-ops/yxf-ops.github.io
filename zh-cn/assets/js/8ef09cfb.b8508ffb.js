"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9128],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=u(n),g=i,d=y["".concat(p,".").concat(g)]||y[g]||c[g]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(75890),i=(n(37953),n(58860));const a={title:"\u5bfc\u5165\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},l="\u5bfc\u5165\u8c03\u4f18",o={unversionedId:"data-import/data-import-tuning",id:"data-import/data-import-tuning",title:"\u5bfc\u5165\u8c03\u4f18",description:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/data-import-tuning.mdx",sourceDirName:"data-import",slug:"/data-import/data-import-tuning",permalink:"/zh-cn/docs/data-import/data-import-tuning",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/data-import-tuning.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u5bfc\u5165\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8bf4\u660e",permalink:"/zh-cn/docs/data-import/data-introduction"},next:{title:"\u6d41\u5f0f\u5bfc\u5165",permalink:"/zh-cn/docs/data-import/import-methods/stream-import"}},p={},u=[{value:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18",id:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18",level:2},{value:"Dumper \u65b9\u5f0f\u8c03\u4f18",id:"dumper-\u65b9\u5f0f\u8c03\u4f18",level:2}],m={toc:u},y="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u5bfc\u5165\u8c03\u4f18"},"\u5bfc\u5165\u8c03\u4f18"),(0,i.yg)("h2",{id:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18"},"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18"),(0,i.yg)("p",null,"\u5728\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT VALUES"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT INFILE")," \u6216\u8005 ",(0,i.yg)("inlineCode",{parentName:"p"},"PartWriter")," \u5de5\u5177\u5199\u5165\u65f6\uff0c\u751f\u6210\u7684 Part \u6570\u91cf\u4f1a\u76f4\u63a5\u5f71\u54cd\u5199\u5165 HDFS \u7684\u6b21\u6570\uff0c\u8fdb\u800c\u5f71\u54cd\u6574\u4f53\u7684\u5199\u5165\u8017\u65f6\u3002\u4e3a\u4e86\u4f18\u5316\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u5e94\u5c3d\u91cf\u51cf\u5c11 Part \u7684\u6570\u91cf\u3002\n\u76f4\u63a5\u5199\u5165\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u8bfb\u53d6\u90e8\u5206\u6587\u4ef6\u6570\u636e"),(0,i.yg)("li",{parentName:"ol"},"\u6839\u636e ",(0,i.yg)("inlineCode",{parentName:"li"},"PartitionBy")," \u5bf9\u8fd9\u90e8\u5206\u6570\u636e\u8fdb\u884c\u5207\u5206\u3002"),(0,i.yg)("li",{parentName:"ol"},"\u6839\u636e ",(0,i.yg)("inlineCode",{parentName:"li"},"ClusterBy")," \u5bf9\u8fd9\u90e8\u5206\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u5207\u5206\u3002"),(0,i.yg)("li",{parentName:"ol"},"\u5c06\u5207\u5206\u5b8c\u7684\u6570\u636e\u5199\u6210\u65b0\u7684 Part \u5e76\u5199\u5165 HDFS\u3002")),(0,i.yg)("p",null,"\u8c03\u4f18\u5efa\u8bae\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u4e3a\u4e86\u51cf\u5c11 Part \u7684\u6570\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u6587\u4ef6\u4e2d\u5177\u6709\u76f8\u540c\u7684\u5206\u533a\u548c Bucket \u7684\u6570\u636e\u6392\u5217\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u6bcf\u6b21\u8bfb\u53d6\u4e00\u4e9b\u65b0\u7684\u6570\u636e\u540e\uff0c\u751f\u6210\u7684 Part \u6570\u91cf\u4f1a\u5c3d\u53ef\u80fd\u5c11\u3002\u53ef\u4ee5\u5c06\u6570\u636e\u6309\u7167\u5206\u533a\u76f8\u540c\uff0c\u5206\u533a\u5185 Bucket \u76f8\u540c\u7684\u8981\u6c42\u8fdb\u884c\u6392\u5e8f\u3002")),(0,i.yg)("p",null,"2.Bucket \u7684\u8ba1\u7b97\u89c4\u5219\u662f\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a ",(0,i.yg)("inlineCode",{parentName:"li"},"SPLIT_NUMBER"),"\uff0c\u4f1a\u5c06 ",(0,i.yg)("inlineCode",{parentName:"li"},"ClusterByKey")," \u6240\u4f7f\u7528\u7684\u5217\u8ba1\u7b97 SipHash \u540e\u5bf9 ",(0,i.yg)("inlineCode",{parentName:"li"},"BucketNumber")," \u53d6\u6a21\u5f97\u5230 ",(0,i.yg)("inlineCode",{parentName:"li"},"BucketNumber")),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86 ",(0,i.yg)("inlineCode",{parentName:"li"},"SPLIT_NUMBER")),(0,i.yg)("li",{parentName:"ul"},"\u8ba1\u7b97 ",(0,i.yg)("inlineCode",{parentName:"li"},"SplitValue"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.yg)("inlineCode",{parentName:"li"},"ClusterBy")," \u67d0\u4e00\u5217\uff0c\u5229\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"dtspartition")," \u51fd\u6570\u8ba1\u7b97\u51fa\u5bf9\u5e94\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"SplitValue")),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.yg)("inlineCode",{parentName:"li"},"ClusterBy")," \u591a\u5217\uff0c\u5219\u5c06\u8fd9\u4e9b\u5217\u5229\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"SipHash")," \u8ba1\u7b97\u51fa\u5bf9\u5e94\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"SplitValue")))),(0,i.yg)("li",{parentName:"ul"},"\u8ba1\u7b97 ",(0,i.yg)("inlineCode",{parentName:"li"},"BucketNumber"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,i.yg)("inlineCode",{parentName:"li"},"WithRange"),"\uff0c\u5219\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"SplitValue \\* BucketCount / SplitNumber")," \u8ba1\u7b97\u5bf9\u5e94 ",(0,i.yg)("inlineCode",{parentName:"li"},"BucketNumber")),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u662f ",(0,i.yg)("inlineCode",{parentName:"li"},"WithRange"),"\uff0c\u5219\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"SplitValue % BucketCount")," \u8ba1\u7b97\u5bf9\u5e94 ",(0,i.yg)("inlineCode",{parentName:"li"},"BucketNumber"))))),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"\u5f53\u8bfb\u53d6\u6587\u4ef6\u65f6")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u6bcf\u884c\u6570\u636e\u5927\u5c0f\u8f83\u5c0f\uff0c\u53ef\u4ee5\u8003\u8651\u589e\u5927 ",(0,i.yg)("inlineCode",{parentName:"li"},"max_insert_block_size")," \u4ee5\u4e00\u6b21\u8bfb\u53d6\u66f4\u5927\u7684\u6570\u636e\u5757\uff0c\u4ece\u800c\u751f\u6210\u66f4\u5927\u7684 Part\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u8bfb\u53d6\u7684\u6587\u4ef6\u4e0d\u662f HDFS/CFS \u7684\uff0c\u4e14\u4f7f\u7528\u4e86\u901a\u914d\u7b26\u5339\u914d\u4e86\u591a\u4e2a\u6587\u4ef6\uff0c\u53ef\u4ee5\u540c\u65f6\u8c03\u6574 ",(0,i.yg)("inlineCode",{parentName:"li"},"min_insert_block_size_rows")," \u548c ",(0,i.yg)("inlineCode",{parentName:"li"},"min_insert_block_size_bytes"),"\u3002")),(0,i.yg)("h2",{id:"dumper-\u65b9\u5f0f\u8c03\u4f18"},"Dumper \u65b9\u5f0f\u8c03\u4f18"),(0,i.yg)("p",null,"\u4f7f\u7528 Dumper \u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u65f6\uff0c\u53ef\u4ee5\u4e00\u6b21\u6027\u6307\u5b9a\u4e00\u5f20\u8868\u53ca\u5176\u4e2d\u7684\u90e8\u5206\u5206\u533a\uff0c\u5c06\u5176\u5199\u5165 HDFS\uff0c\u6b64\u8fc7\u7a0b\u7684\u8017\u65f6\u4e0e\u8868\u7684\u6570\u636e\u5927\u5c0f\u4ee5\u53ca Part \u6570\u91cf\u6709\u5173\u3002\u4e3a\u4e86\u4f18\u5316\u8fd9\u4e00\u8fc7\u7a0b\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"parallel")," \u53c2\u6570\u589e\u5927\u4e0a\u4f20 Part \u7684\u5e76\u53d1\u6027\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u7b49\u5f85 Part \u5728\u672c\u5730\u5148\u5145\u5206\u5408\u5e76\u540e\u518d\u4f7f\u7528 Dumper \u8fdb\u884c\u4e0a\u4f20\u3002")))}c.isMDXComponent=!0}}]);