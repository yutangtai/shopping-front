(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{3530:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"admin"}},[r("b-row",[r("b-col",{staticClass:"mt-5",attrs:{cols:"12"}},[r("b-nav",{attrs:{pills:"",justified:""}},[r("b-nav-item",{attrs:{to:"/admin/products",exact:"","exact-active-class":"active"}},[e._v("商品管理")]),r("b-nav-item",{attrs:{to:"/admin/orders",exact:"","exact-active-class":"active"}},[e._v("訂單管理")])],1)],1)],1),r("hr"),r("b-col",{attrs:{cols:"12"}},[r("router-view")],1)],1)},n=[],i=r("2877"),o={},s=Object(i["a"])(o,a,n,!1,null,null,null);t["default"]=s.exports},aa93:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-3",attrs:{id:"adminproducts"}},[r("b-btn",{attrs:{block:"",variant:"success"},on:{click:function(t){return e.$bvModal.show("modal-product")}}},[e._v("新增")]),r("b-table",{ref:"productTable",attrs:{items:e.products,fields:e.fields},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item?r("img",{staticStyle:{height:"50px"},attrs:{src:t.item.image}}):e._e()]}},{key:"cell(sell)",fn:function(t){return[e._v(e._s(t.item.sell?"v":""))]}},{key:"cell(action)",fn:function(t){return[r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return e.editProduct(t.index)}}},[e._v("編輯")])]}}])}),r("b-modal",{attrs:{id:"modal-product",title:e.form._id.length>0?"編輯商品":"新增商品","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.submitDisable,"cancel-disabled":e.submitDisable},on:{ok:e.submitModal,hidden:e.resetForm}},[r("b-form-group",{attrs:{label:"品名","label-for":"input-name",state:e.state.name,description:"品名長度限制為 1 個字以上","invalid-feedback":"品名格式不正確"}},[r("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入品名",state:e.state.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"價格","label-for":"input-price",state:e.state.price,description:"價格限制為 0 以上","invalid-feedback":"價格格式不正確"}},[r("b-form-input",{attrs:{id:"input-price",type:"number",required:"",placeholder:"請輸入價格",state:e.state.price},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),r("b-form-group",{attrs:{label:"說明","label-for":"input-description"}},[r("b-form-textarea",{attrs:{id:"input-description",type:"text",placeholder:"請輸入說明文字"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("b-form-group",{attrs:{label:"上架","label-for":"input-sell"}},[r("b-form-radio",{attrs:{value:!0},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("上架")]),r("b-form-radio",{attrs:{value:!1},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("下架")])],1),r("img-inputer",{attrs:{theme:"dark",size:"large",placeholder:"點擊或拖曳選擇圖片","bottom-text":"點擊或拖曳以修改"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)],1)},n=[],i=r("1da1"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("99af"),r("d81d"),{data:function(){return{products:[],fields:[{key:"image",label:"圖片"},{key:"name",label:"品名"},{key:"price",label:"價格"},{key:"description",label:"說明"},{key:"sell",label:"上架"},{key:"action",label:"操作"}],submitDisable:!1,form:{name:"",price:0,description:"",sell:!1,image:null,_id:""}}},computed:{state:function(){return{name:0!==this.form.name.length||null,price:0===this.form.price?null:this.form.price>0}}},methods:{editProduct:function(e){this.form={name:this.products[e].name,price:this.products[e].price,description:this.products[e].description,sell:this.products[e].sell,image:this.products[e].image,_id:this.products[e]._id,index:e},this.$bvModal.show("modal-product")},resetForm:function(e){this.submitDisable&&e.preventDefault(),this.form={name:"",price:0,description:"",sell:!1,image:null,_id:""}},submitModal:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in e.submitDisable=!0,t.prev=1,r=new FormData,e.form)r.append(a,e.form[a]);if(0!==e.form._id.length){t.next=9;break}return t.next=7,e.axios.post("/products",r,{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:t.next=15;break;case 9:return t.next=11,e.axios.patch("/products/"+e.form._id,r,{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 11:n=t.sent,i=n.data,e.products[e.form.index]={name:e.form.name,price:e.form.price,description:e.form.description,sell:e.form.sell,image:"".concat("https://github.com/yutangtai/shopping-back","/files/").concat(i.result.image),_id:e.form._id},e.$refs.productTable.refresh();case 15:e.$bvModal.hide("modal-product"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](1),e.$swal({icon:"error",title:"錯誤",text:t.t0.response.data.message});case 21:e.submitDisable=!1;case 22:case"end":return t.stop()}}),t,null,[[1,18]])})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/products/all",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:r=t.sent,a=r.data,e.products=a.result.map((function(e){return e.image&&(e.image="".concat("https://github.com/yutangtai/shopping-back","/files/").concat(e.image)),e})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),s=o,c=r("2877"),l=Object(c["a"])(s,a,n,!1,null,null,null);t["default"]=l.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},c732:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"adminhome"}},[r("h1",{staticClass:"text-center"},[e._v("請選擇管理項目")])])}],i=r("2877"),o={},s=Object(i["a"])(o,a,n,!1,null,null,null);t["default"]=s.exports},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};l(m,u);var f=m.prototype=u.prototype;f.constructor=m;var p=f.toString,b="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var r=b?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},ec5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"adminorders"}},[r("h1",{staticClass:"text-center"},[e._v("訂單管理")]),r("b-table",{attrs:{items:e.orders,fields:e.fields},scopedSlots:e._u([{key:"cell(account)",fn:function(t){return[e._v(e._s(t.item.user.account))]}},{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",[e._v(e._s(t.product.name)+" * "+e._s(t.amount))])})),0)]}}])})],1)},n=[],i=r("1da1"),o=(r("96cf"),r("d81d"),{name:"AdminOrders",data:function(){return{orders:[],fields:[{key:"account",label:"使用者"},{key:"_id",label:"訂單編號"},{key:"date",label:"日期"},{key:"products",label:"商品"}]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/users/orders/all",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:r=t.sent,a=r.data,e.orders=a.result.map((function(t){return console.log(e.orders),t.date=new Date(t.date).toLocaleString(),t})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),e.$swal({icon:"error",title:"錯誤",text:"取得訂單失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),s=o,c=r("2877"),l=Object(c["a"])(s,a,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=admin.6f70cbbe.js.map