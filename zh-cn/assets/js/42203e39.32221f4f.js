"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1223],{8860:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var r=n(7953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},y),{},{components:n})):r.createElement(g,a({ref:t},y))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(5890),o=(n(7953),n(8860));const i={title:"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784",sidebar_position:4,tags:["Docs"]},a="\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784",c={unversionedId:"introduction/background-and-technical-architecture",id:"version-0.2.0/introduction/background-and-technical-architecture",title:"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784",description:"ByConity \u662f\u9762\u5411\u73b0\u4ee3 IT \u67b6\u6784\u53d8\u5316\u800c\u8bbe\u8ba1\u7684\u4e00\u6b3e\u6570\u4ed3\u7cfb\u7edf\uff0c\u5b83\u91c7\u7528\u4e91\u539f\u751f\u67b6\u6784\u8bbe\u8ba1\uff0c\u5728\u6ee1\u8db3\u6570\u4ed3\u7528\u6237\u5bf9\u8d44\u6e90\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u8d44\u6e90\u9694\u79bb\uff0c\u6570\u636e\u5f3a\u4e00\u81f4\u6027\u7b49\u591a\u79cd\u9700\u6c42\u7684\u540c\u65f6\uff0c\u5e76\u63d0\u4f9b\u4f18\u5f02\u7684\u67e5\u8be2\uff0c\u5199\u5165\u6027\u80fd\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/introduction/background-and-technical-architecture.mdx",sourceDirName:"introduction",slug:"/introduction/background-and-technical-architecture",permalink:"/zh-cn/docs/0.2.0/introduction/background-and-technical-architecture",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/introduction/background-and-technical-architecture.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",sidebarPosition:4,frontMatter:{title:"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u63a8\u8350\u573a\u666f\u6848\u4f8b",permalink:"/zh-cn/docs/0.2.0/introduction/recommended-use-case"},next:{title:"\u57fa\u672cSQL\u64cd\u4f5c",permalink:"/zh-cn/docs/0.2.0/quick-start/basic-database-operations"}},l={},u=[{value:"\u670d\u52a1\u63a5\u5165\u5c42",id:"\u670d\u52a1\u63a5\u5165\u5c42",level:2},{value:"\u8ba1\u7b97\u5c42",id:"\u8ba1\u7b97\u5c42",level:2},{value:"\u6570\u636e\u5b58\u50a8\u5c42",id:"\u6570\u636e\u5b58\u50a8\u5c42",level:2}],y={toc:u},s="wrapper";function p(e){let{components:t,...i}=e;return(0,o.yg)(s,(0,r.A)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784"},"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784"),(0,o.yg)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.yg)("p",null,"ByConity \u662f\u9762\u5411\u73b0\u4ee3 IT \u67b6\u6784\u53d8\u5316\u800c\u8bbe\u8ba1\u7684\u4e00\u6b3e\u6570\u4ed3\u7cfb\u7edf\uff0c\u5b83\u91c7\u7528\u4e91\u539f\u751f\u67b6\u6784\u8bbe\u8ba1\uff0c\u5728\u6ee1\u8db3\u6570\u4ed3\u7528\u6237\u5bf9\u8d44\u6e90\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u8d44\u6e90\u9694\u79bb\uff0c\u6570\u636e\u5f3a\u4e00\u81f4\u6027\u7b49\u591a\u79cd\u9700\u6c42\u7684\u540c\u65f6\uff0c\u5e76\u63d0\u4f9b\u4f18\u5f02\u7684\u67e5\u8be2\uff0c\u5199\u5165\u6027\u80fd\u3002"),(0,o.yg)("p",null,"ByConity \u5728\u4f7f\u7528\u5927\u91cf\u6210\u719f OLAP \u6280\u672f\uff0c\u4f8b\u5982\u5217\u5b58\u5f15\u64ce\uff0cMPP \u6267\u884c\uff0c\u667a\u80fd\u67e5\u8be2\u4f18\u5316\uff0c\u5411\u91cf\u5316\u6267\u884c\uff0cCodegen, indexing\uff0c\u6570\u636e\u538b\u7f29\uff1b\u4e5f\u9488\u5bf9\u4e91\u573a\u666f\u548c\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u7684\u7279\u6b8a\u6027\u505a\u4e86\u6280\u672f\u521b\u65b0\uff0c\u5e76\u5411\u793e\u533a\u5f00\u6e90\u3002"),(0,o.yg)("h1",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,o.yg)("p",null,"ByConity \u5927\u4f53\u4e0a\u53ef\u4ee5\u5206\u4e3a 3 \u5c42\uff1a\u670d\u52a1\u63a5\u5165\u5c42\uff0c\u8ba1\u7b97\u5c42\u548c \u5b58\u50a8\u5c42\u3002\u670d\u52a1\u63a5\u5165\u5c42\u54cd\u5e94\u7528\u6237\u7684\u67e5\u8be2\uff0c\u8ba1\u7b97\u5c42\u8d1f\u8d23\u8ba1\u7b97\u6570\u636e\uff0c\u5b58\u50a8\u5c42\u5b58\u653e\u7528\u6237\u6570\u636e\u3002"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(8177).A,width:"2148",height:"2032"})),(0,o.yg)("h2",{id:"\u670d\u52a1\u63a5\u5165\u5c42"},"\u670d\u52a1\u63a5\u5165\u5c42"),(0,o.yg)("p",null,"ByConity \u7684\u670d\u52a1\u63a5\u5165\u5c42\u63a5\u53d7\u7528\u6237\u7684\u67e5\u8be2\uff0c\u9996\u5148\u5bf9\u67e5\u8be2\u8fdb\u884c\u89e3\u6790\uff0c\u5e76\u7ed3\u5408 catalog api \u83b7\u53d6\u5143\u6570\u636e\u4fe1\u606f\u751f\u6210\u9ad8\u6548\u7684\u6267\u884c\u8ba1\u5212\uff0c\u7136\u540e\u901a\u8fc7\u8d44\u6e90\u7ba1\u7406\u5668\uff08Resource manager\uff09\u83b7\u53d6\u53ef\u7528\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u6700\u540e\u628a\u67e5\u8be2\u8ba1\u5212\u8c03\u5ea6\u5230\u9002\u5408\uff08e.g.\uff0c\u62e5\u6709\u7f13\u5b58\uff09\u7684\u8ba1\u7b97\u8282\u70b9\u8fdb\u884c\u6267\u884c\u3002\u670d\u52a1\u63a5\u5165\u5c42\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a server \u6784\u6210\uff0c\u5e76\u652f\u6301\u6c34\u5e73\u6269\u5f20\uff0c\u5145\u5f53\u7684\u662f\u54cd\u5e94\u7528\u6237\u670d\u52a1\u548c\u534f\u8c03\u8c03\u5ea6\u7684\u89d2\u8272\u3002\u9664\u4e86\u7528\u6237\u4f5c\u4e1a\u4e4b\u5916\uff0c\u5728 ByConity \u91cc\u8fd8\u6709\u540e\u53f0\u4efb\u52a1\uff0c\u4f8b\u5982 compaction/gc \u7b49\u7b49\uff0c\u8fd9\u4e9b\u540e\u53f0\u4efb\u52a1\u7531 Daemon manager \u7ba1\u7406\uff0c\u8c03\u5ea6\u5230\u76f8\u5e94\u7684 server \u8fdb\u884c\u6267\u884c\u3002"),(0,o.yg)("p",null,"\u67e5\u8be2\u4f18\u5316\u5668\u662f ByConity \u7cfb\u7edf\u7684\u6838\u5fc3\u4e4b\u4e00\uff0c\u4f18\u79c0\u7684\u4f18\u5316\u5668\u80fd\u6781\u5927\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u590d\u6742\u67e5\u8be2\u573a\u666f\u4e0b\u4f18\u5316\u5668\u80fd\u5e26\u6765\u6570\u500d\u81f3\u6570\u767e\u500d\u7684\u6027\u80fd\u63d0\u5347\u3002ByConity \u81ea\u7814\u4f18\u5316\u5668\u57fa\u4e8e\u56db\u4e2a\u5927\u7684\u4f18\u5316\u65b9\u5411\uff08\u57fa\u4e8e\u89c4\u5219\uff0c\u57fa\u4e8e cost\uff0c\u57fa\u4e8e\u6570\u636e\u4f9d\u8d56\uff0c\u57fa\u4e8e\u53cd\u9988\uff09\u63d0\u4f9b\u6781\u81f4\u4f18\u5316\u80fd\u529b\u3002"),(0,o.yg)("h2",{id:"\u8ba1\u7b97\u5c42"},"\u8ba1\u7b97\u5c42"),(0,o.yg)("p",null,"ByConity \u7684\u8ba1\u7b97\u5c42\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8ba1\u7b97\u7ec4\u6784\u6210\uff0c\u4e0d\u540c\u7684\u79df\u6237\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u8ba1\u7b97\u7ec4\u5b9e\u73b0\u7269\u7406\u8d44\u6e90\u9694\u79bb\u3002\u8d44\u6e90\u7ba1\u7406\u5668\uff08Resource Manager\uff09\u8d1f\u8d23\u5bf9\u8ba1\u7b97\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7684\u7ba1\u7406\u548c\u8c03\u5ea6\uff0c\u80fd\u591f\u6536\u96c6\u5404\u4e2a\u8ba1\u7b97\u7ec4\u7684\u6027\u80fd\u6570\u636e\uff0c\u8d44\u6e90\u4f7f\u7528\u91cf\uff0c\u4e3a\u67e5\u8be2\u3001\u5199\u5165\u548c\u540e\u53f0\u4efb\u52a1\u52a8\u6001\u5206\u914d\u8d44\u6e90\u5e76\u8fdb\u884c\u52a8\u6001\u6269\u7f29\u5bb9\uff0c\u63d0\u9ad8\u8d44\u6e90\u4f7f\u7528\u7387\u3002"),(0,o.yg)("p",null,"\u4e00\u4e2a\u8ba1\u7b97\u7ec4\u7531\u591a\u4e2a worker \u6784\u6210\uff0c\u6bcf\u4e2a\u8282\u70b9\u6536\u5230 PlanSegment \u4e4b\u540e\uff0c\u5f00\u59cb\u9a71\u52a8 PlanSegment \u6267\u884c\uff0c\u5305\u542b\u6570\u636e\u6e90\u7684 PlanSegment \u5f00\u59cb\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u6570\u636e\u6309\u7167\u4e00\u5b9a\u7684 shuffle \u89c4\u5219\u5206\u53d1\u5230\u4e0b\u6e38\u7684\u5404\u4e2a\u8282\u70b9\u4e0a\uff0c\u5305\u542b exchange \u8f93\u5165\u7684 PlanSegment \u7b49\u5f85\u4e0a\u6e38\u7684\u6570\u636e\uff0c\u5982\u679c\u9700\u8981\u7ee7\u7eed\u505a shuffle \u5219\u4f1a\u7ee7\u7eed\u5c06\u6570\u636e\u4e0b\u53d1\u7ed9\u5404\u4e2a\u8282\u70b9\uff0c\u591a\u8f6e stage \u5b8c\u6210\u4e4b\u540e\uff0c\u7ed3\u679c\u4f1a\u8fd4\u56de\u5230\u670d\u52a1\u7aef\u3002"),(0,o.yg)("h2",{id:"\u6570\u636e\u5b58\u50a8\u5c42"},"\u6570\u636e\u5b58\u50a8\u5c42"),(0,o.yg)("p",null,"ByConity \u7684\u5143\u6570\u636e\u548c\u6570\u636e\u90fd\u5b9e\u73b0\u4e86\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\uff0c\u5143\u6570\u636e\u5b58\u50a8\u5728\u5206\u5e03\u5f0f key-value store \u91cc\uff0c\u6570\u636e\u5b58\u50a8\u5728\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\u91cc\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5143\u6570\u636e\u5b58\u50a8")),(0,o.yg)("p",null,"ByConity \u7684\u5143\u6570\u636e\u5b58\u50a8\u57fa\u4e8e\u9ad8\u6027\u80fd\u7684\u5206\u5e03\u5f0f key-value store\uff08FoundationDB\uff09\u5b9e\u73b0\u4e86\u4e00\u5957\u901a\u7528\u7684 catalog api\uff0c\u4f7f\u5f97\u540e\u7aef\u53ef\u63d2\u62d4\uff0c\u65b9\u4fbf\u6269\u5c55\u9002\u914d\u5176\u4ed6\u7684 key-value store\u3002ByConity \u8fd8\u5728 catalog api \u4e0a\u5c42\u5b9e\u73b0\u4e86\u5b8c\u5907\u4e8b\u52a1\u8bed\u4e49\uff08ACID\uff09\u652f\u6301\uff0c\u63d0\u4f9b\u4e86\u9ad8\u6548\u53ef\u9760\u7684\u5143\u6570\u636e\u670d\u52a1\uff0c\u4fdd\u8bc1\u9ad8\u6570\u636e\u8d28\u91cf\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8")),(0,o.yg)("p",null,"ByConity \u91c7\u7528 HDFS \u6216 S3 \u7b49\u4e91\u5b58\u50a8\u670d\u52a1\u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u5c42\uff0c\u7528\u6765\u5b58\u50a8\u5b9e\u9645\u6570\u636e\u3001\u7d22\u5f15\u7b49\u5185\u5bb9\u3002\u6570\u636e\u8868\u7684\u6570\u636e\u6587\u4ef6\u5b58\u50a8\u5728\u8fdc\u7aef\u7684\u7edf\u4e00\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u4e0e\u8ba1\u7b97\u8282\u70b9\u5206\u79bb\u5f00\u6765\u3002ByConity \u5728\u8fdc\u7aef\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\u4e4b\u4e0a\uff0c\u5b9e\u73b0\u4e86\u4e00\u5c42\u901a\u7528\u7684 virtual file system api\uff0c\u65b9\u4fbf\u5e95\u5c42\u6269\u5c55\u548c\u9002\u914d\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef\uff0c\u4f8b\u5982 HDFS\uff0cAmazon S3, Google cloud storage\uff0cAzure blob storage\uff0c\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8\u7b49\u7b49\u3002"),(0,o.yg)("p",null,"\u4e0e\u4e3b\u6d41\u5206\u6790\u6570\u636e\u7c7b\u4f3c\uff0cByConity \u91c7\u7528\u5217\u5f0f\u5b58\u50a8\u683c\u5f0f\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6570\u636e IO \u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u9ad8\u6548\u538b\u7f29\uff0c\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5bf9\u4e8e\u8fde\u7eed\u5b58\u50a8\u7684\u5217\u5f0f\u6570\u636e\uff0cByConity \u901a\u8fc7\u5411\u91cf\u5316\u6267\u884c\u6280\u672f\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"))}p.isMDXComponent=!0},8177:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/boxcnb2OyIV70Plb6Nrx6Fyc1Sc-0ccafc19db764b56b10032d5442c6b7d.png"}}]);