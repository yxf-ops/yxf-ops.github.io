"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8412],{8860:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>s});var r=t(7953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},y=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=u(t),m=l,s=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return t?r.createElement(s,a(a({ref:n},y),{},{components:t})):r.createElement(s,a({ref:n},y))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(5890),l=(t(7953),t(8860));const i={title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},a="\u590d\u6742\u67e5\u8be2\u8c03\u4f18",o={unversionedId:"query-optimization/complex-query-optimization",id:"query-optimization/complex-query-optimization",title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",description:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/complex-query-optimization.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/complex-query-optimization",permalink:"/zh-cn/docs/query-optimization/complex-query-optimization",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/complex-query-optimization.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u9884\u52a0\u8f7d",permalink:"/zh-cn/docs/query-optimization/query-optimization-with-cache-preload"},next:{title:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316",permalink:"/zh-cn/docs/query-optimization/query-optimization-with-projection"}},p={},u=[{value:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",id:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",level:2},{value:"\u5982\u4f55\u5f00\u542f\u67e5\u8be2\u7ea7\u522b\u53c2\u6570",id:"\u5982\u4f55\u5f00\u542f\u67e5\u8be2\u7ea7\u522b\u53c2\u6570",level:2}],y={toc:u},g="wrapper";function c(e){let{components:n,...i}=e;return(0,l.yg)(g,(0,r.A)({},y,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18"},"\u590d\u6742\u67e5\u8be2\u8c03\u4f18"),(0,l.yg)("h2",{id:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b"},"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b"),(0,l.yg)("p",null,"\u5206\u6790\u578b\u67e5\u8be2\u53ef\u4ee5\u5206\u4e3a\u7b80\u5355\u67e5\u8be2\u548c\u590d\u6742\u67e5\u8be2\uff0c\u7b80\u5355\u67e5\u8be2\u901a\u5e38\u662f\u5355\u8868\u68c0\u7d22\u805a\u5408\u3001\u5927\u8868\u4e0e\u5c0f\u8868 Join \u67e5\u8be2\uff0c\u67e5\u8be2\u54cd\u5e94\u5feb\uff1b\u590d\u6742\u67e5\u8be2\u6307\u7684\u662f\u6709\u5927\u8868\u3001\u591a\u8868\u5173\u8054\u548c\u590d\u6742\u7684\u903b\u8f91\u5904\u7406\uff0c\u901a\u5e38\u67e5\u8be2\u54cd\u5e94\u6162\u6d88\u8017\u8d44\u6e90\u591a\u3002ByConity \u5728\u590d\u6742\u67e5\u8be2\u4e0a\u8fdb\u884c\u4e86\u4f18\u5316\u8bbe\u8ba1\u3002\n\u7b80\u5355\u7684\u67e5\u8be2\u53ef\u4ee5\u91c7\u7528\u4e24\u9636\u6bb5\u6267\u884c\u6a21\u578b\uff0c\u8ba1\u7b97\u8282\u70b9\u4e0a\u9762\u6267\u884c\u7684 partial \u9636\u6bb5\uff0c\u670d\u52a1\u8282\u70b9\u4e0a\u9762\u6267\u884c\u7684 final \u9636\u6bb5\uff0c\u4e00\u65e6\u6211\u4eec\u9700\u8981\u6267\u884c\u4e00\u4e2a\u590d\u6742\u7684\u591a\u4e2a\u805a\u5408\u6216\u8005 join \u7684\u67e5\u8be2\uff0c\u4e24\u9636\u6bb5\u7684\u6267\u884c\u6a21\u578b\u7075\u6d3b\u6027\u975e\u5e38\u4f4e\uff0c\u4e5f\u8ba9\u67e5\u8be2\u7684\u4f18\u5316\u53d8\u5f97\u68d8\u624b\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301\u5206\u5e03\u5f0f\u67e5\u8be2\uff0c\u65b9\u4fbf\u6267\u884c\u4f18\u5316\u5668\u4ea7\u751f\u7684\u6267\u884c\u8ba1\u5212\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u652f\u6301\u591a\u8f6e\u5206\u5e03\u5f0f\u6267\u884c\u6a21\u5f0f\u7684\u590d\u6742\u67e5\u8be2\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(9209).A,width:"1070",height:"462"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"}," \u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b\u56fe")),(0,l.yg)("p",null,"\u590d\u6742\u67e5\u8be2\u7684\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Query SQL String \u901a\u8fc7 parser \u89e3\u6790\u4e3a AST"),(0,l.yg)("li",{parentName:"ul"},"\u5bf9 AST \u505a\u6539\u5199\u548c\u4f18\u5316\uff0c\u4ea7\u751f\u6267\u884c\u8ba1\u5212"),(0,l.yg)("li",{parentName:"ul"},"\u542f\u7528\u4f18\u5316\u5668\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u4f18\u5316\u5668\u4ea7\u751f\u6267\u884c\u8ba1\u5212\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5c06\u6267\u884c\u8ba1\u5212\u5207\u5206\u4e3a\u591a\u4e2a PlanSegment"),(0,l.yg)("li",{parentName:"ul"},"PlanSegment \u5373\u5206\u5e03\u5f0f\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e2a\u6267\u884c\u7247\u6bb5\uff0c\u5b83\u5305\u542b"),(0,l.yg)("li",{parentName:"ul"},"\u6267\u884c\u9700\u8981\u7684 AST \u7247\u6bb5\uff0c\u6216\u8005\u4e00\u4e2a\u7531 PlanNode \u6784\u6210\u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\u7247\u6bb5"),(0,l.yg)("li",{parentName:"ul"},"PlanSegment \u6267\u884c\u7684\u8282\u70b9\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"PlanSegment \u7684\u4e0a\u4e0b\u6e38\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u4e0a\u6e38\u7684\u8f93\u5165\u6d41\uff0c\u4e0b\u6e38\u9700\u8981\u7684\u8f93\u5165\u6d41"),(0,l.yg)("li",{parentName:"ul"},"\u5f15\u64ce\u7684\u8c03\u5ea6\u5668\u4f1a\u5c06\u8fd9\u4e9b PlanSegment \u6784\u6210\u4e00\u4e2a DAG\uff0c\u7136\u540e\u6309\u62d3\u6251\u6392\u5e8f\u4e0b\u53d1\u7ed9\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9"),(0,l.yg)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6536\u5230 PlanSegment \u4e4b\u540e\uff0c\u5f00\u59cb\u9a71\u52a8 PlanSegment \u6267\u884c"),(0,l.yg)("li",{parentName:"ul"},"\u5305\u542b\u6570\u636e\u6e90\u7684 PlanSegment \u5f00\u59cb\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u6570\u636e\u6309\u7167\u4e00\u5b9a\u7684 shuffle \u89c4\u5219\u5206\u53d1\u5230\u4e0b\u6e38\u7684\u5404\u4e2a\u8282\u70b9\u4e0a"),(0,l.yg)("li",{parentName:"ul"},"\u5305\u542b exchange \u8f93\u5165\u7684 PlanSegment \u7b49\u5f85\u4e0a\u6e38\u7684\u6570\u636e\uff0c\u5982\u679c\u9700\u8981\u7ee7\u7eed\u505a shuffle \u5219\u4f1a\u7ee7\u7eed\u5c06\u6570\u636e\u4e0b\u53d1\u7ed9\u5404\u4e2a\u8282\u70b9"),(0,l.yg)("li",{parentName:"ul"},"\u591a\u8f6e stage \u5b8c\u6210\u4e4b\u540e\uff0c\u7ed3\u679c\u4f1a\u8fd4\u56de\u5230\u670d\u52a1\u7aef")),(0,l.yg)("h2",{id:"\u5982\u4f55\u5f00\u542f\u67e5\u8be2\u7ea7\u522b\u53c2\u6570"},"\u5982\u4f55\u5f00\u542f\u67e5\u8be2\u7ea7\u522b\u53c2\u6570"),(0,l.yg)("p",null,"\u5f00\u542f\u4f18\u5316\u5668\u4f1a\u81ea\u52a8\u8d70\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b\u3002\u901a\u8fc7\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_optimizer=1"),"\uff0c\u6216\u8005 ",(0,l.yg)("inlineCode",{parentName:"p"},"dialect_type='ANSI'")," \u53ef\u4ee5\u5f00\u542f\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u786e\u5b9a\u7edf\u8ba1\u4fe1\u606f\u5b58\u5728")),(0,l.yg)("p",null,"\u6ca1\u6709\u7edf\u8ba1\u4fe1\u606f\uff0c\u751f\u6210\u7684\u67e5\u8be2\u8ba1\u5212\u4e0d\u662f\u6700\u4f18\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"show stats [<db_name>.]<table_name>")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5206\u6790\u8ba1\u5212\u6bcf\u4e00\u4e2a Step \u7684\u8017\u65f6")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"explain analyze sql")," \u53ef\u4ee5\u663e\u793a\u6bcf\u4e00\u4e2a Step \u7684\u8017\u65f6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u53c2\u6570\u8c03\u4f18")),(0,l.yg)("p",null,"ByteHouse \u652f\u6301\u67e5\u8be2\u7ea7\u522b\u7684\u53c2\u6570\u8c03\u4f18\uff0c\u53c2\u6570\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u67e5\u8be2\u5206\u522b\u8fdb\u884c\u8bbe\u7f6e\u3002\u4e0e Exchange \u7b97\u5b50\u76f8\u5173\u7684\u53c2\u6570\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u884c\u8bbe\u7f6e\uff0c\u901a\u8fc7\u5173\u952e\u5b57",(0,l.yg)("inlineCode",{parentName:"p"},"SETTINGS")," \u4e3a\u67e5\u8be2\u6307\u5b9a\u53c2\u6570\u503c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT 1 SETTINGS TEST_KNOB=1;\n")),(0,l.yg)("p",null,"\u5f53\u6267\u884c\u6b64 SQL \u8bed\u53e5\u65f6\uff0c\u53c2\u6570 TEST_KNOB \u5c06\u88ab\u5f3a\u5236\u8bbe\u7f6e\u4e3a 1\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8bbe\u7f6e\u53c2\u6570\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u67e5\u8be2\u7684\u53c2\u6570\u503c\u3002"),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c55\u793a\u4e86\u4e00\u4e9b\u5bf9\u6027\u80fd\u6709\u91cd\u8981\u5f71\u54cd\u7684\u67e5\u8be2\u7ea7\u522b\u53c2\u6570\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Exchange \u7b97\u5b50\u8d1f\u8d23 PlanSegment \u4e4b\u95f4\u7684\u6570\u636e\u4f20\u8f93\u3002")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," \u5f71\u54cd pipeline \u6267\u884c\u7684\u603b\u7ebf\u7a0b\u6570\u76ee\uff0c\u5c24\u5176\u662f\u975e source \u7684 pipeline(\u6307\u76f4\u63a5\u4ece\u5b58\u50a8\u8bfb\u53d6\u6570\u636e\u7684 pipeline)\uff0c\u76ee\u524d\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a CPU \u6838\u6570\uff0c\u76ee\u524d\u5e76\u6ca1\u6709\u4e00\u4e2a\u7406\u60f3\u63a8\u8350\u503c\uff0c\u53ef\u4ee5\u8003\u8651/2 \u6216\u8005","*","2 \u89c2\u5bdf\u7ed3\u679c\u3002\u5982\u679c\u67e5\u8be2\u5185\u5b58\u5360\u7528\u8f83\u5927\uff0c\u53ef\u4ee5\u8c03\u5c0f\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_timeout_ms")," Exhange \u8d85\u65f6\u65f6\u95f4\uff08ms\uff09\uff0c\u9ed8\u8ba4\u4e3a 100s\uff0c\u5982\u679c\u51fa\u73b0 Exchange \u76f8\u5173\u8d85\u65f6\u62a5\u9519\u53ef\u4ee5\u9002\u5f53\u8c03\u5927\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," \u5f71\u54cd Exchange \u8f93\u51fa\u6570\u636e\u7684\u5e76\u53d1\u80fd\u529b\uff0c\u9ed8\u8ba4\u4e3a 8\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8c03\u6574\u3002\u5982\u679c exchange_source_pipeline_threads \u8c03\u6574\u6bd4\u8f83\u5927\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927 exchange_unordered_output_parallel_size\uff0c\u589e\u52a0\u4e0a\u6e38\u8f93\u51fa\u80fd\u529b\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_enable_block_compress")," \u662f\u5426\u5f00\u542f Exchange \u538b\u7f29\uff0c\u9ed8\u8ba4\u5f00\u542f\uff0c\u5982\u679c CPU \u74f6\u9888\u6bd4\u7f51\u7edc\u660e\u663e\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5173\u95ed\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_parallel_size")," \u51b3\u5b9a\u4e86\u5355\u5206\u533a\u6570\u636e\u5411\u4e0b\u6e38 shuffle \u7684\u5206\u533a\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u65e0\u9700\u8c03\u6574\u6b64\u503c\u3002\u53ea\u6709\u5728\u672a\u6765\u9700\u8981\u5bf9 Exchange \u8fdb\u884c\u6392\u5e8f\u7684\u573a\u666f\u4e2d\uff0c\u624d\u9700\u8981\u901a\u8fc7\u8c03\u6574 exchange_parallel_size \u6765\u589e\u52a0\u5206\u533a\u6570\u91cf\uff0c\u4ee5\u63d0\u9ad8\u4e0b\u6e38\u7b97\u5b50\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_local_receiver_queue_size")," \u8868\u793a\u672c\u5730 exchange receiver \u7684\u961f\u5217\u5927\u5c0f\u3002\u5b83\u901a\u8fc7\u7b97\u5b50\u7684\u5f02\u6b65\u548c\u7b97\u5b50\u72b6\u6001\u7684\u540c\u6b65\u6765\u5b9e\u73b0\u8f6f\u6d41\u63a7\u5236\u3002\u5b83\u5411 Sender \u53d1\u9001\u4e24\u4e2a\u4fe1\u53f7\uff0c\u7a7a\u95f2\u548c\u79ef\u538b\u3002Sender \u4f1a\u964d\u4f4e\u79ef\u538b\u6d41\u7684\u4f20\u8f93\u4f18\u5148\u7ea7\uff0c\u5e76\u63d0\u9ad8\u7a7a\u95f2\u6d41\u7684\u4f18\u5148\u7ea7\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_remote_receiver_queue_size")," \u8868\u793a\u8fdc\u7a0b exchange receiver \u7684\u961f\u5217\u5927\u5c0f\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_buffer_send_threshold_in_bytes")," \u9650\u5236\u4e86 Exchange \u5237\u65b0\u53d1\u9001\u7f13\u51b2\u533a\u65f6\u7684\u6700\u5c0f\u5b57\u8282\u6570\uff0c\u5b83\u51b3\u5b9a\u4e86 receiver \u7684\u79ef\u538b\u9608\u503c\u5927\u5c0f\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exchange_buffer_send_threshold_in_row")," \u9650\u5236\u4e86 Exchange \u5237\u65b0\u53d1\u9001\u7f13\u51b2\u533a\u65f6\u7684\u6700\u5c0f\u884c\u6570\uff0c\u5b83\u51b3\u5b9a\u4e86 receiver \u7684\u79ef\u538b\u9608\u503c\u5927\u5c0f\u3002"),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6709\u4e00\u4e9b\u53c2\u6570\u65e2\u53ef\u4ee5\u5bf9\u6574\u4e2a\u6570\u636e\u5e93\u751f\u6548\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u5355\u4e2a\u67e5\u8be2\u751f\u6548\u3002")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_threads")," \u9650\u5236\u4e86\u6267\u884c\u8bf7\u6c42\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u91cf\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u662f\u81ea\u52a8\u786e\u5b9a\u7684\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_block_size")," \u9650\u5236\u4e86\u8bfb\u53d6\u7684\u6700\u5927\u5757\u5927\u5c0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u662f 65536\u3002"),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u8def\u7531\u76f8\u5173\u7684\u53c2\u6570\u901a\u5e38\u7528\u4e8e\u786e\u5b9a\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6570\u636e\u7684\u5b58\u50a8\u548c\u8bbf\u95ee\u8def\u5f84\u3002")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"group_by_two_level_threshold")," \u8868\u793a\u4ece\u591a\u5c11\u4e2a\u952e\u5f00\u59cb\u8fdb\u884c\u4e24\u7ea7\u805a\u5408\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"group_by_two_level_threshold_bytes")," \u8868\u793a\u4ece\u805a\u5408\u72b6\u6001\u8fbe\u5230\u591a\u5c11\u5b57\u8282\u65f6\uff0c\u5f00\u59cb\u4f7f\u7528\u4e24\u7ea7\u805a\u5408\u3002"),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"runtime filter \u65e8\u5728\u4e3a\u67d0\u4e9b\u8fde\u63a5\u67e5\u8be2\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u751f\u6210\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4ee5\u51cf\u5c11\u626b\u63cf\u7684\u6570\u636e\u91cf\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684 I/O \u548c\u7f51\u7edc\u4f20\u8f93\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e0e runtime filter \u76f8\u5173\u7684\u53c2\u6570\u3002")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"runtime_filter_min_filter_rows")," \u9650\u5236\u4e86\u542f\u7528 runtime filter \u7684\u6700\u5c0f\u884c\u6570\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"runtime_filter_bloom_build_threshold")," \u9650\u5236\u4e86\u6784\u5efa bloom filter \u7684\u53f3\u8868\u7684\u9608\u503c\u3002"))}c.isMDXComponent=!0},9209:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/complex-query-model-9adadd60bf95fe79b67512fe58018575.png"}}]);