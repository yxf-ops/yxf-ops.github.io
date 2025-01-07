"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9288],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>s});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),m=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=m(r),f=n,s=y["".concat(g,".").concat(f)]||y[f]||d[f]||l;return r?a.createElement(s,i(i({ref:t},p),{},{components:r})):a.createElement(s,i({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=r(75890),n=(r(37953),r(58860));const l={title:"Deployment Requirements",sidebar_position:1,tags:["Docs"]},i="Deployment Requirements",o={unversionedId:"deployment/deployment-requirements",id:"deployment/deployment-requirements",title:"Deployment Requirements",description:"Software Requirements",source:"@site/docs/deployment/01-deployment-requirements.mdx",sourceDirName:"deployment",slug:"/deployment/deployment-requirements",permalink:"/docs/deployment/deployment-requirements",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/deployment/01-deployment-requirements.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Deployment Requirements",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Basic Operations",permalink:"/docs/quick-start/basic-database-operations"},next:{title:"Deploy on Kubernetes",permalink:"/docs/deployment/deployment-with-k8s"}},g={},m=[{value:"Software Requirements",id:"software-requirements",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2}],p={toc:m},y="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"deployment-requirements"},"Deployment Requirements"),(0,n.yg)("h2",{id:"software-requirements"},"Software Requirements"),(0,n.yg)("p",null,"ByConity can run on most mainstream commercial servers. We recommend that the deployment of ByConity follows the following requirements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Linux operating system requirements: Kernel version 4.14 and above, Ubuntu 16.04.5 LTS and above, Centos 8 and above"),(0,n.yg)("li",{parentName:"ul"},"Software dependencies are included in the lib, no additional software dependencies are required")),(0,n.yg)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.yg)("p",null,"Users need to deploy and purchase their own Kubernetes clusters, and the minimum hardware configuration required without affecting test performance is as follows:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Component Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"CPU"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Memory"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Hard Disk"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Network"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Instance Count"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TSO"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"300M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Server"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"32G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Worker"),(0,n.yg)("td",{parentName:"tr",align:"left"},"4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"16G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100G+"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2 (r+w)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DaemonManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"500M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ResourceManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: It is recommended to configure 1 read Worker and 1 write Worker for Worker.")),(0,n.yg)("p",null,"Meanwhile, we also provide a recommended hardware configuration for production environments for reference:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Component Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"CPU"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Memory"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Hard Disk"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Network"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Instance Count"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TSO"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2"),(0,n.yg)("td",{parentName:"tr",align:"left"},"500M"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10 Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Server"),(0,n.yg)("td",{parentName:"tr",align:"left"},"14"),(0,n.yg)("td",{parentName:"tr",align:"left"},"60G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1T"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10 Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},">=1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Worker"),(0,n.yg)("td",{parentName:"tr",align:"left"},"30"),(0,n.yg)("td",{parentName:"tr",align:"left"},"240G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2T+"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10 Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},">=2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DaemonManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10 Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ResourceManager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"16G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10G"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10 Gigabit NIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1")))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: In the hardware specifications, the local disks of Worker and Server are mainly used to store temporary data and log files during writing. At the same time, the local disks of Worker will also store data Cache. Therefore, the size of the disk needs to be determined based on the configured DiskCache size and the amount of data written.")))}d.isMDXComponent=!0}}]);