webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/slices/reservationSlice.js":
/*!****************************************!*\
  !*** ./lib/slices/reservationSlice.js ***!
  \****************************************/
/*! exports provided: reservationSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reservationSlice\", function() { return reservationSlice; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  step: 0,\n  dates: {\n    startDate: '',\n    endDate: ''\n  },\n  location: {\n    adress: '',\n    latLng: {\n      lat: null,\n      lng: null\n    }\n  }\n};\nvar reservationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createSlice\"])({\n  name: 'reservation',\n  initialState: initialState,\n  reducers: {\n    setAdress: function setAdress(state, _ref) {\n      var payload = _ref.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        location: _objectSpread({}, payload)\n      });\n    },\n    setDates: function setDates(state, _ref2) {\n      var payload = _ref2.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dates: _objectSpread({}, payload)\n      });\n    },\n    setAdresDesc: function setAdresDesc(state, _ref3) {\n      var payload = _ref3.payload;\n      console.log('payload');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        location: _objectSpread(_objectSpread({}, location), {}, {\n          adress: payload\n        })\n      });\n    },\n    setStart: function setStart(state, _ref4) {\n      var payload = _ref4.payload;\n      console.log('dasdassda');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dates: _objectSpread(_objectSpread({}, state.dates), {}, {\n          startDate: payload\n        })\n      });\n    },\n    setEnd: function setEnd(state, _ref5) {\n      var payload = _ref5.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dates: _objectSpread(_objectSpread({}, state.dates), {}, {\n          endDate: payload\n        })\n      });\n    },\n    // stepIncrement: (state) => {\n    //   console.log('dasasddas');\n    //   return (state) => (state.step += 1);\n    // },\n    reset: function reset(state) {\n      return initialState;\n    }\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3NsaWNlcy9yZXNlcnZhdGlvblNsaWNlLmpzPzMzNzgiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3RlcCIsImRhdGVzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImxvY2F0aW9uIiwiYWRyZXNzIiwibGF0TG5nIiwibGF0IiwibG5nIiwicmVzZXJ2YXRpb25TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QWRyZXNzIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0RGF0ZXMiLCJzZXRBZHJlc0Rlc2MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsQ0FEYTtBQUVuQkMsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRSxFQUROO0FBRUxDLFdBQU8sRUFBRTtBQUZKLEdBRlk7QUFNbkJDLFVBQVEsRUFBRTtBQUFFQyxVQUFNLEVBQUUsRUFBVjtBQUFjQyxVQUFNLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCO0FBQXRCO0FBTlMsQ0FBckI7QUFRTyxJQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQVcsQ0FBQztBQUMxQ0MsTUFBSSxFQUFFLGFBRG9DO0FBRTFDWixjQUFZLEVBQUVBLFlBRjRCO0FBRzFDYSxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFFLG1CQUFDQyxLQUFELFFBQXdCO0FBQUEsVUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2pDLDZDQUFZRCxLQUFaO0FBQW1CVixnQkFBUSxvQkFBT1csT0FBUDtBQUEzQjtBQUNELEtBSE87QUFJUkMsWUFBUSxFQUFFLGtCQUFDRixLQUFELFNBQXdCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQ2hDLDZDQUFZRCxLQUFaO0FBQW1CYixhQUFLLG9CQUFPYyxPQUFQO0FBQXhCO0FBQ0QsS0FOTztBQU9SRSxnQkFBWSxFQUFFLHNCQUFDSCxLQUFELFNBQXdCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQ3BDRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsNkNBQVlMLEtBQVo7QUFBbUJWLGdCQUFRLGtDQUFPQSxRQUFQO0FBQWlCQyxnQkFBTSxFQUFFVTtBQUF6QjtBQUEzQjtBQUNELEtBVk87QUFXUkssWUFBUSxFQUFFLGtCQUFDTixLQUFELFNBQXdCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQ2hDRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsNkNBQVlMLEtBQVo7QUFBbUJiLGFBQUssa0NBQU9hLEtBQUssQ0FBQ2IsS0FBYjtBQUFvQkMsbUJBQVMsRUFBRWE7QUFBL0I7QUFBeEI7QUFDRCxLQWRPO0FBZVJNLFVBQU0sRUFBRSxnQkFBQ1AsS0FBRCxTQUF3QjtBQUFBLFVBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUM5Qiw2Q0FBWUQsS0FBWjtBQUFtQmIsYUFBSyxrQ0FBT2EsS0FBSyxDQUFDYixLQUFiO0FBQW9CRSxpQkFBTyxFQUFFWTtBQUE3QjtBQUF4QjtBQUNELEtBakJPO0FBa0JSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLFNBQUssRUFBRSxlQUFDUixLQUFELEVBQVc7QUFDaEIsYUFBT2YsWUFBUDtBQUNEO0FBeEJPO0FBSGdDLENBQUQsQ0FBcEMiLCJmaWxlIjoiLi9saWIvc2xpY2VzL3Jlc2VydmF0aW9uU2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzdGVwOiAwLFxuICBkYXRlczoge1xuICAgIHN0YXJ0RGF0ZTogJycsXG4gICAgZW5kRGF0ZTogJycsXG4gIH0sXG4gIGxvY2F0aW9uOiB7IGFkcmVzczogJycsIGxhdExuZzogeyBsYXQ6IG51bGwsIGxuZzogbnVsbCB9IH0sXG59O1xuZXhwb3J0IGNvbnN0IHJlc2VydmF0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdyZXNlcnZhdGlvbicsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEFkcmVzczogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvY2F0aW9uOiB7IC4uLnBheWxvYWQgfSB9O1xuICAgIH0sXG4gICAgc2V0RGF0ZXM6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRlczogeyAuLi5wYXlsb2FkIH0gfTtcbiAgICB9LFxuICAgIHNldEFkcmVzRGVzYzogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BheWxvYWQnKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2NhdGlvbjogeyAuLi5sb2NhdGlvbiwgYWRyZXNzOiBwYXlsb2FkIH0gfTtcbiAgICB9LFxuICAgIHNldFN0YXJ0OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGFzZGFzc2RhJyk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0ZXM6IHsgLi4uc3RhdGUuZGF0ZXMsIHN0YXJ0RGF0ZTogcGF5bG9hZCB9IH07XG4gICAgfSxcbiAgICBzZXRFbmQ6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRlczogeyAuLi5zdGF0ZS5kYXRlcywgZW5kRGF0ZTogcGF5bG9hZCB9IH07XG4gICAgfSxcbiAgICAvLyBzdGVwSW5jcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdkYXNhc2RkYXMnKTtcbiAgICAvLyAgIHJldHVybiAoc3RhdGUpID0+IChzdGF0ZS5zdGVwICs9IDEpO1xuICAgIC8vIH0sXG4gICAgcmVzZXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/slices/reservationSlice.js\n");

/***/ })

})