"use strict";(self.webpackChunkcatalog_docs=self.webpackChunkcatalog_docs||[]).push([[643],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(f,o(o({ref:e},l),{},{components:n})):a.createElement(f,o({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"catalog-accounts/instant-wallet/introduction",id:"catalog-accounts/instant-wallet/introduction",title:"Introduction",description:"All Catalog Accounts come with the ability to open an Instant Account. An Instant Account is a special type of wallet which enables instant transfers and cross-chain swaps, without requiring any form of trust. It does this through a 2-of-2 multi-sig requirement with the Guardian component, which allows users to bypass confirmation delays.",source:"@site/docs/catalog-accounts/instant-wallet/introduction.md",sourceDirName:"catalog-accounts/instant-wallet",slug:"/catalog-accounts/instant-wallet/introduction",permalink:"/catalog-accounts/instant-wallet/introduction",draft:!1,editUrl:"https://github.com/catalogfi/docs/blob/main/docs/catalog-accounts/instant-wallet/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/catalog-accounts/introduction"},next:{title:"Guardian",permalink:"/catalog-accounts/instant-wallet/guardian"}},c={},u=[{value:"Funding",id:"funding",level:2},{value:"Sending",id:"sending",level:2},{value:"Refunding",id:"refunding",level:2}],l={toc:u},d="wrapper";function h(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"All Catalog Accounts come with the ability to open an Instant Account. An Instant Account is a special type of wallet which enables instant transfers and cross-chain swaps, without requiring any form of trust. It does this through a 2-of-2 multi-sig requirement with the ",(0,r.kt)("a",{parentName:"p",href:"guardian"},"Guardian")," component, which allows users to bypass confirmation delays."),(0,r.kt)("h2",{id:"funding"},"Funding"),(0,r.kt)("p",null,"Before a user funds an Instant Account, they send a request to the Guardian to sign a refund transaction in the event the Guardian stops signing transactions or goes offline. This transaction can be signed by the user at any point to withdraw their funds. Once the user has received this transaction, they can safely fund their Instant Account knowing they will have full control of their assets through the entire process."),(0,r.kt)("h2",{id:"sending"},"Sending"),(0,r.kt)("p",null,"When a user wishes to send funds to another address, they simply sign the transaction and send it to the Guardian. The Guardian verifies that the transaction is not attempting a double-spend, and promptly provides the second signature. The Guardian provides a new refund transaction to the user, ensuring they still have the freedom to withdraw after their current one has been invalidated. The Guardian then gives an instant guarantee to the recipient that they will receive their funds. This mechanism enables Catalog's instant cross-chain swaps."),(0,r.kt)("h2",{id:"refunding"},"Refunding"),(0,r.kt)("p",null,"When a user wishes to withdraw their funds from their Instant Account, they simply sign and submit the pre-signed refund transaction provided by the Guardian."))}h.isMDXComponent=!0}}]);