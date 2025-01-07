"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2908],{58860:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>b});var r=n(37953);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),l=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(a.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,u=y(t,["components","mdxType","originalType","parentName"]),s=l(n),d=o,b=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(b,c(c({ref:e},u),{},{components:n})):r.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=d;var y={};for(var a in e)hasOwnProperty.call(e,a)&&(y[a]=e[a]);y.originalType=t,y[s]="string"==typeof t?t:o,c[1]=y;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9883:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>y,toc:()=>l});var r=n(75890),o=(n(37953),n(58860));const i={title:"\u4ec0\u4e48\u662fByConity",sidebar_position:1,tags:["Docs"]},c="ByConity\u7b80\u4ecb",y={unversionedId:"introduction/what-is-byconity",id:"version-0.3.0/introduction/what-is-byconity",title:"\u4ec0\u4e48\u662fByConity",description:"\u4ec0\u4e48\u662fByConity",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/introduction/what-is-byconity.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-byconity",permalink:"/zh-cn/docs/0.3.0/introduction/what-is-byconity",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/introduction/what-is-byconity.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:1,frontMatter:{title:"\u4ec0\u4e48\u662fByConity",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",next:{title:"\u6280\u672f\u67b6\u6784\u548c\u539f\u7406",permalink:"/zh-cn/docs/0.3.0/introduction/main-principle-concepts"}},a={},l=[{value:"\u4ec0\u4e48\u662fByConity",id:"\u4ec0\u4e48\u662fbyconity",level:2},{value:"ByConity\u540d\u5b57\u7531\u6765",id:"byconity\u540d\u5b57\u7531\u6765",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2}],u={toc:l},s="wrapper";function p(t){let{components:e,...n}=t;return(0,o.yg)(s,(0,r.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"byconity\u7b80\u4ecb"},"ByConity\u7b80\u4ecb"),(0,o.yg)("h2",{id:"\u4ec0\u4e48\u662fbyconity"},"\u4ec0\u4e48\u662fByConity"),(0,o.yg)("p",null,"  ByConity\u662f\u65b0\u4e00\u4ee3\u7684\u5f00\u6e90\u7684\u4e91\u539f\u751f\u6570\u636e\u4ed3\u5e93\uff0c\u5b83\u91c7\u7528\u8ba1\u7b97-\u5b58\u50a8\u5206\u79bb\u7684\u67b6\u6784\uff0c\u5728\u6ee1\u8db3\u6570\u4ed3\u7528\u6237\u5bf9\u8d44\u6e90\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u8d44\u6e90\u9694\u79bb\uff0c\u6570\u636e\u5f3a\u4e00\u81f4\u6027\u7b49\u591a\u79cd\u9700\u6c42\u7684\u540c\u65f6\uff0c\u5e76\u63d0\u4f9b\u4f18\u5f02\u7684\u67e5\u8be2\u3001\u5199\u5165\u6027\u80fd\u3002ByConity\u4f7f\u7528\u5927\u91cf\u6210\u719f OLAP \u6280\u672f\uff0c\u4f8b\u5982\u5217\u5b58\u5f15\u64ce\uff0cMPP \u6267\u884c\uff0c\u667a\u80fd\u67e5\u8be2\u4f18\u5316\uff0c\u5411\u91cf\u5316\u6267\u884c\uff0cCodegen, indexing\uff0c\u6570\u636e\u538b\u7f29\u7b49\u3002"),(0,o.yg)("h2",{id:"byconity\u540d\u5b57\u7531\u6765"},"ByConity\u540d\u5b57\u7531\u6765"),(0,o.yg)("p",null,"  ByConity\u662f\u7531\u4e09\u4e2a\u5355\u8bcd\u7ec4\u6210\uff0c\u5373\uff1aByte + Convert + Community\u3002\u5176\u4e2dBy\u6765\u81ea byte\u4ee3\u8868\u5b58\u50a8\u6570\u636e\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u6bd4\u55bb\u6d77\u91cf\u7684\u6570\u636e\uff1b Con\u6765\u81eaconvert\uff0c\u4ee3\u8868\u6539\u53d8\u548c\u9769\u65b0\uff1b Conity\u4e5f\u6765\u81eacommunity\uff0c\u4ee3\u8868\u4e00\u7fa4\u4eba\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u7684\u5f00\u6e90\u5f00\u53d1\u8005\u793e\u533a\u3002\u5bd3\u610fByConity\u662f\uff1a\n\u5e0c\u671b\u6c47\u805a\u4e00\u7fa4\u5c1d\u8bd5\u6253\u7834\u5e38\u89c4\u6280\u672f\u7684\u5f00\u53d1\u8005\uff0c\u4e00\u8d77\u6539\u53d8\u6765\u4e3a\u4f7f\u7528\u6570\u636e\u7684\u65b9\u5f0f\u3002"),(0,o.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,o.yg)("p",null,"  ByConity\u53ef\u4ee5\u6ee1\u8db3\u4f01\u4e1a\u7528\u6237\u7684\u591a\u79cd\u7528\u6237\u573a\u666f\uff0c\u4f8b\u5982\u4ea4\u4e92\u5f0f\u67e5\u8be2\u3001\u5b9e\u65f6\u6570\u636e\u770b\u677f\u548c\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4ea4\u4e92\u5f0f\u67e5\u8be2\uff1a\u8fd9\u7c7b\u573a\u666f\u4e0b\u5305\u62ec\u7528\u6237\u81ea\u5b9a\u4e49\u67e5\u8be2\u3001\u81ea\u52a9\u5f0f\u62a5\u8868\u3001\u7528\u6237\u753b\u50cf\u5206\u6790\u3001\u8425\u9500\u6548\u679c\u5206\u6790\u548c\u884c\u4e3a\u65e5\u5fd7\u5206\u6790\u7b49\u5e94\u7528\u573a\u666f\u3002\u8fd9\u4e9b\u5e94\u7528\u5747\u652f\u6301\u81ea\u7531\u7ef4\u5ea6\u548c\u591a\u8868\u5173\u8054\u67e5\u8be2\u5206\u6790\uff0c\u5e76\u5177\u6709\u8f83\u5feb\u7684\u54cd\u5e94\u901f\u5ea6\u3002\u884c\u4e3a\u65e5\u5fd7\u5206\u6790\u8fd8\u652f\u6301\u6570\u636e\u91cf\u8f83\u5927\u7684\u65e5\u5fd7\u63a2\u7d22\u5206\u6790\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u5b9e\u65f6\u6570\u636e\u770b\u677f\uff1a\u9002\u7528\u5b9e\u65f6\u4e1a\u52a1\u76d1\u63a7\u5927\u5c4f\u3001\u76f4\u64ad\u6570\u636e\u7edf\u8ba1\u770b\u677f\u3001\u4e1a\u52a1\u4eea\u8868\u76d8\u548c\u7cfb\u7edf\u94fe\u8def\u76d1\u63a7\u7b49\u5e94\u7528\u573a\u666f\u3002\u6240\u6709\u5e94\u7528\u5747\u5f3a\u8c03\u5b9e\u65f6\u7279\u6027\uff0c\u90e8\u5206\u652f\u6301\u7edf\u8ba1\u529f\u80fd\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93\uff1a\u5305\u62ec\u5b9e\u65f6\u6570\u636e\u63a5\u5165\u548c\u51c6\u5b9e\u65f6ETL\u8ba1\u7b97\uff0c\u5f3a\u8c03\u5b9e\u65f6\u6570\u636e\u5199\u5165\u548c\u6570\u636e\u7acb\u5373\u53ef\u89c1\uff0c\u540c\u65f6\u652f\u6301\u590d\u6742\u8ba1\u7b97\u548c\u6570\u636e\u6e05\u6d17\u3002")))}p.isMDXComponent=!0}}]);