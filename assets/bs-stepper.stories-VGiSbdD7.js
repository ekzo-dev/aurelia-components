import{K as gt,s as J,M as at,O as Pt,N as St,Q as Dt}from"./iframe-CQr_Z5xa.js";import{g as Bt}from"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-PPVm8Dsz.js";const Mt="<template class=\"bs-stepper ${vertical ? 'vertical' : ''}\"><div class=bs-stepper-header role=tablist><template repeat.for=\"step of steps\"><div class=step data-target=#${step.id}><button class=step-trigger role=tab><span class=bs-stepper-circle>${step.number}</span> <span class=bs-stepper-label>${step.label}</span></button></div> <div class=line if.bind=!$last></div></template></div> <div class=bs-stepper-content><au-slot></au-slot></div></template>";var tt={exports:{}};var Ft=tt.exports,ft;function Vt(){return ft||(ft=1,(function(t,e){(function(s,v){t.exports=v()})(Ft,function(){function s(){return s=Object.assign||function(m){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(m[i]=n[i])}return m},s.apply(this,arguments)}var v=window.Element.prototype.matches,o=function(a,n){return a.closest(n)},l=function(a,n){return new window.Event(a,n)},_=function(a,n){var i=new window.CustomEvent(a,n);return i};function h(){if(window.Element.prototype.matches||(v=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(o=function(n,i){if(!document.documentElement.contains(n))return null;do{if(v.call(n,i))return n;n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1);return null}),(!window.Event||typeof window.Event!="function")&&(l=function(n,i){i=i||{};var c=document.createEvent("Event");return c.initEvent(n,!!i.bubbles,!!i.cancelable),c}),typeof window.CustomEvent!="function"){var m=window.Event.prototype.preventDefault;_=function(n,i){var c=document.createEvent("CustomEvent");return i=i||{bubbles:!1,cancelable:!1,detail:null},c.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),c.preventDefault=function(){this.cancelable&&(m.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},c}}}h();var O=1e3,u={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},S="transitionend",r="bsStepper",E=function(a,n,i,c){var p=a[r];if(!(p._steps[n].classList.contains(u.ACTIVE)||p._stepsContents[n].classList.contains(u.ACTIVE))){var g=_("show.bs-stepper",{cancelable:!0,detail:{from:p._currentIndex,to:n,indexStep:n}});a.dispatchEvent(g);var w=p._steps.filter(function(q){return q.classList.contains(u.ACTIVE)}),D=p._stepsContents.filter(function(q){return q.classList.contains(u.ACTIVE)});g.defaultPrevented||(w.length&&w[0].classList.remove(u.ACTIVE),D.length&&(D[0].classList.remove(u.ACTIVE),!a.classList.contains(u.VERTICAL)&&!p.options.animation&&D[0].classList.remove(u.BLOCK)),f(a,p._steps[n],p._steps,i),k(a,p._stepsContents[n],p._stepsContents,D,c))}},f=function(a,n,i,c){i.forEach(function(g){var w=g.querySelector(c.selectors.trigger);w.setAttribute("aria-selected","false"),a.classList.contains(u.LINEAR)&&w.setAttribute("disabled","disabled")}),n.classList.add(u.ACTIVE);var p=n.querySelector(c.selectors.trigger);p.setAttribute("aria-selected","true"),a.classList.contains(u.LINEAR)&&p.removeAttribute("disabled")},k=function(a,n,i,c,p){var g=a[r],w=i.indexOf(n),D=_("shown.bs-stepper",{cancelable:!0,detail:{from:g._currentIndex,to:w,indexStep:w}});function q(){n.classList.add(u.BLOCK),n.removeEventListener(S,q),a.dispatchEvent(D),p()}if(n.classList.contains(u.FADE)){n.classList.remove(u.NONE);var Nt=N(n);n.addEventListener(S,q),c.length&&c[0].classList.add(u.NONE),n.classList.add(u.ACTIVE),P(n,Nt)}else n.classList.add(u.ACTIVE),n.classList.add(u.BLOCK),a.dispatchEvent(D),p()},N=function(a){if(!a)return 0;var n=window.getComputedStyle(a).transitionDuration,i=parseFloat(n);return i?(n=n.split(",")[0],parseFloat(n)*O):0},P=function(a,n){var i=!1,c=5,p=n+c;function g(){i=!0,a.removeEventListener(S,g)}a.addEventListener(S,g),window.setTimeout(function(){i||a.dispatchEvent(l(S)),a.removeEventListener(S,g)},p)},G=function(a,n){n.animation&&a.forEach(function(i){i.classList.add(u.FADE),i.classList.add(u.NONE)})},b=function(){return function(n){n.preventDefault()}},I=function(a){return function(i){i.preventDefault();var c=o(i.target,a.selectors.steps),p=o(c,a.selectors.stepper),g=p[r],w=g._steps.indexOf(c);E(p,w,a,function(){g._currentIndex=w})}},d={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}},$=(function(){function m(n,i){var c=this;i===void 0&&(i={}),this._element=n,this._currentIndex=0,this._stepsContents=[],this.options=s({},d,{},i),this.options.selectors=s({},d.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(u.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(p){return p.hasAttribute("data-target")}).forEach(function(p){c._stepsContents.push(c._element.querySelector(p.getAttribute("data-target")))}),G(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,r,{value:this,writable:!0}),this._steps.length&&E(this._element,this._currentIndex,this.options,function(){})}var a=m.prototype;return a._setLinkListeners=function(){var i=this;this._steps.forEach(function(c){var p=c.querySelector(i.options.selectors.trigger);i.options.linear?(i._clickStepLinearListener=b(i.options),p.addEventListener("click",i._clickStepLinearListener)):(i._clickStepNonLinearListener=I(i.options),p.addEventListener("click",i._clickStepNonLinearListener))})},a.next=function(){var i=this,c=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;E(this._element,c,this.options,function(){i._currentIndex=c})},a.previous=function(){var i=this,c=this._currentIndex-1>=0?this._currentIndex-1:0;E(this._element,c,this.options,function(){i._currentIndex=c})},a.to=function(i){var c=this,p=i-1,g=p>=0&&p<this._steps.length?p:0;E(this._element,g,this.options,function(){c._currentIndex=g})},a.reset=function(){var i=this;E(this._element,0,this.options,function(){i._currentIndex=0})},a.destroy=function(){var i=this;this._steps.forEach(function(c){var p=c.querySelector(i.options.selectors.trigger);i.options.linear?p.removeEventListener("click",i._clickStepLinearListener):p.removeEventListener("click",i._clickStepNonLinearListener)}),this._element[r]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},m})();return $})})(tt)),tt.exports}var qt=Vt();const Rt=Bt(qt);var Wt=Object.create,ut=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Kt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),z=t=>{throw TypeError(t)},Gt=(t,e,s)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_t=(t,e)=>ut(t,"name",{value:e,configurable:!0}),Ht=t=>[,,,Wt(null)],Et=["class","method","getter","setter","accessor","field","value","get","set"],H=t=>t!==void 0&&typeof t!="function"?z("Function expected"):t,Ut=(t,e,s,v,o)=>({kind:Et[t],name:e,metadata:v,addInitializer:l=>s._?z("Already initialized"):o.push(H(l||null))}),Qt=(t,e)=>Gt(e,Kt("metadata"),t[3]),A=(t,e,s,v)=>{for(var o=0,l=t[e>>1],_=l&&l.length;o<_;o++)e&1?l[o].call(s):v=l[o].call(s,v);return v},Y=(t,e,s,v,o,l)=>{var _,h,O,u,S,r=e&7,E=!!(e&8),f=!!(e&16),k=r>3?t.length+1:r?E?1:2:0,N=Et[r+5],P=r>3&&(t[k-1]=[]),G=t[k]||(t[k]=[]),b=r&&(!f&&!E&&(o=o.prototype),r<5&&(r>3||!f)&&zt(r<4?o:{get[s](){return y(this,l)},set[s](d){return st(this,l,d)}},s));r?f&&r<4&&_t(l,(r>2?"set ":r>1?"get ":"")+s):_t(o,s);for(var I=v.length-1;I>=0;I--)u=Ut(r,s,O={},t[3],G),r&&(u.static=E,u.private=f,S=u.access={has:f?d=>Jt(o,d):d=>s in d},r^3&&(S.get=f?d=>(r^1?y:R)(d,o,r^4?l:b.get):d=>d[s]),r>2&&(S.set=f?(d,$)=>st(d,o,$,r^4?l:b.set):(d,$)=>d[s]=$)),h=(0,v[I])(r?r<4?f?l:b[N]:r>4?void 0:{get:b.get,set:b.set}:o,u),O._=1,r^4||h===void 0?H(h)&&(r>4?P.unshift(h):r?f?l=h:b[N]=h:o=h):typeof h!="object"||h===null?z("Object expected"):(H(_=h.get)&&(b.get=_),H(_=h.set)&&(b.set=_),H(_=h.init)&&P.unshift(_));return r||Qt(t,o),b&&ut(o,s,b),f?r^4?l:b:o},dt=(t,e,s)=>e.has(t)||z("Cannot "+s),Jt=(t,e)=>Object(e)!==e?z('Cannot use the "in" operator on this value'):t.has(e),y=(t,e,s)=>(dt(t,e,"read from private field"),s?s.call(t):e.get(t)),ot=(t,e,s)=>e.has(t)?z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),st=(t,e,s,v)=>(dt(t,e,"write to private field"),v?v.call(t,s):e.set(t,s),s),R=(t,e,s)=>(dt(t,e,"access private method"),s),Lt,wt,Ct,yt,kt,L,C,it,B,lt,et;kt=[St({name:"bs-stepper",template:Mt})],yt=[J(at)],Ct=[J(at)],wt=[J(at)],Lt=[Pt("steps.length")];class T{constructor(){A(L,5,this),ot(this,B),this.linear=A(L,8,this,!0),A(L,11,this),this.animation=A(L,12,this,!1),A(L,15,this),this.vertical=A(L,16,this,!1),A(L,19,this),this.steps=[],ot(this,C),ot(this,it,gt(HTMLElement))}detaching(){R(this,B,et).call(this)}stepsChanged(){y(this,C)&&R(this,B,et).call(this),this.steps.length&&R(this,B,lt).call(this)}propertyChanged(){R(this,B,et).call(this),R(this,B,lt).call(this)}next(){return y(this,C)?.next()}previous(){return y(this,C)?.previous()}to(e){return y(this,C)?.to(e)}reset(){return y(this,C)?.reset()}}L=Ht();C=new WeakMap;it=new WeakMap;B=new WeakSet;lt=function(){st(this,C,new Rt(y(this,it),{linear:this.linear,animation:this.animation}))};et=function(){y(this,C)?.destroy(),st(this,C,void 0);const t=y(this,it);t.classList.remove("linear"),t.querySelectorAll("div.step").forEach(e=>{e.classList.remove("active")}),t.querySelectorAll("button.step-trigger").forEach(e=>{e.removeAttribute("disabled")}),t.querySelectorAll("bs-stepper-step").forEach(e=>{e.classList.remove("active","dstepper-block","dstepper-none","fade")})};Y(L,1,"stepsChanged",Lt,T);Y(L,5,"linear",yt,T);Y(L,5,"animation",Ct,T);Y(L,5,"vertical",wt,T);T=Y(L,0,"BsStepper",kt,T);A(L,1,T);const Xt="<template class=content role=tabpanel><au-slot></au-slot></template>";var Yt=Object.create,vt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,jt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),K=t=>{throw TypeError(t)},te=(t,e,s)=>e in t?vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,mt=(t,e)=>vt(t,"name",{value:e,configurable:!0}),ee=t=>[,,,Yt(null)],It=["class","method","getter","setter","accessor","field","value","get","set"],U=t=>t!==void 0&&typeof t!="function"?K("Function expected"):t,se=(t,e,s,v,o)=>({kind:It[t],name:e,metadata:v,addInitializer:l=>s._?K("Already initialized"):o.push(U(l||null))}),ne=(t,e)=>te(e,jt("metadata"),t[3]),Q=(t,e,s,v)=>{for(var o=0,l=t[e>>1],_=l&&l.length;o<_;o++)e&1?l[o].call(s):v=l[o].call(s,v);return v},ht=(t,e,s,v,o,l)=>{var _,h,O,u,S,r=e&7,E=!!(e&8),f=!!(e&16),k=r>3?t.length+1:r?E?1:2:0,N=It[r+5],P=r>3&&(t[k-1]=[]),G=t[k]||(t[k]=[]),b=r&&(!f&&!E&&(o=o.prototype),r<5&&(r>3||!f)&&Zt(r<4?o:{get[s](){return F(this,l)},set[s](d){return nt(this,l,d)}},s));r?f&&r<4&&mt(l,(r>2?"set ":r>1?"get ":"")+s):mt(o,s);for(var I=v.length-1;I>=0;I--)u=se(r,s,O={},t[3],G),r&&(u.static=E,u.private=f,S=u.access={has:f?d=>re(o,d):d=>s in d},r^3&&(S.get=f?d=>(r^1?F:X)(d,o,r^4?l:b.get):d=>d[s]),r>2&&(S.set=f?(d,$)=>nt(d,o,$,r^4?l:b.set):(d,$)=>d[s]=$)),h=(0,v[I])(r?r<4?f?l:b[N]:r>4?void 0:{get:b.get,set:b.set}:o,u),O._=1,r^4||h===void 0?U(h)&&(r>4?P.unshift(h):r?f?l=h:b[N]=h:o=h):typeof h!="object"||h===null?K("Object expected"):(U(_=h.get)&&(b.get=_),U(_=h.set)&&(b.set=_),U(_=h.init)&&P.unshift(_));return r||ne(t,o),b&&vt(o,s,b),f?r^4?l:b:o},bt=(t,e,s)=>e.has(t)||K("Cannot "+s),re=(t,e)=>Object(e)!==e?K('Cannot use the "in" operator on this value'):t.has(e),F=(t,e,s)=>(bt(t,e,"read from private field"),s?s.call(t):e.get(t)),pt=(t,e,s)=>e.has(t)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),nt=(t,e,s,v)=>(bt(t,e,"write to private field"),v?v.call(t,s):e.set(t,s),s),X=(t,e,s)=>(bt(t,e,"access private method"),s),$t,xt,At,x,M,rt,W,Tt,Ot,ct;At=[St({name:"bs-stepper-step",template:Xt})],xt=[J()],$t=[J()];class V{constructor(){pt(this,W),this.label=Q(x,8,this),Q(x,11,this),this.number=Q(x,12,this),Q(x,15,this),this.id=`id${Math.random().toString(36).substring(2,9)}`,pt(this,M),pt(this,rt,gt(HTMLElement))}attaching(){F(this,rt).setAttribute("id",this.id)}attached(){X(this,W,Tt).call(this)}detaching(){X(this,W,Ot).call(this)}}x=ee();M=new WeakMap;rt=new WeakMap;W=new WeakSet;Tt=function(){const t=X(this,W,ct).call(this,F(this,rt));t?(nt(this,M,t.viewModel),F(this,M).steps.push(this)):console.error("Invalid usage of <bs-stepper-step> component outside of <bs-stepper>")};Ot=function(){F(this,M)?.steps.splice(F(this,M).steps.indexOf(this),1),nt(this,M,void 0)};ct=function(t){return t.tagName==="BS-STEPPER"?Dt.for(t):t.parentElement?X(this,W,ct).call(this,t.parentElement):null};ht(x,5,"label",xt,V);ht(x,5,"number",$t,V);V=ht(x,0,"BsStepperStep",At,V);Q(x,1,V);const pe={title:"BS stepper / Bootstrap stepper",component:T,render:()=>({components:[V],template:`<bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" component.ref="stepper">
    <bs-stepper-step number="1" label="Email">
      <bs-input label="Email address" type="email"></bs-input>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.next()">Next</button>
      </div>
    </bs-stepper-step>
    <bs-stepper-step number="2" label="Password">
      <bs-input label="Password" type="password"></bs-input>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.previous()">Previous</button>
        <button bs-button click.trigger="stepper.next()">Next</button>
      </div>
    </bs-stepper-step>
    <bs-stepper-step number="3" label="Validate">
      <bs-alert>Final step!</bs-alert>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.previous()">Previous</button>
        <button bs-button>Submit</button>
      </div>
    </bs-stepper-step>
  </bs-stepper>
  `}),argTypes:{linear:{control:"boolean"},animation:{control:"boolean"},vertical:{control:"boolean"}},parameters:{actions:{handles:["show.bs-stepper","shown.bs-stepper"]}}},Z={args:{}},j={render:()=>({components:[V],template:`
    <div style="margin-bottom: 1rem">
      <button bs-button click.trigger="addStep(steps)">Add Step</button>
      <button bs-button variant="danger" click.trigger="removeStep(steps)" disabled.bind="steps.length <= 2">Remove Last Step</button>
      <span style="margin-left: 1rem">Total steps: \${steps.length}</span>
    </div>

    <bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" component.ref="stepper">
      <bs-stepper-step repeat.for="step of steps" number.bind="step.number" label.bind="step.label">
        <h4>\${step.label}</h4>
        <p>\${step.content}</p>
        <div style="margin-top: 1rem">
          <button bs-button click.trigger="stepper.previous()" if.bind="!$first">Previous</button>
          <button bs-button click.trigger="stepper.next()" if.bind="!$last">Next</button>
          <button bs-button if.bind="$last">Complete</button>
        </div>
      </bs-stepper-step>
    </bs-stepper>`,props:{steps:[{number:"1",label:"Step 1",content:"This is the first step"},{number:"2",label:"Step 2",content:"This is the second step"},{number:"3",label:"Step 3",content:"This is the third step"}],addStep:t=>{const e=t.length+1;t.push({number:e.toString(),label:`Step ${e}`,content:`This is step ${e}`})},removeStep:t=>{t.length>2&&t.pop()}}})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...Z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: [BsStepperStep],
    template: \`
    <div style="margin-bottom: 1rem">
      <button bs-button click.trigger="addStep(steps)">Add Step</button>
      <button bs-button variant="danger" click.trigger="removeStep(steps)" disabled.bind="steps.length <= 2">Remove Last Step</button>
      <span style="margin-left: 1rem">Total steps: \\\${steps.length}</span>
    </div>

    <bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" component.ref="stepper">
      <bs-stepper-step repeat.for="step of steps" number.bind="step.number" label.bind="step.label">
        <h4>\\\${step.label}</h4>
        <p>\\\${step.content}</p>
        <div style="margin-top: 1rem">
          <button bs-button click.trigger="stepper.previous()" if.bind="!$first">Previous</button>
          <button bs-button click.trigger="stepper.next()" if.bind="!$last">Next</button>
          <button bs-button if.bind="$last">Complete</button>
        </div>
      </bs-stepper-step>
    </bs-stepper>\`,
    props: {
      steps: [{
        number: '1',
        label: 'Step 1',
        content: 'This is the first step'
      }, {
        number: '2',
        label: 'Step 2',
        content: 'This is the second step'
      }, {
        number: '3',
        label: 'Step 3',
        content: 'This is the third step'
      }],
      addStep: (steps: any[]) => {
        const newStepNumber = steps.length + 1;
        steps.push({
          number: newStepNumber.toString(),
          label: \`Step \${newStepNumber}\`,
          content: \`This is step \${newStepNumber}\`
        });
      },
      removeStep: (steps: any[]) => {
        if (steps.length > 2) {
          steps.pop();
        }
      }
    }
  })
}`,...j.parameters?.docs?.source}}};const le=["Overview","DynamicSteps"];export{j as DynamicSteps,Z as Overview,le as __namedExportsOrder,pe as default};
