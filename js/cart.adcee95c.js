(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),c=r("a691"),i=r("50c4"),o=r("7b0b"),u=r("65f0"),s=r("8418"),l=r("1dde"),d=l("splice"),m=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,n,l,d,b,v,k=o(this),x=i(k.length),w=a(t,x),g=arguments.length;if(0===g?r=n=0:1===g?(r=0,n=x-w):(r=g-2,n=f(m(c(e),0),x-w)),x+r-n>h)throw TypeError(p);for(l=u(k,n),d=0;d<n;d++)b=w+d,b in k&&s(l,d,k[b]);if(l.length=n,r<n){for(d=w;d<x-n;d++)b=d+n,v=d+r,b in k?k[v]=k[b]:delete k[v];for(d=x;d>x-n+r;d--)delete k[d-1]}else if(r>n)for(d=x-n;d>w;d--)b=d+n-1,v=d+r-1,b in k?k[v]=k[b]:delete k[v];for(d=0;d<r;d++)k[d+w]=arguments[d+2];return k.length=x-n+r,l}})},b789:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"cart"}},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"text-center"},[t._v("總金額 "+t._s(t.totalprice))]),r("b-btn",{attrs:{variant:"primary"},on:{click:t.checkout}},[t._v("結帳")]),r("b-table",{ref:"table",attrs:{items:t.cart,fields:t.fields},scopedSlots:t._u([{key:"cell(image)",fn:function(e){return[e.item?r("img",{staticStyle:{height:"50px"},attrs:{src:e.item.image}}):t._e()]}},{key:"cell(amount)",fn:function(e){return[e.item.edit?r("b-form-input",{attrs:{type:"number",state:e.item.amountModel>0},model:{value:e.item.amountModel,callback:function(r){t.$set(e.item,"amountModel",t._n(r))},expression:"data.item.amountModel"}}):r("span",[t._v(t._s(e.item.amount))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?t._e():r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return t.editProduct(e.index)}}},[t._v("編輯")]),e.item.edit?t._e():r("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return t.delProduct(e.index)}}},[t._v("刪除")]),e.item.edit?r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return t.submitProduct(e.index)}}},[t._v("確定")]):t._e(),e.item.edit?r("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return t.cancelProduct(e.index)}}},[t._v("取消")]):t._e()]}}])})],1)],1)],1)},a=[],c=r("5530"),i=r("1da1"),o=(r("96cf"),r("a434"),r("d81d"),r("99af"),{name:"Cart",data:function(){return{cart:[],fields:[{key:"image",label:"圖片"},{key:"name",label:"品名"},{key:"amount",label:"數量"},{key:"price",label:"價格"},{key:"action",label:"操作"}]}},computed:{totalprice:function(){return 0===this.cart.length?0:this.cart.reduce((function(t,e){return t+e.amount*e.price}),0)}},methods:{editProduct:function(t){this.cart[t].edit=!0},delProduct:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.patch("/users/cart",{product:e.cart[t]._id,amount:0},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.cart.splice(t,1),e.$refs.table.refresh(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"刪除商品失敗"});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},submitProduct:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.patch("/users/cart",{product:e.cart[t]._id,amount:e.cart[t].amountModel},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.cart[t].amount=e.cart[t].amountModel,e.cart[t].edit=!1,e.$refs.table.refresh(),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"修改商品失敗"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},cancelProduct:function(t){this.cart[t].edit=!1,this.cart[t].amountModel=this.cart[t].amount},checkout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users/checkout",{},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:t.$router.push("/orders"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"結帳失敗"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users/cart",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:r=e.sent,n=r.data,t.cart=n.result.map((function(t){return t=Object(c["a"])(Object(c["a"])({},t.product),{},{amount:t.amount}),t.image="".concat("https://github.com/yutangtai/shopping-back","/files/").concat(t.image),t.edit=!1,t.amountModel=t.amount,t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得購物車失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),u=o,s=r("2877"),l=Object(s["a"])(u,n,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=cart.adcee95c.js.map