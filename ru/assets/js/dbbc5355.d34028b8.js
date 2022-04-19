"use strict";(self.webpackChunksreb_io=self.webpackChunksreb_io||[]).push([[927],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=r,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(b,a(a({ref:t},u),{},{components:o})):n.createElement(b,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4238:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={sidebar_position:2,sidebar_label:"How to",hide_title:!0},c=void 0,l={unversionedId:"howto",id:"howto",title:"howto",description:"How to",source:"@site/docs/howto.md",sourceDirName:".",slug:"/howto",permalink:"/ru/docs/howto",editUrl:"https://github.com/srebrenik/sreb.io/edit/main/docs/howto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"How to",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0420\u0443\u0441\u044c",permalink:"/ru/docs/intro"}},u={},d=[{value:"How to",id:"how-to",level:2},{value:"How to obtain Srebrenik through cryptocurency donations",id:"how-to-obtain-srebrenik-through-cryptocurency-donations",level:3},{value:"How to obtain Srebrenik through other types of contributions",id:"how-to-obtain-srebrenik-through-other-types-of-contributions",level:3}],p={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"how-to-obtain-srebrenik-through-cryptocurency-donations"},"How to obtain Srebrenik through cryptocurency donations"),(0,i.kt)("p",null,"Srebrenik is distributed at no cost to anyone who donates cryptocurency to a list of known organisations."),(0,i.kt)("p",null,"The Srebrenik faucet bot monitors a list of specific Polkadot addresses known to be owned and under the control of specific organisations which accept donations at those addresses."),(0,i.kt)("p",null,"The current list follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1x8aa2N2Ar9SQweJv9vsuZn3WYDHu7gMQu1RePjZuBe33Hv")," see: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/ukraine/status/1498547710697345027"},"https://twitter.com/ukraine/status/1498547710697345027"))),(0,i.kt)("p",null,'To propose addition of another monitored address, submit a pull request to this page (click on "Edit this page" below). If the address ownership can be validated as belonging to an organisation aligned with the goals of the Srebrenik project, the pr will be merged and the faucet bot updated to monitor the address.'),(0,i.kt)("p",null,"When a donation is made to one of the listed addresses, the Srebrenik faucet will automatically send Srebrenik tokens to the substrate address of the sender of the donation."),(0,i.kt)("p",null,"If you wish to obtain Srebrenik in this way, simply send Polkadot tokens to your chosen charitable organisation from a Polkadot wallet that you hold keys for (do not send Polkadot tokens from an exchange address you do not hold mnemonic keys for). When the Srebrenik faucet bot detects your donation, it will release Srebrenik tokens to a Srebrenik account with the same mnemonic as the donation sender account. Tokens will be released at a specific rate proportionate to the quantity of tokens donated."),(0,i.kt)("h3",{id:"how-to-obtain-srebrenik-through-other-types-of-contributions"},"How to obtain Srebrenik through other types of contributions"),(0,i.kt)("p",null,"Mechanisms to reward other forms of contribution are also being explored. Specifically, when a Srebrenik voting council has been formed, it will be possible for the council to vote on Srebrenik remuneration for code, translation or other technical and time contributions to the Srebrenik project."))}h.isMDXComponent=!0}}]);