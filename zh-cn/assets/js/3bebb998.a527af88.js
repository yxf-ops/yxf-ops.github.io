"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9857],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var l=n(7953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,g=u["".concat(s,".").concat(v)]||u[v]||d[v]||r;return n?l.createElement(g,i(i({ref:t},p),{},{components:n})):l.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(5890),a=(n(7953),n(8860));const r={title:"\u5916\u90e8\u8868",sidebar_position:1,tags:["Docs"]},i="\u5916\u90e8\u8868",o={unversionedId:"data-lakes/hive-external-table",id:"data-lakes/hive-external-table",title:"\u5916\u90e8\u8868",description:"CnchHive",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-lakes/hive-external-table.mdx",sourceDirName:"data-lakes",slug:"/data-lakes/hive-external-table",permalink:"/zh-cn/docs/data-lakes/hive-external-table",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-lakes/hive-external-table.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u5916\u90e8\u8868",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"ELT\u80fd\u529b\u4ecb\u7ecd",permalink:"/zh-cn/docs/elt/elt-introduction"},next:{title:"External Catalog",permalink:"/zh-cn/docs/data-lakes/hive-external-catalog"}},s={},c=[{value:"CnchHive",id:"cnchhive",level:2},{value:"\u5efa\u8868\u793a\u4f8b",id:"\u5efa\u8868\u793a\u4f8b",level:3},{value:"\u8868\u7684\u53c2\u6570\u8bbe\u7f6e",id:"\u8868\u7684\u53c2\u6570\u8bbe\u7f6e",level:3},{value:"\u914d\u7f6e HDFS hive table \u4e3e\u4f8b",id:"\u914d\u7f6e-hdfs-hive-table-\u4e3e\u4f8b",level:4},{value:"\u914d\u7f6e S3 hive table \u4e3e\u4f8b",id:"\u914d\u7f6e-s3-hive-table-\u4e3e\u4f8b",level:4},{value:"Disk \u7f13\u5b58\u914d\u7f6e",id:"disk-\u7f13\u5b58\u914d\u7f6e",level:3},{value:"\u67e5\u8be2\u8bbe\u7f6e",id:"\u67e5\u8be2\u8bbe\u7f6e",level:3},{value:"\u78c1\u76d8\u7f13\u5b58\u6a21\u5f0f",id:"\u78c1\u76d8\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"\u4f7f\u7528 hive_metastore_filter",id:"\u4f7f\u7528-hive_metastore_filter",level:4},{value:"\u4f7f\u7528 hive_partition_filter",id:"\u4f7f\u7528-hive_partition_filter",level:3},{value:"\u4f7f\u7528 hive_split_level_filter",id:"\u4f7f\u7528-hive_split_level_filter",level:4},{value:"\u8868\u529f\u80fd",id:"\u8868\u529f\u80fd",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5916\u90e8\u8868"},"\u5916\u90e8\u8868"),(0,a.yg)("h2",{id:"cnchhive"},"CnchHive"),(0,a.yg)("p",null,"CnchHive \u662f ByConity \u7814\u53d1\u7684\u8868\u5f15\u64ce\uff0c\u652f\u6301\u5916\u90e8\u8868\u8054\u5408\u67e5\u8be2\uff0c\u7528\u6237\u65e0\u9700\u5bfc\u5165\u6570\u636e\u5373\u53ef\u76f4\u63a5\u52a0\u901f\u6570\u636e\u67e5\u8be2\u3002CnchHive \u652f\u6301\u67e5\u8be2\u5b58\u50a8\u5728 HDFS \u548c S3 \u7684\u6570\u636e\u3002\u5b83\u76ee\u524d\u652f\u6301\u67e5\u8be2\u4ee5 Parquet \u548c ORC \u683c\u5f0f\u5b58\u50a8\u7684 Hive \u6570\u636e\u6587\u4ef6\u3002"),(0,a.yg)("h3",{id:"\u5efa\u8868\u793a\u4f8b"},"\u5efa\u8868\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]hive_ext\nENGINE = CnchHive('thrift://127.0.0.1:9083', 'hive_db', 'hive_table')\n[SETTING vw_default = '']\n")),(0,a.yg)("p",null,"\u8868\u7684\u4fe1\u606f\u65e2\u80fd\u81ea\u52a8\u4ecehive\u7684\u5143\u6570\u636e\u4e2d\u5bfc\u5165\u53c8\u80fd\u624b\u52a8\u6307\u5b9a\u5177\u4f53\u7684\u5217\u540d\u5373\u5176\u7c7b\u578b\u3002"),(0,a.yg)("h3",{id:"\u8868\u7684\u53c2\u6570\u8bbe\u7f6e"},"\u8868\u7684\u53c2\u6570\u8bbe\u7f6e"),(0,a.yg)("p",null,"CnchHive \u5141\u8bb8\u901a\u8fc7\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u7684\u503c\u6765\u8bbe\u7f6e\u8868\uff0c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n  <hive>\n    <vw_default>vw_default</vw_default>\n  </hive>\n</yandex>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"vw_default: \u7528\u6765\u6267\u884c\u67e5\u8be2\u7684\u865a\u62df\u8868"),(0,a.yg)("li",{parentName:"ul"},"hdfs_fs: hdfs namenode\u7684 url."),(0,a.yg)("li",{parentName:"ul"},"endpoint: S3 \u7684enpoint"),(0,a.yg)("li",{parentName:"ul"},"region: S3 \u7684region"),(0,a.yg)("li",{parentName:"ul"},"ak_id: S3 access key \u5bc6\u94a5\u540d"),(0,a.yg)("li",{parentName:"ul"},"ak_secret: S3 secret key \u5bc6\u94a5\u5185\u5bb9")),(0,a.yg)("h4",{id:"\u914d\u7f6e-hdfs-hive-table-\u4e3e\u4f8b"},"\u914d\u7f6e HDFS hive table \u4e3e\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<hive>\n  <hdfs_fs>hdfs://127.0.0.1:9010</hdfs_fs>\n</hive>\n")),(0,a.yg)("h4",{id:"\u914d\u7f6e-s3-hive-table-\u4e3e\u4f8b"},"\u914d\u7f6e S3 hive table \u4e3e\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<hive>\n  <endpoint>http://127.0.0.1:9000</endpoint>\n  <ak_id>id</ak_id>\n  <ak_secret>secret</ak_secret>\n</hive>\n")),(0,a.yg)("h3",{id:"disk-\u7f13\u5b58\u914d\u7f6e"},"Disk \u7f13\u5b58\u914d\u7f6e"),(0,a.yg)("p",null,"\u628a\u4e0b\u9762\u914d\u7f6e\u52a0\u5230 ",(0,a.yg)("strong",{parentName:"p"},"worker.xml")," \u4e2d\u6253\u5f00\u7f13\u5b58\u529f\u80fd"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n  <disk_cache_strategies>\n    <Hive>\n      <disk_cache_dir>hive</disk_cache_dir>\n    </Hive>\n  </disk_cache_strategies>\n</yandex>\n")),(0,a.yg)("h3",{id:"\u67e5\u8be2\u8bbe\u7f6e"},"\u67e5\u8be2\u8bbe\u7f6e"),(0,a.yg)("h3",{id:"\u78c1\u76d8\u7f13\u5b58\u6a21\u5f0f"},"\u78c1\u76d8\u7f13\u5b58\u6a21\u5f0f"),(0,a.yg)("p",null,"\u662f\u5426\u5728 SELECT \u67e5\u8be2\u4e2d\u4f7f\u7528\u78c1\u76d8\u7f13\u5b58\u3002\u53ef\u80fd\u7684\u503c\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"AUTO - \u5f53\u78c1\u76d8\u7f13\u5b58\u53ef\u7528\u65f6\u4f7f\u7528\u3002"),(0,a.yg)("li",{parentName:"ul"},"SKIP_DISK_CACHE - \u4e0d\u4f7f\u7528\u78c1\u76d8\u7f13\u5b58\u3002")),(0,a.yg)("p",null,"\u5982\u679c\u7f13\u5b58\u672a\u547d\u4e2d\uff0cHive \u6587\u4ef6\u5c06\u5728\u540e\u53f0\u88ab\u7f13\u5b58\u3002"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u503c\uff1aAUTO"),(0,a.yg)("h4",{id:"\u4f7f\u7528-hive_metastore_filter"},"\u4f7f\u7528 hive_metastore_filter"),(0,a.yg)("p",null,"\u5982\u679c\u542f\u7528\uff0cCnchHive \u5c06\u68c0\u67e5\u67e5\u8be2\u662f\u5426\u5305\u542b\u53ef\u4f20\u9012\u7ed9 Hive metastore\u4ee5\u9650\u5236\u5206\u533a\u7684\u5206\u533a\u952e\u6761\u4ef6\u3002Hive metastore\u5c06\u6839\u636e\u6761\u4ef6\u8fd4\u56de\u8fc7\u6ee4\u540e\u7684\u5206\u533a\u5217\u8868\u3002Hive metastore\u53ea\u80fd\u8bc6\u522b\u7b80\u5355\u6761\u4ef6\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"# d\u5217\u662fhive\u7684\u5206\u533a\u952e\n# d=1/, d=2/, d=3/\n\nSELECT * FROM hive_ext WHERE d = 1\n# Hive metastore \u53ea\u8fd4\u56de d=1/ \u7684\u5206\u533a\n")),(0,a.yg)("p",null,"\u9ed8\u8ba4\u503c: true"),(0,a.yg)("h3",{id:"\u4f7f\u7528-hive_partition_filter"},"\u4f7f\u7528 hive_partition_filter"),(0,a.yg)("p",null,"\u5982\u679c\u542f\u7528\uff0cCnchHive \u5c06\u8fdb\u4e00\u6b65\u5bf9 Hive \u5143\u6570\u636e\u5b58\u50a8\u8fd4\u56de\u7684\u5206\u533a\u5217\u8868\u8fdb\u884c\u5206\u533a\u8fc7\u6ee4\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"# d\u5217\u662f Hive \u5206\u533a\u952e\uff0cHive \u6709\u5206\u533a\n# d=20220203/, d=20220204/, d=20220205/\n\nSELECT * FROM hive_ext WHERE toDate(d) = '2022-02-03'\n\n# Hive metastore\u5c06\u8fd4\u56de\u6240\u6709\u4e09\u4e2a\u5206\u533a\uff0cCnchHive \u5c06\u8fdb\u884c\u5206\u533a\u8fc7\u6ee4\u3002\u6700\u540e\u53ea\u6709\u5206\u533a d=20220203/ \u5c06\u88ab\u8bfb\u53d6\u3002\n")),(0,a.yg)("p",null,"\u9ed8\u8ba4\u503c: true"),(0,a.yg)("h4",{id:"\u4f7f\u7528-hive_split_level_filter"},"\u4f7f\u7528 hive_split_level_filter"),(0,a.yg)("p",null,"Parquet and ORC files have index data for each row group/stripe. If enabled, CnchHive will filter row groups/stripes."),(0,a.yg)("p",null,"Parquet \u548c ORC \u6587\u4ef6\u5bf9\u6bcf\u4e2arow group/stripe\u90fd\u6709\u7d22\u5f15\u6570\u636e\u3002\u5982\u679c\u542f\u7528\uff0cCnchHive \u5c06\u8fc7\u6ee4 row group/stripe\u3002"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u503c: false"),(0,a.yg)("h3",{id:"\u8868\u529f\u80fd"},"\u8868\u529f\u80fd"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM hive('thrift://127.0.0.1', 'hive_db', 'hive_table)\n")),(0,a.yg)("p",null,"\u65e0\u9700\u663e\u5f0f\u521b\u5efa\u8868\u5373\u53ef\u67e5\u8be2 Hive \u8868\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hiveMetadata('thrift://127.0.0.1', 'hive_db', 'hive_table')\n")),(0,a.yg)("p",null,"\u4ece Hive \u5143\u6570\u636e\u5b58\u50a8\u8fd4\u56de Hive \u8868\u7684\u5b58\u50a8\u63cf\u8ff0\u3002"))}d.isMDXComponent=!0}}]);