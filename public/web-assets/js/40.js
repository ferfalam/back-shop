(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      form: {
        email: "",
        code: ""
      },
      loading: false,
      resendLoading: false
    };
  },
  validations: {
    form: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      code: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  computed: {
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
      return errors;
    },
    codeErrors: function codeErrors() {
      var errors = [];
      if (!this.$v.form.code.$dirty) return errors;
      !this.$v.form.code.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("auth", {
    actionLogin: "login"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])('auth', ['updateChatWindow', 'showLoginDialog'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("wishlist", ['fetchWislistProducts'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("cart", ["fetchCartProducts"])), {}, {
    verifyAccount: function verifyAccount() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$v.form.$touch();

                if (!_this.$v.form.$anyError) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.loading = true;
                _context.next = 6;
                return _this.call_api("post", "auth/verify", _this.form);

              case 6:
                res = _context.sent;

                if (res.data.success) {
                  _this.actionLogin(res.data);

                  _this.showLoginDialog(false);

                  _this.updateChatWindow(false);

                  _this.fetchWislistProducts();

                  _this.fetchCartProducts();

                  _this.$router.push(_this.$route.query.redirect || {
                    name: "DashBoard"
                  });
                } else {
                  _this.snack({
                    message: res.data.message,
                    color: "red"
                  });
                }

                _this.loading = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    resendCode: function resendCode() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$v.form.email.$touch();

                if (!_this2.$v.form.email.$anyError) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _this2.resendLoading = true;
                _context2.next = 6;
                return _this2.call_api("post", "auth/resend-code", _this2.form);

              case 6:
                res = _context2.sent;

                if (res.data.success) {
                  _this2.snack({
                    message: res.data.message
                  });
                } else {
                  _this2.snack({
                    message: res.data.message,
                    color: "red"
                  });
                }

                _this2.resendLoading = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }),
  created: function created() {
    if (this.$route.params.email) {
      this.form.email = this.$route.params.email;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticClass: "mx-auto",
                  attrs: { cols: "12", lg: "6", md: "8", sm: "10" },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "my-5 my-lg-16 rounded-lg pa-5 border overflow-hidden shadow-light",
                    },
                    [
                      _c("div", { staticClass: "info--text mb-3" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$t(
                                "a_verification_code_has_been_sent_to_your_email"
                              )
                            ) +
                            "\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "text-uppercase lh-1 mb-4" }, [
                        _c(
                          "span",
                          { staticClass: "display-1 primary--text fw-900" },
                          [_vm._v(_vm._s(_vm.$t("verify")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "d-block display-1 fw-900 grey--text text--darken-3",
                          },
                          [_vm._v(_vm._s(_vm.$t("account")))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fs-16 fw-500 mb-6" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$t("enter_your_email_address_verification_code")
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        {
                          ref: "loginForm",
                          attrs: { "lazy-validation": "" },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.verifyAccount()
                            },
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "mb-4" },
                            [
                              _c("div", { staticClass: "mb-1 fs-13 fw-500" }, [
                                _vm._v(_vm._s(_vm.$t("email"))),
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: _vm.$t("email_address"),
                                  type: "email",
                                  "error-messages": _vm.emailErrors,
                                  "hide-details": "auto",
                                  required: "",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-4" },
                            [
                              _c("div", { staticClass: "mb-1 fs-13 fw-500" }, [
                                _vm._v(_vm._s(_vm.$t("code"))),
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: _vm.$t("verification_code"),
                                  type: "text",
                                  "error-messages": _vm.codeErrors,
                                  "hide-details": "auto",
                                  required: "",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.form.code,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "code", $$v)
                                  },
                                  expression: "form.code",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "px-12 mb-4",
                              attrs: {
                                "x-large": "",
                                elevation: "0",
                                type: "submit",
                                color: "primary",
                                loading: _vm.loading,
                                disabled: _vm.loading,
                              },
                              on: { click: _vm.verifyAccount },
                            },
                            [_vm._v(_vm._s(_vm.$t("verify")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "px-12 mb-4 ms-3",
                              attrs: {
                                "x-large": "",
                                elevation: "0",
                                type: "button",
                                color: "",
                                loading: _vm.resendLoading,
                                disabled: _vm.resendLoading,
                              },
                              on: { click: _vm.resendCode },
                            },
                            [_vm._v(_vm._s(_vm.$t("resend_code")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/auth/VerifyAccount.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/auth/VerifyAccount.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyAccount.vue?vue&type=template&id=7c0061d6& */ "./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6&");
/* harmony import */ var _VerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyAccount.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/VerifyAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/VerifyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyAccount.vue?vue&type=template&id=7c0061d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/VerifyAccount.vue?vue&type=template&id=7c0061d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyAccount_vue_vue_type_template_id_7c0061d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);