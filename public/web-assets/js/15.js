(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"I/1x":function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={components:{UserMenu:r("r5Jv").a},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)("auth",["currentUser"]))},o=r("KHd+"),i={components:{sidemenu:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"border-end shadow-none rounded-0"},[r("div",{staticClass:"pa-5 text-center border-bottom"},[r("v-avatar",{staticClass:"mb-5",attrs:{size:"160"}},[r("img",{staticClass:"border border-4",attrs:{src:t.currentUser.avatar},on:{error:function(e){return t.imageFallback(e)}}})]),t._v(" "),r("h4",{staticClass:"fs-22 fw-500 mb-0 lh-1"},[t._v(t._s(t.currentUser.name))]),t._v(" "),r("div",{staticClass:"text-truncate opacity-60"},[t._v(t._s(t.currentUser.email))])],1),t._v(" "),r("v-list",{staticClass:"px-0 user-side-nav",attrs:{nav:""}},[r("UserMenu")],1)],1)}),[],!1,null,null,null).exports}},l=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("v-container",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"d-none d-lg-block",attrs:{lg:"3"}},[e("sidemenu")],1),this._v(" "),e("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:"9"}},[e("router-view")],1)],1)],1)],1)}),[],!1,null,"c098ecbe",null);e.default=l.exports}}]);