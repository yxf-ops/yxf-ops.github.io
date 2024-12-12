"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5209],{8860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(t),g=o,d=y["".concat(c,".").concat(g)]||y[g]||p[g]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[y]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(5890),o=(t(7953),t(8860));const i={title:"\u96c6\u7fa4\u5347\u964d\u7ea7",sidebar_position:4,tags:["Docs"]},a="\u96c6\u7fa4\u5347\u964d\u7ea7",l={unversionedId:"deployment/upgrade",id:"deployment/upgrade",title:"\u96c6\u7fa4\u5347\u964d\u7ea7",description:"\u5347\u7ea7\u57fa\u4e8eS3\u5b58\u50a8\u7684\u96c6\u7fa4\uff08\u4ec5\u9002\u75280.2.0\u4e4b\u524d\u7684\u7248\u672c\uff09",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/04-upgrade.mdx",sourceDirName:"deployment",slug:"/deployment/upgrade",permalink:"/zh-cn/docs/deployment/upgrade",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/04-upgrade.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u96c6\u7fa4\u5347\u964d\u7ea7",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u7269\u7406\u673a\u90e8\u7f72",permalink:"/zh-cn/docs/deployment/package-deployment"},next:{title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",permalink:"/zh-cn/docs/deployment/deployment-settings"}},c={},s=[{value:"\u5347\u7ea7\u57fa\u4e8eS3\u5b58\u50a8\u7684\u96c6\u7fa4\uff08\u4ec5\u9002\u75280.2.0\u4e4b\u524d\u7684\u7248\u672c\uff09",id:"\u5347\u7ea7\u57fa\u4e8es3\u5b58\u50a8\u7684\u96c6\u7fa4\u4ec5\u9002\u7528020\u4e4b\u524d\u7684\u7248\u672c",level:2}],u={toc:s},y="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(y,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u96c6\u7fa4\u5347\u964d\u7ea7"},"\u96c6\u7fa4\u5347\u964d\u7ea7"),(0,o.yg)("h2",{id:"\u5347\u7ea7\u57fa\u4e8es3\u5b58\u50a8\u7684\u96c6\u7fa4\u4ec5\u9002\u7528020\u4e4b\u524d\u7684\u7248\u672c"},"\u5347\u7ea7\u57fa\u4e8eS3\u5b58\u50a8\u7684\u96c6\u7fa4\uff08\u4ec5\u9002\u75280.2.0\u4e4b\u524d\u7684\u7248\u672c\uff09"),(0,o.yg)("p",null,"\u5728S3\u7684\u9884\u89c8\u7248\u672c\uff08\u4ecepre 0.2.0\u7248\u672c\u52300.2.0\u7248\u672c\uff09\u4e4b\u540e\uff0c\u4e00\u4e9bS3\u5bf9\u8c61\u952e\uff08object key\uff09\u548cS3\u5143\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u6765\u4ece\u65e7\u7248\u672c\u8fdb\u884c\u8fc1\u79fb\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u65e7\u7248\u672c\u7684ByConity\uff080.2.0\u7248\u672c\u4e4b\u524d\uff09\uff0c\u4e14\u6570\u636e\u5b58\u50a8\u5728S3\u4e2d\u65f6\u624d\u4f7f\u7528\u8fd9\u4e9b\u5de5\u5177\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u505c\u6b62ByConity\u96c6\u7fa4")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# stop the cluster\n\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u63d0\u4f9b\u7684\u5de5\u5177\u8fc1\u79fbS3\u6570\u636e")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528docker\u8fd0\u884cByConity\uff0c\u53ef\u4ee5\u767b\u5f55\u5230\u670d\u52a1\u5668/\u5de5\u4f5c\u8282\u70b9\u5e76\u4f7f\u7528ps\u547d\u4ee4\u627e\u5230clickhouse\u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"./clickhouse s3-rename --s3_ak_id ${S3_AK_ID} --s3_ak_secret ${S3_AK_SECRET} --from_bucket ${BYCONITY_S3_BUCKET} --s3_endpoint ${S3_ENDPOINT} --s3_region ${S3_REGION} --root_prefix ${BYCONTIY_DATA_PREFIX}\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528docker\u5305\u88c5\u8fd0\u884cByConity")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --network host --name byconity-s3-sanitizer byconity/byconity:0.2.0 clickhouse s3-rename --s3_ak_id ${S3_AK_ID} --s3_ak_secret ${S3_AK_SECRET} --from_bucket ${BYCONITY_S3_BUCKET} --s3_endpoint ${S3_ENDPOINT} --s3_region ${S3_REGION} --root_prefix ${BYCONTIY_DATA_PREFIX}\n\n```sh\n\n| tool arguments    |  explanation|\n| -------- | ------- |\n| s3_ak_id | s3 access key id which byconity is using |\n| s3_ak_secret| s3 secret access key which byconity is using|\n| s3_region| s3 region which byconity is using|\n| s3_endpoin| s3 endpoint which byconity is using|\n| from_bucket| s3 bucket name which byconity is using|\n| root_prefix| s3 object prefix which byconity is using|\n| thread_number| using how many threads, default to 1 thread|\n| need_delete| whether delete origin file, default true|\n| uuid_check| whether check uuid is valid or not, default true|\n| enable_logging| whether enable logging output|\n| logging_level| logging level, default is debug output|\n\n3. \u4f7f\u7528\u63d0\u4f9b\u7684\u5de5\u5177\u8fc1\u79fbS3\u5143\u6570\u636e\n\n  - \u5982\u679c\u60a8\u77e5\u9053clickhouse\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u4f4d\u7f6e\n\n```sh\n./clickhouse s3-meta-sanitizer -C cnch_config.xml\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528docker\u5305\u88c5\u8fd0\u884cByConity")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --network host --name byconity-s3-sanitizer byconity/byconity:0.2.0 clickhouse s3-meta-sanitizer --config-file /root/app/config/cnch_config.xml\n\n")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"tool arguments"),(0,o.yg)("th",{parentName:"tr",align:null},"explanation"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"C"),(0,o.yg)("td",{parentName:"tr",align:null},"specify config file from ",(0,o.yg)("inlineCode",{parentName:"td"},"cnch_config")," configuration field in your bycontiy server configuration file")))),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"\u91cd\u542fByConity\u96c6\u7fa4")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# restart the cluster\n\n")))}p.isMDXComponent=!0}}]);