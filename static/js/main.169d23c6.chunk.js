(this.webpackJsonpnotii=this.webpackJsonpnotii||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(7),a=n.n(i),r=n(38),s=n(12),l=n(34),j=n.n(l),o=n(2);var d=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("h1",{children:[Object(o.jsx)(j.a,{})," Notii"]})})};var b=function(){var e=(new Date).getFullYear();return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{children:["Copyright \u24d2 ",e," \ud83d\ude1c, Made by Vishwa"]})})},u=n(36),O=n.n(u);var h=function(e){return Object(o.jsxs)("div",{className:"round",children:[Object(o.jsx)("input",{type:"checkbox",id:e.id,onClick:function(t){var n=t.target.checked;e.isCheck(n)}}),Object(o.jsx)("label",{for:e.id})]})};var x=function(e){function t(t){var n=t.target.value;e.isPriority(n)}return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"cntr",children:[Object(o.jsxs)("label",{for:e.id+"1",className:"radio lowP",children:[Object(o.jsx)("input",{type:"radio",name:e.id,id:e.id+"1",className:"hidden",value:"low",onClick:t}),Object(o.jsx)("span",{className:"label"})]}),Object(o.jsxs)("label",{for:e.id+"2",className:"radio normalP",children:[Object(o.jsx)("input",{type:"radio",name:e.id,id:e.id+"2",className:"hidden",value:"normal",onClick:t}),Object(o.jsx)("span",{className:"label"})]}),Object(o.jsxs)("label",{for:e.id+"3",className:"radio highP",children:[Object(o.jsx)("input",{type:"radio",name:e.id,id:e.id+"3",className:"hidden",value:"high",onClick:t}),Object(o.jsx)("span",{className:"label"})]})]})})},f=n(70),v=n(71);var m=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)("normal"),l=Object(s.a)(r,2),j=l[0],d=l[1];return Object(o.jsxs)("div",{className:"note "+j,children:[Object(o.jsx)("h1",{contentEditable:"true",style:i?{fontStyle:"italic"}:null,children:e.title}),Object(o.jsx)("p",{contentEditable:"true",style:i?{textDecoration:"line-through"}:null,children:e.content}),Object(o.jsx)(v.a,{in:!0,children:Object(o.jsx)(f.a,{onClick:function(){e.onDelete(e.id)},children:Object(o.jsx)(O.a,{})})}),Object(o.jsx)(h,{id:"C"+e.id,isCheck:function(e){a(e)}}),Object(o.jsx)(x,{id:"P"+e.id,isPriority:function(e){d(e)}})]})},p=n(26),k=n(33),N=n(37),y=n.n(N);var C=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)({title:"",content:""}),l=Object(s.a)(r,2),j=l[0],d=l[1];function b(e){var t=e.target,n=t.name,c=t.value;d((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(p.a)({},n,c))}))}return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"create-note",children:[i&&Object(o.jsx)("input",{name:"title",onChange:b,value:j.title,placeholder:"Title"}),Object(o.jsx)("textarea",{onClick:function(){return a(!0)},name:"content",onChange:b,value:j.content,placeholder:"Take a note...",rows:i?3:1}),Object(o.jsx)(v.a,{in:i,children:Object(o.jsx)(f.a,{onClick:function(t){e.onAdd(j),d({title:"",content:""}),t.preventDefault()},children:Object(o.jsx)(y.a,{})})})]})})};var g=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];function a(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(C,{onAdd:function(e){i((function(t){return[].concat(Object(r.a)(t),[e])}))}}),n.map((function(e,t){return Object(o.jsx)(m,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(o.jsx)(b,{})]})};document.body.setAttribute("spellcheck",!1),a.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.169d23c6.chunk.js.map