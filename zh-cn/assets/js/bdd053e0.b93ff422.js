"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2886],{8860:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var n=t(7953);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||r;return t?n.createElement(y,c(c({ref:a},u),{},{components:t})):n.createElement(y,c({ref:a},u))}));function y(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2035:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(5890),i=(t(7953),t(8860));const r={title:"\u53ef\u89c6\u5316\u5de5\u5177",sidebar_position:2,tags:["Docs"]},c="\u6570\u636e\u53ef\u89c6\u5316",o={unversionedId:"integration/data-visualization",id:"integration/data-visualization",title:"\u53ef\u89c6\u5316\u5de5\u5177",description:"\u6559\u7a0b\u76ee\u6807\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/integration/data-visualization.mdx",sourceDirName:"integration",slug:"/integration/data-visualization",permalink:"/zh-cn/docs/integration/data-visualization",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/integration/data-visualization.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u53ef\u89c6\u5316\u5de5\u5177",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5ba2\u6237\u7aef",permalink:"/zh-cn/docs/integration/client-connection"},next:{title:"Data Types",permalink:"/zh-cn/docs/sql-syntax/data-types"}},l={},s=[{value:"\u6559\u7a0b\u76ee\u6807\uff1a",id:"\u6559\u7a0b\u76ee\u6807",level:2},{value:"\u524d\u7f6e\u51c6\u5907\uff1a",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177",id:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177",level:2},{value:"\u8fde\u63a5\u65b9\u6cd5\uff1a",id:"\u8fde\u63a5\u65b9\u6cd5",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Metabase",id:"metabase",level:3},{value:"SuperSet:",id:"superset",level:3},{value:"Tableau",id:"tableau",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],u={toc:s},p="wrapper";function g(e){let{components:a,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u6570\u636e\u53ef\u89c6\u5316"},"\u6570\u636e\u53ef\u89c6\u5316"),(0,i.yg)("h2",{id:"\u6559\u7a0b\u76ee\u6807"},"\u6559\u7a0b\u76ee\u6807\uff1a"),(0,i.yg)("p",null,"\u672c\u6587\u6863\u7528\u6765\u6307\u5bfc\u7528\u6237\u901a\u8fc7\u5e38\u89c1\u7684\u5f00\u6e90\u548c\u5546\u4e1a\u7684\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u8fde\u63a5\u5e76\u4f7f\u7528 Byconity\u3002"),(0,i.yg)("h2",{id:"\u524d\u7f6e\u51c6\u5907"},"\u524d\u7f6e\u51c6\u5907\uff1a"),(0,i.yg)("p",null,"\u7528\u6237\u9700\u8981\u83b7\u53d6\u5230 Byconity \u670d\u52a1\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"HOST")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"PORT(TCP/HTTP)")),(0,i.yg)("h2",{id:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177"},"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177"),(0,i.yg)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u53ef\u89c6\u5316\u5de5\u5177\u5305\u62ec\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./data-visualization#grafana"},"Grafana")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./data-visualization#metabase"},"Metabase")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./data-visualization#superset"},"SuperSet")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./data-visualization#tableau"},"Tableau")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./data-visualization#%E5%85%B6%E4%BB%96"},"\u5176\u4ed6"))),(0,i.yg)("h2",{id:"\u8fde\u63a5\u65b9\u6cd5"},"\u8fde\u63a5\u65b9\u6cd5\uff1a"),(0,i.yg)("h3",{id:"grafana"},"Grafana"),(0,i.yg)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a\uff1a"),(0,i.yg)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse")),(0,i.yg)("p",null,"Grafana \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/"},"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(6261).A,width:"1860",height:"1280"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(1659).A,width:"1586",height:"1342"})),(0,i.yg)("h3",{id:"metabase"},"Metabase"),(0,i.yg)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(3572).A,width:"2330",height:"1016"})),(0,i.yg)("h3",{id:"superset"},"SuperSet:"),(0,i.yg)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a"),(0,i.yg)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse")),(0,i.yg)("p",null,"SuperSet \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose"},"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(6107).A,width:"2660",height:"1330"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(7886).A,width:"1948",height:"1346"})),(0,i.yg)("h3",{id:"tableau"},"Tableau"),(0,i.yg)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003"),(0,i.yg)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a ",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/"},"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/")),(0,i.yg)("p",null,"Tableau \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://www.tableau.com/products/desktop/download"},"https://www.tableau.com/products/desktop/download")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(1147).A,width:"2072",height:"1532"})),(0,i.yg)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.yg)("p",null,"\u7531\u4e8e Byconity \u5bf9\u5f00\u6e90\u7684 clickhouse driver(go/java/python)\u662f\u5b8c\u5168\u517c\u5bb9\u7684\uff0c\u56e0\u6b64\u4f7f\u7528\u5176\u4ed6\u5f00\u6e90\u53ef\u89c6\u5316\u5de5\u5177\u8fde\u63a5 Byconity \u65f6\uff0c\u548c\u53ef\u4ee5\u53c2\u8003\u5176\u8fde\u63a5 clickhouse \u7684\u65b9\u6cd5\u3002"))}g.isMDXComponent=!0},7886:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnG3sMOmptJiaYGlugaznN3f-5a3d4cfc5b3d53bf682fe19fcd4ab8e9.png"},1147:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnLhKBy77zRRuwIKvGNEpdad-25067a3c865faf0b8bfd3395d58d2882.png"},6107:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnLpId4cqZ0REcyCFlZYxPqh-aec6dfa70a6a2ae3554d4ba5572fb8f4.png"},6261:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnPWwcVS2PP0ScJ1DABrY5Gb-b28f34bd9edc66af0d763584c604d2b9.png"},1659:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnUlfPZA9ubTQw2MiKV0eOSc-d5593151cce64fdb1a6aac3c28f6fe41.png"},3572:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/boxcnzLODLCibKe4uefhtK3bPMh-26d656586583c881fa8f902f02b34c57.png"}}]);