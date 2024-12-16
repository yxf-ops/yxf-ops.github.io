"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3405],{8860:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(7953);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),y=s(a),g=o,u=y["".concat(i,".").concat(g)]||y[g]||c[g]||r;return a?t.createElement(u,l(l({ref:n},p),{},{components:a})):t.createElement(u,l({ref:n},p))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=g;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[y]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7818:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var t=a(5890),o=(a(7953),a(8860));const r={title:"\u7269\u7406\u673a\u90e8\u7f72",sidebar_position:3,tags:["Docs"]},l="\u7269\u7406\u673a\u90e8\u7f72",d={unversionedId:"deployment/package-deployment",id:"deployment/package-deployment",title:"\u7269\u7406\u673a\u90e8\u7f72",description:"\u76ee\u524d\u5728\u7269\u7406\u673a\u4e0a\u5b89\u88c5 ByConity \u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\uff0c\u4f8b\u5982\u4e3a Debian OS \u5b89\u88c5 Debian \u8f6f\u4ef6\u5305\uff0c\u4e3a Centos OS \u5b89\u88c5 rpm \u8f6f\u4ef6\u5305\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/03-package-deployment.mdx",sourceDirName:"deployment",slug:"/deployment/package-deployment",permalink:"/zh-cn/docs/deployment/package-deployment",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/03-package-deployment.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u7269\u7406\u673a\u90e8\u7f72",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u4e8eKubernetes\u96c6\u7fa4\u90e8\u7f72",permalink:"/zh-cn/docs/deployment/deployment-with-k8s"},next:{title:"\u96c6\u7fa4\u5347\u964d\u7ea7",permalink:"/zh-cn/docs/deployment/upgrade"}},i={},s=[{value:"\u5b89\u88c5 FoundationDB",id:"\u5b89\u88c5-foundationdb",level:2},{value:"\u5b89\u88c5 HDFS",id:"\u5b89\u88c5-hdfs",level:2},{value:"\u5b89\u88c5 FoundationDB \u5ba2\u6237\u7aef",id:"\u5b89\u88c5-foundationdb-\u5ba2\u6237\u7aef",level:2},{value:"\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305",id:"\u90e8\u7f72-byconity-\u8f6f\u4ef6\u5305",level:2},{value:"\u5b89\u88c5\u8f6f\u4ef6\u5305",id:"\u5b89\u88c5\u8f6f\u4ef6\u5305",level:3},{value:"\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u793a\u4f8b",id:"\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u793a\u4f8b",level:4},{value:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u542f\u52a8\u7a0b\u5e8f",id:"\u542f\u52a8\u7a0b\u5e8f",level:3}],p={toc:s},y="wrapper";function c(e){let{components:n,...a}=e;return(0,o.yg)(y,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u7269\u7406\u673a\u90e8\u7f72"},"\u7269\u7406\u673a\u90e8\u7f72"),(0,o.yg)("p",null,"\u76ee\u524d\u5728\u7269\u7406\u673a\u4e0a\u5b89\u88c5 ByConity \u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\uff0c\u4f8b\u5982\u4e3a Debian OS \u5b89\u88c5 Debian \u8f6f\u4ef6\u5305\uff0c\u4e3a Centos OS \u5b89\u88c5 rpm \u8f6f\u4ef6\u5305\u3002\n\u7531\u4e8e ByConity \u4f7f\u7528 FoundationDB \u4f5c\u4e3a\u5143\u5b58\u50a8\uff0c\u4f7f\u7528 HDFS \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u3002\u56e0\u6b64\uff0c\u5728\u5f00\u59cb\u90e8\u7f72 ByConity \u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u90e8\u7f72 FoundationDB \u548c HDFS\u3002\u6b65\u9aa4\u662f\u9996\u5148\u5b89\u88c5 FoundationDB\uff08FDB\uff09\uff0c\u7136\u540e\u5b89\u88c5 HDFS\uff0c\u6700\u540e\u518d\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305\uff0c\u5177\u4f53\u8bf4\u660e\u5982\u4e0b\u3002"),(0,o.yg)("h2",{id:"\u5b89\u88c5-foundationdb"},"\u5b89\u88c5 FoundationDB"),(0,o.yg)("p",null,"\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u5728 3 \u53f0\u7269\u7406\u673a\u4e0a\u8bbe\u7f6e Foundation DB \u96c6\u7fa4\u3002\u5b83\u4eec\u90fd\u4f7f\u7528 debian \u64cd\u4f5c\u7cfb\u7edf\u3002\u53c2\u8003\u4e86\u5b98\u65b9\u6307\u5357\uff1a",(0,o.yg)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/getting-started-linux.html"},"\u5728 Linux \u4e0a\u5165\u95e8")," \u548c ",(0,o.yg)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/building-cluster.html"},"\u6784\u5efa\u4e00\u4e2a\u96c6\u7fa4"),"\u3002"),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/"},"\u5b98\u65b9\u4e0b\u8f7d"),"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fdb\u884c\u5b89\u88c5\u3002\u5982\u679c\u56fd\u5185\u8bbf\u95ee\u8f83\u6162\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u56fd\u5185\u4e0b\u8f7d\u5730\u5740\u3002\u5206\u522b\u4e0b\u8f7d ",(0,o.yg)("strong",{parentName:"p"},"server"),"\uff0c",(0,o.yg)("strong",{parentName:"p"},"monitor")," \u548c ",(0,o.yg)("strong",{parentName:"p"},"cli")," \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,o.yg)("strong",{parentName:"p"},"sha256")," \u6821\u9a8c\u548c\u6587\u4ef6\uff08\u6211\u4eec\u4ee5\u7248\u672c ",(0,o.yg)("strong",{parentName:"p"},"7.1.25"),"\u4e3a\u4f8b\uff09\u3002\n\u5728\u672c\u5730\u521b\u5efa ",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb/bin")," \u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u4e0b\u8f7d\u5b89\u88c5\u6587\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"curl -L -o fdbserver.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64\ncurl -L -o fdbserver.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64.sha256\n\ncurl -L -o fdbmonitor.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64\ncurl -L -o fdbmonitor.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64.sha256\n\ncurl -L -o fdbcli.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64\ncurl -L -o fdbcli.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64.sha256\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u56fd\u5185\u4e0b\u8f7d\u5730\u5740")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"https://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbcli.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbmonitor.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbserver.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/foundationdb-clients-7.1.25-1.el7.x86_64.rpm\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/foundationdb-clients_7.1.25-1_amd64.deb\n")),(0,o.yg)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u68c0\u67e5\u6821\u9a8c\u7801\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ sha256sum --binary fdbserver.x86_64\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7 *fdbserver.x86_64\n\n$ cat fdbserver.x86_64.sha256\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7  fdbserver.x86_64\n")),(0,o.yg)("p",null,"\u91cd\u547d\u540d\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\uff0c\u5220\u9664\u591a\u4f59\u6587\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"rm *.sha256\nmv fdbcli.x86_64 fdbcli\nmv fdbmonitor.x86_64 fdbmonitor\nmv fdbserver.x86_64 fdbserver\nchmod ug+x fdbcli fdbmonitor fdbserver\n")),(0,o.yg)("p",null,"\u521b\u5efa\u6587\u4ef6\u5939\u7528\u4ee5\u5b58\u50a8\u914d\u7f6e\u3001\u6570\u636e\u548c\u65e5\u5fd7\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/fdb_runtime/config\nmkdir -p /<your_directory>/fdb_runtime/data\nmkdir -p /<your_directory>/fdb_runtime/logs\n")),(0,o.yg)("p",null,"\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"/<your_directory>/fdb_runtime/config/"),"\u6587\u4ef6\u5939\u4e0b\u521b\u5efa",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb.conf"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/foundationdb.conf\n[fdbmonitor]\nuser = root\n\n[general]\ncluster-file = /<your_directory>/fdb_runtime/config/fdb.cluster\nrestart-delay = 60\n\n[fdbserver]\n\ncommand = /<your_directory>/foundationdb/bin/fdbserver\ndatadir = /<your_directory>/fdb_runtime/data/$ID\nlogdir = /<your_directory>/fdb_runtime/logs/\npublic-address = auto:$ID\nlisten-address = public\n\n\n[fdbserver.4500]\nclass=stateless\n[fdbserver.4501]\nclass=transaction\n[fdbserver.4502]\nclass=storage\n[fdbserver.4503]\nclass=stateless\n")),(0,o.yg)("p",null,"\u5728\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u540d\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.cluster\n\n# <your_ip_address> \u6362\u6210\u672c\u5730ip\u5730\u5740\nclusterdsc:test@<your_ip_address>:4500\n")),(0,o.yg)("p",null,"\u5c06 FDB \u5b89\u88c5\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"systemd"),"\u670d\u52a1\u3002\u5728\u540c\u4e00\u6587\u4ef6\u5939\u4e2d\uff0c\u521b\u5efa\u540d\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.service"),"\u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.service\n[Unit]\nDescription=FoundationDB (KV storage for cnch metastore)\n\n[Service]\nRestart=always\nRestartSec=30\nTimeoutStopSec=600\nExecStart=/<your_directory>/foundationdb/bin/fdbmonitor --conffile /<your_directory>/fdb_runtime/config/foundationdb.conf --lockfile /<your_directory>/fdb_runtime/fdbmonitor.pid\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.yg)("p",null,"\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u51c6\u5907\u5de5\u4f5c\u3002\u73b0\u5728\u5c06 FDB \u5b89\u88c5\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"systemd"),"\u4e2d\u3002"),(0,o.yg)("p",null,"\u5c06\u670d\u52a1\u6587\u4ef6\u590d\u5236\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),"\u76ee\u5f55\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"cp fdb.service /etc/systemd/system/\n")),(0,o.yg)("p",null,"\u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\u6587\u4ef6\u4ee5\u5305\u62ec\u65b0\u670d\u52a1\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl daemon-reload\n")),(0,o.yg)("p",null,"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl enable fdb.service\nsystemctl start fdb.service\n")),(0,o.yg)("p",null,"\u68c0\u67e5\u670d\u52a1\u5e76\u67e5\u770b\u5b83\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ systemctl status fdb.service\n  fdb.service - FoundationDB (KV storage for cnch metastore)\n  Loaded: loaded (/etc/systemd/system/fdb.service; disabled; vendor preset: enabled)\n  Active: active (running) since Tue 2023-01-17 18:35:42 CST; 20s ago\n\n")),(0,o.yg)("p",null,"\u73b0\u5728\u5df2\u7ecf\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u5b89\u88c5\u4e86 FDB \u670d\u52a1\uff0c\u91cd\u590d\u76f8\u540c\u7684\u6b65\u9aa4\u5728\u53e6\u5916\u4e24\u53f0\u673a\u5668\u4e0a\u5b89\u88c5 FDB \u670d\u52a1\u3002"),(0,o.yg)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u9700\u8981\u8fde\u63a5\u4e09\u53f0 FDB \u670d\u52a1\u4ee5\u5f62\u6210\u4e00\u4e2a\u96c6\u7fa4\u3002\n\u73b0\u5728\u56de\u5230\u7b2c\u4e00\u53f0\u8282\u70b9\uff0c\u4f7f\u7528 fdbcli \u8fde\u63a5\u5230 FDB\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ ./foundationdb/bin/fdbcli -C fdb_runtime/config/fdb.cluster\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nThe database is unavailable; type `status' for more information.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb>\n")),(0,o.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521d\u59cb\u5316\u6570\u636e\u5e93\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"configure new single ssd\n")),(0,o.yg)("p",null,"\u5c06 3 \u53f0\u673a\u5668\u90fd\u8bbe\u7f6e\u4e3a coordinator\uff0c\u5e76\u5c06\u5730\u5740\u66ff\u6362\u4e3a\u4f60\u7684\u673a\u5668\u5730\u5740\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"coordinators <node_1_ip_address>:4500 <node_2_ip_address>:4500 <node_3_ip_address>:4500\n")),(0,o.yg)("p",null,"\u7136\u540e\u9000\u51fa fdbcli\uff0c\u4f60\u4f1a\u53d1\u73b0",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u6587\u4ef6\u73b0\u5728\u6709\u4e86\u65b0\u5185\u5bb9\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ cat fdb_runtime/config/fdb.cluster\n# DO NOT EDIT!\n# This file is auto-generated, it is not to be edited by hand\nclusterdsc:wwxVEcyLvSiO3BGKxjIw7Sg5d1UTX5ad@example1.host.com:4500,example2.host.com:4500,example3.host.com:4500\n")),(0,o.yg)("p",null,"\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230\u53e6\u5916\u4e24\u53f0\u673a\u5668\u5e76\u66ff\u6362\u65e7\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8 fdb \u670d\u52a1\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl restart fdb.service\n")),(0,o.yg)("p",null,"\u7136\u540e\u8fd4\u56de\u7b2c\u4e00\u53f0\u673a\u5668\uff0c\u518d\u6b21\u4f7f\u7528 fdbcli \u8fde\u63a5\u5230 FDB\uff0c\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5197\u4f59\u6a21\u5f0f\u66f4\u6539\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"double"),"\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"configure double\n")),(0,o.yg)("p",null,"\u7136\u540e\u5728 fdbcli \u4e2d\u6267\u884c",(0,o.yg)("inlineCode",{parentName:"p"},"status"),"\u547d\u4ee4\u4ee5\u67e5\u770b\u7ed3\u679c\uff0c\u4f60\u5e94\u8be5\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u5185\u5bb9\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"fdb> status\n\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - double\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n")),(0,o.yg)("p",null,"\u8bc1\u660e\u4f60\u5b8c\u6210\u4e86 FoundationDB \u670d\u52a1\u5668\u7684\u5b89\u88c5\u3002\u73b0\u5728\u4f60\u62e5\u6709\u4e86",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u6587\u4ef6\u3002\u6211\u4eec\u5c06\u5728 Byconity \u7684\u914d\u7f6e\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,o.yg)("h2",{id:"\u5b89\u88c5-hdfs"},"\u5b89\u88c5 HDFS"),(0,o.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 3 \u53f0\u673a\u5668\u4e0a\u5b89\u88c5 HDFS\uff0c\u5176\u4e2d 1 \u53f0\u673a\u5668\u7528\u4e8e namenode\uff0c\u5176\u4ed6 2 \u53f0\u673a\u5668\u7528\u4e8e datanode\u3002\u8be6\u7ec6\u53c2\u8003\u5b98\u65b9\u6587\u6863",(0,o.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html"},"SingleCluster"),"\u548c",(0,o.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/ClusterSetup.html"},"ClusterSetup"),"\u3002\u6211\u5c06\u5b89\u88c5 HDFS \u7248\u672c 3.3.4\uff0c\u57fa\u4e8e Java-8 \u7248\u672c\u3002"),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u5728 3 \u53f0\u673a\u5668\u4e0a\u5b89\u88c5 Java\u3002\u6709\u5f88\u591a\u5b89\u88c5 Java \u7684\u65b9\u6cd5\uff0c\u8fd9\u91cc\u5c06\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install openjdk-8-jdk\n")),(0,o.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u4e0b\u8f7d\u4e00\u4e2a Hadoop \u53d1\u884c\u7248\uff0c\u53ef\u4ee5\u5728\u5b98\u7f51\u4e0b\u8f7d\uff0c\u6211\u4eec\u540c\u6837\u4e5f\u63d0\u4f9b\u4e86\u56fd\u5185\u5feb\u901f\u4e0b\u8f7d\u5730\u5740\uff0c\u89e3\u538b\u7f29\u5e76\u8fdb\u5165\u8be5\u76ee\u5f55"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ curl -L -o hadoop-3.3.4.tar.gz https://dlcdn.apache.org/hadoop/common/stable/hadoop-3.3.4.tar.gz\n$ tar xvf hadoop-3.3.4.tar.gz\n$ ls\nhadoop-3.3.4  hadoop-3.3.4.tar.gz\n$ cd hadoop-3.3.4\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u56fd\u5185\u4e0b\u8f7d\u5730\u5740")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"https://release-bin.tos-cn-beijing.volces.com/hdfs/3.3.6/hadoop-3.3.6.tar.gz\n")),(0,o.yg)("p",null,"\u7136\u540e\u7f16\u8f91\u6587\u4ef6",(0,o.yg)("inlineCode",{parentName:"p"},"etc/hadoop/hadoop-env.sh"),"\u4ee5\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/usr/lib/jvm/java-8-byteopenjdk-amd64\nexport HADOOP_HOME=/<your_directory>/hdfs/hadoop-3.3.4\nexport HADOOP_LOG_DIR=/<your_directory>/hdfs/logs\n")),(0,o.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u7f16\u8f91\u6587\u4ef6",(0,o.yg)("inlineCode",{parentName:"p"},"etc/hadoop/core-site.xml"),"\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"#value\u6807\u7b7e\u9700\u66ff\u6362\u60a8\u7684namenode\u5730\u5740\u7684\u503c\n\n<configuration>\n        <property>\n                <name>fs.defaultFS</name>\n                <value>hdfs://<your_name_node_ip_address>:12001</value>\n        </property>\n</configuration>\n")),(0,o.yg)("p",null,"\u76ee\u524d\u6240\u6709\u4e09\u53f0\u673a\u5668\u7684\u901a\u7528\u8bbe\u7f6e\u5df2\u7ecf\u5b8c\u6210\uff0c\u4e0b\u9762\u9488\u5bf9 namenode \u548c datanode \u7684\u505a\u4e0d\u540c\u7684\u914d\u7f6e\u5b89\u88c5\u3002\n\u9996\u5148\u5728 namenode \u7684\u8282\u70b9\u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u5305\u542b datanode \u5217\u8868\u7684\u6587\u4ef6\u3002\u4f8b\u5982",(0,o.yg)("inlineCode",{parentName:"p"},"datanodes_list.txt"),"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"$ cat /root/user_xyz/hdfs/datanodes_list.txt\n<datanode_1_address>\n<datanode_2_address>\n")),(0,o.yg)("p",null,"\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u4ee5\u5b58\u50a8 namenode \u8fd0\u884c\u65f6\u6570\u636e"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/hdfs/root_data_path_for_namenode\n")),(0,o.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u7f16\u8f91\u6587\u4ef6",(0,o.yg)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.replication</name>\n                <value>1</value>\n        </property>\n        <property>\n                <name>dfs.namenode.name.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_namenode</value>\n        </property>\n        <property>\n                <name>dfs.hosts</name>\n                <value>/<your_directory>/hdfs/datanodes_list.txt</value>\n        </property>\n\n</configuration>\n")),(0,o.yg)("p",null,"\u5230\u6b64\u5b8c\u6210 namenode \u7684\u914d\u7f6e\uff0c\u63a5\u4e0b\u6765\u914d\u7f6e\u53e6\u5916\u4e24\u4e2a datanode \u8282\u70b9\u3002\n\u9996\u5148\u5728 datanode \u8282\u70b9\u4e0a\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u6765\u5b58\u50a8\u6570\u636e\u8282\u70b9\u7684\u8fd0\u884c\u65f6\u6570\u636e\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /root/user_xyz/hdfs/root_data_path_for_datanode\n")),(0,o.yg)("p",null,"\u63a5\u4e0b\u6765\u7f16\u8f91\u6587\u4ef6",(0,o.yg)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml"),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.data.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_datanode</value>\n        </property>\n</configuration>\n")),(0,o.yg)("p",null,"\u5b8c\u6210\u914d\u7f6e\u540e\uff0c\u518d\u8f6c\u5230 namenode \u8282\u70b9\uff0c\u8fdb\u5165 hadoop \u76ee\u5f55\uff0c\u683c\u5f0f\u5316\u6587\u4ef6\u7cfb\u7edf\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 namenode"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs namenode -format\nbin/hdfs --daemon start namenode\n")),(0,o.yg)("p",null,"\u7136\u540e\u8fdb\u5165\u53e6\u5916\u4e24\u4e2a datanode \u8282\u70b9\uff0c\u8fdb\u5165 hadoop \u76ee\u5f55\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 datanode \u8282\u70b9\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs --daemon start datanode\n")),(0,o.yg)("p",null,"\u5728\u5b8c\u6210\u6574\u4e2a HDFS \u96c6\u7fa4\u7684\u914d\u7f6e\u540e\uff0c\u6211\u4eec\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u6765\u5b58\u50a8\u6570\u636e\u3002 \u8fdb\u5165 namenode \u8282\u70b9\uff0c\u5728 hadoop \u76ee\u5f55\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfs -mkdir -p /user/clickhouse/\nbin/hdfs dfs -chown clickhouse /user/clickhouse\nbin/hdfs dfs -chmod -R 775 /user/clickhouse\n")),(0,o.yg)("p",null,"\u6700\u540e\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u4e0b\u6574\u4e2a hdfs \u7684\u72b6\u6001\uff0c\u67e5\u770b dn \u8282\u70b9\u662f\u5426\u662f active\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfsadmin -report\n")),(0,o.yg)("h2",{id:"\u5b89\u88c5-foundationdb-\u5ba2\u6237\u7aef"},"\u5b89\u88c5 FoundationDB \u5ba2\u6237\u7aef"),(0,o.yg)("p",null,"ByConity \u8f6f\u4ef6\u5305\u90e8\u7f72\u4f9d\u8d56\u4e8e FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u3002FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u4e0e FoundationDB \u670d\u52a1\u5668\u7248\u672c\u7d27\u5bc6\u8026\u5408\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u9009\u62e9\u4e0e FoundationDB \u670d\u52a1\u5668\u7248\u672c\u5339\u914d\u7684\u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u3002\nFoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u53ef\u4ee5\u5728",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"\u5b98\u7f51\u4e0b\u8f7d"),"\uff0c\u672c\u4f8b\u6211\u4eec\u4e0b\u8f7d\u7248\u672c 7.1.27 \u7528\u4e8e Debian OS amd64 \u673a\u5668\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"curl -L -o foundationdb-clients_7.1.27-1_amd64.deb https://github.com/apple/foundationdb/releases/download/7.1.27/foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.yg)("p",null,"\u6267\u884c\u5b89\u88c5\u547d\u4ee4:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.yg)("h2",{id:"\u90e8\u7f72-byconity-\u8f6f\u4ef6\u5305"},"\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305"),(0,o.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305\uff0c\u6211\u4eec\u53d1\u5e03\u5728 ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/releases"},"\u5b98\u65b9\u4e0b\u8f7d")," \u4e2d\u627e\u5230\u5b83\u4eec\u3002\u6216\u8005\u53ef\u4ee5\u81ea\u5df1\u6784\u5efa\u8f6f\u4ef6\u5305\uff0c\u8bf7\u6309\u7167\u6b64 ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/tree/master/docker/packager"},"\u8f6f\u4ef6\u5305\u6784\u5efa\u6307\u5357"),"\u3002"),(0,o.yg)("h3",{id:"\u5b89\u88c5\u8f6f\u4ef6\u5305"},"\u5b89\u88c5\u8f6f\u4ef6\u5305"),(0,o.yg)("p",null,"\u5b89\u88c5 ByConity \u9700\u8981\u7684\u5404\u4e2a\u7ec4\u4ef6\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"VERSION=0.4.3\nARCH=amd64\n\n# \u9996\u5148 `byconity-common-static`\uff0c\u8fd9\u662f\u6240\u6709\u5176\u4ed6\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\ndpkg -i byconity-common-static_${VERSION}_${ARCH}.deb\n\n# \u7136\u540e\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\uff0c\u5b89\u88c5 ByConity \u8d44\u6e90\u7ba1\u7406\u5668\u3001ByConity \u670d\u52a1\u5668\u3001\n# ByConity \u5de5\u4f5c\u5668\u3001ByConity \u5de5\u4f5c\u5668\u5199\u5165\u548c ByConity \u5b88\u62a4\u7a0b\u5e8f\u7ba1\u7406\u5668\u3002\n# `byconity-resource-manager`\u3001`byconity-daemon-manger` \u548c `byconity-tso` \u662f\u8f7b\u91cf\u7ea7\u670d\u52a1\uff0c\n# \u56e0\u6b64\u53ef\u4ee5\u5b89\u88c5\u5728\u5171\u4eab\u673a\u5668\u4e0a\u4e0e\u5176\u4ed6\u8f6f\u4ef6\u5305\u4e00\u8d77\u4f7f\u7528\u3002\n# \u4f46\u662f\uff0c\u5bf9\u4e8e `byconity-server`\u3001`byconity-worker` \u548c `byconity-worker-write`\uff0c\n# \u6211\u4eec\u5e94\u8be5\u5c06\u5b83\u4eec\u5206\u522b\u5b89\u88c5\u5728\u4e0d\u540c\u7684\u673a\u5668\u4e0a\u3002\n\ndpkg -i byconity-tso_${VERSION}_${ARCH}.deb\ndpkg -i byconity-resource-manager_${VERSION}_${ARCH}.deb\ndpkg -i byconity-server_${VERSION}_${ARCH}.deb\ndpkg -i byconity-worker_${VERSION}_${ARCH}.deb\ndpkg -i byconity-worker-write_${VERSION}_${ARCH}.deb\ndpkg -i byconity-daemon-manager_${VERSION}_${ARCH}.deb\n")),(0,o.yg)("h4",{id:"\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u793a\u4f8b"},"\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u793a\u4f8b"),(0,o.yg)("p",null,"\u901a\u5e38\uff0c\u4e00\u9879\u914d\u7f6e\u8981\u4e48\u662f\u4e13\u5c5e\u4e8e\u4e00\u79cd\u7ec4\u4ef6\u7684\uff0c\u8981\u4e48\u662f\u96c6\u7fa4\u5171\u7528\u7684\uff08\u5982 HDFS/FDB \u7684\u8fde\u63a5\u53c2\u6570\uff09\uff0c\n\u56e0\u6b64\u4e0b\u5217\u914d\u7f6e\u6587\u4ef6\u7ec4\u7ec7\u7ed3\u6784\u5c55\u793a\u4e86\u5982\u4f55\u540c\u65f6\u652f\u6301\u4e13\u7528\u914d\u7f6e\u548c\u516c\u5171\u914d\u7f6e\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- /etc/byconity-server/\n  - fdb.cluster\n  - byconity-tso.xml\n  - byconity-server.xml\n  - byconity-worker.xml\n  - byconity-worker-write.xml\n  - conf.d/\n    - xxx.xml\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"fdb.cluster")," \u662f\u5ba2\u6237\u7aef\u8fde\u63a5 FoundationDB \u96c6\u7fa4\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"byconity-{tso,server,worker,worker-write}.xml")," \u5206\u522b\u662f\u5404\u4e2a\u7ec4\u4ef6\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"conf.d/")," \u662f\u4e00\u4e2a\u56fa\u5b9a\u7684\u6587\u4ef6\u5939\u540d\u79f0\uff0c\u7528\u4e8e\u5b58\u653e\u5171\u7528\u914d\u7f6e\u3002\u5bf9\u4e8e ByConity \u6765\u8bf4\uff0c\u5176\u5185\u90e8\u7684\u6240\u6709\u6587\u4ef6\uff08\u6ca1\u6709\u547d\u540d\u65b9\u5f0f\u3001\u6587\u4ef6\u6570\u91cf\u7684\u9650\u5236\uff09\u90fd\u4f1a\u88ab\u81ea\u52a8\u5408\u5e76\n\u5230\u7ec4\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u56e0\u6b64\u8bf8\u5982 ",(0,o.yg)("inlineCode",{parentName:"li"},"<service_discovery/>")," \u4ee5\u53ca ",(0,o.yg)("inlineCode",{parentName:"li"},"<hdfs_nnproxy/>")," \u7b49\u516c\u5171\u914d\u7f6e\u90fd\u63a8\u8350\u5b58\u653e\u5728\u6b64\u5904\u3002")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"cnch_config")," \u7684\u65b9\u5f0f\u5df2\u7ecf\u4e0d\u518d\u5efa\u8bae\u4f7f\u7528\uff0c\u5176\u5185\u5bb9\u53ef\u4ee5\u76f4\u63a5\u8fc1\u79fb\u5230 ",(0,o.yg)("inlineCode",{parentName:"strong"},"conf.d/")," \u4e2d\u3002")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u9664\u4e86 XML \u683c\u5f0f\uff0cByConity \u540c\u6837\u652f\u6301 YAML \u683c\u5f0f\u3002\u5728\u76f8\u4e92\u8f6c\u6362\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u6ce8\u610f XML \u683c\u5f0f\u6709\u4e00\u4e2a\u989d\u5916\u7684\u6700\u5916\u5c42 Tag \u2014\u2014 ",(0,o.yg)("inlineCode",{parentName:"strong"},"<yandex />"),"\u3002")),(0,o.yg)("h3",{id:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"),(0,o.yg)("p",null,"\u4e00\u4e9b\u503c\u5f97\u6ce8\u610f\u7684\u914d\u7f6e\u9879\u5305\u62ec\uff1a"),(0,o.yg)("p",null,"\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"conf.d/")," \u65b0\u5efa\u4efb\u610f ",(0,o.yg)("inlineCode",{parentName:"p"},"XML")," \u6587\u4ef6\uff0c\u914d\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"service_discovery")," \u6807\u7b7e\u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," \u6807\u7b7e\u3002"),(0,o.yg)("p",null,"\u5728 ByConity \u4e2d\uff0c\u7ec4\u4ef6\u4e4b\u95f4\u6709\u4e09\u79cd\u76f8\u4e92\u53d1\u73b0\u7684\u65b9\u5f0f\u3002",(0,o.yg)("inlineCode",{parentName:"p"},"mode")," \u6807\u7b7e\u7528\u4e8e\u6307\u5b9a\u65b9\u5f0f\uff0c\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"local"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"dns")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"consul"),"\u3002\n\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"local")," \u6a21\u5f0f\u4e0b\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u6240\u6709\u7ec4\u4ef6\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\uff0c\u901a\u8fc7\u66ff\u6362\u5360\u4f4d\u7b26 ",(0,o.yg)("inlineCode",{parentName:"p"},"{your_xxx_address}"),"\uff08\u4f8b\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"{your_server_address}"),"\uff09\uff0c\u8be5\u5360\u4f4d\u7b26\u5b9e\u9645\u4e0a\u662f\u7ec4\u4ef6\u7684 IP \u5730\u5740\uff0c\u4f8b\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"10.0.2.72"),"\u3002"),(0,o.yg)("p",null,"\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"local")," \u6a21\u5f0f\u4e0b\uff0c\u670d\u52a1\u4e4b\u95f4\u4e3b\u8981\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"host")," (",(0,o.yg)("inlineCode",{parentName:"p"},"service_discovery > xxx > node[] > host"),") \u6765\u83b7\u53d6\u67d0\u4e2a\u670d\u52a1\u7684\u5177\u4f53\u5730\u5740\u3002\n\u56e0\u6b64\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd\u8be5\u9879\u7684\u503c\uff08\u6bd4\u5982\u53ef\u7528\u4e8e\u5916\u90e8\u8bbf\u95ee\u7684 IP \u6216\u8005\u57df\u540d\uff09\u80fd\u591f\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u3002"),(0,o.yg)("p",null,"\u5bf9\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," \u6807\u7b7e\uff0c\u5305\u542b HDFS \u7684 namenode \u5730\u5740\u3002"),(0,o.yg)("h3",{id:"\u542f\u52a8\u7a0b\u5e8f"},"\u542f\u52a8\u7a0b\u5e8f"),(0,o.yg)("p",null,"\u9996\u5148\u542f\u52a8 TSO\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-tso\n")),(0,o.yg)("p",null,"\u4e5f\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 TSO \u72b6\u6001\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl status byconity-tso\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u4e0b\u6b21\u518d\u6b21\u5b89\u88c5\u8be5\u8f6f\u4ef6\u5305\uff08\u5982\u5347\u7ea7\uff09\uff0c\u5219\u65e0\u9700\u6267\u884c ",(0,o.yg)("inlineCode",{parentName:"em"},"start")," \u547d\u4ee4")),(0,o.yg)("p",null,"\u7136\u540e\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u542f\u52a8\u5404\u4e2a\u7ec4\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-server // \u4ee5\u53cabyconity-worker\u3001byconity-resource-manager\u3001byconity-daemon-manager\n")),(0,o.yg)("p",null,"\u67e5\u770b\u5404\u7ec4\u4ef6\u542f\u52a8\u72b6\u6001\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"systemctl status \uff5c grep byconity-\n")),(0,o.yg)("p",null,"\u901a\u8fc7\u540c\u6837\u7684\u65b9\u5f0f\u5b89\u88c5\u66f4\u591a\u7684\u5de5\u4f5c\u8282\u70b9\u3002\u6bcf\u4e2a\u5de5\u4f5c\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u540d\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"WORKER_ID"),"\u7684\u8bbe\u7f6e\u9879\uff0c\u5728\u914d\u7f6e\u6587\u4ef6",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/byconity-server/(byconity-worker|byconity-worker-write).xml"),"\u4e2d\u914d\u7f6e\u5de5\u4f5c\u8282\u70b9\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"worker id"),"\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"worker id"),"\u5728\u5de5\u4f5c\u8282\u70b9\u4e4b\u95f4\u5fc5\u987b\u662f\u552f\u4e00\u7684\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d",(0,o.yg)("inlineCode",{parentName:"p"},"WORKER_ID"),"\u7684\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u3002\n\u8bf7\u5c3d\u91cf\u4ee5 ",(0,o.yg)("inlineCode",{parentName:"p"},"\\w*-\\d+")," \u7684\u6b63\u5219\u65b9\u5f0f\u547d\u540d ",(0,o.yg)("inlineCode",{parentName:"p"},"WORKER_ID"),"\u3002"),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"clickhouse client --port 9010\n\n:) select * from system.workers\n\n")))}c.isMDXComponent=!0}}]);