(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_product_ProductBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/product/ProductBox */ "./resources/js/components/product/ProductBox.vue");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      offer: {}
    };
  },
  components: {
    ProductBox: _components_product_ProductBox__WEBPACK_IMPORTED_MODULE_1__["default"],
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "offer/".concat(_this.$route.params.offerSlug));

            case 2:
              res = _context.sent;

              if (res.data.success) {
                _this.offer = res.data.data;
              } else {
                _this.snack({
                  message: res.data.message,
                  color: "red"
                });

                _this.$router.push({
                  name: "404"
                });
              }

              _this.loading = false;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pb-6" },
    [
      _vm.loading
        ? [
            _c("v-skeleton-loader", {
              attrs: { type: "image", height: "500" },
            }),
            _vm._v(" "),
            _c(
              "v-container",
              [
                _c(
                  "v-row",
                  {
                    staticClass:
                      "gutters-10 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6",
                  },
                  _vm._l(12, function (j, i) {
                    return _c(
                      "v-col",
                      { key: i },
                      [
                        _c("v-skeleton-loader", {
                          attrs: { type: "image", height: "300" },
                        }),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]
        : !_vm.is_empty_obj(_vm.offer)
        ? [
            _c("img", {
              staticClass: "w-100 mw-100",
              attrs: { src: _vm.offer.banner, alt: _vm.offer.title },
            }),
            _vm._v(" "),
            _c(
              "v-container",
              [
                _c("h1", { staticClass: "text-center mt-4" }, [
                  _vm._v(_vm._s(_vm.offer.title)),
                ]),
                _vm._v(" "),
                _c("FlipCountdown", {
                  staticClass: "mb-5",
                  attrs: { deadline: _vm.offer.end_date },
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  {
                    staticClass:
                      "gutters-10 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6",
                  },
                  _vm._l(_vm.offer.products.data, function (product, i) {
                    return _c(
                      "v-col",
                      { key: i },
                      [
                        _c("ProductBox", {
                          attrs: {
                            "product-details": product,
                            "is-loading": _vm.loading,
                          },
                        }),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/product/ProductBox.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/product/ProductBox.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\xampp73\\htdocs\\shop\\resources\\js\\components\\product\\ProductBox.vue'");

/***/ }),

/***/ "./resources/js/pages/OfferDetails.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/OfferDetails.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferDetails.vue?vue&type=template&id=38213162& */ "./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162&");
/* harmony import */ var _OfferDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/OfferDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OfferDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/OfferDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OfferDetails.vue?vue&type=template&id=38213162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/OfferDetails.vue?vue&type=template&id=38213162&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetails_vue_vue_type_template_id_38213162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);