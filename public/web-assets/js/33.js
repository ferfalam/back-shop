(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Checkout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/address/AddressDialog.vue */ "./resources/js/components/address/AddressDialog.vue");
/* harmony import */ var _components_wallet_RechargeDialog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wallet/RechargeDialog.vue */ "./resources/js/components/wallet/RechargeDialog.vue");
/* harmony import */ var _components_payment_Payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/payment/Payment */ "./resources/js/components/payment/Payment.vue");
/* harmony import */ var _components_payment_FailedDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/payment/FailedDialog */ "./resources/js/components/payment/FailedDialog.vue");
var _name$components$data;



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = (_name$components$data = {
  name: 'AizShopCheckout',
  components: {},
  data: function data() {
    return {
      couponCode: null,
      couponLoading: false,
      checkoutLoading: false,
      selectedShippingAddressId: null,
      selectedBillingAddressId: null,
      selectedPaymentMethod: null,
      selectedDeliveryOption: '',
      standardDeliveryCost: 0,
      expressDeliveryCost: 0,
      addDialogShow: false,
      addressSelectedForEdit: {},
      rechargeDialogShow: false
    };
  }
}, _defineProperty(_name$components$data, "components", {
  AddressDialog: _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  RechargeDialog: _components_wallet_RechargeDialog_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  Payment: _components_payment_Payment__WEBPACK_IMPORTED_MODULE_4__["default"],
  FailedDialog: _components_payment_FailedDialog__WEBPACK_IMPORTED_MODULE_5__["default"]
}), _defineProperty(_name$components$data, "computed", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('app', ['generalSettings', 'appUrl', 'paymentMethods'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("address", ["getAddresses", "getDefaultShippingAddress", "getDefaultBillingAddress"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("cart", ["getCartPrice", "getCouponDiscount", "getCartTax", "getSelectedCartProductIds", "getStandardTime", "getExpressTime", "getCouponCode", "getSelectedCartProductIds"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("auth", ["currentUser"])), {}, {
  totalPrice: function totalPrice() {
    return this.selectedDeliveryOption === 'standard' ? this.getCartPrice - this.getCouponDiscount + this.standardDeliveryCost : this.getCartPrice - this.getCouponDiscount + this.expressDeliveryCost;
  }
})), _defineProperty(_name$components$data, "methods", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("cart", ["saveCoupon", "resetCoupon", 'removeMultipleFromCart'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("address", ["fetchAddresses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("auth", ["rechargeWallet", "deductFromWallet"])), {}, {
  addressDialogClosed: function addressDialogClosed() {
    this.addressSelectedForEdit = {};
    this.addDialogShow = false;
  },
  editAddress: function editAddress(address) {
    this.addressSelectedForEdit = address;
    this.addDialogShow = true;
  },
  rechargeDialogClosed: function rechargeDialogClosed() {
    this.rechargeDialogShow = false;
  },
  paymentSelected: function paymentSelected(paymentMethod) {
    this.selectedPaymentMethod = paymentMethod;
  },
  walletSelected: function walletSelected() {
    if (this.currentUser.balance >= this.totalPrice) {
      this.selectedPaymentMethod = 'wallet';
    } else {
      this.snack({
        message: "You don't have enough wallet balance. Please recharge.",
        color: "red"
      });
    }
  },
  shippingAddressSelected: function shippingAddressSelected(address_id) {
    this.getShippingCost(address_id);
  },
  getShippingCost: function getShippingCost(address_id) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "checkout/get-shipping-cost/".concat(address_id));

            case 2:
              res = _context.sent;
              _this.selectedDeliveryOption = res.data.success ? 'standard' : '';
              _this.standardDeliveryCost = res.data.standard_delivery_cost;
              _this.expressDeliveryCost = res.data.express_delivery_cost;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  proceedCheckout: function proceedCheckout() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.getSelectedCartProductIds.length == 0)) {
                _context2.next = 3;
                break;
              }

              _this2.snack({
                message: "Please select a cart product",
                color: "red"
              });

              return _context2.abrupt("return");

            case 3:
              if (!(_this2.getAddresses.length == 0)) {
                _context2.next = 6;
                break;
              }

              _this2.snack({
                message: "Please add a delivery address",
                color: "red"
              });

              return _context2.abrupt("return");

            case 6:
              if (_this2.selectedShippingAddressId) {
                _context2.next = 9;
                break;
              }

              _this2.snack({
                message: "Please select a delivery address",
                color: "red"
              });

              return _context2.abrupt("return");

            case 9:
              if (_this2.selectedBillingAddressId) {
                _context2.next = 12;
                break;
              }

              _this2.snack({
                message: "Please select a billing address",
                color: "red"
              });

              return _context2.abrupt("return");

            case 12:
              if (!(_this2.selectedDeliveryOption === '')) {
                _context2.next = 15;
                break;
              }

              _this2.snack({
                message: "Sorry, delivery is not available in this shipping address.",
                color: "red"
              });

              return _context2.abrupt("return");

            case 15:
              if (_this2.selectedPaymentMethod) {
                _context2.next = 18;
                break;
              }

              _this2.snack({
                message: "Please select a payment method",
                color: "red"
              });

              return _context2.abrupt("return");

            case 18:
              data = {
                shipping_address_id: _this2.selectedShippingAddressId,
                billing_address_id: _this2.selectedBillingAddressId,
                payment_type: _this2.selectedPaymentMethod,
                delivery_type: _this2.selectedDeliveryOption,
                cart_item_ids: _this2.getSelectedCartProductIds,
                coupon_code: _this2.getCouponCode
              };

              if (!(_this2.getCartPrice > 0)) {
                _context2.next = 26;
                break;
              }

              _this2.checkoutLoading = true;
              _context2.next = 23;
              return _this2.call_api("post", "checkout/order/store", data);

            case 23:
              res = _context2.sent;

              if (res.data.success) {
                if (res.data.payment_method == 'wallet') {
                  _this2.deductFromWallet(res.data.grand_total);
                }

                if (res.data.go_to_payment) {
                  _this2.$refs.makePayment.pay({
                    requestedFrom: '/checkout',
                    paymentAmount: 0,
                    paymentMethod: res.data.payment_method,
                    paymentType: 'cart_payment',
                    userId: _this2.currentUser.id,
                    oderCode: res.data.order_code
                  });
                } else {
                  _this2.$router.push({
                    name: "OrderConfirmed",
                    query: {
                      orderCode: res.data.order_code
                    }
                  })["catch"](function () {});
                }

                setTimeout(function () {
                  _this2.resetCoupon();

                  _this2.removeMultipleFromCart(_this2.getSelectedCartProductIds);
                }, 1000);
              } else {
                _this2.snack({
                  message: res.data.message,
                  color: "red"
                });
              }

              _this2.checkoutLoading = false;

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  applyCoupon: function applyCoupon() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var data, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (_this3.couponCode) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _this3.couponLoading = true;
              data = {
                coupon_code: _this3.couponCode,
                cart_item_ids: _this3.getSelectedCartProductIds
              };
              _context3.next = 6;
              return _this3.call_api("post", "checkout/coupon/apply", data);

            case 6:
              res = _context3.sent;

              if (res.data.success) {
                _this3.snack({
                  message: res.data.message
                });

                _this3.saveCoupon({
                  couponCode: _this3.couponCode,
                  couponDetails: res.data.coupon_details
                });
              } else {
                _this3.snack({
                  message: res.data.message,
                  color: 'red'
                });
              }

              _this3.couponLoading = false;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  removeCoupon: function removeCoupon() {
    this.couponCode = null;
    this.resetCoupon();
  }
})), _defineProperty(_name$components$data, "created", function created() {
  var _this4 = this;

  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this4.fetchAddresses();

          case 2:
            _this4.selectedShippingAddressId = _this4.getDefaultShippingAddress.id;
            _this4.selectedBillingAddressId = _this4.getDefaultBillingAddress.id;

            _this4.getShippingCost(_this4.selectedShippingAddressId);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }))();
}), _defineProperty(_name$components$data, "mounted", function mounted() {
  if (this.$route.query.cart_payment && this.$route.query.order_code) {
    if (this.$route.query.cart_payment == 'success') {
      this.$router.push({
        name: "OrderConfirmed",
        query: {
          orderCode: this.$route.query.order_code,
          payment: 'failed'
        }
      })["catch"](function () {});
      this.snack({
        message: 'Payment successful!'
      });
    } else if (this.$route.query.cart_payment == 'failed') {
      this.$refs.failedPayment.open({
        orderCode: this.$route.query.order_code,
        paymentMethod: this.$route.query.payment_method
      });
    }
  }

  this.rechargeWallet(this.$route.query.wallet_payment);
}), _name$components$data);

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 600px) {\n.checkout-banner img{\n        height: 281px;\n        -o-object-fit: cover;\n           object-fit: cover;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=template&id=19797662&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Checkout.vue?vue&type=template&id=19797662& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "pt-7" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mx-auto", attrs: { xl: "8", lg: "10" } },
            [
              _c("h1", { staticClass: "fs-24 fw-700 opacity-80 mb-4" }, [
                _vm._v(_vm._s(_vm.$t("checkout"))),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("address-dialog", {
                    attrs: {
                      show: _vm.addDialogShow,
                      "old-address": _vm.addressSelectedForEdit,
                    },
                    on: { close: _vm.addressDialogClosed },
                  }),
                  _vm._v(" "),
                  _c("h3", { staticClass: "opacity-80 mb-3 fs-20" }, [
                    _vm._v(_vm._s(_vm.$t("shipping_address"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _vm._l(_vm.getAddresses, function (address) {
                        return _c(
                          "div",
                          {
                            key: address.id,
                            staticClass: "position-relative mb-3",
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "aiz-megabox d-block" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.selectedShippingAddressId,
                                      expression: "selectedShippingAddressId",
                                    },
                                  ],
                                  attrs: {
                                    type: "radio",
                                    name: "checkout_shipping",
                                  },
                                  domProps: {
                                    value: address.id,
                                    checked: address.default_shipping,
                                    checked: _vm._q(
                                      _vm.selectedShippingAddressId,
                                      address.id
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function ($event) {
                                        _vm.selectedShippingAddressId =
                                          address.id
                                      },
                                      function ($event) {
                                        return _vm.shippingAddressSelected(
                                          address.id
                                        )
                                      },
                                    ],
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "d-flex pa-3 aiz-megabox-elem fs-13 fw-600",
                                  },
                                  [
                                    _c("span", {
                                      staticClass:
                                        "aiz-rounded-check flex-shrink-0 mt-1",
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "flex-grow-1 ps-3 opacity-80 lh-1-5",
                                      },
                                      [
                                        _c("span", { staticClass: "d-block" }, [
                                          _vm._v(
                                            _vm._s(address.address) +
                                              ", " +
                                              _vm._s(address.postal_code)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "d-block" }, [
                                          _vm._v(
                                            _vm._s(address.city) +
                                              ", " +
                                              _vm._s(address.state) +
                                              ", " +
                                              _vm._s(address.country)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(address.phone)),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "absolute-right-center me-3",
                                attrs: {
                                  color: "primary",
                                  elevation: "0",
                                  small: "",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.editAddress(address)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("change")) +
                                    "\n                        "
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "border-dashed border-gray-300 primary--text fs-14",
                          attrs: { elevation: "0", block: "", "x-large": "" },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              _vm.addDialogShow = true
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "las la-plus" }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm.$t("add_new_address"))),
                          ]),
                        ]
                      ),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "opacity-80 mb-3 fs-20" }, [
                    _vm._v(_vm._s(_vm.$t("billing_address"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    _vm._l(_vm.getAddresses, function (address) {
                      return _c(
                        "div",
                        {
                          key: address.id,
                          staticClass: "position-relative mb-3",
                        },
                        [
                          _c("label", { staticClass: "aiz-megabox d-block" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedBillingAddressId,
                                  expression: "selectedBillingAddressId",
                                },
                              ],
                              attrs: {
                                type: "radio",
                                name: "checkout_billing",
                              },
                              domProps: {
                                value: address.id,
                                checked: address.default_billing,
                                checked: _vm._q(
                                  _vm.selectedBillingAddressId,
                                  address.id
                                ),
                              },
                              on: {
                                change: function ($event) {
                                  _vm.selectedBillingAddressId = address.id
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-flex pa-3 aiz-megabox-elem fs-13 fw-600",
                              },
                              [
                                _c("span", {
                                  staticClass:
                                    "aiz-rounded-check flex-shrink-0 mt-1",
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "flex-grow-1 ps-3 opacity-80 lh-1-5",
                                  },
                                  [
                                    _c("span", { staticClass: "d-block" }, [
                                      _vm._v(
                                        _vm._s(address.address) +
                                          ", " +
                                          _vm._s(address.postal_code)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "d-block" }, [
                                      _vm._v(
                                        _vm._s(address.city) +
                                          ", " +
                                          _vm._s(address.state) +
                                          ", " +
                                          _vm._s(address.country)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(address.phone))]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "absolute-right-center me-3",
                              attrs: {
                                color: "primary",
                                elevation: "0",
                                small: "",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.editAddress(address)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("change")) +
                                  "\n                        "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("h3", { staticClass: "opacity-80 mb-3 fs-20" }, [
                        _vm._v(_vm._s(_vm.$t("delivery_option"))),
                      ]),
                      _vm._v(" "),
                      _vm.selectedDeliveryOption !== ""
                        ? _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "position-relative mb-3" },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "aiz-megabox d-block" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.selectedDeliveryOption,
                                              expression:
                                                "selectedDeliveryOption",
                                            },
                                          ],
                                          attrs: {
                                            type: "radio",
                                            name: "delivery_option",
                                            value: "standard",
                                          },
                                          domProps: {
                                            checked: _vm._q(
                                              _vm.selectedDeliveryOption,
                                              "standard"
                                            ),
                                          },
                                          on: {
                                            change: function ($event) {
                                              _vm.selectedDeliveryOption =
                                                "standard"
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "d-flex pa-3 aiz-megabox-elem fs-13 ",
                                          },
                                          [
                                            _c("span", {
                                              staticClass:
                                                "aiz-rounded-check flex-shrink-0 mt-1",
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "flex-grow-1 ps-3 lh-1-5",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "d-block fw-600",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "standard_delivery"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "d-block" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("delivery_cost")
                                                      ) + ": "
                                                    ),
                                                    _c(
                                                      "span",
                                                      { staticClass: "fw-600" },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.format_price(
                                                              _vm.standardDeliveryCost
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "d-block" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "delivery_timing"
                                                        )
                                                      ) + ": "
                                                    ),
                                                    _c(
                                                      "span",
                                                      { staticClass: "fw-600" },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getStandardTime
                                                          ) +
                                                            " " +
                                                            _vm._s(
                                                              _vm.$t("days")
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "position-relative mb-3" },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "aiz-megabox d-block" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.selectedDeliveryOption,
                                              expression:
                                                "selectedDeliveryOption",
                                            },
                                          ],
                                          attrs: {
                                            type: "radio",
                                            name: "delivery_option",
                                            value: "express",
                                          },
                                          domProps: {
                                            checked: _vm._q(
                                              _vm.selectedDeliveryOption,
                                              "express"
                                            ),
                                          },
                                          on: {
                                            change: function ($event) {
                                              _vm.selectedDeliveryOption =
                                                "express"
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "d-flex pa-3 aiz-megabox-elem fs-13",
                                          },
                                          [
                                            _c("span", {
                                              staticClass:
                                                "aiz-rounded-check flex-shrink-0 mt-1",
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "flex-grow-1 ps-3 lh-1-5",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "d-block fw-600",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "express_delivery"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "d-block" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("delivery_cost")
                                                      ) + ": "
                                                    ),
                                                    _c(
                                                      "span",
                                                      { staticClass: "fw-600" },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.format_price(
                                                              _vm.expressDeliveryCost
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "d-block" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "delivery_timing"
                                                        )
                                                      ) + ": "
                                                    ),
                                                    _c(
                                                      "span",
                                                      { staticClass: "fw-600" },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getExpressTime
                                                          ) +
                                                            " " +
                                                            _vm._s(
                                                              _vm.$t("days")
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          )
                        : _c(
                            "div",
                            {
                              staticClass:
                                "border red white--text rounded pa-4",
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.$t(
                                      "sorry_delivery_is_not_available_in_this_shipping_address"
                                    )
                                  ) +
                                  "\n                    "
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
              _c("div", { staticClass: "mb-4" }, [
                _c("h3", { staticClass: "opacity-80 mb-3 fs-20" }, [
                  _vm._v(_vm._s(_vm.$t("order_summary"))),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-4" },
                  [
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "12", sm: "8" } }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "border border-gray-200 rounded px-6 py-5 grey lighten-5",
                            },
                            [
                              _c(
                                "v-row",
                                {},
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-500 opacity-80",
                                      attrs: { cols: "8" },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("sub_total")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-700",
                                      attrs: { cols: "4" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.format_price(
                                            _vm.getCartPrice - _vm.getCartTax,
                                            false
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
                                "v-row",
                                { staticClass: "mt-0" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-500 opacity-80",
                                      attrs: { cols: "8" },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("shipping_charge")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-700",
                                      attrs: { cols: "4" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            this.selectedDeliveryOption ===
                                              "standard"
                                              ? _vm.format_price(
                                                  _vm.standardDeliveryCost
                                                )
                                              : _vm.format_price(
                                                  _vm.expressDeliveryCost
                                                )
                                          ) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-0" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-500 opacity-80",
                                      attrs: { cols: "8" },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("tax")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-700",
                                      attrs: { cols: "4" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.format_price(
                                            _vm.getCartTax,
                                            false
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "mt-3 mb-2" }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-0" },
                                [
                                  _vm.getCouponCode != null
                                    ? [
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "fw-500 opacity-80",
                                            attrs: { cols: "8" },
                                          },
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "form-control form-control-sm white",
                                              attrs: {
                                                placeholder:
                                                  _vm.$t("coupon_code"),
                                                type: "text",
                                                "hide-details": "auto",
                                                required: "",
                                                outlined: "",
                                                disabled: "",
                                              },
                                              model: {
                                                value: _vm.getCouponCode,
                                                callback: function ($$v) {
                                                  _vm.getCouponCode = $$v
                                                },
                                                expression: "getCouponCode",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "fw-700",
                                            attrs: { cols: "4" },
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass:
                                                  "white--text darken-3 text-capitalize px-5",
                                                attrs: {
                                                  elevation: "0",
                                                  color: "grey",
                                                  small: "",
                                                },
                                                on: { click: _vm.removeCoupon },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("change")))]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    : [
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "fw-500 opacity-80",
                                            attrs: { cols: "8" },
                                          },
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "form-control form-control-sm white",
                                              attrs: {
                                                placeholder:
                                                  _vm.$t("coupon_code"),
                                                type: "text",
                                                "hide-details": "auto",
                                                required: "",
                                                outlined: "",
                                              },
                                              model: {
                                                value: _vm.couponCode,
                                                callback: function ($$v) {
                                                  _vm.couponCode = $$v
                                                },
                                                expression: "couponCode",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "fw-700",
                                            attrs: { cols: "4" },
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass:
                                                  "white--text darken-3 text-capitalize px-5",
                                                attrs: {
                                                  elevation: "0",
                                                  color: "grey",
                                                  small: "",
                                                  loading: _vm.couponLoading,
                                                  disabled: _vm.couponLoading,
                                                },
                                                on: { click: _vm.applyCoupon },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("apply")))]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-0" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-500 opacity-80",
                                      attrs: { cols: "8" },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("discount")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-700",
                                      attrs: { cols: "4" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.format_price(
                                            _vm.getCouponDiscount
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "my-3" }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: " fs-16" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-500 opacity-80",
                                      attrs: { cols: "8" },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("total_to_pay")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "fw-700",
                                      attrs: { cols: "4" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.format_price(
                                            _vm.totalPrice,
                                            false
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
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", sm: "4" } },
                          [
                            _c("banner", {
                              staticClass: "checkout-banner",
                              attrs: {
                                loading: false,
                                banner:
                                  _vm.$store.getters["app/banners"]
                                    .checkout_page,
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("h3", { staticClass: "opacity-80 mb-3 fs-20" }, [
                    _vm._v(_vm._s(_vm.$t("payment_options"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    _vm._l(_vm.paymentMethods, function (paymentMethod, i) {
                      return _c(
                        "v-col",
                        {
                          key: i,
                          class: [paymentMethod.status == 1 ? "" : "d-none"],
                          attrs: { cols: "6", sm: "4", md: "3" },
                        },
                        [
                          _c("label", { staticClass: "aiz-megabox d-block" }, [
                            _c("input", {
                              attrs: {
                                type: "radio",
                                name: "checkout_payment_method",
                              },
                              domProps: {
                                checked:
                                  paymentMethod.code ==
                                  _vm.selectedPaymentMethod,
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.paymentSelected(paymentMethod.code)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block pa-3 aiz-megabox-elem text-center",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-fluid w-100",
                                  attrs: { src: paymentMethod.img },
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "fw-700 fs-14" }, [
                                  _vm._v(_vm._s(paymentMethod.name)),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _vm.generalSettings.wallet_system == 1
                    ? [
                        _c("div", { staticClass: "mt-4 mb-3 fs-16 fw-700" }, [
                          _vm._v("or,"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: [
                              "border rounded pa-4 d-flex",
                              {
                                "bg-soft-primary border-primary":
                                  _vm.selectedPaymentMethod == "wallet",
                              },
                            ],
                          },
                          [
                            _c("recharge-dialog", {
                              attrs: {
                                show: _vm.rechargeDialogShow,
                                from: "/checkout",
                              },
                              on: { close: _vm.rechargeDialogClosed },
                            }),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { attrs: { align: "center" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "4" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "px-7 white--text",
                                        attrs: { color: "red", elevation: "0" },
                                        on: {
                                          click: function ($event) {
                                            $event.stopPropagation()
                                            return _vm.walletSelected()
                                          },
                                        },
                                      },
                                      [_vm._v("Pay with wallet")]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text-sm-center lh-1-5",
                                    attrs: { cols: "12", sm: "4" },
                                  },
                                  [
                                    _c("div", [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("your_wallet_balance")
                                          ) + " :"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "fw-700 fs-15" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.format_price(
                                                _vm.currentUser.balance
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.selectedPaymentMethod == "wallet"
                                      ? _c("div", [
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("remaining_balance")
                                              ) + " :"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "fw-700 fs-15" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.format_price(
                                                    _vm.currentUser.balance -
                                                      _vm.totalPrice
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text-sm-end",
                                    attrs: { cols: "12", sm: "4" },
                                  },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "px-7",
                                        attrs: {
                                          color: "grey lighten-4",
                                          elevation: "0",
                                        },
                                        on: {
                                          click: function ($event) {
                                            $event.stopPropagation()
                                            _vm.rechargeDialogShow = true
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("recharge_wallet"))
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
                      ]
                    : _vm._e(),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("by_clicking_proceed_i_agree_to")) +
                      " " +
                      _vm._s(_vm.$store.getters["app/appName"]) +
                      "'s\n                "
                  ),
                  _c(
                    "router-link",
                    {
                      staticClass: "primary--text fw-500",
                      attrs: {
                        to: {
                          name: "CustomPage",
                          params: { pageSlug: "terms-and-conditions" },
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("terms_and_conditions")) +
                          "\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "my-8" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        elevation: "0",
                        color: "primary",
                        "x-large": "",
                        loading: _vm.checkoutLoading,
                        disabled: _vm.checkoutLoading,
                      },
                      on: { click: _vm.proceedCheckout },
                    },
                    [
                      _c("span", {}, [_vm._v(_vm._s(_vm.$t("proceed")))]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "border-start border-gray-400 ps-5 ms-5",
                        },
                        [_vm._v(_vm._s(_vm.format_price(_vm.totalPrice)))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("Payment", { ref: "makePayment" }),
              _vm._v(" "),
              _c("FailedDialog", { ref: "failedPayment" }),
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

/***/ "./resources/js/components/payment/FailedDialog.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/payment/FailedDialog.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\xampp73\\htdocs\\shop\\resources\\js\\components\\payment\\FailedDialog.vue'");

/***/ }),

/***/ "./resources/js/components/payment/Payment.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/payment/Payment.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\xampp73\\htdocs\\shop\\resources\\js\\components\\payment\\Payment.vue'");

/***/ }),

/***/ "./resources/js/components/wallet/RechargeDialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/wallet/RechargeDialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\xampp73\\htdocs\\shop\\resources\\js\\components\\wallet\\RechargeDialog.vue'");

/***/ }),

/***/ "./resources/js/pages/Checkout.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Checkout.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=19797662& */ "./resources/js/pages/Checkout.vue?vue&type=template&id=19797662&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/pages/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Checkout.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Checkout.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Checkout.vue?vue&type=template&id=19797662&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Checkout.vue?vue&type=template&id=19797662& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=19797662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Checkout.vue?vue&type=template&id=19797662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_19797662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);