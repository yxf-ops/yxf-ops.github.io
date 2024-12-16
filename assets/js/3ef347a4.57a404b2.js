"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1146],{8860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(7953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||y[u]||i;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(5890),r=(t(7953),t(8860));const i={title:"How to Build",sidebar_position:1,tags:["Docs"]},l="Building ByConity Source Code on Linux",a={unversionedId:"developer-guides/how-to-build-byconity",id:"developer-guides/how-to-build-byconity",title:"How to Build",description:"Dependencies",source:"@site/docs/developer-guides/how-to-build-byconity.mdx",sourceDirName:"developer-guides",slug:"/developer-guides/how-to-build-byconity",permalink:"/docs/developer-guides/how-to-build-byconity",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/developer-guides/how-to-build-byconity.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"How to Build",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"TPC-DS",permalink:"/docs/benchmarks/tpc-ds"},next:{title:"Development Environment",permalink:"/docs/developer-guides/set-up-byconity-dev-env"}},c={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Compiling ByConity",id:"compiling-byconity",level:2}],p={toc:s},d="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"building-byconity-source-code-on-linux"},"Building ByConity Source Code on Linux"),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"To build ByConity from source code on Linux, you need to install the following components:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Git\nCMake 3.17 or newer\nNinja\nC++ compiler: clang-11 or clang-12\nLinker: lld\nThird-Party Library: openssl\n")),(0,r.yg)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,r.yg)("p",null,"Example for Debian 11 (Bullseye):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install git cmake ccache python3 ninja-build libssl-dev\n\n# install llvm 12\nsudo apt install lsb-release wget software-properties-common gnupg # pre-requisites of llvm.sh\nwget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\nsudo ./llvm.sh 12\n")),(0,r.yg)("h2",{id:"compiling-byconity"},"Compiling ByConity"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive <ByConity Repository URL> byconity\n\ncd byconity\nmkdir build && cd build\nexport CC=clang-12\nexport CXX=clang++-12\ncmake ..\nninja\n")),(0,r.yg)("p",null,"The executable files will be located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"programs")," directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client    # byconity client\nclickhouse-server    # byconity server\nclickhouse-worker    # byconity worker\ntso_server           # byconity tso\ndaemon_manager       # byconity daemon manager\nresource_manager     # byconity resource manager\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," The repository URL ",(0,r.yg)("inlineCode",{parentName:"p"},"<ByConity Repository URL>")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"git clone")," command is a placeholder. You need to replace it with the actual URL of the ByConity repository. Additionally, the executable file names (",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse-client"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse-server"),", etc.) mentioned at the end might not reflect the actual names used in the ByConity project. These are placeholders and should be replaced with the correct executable names provided by the ByConity project."))}y.isMDXComponent=!0}}]);