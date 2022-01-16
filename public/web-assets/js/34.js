(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-tel-input */ "./node_modules/vue-tel-input/dist/vue-tel-input.umd.min.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_tel_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/address/AddressDialog.vue */ "./resources/js/components/address/AddressDialog.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mobileInputProps: {
        inputOptions: {
          type: 'tel',
          placeholder: 'phone number'
        },
        dropdownOptions: {
          showDialCodeInSelection: false,
          showFlags: true,
          showDialCodeInList: true
        },
        autoDefaultCountry: false,
        validCharactersOnly: true,
        mode: 'international'
      },
      form: {
        name: "",
        email: "",
        phone: "",
        invalidPhone: false,
        avatar: "",
        previewAvatar: "",
        oldPassword: "",
        password: "",
        confirmPassword: ""
      },
      passwordShow: false,
      addDialogShow: false,
      infoUpdateLoading: false,
      addressSelectedForEdit: {}
    };
  },
  components: {
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_3__["VueTelInput"],
    AddressDialog: _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      },
      // email: {
      //     email,
      //     required
      // },
      oldPassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      },
      password: {
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(6)
      },
      confirmPassword: {
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["sameAs"])('password')
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("auth", ["currentUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('app', ['availableCountries'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("address", ["getAddresses", "addressesLoaded", "getDefaultShippingAddress", "getDefaultBillingAddress"])), {}, {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
      return errors;
    },
    oldPasswordErrors: function oldPasswordErrors() {
      var errors = [];
      if (!this.$v.form.oldPassword.$dirty) return errors;
      !this.$v.form.oldPassword.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength && errors.push(this.$i18n.t("password_must_be_minimum_6_characters"));
      return errors;
    },
    confirmPasswordErrors: function confirmPasswordErrors() {
      var errors = [];
      if (!this.$v.form.confirmPassword.$dirty) return errors;
      !this.$v.form.confirmPassword.sameAsPassword && errors.push(this.$i18n.t("password_and_confirm_password_should_match"));
      return errors;
    }
  }),
  created: function created() {
    this.form.name = this.currentUser.name;
    this.form.email = this.currentUser.email;
    this.form.phone = this.currentUser.phone;
    this.form.previewAvatar = this.currentUser.avatar;
    this.fetchAddresses();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("auth", ["setUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("address", ["setAddresses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("address", ["fetchAddresses"])), {}, {
    previewThumbnail: function previewThumbnail(event) {
      var _this = this;

      this.form.avatar = event.target.files[0];

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.form.previewAvatar = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    },
    phoneValidate: function phoneValidate(phone) {
      this.form.invalidPhone = phone.valid ? false : true;
    },
    updateBasic: function updateBasic() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, key, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // if(this.form.email == ""){
                //     this.snack({
                //         message: "Email is required.",
                //         color: "red"
                //     });
                //     return;
                // }
                // if(this.form.email != "" && !this.$v.form.email.email){
                //     this.snack({
                //         message: "Email must be valid.",
                //         color: "red"
                //     });
                //     return;
                // }
                // if(this.form.phone != ""  && this.form.invalidPhone){
                //     this.snack({
                //         message: "Phone number must be valid.",
                //         color: "red"
                //     });
                //     return;
                // }
                _this2.$v.form.$touch();

                if (!_this2.$v.form.$anyError) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                // this.form.phone = this.form.phone.replace(/\s/g, '')
                _this2.infoUpdateLoading = true;
                formData = new FormData();

                for (key in _this2.form) {
                  formData.append(key, _this2.form[key]);
                }

                _context.next = 8;
                return _this2.call_api("post", "user/info/update", formData, true);

              case 8:
                res = _context.sent;

                if (res.data.success) {
                  _this2.setUser(res.data.user);

                  _this2.snack({
                    message: res.data.message
                  });
                } else {
                  _this2.snack({
                    message: res.data.message,
                    color: "red"
                  });
                }

                _this2.infoUpdateLoading = false;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteAddress: function deleteAddress(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.call_api("get", "user/address/delete/".concat(id));

              case 2:
                res = _context2.sent;

                if (res.data.success) {
                  _this3.setAddresses(res.data.data);

                  _this3.snack({
                    message: res.data.message
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    editAddress: function editAddress(address) {
      this.addressSelectedForEdit = address;
      this.addDialogShow = true;
    },
    markDefaultShipping: function markDefaultShipping(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.call_api("get", "user/address/default-shipping/".concat(id));

              case 2:
                res = _context3.sent;

                if (res.data.success) {
                  _this4.setAddresses(res.data.data);

                  _this4.snack({
                    message: res.data.message
                  });
                } else {
                  _this4.snack({
                    message: _this4.$i18n.t("something_went_wrong"),
                    color: "red"
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    markDefaultBilling: function markDefaultBilling(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this5.call_api("get", "user/address/default-billing/".concat(id));

              case 2:
                res = _context4.sent;

                if (res.data.success) {
                  _this5.setAddresses(res.data.data);

                  _this5.snack({
                    message: res.data.message
                  });
                } else {
                  _this5.snack({
                    message: _this5.$i18n.t("something_went_wrong"),
                    color: "red"
                  });
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    addressDialogClosed: function addressDialogClosed() {
      this.addressSelectedForEdit = {};
      this.addDialogShow = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-icon[data-v-aa78eaa4]{\n    top:3px;\n    right: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ps-lg-7 pt-4" },
    [
      _c("h1", { staticClass: "fs-21 fw-700 opacity-80 mb-5" }, [
        _vm._v(_vm._s(_vm.$t("profile"))),
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { xl: "8" } },
            [
              _c(
                "v-card",
                { staticClass: "mb-6", attrs: { elevation: "0" } },
                [
                  _c("v-card-title", { staticClass: "pa-0 fs-16 fw-700" }, [
                    _vm._v(_vm._s(_vm.$t("profile_information"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    {
                      staticClass: "py-4",
                      attrs: {
                        "lazy-validation": "",
                        enctype: "multipart/form-data",
                      },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.updateBasic()
                        },
                      },
                    },
                    [
                      _c("input", {
                        staticStyle: {
                          width: "0",
                          height: "0",
                          border: "0",
                          padding: "0",
                        },
                        attrs: { type: "email", name: "hidden" },
                      }),
                      _vm._v(" "),
                      _c("input", {
                        staticStyle: {
                          width: "0",
                          height: "0",
                          border: "0",
                          padding: "0",
                        },
                        attrs: { type: "password", name: "hidden" },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("full_name")))]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          placeholder: _vm.$t("full_name"),
                          "error-messages": _vm.nameErrors,
                          outlined: "",
                          "hide-details": "auto",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("email")))]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          placeholder: _vm.$t("email_address"),
                          outlined: "",
                          "hide-details": "auto",
                          disabled: "",
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("phone_number")))]),
                      _vm._v(" "),
                      _c(
                        "vue-tel-input",
                        _vm._b(
                          {
                            staticClass: "mb-3 opacity-80",
                            attrs: {
                              onlyCountries: _vm.availableCountries,
                              disabled: "",
                            },
                            on: { validate: _vm.phoneValidate },
                            model: {
                              value: _vm.form.phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone",
                            },
                          },
                          "vue-tel-input",
                          _vm.mobileInputProps,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("old_password")))]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          placeholder: "******",
                          type: "password",
                          "error-messages": _vm.oldPasswordErrors,
                          outlined: "",
                          "hide-details": "auto",
                        },
                        model: {
                          value: _vm.form.oldPassword,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "oldPassword", $$v)
                          },
                          expression: "form.oldPassword",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("new_password")))]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          placeholder: "******",
                          type: "password",
                          "error-messages": _vm.passwordErrors,
                          outlined: "",
                          "hide-details": "auto",
                        },
                        on: {
                          blur: function ($event) {
                            return _vm.$v.form.password.$touch()
                          },
                        },
                        model: {
                          value: _vm.form.password,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "password", $$v)
                          },
                          expression: "form.password",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("confirm_password")))]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          placeholder: "******",
                          type: "password",
                          "error-messages": _vm.confirmPasswordErrors,
                          outlined: "",
                          "hide-details": "auto",
                        },
                        on: {
                          blur: function ($event) {
                            return _vm.$v.form.confirmPassword.$touch()
                          },
                        },
                        model: {
                          value: _vm.form.confirmPassword,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "confirmPassword", $$v)
                          },
                          expression: "form.confirmPassword",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(_vm.$t("profile_image")))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column align-center justify-center border rounded pa-6 mb-3",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "avatar-upload" },
                            [
                              _c("v-avatar", { attrs: { size: "160" } }, [
                                _c("img", {
                                  attrs: { src: _vm.form.previewAvatar },
                                  on: {
                                    error: function ($event) {
                                      return _vm.imageFallback($event)
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("label", [
                                _c("input", {
                                  attrs: {
                                    type: "file",
                                    id: "avatar-input",
                                    accept: "image/png, image/jpg, image/jpeg",
                                  },
                                  on: { change: _vm.previewThumbnail },
                                }),
                                _vm._v(" "),
                                _c("i", { staticClass: "las la-image" }),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "border border-gray-300 fs-14 fw-500 grey lighten-4 mt-3 opacity-50 px-4 py-1 rounded c-pointer",
                              attrs: { for: "avatar-input" },
                            },
                            [_vm._v(_vm._s(_vm.$t("select_image")))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-10",
                          attrs: {
                            type: "submit",
                            loading: _vm.infoUpdateLoading,
                            disabled: _vm.infoUpdateLoading,
                            color: "primary",
                            elevation: "0",
                          },
                          on: { click: _vm.updateBasic },
                        },
                        [_vm._v(_vm._s(_vm.$t("update")))]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { elevation: "0" } },
                [
                  _c("address-dialog", {
                    attrs: {
                      show: _vm.addDialogShow,
                      "old-address": _vm.addressSelectedForEdit,
                    },
                    on: { close: _vm.addressDialogClosed },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-title",
                    { staticClass: "pa-0 fs-16 fw-700 mb-4" },
                    [
                      _c("span", {}, [_vm._v(_vm._s(_vm.$t("addresses")))]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ms-auto",
                          attrs: { color: "primary", elevation: "0" },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              _vm.addDialogShow = true
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("add_new")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mb-4 row-cols-1 row-cols-sm-2 gutters-10" },
                    [
                      _c("v-col", [
                        _c(
                          "div",
                          { staticClass: "fs-13 fw-600 opacity-80 mb-2" },
                          [_vm._v(_vm._s(_vm.$t("default_shipping_address")))]
                        ),
                        _vm._v(" "),
                        _vm.getDefaultShippingAddress
                          ? _c(
                              "div",
                              { staticClass: "border rounded pa-4 fs-13" },
                              [
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getDefaultShippingAddress.address
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getDefaultShippingAddress.postal_code
                                    ) +
                                      ", " +
                                      _vm._s(
                                        _vm.getDefaultShippingAddress.city
                                      ) +
                                      ", " +
                                      _vm._s(
                                        _vm.getDefaultShippingAddress.state
                                      )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getDefaultShippingAddress.country
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(_vm.getDefaultShippingAddress.phone)
                                  ),
                                ]),
                              ]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("v-col", [
                        _c(
                          "div",
                          { staticClass: "fs-13 fw-600 opacity-80 mb-2" },
                          [_vm._v(_vm._s(_vm.$t("default_billing_address")))]
                        ),
                        _vm._v(" "),
                        _vm.getDefaultBillingAddress
                          ? _c(
                              "div",
                              { staticClass: "border rounded pa-4 fs-13" },
                              [
                                _c("div", [
                                  _vm._v(
                                    _vm._s(_vm.getDefaultBillingAddress.address)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getDefaultBillingAddress.postal_code
                                    ) +
                                      ", " +
                                      _vm._s(
                                        _vm.getDefaultBillingAddress.city
                                      ) +
                                      ", " +
                                      _vm._s(_vm.getDefaultBillingAddress.state)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(_vm.getDefaultBillingAddress.country)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(_vm.getDefaultBillingAddress.phone)
                                  ),
                                ]),
                              ]
                            )
                          : _vm._e(),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { elevation: "0" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "pa-0 fs-16 fw-700 mb-4" },
                    [_vm._v(_vm._s(_vm.$t("all_addresses")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.addressesLoaded && _vm.getAddresses.length > 0
                        ? _c(
                            "v-row",
                            {
                              staticClass:
                                "row-cols-1 row-cols-sm-2 gutters-10",
                            },
                            _vm._l(_vm.getAddresses, function (address, i) {
                              return _c("v-col", { key: i }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "border rounded py-4 ps-4 pe-9 fs-13 position-relative",
                                  },
                                  [
                                    _c("div", [
                                      _vm._v(_vm._s(address.address)),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        _vm._s(address.postal_code) +
                                          ", " +
                                          _vm._s(address.city) +
                                          ", " +
                                          _vm._s(address.state)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(_vm._s(address.country)),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [_vm._v(_vm._s(address.phone))]),
                                    _vm._v(" "),
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: { "offset-y": "", left: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          staticClass:
                                                            "position-absolute dropdown-icon",
                                                          attrs: {
                                                            color:
                                                              "transparent",
                                                            elevation: "0",
                                                            fab: "",
                                                            small: "",
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "las la-ellipsis-v fs-18",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          {},
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                staticClass: "c-pointer",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.editAddress(
                                                      address
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("edit"))
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                staticClass: "c-pointer",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.markDefaultShipping(
                                                      address.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "mark_as_default_shipping_address"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                staticClass: "c-pointer",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.markDefaultBilling(
                                                      address.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "mark_as_default_billing_address"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                staticClass: "c-pointer",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.deleteAddress(
                                                      address.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("delete"))
                                                  ),
                                                ]),
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
                              ])
                            }),
                            1
                          )
                        : _c("div", { staticClass: "text-center" }, [
                            _c("div", [
                              _vm._v(_vm._s(_vm.$t("no_saved_address"))),
                            ]),
                          ]),
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
          _c("v-col", { attrs: { cols: "auto" } }),
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

/***/ "./resources/js/pages/user/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& */ "./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "aa78eaa4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);