(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"c/rZ":function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),n=a.n(r);function s(t,e,a,r,n,s,o){try{var c=t[s](o),i=c.value}catch(t){return void a(t)}c.done?e(i):Promise.resolve(i).then(r,n)}var o={data:function(){return{loading:!0,categories:[{},{},{},{}]}},mounted:function(){},methods:{},created:function(){var t,e=this;return(t=n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.call_api("get","all-categories");case 2:(a=t.sent).data.success&&(e.categories=a.data.data,e.loading=!1);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function c(t){s(o,r,n,c,i,"next",t)}function i(t){s(o,r,n,c,i,"throw",t)}c(void 0)}))})()}},c=a("KHd+"),i=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-6"},[a("v-container",[a("h1",{staticClass:"mb-7 mt-4"},[t._v(t._s(t.$t("all_categories")))]),t._v(" "),t.categories.length?a("v-row",t._l(t.categories,(function(e,r){return a("v-col",{key:r,attrs:{cols:"12",md:"6"}},[t.loading?a("div",[a("v-skeleton-loader",{attrs:{type:"image",height:"235"}})],1):a("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("router-link",{staticClass:"text-reset",attrs:{to:{name:"Category",params:{categorySlug:e.slug}}}},[a("img",{staticClass:"img-fluid",attrs:{src:e.banner,alt:e.name},on:{error:function(e){return t.imageFallback(e)}}})])],1),t._v(" "),a("v-col",{attrs:{cols:"8"}},[a("h3",{staticClass:"mb-3"},[a("router-link",{staticClass:"text-reset",attrs:{to:{name:"Category",params:{categorySlug:e.slug}}}},[t._v(t._s(e.name))])],1),t._v(" "),e.children.data.length?a("div",t._l(e.children.data,(function(r,n){return a("v-hover",{key:n,scopedSlots:t._u([{key:"default",fn:function(s){var o=s.hover;return[a("router-link",{class:["text-reset me-1 opacity-80",{"primary--text text-decoration-underline":o}],attrs:{to:{name:"Category",params:{categorySlug:r.slug}}}},[t._v(t._s(r.name)),n+1!==e.children.data.length?a("span",{},[t._v(",")]):t._e()])]}}],null,!0)})})),1):t._e()])],1)],1)],1)})),1):t._e()],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);