import{s as m,t as U,u as V,v as W,T as X,w as Y}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";var Z=Object.create,z=Object.defineProperty,$=Object.getOwnPropertyDescriptor,L=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),f=t=>{throw TypeError(t)},j=(t,e,r)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>z(t,"name",{value:e,configurable:!0}),tt=t=>[,,,Z(t?.[L("metadata")]??null)],M=["class","method","getter","setter","accessor","field","value","get","set"],u=t=>t!==void 0&&typeof t!="function"?f("Function expected"):t,et=(t,e,r,l,n)=>({kind:M[t],name:e,metadata:l,addInitializer:s=>r._?f("Already initialized"):n.push(u(s||null))}),rt=(t,e)=>j(e,L("metadata"),t[3]),c=(t,e,r,l)=>{for(var n=0,s=t[e>>1],g=s&&s.length;n<g;n++)e&1?s[n].call(r):l=s[n].call(r,l);return l},b=(t,e,r,l,n,s)=>{var g,a,x,_,y,o=e&7,w=!!(e&8),v=!!(e&16),C=o>3?t.length+1:o?w?1:2:0,A=M[o+5],E=o>3&&(t[C-1]=[]),Q=t[C]||(t[C]=[]),d=o&&(!v&&!w&&(n=n.prototype),o<5&&(o>3||!v)&&$(o<4?n:{get[r](){return B(this,s)},set[r](p){return G(this,s,p)}},r));o?v&&o<4&&R(s,(o>2?"set ":o>1?"get ":"")+r):R(n,r);for(var I=l.length-1;I>=0;I--)_=et(o,r,x={},t[3],Q),o&&(_.static=w,_.private=v,y=_.access={has:v?p=>ot(n,p):p=>r in p},o^3&&(y.get=v?p=>(o^1?B:it)(p,n,o^4?s:d.get):p=>p[r]),o>2&&(y.set=v?(p,S)=>G(p,n,S,o^4?s:d.set):(p,S)=>p[r]=S)),a=(0,l[I])(o?o<4?v?s:d[A]:o>4?void 0:{get:d.get,set:d.set}:n,_),x._=1,o^4||a===void 0?u(a)&&(o>4?E.unshift(a):o?v?s=a:d[A]=a:n=a):typeof a!="object"||a===null?f("Object expected"):(u(g=a.get)&&(d.get=g),u(g=a.set)&&(d.set=g),u(g=a.init)&&E.unshift(g));return o||rt(t,n),d&&z(n,r,d),v?o^4?s:d:n},k=(t,e,r)=>e.has(t)||f("Cannot "+r),ot=(t,e)=>Object(e)!==e?f('Cannot use the "in" operator on this value'):t.has(e),B=(t,e,r)=>(k(t,e,"read from private field"),r?r.call(t):e.get(t)),G=(t,e,r,l)=>(k(t,e,"write to private field"),l?l.call(t,r):e.set(t,r),r),it=(t,e,r)=>(k(t,e,"access private method"),r),D,F,H,N,q,J,T,K,i;K=[W("bs-popover")];class h extends(T=V,J=[m()],q=[m()],N=[m()],H=[m()],F=[m()],D=[m()],T){constructor(){super(...arguments),this.content=c(i,8,this,""),c(i,11,this),this.offset=c(i,12,this,[0,8]),c(i,15,this),this.placement=c(i,16,this,"right"),c(i,19,this),this.template=c(i,20,this,`<div class="popover" role="tooltip">
    <div class="popover-arrow"></div>
    <h3 class="popover-header"></h3>
    <div class="popover-body"></div>
  </div>`),c(i,23,this),this.popperConfig=c(i,24,this,null),c(i,27,this),this.trigger=c(i,28,this,"click"),c(i,31,this),this.tooltip=void 0}propertyChanged(e,r){e==="title"?this.tooltip?.setContent({".popover-header":r}):e==="content"?this.tooltip?.setContent({".popover-body":r}):super.propertyChanged(e,r)}createTooltip(){this.tooltip=new U(this.element,this.getOptions())}}i=tt(T);b(i,5,"content",J,h);b(i,5,"offset",q,h);b(i,5,"placement",N,h);b(i,5,"template",H,h);b(i,5,"popperConfig",F,h);b(i,5,"trigger",D,h);h=b(i,0,"BsPopover",K,h);c(i,1,h);const pt={title:"Bootstrap / Components / Popover",component:h,render:()=>({template:`<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button bs-popover="title.bind: title; content.bind: content; placement.bind: placement; trigger.bind: trigger; html.bind: html">Open popover</button>
</div>`}),parameters:{actions:{handles:["show.bs.popover","shown.bs.popover","hide.bs.popover","hidden.bs.popover","inserted.bs.popover"]}},argTypes:{title:{control:"text"},content:{control:"text"},placement:{control:"select",options:Y},trigger:{control:"select",options:X},html:{control:"boolean"}}},P={args:{title:"Popover title",content:"And here's some amazing content. It's very engaging. Right?",placement:"right",trigger:"click",html:!1}},O={render:()=>({template:`<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button bs-popover="title.bind: title; content.bind: content; placement.bind: placement; trigger.bind: trigger; html.bind: html">Open popover</button>
</div>`}),args:{title:"Popover title",content:"And here's <em><u>some</u> amazing</em> content. <strong>It's very engaging</strong>. Right?",placement:"right",trigger:"click",html:!0}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Popover title',
    content: "And here's some amazing content. It's very engaging. Right?",
    placement: 'right',
    trigger: 'click',
    html: false
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button bs-popover="title.bind: title; content.bind: content; placement.bind: placement; trigger.bind: trigger; html.bind: html">Open popover</button>
</div>\`
  }),
  args: {
    title: 'Popover title',
    content: "And here's <em><u>some</u> amazing</em> content. <strong>It's very engaging</strong>. Right?",
    placement: 'right',
    trigger: 'click',
    html: true
  }
}`,...O.parameters?.docs?.source}}};const ct=["Overview","HtmlInPopover"];export{O as HtmlInPopover,P as Overview,ct as __namedExportsOrder,pt as default};
