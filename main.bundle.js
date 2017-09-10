webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'UpSlack';
        var defaultValues = { 'rawMinutes': 0, 'rate': 57, 'exchangeRate': 57.66, 'fee': 20 };
        ['rawMinutes', 'rate', 'exchangeRate', 'fee'].map(function (field) {
            var val;
            if (val = parseFloat(localStorage.getItem(field))) {
                _this[field] = val;
            }
            else {
                _this[field] = defaultValues[field];
            }
        });
        this.changeTime(0);
    }
    AppComponent.prototype.changeTime = function (diff) {
        if (0 > this.rawMinutes + diff) {
            return;
        }
        this.rawMinutes += diff;
        this.hours = Math.floor(this.rawMinutes / 60);
        this.minutes = this.rawMinutes % 60;
        this.updateLS();
    };
    AppComponent.prototype.updateLS = function () {
        var _this = this;
        ['rawMinutes', 'rate', 'exchangeRate', 'fee'].map(function (field) {
            localStorage.setItem(field, _this[field]);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdGridListModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"4\" rowheight=\"70px\">\n    <md-grid-tile colspan=\"1\">\n        <md-form-field>\n            <input mdInput type=\"number\" placeholder=\"Hourly Rate\" [(ngModel)]=\"rate\">\n        </md-form-field>\n    </md-grid-tile>\n    <md-grid-tile colspan=\"1\">\n        <md-form-field>\n            <input mdInput type=\"number\" placeholder=\"USDRUB\" [(ngModel)]=\"exchangeRate\">\n        </md-form-field>\n    </md-grid-tile>\n    <md-grid-tile colspan=\"2\">\n        <md-button-toggle-group [(ngModel)]=\"fee\">\n            <md-button-toggle value=\"20\">\n                20\n            </md-button-toggle>\n            <md-button-toggle value=\"10\">\n                10\n            </md-button-toggle>\n            <md-button-toggle value=\"5\">\n                5\n            </md-button-toggle>\n        </md-button-toggle-group>\n    </md-grid-tile>\n    <md-grid-tile>\n        <button md-button (click)=\"changeTime(-10)\">–</button>\n    </md-grid-tile>\n    <md-grid-tile>\n        <md-form-field>\n            <input mdInput class=\"time\" disabled [value]=\"hours | number:'2.0-0'\">\n        </md-form-field>\n    </md-grid-tile>\n\n    <md-grid-tile>\n        <md-form-field>\n            <input mdInput class=\"time\" disabled [value]=\"minutes | number:'2.0-0'\">\n        </md-form-field>\n    </md-grid-tile>\n    <md-grid-tile>\n        <button md-button (click)=\"changeTime(10)\">+</button>\n    </md-grid-tile>\n    <md-grid-tile colspan=\"2\">\n        <h1>${{ rate * rawMinutes * (1 - fee / 100) / 60 | number:'.2-2' }}</h1>\n    </md-grid-tile>\n    <md-grid-tile colspan=\"2\">\n        <h2>{{ exchangeRate * rate * rawMinutes * (1 - fee / 100) / 60 | number:'.2-2' }}₽</h2>\n    </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.bundle.js.map