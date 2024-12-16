"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3983],{58860:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y=n.createContext({}),p=function(e){var t=n.useContext(y),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(y.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,y=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(y,".").concat(g)]||u[g]||s[g]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(75890),a=(r(37953),r(58860));const l={title:"ELT\u80fd\u529b\u4ecb\u7ecd",sidebar_position:1,tags:["Docs"]},i="ELT \u80fd\u529b\u4ecb\u7ecd",o={unversionedId:"elt/elt-introduction",id:"elt/elt-introduction",title:"ELT\u80fd\u529b\u4ecb\u7ecd",description:"\u80cc\u666f",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/elt/elt-introduction.mdx",sourceDirName:"elt",slug:"/elt/elt-introduction",permalink:"/zh-cn/docs/elt/elt-introduction",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/elt/elt-introduction.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"ELT\u80fd\u529b\u4ecb\u7ecd",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u552f\u4e00\u952e",permalink:"/zh-cn/docs/table-design/unique-key"},next:{title:"\u5916\u90e8\u8868",permalink:"/zh-cn/docs/data-lakes/hive-external-table"}},y={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"How to Use ByConity ELT",id:"how-to-use-byconity-elt",level:2}],c={toc:p},u="wrapper";function s(e){let{components:t,...l}=e;return(0,a.yg)(u,(0,n.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"elt-\u80fd\u529b\u4ecb\u7ecd"},"ELT \u80fd\u529b\u4ecb\u7ecd"),(0,a.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.yg)("p",null,"ClickHouse \u4ece\u8bbe\u8ba1\u4e4b\u521d\u662f\u9762\u5411 OLAP\uff08\u5728\u7ebf\u5206\u6790\uff09\u573a\u666f\uff0c\u65e0\u8bba\u662f\u5217\u5b58\u3001\u7d22\u5f15\u8fd8\u662f\u6267\u884c\u5411\u91cf\u5316\u7684\u4f18\u5316\uff0c\u4ed6\u4eec\u90fd\u6709\u6548\u5730\u5e94\u5bf9\u5927\u5bbd\u8868\u7684\u805a\u5408\u8ba1\u7b97\u3002\n\u9488\u5bf9\u590d\u6742\u67e5\u8be2\uff0c\u5c24\u5176\u662f\u6570\u636e\u4ed3\u5e93\u4e2d\u5178\u578b\u7684 ETL \u4efb\u52a1\u6765\u8bf4\uff0cClickHouse \u5219\u5e76\u4e0d\u64c5\u957f\u3002\u7ed3\u6784\u590d\u6742\u3001\u8017\u65f6\u8f83\u957f\u7684\u6570\u636e\u52a0\u5de5\u4f5c\u4e1a\uff0c\u901a\u5e38\u9700\u8981\u590d\u6742\u7684\u8c03\u4f18\u8fc7\u7a0b\u3002\u5178\u578b\u7684\u95ee\u9898\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u91cd\u8bd5\u6210\u672c\u9ad8\uff1a\u5bf9\u4e8e\u8fd0\u884c\u65f6\u957f\u5728\u5206\u949f\u7ea7\u751a\u81f3\u5c0f\u65f6\u7ea7\u7684 ETL \u4f5c\u4e1a\uff0c\u5982\u679c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5931\u8d25\uff0cClickHouse \u53ea\u80fd\u8fdb\u884c query \u7ea7\u522b\u7684\u91cd\u8bd5\u3002\u4ece\u5934\u91cd\u8bd5\u4e0d\u4ec5\u9020\u6210\u5927\u91cf\u7684\u8d44\u6e90\u6d6a\u8d39\uff0c\u4e5f\u5bf9\u52a0\u5de5\u4efb\u52a1\u7684 SLA \u63d0\u51fa\u4e86\u6311\u6218\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8d44\u6e90\u5360\u7528\u5de8\u5927\uff1a\u7531\u4e8e\u7f3a\u5c11\u8fed\u4ee3\u8ba1\u7b97\u548c\u6709\u6548\u7684\u4efb\u52a1\u62c6\u5206\uff0c\u5728\u67e5\u8be2\u6570\u636e\u91cf\u5927\u3001\u8ba1\u7b97\u590d\u6742\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u8981\u6c42\u8282\u70b9\u6709\u5145\u8db3\u7684\u5185\u5b58\u8fdb\u884c\u5904\u7406\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5e76\u53d1\u63a7\u5236\uff1a\u5f53\u591a\u4e2a\u67e5\u8be2\u540c\u65f6\u8fd0\u884c\u65f6\uff0cClickHouse \u5e76\u4e0d\u4f1a\u6839\u636e\u8d44\u6e90\u7684\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u8c03\u5ea6\u3002\u4efb\u52a1\u4e4b\u95f4\u76f8\u4e92\u6324\u538b\u4f1a\u5bfc\u81f4\u5931\u8d25\uff08\u901a\u5e38\u662f Memory limit \u9519\u8bef\uff09\u3002\u53e0\u52a0\u91cd\u8bd5\u673a\u5236\u7684\u7f3a\u4e4f\uff0c\u901a\u5e38\u4f1a\u5f15\u8d77\u96ea\u5d29\u6548\u5e94\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:r(73641).A,width:"1474",height:"1034"})),(0,a.yg)("center",null,"\u56fe1 ByConity = OLAP + Data Warehouse"))),(0,a.yg)("p",null,"\u9488\u5bf9\u4ee5\u4e0a\u95ee\u9898\uff0cByConity \u5728 ClickHouse \u9ad8\u6027\u80fd\u8ba1\u7b97\u6846\u67b6\u7684\u57fa\u7840\u4e0a\uff0c\u589e\u52a0\u4e86\u5bf9 bsp \u6a21\u5f0f\u7684\u652f\u6301\uff1a\u53ef\u4ee5\u8fdb\u884c task \u7ea7\u522b\u7684\u5bb9\u9519\uff1b\u66f4\u7ec6\u7c92\u5ea6\u7684\u8c03\u5ea6\uff1b\u5728\u5c06\u6765\u652f\u6301\u8d44\u6e90\u611f\u77e5\u7684\u8c03\u5ea6\u3002\u5e26\u6765\u7684\u6536\u76ca\u6709\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5f53 query \u8fd0\u884c\u4e2d\u9047\u5230\u9519\u8bef\u65f6\uff0c\u53ef\u4ee5\u81ea\u52a8\u91cd\u8bd5\u5f53\u524d\u7684 task\uff0c\u800c\u4e0d\u662f\u4ece\u5934\u8fdb\u884c\u91cd\u8bd5\u3002\u5927\u5927\u51cf\u5c11\u91cd\u8bd5\u6210\u672c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5f53 query \u9700\u8981\u7684\u5185\u5b58\u5de8\u5927\uff0c\u751a\u81f3\u5927\u4e8e\u5355\u673a\u7684\u5185\u5b58\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u5e76\u884c\u5ea6\u6765\u51cf\u5c11\u5355\u4f4d\u65f6\u95f4\u5185\u5185\u5b58\u7684\u5360\u7528\u3002\u53ea\u9700\u8981\u8c03\u5927\u5e76\u884c\u5ea6\u53c2\u6570\u5373\u53ef\uff0c\u7406\u8bba\u4e0a\u662f\u53ef\u4ee5\u65e0\u9650\u6269\u5c55\u7684\u3002"),(0,a.yg)("li",{parentName:"ul"},"\uff08\u672a\u6765\uff09\u53ef\u4ee5\u6839\u636e\u96c6\u7fa4\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u6709\u5e8f\u8c03\u5ea6\u5e76\u53d1 ETL \u4efb\u52a1\uff0c\u4ece\u800c\u51cf\u5c11\u8d44\u6e90\u7684\u6324\u5360\uff0c\u907f\u514d\u9891\u7e41\u5931\u8d25\u3002")),(0,a.yg)("h2",{id:"how-to-use-byconity-elt"},"How to Use ByConity ELT"),(0,a.yg)("p",null,"\u7528\u6237\u4fa7\u53ef\u4ee5\u5728 query settings \u4e2d\u901a\u8fc7\u4ee5\u4e0b\u53c2\u6570\u4f7f\u7528 ELT \u80fd\u529b\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"bsp_mode"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Bool"),(0,a.yg)("td",{parentName:"tr",align:"left"},"0"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u6253\u5f00 bsp \u6a21\u5f0f\uff0cquery \u4f1a\u5206\u9636\u6bb5\u6267\u884c\u3002\u9636\u6bb5\u4e4b\u95f4\u4f1a\u4f7f\u7528 shuffle \u8fde\u63a5\u3002\u5728\u5931\u8d25\u65f6\u4f1a\u8fdb\u884c task \u7ea7\u522b\u7684\u91cd\u8bd5\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"distributed_max_parallel_size"),(0,a.yg)("td",{parentName:"tr",align:"left"},"UInt64"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e worker \u6570\u91cf"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\u5f53\u5355\u4e2a\u67e5\u8be2\u5360\u7528\u5185\u5b58\u8f83\u5927\u65f6\uff0c\u901a\u8fc7\u8c03\u5927\u6b64\u53c2\u6570\u53ef\u4ee5\u589e\u52a0\u7b97\u5b50\u7684\u5e76\u884c\u5ea6\uff0c\u51cf\u5c11\u5355\u4e2a\u5e76\u884c\u5ea6\u5904\u7406\u6570\u636e\u7684\u6570\u91cf\uff0c\u51cf\u5c11\u5355\u4f4d\u65f6\u95f4\u5185\u5b58\u4f7f\u7528\u91cf\u3002\u5fc5\u987b\u5728\u6253\u5f00 bsp_mode \u4e0b\u624d\u80fd\u8d85\u51fa worker \u7684\u6570\u91cf\u3002\u5efa\u8bae\u8bbe\u7f6e\u4e3a worker \u4e2a\u6570\u7684\u500d\u6570\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"bsp_max_retry_num"),(0,a.yg)("td",{parentName:"tr",align:"left"},"UInt64"),(0,a.yg)("td",{parentName:"tr",align:"left"},"3"),(0,a.yg)("td",{parentName:"tr",align:"left"},"task \u6700\u5927\u7684\u91cd\u8bd5\u6b21\u6570\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"disk_shuffle_files_codec"),(0,a.yg)("td",{parentName:"tr",align:"left"},"LZ4/ZSTD/NONE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"LZ4"),(0,a.yg)("td",{parentName:"tr",align:"left"},"shuffle \u6587\u4ef6\u91c7\u7528\u7684\u7f16\u7801\uff0c\u80fd\u6709\u6548\u51cf\u5c11\u78c1\u76d8\u5360\u7528\u3002")))))}s.isMDXComponent=!0},73641:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/why_elt-ff8b3df100c1f0ad4e0e499462e71a07.jpg"}}]);