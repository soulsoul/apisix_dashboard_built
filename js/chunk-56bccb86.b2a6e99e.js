(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56bccb86"],{"28a5":function(e,t,r){"use strict";var n=r("aae3"),o=r("cb7c"),a=r("ebd6"),i=r("0390"),c=r("9def"),s=r("5f1b"),u=r("520a"),l=r("79e5"),f=Math.min,p=[].push,d="split",m="length",b="lastIndex",h=4294967295,v=!l(function(){RegExp(h,"y")});r("214f")("split",2,function(e,t,r,l){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(o,e,t);var a,i,c,s=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?h:t>>>0,v=new RegExp(e.source,l+"g");while(a=u.call(v,o)){if(i=v[b],i>f&&(s.push(o.slice(f,a.index)),a[m]>1&&a.index<o[m]&&p.apply(s,a.slice(1)),c=a[0][m],f=i,s[m]>=d))break;v[b]===a.index&&v[b]++}return f===o[m]?!c&&v.test("")||s.push(""):s.push(o.slice(f)),s[m]>d?s.slice(0,d):s}:"0"[d](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var o=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,o,n):y.call(String(o),r,n)},function(e,t){var n=l(y,e,this,t,y!==r);if(n.done)return n.value;var u=o(e),p=String(this),d=a(u,RegExp),m=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),g=new d(v?u:"^(?:"+u.source+")",b),k=void 0===t?h:t>>>0;if(0===k)return[];if(0===p.length)return null===s(g,p)?[p]:[];var O=0,x=0,w=[];while(x<p.length){g.lastIndex=v?x:0;var j,E=s(g,v?p:p.slice(x));if(null===E||(j=f(c(g.lastIndex+(v?0:x)),p.length))===O)x=i(p,x,m);else{if(w.push(p.slice(O,x)),w.length===k)return w;for(var P=1;P<=E.length-1;P++)if(w.push(E[P]),w.length===k)return w;x=O=j}}return w.push(p.slice(O)),w}]})},"504c":function(e,t,r){var n=r("9e1e"),o=r("0d58"),a=r("6821"),i=r("52a7").f;e.exports=function(e){return function(t){var r,c=a(t),s=o(c),u=s.length,l=0,f=[];while(u>l)r=s[l++],n&&!i.call(c,r)||f.push(e?[r,c[r]]:c[r]);return f}}},"7a7e":function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},b32d:function(e,t,r){"use strict";var n=r("bc3a"),o=r.n(n),a=r("5c96"),i=r("9dba"),c=o.a.create({baseURL:"http://39.97.63.215:9080/apisix/admin/",timeout:5e3});c.interceptors.request.use(function(e){return i["a"].token&&(e.headers["X-Access-Token"]=i["a"].token),e},function(e){Promise.reject(e)}),c.interceptors.response.use(function(e){var t=e.data;return t.code&&2e4!==t.code?(Object(a["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||a["MessageBox"].confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){i["a"].ResetToken(),location.reload()}),Promise.reject(new Error(t.message||"Error"))):e.data},function(e){return Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}),t["a"]=c},b5f7:function(e,t,r){"use strict";r.d(t,"e",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"a",function(){return c}),r.d(t,"c",function(){return s});var n=r("b32d"),o=function(e,t){return Object(n["a"])({url:"/upstreams/".concat(e),method:"PUT",data:t})},a=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"GET"})},i=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"DELETE"})},c=function(e){return Object(n["a"])({url:"/upstreams",method:"POST",data:e})},s=function(){return Object(n["a"])({url:"/upstreams",method:"GET"})}},c9c9:function(e,t,r){"use strict";var n=r("7a7e"),o=r.n(n);o.a},ea97:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","show-message":!1}},[r("el-form-item",{attrs:{label:"Type",prop:"type"}},[r("el-select",{attrs:{placeholder:"Select a Type"},on:{change:e.typeSelectorChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.types,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{label:"Key"}},[r("el-input",{attrs:{placeholder:"Input a Key",disabled:"chash"!==e.form.type},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),e._l(e.form.nodes,function(t,n){return r("el-form-item",{key:n,staticClass:"node-item",attrs:{label:"Node"+(n+1)}},[r("el-form-item",{attrs:{rules:[{required:!0,pattern:/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g,type:"string"}],prop:"nodes."+n+".ip"}},[r("el-input",{attrs:{placeholder:"IP"},model:{value:t.ip,callback:function(r){e.$set(t,"ip",r)},expression:"item.ip"}})],1),r("el-form-item",{attrs:{rules:[{required:!0}],prop:"nodes."+n+".port"}},[r("el-input",{attrs:{placeholder:"Port",type:"number"},model:{value:t.port,callback:function(r){e.$set(t,"port",r)},expression:"item.port"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"Weights",type:"number"},model:{value:t.weights,callback:function(r){e.$set(t,"weights",r)},expression:"item.weights"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return r.preventDefault(),e.removeNode(t)}}},[e._v("\n          Delete\n        ")])],1)],1)}),r("el-form-item",[r("el-button",{on:{click:e.addNode}},[e._v("\n        Add Node\n      ")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        Save\n      ")]),r("el-button",{on:{click:e.toPreviousPage}},[e._v("\n        Cancel\n      ")])],1)],2)],1)},o=[],a=(r("8e6e"),r("456d"),r("bd86")),i=(r("c5f6"),r("28a5"),r("768b")),c=(r("ac6a"),r("ffc1"),r("96cf"),r("3b8d")),s=(r("7f7f"),r("d225")),u=r("b0b4"),l=r("308d"),f=r("6bb5"),p=r("4e2b"),d=r("9ab4"),m=r("60a3"),b=r("b5f7");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments)),e.form={type:null,key:null,nodes:[]},e.rules={type:{required:!0}},e.isEditMode=!1,e.types=["roundrobin","chash"],e}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){this.isEditMode=-1===this.$route.name.indexOf("Create"),this.isEditMode&&this.getData()}},{key:"getData",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,r,n,o,a,c,s,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,Object(b["b"])(t);case 3:r=e.sent,n=r.node.value,o=n.type,a=void 0===o?null:o,c=n.nodes,s=void 0===c?[]:c,u=n.key,l=void 0===u?null:u,s=Object.entries(s).map(function(e){var t=Object(i["a"])(e,2),r=t[0],n=t[1],o=r.split(":")[0],a=r.split(":")[1],c=n;return{ip:o,port:a,weights:c}}),this.form={type:a,key:l,nodes:s};case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onSubmit",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(r){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("onSubmit",t.form),n={},t.form.nodes.map(function(e){e.ip&&e.port&&String(e.weights)&&(n["".concat(e.ip,":").concat(e.port)]=Number(e.weights))}),!r){e.next=20;break}if(o=v({},t.form,{nodes:n}),t.form.nodes.length){e.next=8;break}return t.$message.error("Please add 1 node at least!"),e.abrupt("return");case 8:if("chash"!==o.type&&delete o.key,!t.isEditMode){e.next=14;break}return e.next=12,Object(b["e"])(t.$route.params.id,o);case 12:e.next=16;break;case 14:return e.next=16,Object(b["a"])(o);case 16:t.$message.success("".concat(t.isEditMode?"Update the":"Create a"," upstream successfully!")),t.isEditMode||t.$nextTick(function(){t.form={type:null,key:null,nodes:[]}}),e.next=21;break;case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"toPreviousPage",value:function(){this.$router.go(-1)}},{key:"typeSelectorChange",value:function(e){"chash"!==e&&(this.form.key=null)}},{key:"addNode",value:function(){this.form.nodes.push({ip:null,port:null,weights:null})}},{key:"removeNode",value:function(e){var t=this.form.nodes.indexOf(e);-1!==t&&this.form.nodes.splice(t,1)}}]),t}(m["c"]);y=d["a"]([Object(m["a"])({name:"RouterEdit"})],y);var g=y,k=g,O=(r("c9c9"),r("2877")),x=Object(O["a"])(k,n,o,!1,null,null,null);t["default"]=x.exports},ffc1:function(e,t,r){var n=r("5ca1"),o=r("504c")(!0);n(n.S,"Object",{entries:function(e){return o(e)}})}}]);