/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Volumes_dev_ale_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var scroll_data_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scroll-data-hook */ \"./node_modules/scroll-data-hook/dist/index.es.js\");\n/* harmony import */ var _components_jobshome_jobshome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/jobshome/jobshome */ \"./components/jobshome/jobshome.tsx\");\n/* harmony import */ var _styles_main_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/main.module.sass */ \"./styles/main.module.sass\");\n/* harmony import */ var _styles_main_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_sass__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Volumes/dev/ale/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var data = _ref.data,\n      results = _ref.results,\n      cloudn = _ref.cloudn;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),\n      _React$useState2 = (0,_Volumes_dev_ale_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      dataRefs = _React$useState2[0],\n      setRefs = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),\n      _React$useState4 = (0,_Volumes_dev_ale_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),\n      yPos = _React$useState4[0],\n      setYPos = _React$useState4[1]; // let Ref = useRef([React.createRef(), React.createRef()]);\n  // let Ref = useRef<ref>()\n  // let Ref = useRef([createRef(), createRef()]);\n  // const itemEls = useRef(new Array())\n  // {items.map(item => (\n  //  <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>\n  // ))\n  // const refs = useMemo(() => data.map((el,i) => React.createRef()), []);\n  // const wordsRef = useRef([]);\n  // const displayWords = words.map((word, i) => (\n  //     <React.Fragment key={i}>\n  //       <span ref={el => (wordsRef.current = [...wordsRef.current, el])}>\n  //         {word}\n  //       </span>\n  //     </React.Fragment>\n  //   ));\n  //   </React.Fragment>\n\n\n  var dataLength = data.length; // const Ref = useRef([]);\n\n  var _useScrollData = (0,scroll_data_hook__WEBPACK_IMPORTED_MODULE_3__.useScrollData)({\n    onScrollStart: function onScrollStart() {\n      var highlights = data.map(function (_, i) {\n        return {\n          yPos: dataRefs[i].current.offsetTop\n        };\n      });\n      setYPos(highlights);\n    } // window.addEventListener('scroll', handleScroll, { passive: true });\n    ,\n    onScrollEnd: function onScrollEnd() {}\n  }),\n      scrolling = _useScrollData.scrolling,\n      time = _useScrollData.time,\n      speed = _useScrollData.speed,\n      direction = _useScrollData.direction,\n      position = _useScrollData.position,\n      relativeDistance = _useScrollData.relativeDistance,\n      totalDistance = _useScrollData.totalDistance;\n\n  return dataRefs && dataLength && [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_styles_main_module_sass__WEBPACK_IMPORTED_MODULE_5___default().intro),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Alexandre Almeida\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Product Designer na \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"s\", {\n            children: \"@Avec\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 44\n          }, _this), \" @Hyperlocal\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 41\n        }, _this), \". Aqui crio novos produtos e experi\\xEAncias digitais que trazem valor e grande impacto na vida das pesssoas.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this)\n  }, 1, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 9\n  }, _this), data.map(function (job, i) {\n    return [console.log(yPos), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      ref: dataRefs[i],\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_jobshome_jobshome__WEBPACK_IMPORTED_MODULE_4__.default, {\n        data: job,\n        params: {\n          results: results,\n          cloudn: cloudn\n        }\n      }, job.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 52\n      }, _this)\n    }, 2, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }, _this)];\n  })];\n};\n\n_s(Home, \"n94FfpZ0deLul1GTAfDyGrtzEZI=\", false, function () {\n  return [scroll_data_hook__WEBPACK_IMPORTED_MODULE_3__.useScrollData];\n});\n\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJyZXN1bHRzIiwiY2xvdWRuIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiUmVhY3QiLCJkYXRhUmVmcyIsInNldFJlZnMiLCJ5UG9zIiwic2V0WVBvcyIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJ1c2VTY3JvbGxEYXRhIiwib25TY3JvbGxTdGFydCIsImhpZ2hsaWdodHMiLCJtYXAiLCJfIiwiaSIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJvblNjcm9sbEVuZCIsInNjcm9sbGluZyIsInRpbWUiLCJzcGVlZCIsImRpcmVjdGlvbiIsInBvc2l0aW9uIiwicmVsYXRpdmVEaXN0YW5jZSIsInRvdGFsRGlzdGFuY2UiLCJzdHlsZXMiLCJqb2IiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOztBQVFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBRWZDLCtDQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFbENDLEtBRmtDO0FBQUEsTUFFM0JDLFFBRjJCOztBQUFBLHdCQUdWQyxxREFBQSxDQUFlLEVBQWYsQ0FIVTtBQUFBO0FBQUEsTUFHL0JDLFFBSCtCO0FBQUEsTUFHckJDLE9BSHFCOztBQUFBLHlCQUlkRixxREFBQSxDQUFlLEVBQWYsQ0FKYztBQUFBO0FBQUEsTUFJL0JHLElBSitCO0FBQUEsTUFJekJDLE9BSnlCLHdCQUt0QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdYLElBQUksQ0FBQ1ksTUFBeEIsQ0F6QjBDLENBMkIxQzs7QUEzQjBDLHVCQW9DaENDLCtEQUFhLENBQUM7QUFDaEJDLGlCQUFhLEVBQUUseUJBQU07QUFFakIsVUFBTUMsVUFBVSxHQUFHZixJQUFJLENBQUNnQixHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFBQyxlQUFPO0FBQzlDVCxjQUFJLEVBQUVGLFFBQVEsQ0FBQ1csQ0FBRCxDQUFSLENBQVlDLE9BQVosQ0FBb0JDO0FBRG9CLFNBQVA7QUFHdEMsT0FIa0IsQ0FBbkI7QUFNSlYsYUFBTyxDQUFDSyxVQUFELENBQVA7QUFDSCxLQVZtQixDQVlaO0FBWlk7QUFlaEJNLGVBQVcsRUFBRSx1QkFBTSxDQUFFO0FBZkwsR0FBRCxDQXBDbUI7QUFBQSxNQTZCbENDLFNBN0JrQyxrQkE2QmxDQSxTQTdCa0M7QUFBQSxNQThCbENDLElBOUJrQyxrQkE4QmxDQSxJQTlCa0M7QUFBQSxNQStCbENDLEtBL0JrQyxrQkErQmxDQSxLQS9Ca0M7QUFBQSxNQWdDbENDLFNBaENrQyxrQkFnQ2xDQSxTQWhDa0M7QUFBQSxNQWlDbENDLFFBakNrQyxrQkFpQ2xDQSxRQWpDa0M7QUFBQSxNQWtDbENDLGdCQWxDa0Msa0JBa0NsQ0EsZ0JBbENrQztBQUFBLE1BbUNsQ0MsYUFuQ2tDLGtCQW1DbENBLGFBbkNrQzs7QUF1RHRDLFNBQVNyQixRQUFRLElBQUlJLFVBQVosSUFDRCxjQUNKO0FBQWlCLGFBQVMsRUFBRWtCLHVFQUE1QjtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsd0RBQXdCO0FBQUEsa0NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixLQUFjLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURJLEVBUUE3QixJQUFJLENBQUNnQixHQUFMLENBQVMsVUFBQ2MsR0FBRCxFQUFNWixDQUFOO0FBQUEsV0FBWSxDQUFDYSxPQUFPLENBQUNDLEdBQVIsQ0FBWXZCLElBQVosQ0FBRCxlQUNqQjtBQUFpQixTQUFHLEVBQUVGLFFBQVEsQ0FBQ1csQ0FBRCxDQUE5QjtBQUFBLDZCQUFtQyw4REFBQyxrRUFBRDtBQUE2QixZQUFJLEVBQUVZLEdBQW5DO0FBQXdDLGNBQU0sRUFBRTtBQUFDN0IsaUJBQU8sRUFBUEEsT0FBRDtBQUFTQyxnQkFBTSxFQUFOQTtBQUFUO0FBQWhELFNBQXFCNEIsR0FBRyxDQUFDRyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5DLE9BQWMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGlCLENBQVo7QUFBQSxHQUFULENBUkEsQ0FEUjtBQWdCSCxDQXZFRDs7R0FBTWxDLEk7VUFvQ0ljLDJEOzs7S0FwQ0pkLEk7O0FBMkZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZVJlZiwgdXNlTWVtbyx1c2VFZmZlY3QsY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsRGF0YSB9IGZyb20gXCJzY3JvbGwtZGF0YS1ob29rXCI7XG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wc30gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHtHZXRKb2JzRm9ySG9tZX0gZnJvbSBcIi4uL2dyYXBocWwvam9icy5xdWVyeVwiO1xuaW1wb3J0IEhpZ2hsaWdodHNKb2JzIGZyb20gXCIuLi9jb21wb25lbnRzL2pvYnNob21lL2pvYnNob21lXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL21haW4ubW9kdWxlLnNhc3MnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9saWIvYXBvbGxvJztcblxuaW1wb3J0IHVzZVBvc2l0aW9uIGZyb20gJy4uL2xpYi91c2VQb3NpdGlvbic7XG5cbmludGVyZmFjZSByZWYge1xuICAgIHNjcm9sbFNlY3Rpb25SZWY6IEhUTUxEaXZFbGVtZW50O1xuICB9XG5jb25zdCBIb21lID0gKHtkYXRhLCByZXN1bHRzLCBjbG91ZG59KSA9PiB7XG5cblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZGF0YVJlZnMsIHNldFJlZnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt5UG9zLCBzZXRZUG9zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICAvLyBsZXQgUmVmID0gdXNlUmVmKFtSZWFjdC5jcmVhdGVSZWYoKSwgUmVhY3QuY3JlYXRlUmVmKCldKTtcbiAgICAvLyBsZXQgUmVmID0gdXNlUmVmPHJlZj4oKVxuICAgIC8vIGxldCBSZWYgPSB1c2VSZWYoW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKV0pO1xuXG4gICAgLy8gY29uc3QgaXRlbUVscyA9IHVzZVJlZihuZXcgQXJyYXkoKSlcbiAgICAvLyB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgIC8vICA8cCBrZXk9e2l0ZW19IHJlZj17KGVsZW1lbnQpID0+IGl0ZW1FbHMuY3VycmVudC5wdXNoKGVsZW1lbnQpfT57aXRlbX08L3A+XG4gICAgLy8gKSlcblxuICAgIC8vIGNvbnN0IHJlZnMgPSB1c2VNZW1vKCgpID0+IGRhdGEubWFwKChlbCxpKSA9PiBSZWFjdC5jcmVhdGVSZWYoKSksIFtdKTtcblxuICAgIC8vIGNvbnN0IHdvcmRzUmVmID0gdXNlUmVmKFtdKTtcbiAgICAvLyBjb25zdCBkaXNwbGF5V29yZHMgPSB3b3Jkcy5tYXAoKHdvcmQsIGkpID0+IChcbiAgICAvLyAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgLy8gICAgICAgPHNwYW4gcmVmPXtlbCA9PiAod29yZHNSZWYuY3VycmVudCA9IFsuLi53b3Jkc1JlZi5jdXJyZW50LCBlbF0pfT5cbiAgICAvLyAgICAgICAgIHt3b3JkfVxuICAgIC8vICAgICAgIDwvc3Bhbj5cbiAgICAvLyAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAvLyAgICkpO1xuLy8gICA8L1JlYWN0LkZyYWdtZW50PlxuY29uc3QgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4vLyBjb25zdCBSZWYgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0e1xuICAgICAgICBzY3JvbGxpbmcsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHNwZWVkLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICByZWxhdGl2ZURpc3RhbmNlLFxuICAgICAgICB0b3RhbERpc3RhbmNlXG4gICAgICB9ID0gdXNlU2Nyb2xsRGF0YSh7XG4gICAgICAgIG9uU2Nyb2xsU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IGRhdGEubWFwKChfLCBpKSA9PiB7cmV0dXJuIHtcbiAgICAgICAgICAgIHlQb3M6IGRhdGFSZWZzW2ldLmN1cnJlbnQub2Zmc2V0VG9wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgICAgIHNldFlQb3MoaGlnaGxpZ2h0cylcbiAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgLFxuICAgICAgICBvblNjcm9sbEVuZDogKCkgPT4ge31cbiAgICAgIH0pO1xuXG5cbiAgICByZXR1cm4gKCBkYXRhUmVmcyAmJiBkYXRhTGVuZ3RoICYmICggXG4gICAgICAgICAgICBbXG4gICAgICAgIDxzZWN0aW9uIGtleT17MX0gY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+QWxleGFuZHJlIEFsbWVpZGE8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0IERlc2lnbmVyIG5hIDxpPjxzPkBBdmVjPC9zPiBASHlwZXJsb2NhbDwvaT4uIEFxdWkgY3JpbyBub3ZvcyBwcm9kdXRvcyBlIGV4cGVyacOqbmNpYXMgZGlnaXRhaXMgcXVlIHRyYXplbSB2YWxvciBlIGdyYW5kZVxuICAgICAgICAgICAgICAgICAgICBpbXBhY3RvIG5hIHZpZGEgZGFzIHBlc3Nzb2FzLjwvaDI+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC9zZWN0aW9uPixcbiAgICAgICAgICAgIGRhdGEubWFwKChqb2IsIGkpID0+IFtjb25zb2xlLmxvZyh5UG9zKSxcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9ezJ9IHJlZj17ZGF0YVJlZnNbaV19PjxIaWdobGlnaHRzSm9icyBrZXk9e2pvYi5pZH0gZGF0YT17am9ifSBwYXJhbXM9e3tyZXN1bHRzLGNsb3Vkbn19IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgXSkgXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnRcbiAgICAgICAgLnF1ZXJ5KHtxdWVyeTogR2V0Sm9ic0ZvckhvbWV9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YS5qb2JzKTtcblxuICAgIGNvbnN0IHtkYXRhfSA9IHJlc3BvbnNlO1xuXG4gICBjb25zdCBjbG91ZG4gPSBwcm9jZXNzLmVudi5DTE9VRElOQVJZX05BTUVcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvJHtwcm9jZXNzLmVudi5DTE9VRElOQVJZX05BTUV9L3Jlc291cmNlcy9pbWFnZWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKHByb2Nlc3MuZW52LkNMT1VESU5BUllfS0VZICsgJzonICsgcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9TRUNSRVQpLnRvU3RyaW5nKCdiYXNlNjQnKX1gXG4gICAgfVxuICAgIH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG5cbiAgICBpZiAoZGF0YSkgcmV0dXJuIHsgcHJvcHM6ICB7ZGF0YSwgcmVzdWx0cyxjbG91ZG59fVxuICAgIGVsc2UgcmV0dXJuIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});