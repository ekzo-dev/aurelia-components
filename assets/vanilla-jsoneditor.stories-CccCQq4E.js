const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BZcqjDUc.js","./preload-helper-PPVm8Dsz.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as Se}from"./preload-helper-PPVm8Dsz.js";import{K as ke,s as i,L as Oe,M as v,N as Re}from"./iframe-CQr_Z5xa.js";const Te=`<template class="\${theme === 'dark' ? 'jse-theme-dark' : ''}"></template>`;var Ee=Object.create,x=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Le=(a,t)=>(t=Symbol[a])?t:Symbol.for("Symbol."+a),f=a=>{throw TypeError(a)},Pe=(a,t,r)=>t in a?x(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,I=(a,t)=>x(a,"name",{value:t,configurable:!0}),je=a=>[,,,Ee(null)],U=["class","method","getter","setter","accessor","field","value","get","set"],C=a=>a!==void 0&&typeof a!="function"?f("Function expected"):a,we=(a,t,r,h,c)=>({kind:U[a],name:t,metadata:h,addInitializer:l=>r._?f("Already initialized"):c.push(C(l||null))}),Je=(a,t)=>Pe(t,Le("metadata"),a[3]),n=(a,t,r,h)=>{for(var c=0,l=a[t>>1],p=l&&l.length;c<p;c++)t&1?l[c].call(r):h=l[c].call(r,h);return h},s=(a,t,r,h,c,l)=>{var p,m,F,b,E,d=t&7,V=!!(t&8),g=!!(t&16),L=d>3?a.length+1:d?V?1:2:0,N=U[d+5],q=d>3&&(a[L-1]=[]),Me=a[L]||(a[L]=[]),_=d&&(!g&&!V&&(c=c.prototype),d<5&&(d>3||!g)&&Ve(d<4?c:{get[r](){return T(this,l)},set[r](u){return w(this,l,u)}},r));d?g&&d<4&&I(l,(d>2?"set ":d>1?"get ":"")+r):I(c,r);for(var P=h.length-1;P>=0;P--)b=we(d,r,F={},a[3],Me),d&&(b.static=V,b.private=g,E=b.access={has:g?u=>xe(c,u):u=>r in u},d^3&&(E.get=g?u=>(d^1?T:J)(u,c,d^4?l:_.get):u=>u[r]),d>2&&(E.set=g?(u,j)=>w(u,c,j,d^4?l:_.set):(u,j)=>u[r]=j)),m=(0,h[P])(d?d<4?g?l:_[N]:d>4?void 0:{get:_.get,set:_.set}:c,b),F._=1,d^4||m===void 0?C(m)&&(d>4?q.unshift(m):d?g?l=m:_[N]=m:c=m):typeof m!="object"||m===null?f("Object expected"):(C(p=m.get)&&(_.get=p),C(p=m.set)&&(_.set=p),C(p=m.init)&&q.unshift(p));return d||Je(a,c),_&&x(c,r,_),g?d^4?l:_:c},z=(a,t,r)=>t.has(a)||f("Cannot "+r),xe=(a,t)=>Object(t)!==t?f('Cannot use the "in" operator on this value'):a.has(t),T=(a,t,r)=>(z(a,t,"read from private field"),r?r.call(a):t.get(a)),A=(a,t,r)=>t.has(a)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,r),w=(a,t,r,h)=>(z(a,t,"write to private field"),h?h.call(a,r):t.set(a,r),r),J=(a,t,r)=>(z(a,t,"access private method"),r),D,Q,W,Y,$,G,H,K,X,Z,ee,te,ne,ae,re,oe,se,ie,de,ce,le,he,ue,me,_e,ge,pe,ve,fe,be,Ce,e,B,R,Be,ye;Ce=[Re({name:"vanilla-jsoneditor",template:Te})],be=[i({mode:Oe.twoWay})],fe=[i()],ve=[i()],pe=[i(v)],ge=[i(v)],_e=[i(v)],me=[i(v)],ue=[i(v)],he=[i()],le=[i()],ce=[i(v)],de=[i(v)],ie=[i()],se=[i()],oe=[i()],re=[i()],ae=[i()],ne=[i()],te=[i()],ee=[i()],Z=[i()],X=[i()],K=[i()],H=[i()],G=[i()],$=[i()],Y=[i()],W=[i()],Q=[i()],D=[i()];class o{constructor(){A(this,R),this.content=n(e,8,this,{text:""}),n(e,11,this),this.selection=n(e,12,this),n(e,15,this),this.mode=n(e,16,this,"tree"),n(e,19,this),this.mainMenuBar=n(e,20,this,!0),n(e,23,this),this.navigationBar=n(e,24,this,!0),n(e,27,this),this.statusBar=n(e,28,this,!0),n(e,31,this),this.askToFormat=n(e,32,this,!0),n(e,35,this),this.readOnly=n(e,36,this,!1),n(e,39,this),this.indentation=n(e,40,this,2),n(e,43,this),this.tabSize=n(e,44,this,4),n(e,47,this),this.escapeControlCharacters=n(e,48,this,!1),n(e,51,this),this.escapeUnicodeCharacters=n(e,52,this,!1),n(e,55,this),this.flattenColumns=n(e,56,this,!0),n(e,59,this),this.validator=n(e,60,this),n(e,63,this),this.parser=n(e,64,this,JSON),n(e,67,this),this.validationParser=n(e,68,this,JSON),n(e,71,this),this.pathParser=n(e,72,this),n(e,75,this),this.queryLanguages=n(e,76,this),n(e,79,this),this.queryLanguageId=n(e,80,this),n(e,83,this),this.theme=n(e,84,this,"default"),n(e,87,this),this.onError=n(e,88,this),n(e,91,this),this.onChange=n(e,92,this),n(e,95,this),this.onChangeMode=n(e,96,this),n(e,99,this),this.onClassName=n(e,100,this),n(e,103,this),this.onRenderValue=n(e,104,this),n(e,107,this),this.onSelect=n(e,108,this),n(e,111,this),this.onRenderMenu=n(e,112,this),n(e,115,this),this.onChangeQueryLanguage=n(e,116,this),n(e,119,this),this.onFocus=n(e,120,this),n(e,123,this),this.onBlur=n(e,124,this),n(e,127,this),this.editor=void 0,this.editorModule=void 0,this.host=ke(HTMLElement),A(this,B)}get(){return this.editor?.get()}set(t){return this.editor?.set(t)}patch(t){return this.editor?.patch(t)}expand(t,r){return this.editor?.expand(t,r)}transform(t){return this.editor?.transform(t)}scrollTo(t){return this.editor?.scrollTo(t)}findElement(t){return this.editor?.findElement(t)}acceptAutoRepair(){return this.editor?.acceptAutoRepair()}refresh(){return this.editor?.refresh()}validate(){return this.editor?.validate()}select(t){return this.editor?.select(t)}focus(){return this.editor?.focus()}async attaching(){return J(this,R,Be).call(this)}detaching(){J(this,R,ye).call(this)}propertyChanged(t,r){t==="content"?r!==T(this,B)&&this.editor?.update(r):this.editor?.updateProps({[t]:r})}}e=je();B=new WeakMap;R=new WeakSet;Be=async function(){this.editorModule=await Se(()=>import("./index-BZcqjDUc.js"),__vite__mapDeps([0,1,2]),import.meta.url);const a={};Object.keys(this.$controller.definition.bindables).forEach(t=>{this[t]!==void 0&&(a[t]=this[t])}),this.editor=this.editorModule.createJSONEditor({target:this.host,props:{...a,onChange:(t,r,h)=>{w(this,B,t),this.content=T(this,B),this.onChange&&this.onChange(t,r,h)}}})};ye=function(){this.editor?.destroy(),this.editor=void 0};s(e,5,"content",be,o);s(e,5,"selection",fe,o);s(e,5,"mode",ve,o);s(e,5,"mainMenuBar",pe,o);s(e,5,"navigationBar",ge,o);s(e,5,"statusBar",_e,o);s(e,5,"askToFormat",me,o);s(e,5,"readOnly",ue,o);s(e,5,"indentation",he,o);s(e,5,"tabSize",le,o);s(e,5,"escapeControlCharacters",ce,o);s(e,5,"escapeUnicodeCharacters",de,o);s(e,5,"flattenColumns",ie,o);s(e,5,"validator",se,o);s(e,5,"parser",oe,o);s(e,5,"validationParser",re,o);s(e,5,"pathParser",ae,o);s(e,5,"queryLanguages",ne,o);s(e,5,"queryLanguageId",te,o);s(e,5,"theme",ee,o);s(e,5,"onError",Z,o);s(e,5,"onChange",X,o);s(e,5,"onChangeMode",K,o);s(e,5,"onClassName",H,o);s(e,5,"onRenderValue",G,o);s(e,5,"onSelect",$,o);s(e,5,"onRenderMenu",Y,o);s(e,5,"onChangeQueryLanguage",W,o);s(e,5,"onFocus",Q,o);s(e,5,"onBlur",D,o);o=s(e,0,"VanillaJsoneditor",Ce,o);n(e,1,o);const Ne={title:"Svelte Jsoneditor / Vanilla Jsoneditor",component:o,render:()=>({template:`<vanilla-jsoneditor
      content.bind='content'
      selection.bind='selection'
      mode.bind='mode'
      main-menu-bar.bind='mainMenuBar'
      navigation-bar.bind='navigationBar'
      status-bar.bind='statusBar'
      ask-to-format.bind='askToFormat'
      read-only.bind='readOnly'
      indentation.bind='indentation'
      tab-size.bind='tabSize'
      escape-control-characters.bind='escapeControlCharacters'
      escape-unicode-characters.bind='escapeUnicodeCharacters'
      flatten-columns.bind='flattenColumns'
      validator.bind='validator'
      query-language-id.bind='queryLanguageId'
      theme.bind='theme'
    ></vanilla-jsoneditor>`}),argTypes:{content:{control:"object"},selection:{control:"object"},mode:{control:"select",options:["tree","text","table"]},mainMenuBar:{control:"boolean"},navigationBar:{control:"boolean"},statusBar:{control:"boolean"},askToFormat:{control:"boolean"},readOnly:{control:"boolean"},indentation:{control:"number"},tabSize:{control:"number"},escapeControlCharacters:{control:"boolean"},escapeUnicodeCharacters:{control:"boolean"},flattenColumns:{control:"boolean"},validator:{control:"object"},parser:{control:!1},validationParser:{control:!1},pathParser:{control:!1},queryLanguages:{control:"object"},queryLanguageId:{control:"text"},theme:{control:"select",options:["default","dark"]},onError:{control:!1},onChange:{control:!1},onChangeMode:{control:!1},onClassName:{control:!1},onRenderValue:{control:!1},onSelect:{control:!1},onRenderMenu:{control:!1},onChangeQueryLanguage:{control:!1},onFocus:{control:!1},onBlur:{control:!1}}},y={args:{content:{json:{name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","hiking"]}},mode:"tree",theme:"default",mainMenuBar:!0,navigationBar:!0,statusBar:!0,askToFormat:!0,readOnly:!1,indentation:2,tabSize:4,escapeControlCharacters:!1,escapeUnicodeCharacters:!1,flattenColumns:!0,onRenderValue:void 0}},M={args:{content:{text:JSON.stringify({name:"Jane Smith",age:25,active:!0,tags:["developer","designer"]},null,2)},mode:"text",theme:"default",mainMenuBar:!0,navigationBar:!0,statusBar:!0,onRenderValue:void 0}},S={args:{content:{json:[{id:1,name:"Alice",age:28,city:"London"},{id:2,name:"Bob",age:35,city:"Paris"},{id:3,name:"Charlie",age:42,city:"Berlin"}]},mode:"table",theme:"default",mainMenuBar:!0,navigationBar:!0,statusBar:!0,onRenderValue:void 0}},k={args:{content:{json:{user:"admin",settings:{theme:"dark",notifications:!0}}},mode:"tree",theme:"dark",mainMenuBar:!0,navigationBar:!0,statusBar:!0,onRenderValue:void 0}},O={args:{content:{json:{message:"This editor is read-only",canEdit:!1}},mode:"tree",theme:"default",readOnly:!0,mainMenuBar:!0,navigationBar:!0,statusBar:!0,onRenderValue:void 0}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: {
      json: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        address: {
          street: '123 Main St',
          city: 'New York',
          country: 'USA'
        },
        hobbies: ['reading', 'coding', 'hiking']
      }
    },
    mode: 'tree',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    askToFormat: true,
    readOnly: false,
    indentation: 2,
    tabSize: 4,
    escapeControlCharacters: false,
    escapeUnicodeCharacters: false,
    flattenColumns: true,
    // must be reset here, otherwise editor breaks because callback required a return value
    onRenderValue: undefined
  }
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    content: {
      text: JSON.stringify({
        name: 'Jane Smith',
        age: 25,
        active: true,
        tags: ['developer', 'designer']
      }, null, 2)
    },
    mode: 'text',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined
  }
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    content: {
      json: [{
        id: 1,
        name: 'Alice',
        age: 28,
        city: 'London'
      }, {
        id: 2,
        name: 'Bob',
        age: 35,
        city: 'Paris'
      }, {
        id: 3,
        name: 'Charlie',
        age: 42,
        city: 'Berlin'
      }]
    },
    mode: 'table',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    content: {
      json: {
        user: 'admin',
        settings: {
          theme: 'dark',
          notifications: true
        }
      }
    },
    mode: 'tree',
    theme: 'dark',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined
  }
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    content: {
      json: {
        message: 'This editor is read-only',
        canEdit: false
      }
    },
    mode: 'tree',
    theme: 'default',
    readOnly: true,
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined
  }
}`,...O.parameters?.docs?.source}}};const qe=["Overview","TextMode","TableMode","DarkTheme","ReadOnly"];export{k as DarkTheme,y as Overview,O as ReadOnly,S as TableMode,M as TextMode,qe as __namedExportsOrder,Ne as default};
