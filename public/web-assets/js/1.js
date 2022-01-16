(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);


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
  name: "ReviewDialog",
  data: function data() {
    return {
      dialog: false,
      submitting: false,
      productId: null,
      product: null,
      hasOldReview: false,
      review: {
        rating: null,
        comment: null
      },
      options: {
        color: "grey lighten-3",
        width: 800,
        zIndex: 200
      }
    };
  },
  validations: {
    review: {
      comment: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  computed: {
    commentErrors: function commentErrors() {
      var errors = [];
      if (!this.$v.review.comment.$dirty) return errors;
      !this.$v.review.comment.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    }
  },
  methods: {
    open: function open(productId) {
      this.dialog = true;
      this.hasOldReview = false;
      this.product = null;
      this.review.rating = null;
      this.review.comment = null;
      this.productId = productId;
      if (productId) this.getReviewStatus(productId);
    },
    getReviewStatus: function getReviewStatus(productId) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.call_api("get", "user/review/check/".concat(productId));

              case 2:
                res = _context.sent;

                if (res.data.success) {
                  _this.product = res.data.product;
                  _this.review = res.data.oldReview;

                  if (!res.data.oldReview.rating) {
                    _this.review.rating = 5;
                  } else {
                    _this.hasOldReview = true;
                  }
                } else {
                  _this.snack({
                    message: res.data.message
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$v.review.$touch();

                if (!_this2.$v.review.$anyError) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _this2.review.product_id = _this2.productId;
                _this2.submitting = true;
                _context2.next = 7;
                return _this2.call_api("post", "user/review/submit", _this2.review);

              case 7:
                res = _context2.sent;

                if (res.data.success) {
                  _this2.snack({
                    message: res.data.message
                  });
                } else {
                  _this2.snack({
                    message: res.data.message,
                    color: 'red'
                  });
                }

                _this2.submitting = false;
                _this2.dialog = false;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/Summary.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/Summary.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReviewDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewDialog */ "./resources/js/components/order/ReviewDialog.vue");
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ReviewDialog: _ReviewDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    orderDetails: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      cod_sticker: Vue.helpers.asset("/assets/img/cod_sticker.svg"),
      paid_sticker: Vue.helpers.asset("/assets/img/paid_sticker.svg")
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'serial'
      }, {
        text: this.$i18n.t('product'),
        sortable: false,
        value: 'product'
      }, {
        text: this.$i18n.t('quantity'),
        sortable: false,
        value: 'quantity'
      }, {
        text: this.$i18n.t('unit_price'),
        sortable: false,
        value: 'unit_price'
      }, {
        text: this.$i18n.t('total'),
        sortable: false,
        align: 'end',
        value: 'total'
      }];

      if (this.orderDetails.delivery_status == 'delivered') {
        headers.push({
          text: '',
          align: 'end',
          sortable: false,
          value: 'review'
        });
      }

      return headers;
    }
  },
  methods: {
    openReviewDialog: function openReviewDialog(productId) {
      this.$refs.submitReview.open(productId);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      style: { zIndex: _vm.options.zIndex },
      attrs: { "max-width": _vm.options.width, scrollable: "" },
      on: {
        keydown: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close.apply(null, arguments)
        },
      },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "fs-16 fw-600", class: _vm.options.color },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("rate_and_review_purchased_product")) +
                  "\n            "
              ),
              _c(
                "button",
                {
                  staticClass: "ms-auto",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      return _vm.close.apply(null, arguments)
                    },
                  },
                },
                [_c("i", { staticClass: "la la-close fs-20" })]
              ),
            ]
          ),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-4 black--text" }, [
            _vm.productId
              ? _c("div", [
                  !_vm.product
                    ? _c("div", { staticClass: "h-270px" })
                    : _c(
                        "div",
                        { staticClass: "px-5 py-4" },
                        [
                          _vm.hasOldReview
                            ? _c(
                                "v-alert",
                                {
                                  attrs: {
                                    dense: "",
                                    text: "",
                                    icon: "la-info-circle",
                                    type: "info",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.$t(
                                          "youve_already_reviewed_this_product_you_can_update_the_review"
                                        )
                                      ) +
                                      "\n                    "
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-form",
                            [
                              _c("div", [_vm._v(_vm._s(_vm.$t("rating")))]),
                              _vm._v(" "),
                              _c("v-rating", {
                                attrs: {
                                  "empty-icon": "las la-star",
                                  "full-icon": "las la-star active",
                                  "half-icon": "las la-star half half",
                                  "background-color": "",
                                  hover: "",
                                  length: "5",
                                  size: "32",
                                },
                                model: {
                                  value: _vm.review.rating,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.review, "rating", $$v)
                                  },
                                  expression: "review.rating",
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "mt-3" }, [
                                _vm._v(_vm._s(_vm.$t("comment"))),
                              ]),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  "error-messages": _vm.commentErrors,
                                  "hide-details": "auto",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.review.comment,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.review, "comment", $$v)
                                  },
                                  expression: "review.comment",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                ])
              : _c("div", { staticClass: "text-center fs-15 py-4" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("this_product_is_not_available")) +
                      "\n            "
                  ),
                ]),
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pt-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "grey darken-3", text: "" },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.close.apply(null, arguments)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("close")))]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "px-5",
                  attrs: {
                    color: "primary",
                    elevation: "0",
                    loading: _vm.submitting,
                    disabled: _vm.submitting,
                  },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("submit")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a& ***!
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
  return !_vm.is_empty_obj(_vm.orderDetails)
    ? _c(
        "div",
        [
          _c(
            "div",
            {
              staticClass:
                "grey lighten-4 border border-gray-200 pa-4 rounded fs-18 fw-700 lh-1",
            },
            [_vm._v(_vm._s(_vm.$t("order_summary")))]
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mb-3" },
            [
              _c(
                "v-col",
                { staticClass: "pb-0 pb-md-3", attrs: { md: "6", cols: "12" } },
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("order_code")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [_vm._v(_vm._s(_vm.orderDetails.code))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("name")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [_vm._v(_vm._s(_vm.orderDetails.user.name))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("email")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [_vm._v(_vm._s(_vm.orderDetails.user.email))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("delivery_type")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end text-capitalize" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.orderDetails.delivery_type.replaceAll(
                                    "_",
                                    " "
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-content",
                            { staticClass: "fw-700 align-self-baseline" },
                            [_vm._v(_vm._s(_vm.$t("shipping_address")) + " :")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [
                              _c("span", { staticClass: "d-block lh-1-6" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.orderDetails.shipping_address.address
                                  ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.shipping_address
                                        .postal_code
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "d-block lh-1-6" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.orderDetails.shipping_address.city
                                  ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.shipping_address.state
                                    ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.shipping_address.country
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "lh-1-6" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.orderDetails.shipping_address.phone
                                  )
                                ),
                              ]),
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pt-0 pt-md-3", attrs: { md: "6", cols: "12" } },
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("total_order_amount")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.format_price(_vm.orderDetails.grand_total)
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("payment_method")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end text-capitalize" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.orderDetails.payment_type.replaceAll(
                                    "_",
                                    " "
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("payment_status")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end text-capitalize" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.orderDetails.payment_status.replaceAll(
                                    "_",
                                    " "
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", { staticClass: "fw-700" }, [
                            _vm._v(_vm._s(_vm.$t("delivery_status")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end text-capitalize" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.orderDetails.delivery_status.replaceAll(
                                    "_",
                                    " "
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-content",
                            { staticClass: "fw-700 align-self-baseline" },
                            [_vm._v(_vm._s(_vm.$t("billing_address")) + " :")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end" },
                            [
                              _c("span", { staticClass: "d-block lh-1-6" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.orderDetails.billing_address.address
                                  ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.billing_address
                                        .postal_code
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "d-block lh-1-6" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.orderDetails.billing_address.city
                                  ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.billing_address.state
                                    ) +
                                    ", " +
                                    _vm._s(
                                      _vm.orderDetails.billing_address.country
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "lh-1-6" }, [
                                _vm._v(
                                  _vm._s(_vm.orderDetails.billing_address.phone)
                                ),
                              ]),
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
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "grey lighten-4 border border-gray-200 pa-4 rounded fs-18 fw-700 lh-1",
            },
            [_vm._v(_vm._s(_vm.$t("order_details")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "py-5" },
            [
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.orderDetails.products.data,
                  "hide-default-footer": "",
                  "mobile-breakpoint": "750",
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.serial",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("span", { staticClass: "d-block fw-600" }, [
                            _vm._v(
                              _vm._s(
                                _vm.orderDetails.products.data.indexOf(item) + 1
                              )
                            ),
                          ]),
                        ]
                      },
                    },
                    {
                      key: "item.product",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("div", { staticClass: "d-flex align-center" }, [
                            _c("img", {
                              staticClass: "size-70px flex-shrink-0",
                              attrs: { src: item.thumbnail, alt: item.name },
                              on: {
                                error: function ($event) {
                                  return _vm.imageFallback($event)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-grow-1 ms-4" }, [
                              _c("div", { staticClass: "text-truncate-2" }, [
                                _vm._v(_vm._s(item.name)),
                              ]),
                              _vm._v(" "),
                              item.combinations.length > 0
                                ? _c(
                                    "div",
                                    {},
                                    _vm._l(
                                      item.combinations,
                                      function (combination, j) {
                                        return _c(
                                          "span",
                                          {
                                            key: j,
                                            staticClass: "me-4 py-1 fs-12",
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "opacity-70" },
                                              [
                                                _vm._v(
                                                  _vm._s(combination.attribute)
                                                ),
                                              ]
                                            ),
                                            _vm._v(" : "),
                                            _c(
                                              "span",
                                              { staticClass: "fw-500" },
                                              [
                                                _vm._v(
                                                  _vm._s(combination.value)
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e(),
                            ]),
                          ]),
                        ]
                      },
                    },
                    {
                      key: "item.quantity",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("span", { staticClass: "d-block fw-600" }, [
                            _vm._v(_vm._s(item.quantity)),
                          ]),
                        ]
                      },
                    },
                    {
                      key: "item.unit_price",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("span", { staticClass: "d-block fw-600" }, [
                            _vm._v(
                              _vm._s(_vm.format_price(item.price + item.tax))
                            ),
                          ]),
                        ]
                      },
                    },
                    {
                      key: "item.total",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("span", { staticClass: "d-block fw-600" }, [
                            _vm._v(_vm._s(_vm.format_price(item.total))),
                          ]),
                        ]
                      },
                    },
                    _vm.orderDetails.delivery_status == "delivered"
                      ? {
                          key: "item.review",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "px-2 text-primary",
                                  attrs: { text: "", small: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.openReviewDialog(item.id)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.$t("write_a_review")) +
                                      "\n                "
                                  ),
                                ]
                              ),
                            ]
                          },
                        }
                      : null,
                  ],
                  null,
                  true
                ),
              }),
              _vm._v(" "),
              _c("review-dialog", { ref: "submitReview" }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mb-5" },
            [
              _c(
                "v-col",
                {
                  attrs: {
                    xl: "7",
                    md: "6",
                    cols: "12",
                    order: "2",
                    "order-md": "1",
                  },
                },
                [
                  _vm.orderDetails.payment_status == "paid"
                    ? _c("div", { staticClass: "mt-5 ms-lg-5" }, [
                        _c("img", { attrs: { src: _vm.paid_sticker } }),
                      ])
                    : _vm.orderDetails.payment_type == "cash_on_delivery"
                    ? _c("div", { staticClass: "mt-5 ms-lg-5" }, [
                        _c("img", { attrs: { src: _vm.cod_sticker } }),
                      ])
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  attrs: {
                    xl: "5",
                    md: "6",
                    cols: "12",
                    order: "1",
                    "order-md": "2",
                  },
                },
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        { staticClass: "fw-700" },
                        [
                          _c("v-list-item-content", [
                            _vm._v(_vm._s(_vm.$t("sub_total")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end col-4" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.format_price(_vm.orderDetails.subtotal)
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { staticClass: "fw-700" },
                        [
                          _c("v-list-item-content", [
                            _vm._v(_vm._s(_vm.$t("tax")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end col-4" },
                            [
                              _vm._v(
                                _vm._s(_vm.format_price(_vm.orderDetails.tax))
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { staticClass: "fw-700" },
                        [
                          _c("v-list-item-content", [
                            _vm._v(_vm._s(_vm.$t("shipping_charge")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end col-4" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.format_price(
                                    _vm.orderDetails.shipping_cost
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { staticClass: "fw-700" },
                        [
                          _c("v-list-item-content", [
                            _vm._v(_vm._s(_vm.$t("coupon_discount")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end col-4" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.format_price(
                                    _vm.orderDetails.coupon_discount
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "grey lighten-4 border border-gray-200 rounded",
                    },
                    [
                      _c(
                        "v-list-item",
                        { staticClass: "fw-700" },
                        [
                          _c("v-list-item-content", [
                            _vm._v(_vm._s(_vm.$t("total")) + " :"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            { staticClass: "align-end col-4 px-0" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.format_price(_vm.orderDetails.grand_total)
                                )
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
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/order/ReviewDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/order/ReviewDialog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewDialog.vue?vue&type=template&id=4f6f210c& */ "./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c&");
/* harmony import */ var _ReviewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReviewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/ReviewDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/ReviewDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewDialog.vue?vue&type=template&id=4f6f210c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/ReviewDialog.vue?vue&type=template&id=4f6f210c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewDialog_vue_vue_type_template_id_4f6f210c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order/Summary.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/order/Summary.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=64fe470a& */ "./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/components/order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/Summary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/Summary.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/order/Summary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=template&id=64fe470a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/Summary.vue?vue&type=template&id=64fe470a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_64fe470a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);