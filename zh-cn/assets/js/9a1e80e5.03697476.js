"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4453],{58860:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>d});var n=t(37953);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),y=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=y(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=y(t),g=l,d=p["".concat(u,".").concat(g)]||p[g]||c[g]||a;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=g;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var y=2;y<a;y++)o[y]=t[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var n=t(75890),l=(t(37953),t(58860));const a={title:"\u8d44\u6e90\u7ba1\u7406\u5668",sidebar_position:1,tags:["Docs"]},o="\u8d44\u6e90\u7ba1\u7406\u5668",i={unversionedId:"admin-guides/resource-manager",id:"admin-guides/resource-manager",title:"\u8d44\u6e90\u7ba1\u7406\u5668",description:"\u8d44\u6e90\u7ba1\u7406\u5668\uff08Resource Manager\uff0c\u7b80\u79f0 RM\uff09\u7ec4\u4ef6\u7528\u4e8e\u5bf9 ByConity \u8ba1\u7b97\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u548c\u8c03\u5ea6\uff0c\u662f\u5b9e\u73b0\u8d44\u6e90\u5f39\u6027\u548c\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/resource-manager.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/resource-manager",permalink:"/zh-cn/docs/admin-guides/resource-manager",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/resource-manager.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u8d44\u6e90\u7ba1\u7406\u5668",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"URLs",permalink:"/zh-cn/docs/sql-syntax/urls"},next:{title:"\u914d\u7f6e\u8ba1\u7b97\u7ec4",permalink:"/zh-cn/docs/admin-guides/virtual-warehouse-configuration"}},u={},y=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u8ba1\u7b97\u8282\u70b9 Worker",id:"\u8ba1\u7b97\u8282\u70b9-worker",level:2},{value:"\u8ba1\u7b97\u7ec4\u526f\u672c Worker Group",id:"\u8ba1\u7b97\u7ec4\u526f\u672c-worker-group",level:2},{value:"\u8ba1\u7b97\u7ec4 Virtual Warehouse",id:"\u8ba1\u7b97\u7ec4-virtual-warehouse",level:2},{value:"\u8c03\u5ea6\u6d41\u7a0b",id:"\u8c03\u5ea6\u6d41\u7a0b",level:2},{value:"SELECT Query \u7684\u8c03\u5ea6\u6d41\u7a0b",id:"select-query-\u7684\u8c03\u5ea6\u6d41\u7a0b",level:3},{value:"INSERT Query \u7684\u8c03\u5ea6\u6d41\u7a0b",id:"insert-query-\u7684\u8c03\u5ea6\u6d41\u7a0b",level:3},{value:"\u540e\u53f0\u4efb\u52a1\u7684\u8c03\u5ea6\u6d41\u7a0b",id:"\u540e\u53f0\u4efb\u52a1\u7684\u8c03\u5ea6\u6d41\u7a0b",level:3},{value:"\u9ad8\u53ef\u7528 &amp; \u517c\u5bb9\u5347\u7ea7",id:"\u9ad8\u53ef\u7528--\u517c\u5bb9\u5347\u7ea7",level:2},{value:"\u8ba1\u7b97\u8d44\u6e90\u5f39\u6027\u5171\u4eab",id:"\u8ba1\u7b97\u8d44\u6e90\u5f39\u6027\u5171\u4eab",level:2}],s={toc:y},p="wrapper";function c(e){let{components:r,...a}=e;return(0,l.yg)(p,(0,n.A)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u8d44\u6e90\u7ba1\u7406\u5668"},"\u8d44\u6e90\u7ba1\u7406\u5668"),(0,l.yg)("p",null,"\u8d44\u6e90\u7ba1\u7406\u5668\uff08Resource Manager\uff0c\u7b80\u79f0 RM\uff09\u7ec4\u4ef6\u7528\u4e8e\u5bf9 ByConity \u8ba1\u7b97\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u548c\u8c03\u5ea6\uff0c\u662f\u5b9e\u73b0\u8d44\u6e90\u5f39\u6027\u548c\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002"),(0,l.yg)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.yg)("p",null,"ByConity \u8d44\u6e90\u7ba1\u7406\u5668\u7684\u6838\u5fc3\u8bbe\u8ba1\u76ee\u6807\u5982\u4e0b\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u80fd\u591f\u7ba1\u7406\u3001\u8c03\u5ea6\u8ba1\u7b97\u8d44\u6e90\uff0c\u63d0\u5347\u8d44\u6e90\u5229\u7528\u7387\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u80fd\u591f\u6536\u96c6\u8ba1\u7b97\u7ec4 VW \u7684\u76d1\u63a7\u6570\u636e\uff0c\u4fbf\u4e8e\u57fa\u4e8e\u8d1f\u8f7d\u8fdb\u884c\u8d44\u6e90\u8c03\u5ea6\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u80fd\u591f\u4e3a\u67e5\u8be2\u3001INSERT\u3001\u5404\u79cd\u540e\u53f0\u4efb\u52a1\u63d0\u4f9b\u8c03\u5ea6\u529f\u80fd\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u80fd\u591f\u534f\u8c03\u4e0d\u540c VW \u5e76\u52a8\u6001\u8c03\u914d VW \u7684\u8d44\u6e90\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5b9e\u73b0\u8d44\u6e90\u6c60\u5316\uff0c\u5f39\u6027\u6269\u7f29\u529f\u80fd\u3002")),(0,l.yg)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u4e0a\u8ff0\u76ee\u6807\uff0c\u6211\u4eec\u5c06\u8ba1\u7b97\u8d44\u6e90\u8fdb\u884c\u5c42\u7ea7\u5316\u7684\u5212\u5206\u548c\u7ba1\u7406\u3002"),(0,l.yg)("h2",{id:"\u8ba1\u7b97\u8282\u70b9-worker"},"\u8ba1\u7b97\u8282\u70b9 Worker"),(0,l.yg)("p",null,"\u5728 ",(0,l.yg)("a",{parentName:"p",href:"../introduction/main-principle-concepts"},"\u6280\u672f\u67b6\u6784\u548c\u539f\u7406")," \u4e2d\u6211\u4eec\u77e5\u9053 ByConity \u8ba1\u7b97\u8d44\u6e90\u4e2d\u6700\u5c0f\u7684\u8ba1\u7b97\u5355\u5143\u662f\u4e00\u4e2a Worker \u8282\u70b9\uff0c\u5b83\u5bf9\u5e94\u4e00\u4e2a Kubenetes Pod\u3002"),(0,l.yg)("p",null,"Worker \u542f\u52a8\u540e\uff0c\u5c06\u5b9a\u671f\u5411 RM \u6c47\u62a5\u5fc3\u8df3\u4fe1\u606f\uff0c\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8eab\u4efd\u6807\u8bc6\u4fe1\u606f\uff0c\u5982 WORKER_ID, WORKER_GROUP_ID, VIRTUAL_WAREHOUSE_ID \u7b49\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u8282\u70b9\u7269\u7406\u8d1f\u8f7d\u4fe1\u606f\uff0c\u5982 CPU \u4f7f\u7528\u7387\u3001MEMORY \u4f7f\u7528\u7387\u7b49\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u8d1f\u8f7d\u4fe1\u606f\uff0c\u5982 \u6b63\u5728\u8fd0\u884c\u7684 query \u6570\u91cf\uff0c\u6392\u961f\u7684 query \u6570\u91cf\u7b49\u3002")),(0,l.yg)("p",null,"RM \u7ef4\u62a4\u548c\u53ca\u65f6\u66f4\u65b0\u6bcf\u4e2a Worker \u7684\u72b6\u6001\uff0c\u5728\u5904\u7406 query \u65f6\uff0c\u6839\u636e Worker \u7684\u8eab\u4efd\u6807\u8bc6\u548c\u8d1f\u8f7d\u4fe1\u606f\u8fdb\u884c query \u7684\u8def\u7531\u548c\u8c03\u5ea6\u3002"),(0,l.yg)("h2",{id:"\u8ba1\u7b97\u7ec4\u526f\u672c-worker-group"},"\u8ba1\u7b97\u7ec4\u526f\u672c Worker Group"),(0,l.yg)("p",null,"\u8ba1\u7b97\u7ec4\u526f\u672c\uff08Worker Group\uff0c\u7b80\u79f0 WG\uff09\u662f\u5b9e\u9645\u5904\u7406\u4e00\u4e2a\u67e5\u8be2\u8bf7\u6c42\u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u5b83\u5bf9\u5e94\u4e00\u4e2a Kubenetes StatefulSet\u3002"),(0,l.yg)("p",null,"\u4e00\u4e2a\u8ba1\u7b97\u7ec4\u526f\u672c\u7531\u591a\u4e2a Worker \u7ec4\u6210\uff0c\u6bcf\u4e2a Worker \u8eab\u4efd\u6807\u8bc6\u4e2d\u7684 WORKER_GROUP_ID \u5373\u6307\u660e\u81ea\u5df1\u6240\u5c5e\u7684 Worker Group\u3002\u540c\u65f6\uff0c\u6211\u4eec\u901a\u8fc7\u6c47\u603b Worker Group \u5185\u6240\u6709 Worker \u7684\u8d1f\u8f7d\u4fe1\u606f\uff0c\u53ef\u4ee5\u5f97\u5230\u8be5 Worker Group \u7684\u805a\u5408\u8d1f\u8f7d\u4fe1\u606f\uff0c\u5982\u5e73\u5747 CPU \u4f7f\u7528\u7387\u3001\u6700\u5927 CPU \u4f7f\u7528\u7387\u3001\u5e73\u5747 MEMORY \u4f7f\u7528\u7387\u3001\u6700\u5927 MEMORY \u4f7f\u7528\u7387\u7b49\u3002"),(0,l.yg)("p",null,"\u8ba1\u7b97\u7ec4\u526f\u672c\u53c8\u5206\u4e3a Physical \u548c Shared \u4e24\u79cd\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7269\u7406\u8ba1\u7b97\u7ec4\u526f\u672c\uff08Physical Worker Group\uff09\u4e0e\u4e00\u7ec4\u5b9e\u9645\u7684\u7269\u7406\u8d44\u6e90\uff08Kubernetes StatefulSet\uff09\u7ed1\u5b9a\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5171\u4eab\u8ba1\u7b97\u7ec4\u526f\u672c\uff08Shared Worker Group\uff09\u5219\u4e0d\u548c\u7269\u7406\u8d44\u6e90\u7ed1\u5b9a\uff0c\u800c\u662f\u901a\u8fc7\u5f15\u7528\u7684\u65b9\u5f0f\u6307\u5411\u53e6\u4e00\u4e2a Physical Worker Group\u3002Shared Worker Group \u62e5\u6709\u72ec\u7acb\u7684\u6807\u8bc6\u4fe1\u606f\u5373 WOKRER_GROUP_ID\uff0c\u8d1f\u8f7d\u4fe1\u606f\u5219\u4e3a\u5bf9\u5e94\u7684 Physical Worker Group \u7684\u8d1f\u8f7d\u4fe1\u606f\u3002")),(0,l.yg)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u7ba1\u7406\uff08\u521b\u5efa\u3001\u5220\u9664\u7b49\uff09\u4e00\u4e2a\u7269\u7406\u8ba1\u7b97\u7ec4\u526f\u672c\u65f6\uff0c\u9664\u4e86\u5728 ByConity \u5185\u90e8\u4fee\u6539\u5143\u4fe1\u606f\uff0c\u8fd8\u9700\u8981\u6267\u884c\u5bf9\u5e94\u7684 K8s \u64cd\u4f5c\u3002\u800c\u7ba1\u7406\u4e00\u4e2a\u5171\u4eab\u8ba1\u7b97\u7ec4\u526f\u672c\u5219\u53ea\u9700\u8981\u4fee\u6539\u8be5\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u5143\u4fe1\u606f\u5373\u53ef\uff0c\u56e0\u4e3a\u5171\u4eab\u8ba1\u7b97\u7ec4\u526f\u672c\u4e0d\u62e5\u6709\u4efb\u4f55\u7269\u7406\u8d44\u6e90\u3002"),(0,l.yg)("h2",{id:"\u8ba1\u7b97\u7ec4-virtual-warehouse"},"\u8ba1\u7b97\u7ec4 Virtual Warehouse"),(0,l.yg)("p",null,"\u8ba1\u7b97\u7ec4\uff08Virtual Warehouse\uff0c\u7b80\u79f0 VW\uff09\u7531\u591a\u4e2a\u914d\u7f6e\u76f8\u540c\u7684\u8ba1\u7b97\u7ec4\u526f\u672c\u6784\u6210\u3002Worker \u8eab\u4efd\u6807\u8bc6\u4e2d\u7684 VIRTUAL_WAREHOUSE_ID \u5373\u6807\u8bc6\u81ea\u5df1\u6240\u5c5e\u7684 VW\u3002"),(0,l.yg)("p",null,"VW \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1aDefault \u548c Write\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Default VW \u8d1f\u8d23\u5904\u7406\u7528\u6237\u7684\u666e\u901a SELECT \u67e5\u8be2\uff0cDefault VW \u4e5f\u79f0\u4f5c Read VW\u3002"),(0,l.yg)("li",{parentName:"ul"},"Write VW \u8d1f\u8d23\u5904\u7406\u7528\u6237\u7684 INSERT \u67e5\u8be2\uff0c\u4ee5\u53ca\u8fd0\u884c ByConity \u7684 Merge\u3001Mutate \u7b49\u540e\u53f0\u4efb\u52a1\uff08link \u540e\u53f0\u4efb\u52a1\uff09\u3002")),(0,l.yg)("p",null,"Default \u548c Write VW \u7684\u533a\u5206\uff0c\u4f7f\u5f97 ByConity \u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u6700\u5927\u9650\u5ea6\u7684\u4fdd\u8bc1\u67e5\u8be2\u6027\u80fd\u3002"),(0,l.yg)("h2",{id:"\u8c03\u5ea6\u6d41\u7a0b"},"\u8c03\u5ea6\u6d41\u7a0b"),(0,l.yg)("p",null,"\u6bcf\u4e00\u5f20 ByConity \u7528\u6237\u8868\u90fd\u9700\u8981\u6307\u5b9a\u81ea\u5df1\u7684 default VW \u548c write VW\u3002\u4e4b\u540e\uff0cRM \u4f1a\u627f\u62c5\u8fd9\u5f20\u8868\u7684\u6240\u6709\u8c03\u5ea6\u5de5\u4f5c\uff1aSELECT query\u3001INSERT query\u3001\u540e\u53f0\u4efb\u52a1\u7b49\u3002"),(0,l.yg)("h3",{id:"select-query-\u7684\u8c03\u5ea6\u6d41\u7a0b"},"SELECT Query \u7684\u8c03\u5ea6\u6d41\u7a0b"),(0,l.yg)("p",null,"\u5f53 Server \u53d1\u73b0 Query \u662f\u4e00\u4e2a SELECT Query \u65f6\uff0c\u9700\u8981\u4ece\u8868\u7684 Default VW \u4e2d\u6311\u9009\u4e00\u4e2a WG \u6765\u5904\u7406\u67e5\u8be2\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(7695).A,width:"852",height:"232"})),(0,l.yg)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5047\u8bbe\u8868\u7684 Default VW \u4e2d\u6709 2 \u4e2a Physical WG\uff0c\u4ee5\u53ca 1 \u4e2a Shared WG\uff08\u6307\u5411\u53e6\u4e00\u4e2a VW \u4e2d\u7684 Physical WG\uff09\u3002\u56e0\u4e3a\u662f\u4e00\u4e2a SELECT \u67e5\u8be2\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u9009\u62e9 1 \u4e2a WG \u6765\u5904\u7406\u67e5\u8be2\u3002Physical WG 1 \u662f\u5f53\u524d\u8d1f\u8f7d\u6700\u4f4e\u7684 WG\uff0c\u88ab\u9009\u4e2d\u5904\u7406\u8be5\u67e5\u8be2\u3002"),(0,l.yg)("h3",{id:"insert-query-\u7684\u8c03\u5ea6\u6d41\u7a0b"},"INSERT Query \u7684\u8c03\u5ea6\u6d41\u7a0b"),(0,l.yg)("p",null,"\u5f53 Server \u53d1\u73b0 Query \u662f\u4e00\u4e2a INSERT Query \u65f6\uff0c\u9700\u8981\u4ece\u8868\u7684 Write VW \u4e2d\u6311\u9009\u4e00\u4e2a Worker \u6765\u5904\u7406\u67e5\u8be2\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(74977).A,width:"852",height:"232"})),(0,l.yg)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5047\u8bbe\u8868\u7684 Write VW \u4e2d\u6709 2 \u4e2a Physical WG\uff0c\u6bcf\u4e2a WG \u5305\u542b 3 \u4e2a Worker\u3002\u56e0\u4e3a\u662f\u4e00\u4e2a INSERT \u67e5\u8be2\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u9009\u62e9\u4e00\u4e2a Worker \u6765\u5904\u7406\u67e5\u8be2\u3002Worker 3 \u5f53\u524d\u8d1f\u8f7d\u6700\u4f4e\uff0c\u88ab\u9009\u4e2d\u5904\u7406\u8be5\u67e5\u8be2\u3002"),(0,l.yg)("h3",{id:"\u540e\u53f0\u4efb\u52a1\u7684\u8c03\u5ea6\u6d41\u7a0b"},"\u540e\u53f0\u4efb\u52a1\u7684\u8c03\u5ea6\u6d41\u7a0b"),(0,l.yg)("p",null,"Server \u9664\u4e86\u5904\u7406\u7528\u6237\u67e5\u8be2\uff0c\u8fd8\u9700\u8981\u4e3a\u8868\u8c03\u5ea6\u540e\u53f0\u4efb\u52a1\uff0c\u6bd4\u5982\u5728\u540e\u53f0\u4e0d\u65ad\u5730\u5bf9\u8868\u6570\u636e\u6267\u884c Merge \u4ee5\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(66856).A,width:"852",height:"204"})),(0,l.yg)("p",null,"\u5982\u56fe\u6240\u793a\uff0cServer \u751f\u6210\u4e00\u4e2a Merge \u4efb\u52a1\uff0c\u9700\u8981\u4ece Write VW \u4e2d\u9009\u62e9\u4e00\u4e2a Worker \u6765\u5904\u7406\u3002Worker 3 \u5f53\u524d\u8d1f\u8f7d\u6700\u4f4e\uff0c\u88ab\u9009\u4e2d\u6765\u6267\u884c Merge \u4efb\u52a1\u3002"),(0,l.yg)("h2",{id:"\u9ad8\u53ef\u7528--\u517c\u5bb9\u5347\u7ea7"},"\u9ad8\u53ef\u7528 & \u517c\u5bb9\u5347\u7ea7"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u91c7\u7528\u7b80\u5355\u7684\u591a\u526f\u672c\u4e3b\u4ece\u914d\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ol"},"Worker \u7684\u5fc3\u8df3\u53ea\u53d1\u9001\u7ed9\u4e3b\u8282\u70b9\uff0cServer \u7684\u8bf7\u6c42\u4e5f\u53ea\u7531\u4e3b\u8282\u70b9\u5904\u7406\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5f53\u4e3b\u8282\u70b9\u5b95\u673a\u65f6\uff0c\u7531\u5907\u8282\u70b9\u63a5\u66ff\u670d\u52a1\uff0c\u5e76\u4ece KV \u6570\u636e\u5e93\u540c\u6b65\u5fc5\u8981\u7684\u5143\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u7531\u4e8e Server \u6709 VW\u3001WG \u548c Worker \u4fe1\u606f\u7684\u7f13\u5b58\uff0c\u5373\u4fbf RM \u77ed\u65f6\u95f4\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u8282\u70b9\u4ecd\u7136\u80fd\u591f\u4f7f\u7528\u7f13\u5b58\u7684\u6570\u636e\u7ee7\u7eed\u5de5\u4f5c\u3002")),(0,l.yg)("h2",{id:"\u8ba1\u7b97\u8d44\u6e90\u5f39\u6027\u5171\u4eab"},"\u8ba1\u7b97\u8d44\u6e90\u5f39\u6027\u5171\u4eab"),(0,l.yg)("p",null,"\u57fa\u4e8e Worker \u8d1f\u8f7d\u4fe1\u606f\u5bf9\u67e5\u8be2\u548c\u540e\u53f0\u4efb\u52a1\u8fdb\u884c\u8c03\u5ea6\uff0c\u4f7f\u5f97\u4e00\u4e2a VW \u5185\u90e8\u7684 WG\u3001Worker \u8d1f\u8f7d\u66f4\u52a0\u5747\u8861\u3002\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5408\u9002\u7684 Shared WG\uff08\u5171\u4eab\u8ba1\u7b97\u7ec4\uff09\u6765\u5b9e\u73b0 VW \u4e4b\u95f4\u7684\u8d44\u6e90\u5f39\u6027\u5171\u4eab\u3002"),(0,l.yg)("p",null,"\u5f53\u4e00\u4e2a Physical WG \u6574\u4f53\u8d44\u6e90\u5229\u7528\u7387\u8f83\u4f4e\u65f6\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u9700\u8981\u66f4\u591a\u8ba1\u7b97\u8d44\u6e90\u7684 VW \u5185\u521b\u5efa\u4e00\u4e2a Shared WG\uff0c\u5e76\u6307\u5411\u8be5 Physical WG\u3002\u8fd9\u6837\uff0c\u8fd9\u4e2a Physical WG \u5c31\u53ef\u4ee5\u88ab\u5176\u4ed6 VW \u7684\u67e5\u8be2\u6216\u4efb\u52a1\u6240\u4f7f\u7528\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(64521).A,width:"852",height:"204"})),(0,l.yg)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5728 Default VW 1 \u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u5171\u4eab\u8ba1\u7b97\u7ec4 Shared WG 3\uff0c\u5b83\u4e0d\u62e5\u6709\u4efb\u4f55\u5b9e\u9645\u7684\u7269\u7406\u8ba1\u7b97\u8d44\u6e90\uff0c\u800c\u662f\u6307\u5411\u53e6\u4e00\u4e2a Default VW 3 \u4e2d\u7684\u7269\u7406\u8ba1\u7b97\u7ec4 Physical WG 6\u3002Shared WG 3 \u62e5\u6709\u548c Physical WG 6 \u5b8c\u5168\u76f8\u540c\u7684\u8d1f\u8f7d\u4fe1\u606f\uff0c\u5728 Default VW 1 \u8fdb\u884c\u8c03\u5ea6\u51b3\u7b56\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9 Shared WG 3\uff08\u6216\u5176\u4e2d\u7684 Worker\uff09\u6765\u5904\u7406 SELECT \u67e5\u8be2\uff08\u6216 INSERT \u67e5\u8be2\u3001\u540e\u53f0\u4efb\u52a1\uff09\u3002\u6700\u7ec8\uff0c\u67e5\u8be2\u6216\u540e\u53f0\u4efb\u52a1\u5b9e\u9645\u662f\u8def\u7531\u5230 Physical WG 6 \u8fdb\u884c\u5904\u7406\u3002"))}c.isMDXComponent=!0},74977:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/boxcn1vUjQxIvpWIT2zplXffgyg-89083ddae792a9be640450d97ec50add.png"},66856:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/boxcnHyC6wY1ypvpTr7TkWHtLng-26c8a7ee98d824e6a5d8a77abf07927d.png"},7695:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/boxcnbZbcFxobIoWtbHHOFEBuAd-1d14622bd55e66a3f8046e5ef7c268b7.png"},64521:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/boxcnwYSsOLigmR3d9nblBrpLFg-6bdf100b7fb1d9918fb538140f27616e.png"}}]);