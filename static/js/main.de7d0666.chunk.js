(this.webpackJsonpnotii=this.webpackJsonpnotii||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(7),a=n.n(i),r=n(38),s=n(12),l=n(34),o=n.n(l),j=n(2);var d=function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{children:[Object(j.jsx)(o.a,{})," Notii"]})})};var b=function(){var e=(new Date).getFullYear();return Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["Copyright \u24d2 ",e," \ud83d\ude1c, Made by Vishwa"]})})},u=n(36),O=n.n(u);var h=function(e){return Object(j.jsxs)("div",{className:"round",children:[Object(j.jsx)("input",{type:"checkbox",id:e.id,onClick:function(t){var n=t.target.checked;e.isCheck(n)}}),Object(j.jsx)("label",{for:e.id})]})};var x=function(e){function t(t){var n=t.target.value;e.isPriority(n)}return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"cntr",children:[Object(j.jsxs)("label",{for:e.id+"1",className:"radio lowP",children:[Object(j.jsx)("input",{type:"radio",name:e.id,id:e.id+"1",className:"hidden",value:"low",onClick:t}),Object(j.jsx)("span",{className:"label"})]}),Object(j.jsxs)("label",{for:e.id+"2",className:"radio normalP",children:[Object(j.jsx)("input",{type:"radio",name:e.id,id:e.id+"2",className:"hidden",value:"normal",onClick:t}),Object(j.jsx)("span",{className:"label"})]}),Object(j.jsxs)("label",{for:e.id+"3",className:"radio highP",children:[Object(j.jsx)("input",{type:"radio",name:e.id,id:e.id+"3",className:"hidden",value:"high",onClick:t}),Object(j.jsx)("span",{className:"label"})]})]})})},f=n(70),v=n(71);var m=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)("normal"),l=Object(s.a)(r,2),o=l[0],d=l[1];return Object(j.jsxs)("div",{className:"note "+o,children:[Object(j.jsx)("h1",{contentEditable:"true",style:i?{fontStyle:"italic"}:null,children:e.title}),Object(j.jsx)("p",{contentEditable:"true",style:i?{textDecoration:"line-through"}:null,children:e.content}),Object(j.jsx)(v.a,{in:!0,children:Object(j.jsx)(f.a,{onClick:function(){e.onDelete(e.id)},children:Object(j.jsx)(O.a,{})})}),Object(j.jsx)(h,{id:"C"+e.id,isCheck:function(e){a(e)}}),Object(j.jsx)(x,{id:"P"+e.id,isPriority:function(e){d(e)}})]})},p=n(26),N=n(33),g=n(37),k=n.n(g);var y=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)({title:"",content:""}),l=Object(s.a)(r,2),o=l[0],d=l[1];function b(e){var t=e.target,n=t.name,c=t.value;d((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(p.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"create-note",children:[i&&Object(j.jsx)("input",{name:"title",onChange:b,value:o.title,placeholder:"Title"}),Object(j.jsx)("textarea",{onClick:function(){return a(!0)},name:"content",onChange:b,value:o.content,placeholder:"Take a note...",rows:i?3:1}),Object(j.jsx)(v.a,{in:i,children:Object(j.jsx)(f.a,{onClick:function(t){e.onAdd(o),d({title:"",content:""}),t.preventDefault()},children:Object(j.jsx)(k.a,{})})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];function a(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notes"));e&&i(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(y,{onAdd:function(e){i((function(t){return[].concat(Object(r.a)(t),[e])}))}}),n.map((function(e,t){return Object(j.jsx)(m,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(j.jsx)(b,{})]})};document.body.setAttribute("spellcheck",!1),a.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.de7d0666.chunk.js.map