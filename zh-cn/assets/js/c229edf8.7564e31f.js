"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1150],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var y=r.createContext({}),c=function(e){var n=r.useContext(y),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(y.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,y=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,g=u["".concat(y,".").concat(d)]||u[d]||s[d]||l;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var y in n)hasOwnProperty.call(n,y)&&(a[y]=n[y]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(75890),o=(t(37953),t(58860));const l={title:"Docker\u90e8\u7f72",sidebar_position:1,tags:["Docs"]},i="Docker\u90e8\u7f72",a={unversionedId:"quick-start/docker-deploy",id:"version-0.3.0/quick-start/docker-deploy",title:"Docker\u90e8\u7f72",description:"\u672c\u6559\u7a0b\u6307\u5bfc\u7528\u6237\u4f7f\u7528Docker\u5728\u672c\u5730\u5feb\u901f\u90e8\u7f72ByConity\uff0c\u7528\u6237\u53ef\u4ee5\u4f9d\u7167\u5982\u4e0b\u6b65\u9aa4\u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684ByConity\u96c6\u7fa4\uff0c\u8fdb\u884c\u5feb\u901f\u5165\u95e8\u4f53\u9a8c\u3002\u5982\u679c\u60f3\u5168\u9762\u8bd5\u7528\u548c\u4e86\u89e3ByConity\uff0c\u5efa\u8bae\u60a8\u8df3\u8fc7\u8be5\u7ae0\u8282\uff0c\u76f4\u63a5\u53c2\u8003ByConity\u96c6\u7fa4\u90e8\u7f72\uff0c\u4f53\u9a8cByConity\u5f3a\u5927\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/quick-start/docker-deploy.mdx",sourceDirName:"quick-start",slug:"/quick-start/docker-deploy",permalink:"/zh-cn/docs/0.3.0/quick-start/docker-deploy",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/quick-start/docker-deploy.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:1,frontMatter:{title:"Docker\u90e8\u7f72",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u7279\u6027",permalink:"/zh-cn/docs/0.3.0/introduction/features-and-capabilities"},next:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/zh-cn/docs/0.3.0/quick-start/basic-database-operations"}},y={},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"\u8fde\u63a5\u6d4b\u8bd5",id:"\u8fde\u63a5\u6d4b\u8bd5",level:2},{value:"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001\uff1a",id:"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001",level:2}],p={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"docker\u90e8\u7f72"},"Docker\u90e8\u7f72"),(0,o.yg)("p",null,"\u672c\u6559\u7a0b\u6307\u5bfc\u7528\u6237\u4f7f\u7528Docker\u5728\u672c\u5730\u5feb\u901f\u90e8\u7f72ByConity\uff0c\u7528\u6237\u53ef\u4ee5\u4f9d\u7167\u5982\u4e0b\u6b65\u9aa4\u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684ByConity\u96c6\u7fa4\uff0c\u8fdb\u884c\u5feb\u901f\u5165\u95e8\u4f53\u9a8c\u3002\u5982\u679c\u60f3\u5168\u9762\u8bd5\u7528\u548c\u4e86\u89e3ByConity\uff0c\u5efa\u8bae\u60a8\u8df3\u8fc7\u8be5\u7ae0\u8282\uff0c\u76f4\u63a5\u53c2\u8003",(0,o.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.3.0/deployment/deployment-with-k8s"},"ByConity\u96c6\u7fa4\u90e8\u7f72"),"\uff0c\u4f53\u9a8cByConity\u5f3a\u5927\u7684\u6027\u80fd\u3002"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\n1\u3001ByConity\u4f7f\u7528FoundationDB\u4f5c\u4e3a\u5143\u6570\u636e\u5b58\u50a8\uff0c\u4f46FoundationDB\u65e0\u6cd5\u5728Apple Silicon\u673a\u5668\u4e0a\u7684Docker\u4e2d\u6b63\u5e38\u5de5\u4f5c\uff0c\u56e0\u6b64ByConity\u7684Docker\u90e8\u7f72\u65e0\u6cd5\u5728mac m1/m2\u4e0a\u8fd0\u884c"),(0,o.yg)("p",null,"2\u3001Docker\u90e8\u7f72\u4ec5\u9002\u7528\u4e8e\u57fa\u672c\u5165\u95e8\u6d4b\u8bd5\uff0c\u4e0d\u5efa\u8bae\u7528\u4e8e\u5927\u89c4\u6a21\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\uff0c\u53ef\u53c2\u8003#ByConity\u90e8\u7f72#\uff0c\u4e86\u89e3\u5176\u4ed6\u573a\u666f\u90e8\u7f72\u65b9\u5f0f"),(0,o.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.yg)("p",null,"\u786c\u4ef6\u8981\u6c42"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u75281\u53f0 16 core \u548c 32GB \u914d\u7f6e\u4ee5\u4e0a\u7684\u670d\u52a1\u5668 ")),(0,o.yg)("p",null,"\u8f6f\u4ef6\u8981\u6c42"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5b89\u88c5Docker"),(0,o.yg)("li",{parentName:"ul"},"\u5b89\u88c5MySQL\u5ba2\u6237\u7aef")),(0,o.yg)("h2",{id:"\u90e8\u7f72\u6b65\u9aa4"},"\u90e8\u7f72\u6b65\u9aa4"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u83b7\u53d6\u4ee3\u7801")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\u4eceGithub\u4e0a\u83b7\u53d6\u7a33\u5b9a\u7248\u672c\u7684ByConity\uff0c\u5e76\u5207\u6362\u5230docker\u76ee\u5f55\u4e0b\ngit clone git@github.com:ByConity/ByConity.git\ncd ByConity/docker/docker-compose\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u521b\u5efa\u73af\u5883\u6587\u4ef6")),(0,o.yg)("p",null,"\u4ece\u63d0\u4f9b\u7684\u6a21\u677f. env.tpl\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a.env\u7684\u73af\u5883\u6587\u4ef6\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cp .env.tpl .env\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u4fee\u6539\u73af\u5883\u53d8\u91cf")),(0,o.yg)("p",null,"\u76f8\u5e94\u5730\u4fee\u6539. env\u6587\u4ef6\u3002\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u914d\u7f6e\u7684\u53d8\u91cf\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"COMPOSE_PROJECT_NAME\uff1a\u8fd9\u5c06\u8bbe\u7f6eDockerCompose\u8bbe\u7f6e\u7684\u9879\u76ee\u540d\u79f0\u3002"),(0,o.yg)("li",{parentName:"ul"},"DATA_DIR\uff1a\u6307\u5b9a\u5c06\u6302\u8f7d\u5230Docker\u5bb9\u5668\u4e2d\u7684\u672c\u5730\u8def\u5f84\u3002\u6b64\u8def\u5f84\u7528\u4e8e\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u3001\u65e5\u5fd7\u7b49\u3002"),(0,o.yg)("li",{parentName:"ul"},"SERVER_TCP_PORT\u548cSERVER_HTTP_PORT\uff1a\u8fd9\u4e9b\u53d8\u91cf\u5b9a\u4e49ByConity\u670d\u52a1\u5668\u7684TCP\u548cHTTP\u7aef\u53e3\u7684\u516c\u5f00\u7aef\u53e3\u3002")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"\u8bbe\u7f6eByConity Docker\u955c\u50cf\u6765\u6e90")),(0,o.yg)("p",null,"\u5982\u679c\u8fd0\u884c\u7279\u5b9a\u7684\u53d1\u5e03\u7248\u672c\u7684ByConity"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5c06. env\u6587\u4ef6\u4e2d\u7684BYCONITY_IMAGE\u53d8\u91cf\u66f4\u65b0\u4e3a\u6240\u9700\u7684\u53d1\u884c\u7248\u672c\uff0c\u4f8b\u5982byconity/byconity\uff1a0.3.0\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u5c06BYCONITY_BINARY_PATH\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,o.yg)("p",null,"\u5982\u679c\u4f7f\u7528\u672c\u5730\u6784\u5efa\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fd0\u884cByConity"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5c06.env\u6587\u4ef6\u4e2d\u7684BYCONITY_IMAGE\u53d8\u91cf\u66f4\u65b0\u4e3abyconity/debian-runner."),(0,o.yg)("li",{parentName:"ul"},"\u5c06BYCONITY_BINARY_PATH\u8bbe\u7f6e\u4e3a\u672c\u5730\u6784\u5efa\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6240\u5728\u7684\u8def\u5f84\u3002")),(0,o.yg)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528ByConity dev-env docker \u7684\u65b9\u5f0f\u7f16\u8bd1\u6784\u5efa\u81ea\u5df1\u7684ByConity\u955c\u50cf"),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"\u542f\u52a8ByConity\u4e0eDocker Compose")),(0,o.yg)("p",null,"\u8981\u4f7f\u7528DockerCompose\u542f\u52a8ByConity\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# -d \u8868\u793a\u5728\u540e\u53f0\u8fd0\u884c\u5bb9\u5668\ndocker-compose -f docker-compose.essentials.yml [-f docker-compose.simple.yml] up [-d]\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"docker-comple. essentials.yml\uff1a\u542f\u52a8byconity\u96c6\u7fa4\u7684\u91cd\u8981\u4f9d\u8d56\u9879"),(0,o.yg)("li",{parentName:"ul"},"docker-comple. simple.yml\uff1a\u7b80\u5355\u7684byconity\u96c6\u7fa4"),(0,o.yg)("li",{parentName:"ul"},"docker-comple. multiworker.yml\uff1amulti-workerbyconity\u96c6\u7fa4")),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},"\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0\n\u8981\u5c06\u670d\u52a1\u7684\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0\uff0c\u9700\u8981\u66f4\u65b0byconity-*-cluster\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6elogger\uff1a console\uff1atrue\u3002")),(0,o.yg)("h2",{id:"\u8fde\u63a5\u6d4b\u8bd5"},"\u8fde\u63a5\u6d4b\u8bd5"),(0,o.yg)("p",null,"\u4f7f\u7528cli\u8bbf\u95eeByConity\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./scripts/byconity-cli.sh\n")),(0,o.yg)("p",null,"\u8bbf\u95eeHDFS\u6587\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'./scripts/hdfs-cli.sh "hdfs -dfs ls /user/clickhouse"\n')),(0,o.yg)("p",null,"\u901a\u8fc7cli\u8bbf\u95eefdb\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./scripts/fdb-cli.sh\n")),(0,o.yg)("h2",{id:"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001"},"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SELECT * FROM system.worker_groups\n\nQuery id: f60481b4-b9a7-494d-a639-ac7be3aa5292\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nid:             wg_default\ntype:           Physical\nvw_uuid:        1a415df1-6265-40b3-9c00-230fc3b026c1\nvw_name:        vw_default\nlinked_id:\nactive_workers: 1\nmin_cpu_usage:  9\nmax_cpu_usage:  9\navg_cpu_usage:  9\nmin_mem_usage:  8\nmax_mem_usage:  8\navg_mem_usage:  8\nis_auto_linked: 0\n\nSELECT *\nFROM system.workers\n\nQuery id: f2377b52-38eb-4437-9813-d34f9dd28049\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nworker_id:             w1\nhost:                  {HOST}\ntcp_port:              {TCP_PORT}\nrpc_port:              {RPC_PORT}\nhttp_port:             {HTTP_PORT}\nexchange_port:         {EXCHANGE_PORT}\nexchange_status_port:  {EXCHANGE_STATUS_PORT}\nvw_name:               vw_default\nworker_group_id:       wg_default\nquery_num:             0\ncpu_usage:             {xxx}\nreserved_cpu_cores:    0\nmemory_usage:          {xxx}\ndisk_space:            {xxx}\nmemory_available:      {xxx}\nreserved_memory_bytes: 0\nregister_time:         2022-11-30 18:19:49\nlast_update_time:      2022-11-30 18:21:09\nstate:                 1\n")))}s.isMDXComponent=!0}}]);