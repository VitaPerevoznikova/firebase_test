import{s as l,R as a,j as o,C as x}from"./index-ce372079.js";const v="/firebase_test/assets/hero_bg-3d2afa17.jpg",j="/firebase_test/assets/hero_bg@2x-2797946b.jpg",O=l.section`
  padding: 261px 62px 163px 92px;
  margin: 32px;

  border-radius: 30px;
  max-width: 100vw;
  height: 100vh;

  background: url(${v}), url(${j});

  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right top;
  background-color: var(--orange);
`,w=l.div`
`,y=l.h1`
max-width: 518px;

font-weight: 500;
font-size: 70px;
line-height: 1.0;
letter-spacing: -0.03em;
color: var(--white); 

margin-bottom: 28px;
`,P=l.p`
font-weight: 400;
font-size: 28px;
line-height: 107%;
letter-spacing: -0.02em;
color: var(--white);
`,E=l.button`
display: flex;
justify-content: center;
align-items: center;
gap: 18px;

border: 1px solid rgba(251, 251, 251, 0.4);
border-radius: 30px;
background-color: transparent;

margin-top: 64px;
padding: 18px 50px;

min-width: 230px;
height: 60px;

font-weight: 500;
font-size: 20px;
line-height: 120%;
letter-spacing: -0.01em;
color: var(--white);
`;var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=a.createContext&&a.createContext(h),_=["attr","size","title"];function z(e,t){if(e==null)return{};var r=C(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function C(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(n){H(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H(e,t,r){return t=N(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function m(e){return e&&e.map((t,r)=>a.createElement(t.tag,p({key:r},t.attr),m(t.child)))}function B(e){return t=>a.createElement(D,u({attr:p({},e.attr)},t),m(e.child))}function D(e){var t=r=>{var{attr:n,size:i,title:s}=e,b=z(e,_),f=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),a.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,b,{className:c,style:p(p({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return g!==void 0?a.createElement(g.Consumer,null,r=>t(r)):t(h)}function I(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},child:[]}]})(e)}const M=()=>o.jsx(O,{children:o.jsx(x,{children:o.jsxs(w,{children:[o.jsx(y,{children:"Make Life Easier for the Family:"}),o.jsx(P,{children:"Find Babysitters Online for All Occasions"}),o.jsxs(E,{children:["Get started",o.jsx(I,{})]})]})})}),k=()=>o.jsx(M,{});export{k as default};
