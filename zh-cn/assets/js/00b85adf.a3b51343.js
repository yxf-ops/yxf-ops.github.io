"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1813],{8860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),y=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=y(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=y(t),m=o,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var y=2;y<i;y++)c[y]=t[y];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>y});var r=t(5890),o=(t(7953),t(8860));const i={title:"Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883",tags:["Docs"]},c="Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883",l={unversionedId:"community/setup-development-environment",id:"version-0.2.0/community/setup-development-environment",title:"Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883",description:"\u4ece\u6e90\u7801\u7f16\u8bd1 ByConity \u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/community/setup-development-environment.mdx",sourceDirName:"community",slug:"/community/setup-development-environment",permalink:"/zh-cn/docs/0.2.0/community/setup-development-environment",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/community/setup-development-environment.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Git \u5de5\u4f5c\u6d41",permalink:"/zh-cn/docs/0.2.0/community/git-workflow"},next:{title:"\u52a0\u5165ByConity\u6280\u672f\u6307\u5bfc\u59d4\u5458\u4f1a",permalink:"/zh-cn/docs/0.2.0/community/tsc-membership"}},a={},y=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u7f16\u8bd1 ByConity",id:"\u7f16\u8bd1-byconity",level:2}],u={toc:y},s="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"linux-\u642d\u5efa-byconity-\u5f00\u53d1\u73af\u5883"},"Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883"),(0,o.yg)("h1",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),(0,o.yg)("p",null,"\u4ece\u6e90\u7801\u7f16\u8bd1 ByConity \u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Git\nCMake 3.17 or newer\nNinja\nC++ compiler: clang-11 or clang-12\nLinker: lld\nThird-Party Library: openssl\n\n")),(0,o.yg)("h1",{id:"linux-\u5f00\u53d1\u73af\u5883"},"Linux \u5f00\u53d1\u73af\u5883"),(0,o.yg)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.yg)("p",null,"Debian 11 (Bullseye) \u793a\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install git cmake ccache python3 ninja-build libssl-dev\n\n# install llvm 12\nsudo apt install lsb-release wget software-properties-common gnupg # pre-requisites of llvm.sh\nwget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\nsudo ./llvm.sh 12\n\n")),(0,o.yg)("h2",{id:"\u7f16\u8bd1-byconity"},"\u7f16\u8bd1 ByConity"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git clone --recursive <ByConity Repository URL> byconity\n\ncd byconity\nmkdir build && cd build\nexport CC=clang-12\nexport CXX=clang++-12\ncmake ..\nninja\n\n")),(0,o.yg)("p",null,"\u53ef\u6267\u884c\u6587\u4ef6\u5728 programs \u76ee\u5f55\u4e0b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clickhouse-client    # byconity client\nclickhouse-server    # byconity server\nclickhouse-worker    # byconity worker\ntso_server           # byconity tso\ndaemon_manager       # byconity daemon manager\nresource_manager     # byconity resource manager\n\n")))}p.isMDXComponent=!0}}]);