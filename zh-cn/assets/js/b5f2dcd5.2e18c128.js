"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9758],{58860:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>c});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),y=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},m=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=y(r),f=n,c=o["".concat(p,".").concat(f)]||o[f]||d[f]||l;return r?a.createElement(c,g(g({ref:t},m),{},{components:r})):a.createElement(c,g({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,g=new Array(l);g[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[o]="string"==typeof e?e:n,g[1]=i;for(var y=2;y<l;y++)g[y]=r[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=r(75890),n=(r(37953),r(58860));const l={title:"\u90e8\u7f72\u8981\u6c42",sidebar_position:1,tags:["Docs"]},g="\u90e8\u7f72\u8981\u6c42",i={unversionedId:"deployment/deployment-requirements",id:"deployment/deployment-requirements",title:"\u90e8\u7f72\u8981\u6c42",description:"\u8f6f\u4ef6\u8981\u6c42",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/01-deployment-requirements.mdx",sourceDirName:"deployment",slug:"/deployment/deployment-requirements",permalink:"/zh-cn/docs/deployment/deployment-requirements",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/01-deployment-requirements.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u90e8\u7f72\u8981\u6c42",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/zh-cn/docs/quick-start/basic-database-operations"},next:{title:"\u57fa\u4e8eKubernetes\u96c6\u7fa4\u90e8\u7f72",permalink:"/zh-cn/docs/deployment/deployment-with-k8s"}},p={},y=[{value:"\u8f6f\u4ef6\u8981\u6c42",id:"\u8f6f\u4ef6\u8981\u6c42",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2}],m={toc:y},o="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(o,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u90e8\u7f72\u8981\u6c42"},"\u90e8\u7f72\u8981\u6c42"),(0,n.yg)("h2",{id:"\u8f6f\u4ef6\u8981\u6c42"},"\u8f6f\u4ef6\u8981\u6c42"),(0,n.yg)("p",null,"ByConity \u80fd\u591f\u8fd0\u884c\u5728\u7edd\u5927\u591a\u6570\u4e3b\u6d41\u7684\u5546\u7528\u670d\u52a1\u5668\u4e0a\uff0c\u6211\u4eec\u5efa\u8bae ByConity \u7684\u90e8\u7f72\u80fd\u591f\u9075\u5faa\u4ee5\u4e0b\u9700\u6c42\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Linux \u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42\uff1a\u5185\u6838\u7248\u672c\u5728 4.14 \u53ca\u4ee5\u4e0a\uff0cUbuntu 16.04.5 LTS \u53ca\u4ee5\u4e0a\uff0cCentos 8 \u53ca\u4ee5\u4e0a"),(0,n.yg)("li",{parentName:"ul"},"\u8f6f\u4ef6\u4f9d\u8d56\u5747\u5305\u542b\u5728 lib \u4e2d\uff0c\u65e0\u9700\u989d\u5916\u7684\u8f6f\u4ef6\u4f9d\u8d56")),(0,n.yg)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,n.yg)("p",null,"\u7528\u6237\u9700\u8981\u90e8\u7f72\u548c\u8d2d\u4e70\u81ea\u5df1\u7684Kubernetes\u96c6\u7fa4\uff0c\u4e14\u8981\u6c42\u5728\u4e0d\u5f71\u54cd\u6d4b\u8bd5\u6027\u80fd\u524d\u63d0\u4e0b\u7684\u6700\u4f4e\u786c\u4ef6\u914d\u7f6e\u5982\u4e0b\u8868\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:"left"},"CPU"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u786c\u76d8"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7f51\u7edc"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5b9e\u4f8b\u6570"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TSO"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"300M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5343\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Server"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"32G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5343\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Worker"),(0,n.yg)("td",{parentName:"tr",align:"left"},"4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"16G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100G+"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5343\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2(r+w)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DaemonManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"500M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5343\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ResourceManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5343\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"\u8bf4\u660e\uff1a\u5efa\u8baeWorker\u914d\u7f6e1\u4e2a\u8bfbWorker\u548c1\u4e2a\u5199Worker")),(0,n.yg)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u7ed9\u51fa\u4e00\u4e2a\u751f\u4ea7\u73af\u5883\u4e0b\u5efa\u8bae\u7684\u786c\u4ef6\u914d\u7f6e\uff0c\u4f9b\u5927\u5bb6\u53c2\u8003\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:"left"},"CPU"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u786c\u76d8"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7f51\u7edc"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5b9e\u4f8b\u6570"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TSO"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2"),(0,n.yg)("td",{parentName:"tr",align:"left"},"500M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e07\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Server"),(0,n.yg)("td",{parentName:"tr",align:"left"},"14"),(0,n.yg)("td",{parentName:"tr",align:"left"},"60G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1T"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e07\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},">=1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Worker"),(0,n.yg)("td",{parentName:"tr",align:"left"},"30"),(0,n.yg)("td",{parentName:"tr",align:"left"},"240G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2T+"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e07\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},">=2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DaemonManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e07\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ResourceManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"16G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e07\u5146\u7f51\u5361"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"\u8bf4\u660e\uff1a\u786c\u4ef6\u89c4\u683c\u4e2d\uff0cWorker \u548c Server \u7684\u672c\u5730\u78c1\u76d8\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u5199\u5165\u65f6\u7684\u4e34\u65f6\u6570\u636e\u548c\u65e5\u5fd7\u6587\u4ef6\uff0c\u540c\u65f6 Worker \u7684\u672c\u5730\u78c1\u76d8\u4e2d\u8fd8\u4f1a\u5b58\u50a8\u6570\u636e\u7684 Cache\uff0c\u56e0\u6b64\u78c1\u76d8\u7684\u5927\u5c0f\u9700\u8981\u6839\u636e\u914d\u7f6e\u7684 DiskCache \u5927\u5c0f\u53ca\u5199\u5165\u7684\u6570\u636e\u91cf\u6765\u786e\u5b9a\u3002")))}d.isMDXComponent=!0}}]);