"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4578],{8860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var i=t(7953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=i.createContext({}),u=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(a.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),y=l,d=p["".concat(a,".").concat(y)]||p[y]||g[y]||r;return t?i.createElement(d,c(c({ref:n},s),{},{components:t})):i.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,c=new Array(r);c[0]=y;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[p]="string"==typeof e?e:l,c[1]=o;for(var u=2;u<r;u++)c[u]=t[u];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(5890),l=(t(7953),t(8860));const r={title:"\u8fde\u63a5\u5ba2\u6237\u7aef",tags:["Docs"]},c="\u8fde\u63a5\u5ba2\u6237\u7aef",o={unversionedId:"basic-guide/client-connection",id:"version-0.2.0/basic-guide/client-connection",title:"\u8fde\u63a5\u5ba2\u6237\u7aef",description:"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/client-connection.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/client-connection",permalink:"/zh-cn/docs/0.2.0/basic-guide/client-connection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/client-connection.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u8fde\u63a5\u5ba2\u6237\u7aef",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",permalink:"/zh-cn/docs/0.2.0/basic-guide/background-task-management"},next:{title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",permalink:"/zh-cn/docs/0.2.0/basic-guide/cluster-configuration"}},a={},u=[{value:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\uff08CLI\uff09",id:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aefcli",level:2},{value:"Docker Client",id:"docker-client",level:3},{value:"Clickhouse Client",id:"clickhouse-client",level:3},{value:"\u5404\u8bed\u8a00\u9a71\u52a8\u5668\uff08Driver\uff09",id:"\u5404\u8bed\u8a00\u9a71\u52a8\u5668driver",level:2},{value:"Python",id:"python",level:3},{value:"clickhouse-connect",id:"clickhouse-connect",level:4},{value:"clickhouse-driver",id:"clickhouse-driver",level:4},{value:"Go",id:"go",level:3},{value:"\u4f7f\u7528 clickhouse-go \u8fde\u63a5",id:"\u4f7f\u7528-clickhouse-go-\u8fde\u63a5",level:4},{value:"\u4f7f\u7528 ch-go \u8fde\u63a5",id:"\u4f7f\u7528-ch-go-\u8fde\u63a5",level:4},{value:"Java",id:"java",level:3},{value:"HTTP",id:"http",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],s={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,i.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u8fde\u63a5\u5ba2\u6237\u7aef"},"\u8fde\u63a5\u5ba2\u6237\u7aef"),(0,l.yg)("p",null,"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b"),(0,l.yg)("p",null,"\u6587\u6863\u7ed3\u6784\uff1a\u6559\u7a0b\u76ee\u7684\uff0c\u524d\u7f6e\u51c6\u5907\uff0c\u5206\u6b65\u9aa4\u8bb2\u89e3\u539f\u7406 & \u793a\u4f8b\uff0c\u76f8\u5173\u6587\u6863\u63a8\u8350\uff1b"),(0,l.yg)("p",null,"\u5185\u5bb9\u63d0\u8981\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"ByConity \u63d0\u4f9b\u54ea\u4e9b\u5ba2\u6237\u7aef\u6216\u8005\u9a71\u52a8\u65b9\u5f0f\u8fdb\u884c\u4e0e\u5176\u4ed6\u7cfb\u7edf\u7684\u4ea4\u4e92"),(0,l.yg)("li",{parentName:"ol"},"\u5982\u4f55\u5728\u90e8\u7f72\u597d\u96c6\u7fa4\u540e\uff0c\u4e0b\u8f7d\u3001\u542f\u52a8\u8fd9\u4e9b\u5ba2\u6237\u7aef")),(0,l.yg)("h2",{id:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aefcli"},"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\uff08CLI\uff09"),(0,l.yg)("h3",{id:"docker-client"},(0,l.yg)("a",{parentName:"h3",href:"https://hub.docker.com/r/yandex/clickhouse-server/"},"Docker Client")),(0,l.yg)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 Docker\uff0c\u90a3\u4e48\u53ea\u9700\u4e0b\u9762\u547d\u4ee4\u5c31\u53ef\u4ee5\u76f4\u63a5\u5efa\u7acb Byconity \u8fde\u63a5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"docker run -it yandex/clickhouse-client --host 127.0.0.1 --port 9000 --user default --password xxxx\n\n")),(0,l.yg)("p",null,"\u4e0b\u9762\u5404\u9879\u5747\u4e3a",(0,l.yg)("strong",{parentName:"p"},"\u53ef\u9009\u9879"),"\uff0c\u89c6\u60c5\u51b5\u800c\u5b9a\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--host xxx")," \u4e3b\u673a IP \u6216\u57df\u540d"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--port 9000")," tcp \u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 9000"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--user default")," \u7528\u6237\u540d"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--password xxxx")," \u5bc6\u7801")),(0,l.yg)("h3",{id:"clickhouse-client"},"Clickhouse Client"),(0,l.yg)("p",null,"Byconity \u517c\u5bb9 ClickHouse \u5f00\u6e90\u793e\u533a\u6240\u63d0\u4f9b\u7684\u5ba2\u6237\u7aef\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/sql-clients/clickhouse-client-local"},"\u5404\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5 ClickhouseClient \u53c2\u8003"),"\uff0c\u4e0b\u9762\u662f\u4ee5 MacOS x86_64 \u4e3a\u4f8b\u7684\u5b89\u88c5\u547d\u4ee4\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' \\\n&& chmod a+x ./clickhouse\n\nsudo mv ./clickhouse /usr/local/bin/\n\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5efa\u7acb\u8fde\u63a5\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"clickhouse client --host 127.0.0.1 --password xxxx\n\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"clickhouse client --help")," \u53ef\u4ee5\u67e5\u770b\u53ef\u9009\u53c2\u6570\uff0c\u8fd9\u91cc\u7684\u53c2\u6570\u548c\u4e0a\u9762")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"docker run -it yandex/clickhouse-client ...")," \u540e\u9762\u7684\u53c2\u6570\u540d\u662f\u4e00\u81f4\u7684"),(0,l.yg)("h2",{id:"\u5404\u8bed\u8a00\u9a71\u52a8\u5668driver"},"\u5404\u8bed\u8a00\u9a71\u52a8\u5668\uff08Driver\uff09"),(0,l.yg)("p",null,"Clickhouse \u5b98\u65b9\u63d0\u4f9b\u7684\u5404\u79cd\u8bed\u8a00\u7684\u5f00\u6e90 Driver \u53ef\u76f4\u63a5\u7528\u4e8e Byconity \u8fde\u63a5\u3002"),(0,l.yg)("h3",{id:"python"},"Python"),(0,l.yg)("h4",{id:"clickhouse-connect"},(0,l.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-connect"},"clickhouse-connect")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"clickhouse-connect \u53ea\u652f\u6301 python3"),(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"pip3 install clickhouse-connect")),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"import clickhouse_connect\n\n# connect\nclient = clickhouse_connect.get_client(host='localhost', username='default', password='xxxx')\n\n# query\nquery_result = client.query('SHOW DATABASES;')\nprint (query_result.result_set)\n\n")),(0,l.yg)("h4",{id:"clickhouse-driver"},(0,l.yg)("a",{parentName:"h4",href:"https://pypi.org/project/clickhouse-driver/"},"clickhouse-driver")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Python3 \u5b89\u88c5\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"pip3 install clickhouse-driver")),(0,l.yg)("li",{parentName:"ul"},"Python2 \u5b89\u88c5\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"pip install clickhouse-driver")),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"from clickhouse_driver import Client\nfrom clickhouse_driver import connect\n\n# connect\nclient = Client(host='localhost',port =9000, user='default', password='xxxx')\n\n# query\nquery_result = client.execute('SHOW DATABASES;')\nprint (query_result)\n\n")),(0,l.yg)("h3",{id:"go"},"Go"),(0,l.yg)("h4",{id:"\u4f7f\u7528-clickhouse-go-\u8fde\u63a5"},"\u4f7f\u7528 ",(0,l.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-go"},"clickhouse-go")," \u8fde\u63a5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"clickhouse-go \u76f8\u6bd4\u540e\u9762\u7684 ch-go \u5bf9 Go \u7684\u7c7b\u578b\u652f\u6301\u66f4\u53cb\u597d\uff0c\u5e95\u5c42\u7531 ch-go \u5b9e\u73b0\uff0c\u63a8\u8350\u4f7f\u7528\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u4e2d\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/clickhouse-go/v2")," \u5b89\u88c5"),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'package main\n\nimport (\n        "context"\n        "log"\n        "net"\n        "time"\n\n        "github.com/ClickHouse/clickhouse-go/v2"\n)\n\nfunc main() {\n        ctx := context.Background()\n\n        // \u914d\u7f6e\u8fde\u63a5\u53c2\u6570\n        conn, err := clickhouse.Open(&clickhouse.Options{\n                Addr: string[]{"127.0.0.1"},\n                Auth: clickhouse.Auth{\n                        Database: "my_db",\n                        Username: "default",\n                        Password: "xxxx",\n                },\n                DialContext: func(ctx context.Context, addr string) (net.Conn, error) {\n                        var d net.Dialer\n                        return d.DialContext(ctx, "tcp", addr)\n                },\n                Settings: clickhouse.Settings{\n                        "max_execution_time": 60,\n                },\n                DialTimeout:      time.Duration(10) * time.Second,\n                MaxOpenConns:     5,\n                MaxIdleConns:     5,\n                ConnMaxLifetime:  time.Duration(10) * time.Minute,\n                ConnOpenStrategy: clickhouse.ConnOpenInOrder,\n        })\n        if err != nil {\n                log.Panic(err)\n        }\n\n        if err := conn.Ping(ctx); err != nil {\n                log.Panic(err)\n        }\n\n        // \u6267\u884c SQL\n        if err := conn.Exec(ctx, "SHOW DATABASES;"); err != nil {\n                log.Panic(err)\n        }\n}\n\n')),(0,l.yg)("h4",{id:"\u4f7f\u7528-ch-go-\u8fde\u63a5"},"\u4f7f\u7528 ",(0,l.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/ch-go"},"ch-go")," \u8fde\u63a5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"ch-go \u5bf9 Clickhouse \u6570\u636e\u7c7b\u578b\u652f\u6301\u66f4\u597d\uff0c\u6027\u80fd\u7a0d\u9ad8\u4e8e clickhouse-go\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/ch-go")),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'package main\n\nimport (\n  "context"\n  "fmt"\n\n  "github.com/ClickHouse/ch-go"\n  "github.com/ClickHouse/ch-go/proto"\n)\n\nfunc main() {\n  ctx := context.Background()\n  c, err := ch.Dial(ctx, ch.Options{Address: "localhost:9000"})\n  if err != nil {\n    panic(err)\n  }\n  var (\n    numbers int\n    data    proto.ColUInt64\n  )\n  if err := c.Do(ctx, ch.Query{\n    Body: "SELECT number FROM system.numbers LIMIT 500000000",\n    Result: proto.Results{\n      {Name: "number", Data: &data},\n    },\n    // OnResult will be called on next received data block.\n    OnResult: func(ctx context.Context, b proto.Block) error {\n      numbers += len(data)\n      return nil\n    },\n  }); err != nil {\n    panic(err)\n  }\n  fmt.Println("numbers:", numbers)\n}\n\n')),(0,l.yg)("h3",{id:"java"},"Java"),(0,l.yg)("p",null,"\u7528 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-jdbc"},"clickhouse-jdbc")," \u8fde\u63a5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u901a\u8fc7 maven \u914d\u7f6e\u5b89\u88c5\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"<dependency>\n    \x3c!-- please stop using ru.yandex.clickhouse as it's been deprecated --\x3e\n    <groupId>com.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.2-patch11</version>\n    \x3c!-- use uber jar with all dependencies included, change classifier to http for smaller jar --\x3e\n    <classifier>all</classifier>\n    <exclusions>\n        <exclusion>\n            <groupId>*</groupId>\n            <artifactId>*</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'String url = "jdbc:ch://localhost:8123";\nProperties properties = new Properties();\nproperties.setProperty("max_execution_time", "120");\nClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);\ntry (Connection conn = dataSource.getConnection("default", "password");\n    Statement stmt = conn.createStatement()) {\n    ResultSet rs = stmt.executeQuery("SHOW DATABASES;");\n    while(rs.next()) {\n        // ...\n    }\n}\n\n')),(0,l.yg)("h2",{id:"http"},"HTTP"),(0,l.yg)("p",null,"ByConity \u4e5f\u63d0\u4f9b HTTP \u8fde\u63a5\u65b9\u5f0f\uff0c\u53ef\u4ee5\u7528 curl \u6216 postman \u65b9\u5f0f\u6267\u884c SQL\u3002curl \u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"curl --location --request POST '127.0.0.1:8123/?max_execution_time=60&default_format=Native' \\\n--header 'Authorization: Basic xxx' \\\n--header 'Content-Type: text/plain' \\\n--data-raw 'SHOW DATABASES;'\n\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4ee5 ",(0,l.yg)("inlineCode",{parentName:"li"},"Basic Auth"),"(\u7528\u6237\u540d + \u5bc6\u7801)\u65b9\u5f0f\u8fdb\u884c\u52a0\u5bc6\uff0c\u52a0\u5bc6\u7ed3\u679c\u4e3a\u4e0a\u9762\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"--header 'Authorization: Basic xxx'")),(0,l.yg)("li",{parentName:"ul"},"\u5728 Body \u4e2d\u76f4\u63a5\u586b\u5199\u8981\u6267\u884c\u7684 SQL\uff0c\u5bf9\u5e94\u4e0a\u9762\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"--data-raw 'SHOW DATABASES;'")),(0,l.yg)("li",{parentName:"ul"},"HTTP \u63a5\u53e3\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"8123")),(0,l.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u53c2\u6570\uff1a"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"max_execution_time=60")," \u6307\u5b9a\u67e5\u8be2\u6700\u5927\u7b49\u5f85\u65f6\u95f4(\u79d2)"),(0,l.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u7684\u6570\u636e\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"TabSeparated")," \u683c\u5f0f\u7684\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"default_format")," \u53ef\u4ee5\u6307\u5b9a ",(0,l.yg)("inlineCode",{parentName:"li"},"TabSeparated")," \u4e4b\u5916\u7684\u9ed8\u8ba4\u683c\u5f0f")),(0,l.yg)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/zh/interfaces/http"},"Clickhouse Http \u53c2\u8003")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/language-clients"},"Clickhouse \u5404\u8bed\u8a00 Driver \u53c2\u8003"))))}g.isMDXComponent=!0}}]);