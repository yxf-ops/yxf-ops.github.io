"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3873],{8860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(7953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(t),c=l,d=u["".concat(s,".").concat(c)]||u[c]||y[c]||o;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var g=2;g<o;g++)r[g]=t[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=t(5890),l=(t(7953),t(8860));const o={title:"Geo",slug:"geo",hidden:!1,createdAt:"2021-07-29T12:05:09.208Z",updatedAt:"2021-09-23T04:01:15.690Z",tags:["Docs"]},r=void 0,i={unversionedId:"sql-syntax/functions/geo",id:"sql-syntax/functions/geo",title:"Geo",description:"Notice:",source:"@site/docs/sql-syntax/functions/geo.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/geo",permalink:"/docs/sql-syntax/functions/geo",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/geo.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Geo",slug:"geo",hidden:!1,createdAt:"2021-07-29T12:05:09.208Z",updatedAt:"2021-09-23T04:01:15.690Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/docs/sql-syntax/functions/encryption"},next:{title:"Hash",permalink:"/docs/sql-syntax/functions/hash"}},s={},g=[{value:"geohashDecode",id:"geohashdecode",level:2},{value:"geohashEncode",id:"geohashencode",level:2},{value:"greatCircleDistance",id:"greatcircledistance",level:2},{value:"pointInEllipses",id:"pointinellipses",level:2},{value:"pointInPolygon",id:"pointinpolygon",level:2}],p={toc:g},u="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,l.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,l.yg)("h2",{id:"geohashdecode"},"geohashDecode"),(0,l.yg)("p",null,"Decodes any geohash-encoded string into longitude and latitude."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"geohashDecode(encoded_string)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"encoded_string")," - geohash-encoded string.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned values")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"longitude and latitude.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashDecode('ezs42d000000') as res;\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (-5.603027176111937, 42.59399422444403) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.yg)("h2",{id:"geohashencode"},"geohashEncode"),(0,l.yg)("p",null,"Encodes latitude and longitude as a geohash-string."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"geohashEncode(longitude, latitude, [precision])\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"longitude - longitude part of the coordinate you want to encode. Floating in range ",(0,l.yg)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")),(0,l.yg)("li",{parentName:"ul"},"latitude - latitude part of the coordinate you want to encode. Floating in range ",(0,l.yg)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")),(0,l.yg)("li",{parentName:"ul"},"precision - Optional, length of the resulting encoded string, defaults to ",(0,l.yg)("inlineCode",{parentName:"li"},"12")," . Integer in range ",(0,l.yg)("inlineCode",{parentName:"li"},"[1, 12]")," . Any value less than ",(0,l.yg)("inlineCode",{parentName:"li"},"1")," or greater than ",(0,l.yg)("inlineCode",{parentName:"li"},"12")," is silently converted to ",(0,l.yg)("inlineCode",{parentName:"li"},"12")," .")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned values")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"alphanumeric ",(0,l.yg)("inlineCode",{parentName:"li"},"String")," of encoded coordinate (modified version of the base32-encoding alphabet is used).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashEncode(-5.60302734375, 42.593994140625, 0) AS res;\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ezs42d000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.yg)("h2",{id:"greatcircledistance"},"greatCircleDistance"),(0,l.yg)("p",null,"Calculates the distance between two points on the Earth\u2019s surface using ",(0,l.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"the great-circle formula")," ."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"greatCircleDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 Longitude of the first point in degrees. Range: ",(0,l.yg)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")," ."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 Latitude of the first point in degrees. Range: ",(0,l.yg)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")," ."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 Longitude of the second point in degrees. Range: ",(0,l.yg)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")," ."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 Latitude of the second point in degrees. Range: ",(0,l.yg)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")," .\nPositive values correspond to North latitude and East longitude, and negative values correspond to South latitude and West longitude.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned value")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The distance between two points on the Earth\u2019s surface, in meters. Generates an exception when the input parameter values fall outside of the range.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673);\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\u2500\u2510\n\u2502 1.4132374194975413e+07                                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.yg)("h2",{id:"pointinellipses"},"pointInEllipses"),(0,l.yg)("p",null,"Checks whether the point belongs to at least one of the ellipses.\nCoordinates are geometric in the Cartesian coordinate system."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"pointInEllipses(x, y, x\u2080, y\u2080, a\u2080, b\u2080,...,x\u2099, y\u2099, a\u2099, b\u2099)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"x, y")," \u2014 Coordinates of a point on the plane."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"x\u1d62, y\u1d62")," \u2014 Coordinates of the center of the ",(0,l.yg)("inlineCode",{parentName:"li"},"i")," -th ellipsis."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"a\u1d62, b\u1d62")," \u2014 Axes of the ",(0,l.yg)("inlineCode",{parentName:"li"},"i")," -th ellipsis in units of x, y coordinates.\nThe input parameters must be ",(0,l.yg)("inlineCode",{parentName:"li"},"2+4\u22c5n")," , where ",(0,l.yg)("inlineCode",{parentName:"li"},"n")," is the number of ellipses.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned values")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"1")," if the point is inside at least one of the ellipses; ",(0,l.yg)("inlineCode",{parentName:"li"},"0")," if it is not.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\u2500\u2510\n\u2502 1                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.yg)("h2",{id:"pointinpolygon"},"pointInPolygon"),(0,l.yg)("p",null,"Checks whether the point belongs to the polygon on the plane."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"pointInPolygon((x, y), [(a, b), (c, d) ...], ...)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"(x, y)")," \u2014 Coordinates of a point on the plane. Data type \u2014 Tuple \u2014 A tuple of two numbers."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"[(a, b), (c, d) ...]")," \u2014 Polygon vertices. Data type \u2014 Array. Each vertex is represented by a pair of coordinates ",(0,l.yg)("inlineCode",{parentName:"li"},"(a, b)")," . Vertices should be specified in a clockwise or counterclockwise order. The minimum number of vertices is 3. The polygon must be constant."),(0,l.yg)("li",{parentName:"ul"},"The function also supports polygons with holes (cut out sections). In this case, add polygons that define the cut out sections using additional arguments of the function. The function does not support non-simply-connected polygons.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned values")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"1")," if the point is inside the polygon, ",(0,l.yg)("inlineCode",{parentName:"li"},"0")," if it is not. If the point is on the polygon boundary, the function may return either 0 or 1.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInPolygon((3., 3.), [(6, 0), (8, 4), (5, 8), (0, 2)]) AS res\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);