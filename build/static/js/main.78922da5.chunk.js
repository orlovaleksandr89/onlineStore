(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(23),r=n.n(s),i=n(9),l=n.n(i),o=n(15),j=n(7),u=(n(70),n(11)),d=n(84),b=n(55),m=n(8),x=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),i=r[0],u=r[1],d=Object(c.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t){var n,c,s,r,i,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",c=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{},a(!0),e.prev=4,c&&(c=JSON.stringify(c),s["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:s});case 8:return r=e.sent,e.next=11,r.json();case 11:if(i=e.sent,r.ok){e.next=14;break}throw new Error(i.message||"\u0447\u0442\u043e\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return a(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),a(!1),u(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:d,error:i,clearError:function(){u(null)}}},h=n(85),O=n(1);var f=function(e){var t=e._id,n=e.price,c=e.imgURL,a=e.quantity,s=e.title,r=e.itemType,i=e.i;return Object(O.jsxs)(d.a,{className:"border my-2",children:[Object(O.jsx)(b.a,{md:1,className:"d-flex align-items-center justify-content-center",children:i+1}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:s}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:r}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:n}),Object(O.jsx)(b.a,{md:1,className:"d-flex align-items-center justify-content-center",children:a}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center ",children:Object(O.jsx)(h.a,{src:c,fluid:!0,alt:s})}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"Actions"})]},t)};var p=function(){return Object(O.jsxs)(d.a,{className:"border",children:[Object(O.jsx)(b.a,{md:1,className:"d-flex justify-content-center ",children:"id"}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"Title"}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"Type"}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"Price"}),Object(O.jsx)(b.a,{md:1,className:"d-flex align-items-center justify-content-center",children:"Quantity"}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"ImageUrl"}),Object(O.jsx)(b.a,{md:2,className:"d-flex align-items-center justify-content-center",children:"Actions"})]})};var v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=x().request,r=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/items");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)(p,{}),n.map((function(e,t){return Object(O.jsx)(f,Object(m.a)({i:t},e),e._id)}))]})},g=n(86),y=n(21),N=n(88),w={email:{isRequired:{message:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isEmail:{message:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e email"}},password:{isRequired:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isCapitalLetter:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0437\u0430\u0433\u043b\u0430\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443"},isNumber:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u044b\u0444\u0440\u0443"},min:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:8}},profession:{isRequired:{message:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u043a \u0432\u044b\u0431\u043e\u0440\u0443"}},licence:{isRequired:{message:"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0431\u0435\u0437 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438"}},name:{isRequired:{message:"\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},qualities:{isRequired:{message:"\u0412\u044b\u0431\u0438\u0440\u0435\u0442\u0435 \u0445\u043e\u0442\u044f \u0431 \u043e\u0434\u043d\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}},userId:{isRequired:{message:"\u0412\u044b\u0431\u0438\u0440\u0435\u0442\u0435 \u0445\u043e\u0442\u044f \u0431 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}},content:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},type:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u0442\u0438\u043f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},price:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isNumber:{message:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"}},title:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},description:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},quantity:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isNumber:{message:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"}},imgURL:{isRequired:{message:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isValidLink:{message:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c URL"}}},C=function(e,t){var n={};function c(e,t,n){var c;switch(e){case"isRequired":try{c="boolean"===typeof t?!t:"object"===typeof t?0===Object.keys(t).length:Array.isArray(t)?0===t.length:""===t.trim()}catch(r){console.log(r.message)}break;case"isEmail":c=!/^\S+@\S+\.\S+$/g.test(t);break;case"isCapitalLetter":c=!/[A-Z]+/g.test(t);break;case"isNumber":c=!/\d+/g.test(t);break;case"min":c=t.length<n.value;break;case"isCorrectDate":c=Number(t.split("-")[0])>(new Date).getFullYear();break;case"isValidLink":c=!/^\S+:\/\/\S+\.\S+/g.test(t)}if(c)return n.message}for(var a in e)for(var s in t[a]){var r=c(s,e[a],t[a][s]);r&&!n[a]&&(n[a]=r)}return n},k=n(35),S=Object(c.createContext)({isAuth:void 0,setAuth:function(e){},items:[],setItems:function(){},user:{email:"",password:"",role:void 0,id:void 0},setUser:function(e){},types:[],setTypes:function(e){},cart:[],addItemToCart:function(e){},deleteFromCart:function(e){},clearCart:function(){},incrementQty:function(e){},decrementQty:function(e){},error:"",setError:function(e){}});function T(e){var t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)([]),d=Object(j.a)(u,2),b=d[0],x=d[1],h=Object(c.useState)(""),f=Object(j.a)(h,2),p=f[0],v=f[1],g=Object(c.useState)([]),y=Object(j.a)(g,2),N=y[0],w=y[1],C=Object(c.useState)(!1),T=Object(j.a)(C,2),H=T[0],q=T[1];var R={isAuth:H,items:N,setItems:function(e){w(e)},deleteItem:function(e){w((function(t){return t.filter((function(t){return t.id!==e}))}))},setAuth:function(e){return q(e)},user:a,setUser:function(e){s(e)},types:l,setTypes:function(e){o(e.map((function(e){return{id:e._id,type:e.value}})))},addItemToCart:function(e){if(b.find((function(t){return t._id===e})))return b;var t=N.map((function(t){return t._id===e?Object(m.a)(Object(m.a)({},t),{},{qty:1}):t})),n=t.find((function(t){return t._id===e}));x((function(e){return[].concat(Object(k.a)(e),[n])}))},deleteFromCart:function(e){x(Object(k.a)(b.filter((function(t){return t._id!==e}))))},cart:b,incrementQty:function(e){var t=Object(k.a)(b);t.find((function(t){return t._id===e})).qty+=1,x(t)},decrementQty:function(e){var t=Object(k.a)(b),n=t.find((function(t){return t._id===e}));n.qty>0&&(n.qty-=1),x(t)},clearCart:function(){x([])},error:p,setError:function(e){v(e)}};return Object(O.jsx)(S.Provider,{value:R,children:e.children})}var H=S;function q(e){var t=e.label,n=e.name,a=e.onChangeHandle,s=e.value,r=e.type,i=e.error,l=Object(c.useState)(!1),o=Object(j.a)(l,2),u=o[0],d=o[1];return Object(O.jsxs)("div",{className:"d-flex flex-column mt-3",children:[Object(O.jsx)("label",{htmlFor:n,className:"mb-2",children:t}),Object(O.jsxs)("div",{className:"input-group has-validation",children:[Object(O.jsx)("input",{type:u?"text":r,id:n,value:s,name:n,onChange:function(e){var t=e.target;a({name:t.name,value:t.value})},className:"".concat(i?"form-control is-invalid":"form-control"," ")}),"password"===r&&Object(O.jsx)("span",{className:"btn btn-outline-secondary ",type:"button",onClick:function(){d((function(e){return!e}))},children:Object(O.jsx)("i",{className:u?"bi bi-eye":"bi bi-eye-slash"})}),i&&Object(O.jsx)("div",{className:"invalid-feedback text-danger",children:i})]})]})}q.defaultProps={type:"text"};var R=q;var A=function(e){var t=e.label,n=e.placeholder,c=e.name,a=e.onChangeHandle,s=e.value,r=e.rows,i=void 0===r?3:r,l=e.error;return Object(O.jsxs)("div",{className:"my-3",children:[Object(O.jsx)("label",{htmlFor:c,className:"mb-3",children:t}),Object(O.jsxs)("div",{className:"form-floating ",children:[Object(O.jsx)("textarea",{className:"".concat(l?"form-control p-1 is-invalid":"form-control p-1"," "),placeholder:n,id:c,style:{height:24*i+"px"},value:s,onChange:function(e){var t=e.target;a({name:t.id,value:t.value})}}),l&&Object(O.jsx)("div",{className:"invalid-feedback text-danger",children:l})]})]})};function B(e){var t=e.defaultOption,n=e.onChangeHandle,c=e.options,a=e.label,s=e.value,r=e.error,i=e.name,l=Array.isArray(c)||"object"!==typeof c?c.map((function(e){return{name:e.type,id:e.id,key:e.id}})):Object.keys(c).map((function(e){return{name:e,value:c[e].value,key:c[e].id}}));return"object"===typeof s&&(s=s.id),Object(O.jsxs)("div",{className:"d-flex flex-column mt-3",children:[Object(O.jsx)("label",{htmlFor:"validationCustom04",className:"form-label",children:a}),Object(O.jsxs)("select",{className:"".concat(r?"form-select is-invalid":"form-select"," "),id:"validationCustom04",value:s,onChange:function(e){var t=e.target;n({name:t.name,value:t.value})},name:i,children:[Object(O.jsx)("option",{disabled:!0,value:"",children:t}),l&&l.map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),r&&Object(O.jsx)("div",{className:"invalid-feedback",children:r})]})}B.defaultOption={error:"Please select something"};var I=B;var L=function(e){var t=e.show,n=e.onHide,a=e.title,s=e.cancelButtonText,r=e.confirmButtonText,i=e.createTypeInDB,l=Object(c.useContext)(H),o=Object(c.useState)({title:"",type:"",price:"",quantity:"",imgURL:"",description:""}),u=Object(j.a)(o,2),d=u[0],b=u[1],x=Object(c.useState)({}),h=Object(j.a)(x,2),f=h[0],p=h[1],v=function(e){var t=e.name,n=e.value;b((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(y.a)({},t,n))}))};Object(c.useEffect)((function(){k()}),[d]);var k=function(){var e=C(d,w);return p(e),0===Object.keys(e).length},S=0===Object.keys(f).length;return Object(O.jsxs)(N.a,{show:t,onHide:n,children:[Object(O.jsx)(N.a.Header,{children:Object(O.jsx)(N.a.Title,{children:a})}),Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)(R,{label:"Title",name:"title",onChangeHandle:v,value:d.title,error:f.title}),Object(O.jsx)(I,{label:"Type",options:l.types,defaultOption:"Choose type...",value:d.type,error:f.type,onChangeHandle:v,name:"type"}),Object(O.jsx)(A,{label:"Description",name:"description",onChangeHandle:v,value:d.description,error:f.description}),Object(O.jsx)(R,{label:"Price",name:"price",onChangeHandle:v,value:d.price,error:f.price,type:"number"}),Object(O.jsx)(R,{label:"Quantity",name:"quantity",onChangeHandle:v,value:d.quantity,error:f.quantity,type:"number"}),Object(O.jsx)(R,{label:"Image URL",name:"imgURL",onChangeHandle:v,value:d.imgURL,error:f.imgURL})]}),Object(O.jsxs)(N.a.Footer,{children:[Object(O.jsx)(g.a,{variant:"outline-warning",className:"text-dark",onClick:n,children:s}),Object(O.jsx)(g.a,{variant:"outline-success",className:"text-dark",disabled:!S,onClick:function(){n(),i(d)},children:r})]})]})};var F=function(){var e=x().request,t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],s=n[1],r=function(){var t=Object(o.a)(l.a.mark((function t(n){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=localStorage.getItem("token"),t.next=4,e("/auth/createitem","POST",Object(m.a)({},n),{Authorization:"Bearer ".concat(c)});case 4:a=t.sent,alert(a.message),console.log(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(g.a,{variant:"success",onClick:function(){return s(!0)},children:"Create Item"}),a&&Object(O.jsx)(L,{show:a,onHide:function(){s(!1)},title:"Create a new item in store",cancelButtonText:"Cancel",confirmButtonText:"Create!",createTypeInDB:r})]})};var E=function(e){var t=e.show,n=e.onHide,a=e.title,s=e.cancelButtonText,r=e.confirmButtonText,i=e.createTypeInDB,l=Object(c.useState)({type:""}),o=Object(j.a)(l,2),u=o[0],d=o[1],b=Object(c.useState)({}),x=Object(j.a)(b,2),h=x[0],f=x[1];Object(c.useEffect)((function(){p()}),[u]);var p=function(){var e=C(u,w);return f(e),0===Object.keys(e).length},v=0===Object.keys(h).length;return Object(O.jsxs)(N.a,{show:t,onHide:n,children:[Object(O.jsx)(N.a.Header,{children:Object(O.jsx)(N.a.Title,{children:a})}),Object(O.jsx)(N.a.Body,{children:Object(O.jsx)(R,{name:"type",onChangeHandle:function(e){var t=e.name,n=e.value;d((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(y.a)({},t,n))}))},value:u.type,error:h.type})}),Object(O.jsxs)(N.a.Footer,{children:[Object(O.jsx)(g.a,{variant:"outline-warning",className:"text-dark",onClick:n,children:s}),Object(O.jsx)(g.a,{variant:"outline-success",className:"text-dark",disabled:!v,onClick:function(){n(),i(u.type)},children:r})]})]})};var _=function(){var e=x().request,t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],s=n[1],r=function(){var t=Object(o.a)(l.a.mark((function t(n){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=localStorage.getItem("token"),t.next=4,e("/auth/createtype","POST",{type:n.trim()},{Authorization:"Bearer ".concat(c)});case 4:a=t.sent,alert(a.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(g.a,{variant:"success",onClick:function(){return s(!0)},children:"Create Type"}),a&&Object(O.jsx)(E,{show:a,onHide:function(){s(!1)},title:"Create a new type in store",cancelButtonText:"Cancel",confirmButtonText:"Create!",createTypeInDB:r})]})};var D=function(){return Object(O.jsxs)(d.a,{className:"m-2 p-0 m-sm-2 m-xs-2",children:[Object(O.jsx)(b.a,{md:6,sm:6,xs:6,className:"d-flex align-items-center justify-content-center my-sm-2",children:Object(O.jsx)(_,{})}),Object(O.jsx)(b.a,{md:6,sm:6,xs:6,className:"d-flex align-items-center justify-content-center  my-sm-2",children:Object(O.jsx)(F,{})})]})},P=function(){return Object(O.jsxs)(d.a,{className:"p-2 m-0",children:[Object(O.jsx)(b.a,{md:12,className:" p-0 m-0",children:Object(O.jsx)(D,{})}),Object(O.jsx)(b.a,{md:12,className:" ",children:Object(O.jsx)(v,{})})]})},U=n(92),Q=n(14),Y=n(89);var $=function(e){var t=e.show,n=e.onHide,c=e.title,a=e.body,s=e.cancelButtonText,r=e.confirmButtonText,i=e.redirect,l=void 0===i?null:i;return Object(O.jsxs)(N.a,{show:t,onHide:n,children:[Object(O.jsx)(N.a.Header,{children:Object(O.jsx)(N.a.Title,{children:c})}),Object(O.jsx)(N.a.Body,{children:Object(O.jsx)("h5",{children:a})}),Object(O.jsxs)(N.a.Footer,{children:[Object(O.jsx)(g.a,{variant:"outline-warning",className:"text-dark",onClick:n,children:s}),Object(O.jsx)(g.a,{variant:"outline-primary",className:"text-dark",onClick:function(){n(),l()},children:r})]})]})};var G=function(e){var t=e._id,n=e.price,a=e.imgURL,s=e.title,r=e.deleteHandler,i=e.qty,l=e.decrementQty,o=e.incrementQty,u=Object(c.useState)(!1),m=Object(j.a)(u,2),x=m[0],f=m[1];return Object(O.jsxs)("div",{className:"p-3 shadow",children:[Object(O.jsxs)(d.a,{className:"d-flex align-items-center justify-content-center",children:[Object(O.jsx)(b.a,{md:4,children:Object(O.jsx)(h.a,{src:a,fluid:!0})}),Object(O.jsxs)(b.a,{md:7,children:[Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.a,{md:12,children:[s,Object(O.jsx)("br",{}),"".concat(n," $")]})}),Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.a,{md:12,className:"d-flex flex-column text-center justifu-content-center align-items-center mt-3 p-0",children:["Quantity",Object(O.jsxs)("div",{className:"d-flex align-items-center justify-content-between p-2",children:[Object(O.jsx)(g.a,{onClick:function(){l(t)},className:"btn btn-secondary",style:{width:50,borderRadius:25},children:Object(O.jsx)("i",{className:"bi bi-dash"})}),Object(O.jsx)(Y.a.Control,{value:i,onChange:function(){}}),Object(O.jsx)(g.a,{onClick:function(){o(t)},className:" btn btn-secondary ",style:{width:50,borderRadius:25},children:Object(O.jsx)("i",{className:"bi bi-plus"})})]})]})})]}),Object(O.jsx)(b.a,{md:1,className:"d-flex align-items-center justify-content-center text-center text-danger",children:Object(O.jsx)("h3",{children:Object(O.jsx)("i",{className:"bi bi-trash ms-1",role:"button",onClick:function(){f(!0)}})})})]}),x&&Object(O.jsx)($,{show:x,onHide:function(){f(!1)},title:"You deleting item from cart!",body:"Are you shure?",cancelButtonText:"Keep item",confirmButtonText:"Delete!",redirect:function(){return r(t)}})]})},z=n(87),J=n(57),K=n(58),V=n(64),M=n(63),W=n(59),Z=n.n(W),X=function(e){Object(V.a)(n,e);var t=Object(M.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"render",value:function(){var e=this;console.log();var t=this.props.total;return Object(O.jsx)(Z.a,{env:"sandbox",client:{sandbox:"Af31UX4r1rHO6tCzQy7QoqHj8nWxRw-JmgIRbb7TbVJrNs5hCKBcL_c9m66bcwdfbZsuWOxv_GEu-j6o",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.history.push("/"),e.props.clearCart()},onCancel:function(e){console.log("The payment was cancelled!",e)}})}}]),n}(a.a.Component);var ee=function(e){var t=e.totlaPrice,n=e.history,a=function(e){return Math.fround(.08375*e).toFixed(2)},s=Number(function(e){return(e+Number(a(e))).toFixed(2)}(t)),r=Object(c.useContext)(H);return Object(O.jsx)(U.a,{className:"shadow d-flex justify-content-center align-items-center",children:Object(O.jsxs)(z.a,{className:"m-0 p-2",children:[Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{md:6,sm:6,className:"m-0 p-0",children:Object(O.jsx)("p",{className:"text-secondary m-0 p-0",children:"Your total"})}),Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsxs)("p",{className:"fw-bold m-0 p-0",children:[t," $"]})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsx)("p",{className:"text-secondary m-0 p-0",children:"VAT"})}),Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsxs)("p",{className:"fw-bold m-0 p-0",children:[a(t)," $"]})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsx)("p",{className:"text-secondary m-0 p-0",children:"Delivery"})}),Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsx)("p",{className:"fw-bold m-0 p-0",children:"FREE"})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsx)("p",{children:"Subtotal "})}),Object(O.jsx)(b.a,{md:6,sm:6,children:Object(O.jsxs)("p",{className:"fw-bold m-0 p-0",children:[s," $"]})})]}),Object(O.jsx)(d.a,{className:"d-flex justify-content-center mt-3",children:Object(O.jsx)(X,{total:s,history:n,clearCart:r.clearCart,className:"my-3"})}),Object(O.jsxs)(d.a,{className:"mt-2",children:[Object(O.jsx)("p",{children:"* for Paypal checkout use credentials"}),Object(O.jsx)(b.a,{md:12,className:"fw-bold",children:"username : costumer111@gmail.com"}),Object(O.jsx)(b.a,{md:12,className:"fw-bold",children:"password : 1234567890"})]})]})})},te=function(){var e=Object(u.g)(),t=Object(c.useContext)(H),n=t.cart,a=Object(c.useState)(n),s=Object(j.a)(a,2),r=s[0],i=s[1],l=function(e){t.deleteFromCart(e)};Object(c.useEffect)((function(){return i(n),function(){i([])}}),[n]);var o=r.map((function(e){return e.qty*e.price})).reduce((function(e,t){return e+t}),0);return Object(O.jsx)("div",{className:" text-center mt-4",children:0===r.length?Object(O.jsxs)("h2",{children:["Your cart is empty. Go to ",Object(O.jsx)(Q.b,{to:"/shop",children:"main page!"})]}):Object(O.jsxs)(d.a,{className:" p-0 m-0 w-100",children:[Object(O.jsx)(b.a,{md:8,classname:"p-0",children:r.map((function(e){return Object(O.jsx)(U.a,{className:"mb-3",children:Object(O.jsx)(G,Object(m.a)(Object(m.a)({},e),{},{deleteHandler:l,incrementQty:t.incrementQty,decrementQty:t.decrementQty}),e._id)},e._id)}))}),Object(O.jsx)(b.a,{md:4,children:0===o?Object(O.jsx)("h2",{children:"Nothing to pay yet"}):Object(O.jsx)(ee,{totlaPrice:o,history:e})})]})})};var ne=function(){var e=x().request,t=Object(c.useState)({email:"",password:""}),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)({}),i=Object(j.a)(r,2),u=i[0],h=i[1];console.log(a,u);var f=function(e){p(),s((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(y.a)({},e.name,e.value))}))},p=function(){var e=C(a,w);return h(e),0===Object.keys(e).length},v=function(){var t=Object(o.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("/auth/register","POST",Object(m.a)({},a));case 3:n=t.sent,console.log("data",n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),N=0===Object.keys(u).length;return Object(O.jsx)(z.a,{children:Object(O.jsx)(d.a,{className:"d-flex justify-content-center",children:Object(O.jsx)(b.a,{md:8,children:Object(O.jsx)(Y.a,{className:"d-flex flex-column",onSubmit:function(e){e.preventDefault(),N&&(console.log(a),v(),s({email:"",password:""}),h({}))},children:Object(O.jsxs)(U.a,{className:"p-3",children:[Object(O.jsx)("h2",{className:"m-auto",children:" Please Sign up"}),Object(O.jsx)(R,{label:"Your email",name:"email",onChangeHandle:f,value:a.email,error:u.email}),Object(O.jsx)(R,{label:"Your password",name:"password",onChangeHandle:f,value:a.password,type:"password",error:u.password}),Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(O.jsxs)("div",{children:["Already registered?",Object(O.jsx)(Q.c,{to:"/login",style:{textDecoration:"none"},className:"ms-1",children:"Log in"})]}),Object(O.jsx)(g.a,{variant:"outline-warning",type:"submit",disabled:!N,children:"Sign up"})]})})]})})})})})},ce=n(43);var ae=function(e){var t=e.isLogin,n=Object(u.g)(),a=Object(c.useContext)(H),s=x(),r=s.loading,i=s.error,h=s.request,f=Object(c.useState)({email:"",password:""}),p=Object(j.a)(f,2),v=p[0],N=p[1],k=Object(c.useState)({}),S=Object(j.a)(k,2)[1],T=function(e){q(),N((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(y.a)({},e.name,e.value))}))},q=function(){var e=C(v,w);return S(e),0===Object.keys(e).length},A=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("/auth/login","POST",Object(m.a)({},v));case 3:t=e.sent,c=Object(ce.a)(t.token),console.log(c),a.setUser(c),a.setAuth(!0),localStorage.setItem("token",t.token),n.push("/shop"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0&&alert("".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(z.a,{children:Object(O.jsx)(d.a,{className:"d-flex justify-content-center",children:Object(O.jsx)(b.a,{md:8,children:Object(O.jsx)(Y.a,{className:"d-flex flex-column",onSubmit:function(e){e.preventDefault(),A(),N({email:"",password:""}),i&&alert("".concat(i))},children:Object(O.jsxs)(U.a,{className:"p-3",children:[Object(O.jsx)("h2",{className:"m-auto",children:t?"Please login":"Please Sign up"}),Object(O.jsx)(R,{label:"Your email",name:"email",onChangeHandle:T,value:v.email}),Object(O.jsx)(R,{label:"Your password",name:"password",onChangeHandle:T,value:v.password,type:"password"}),Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(O.jsxs)("div",{children:["Don't have an account?",Object(O.jsx)(Q.c,{to:"/registration",style:{textDecoration:"none"},className:"ms-1",children:"Sign up"})]}),Object(O.jsx)(g.a,{variant:"outline-warning",type:"submit",disabled:r,children:"Log In"})]})})]})})})})})},se=function(){var e="/login"===Object(u.h)().pathname;return Object(O.jsx)("div",{children:e?Object(O.jsx)(ae,{isLogin:e}):Object(O.jsx)(ne,{})})},re=function(){return Object(O.jsx)(z.a,{style:{height:window.innerHeight-54},className:"mt-5",children:Object(O.jsx)(se,{})})},ie=function(){var e=Object(u.i)().id,t=Object(u.g)(),n=Object(c.useContext)(H),a=n.cart,s=Object(c.useState)(!1),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)(!1),m=Object(j.a)(o,2),x=m[0],f=m[1],p=n.items.find((function(t){return t._id===e}));return Object(O.jsxs)(z.a,{style:{minHeight:"calc(100vh - 65px)"},className:"p-4",children:[Object(O.jsxs)(U.a,{className:" shadow d-flex flex-column justify-content-center",children:[Object(O.jsxs)(d.a,{style:{minHeight:"50vh"},className:"p-3",children:[Object(O.jsx)(b.a,{md:1,children:Object(O.jsx)(g.a,{variant:"outline-secondary",className:"rounded rounded-circle  ",onClick:function(){t.goBack()},children:Object(O.jsx)("i",{className:"bi bi-chevron-left"})})}),Object(O.jsx)(b.a,{md:6,className:"d-flex justify-content-center align-items-center mx-auto",children:Object(O.jsx)(h.a,{src:p.imgURL,fluid:!0})})]}),Object(O.jsxs)(d.a,{className:"text-center p-2",children:[Object(O.jsx)(b.a,{md:6,className:"d-flex flex-column  justify-content-center  align-items-center ",children:Object(O.jsx)("h2",{children:p.title})}),Object(O.jsx)(b.a,{md:6,className:"d-flex flex-column  justify-content-center  align-items-center ",children:Object(O.jsxs)("h2",{children:["Price : ",p.price,"$"]})})]}),Object(O.jsx)(d.a,{className:"text-center p-2",children:Object(O.jsx)(b.a,{md:12,className:"d-flex flex-column  justify-content-center w-100 align-items-center ",children:Object(O.jsx)("p",{children:p.description})})}),Object(O.jsx)(d.a,{className:" px-5 py-2 w-100 d-flex  justify-content-center",children:Object(O.jsx)(g.a,{variant:"outline-warning",className:"text-dark w-25",onClick:function(){n.isAuth?function(e){if(a.find((function(t){return t._id===e._id})))return l(!0);n.addItemToCart(e._id),f(!0)}(p):t.push("/login")},children:"Add to cart"})})]}),i&&Object(O.jsx)($,{show:i,onHide:function(){l(!1)},title:"Ooops...",body:"This item already in cart. Do you wish to continue shopping?",cancelButtonText:"Keep shopping",confirmButtonText:"Go to cart!",redirect:function(){t.push("/cart")}}),x&&Object(O.jsx)($,{show:x,onHide:function(){f(!1)},title:"Success!",body:"You added item to cart. Do you wish to continue shopping?",cancelButtonText:"Keep shopping",confirmButtonText:"Go to cart!",redirect:function(){t.push("/cart")}})]})};var le=function(e){var t=e.title,n=e.price,c=e.imgURL,a=e._id,s=Object(u.g)();return Object(O.jsxs)(U.a,{className:"d-flex justify-content-between h-100 align-items-center shadow border border-2",style:{minHeight:"250px",borderRadius:15},children:[Object(O.jsx)(b.a,{md:12,className:"d-flex p-1 my-2",children:Object(O.jsx)(h.a,{src:c,fluid:!0,role:"button",className:"p-1 ",onClick:function(){s.push("/item/".concat(a))}})}),Object(O.jsxs)(b.a,{md:8,className:"d-flex flex-column justify-content-between align-items-center text-center",children:[Object(O.jsx)("h5",{children:t}),Object(O.jsxs)("p",{children:[" ","Price  ".concat(n,"$")]})]})]})};var oe=function(e){var t=e.type,n=e.search,a=Object(c.useContext)(H).items,s=function(e){return a.filter((function(t){return t.title.toLowerCase().replaceAll(" ","").includes(e.toLowerCase())}))}(n);return Object(O.jsx)(z.a,{className:"d-flex flex-column ",children:Object(O.jsx)(d.a,{children:0===s.length?Object(O.jsx)("h2",{children:"'No items found'"}):t?s.filter((function(e){return e.itemType.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(O.jsx)(b.a,{md:4,className:"py-3",children:Object(c.createElement)(le,Object(m.a)(Object(m.a)({},e),{},{key:e._id}))},e._id)})):s.map((function(e){return Object(O.jsx)(b.a,{md:4,className:"py-3",children:Object(c.createElement)(le,Object(m.a)(Object(m.a)({},e),{},{key:e._id}))},e._id)}))})})};var je=function(e){var t=e.setSearch,n=e.search;return Object(O.jsx)(z.a,{children:Object(O.jsx)(d.a,{className:"d-flex justify-content-center align-items-center",children:Object(O.jsxs)(Y.a,{className:"my-3  position-relative  d-flex flex-row",children:[Object(O.jsx)(Y.a.Control,{type:"text",placeholder:"Search",value:n,onChange:function(e){return t(e.target.value)}}),Object(O.jsx)(g.a,{className:"btn position-absolute top-50 end-0 translate-middle-y me-3 p-0",variant:"outline",onClick:function(){return t("")},children:Object(O.jsx)("h2",{className:"m-0 p-0",children:Object(O.jsx)("i",{className:"  bi bi-x"})})})]})})})},ue=n(93);var de=function(e){var t=e.setType,n=Object(c.useContext)(H),a=Object(c.useState)(),s=Object(j.a)(a,2),r=s[0],i=s[1];return 0===n.types.length?Object(O.jsx)("p",{children:"Loading...."}):Object(O.jsxs)(z.a,{className:"p-2",children:[Object(O.jsx)(ue.a,{children:n.types.map((function(e){return Object(O.jsx)(ue.a.Item,{role:"button",onClick:function(){i(e.type),t(e.type)},className:e.type===r?"list-group-item-dark":"",children:e.type},e.id)}))}),Object(O.jsx)("div",{className:"d-flex flex-column  mt-3",children:Object(O.jsx)(g.a,{variant:"outline-warning",onClick:function(){i(void 0),t(void 0)},className:"text-dark",children:"Reset"})})]})},be=n(62),me=n.p+"static/media/mac.88b9c92e.jpg";var xe="/error";var he=function(){var e=Object(c.useContext)(H);return console.log(e.error.message),Object(O.jsxs)("div",{className:"d-flex justify-content-center align-items-center fw-bolt fs-3",style:{minHeight:"calc(100vh - 68px)"},children:["Oooops.... ",e.error.message]})},Oe=[{path:"/admin",Component:P},{path:"/cart",Component:te}],fe=[{path:"/login",Component:re},{path:"/shop",Component:function(){var e=Object(c.useState)(void 0),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],l=r[1];return Object(O.jsxs)("div",{className:"shop_page",children:[Object(O.jsx)("div",{className:"d-none d-lg-block page",children:Object(O.jsxs)(be.Parallax,{bgImage:me,bgImageAlt:"mac",strength:100,children:[Object(O.jsx)("div",{style:{position:"absolute",left:" 50%",top:" 50%",background:"transparent",padding:"15px",color:"#FFFF",fontSize:"3rem",transform:"translate(-50%, -50%)",fontFamily:"Sanserif"},children:"The power of Mac"}),Object(O.jsx)("div",{style:{minHeight:"calc(100vh - 68px)",width:"100wv"}})]})}),Object(O.jsx)("div",{className:"page",children:Object(O.jsxs)(d.a,{className:"m-0 p-2",children:[Object(O.jsx)(b.a,{md:3,children:Object(O.jsx)(de,{setType:function(e){return a(e)}})}),Object(O.jsxs)(b.a,{md:9,style:{minHeight:"100vh"},children:[Object(O.jsx)(je,{setSearch:l,search:i}),Object(O.jsx)(oe,{type:n,search:i})]})]})})]})}},{path:"/registration",Component:re},{path:"/item/:id?",Component:ie},{path:xe,Component:he}],pe=function(){var e=Object(c.useContext)(H).isAuth;return Object(O.jsxs)(u.d,{children:[e&&Oe.map((function(e){var t=e.path,n=e.Component;return Object(O.jsx)(u.b,{path:t,component:n,exact:!0},t)})),fe.map((function(e){var t=e.path,n=e.Component;return Object(O.jsx)(u.b,{path:t,component:n,exact:!0},t)})),Object(O.jsx)(u.a,{to:{pathname:xe,component:he}})]})},ve=n(90),ge=n(91),ye=n.p+"static/media/logo2.b7315752.png",Ne=function(){var e=Object(u.g)(),t=Object(c.useContext)(H);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ve.a,{bg:"light",variant:"light",expand:"md",children:Object(O.jsxs)(z.a,{className:"p-1 ",children:[Object(O.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(O.jsx)(Q.c,{to:"/shop",style:{color:"orange",textDecoration:"none"},children:Object(O.jsx)(h.a,{src:ye,style:{height:"60px",marginLeft:"10px"}})})}),Object(O.jsx)(ve.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(ve.a.Collapse,{id:"responsive-navbar-nav",className:"flex-grow-0 ",children:t.isAuth?Object(O.jsxs)(ge.a,{children:["ADMIN"===t.user.role&&t.isAuth&&Object(O.jsx)(g.a,{className:"btn  ",variant:"outline-warning",onClick:function(){e.push("/admin")},children:"Admin"}),"USER"===t.user.role&&Object(O.jsx)(Q.c,{to:"/cart",style:{color:"#FFC107",textDecoration:"none"},children:Object(O.jsxs)(g.a,{className:"position-relative btn mx-2",variant:"outline-warning",children:["Cart",Object(O.jsx)("i",{className:"bi bi-bag-check ms-2"}),Object(O.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[t.cart.length,Object(O.jsx)("span",{className:"visually-hidden",children:"unread messages"})]})," "]})}),Object(O.jsx)(Q.c,{to:"/login",children:Object(O.jsx)(g.a,{className:"btn mx-2",variant:"outline-warning",onClick:function(){t.setAuth(!1),t.setUser({}),localStorage.clear()},children:"Log out"})})]}):Object(O.jsx)(ge.a,{children:Object(O.jsx)(Q.b,{to:"/login",children:Object(O.jsx)(g.a,{className:"btn",variant:"outline-warning",children:"Login"})})})})]})})})},we=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(Ne,{}),e.children]})};var Ce=function(){var e=Object(c.useContext)(H),t=x(),n=t.request,a=t.error,s=Object(c.useState)(!0),r=Object(j.a)(s,2),i=r[0],u=r[1],d=function(){var t=Object(o.a)(l.a.mark((function t(){var c,a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),c=localStorage.getItem("token"),t.next=5,n("/auth","GET",null,{Authorization:"Bearer ".concat(c)});case 5:a=t.sent,s=Object(ce.a)(a.token),e.setUser(s),e.setAuth(!0),localStorage.setItem("token",a.token),u(!1),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),e.setAuth(!1),e.setError(t.t0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(l.a.mark((function t(){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/items");case 3:return c=t.sent,t.next=6,n("/types");case 6:a=t.sent,e.setTypes(a),e.setItems(c),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){return i&&d(),function(){return u(!1)}}),[]),Object(c.useEffect)((function(){b()}),[]),Object(O.jsx)(we,{children:Object(O.jsx)(pe,{error:a})})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(54);r.a.render(Object(O.jsx)(T,{children:Object(O.jsx)(Q.a,{children:Object(O.jsx)(Ce,{})})}),document.getElementById("root")),ke()}},[[82,1,2]]]);
//# sourceMappingURL=main.78922da5.chunk.js.map