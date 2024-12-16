"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1061],{8860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(7953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=i,g=m["".concat(u,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(5890),i=(n(7953),n(8860));const o={title:"Become a Maintainer",sidebar_position:1,tags:["Docs"]},a=void 0,l={unversionedId:"become-maintainer",id:"become-maintainer",title:"Become a Maintainer",description:"Contributing to an open-source project like ByConity can be intimidating, but it can also be a rewarding experience.",source:"@site/community/become-maintainer.mdx",sourceDirName:".",slug:"/become-maintainer",permalink:"/community/become-maintainer",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/community/become-maintainer.mdx",tags:[{label:"Docs",permalink:"/community/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Become a Maintainer",sidebar_position:1,tags:["Docs"]},sidebar:"community",next:{title:"Join the ByConity TSC",permalink:"/community/tsc-membership"}},u={},c=[],s={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Contributing to an open-source project like ByConity can be intimidating, but it can also be a rewarding experience.\nBecoming a maintainer or a member of the Technical Steering Committee (TSC) is a great achievement that requires technical and community contributions.\nHere's how you can become a maintainer and TSC member of ByConity:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1: Pick an Issue")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The first step is to find an issue or feature to work on."),(0,i.yg)("li",{parentName:"ul"},'You can start by looking for issues labeled as "good first issue" or join existing pull request reviews.'),(0,i.yg)("li",{parentName:"ul"},'Alternatively, you can ask the maintainers to do a public live stream called "Let\'s talk about contributing"\nwhere they can explain a specific part of the project where you want to contribute.')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2: Open a Pull Request")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Once you've found an issue or feature to work on, you can start by forking the repository and working on it locally."),(0,i.yg)("li",{parentName:"ul"},"When you're ready, create a pull request with an appropriate title using the ",(0,i.yg)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"conventional commits specification"),"."),(0,i.yg)("li",{parentName:"ul"},"Make sure to test your changes against GitHub checks to ensure they all pass.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3: Get Pull Request Merged")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After submitting your pull request, give the maintainers some time to review it."),(0,i.yg)("li",{parentName:"ul"},"If no one is alerted to review your PR, feel free to bring the issue to the maintainer's attention by pinging them on Slack or GitHub."),(0,i.yg)("li",{parentName:"ul"},"It's important to make sure all your PR checks pass before submitting to ensure your PR is merged quickly.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4: Invitation to Become a Committer")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After making several contributions to ByConity, you will be recognized as a committer, and you will have the code commit right to the repository."),(0,i.yg)("li",{parentName:"ul"},"You can take this opportunity to review the pull requests of other developers and answer user questions, which will help you become more familiar with the code.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5: Invitation to Become a maintainer")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"As a committer, you can continue to contribute to the project and share your knowledge with other contributors to earn enough credit to become a maintainer."),(0,i.yg)("li",{parentName:"ul"},"Once you become a maintainer, you'll have more responsibilities, such as reviewing and merging pull requests, managing issues, and ensuring the quality of the code.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 5: Become a TSC Member")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After becoming a maintainer and demonstrating technical and community influence, you can apply for TSC membership."),(0,i.yg)("li",{parentName:"ul"},"As a TSC member, you'll have the right to vote on community-related decisions and propose other active contributors for committership."),(0,i.yg)("li",{parentName:"ul"},"Being a TSC member is a great responsibility, and it requires dedication to the project and its community.")),(0,i.yg)("p",null,"Remember, the most important thing when contributing to an open-source project is to have fun, learn new things, and build a community.\nGood luck!"))}p.isMDXComponent=!0}}]);