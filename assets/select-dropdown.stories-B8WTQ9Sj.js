import{R as Q,s as Z,U as D,H as ee,N as te,W as oe,j as ne,X as ie,Y as ae,h as le,p as re,e as se}from"./iframe-Ur3dRF5-.js";import"./preload-helper-PPVm8Dsz.js";const de=`<template class="addon \${floatingLabel ? 'form-floating' : ''}" bs-dropdown><label if.bind="label && !floatingLabel" class=form-label for.one-time=id>\${label}</label> <input bs-dropdown-toggle="arrow.bind: false" class="form-select \${bsSize ? \`form-select-\${bsSize}\` : ''} \${valid ? 'is-valid' : valid === false ? 'is-invalid' : ''}" placeholder="\${emptyOption?.text ?? ''}" autocomplete=off id.one-time=id keydown.trigger=$event.preventDefault() ref=control value=\${valueText}> <button bs-close-button click.trigger=clear() if.bind=showClear type=button></button> <bs-dropdown-menu auto-close.bind="multiple ? 'outside' : true" popper-config.bind=popperConfig> <template if.bind="optionsCount > 10"><div bs-dropdown-item=text><input placeholder="Filter options" value.bind="filter & debounce:250" class=form-control type=search></div> <hr bs-dropdown-item=divider></template> <template if.bind=multiple><div class="dropdown-item \${option.disabled ? 'disabled' : ''}" repeat.for="option of ungroupedOptions | filter:filter"><div class=form-check><input checked.bind=value class=form-check-input disabled.one-time=option.disabled id.one-time=optionId($index) matcher.bind=matcher type=checkbox value.one-time=option.value><label class=form-check-label for.one-time=optionId($index)>\${option.text || ' '}</label></div></div> <template repeat.for="[k, v] of groupedOptions | filter:filter"><h6 bs-dropdown-item=header>\${k}</h6> <div class="dropdown-item ps-4 \${option.disabled ? 'disabled' : ''}" repeat.for="option of v"><div class=form-check><input id.one-time="optionId($index, $parent.$index)" checked.bind=value class=form-check-input disabled.one-time=option.disabled matcher.bind=matcher type=checkbox value.one-time=option.value><label for.one-time="optionId($index, $parent.$index)" class=form-check-label>\${option.text || ' '}</label></div></div></template></template> <template else><button class="dropdown-item \${option.value === selectedOption?.value ? 'active' : ''}" repeat.for="option of ungroupedOptions | filter:filter:emptyOption" click.trigger=selectOption(option) disabled.one-time=option.disabled type=button>\${option.text || ' '}</button> <template repeat.for="[k, v] of groupedOptions | filter:filter:emptyOption"><h6 bs-dropdown-item=header>\${k}</h6> <button class="ps-4 dropdown-item \${option.value === selectedOption?.value ? 'active' : ''}" repeat.for="option of v" click.trigger=selectOption(option) disabled.one-time=option.disabled type=button>\${option.text || ' '}</button></template></template> </bs-dropdown-menu> <label if.bind="label && floatingLabel" for.one-time=id><span>\${label}</span></label> <div class=invalid-feedback if.bind=invalidFeedback>\${invalidFeedback}</div> <div class=valid-feedback if.bind=validFeedback>\${validFeedback}</div></template>`;var pe=Object.create,z=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,ue=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),W=t=>{throw TypeError(t)},be=(t,e,o)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ve=(t,e)=>z(t,"name",{value:e,configurable:!0}),fe=t=>[,,,pe(null)],me=["class","method","getter","setter","accessor","field","value","get","set"],q=t=>t!==void 0&&typeof t!="function"?W("Function expected"):t,he=(t,e,o,a,n)=>({kind:me[t],name:e,metadata:a,addInitializer:i=>o._?W("Already initialized"):n.push(q(i||null))}),ge=(t,e)=>be(e,ue("metadata"),t[3]),_e=(t,e,o,a)=>{for(var n=0,i=t[e>>1],s=i&&i.length;n<s;n++)i[n].call(o);return a},we=(t,e,o,a,n,i)=>{var s,r,u,d=e&7,b=!1,l=0,g=t[l]||(t[l]=[]),p=d&&(n=n.prototype,d<5&&(d>3||!b)&&ce(n,o));ve(n,o);for(var f=a.length-1;f>=0;f--)u=he(d,o,r={},t[3],g),s=(0,a[f])(n,u),r._=1,q(s)&&(n=s);return ge(t,n),p&&z(n,o,p),b?d^4?i:p:n},G,F;G=[Q("filter")];class k{toView(e,o,a){if(o===""&&a===void 0)return e;const n=i=>i.value!==a?.value&&(i.text??"").toLowerCase().includes(o.toLowerCase());if(e instanceof Map){const i=new Map;return e.forEach((s,r)=>{const u=s.filter(n);u.length&&i.set(r,u)}),i}else return e.filter(n)}}F=fe();k=we(F,0,"Filter",G,k);_e(F,1,k);var xe=Object.create,E=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,N=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),h=t=>{throw TypeError(t)},Oe=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,M=(t,e)=>E(t,"name",{value:e,configurable:!0}),$e=t=>[,,,xe(t?.[N("metadata")]??null)],H=["class","method","getter","setter","accessor","field","value","get","set"],_=t=>t!==void 0&&typeof t!="function"?h("Function expected"):t,ke=(t,e,o,a,n)=>({kind:H[t],name:e,metadata:a,addInitializer:i=>o._?h("Already initialized"):n.push(_(i||null))}),Se=(t,e)=>Oe(e,N("metadata"),t[3]),L=(t,e,o,a)=>{for(var n=0,i=t[e>>1],s=i&&i.length;n<s;n++)e&1?i[n].call(o):a=i[n].call(o,a);return a},R=(t,e,o,a,n,i)=>{var s,r,u,d,b,l=e&7,g=!!(e&8),p=!!(e&16),f=l>3?t.length+1:l?g?1:2:0,I=H[l+5],j=l>3&&(t[f-1]=[]),K=t[f]||(t[f]=[]),v=l&&(!p&&!g&&(n=n.prototype),l<5&&(l>3||!p)&&ye(l<4?n:{get[o](){return P(this,i)},set[o](c){return V(this,i,c)}},o));l?p&&l<4&&M(i,(l>2?"set ":l>1?"get ":"")+o):M(n,o);for(var S=a.length-1;S>=0;S--)d=ke(l,o,u={},t[3],K),l&&(d.static=g,d.private=p,b=d.access={has:p?c=>Ce(n,c):c=>o in c},l^3&&(b.get=p?c=>(l^1?P:U)(c,n,l^4?i:v.get):c=>c[o]),l>2&&(b.set=p?(c,C)=>V(c,n,C,l^4?i:v.set):(c,C)=>c[o]=C)),r=(0,a[S])(l?l<4?p?i:v[I]:l>4?void 0:{get:v.get,set:v.set}:n,d),u._=1,l^4||r===void 0?_(r)&&(l>4?j.unshift(r):l?p?i=r:v[I]=r:n=r):typeof r!="object"||r===null?h("Object expected"):(_(s=r.get)&&(v.get=s),_(s=r.set)&&(v.set=s),_(s=r.init)&&j.unshift(s));return l||Se(t,n),v&&E(n,o,v),p?l^4?i:v:n},T=(t,e,o)=>e.has(t)||h("Cannot "+o),Ce=(t,e)=>Object(e)!==e?h('Cannot use the "in" operator on this value'):t.has(e),P=(t,e,o)=>(T(t,e,"read from private field"),o?o.call(t):e.get(t)),Le=(t,e,o)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),V=(t,e,o,a)=>(T(t,e,"write to private field"),a?a.call(t,o):e.set(t,o),o),U=(t,e,o)=>(T(t,e,"access private method"),o),X,A,Y,m,B,J;Y=[te({name:"bs-select-dropdown",template:de,dependencies:[oe,ne,ie,ae,k,le]})];class w extends(A=ee,X=[Z()],A){constructor(){super(...arguments),Le(this,B),this.emptyValue=L(m,8,this,null),L(m,11,this),this.filter="",this.emptyOption=void 0,this.popperConfig=null}binding(){this.multiple&&!Array.isArray(this.value)&&(this.value=[])}attached(){this.setPopperConfig()}valueChanged(e){this.multiple&&!Array.isArray(e)&&(this.value=[])}propertyChanged(e,o,a){super.propertyChanged(e,o,a),this.control.removeAttribute("multiple")}setPopperConfig(){const{host:e}=this,o=e.closest(".modal-body,.popover-body,.offcanvas-body"),a=e.querySelector(".dropdown-menu");o!=null?(this.popperConfig={strategy:"fixed"},a.style.minWidth=`${e.offsetWidth}px`):(this.popperConfig=null,a.style.minWidth="")}optionId(e,o){return`${this.id}${o!=null?"-g"+o.toString():""}-${e}`}selectOption(e){this.value=e?.value,U(this,B,J).call(this)}get valueText(){if(this.multiple){const{options:a,value:n}=this;return Array.isArray(n)?n.map(i=>a.find(s=>s.value===i).text).join(", "):""}const{selectedOption:e,emptyOption:o}=this;return o&&o.value===e?.value?"":`${e?.group?e.group+" / ":""}${e?.text??""}`}get showClear(){return!this.disabled&&(this.emptyOption&&this.selectedOption?.value!==this.emptyOption.value||this.multiple&&Array.isArray(this.value)&&this.value.length>0)}clear(){this.selectOption(this.multiple?{value:[],text:""}:this.emptyOption)}get optionsCount(){const{options:e}=this;return e instanceof Object&&e.constructor===Object?Object.keys(e).length:e.length}get selectedOption(){if(this.multiple)return;const{value:e,emptyValue:o,matcher:a}=this;let{options:n}=this,i;n instanceof Object&&n.constructor===Object&&(n=Object.entries(n));const s=Array.isArray(n[0]);let r=n.find(d=>{const b=s?d[0]:d.value;return b==o&&(i={value:b,text:s?d[1]:d.text}),a?a(e,b):e===b});r=s&&r!==void 0?{value:r[0],text:r[1]}:r;const u=r?.value;return u!==e&&D(()=>this.value=u),D(()=>this.emptyOption=i),r}}m=$e(A);B=new WeakSet;J=function(){const t=new Event("change",{bubbles:!0}),e=new Event("input",{bubbles:!0});this.control.dispatchEvent(e),this.control.dispatchEvent(t)};R(m,5,"emptyValue",X,w);w=R(m,0,"BsSelectDropdown",Y,w);L(m,1,w);const ze={title:"Bootstrap Addons / Forms / Select",component:w,parameters:{actions:{handles:["change","input"]}},render:()=>({template:`<bs-select-dropdown
      value.bind='value'
      options.bind='options'
      multiple.bind='multiple'
      floating-label.bind='floatingLabel'
      size.bind='size'
      bs-size.bind='bsSize'
      autocomplete.bind='autocomplete'
      matcher.bind='matcher'
      empty-value.bind='emptyValue'
      name.bind='name'
      label.bind='label'
      title.bind='title'
      disabled.bind='disabled'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-select-dropdown>`}),argTypes:{value:{control:"object"},options:{control:"object"},multiple:{control:"boolean"},floatingLabel:{control:"boolean"},size:{control:"number"},bsSize:{control:"select",options:["sm","lg"]},autocomplete:{control:"text"},matcher:{control:"object"},emptyValue:{control:"object"},name:{control:"text"},label:{control:"text"},title:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},valid:{control:"boolean"},validFeedback:{control:"text"},invalidFeedback:{control:"text"},form:{control:"text"},text:{control:"text"}}},x={args:{label:"Label",floatingLabel:!1,valid:void 0,options:[{value:void 0,text:"Select option"},{value:"1",text:"One",disabled:!0},{value:"2",text:"Two"},{value:"3",text:"Three",group:"Group"}],value:"2"}},y={args:{label:"Label",floatingLabel:!1,valid:void 0,multiple:!0,value:["2","3"],options:[{value:"1",text:"One",disabled:!0},{value:"2",text:"Two"},{value:"3",text:"Three",group:"Group"}]}},O={render:()=>({template:`<bs-select-dropdown
      value.bind='value'
      options.bind='options'
      label.bind='label'
      style='width: 400px; max-width: 100%'
    ></bs-select-dropdown>`}),args:{label:"Label",options:Array.from({length:1e3}).map((t,e)=>({value:e.toString(),text:`Option ${e} has long content which forces dropdown menu to scale larger that select box`}))}},$={render:()=>({template:`
      <button bs-button click.trigger="offcanvas.toggle()">Open modal</button>
      <bs-offcanvas component.ref="offcanvas">
        <bs-select-dropdown
          value.bind='value'
          options.bind='options'
          label.bind='label'
          style='width: 100%'
        ></bs-select-dropdown>
        <div style="height: 2000px"></div>
      </bs-offcanvas>`,components:[re,se]}),args:{label:"Label",options:Array.from({length:1e3}).map((t,e)=>({value:e.toString(),text:`Option ${e} has long content which forces dropdown menu to scale larger that select box`}))}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    floatingLabel: false,
    valid: undefined,
    options: [{
      value: undefined,
      text: 'Select option'
    }, {
      value: '1',
      text: 'One',
      disabled: true
    }, {
      value: '2',
      text: 'Two'
    }, {
      value: '3',
      text: 'Three',
      group: 'Group'
    }],
    value: '2'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    floatingLabel: false,
    valid: undefined,
    multiple: true,
    value: ['2', '3'],
    options: [{
      value: '1',
      text: 'One',
      disabled: true
    }, {
      value: '2',
      text: 'Two'
    }, {
      value: '3',
      text: 'Three',
      group: 'Group'
    }]
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-select-dropdown
      value.bind='value'
      options.bind='options'
      label.bind='label'
      style='width: 400px; max-width: 100%'
    ></bs-select-dropdown>\`
  }),
  args: {
    label: 'Label',
    options: Array.from({
      length: 1000
    }).map((v, i) => ({
      value: i.toString(),
      text: \`Option \${i} has long content which forces dropdown menu to scale larger that select box\`
    }))
  }
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button bs-button click.trigger="offcanvas.toggle()">Open modal</button>
      <bs-offcanvas component.ref="offcanvas">
        <bs-select-dropdown
          value.bind='value'
          options.bind='options'
          label.bind='label'
          style='width: 100%'
        ></bs-select-dropdown>
        <div style="height: 2000px"></div>
      </bs-offcanvas>\`,
    components: [BsOffcanvas, BsButton]
  }),
  args: {
    label: 'Label',
    options: Array.from({
      length: 1000
    }).map((v, i) => ({
      value: i.toString(),
      text: \`Option \${i} has long content which forces dropdown menu to scale larger that select box\`
    }))
  }
}`,...$.parameters?.docs?.source}}};const Fe=["Overview","Multiple","LargeOptions","InModal"];export{$ as InModal,O as LargeOptions,y as Multiple,x as Overview,Fe as __namedExportsOrder,ze as default};
