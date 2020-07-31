webpackHotUpdate_N_E("pages/summary",{

/***/ "./components/Gmap.js":
/*!****************************!*\
  !*** ./components/Gmap.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ \"./node_modules/recompose/dist/Recompose.esm.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ \"./node_modules/react-google-maps/lib/index.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/timurzakirov/Documents/self/nextJsReservation/components/Gmap.js\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Map = Object(recompose__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__[\"withProps\"])({\n  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0&v=3.exp&libraries=geometry,drawing,places',\n  loadingElement: __jsx(\"div\", {\n    style: {\n      height: \"100%\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }),\n  containerElement: __jsx(\"div\", {\n    style: {\n      height: \"400px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 23\n    }\n  }),\n  mapElement: __jsx(\"div\", {\n    style: {\n      height: \"100%\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  })\n}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__[\"withScriptjs\"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__[\"withGoogleMap\"])(function (_ref) {\n  var isMarkerShown = _ref.isMarkerShown,\n      location = _ref.location;\n  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__[\"GoogleMap\"], {\n    defaultZoom: 8,\n    defaultCenter: {\n      lat: location.lat,\n      lng: location.lng\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"], {\n    position: {\n      lat: location.lat,\n      lng: location.lng\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbWFwLmpzP2U0ODgiXSwibmFtZXMiOlsiTWFwIiwiY29tcG9zZSIsIndpdGhQcm9wcyIsImdvb2dsZU1hcFVSTCIsImxvYWRpbmdFbGVtZW50IiwiaGVpZ2h0IiwiY29udGFpbmVyRWxlbWVudCIsIm1hcEVsZW1lbnQiLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiaXNNYXJrZXJTaG93biIsImxvY2F0aW9uIiwibGF0IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBT0EsSUFBTUEsR0FBRyxHQUFHQyx5REFBTyxDQUNqQkMsMkRBQVMsQ0FBQztBQUNSQyxjQUFZLEVBQ1YsK0hBRk07QUFHUkMsZ0JBQWMsRUFBRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNO0FBQVIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFI7QUFJUkMsa0JBQWdCLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRUQsWUFBTTtBQUFSLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpWO0FBS1JFLFlBQVUsRUFBRTtBQUFLLFNBQUssRUFBRTtBQUFFRixZQUFNO0FBQVIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosQ0FBRCxDQURRLEVBUWpCRyw4REFSaUIsRUFTakJDLCtEQVRpQixDQUFQLENBVVY7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxNQUFrQkMsUUFBbEIsUUFBa0JBLFFBQWxCO0FBQUEsU0FDQSxNQUFDLDJEQUFEO0FBQ0UsZUFBVyxFQUFFLENBRGY7QUFFRSxpQkFBYSxFQUFFO0FBQUVDLFNBQUcsRUFBRUQsUUFBUSxDQUFDQyxHQUFoQjtBQUFxQkMsU0FBRyxFQUFFRixRQUFRLENBQUNFO0FBQW5DLEtBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFO0FBQUVELFNBQUcsRUFBRUQsUUFBUSxDQUFDQyxHQUFoQjtBQUFxQkMsU0FBRyxFQUFFRixRQUFRLENBQUNFO0FBQW5DLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURBO0FBQUEsQ0FWVSxDQUFaO0FBbUJlYixrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQge1xuICB3aXRoU2NyaXB0anMsXG4gIHdpdGhHb29nbGVNYXAsXG4gIEdvb2dsZU1hcCxcbiAgTWFya2VyLFxufSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5cbmNvbnN0IE1hcCA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyh7XG4gICAgZ29vZ2xlTWFwVVJMOlxuICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QVR5TUU4YVByRUFCUmhJaDhtdE9YbmZOZFE4b2ZORXEwJnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzJyxcbiAgICBsb2FkaW5nRWxlbWVudDogPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPixcbiAgICBjb250YWluZXJFbGVtZW50OiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDQwMHB4YCB9fSAvPixcbiAgICBtYXBFbGVtZW50OiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+LFxuICB9KSxcbiAgd2l0aFNjcmlwdGpzLFxuICB3aXRoR29vZ2xlTWFwXG4pKCh7IGlzTWFya2VyU2hvd24sIGxvY2F0aW9uIH0pID0+IChcbiAgPEdvb2dsZU1hcFxuICAgIGRlZmF1bHRab29tPXs4fVxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiBsb2NhdGlvbi5sYXQsIGxuZzogbG9jYXRpb24ubG5nIH19XG4gID5cbiAgICA8TWFya2VyIHBvc2l0aW9uPXt7IGxhdDogbG9jYXRpb24ubGF0LCBsbmc6IGxvY2F0aW9uLmxuZyB9fSAvPlxuICA8L0dvb2dsZU1hcD5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gmap.js\n");

/***/ })

})