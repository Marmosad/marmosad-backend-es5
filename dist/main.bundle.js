webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_splash_component__ = __webpack_require__("../../../../../src/app/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_board_core_board_core_component__ = __webpack_require__("../../../../../src/app/core/board-core/board-core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_lobby_lobby_component__ = __webpack_require__("../../../../../src/app/core/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_route_activator_service__ = __webpack_require__("../../../../../src/app/core/core-route-activator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: 'splash', component: __WEBPACK_IMPORTED_MODULE_2__splash_splash_component__["a" /* SplashComponent */] },
    { path: 'core', component: __WEBPACK_IMPORTED_MODULE_3__core_core_component__["a" /* CoreComponent */],
        children: [
            { path: '', redirectTo: 'lobby', pathMatch: 'full' },
            { path: 'lobby', component: __WEBPACK_IMPORTED_MODULE_5__core_lobby_lobby_component__["a" /* LobbyComponent */] },
            { path: 'game', component: __WEBPACK_IMPORTED_MODULE_4__core_board_core_board_core_component__["a" /* BoardCoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_core_route_activator_service__["a" /* CoreCanActivate */]] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true
                })
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_navbar_global_navbar_component__ = __webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_navbar_global_navbar_elements_global_navbar_elements_component__ = __webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splash_splash_component__ = __webpack_require__("../../../../../src/app/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splash_splash_navigate_splash_navigate_component__ = __webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_chat_chat_component__ = __webpack_require__("../../../../../src/app/core/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_score_board_score_board_component__ = __webpack_require__("../../../../../src/app/core/score-board/score-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_board_core_board_core_component__ = __webpack_require__("../../../../../src/app/core/board-core/board-core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_game_board_game_board_component__ = __webpack_require__("../../../../../src/app/core/game-board/game-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_display_service_display_service_service__ = __webpack_require__("../../../../../src/app/core/display-service/display-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_simple_modal_simple_modal_component__ = __webpack_require__("../../../../../src/app/common/simple-modal/simple-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_lobby_lobby_component__ = __webpack_require__("../../../../../src/app/core/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_core_route_activator_service__ = __webpack_require__("../../../../../src/app/core/core-route-activator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__global_navbar_global_navbar_component__["a" /* GlobalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__global_navbar_global_navbar_elements_global_navbar_elements_component__["a" /* GlobalNavbarElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__splash_splash_component__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_12__core_core_component__["a" /* CoreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__splash_splash_navigate_splash_navigate_component__["a" /* SplashNavigateComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_17__core_score_board_score_board_component__["a" /* ScoreBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core_board_core_board_core_component__["a" /* BoardCoreComponent */],
                __WEBPACK_IMPORTED_MODULE_19__core_game_board_game_board_component__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_simple_modal_simple_modal_component__["a" /* SimpleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__core_lobby_lobby_component__["a" /* LobbyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'serverApp' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__socket_io_socket_io_service__["a" /* SocketIoService */],
                __WEBPACK_IMPORTED_MODULE_20__core_display_service_display_service_service__["a" /* DisplayService */],
                __WEBPACK_IMPORTED_MODULE_23__core_core_route_activator_service__["a" /* CoreCanActivate */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/simple-modal/simple-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n.modal-header{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.modal-body{\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.modal-footer{\r\n    font-family: 'Comfortaa', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/simple-modal/simple-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"important-msg-label\">\r\n            <ng-content select=\"[modal-title]\"></ng-content>\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"d('cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <ng-content select=\"[modal-body]\"></ng-content>\r\n    </div>\r\n    <div class=\"modal-footer\" *ngIf=\"useFooter\">\r\n            <ng-content select=\"[modal-footer]\"></ng-content>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/common/simple-modal/simple-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent(modalService) {
        this.modalService = modalService;
        this.useFooter = false;
    }
    SimpleModalComponent.prototype.openDialog = function (options) {
        var _this = this;
        if (options === void 0) { options = { centered: true }; }
        if (!this.dialogOpen) {
            this.modalRef = this.modalService.open(this.modalContent, options);
            this.modalRef.result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
                _this.modalRef = null;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
                _this.modalRef = null;
            });
        }
        return this.modalRef;
    };
    SimpleModalComponent.prototype.closeDialog = function (result) {
        if (this.dialogOpen) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    };
    SimpleModalComponent.prototype.dismissDialog = function (reason) {
        if (this.dialogOpen) {
            this.modalRef.dismiss(reason);
            this.modalRef = null;
        }
    };
    Object.defineProperty(SimpleModalComponent.prototype, "dialogOpen", {
        get: function () {
            return !!this.modalRef;
        },
        enumerable: true,
        configurable: true
    });
    SimpleModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SimpleModalComponent.prototype, "useFooter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */])
    ], SimpleModalComponent.prototype, "modalContent", void 0);
    SimpleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-modal',
            template: __webpack_require__("../../../../../src/app/common/simple-modal/simple-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/simple-modal/simple-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/board-core/board-core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n.board-core {\r\n  position: absolute;\r\n  padding: 0;\r\n  width: 100vw;\r\n  height: 56.25vw; /* height:width ratio = 9/16 = .5625  */\r\n  max-height: 85vh;\r\n  max-width: 190vh; /* 16/9 = 1.778 */\r\n  margin: auto;\r\n  top: 11vh;\r\n  bottom: 1vh; /* vertical center */\r\n  left: 0;\r\n  right: 0; /* horizontal center */\r\n  z-index: -1000;\r\n}\r\n\r\n.user-board {\r\n}\r\n\r\n.game-board {\r\n}\r\n\r\nh1 {\r\n  font-family: 'Comfortaa', cursive;\r\n  font-size: 5.5vh;\r\n  font-weight: bold;\r\n  background-color: #ff5b5b;\r\n  margin: 0;\r\n  text-align: center;\r\n  color: #3b3e47;\r\n}\r\n\r\np{\r\n  color: #ff5b5b;\r\n  text-align: end;\r\n  margin-bottom: 4vw;\r\n  margin-right: 1vw;\r\n  position: relative;\r\n  top: 57%;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n}\r\n\r\ninput{\r\n  margin: 5px;\r\n  width: 28vw;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 2.5vw;\r\n  border-width: 0 0 5px 0;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n  /* box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24); */\r\n}\r\n\r\ninput:focus {\r\n  border-color: #ff5b5b;\r\n  outline: 0 none;\r\n}\r\n\r\n.name-field-div {\r\n  padding: 0;\r\n  width: 30vw;\r\n  height: 18vw; /* height:width ratio = 9/16 = .5625  */\r\n  max-height: 85vh;\r\n  max-width: 177.78vh; /* 16/9 = 1.778 */\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 11vh;\r\n  bottom: 1vh; /* vertical center */\r\n  left: 0;\r\n  right: 0; /* horizontal center */\r\n}\r\n\r\n.name-field-card{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/board-core/board-core.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-core\" fxLayout=\"row\" [@boardAnimationState] = 'getBoardState'>\r\n  <div fxLayout=\"row\" fxFill fxLayoutAlign=\"space-between stretch\">\r\n    <div class=\"user-board\" fxLayout=\"column\" fxFlex=\"18\" fxLayoutAlign=\"space-between stretch\">\r\n      <app-score-board fxFlex=\"58\"></app-score-board>\r\n      <app-chat fxFlex=\"40\"></app-chat>\r\n    </div>\r\n    <div class=\"game-board\" fxLayout=\"column\" fxFlex=\"81\" fxLayoutAlign=\"space-between stretch\">\r\n      <app-game-board fxFill></app-game-board>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/board-core/board-core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardCoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardCoreComponent = /** @class */ (function () {
    function BoardCoreComponent(socketService, router) {
        this.socketService = socketService;
        this.router = router;
        this.showName = true;
        this.hasName = false;
        this.showBoard = false;
    }
    BoardCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.socketService.hasSocket) {
            console.log('hasSocket');
        }
        if (this.socketService.hasSocket) {
            this.hasName = true;
            this.socketService.initSocket();
            setTimeout(function () {
                _this.toggleBoard();
            }, 10);
        }
    };
    BoardCoreComponent.prototype.setPlayerName = function (playerName) {
        var _this = this;
        console.log('setPlayerName');
        setTimeout(function () {
            _this.playerName = playerName;
            _this.hasName = true;
            _this.socketService.setPlayerName(playerName);
            _this.socketService.initSocket();
        });
    };
    BoardCoreComponent.prototype.ngOnDestroy = function () {
        this.socketService.closeSocket();
    };
    Object.defineProperty(BoardCoreComponent.prototype, "getBoardState", {
        get: function () {
            return this.showBoard ? 'end' : 'start';
        },
        enumerable: true,
        configurable: true
    });
    BoardCoreComponent.prototype.toggleBoard = function () {
        this.showBoard = !this.showBoard;
    };
    BoardCoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board-core',
            template: __webpack_require__("../../../../../src/app/core/board-core/board-core.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/board-core/board-core.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('boardAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'translateX(0%) translateY(-170%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'translateX(0%) translateY(0%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__["a" /* SocketIoService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], BoardCoreComponent);
    return BoardCoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = " <mat-card class=\"chat-card\" fxFlex>\r\n    <div class=\"chat-top\">\r\n      <h1>Chat</h1>\r\n    </div>\r\n    <div class=\"chat-flex-wrapper\" fxLayout=\"column\" fxFill fxLayoutAlign=\"start stretch\">\r\n      <div class=\"chat\" fxFlex=\"78\">\r\n        <mat-list fxLayoutAlign=\"start none\" fxLayout=\"column\" >\r\n          <mat-list-item *ngFor=\"let message of messages\">\r\n            {{message}}\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n      <input #input type=\"text\" class=\"chat-input\" id=\"name\" fxFlex = 10 fxFill\r\n             placeholder=\"Type a message\" (keyup.enter)=\"[sendMessage(input.value), input.value = '']\">\r\n    </div>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Comfortaa\");\n.chat-card {\n  margin: 0;\n  padding: 0; }\nh1 {\n  font-family: 'Comfortaa', cursive;\n  font-size: 2.5vh;\n  background-color: #ff5b5b;\n  margin: 0;\n  text-align: center;\n  color: #3b3e47;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  padding-top: 0.5vh; }\nmat-list-item {\n  background-color: #ff8e88;\n  padding: 1px;\n  margin: 2px;\n  color: white;\n  font-family: 'Comfortaa', cursive;\n  font-size: small; }\nmat-list {\n  color: white;\n  padding: 0; }\n.chat {\n  overflow-y: scroll; }\n.chat-input {\n  margin: 0;\n  padding: 0;\n  border-bottom: #b0bebe;\n  border-style: solid;\n  border-width: 0 0 5px 0;\n  outline: 0 none;\n  text-indent: 10px;\n  font-family: 'Comfortaa', cursive;\n  font-weight: lighter; }\n.chat-input:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  border-bottom-color: #ff8e88; }\n.chat-input:focus {\n  -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 6px 9px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 6px 9px rgba(0, 0, 0, 0.23);\n  border-bottom: #ff5b5b;\n  border-style: solid;\n  border-width: 0 0 5px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService) {
        var _this = this;
        this.socketService = socketService;
        this.messages = [];
        this.sendMessage = function (message) {
            var packet = { msg: message, from: _this.socketService.getSocketId() };
            _this.socketService.send(packet);
            // this.messages.push(message);
            message = '';
        };
        this.socketStart();
        this.socketService.onMessage().subscribe(function (message) {
            _this.messages.push(message.from + ': ' + message.msg);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.socketStart = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/core/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__["a" /* SocketIoService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core-route-activator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCanActivate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoreCanActivate = /** @class */ (function () {
    function CoreCanActivate(socketService, router) {
        this.socketService = socketService;
        this.router = router;
    }
    CoreCanActivate.prototype.canActivate = function () {
        var hasSocket = this.socketService.hasSocket;
        if (!hasSocket) {
            this.router.navigate(['/splash']);
        }
        return this.socketService.hasSocket;
    };
    CoreCanActivate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__["a" /* SocketIoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CoreCanActivate);
    return CoreCanActivate;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".core {\r\n  border-style: solid;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"40px\">\r\n  <app-global-navbar fxFlex=\"100%\"></app-global-navbar>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-core',
            template: __webpack_require__("../../../../../src/app/core/core.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/display-service/display-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayService = /** @class */ (function () {
    function DisplayService(socketService) {
        var _this = this;
        this.socketService = socketService;
        this.scoreSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.handSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.submissionsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.blackCardSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.socketService.onDisplayUpdate().subscribe(function (display) {
            _this.display = display;
            _this.scoreSubject.next(display.players);
            _this.handSubject.next(_this.getHand(display.players, _this.socketService.socketId));
            _this.submissionsSubject.next(display.submissions);
            _this.blackCardSubject.next(display.blackCard);
            _this.isJudge = (_this.socketService.getSocketId() === _this.display.currentJudge);
            console.log('display service got an update');
            console.log(display);
        });
    }
    DisplayService.prototype.getHand = function (players, id) {
        return players[players.findIndex(function (elem) {
            return (elem.playerId === id);
        })].hand;
    };
    Object.defineProperty(DisplayService.prototype, "getScoreSubject", {
        get: function () {
            return this.scoreSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayService.prototype, "getHandSubject", {
        get: function () {
            return this.handSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayService.prototype, "getSubmissionsSubject", {
        get: function () {
            return this.submissionsSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayService.prototype, "getBlackCardSubject", {
        get: function () {
            return this.blackCardSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayService.prototype, "getDisplay", {
        get: function () {
            return this.display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayService.prototype, "getIsJudge", {
        get: function () {
            return this.isJudge;
        },
        enumerable: true,
        configurable: true
    });
    DisplayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_io_socket_io_service__["a" /* SocketIoService */]])
    ], DisplayService);
    return DisplayService;
}());



/***/ }),

/***/ "../../../../../src/app/core/game-board/drag-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dragAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var dragAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('dragState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        opacity: '0.5',
        transform: 'scale(0.7)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        opacity: '1',
        transform: 'scale(1)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('down => up', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('50ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('up => down', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('100ms ease-in')),
]);


/***/ }),

/***/ "../../../../../src/app/core/game-board/game-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n.game-board-card {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bold;\r\n  font-size: 3vh;\r\n  padding-top: 0.5vh;\r\n  background-color: #ff5b5b;\r\n  margin: 0;\r\n  text-align: center;\r\n  color: #3b3e47;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.blackCard {\r\n  padding: 20px;\r\n  margin: 0 10px 0 10px;\r\n  -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n  border-top: #ff5b5b 0.5vw solid;\r\n  background-color: #263237;\r\n  max-width: 14%;\r\n}\r\n\r\nh3{\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n}\r\n\r\np{\r\n  color: #3b3e47;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bolder;\r\n}\r\n\r\n.blackCardText{\r\n  color: white;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n}\r\n\r\n.blackCardId{\r\n  color: white;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bolder;\r\n}\r\n\r\n.whiteCard {\r\n  padding: 20px;\r\n  margin: 0 10px 0 10px;\r\n  -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n  border-top: #ff5b5b 0.5vw solid;\r\n  max-width: 14%;\r\n}\r\n\r\n.whiteCard:hover {\r\n  border-bottom: #ff5b5b 0.5vw solid;\r\n  border-top: #ff5b5b 0vw solid;\r\n  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22); */\r\n}\r\n\r\n.submissions {\r\n  overflow: hidden;\r\n  padding: 0 0 0 0;\r\n}\r\n\r\n.hand {\r\n  padding: 0 0 0 0;\r\n}\r\n\r\n.controls {\r\n\r\n}\r\n\r\nbutton {\r\n  background-color: #ff5b5b;\r\n  color: #3b3e47;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bold;\r\n  font-size: 3vh;\r\n}\r\n\r\nbutton:hover {\r\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  background-color: white;\r\n  color: #ff5b5b;\r\n  cursor: pointer;\r\n}\r\n\r\n#ghost_SPOOOK {\r\n  opacity: 0.3;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/game-board/game-board.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"game-board-card\" id=\"game-board\" fxFill fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2vh\">\r\n  <div class=\"game-board-top\" fxFlex=\"4\">\r\n    <h1>Game Board</h1>\r\n  </div>\r\n  <div fxFlex=\"39\" class=\"submissions\" id=\"submissions\">\r\n    <mat-card class=\"blackCard\" fxFlex *ngIf=\"blackCard\">\r\n      <p class=\"blackCardText\">{{blackCard.body}}</p>\r\n      <h3 class=\"blackCardId\">{{blackCard.cardId}}</h3>\r\n    </mat-card>\r\n    <mat-card class=\"whiteCard\" id=\"{{card.owner}}\" *ngFor=\"let card of submissions\" (draggable)=\"true\" fxFlex\r\n              (click)=\"submitJudgement(card)\">\r\n      <p>{{card.body}}</p>\r\n      <h3>{{card.cardId}}</h3>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"10\" class=\"controls\" fxLayoutGap=\"10px\">\r\n    <button (click)=\"startGame()\" mat-raised-button fxFlex>Start Game</button>\r\n    <button (click)=\"resetGame()\" mat-raised-button fxFlex>Reset Game</button>\r\n    <button mat-raised-button fxFlex>Button</button>\r\n    <button mat-raised-button fxFlex>Button</button>\r\n  </div>\r\n  <div fxFlex=\"39\" class=\"hand\" fxLayout=\"row\" fxLayoutGap=\"6px\" fxLayoutAlign=\"space-between stretch\">\r\n        <mat-card class=\"whiteCard\" id=\"{{i}}\" *ngFor=\"let card of hand; index as i\" fxFlex (click)=\"submitCard(card)\"\r\n                  (mousedown) = 'startDrag(i)' (mouseup) = 'endDrag(i)'>\r\n          <p>{{card.body}}</p>\r\n          <h3>{{card.cardId}}</h3>\r\n        </mat-card>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/game-board/game-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_service_display_service_service__ = __webpack_require__("../../../../../src/app/core/display-service/display-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drag_animation__ = __webpack_require__("../../../../../src/app/core/game-board/drag-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SPOPPY_GHOST = 'ghost_SPOOOK';







var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent(displayService, socketIoService) {
        this.displayService = displayService;
        this.socketIoService = socketIoService;
        this.ghostCard = {
            cardId: null,
            body: '',
            owner: SPOPPY_GHOST,
        };
        this.ghostExist = false;
        this.draggedCard = null;
        this.pointerPosition = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__["a" /* fromEvent */])(document, 'mousemove');
        this.mouseUp = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__["a" /* fromEvent */])(document, 'mouseup');
        this.dragItemClone = null;
        this.dragItem = null;
        this.cursorInSubmissions = false;
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resize = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromEvent__["a" /* fromEvent */])(window, 'resize');
        this.displayService.getHandSubject.subscribe(function (hand) {
            _this.hand = hand;
            console.log(hand);
        });
        this.displayService.getBlackCardSubject.subscribe(function (blackCard) {
            _this.blackCard = blackCard;
            console.log(blackCard);
        });
        this.displayService.getSubmissionsSubject.subscribe(function (submissions) {
            _this.submissions = submissions;
        });
        this.socketIoService.onReset().subscribe(function (data) {
            window.location.reload();
        });
        this.trackPointerPosition();
        this.trackMouseUp();
        this.trackResize();
        this.submissionDimensions = document.getElementById('submissions').getBoundingClientRect();
    };
    GameBoardComponent.prototype.trackPointerPosition = function () {
        var _this = this;
        this.pointerPosition.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["f" /* throttle */])(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["a" /* interval */])(20); })).subscribe(function (e) {
            _this.cursorX = e.clientX;
            _this.cursorY = e.clientY;
            _this.cursorInSubmissions = _this.cursorX > _this.submissionDimensions.left && _this.cursorX < _this.submissionDimensions.right &&
                _this.cursorY > _this.submissionDimensions.top && _this.cursorY < (_this.submissionDimensions.top + _this.submissionDimensions.height);
            if (_this.draggedCard !== null) {
                if (_this.cursorInSubmissions) {
                    _this.addGhost();
                }
                else {
                    _this.removeGhost();
                }
            }
            if (_this.dragItemClone !== null) {
                _this.dragItemClone.style.left = _this.cursorX + 'px';
                _this.dragItemClone.style.top = _this.cursorY + 'px';
            }
        });
    };
    GameBoardComponent.prototype.trackMouseUp = function () {
        var _this = this;
        this.mouseUp.subscribe(function (e) {
            console.log('submit ' + _this.cursorInSubmissions);
            if (_this.cursorInSubmissions) {
                _this.submitCard(_this.draggedCard);
                _this.draggedCard = null;
                _this.removeGhost();
            }
            _this.endDrag();
        });
    };
    GameBoardComponent.prototype.trackResize = function () {
        var _this = this;
        this.resize.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["f" /* throttle */])(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["a" /* interval */])(20); })).subscribe(function (e) {
            _this.submissionDimensions = document.getElementById('submissions').getBoundingClientRect();
        });
    };
    GameBoardComponent.prototype.startDrag = function (i) {
        this.submissionDimensions = document.getElementById('submissions').getBoundingClientRect();
        if (this.isJudge) {
            return;
        }
        this.draggedCard = this.hand[i];
        console.log('drag start');
        this.dragItem = document.getElementById(i.toString());
        console.log(this.dragItem.cloneNode(true));
        this.dragItemClone = this.dragItem.cloneNode(true);
        this.dragItem.style.opacity = '0';
        this.styleClone(this.dragItemClone, this.dragItem.getBoundingClientRect());
        document.body.appendChild(this.dragItemClone);
    };
    GameBoardComponent.prototype.styleClone = function (clone, dimensions) {
        clone.style.position = 'fixed';
        clone.style.marginTop = '-' + (dimensions.height / 2) + 'px';
        clone.style.marginLeft = '-' + (dimensions.width / 2) + 'px';
        clone.style.height = dimensions.height + 'px';
        clone.style.width = dimensions.width + 'px';
        clone.style.left = this.cursorX + 'px';
        clone.style.top = this.cursorY + 'px';
        console.log(clone.style);
    };
    GameBoardComponent.prototype.endDrag = function () {
        console.log('drag end');
        if (this.dragItem !== null) {
            this.dragItemClone.remove();
            this.dragItem.style.opacity = '1';
            this.dragItemClone = null;
            this.dragItem = null;
        }
        this.draggedCard = null;
    };
    GameBoardComponent.prototype.startGame = function () {
        this.socketIoService.startGame();
    };
    GameBoardComponent.prototype.resetGame = function () {
        this.socketIoService.resetGame();
    };
    GameBoardComponent.prototype.submitCard = function (card) {
        if (!this.isJudge) {
            this.socketIoService.submitCard(card);
        }
    };
    GameBoardComponent.prototype.submitJudgement = function (card) {
        if (this.isJudge) {
            this.socketIoService.submitJudgement(card);
        }
    };
    Object.defineProperty(GameBoardComponent.prototype, "isJudge", {
        get: function () {
            return this.displayService.getIsJudge;
        },
        enumerable: true,
        configurable: true
    });
    GameBoardComponent.prototype.addGhost = function () {
        if (!this.ghostExist && this.draggedCard !== null) {
            this.submissions.push(this.ghostCard);
            this.ghostExist = true;
        }
    };
    GameBoardComponent.prototype.removeGhost = function () {
        if (this.ghostExist) {
            var ghostIndex = this.submissions.findIndex(function (elem) {
                return (elem.owner === SPOPPY_GHOST);
            });
            this.submissions.splice(ghostIndex, 1);
            this.ghostExist = false;
        }
    };
    GameBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-board',
            template: __webpack_require__("../../../../../src/app/core/game-board/game-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/game-board/game-board.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_6__drag_animation__["a" /* dragAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__display_service_display_service_service__["a" /* DisplayService */], __WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__["a" /* SocketIoService */]])
    ], GameBoardComponent);
    return GameBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/lobby/lobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n.board-core {\r\n  position: absolute;\r\n  padding: 0;\r\n  width: 100vw;\r\n  height: 56.25vw; /* height:width ratio = 9/16 = .5625  */\r\n  max-height: 85vh;\r\n  max-width: 190vh; /* 16/9 = 1.778 */\r\n  margin: auto;\r\n  top: 11vh;\r\n  bottom: 1vh; /* vertical center */\r\n  left: 0;\r\n  right: 0; /* horizontal center */\r\n  z-index: -1000;\r\n}\r\n\r\n.user-board {\r\n}\r\n\r\n.game-board {\r\n}\r\n\r\nh1 {\r\n  font-family: 'Comfortaa', cursive;\r\n  font-size: 5.5vh;\r\n  font-weight: bold;\r\n  background-color: #ff5b5b;\r\n  margin: 0;\r\n  text-align: center;\r\n  color: #3b3e47;\r\n}\r\n\r\np{\r\n  color: #ff5b5b;\r\n  text-align: end;\r\n  margin-bottom: 4vw;\r\n  margin-right: 1vw;\r\n  position: relative;\r\n  top: 57%;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n}\r\n\r\ninput{\r\n  margin: 5px;\r\n  width: 28vw;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 2.5vw;\r\n  border-width: 0 0 5px 0;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: lighter;\r\n  /* box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24); */\r\n}\r\n\r\ninput:focus {\r\n  border-color: #ff5b5b;\r\n  outline: 0 none;\r\n}\r\n\r\n.name-field-div {\r\n  padding: 0;\r\n  width: 30vw;\r\n  height: 18vw; /* height:width ratio = 9/16 = .5625  */\r\n  max-height: 85vh;\r\n  max-width: 177.78vh; /* 16/9 = 1.778 */\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 11vh;\r\n  bottom: 1vh; /* vertical center */\r\n  left: 0;\r\n  right: 0; /* horizontal center */\r\n}\r\n\r\n.name-field-card{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: #ff5b5b;\r\n  color: #3b3e47;\r\n  -webkit-transform: translate(0%, 220%);\r\n          transform: translate(0%, 220%);\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bold;\r\n  font-size: 3vh;\r\n  margin: 20px;\r\n}\r\n\r\nbutton:hover {\r\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  background-color: white;\r\n  color: #ff5b5b;\r\n  cursor: pointer;\r\n}\r\n\r\np{\r\n  top: 15vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/lobby/lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"name-field-div\" fxLayout=\"column\" [@nameAnimationState] = 'getNameState'>\n  <div class=\"name-field-top\"fxFlex=\"20\">\n    <h1>Enter Your Name!</h1>\n  </div>\n  <mat-card class=\"name-field-card\" fxFlex=\"\">\n    <input matInput placeholder=\"Wut's ur name?\" (keyup.enter)=\"enterGame(inputValue)\" maxlength=\"14\" [(ngModel)]=\"inputValue\">\n    <p>Characters left: {{ 14 - inputValue.length }}</p>\n  </mat-card>\n</mat-card>\n\n<app-simple-modal #popup>\n  <div modal-title>\n    Too many players\n  </div>\n  <div modal-body>\n    Please try again later.\n  </div>\n</app-simple-modal>\n\n"

/***/ }),

/***/ "../../../../../src/app/core/lobby/lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__ = __webpack_require__("../../../../../src/app/socket-io/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_simple_modal_simple_modal_component__ = __webpack_require__("../../../../../src/app/common/simple-modal/simple-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(socketService, router) {
        this.socketService = socketService;
        this.router = router;
        this.showName = true;
        this.hasName = false;
        this.inputValue = "";
    }
    LobbyComponent.prototype.toggleName = function () {
        this.showName = !this.showName;
    };
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggleName();
        }, 1);
    };
    Object.defineProperty(LobbyComponent.prototype, "getNameState", {
        get: function () {
            return this.showName ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    LobbyComponent.prototype.enterGame = function (playerName) {
        var _this = this;
        this.chooseName(this.playerName);
        this.socketService.getPlayerLimit().subscribe(function (data) {
            if (data.isLimitReached) {
                _this.playerLimitWarning.openDialog();
            }
            else {
                _this.socketService.setPlayerName(playerName);
                _this.toggleName();
                setTimeout(function () {
                    _this.socketService.initSocket();
                    _this.router.navigate(['/core/game']);
                }, 300);
            }
        });
    };
    LobbyComponent.prototype.chooseName = function (playerName) {
        this.playerName = playerName;
        this.hasName = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('popup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_simple_modal_simple_modal_component__["a" /* SimpleModalComponent */])
    ], LobbyComponent.prototype, "playerLimitWarning", void 0);
    LobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lobby',
            template: __webpack_require__("../../../../../src/app/core/lobby/lobby.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/lobby/lobby.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('nameAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(0%) translateY(180%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(0%) translateY(0%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('end => start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_io_socket_io_service__["a" /* SocketIoService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/score-board/score-board.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"score-card\" fxFlex  fxLayout=\"column\" fxFill fxLayoutAlign=\"start stretch\">\r\n  <div class=\"score-top\" fxFlex=\"10\">\r\n    <h1>Score Board</h1>\r\n  </div>\r\n  <div class=\"scores\" fxFlex=\"90\" fxLayoutAlign=\"start stretch\" fxLayout=\"column\">\r\n    <mat-list fxLayoutAlign=\"start stretch\" fxLayout=\"column\" >\r\n      <mat-list-item *ngFor=\"let player of players\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <div class=\"score-row\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"40px\">\r\n          <h2 class=\"player\" fxFlex=\"40\">{{player.playerName}}: {{player.score}}</h2>\r\n          <h2 class=\"isJudge\" *ngIf=\"player.isJudge\"> - judge</h2>\r\n        </div>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/score-board/score-board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Comfortaa\");\n.score-card {\n  margin: 0;\n  padding: 0; }\n.scores {\n  margin: 0;\n  padding: 0;\n  color: #263237; }\n.player {\n  font-family: 'Comfortaa', cursive;\n  text-align: left;\n  font-weight: bold; }\n.isJudge {\n  font-family: 'Comfortaa', cursive;\n  margin-right: 0;\n  font-weight: bold; }\n.score-row {\n  webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\nh2 {\n  color: #3b3e47;\n  font-size: 2.2vh; }\nh1 {\n  font-family: 'Comfortaa', cursive;\n  font-weight: bold;\n  font-size: 2.5vh;\n  background-color: #ff5b5b;\n  margin: 0;\n  text-align: center;\n  color: #3b3e47;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  padding-top: 0.5vh; }\nmat-list-item {\n  padding: 0;\n  margin-bottom: 6px;\n  margin-left: 2px;\n  margin-right: 2px;\n  border-left: #ff5b5b 0.5vw solid;\n  border-right: #ff5b5b 0.5vw solid;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\nmat-list-item:hover {\n  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\nmat-list {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/score-board/score-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_service_display_service_service__ = __webpack_require__("../../../../../src/app/core/display-service/display-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoreBoardComponent = /** @class */ (function () {
    function ScoreBoardComponent(displayService) {
        this.displayService = displayService;
        this.players = [];
    }
    ScoreBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayService.getScoreSubject.subscribe(function (players) {
            _this.players = players;
            console.log(players);
        });
    };
    ScoreBoardComponent.prototype.ngOnDestroy = function () {
    };
    ScoreBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-score-board',
            template: __webpack_require__("../../../../../src/app/core/score-board/score-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/score-board/score-board.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__display_service_display_service_service__["a" /* DisplayService */]])
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n.center-elements{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\nh1{\r\n  margin: 0.7vw 0 0 0;\r\n  display: inline-block;\r\n  font-size: 6vh;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bolder;\r\n  color: #3b3e47;\r\n  vertical-align: top;\r\n}\r\n\r\n.goose-icon{\r\n  display: inline-block;\r\n  padding: 0;\r\n  margin-right: 2vh;\r\n  height: 9vh;\r\n  width: 9vh;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);\r\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"global-navbar-elements\">\n  <div class=\"center-elements\">\n    <img src=\"assets/goose.svg\" class=\"goose-icon\"><h1>Marmosad</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNavbarElementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalNavbarElementsComponent = /** @class */ (function () {
    function GlobalNavbarElementsComponent() {
    }
    GlobalNavbarElementsComponent.prototype.ngOnInit = function () {
    };
    GlobalNavbarElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-global-navbar-elements',
            template: __webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalNavbarElementsComponent);
    return GlobalNavbarElementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#global-navbar-root{\r\n  height: 10vh;\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n#global-navbar-root:hover {\r\n  -webkit-box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 19px 18px rgba(0,0,0,0.22);\r\n          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 19px 18px rgba(0,0,0,0.22);\r\n}\r\n\r\n#global-navbar-strip{\r\n\theight: 10vh;\r\n\twidth: 100vw;\r\n\tpadding: 0;\r\n  background: #ff5b5b;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%)\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"global-navbar-root\" [@navAnimationState] = 'getState'>\n\t<div id=\"global-navbar-strip\">\n    <app-global-navbar-elements></app-global-navbar-elements>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalNavbarComponent = /** @class */ (function () {
    function GlobalNavbarComponent() {
        this.show = true;
    }
    GlobalNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggle();
        }, 1);
    };
    Object.defineProperty(GlobalNavbarComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    GlobalNavbarComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    GlobalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-global-navbar',
            template: __webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('navAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(0) translateY(-100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(0) translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalNavbarComponent);
    return GlobalNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/socket-io/socket-io.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketIoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketIoService = /** @class */ (function () {
    function SocketIoService(http, location) {
        this.http = http;
        this.location = location;
        this.SERVER_URL = 'http://localhost:8081';
        this.players = [];
        this.submissions = [];
    }
    Object.defineProperty(SocketIoService.prototype, "getDisplay", {
        get: function () {
            return this.display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketIoService.prototype, "socketId", {
        get: function () {
            return this.socket.id;
        },
        enumerable: true,
        configurable: true
    });
    SocketIoService.prototype.createFakeDisplay = function (playerCount) {
        for (var count = 0; count < playerCount; count++) {
            this.players[count] = {
                playerName: 'player #' + Math.round(count * 10 * Math.random()),
                playerId: 'player' + count,
                hand: this.generateFakeHand(),
                isJudge: false,
                score: Math.round(count * 3 * Math.random())
            };
            this.submissions[count] = {
                cardId: Math.round(count * 10 * Math.random()),
                body: 'This is a body of the white card, randomly generated ' + count,
                owner: 'player' + count
            };
        }
        this.display = {
            blackCard: {
                cardId: 122,
                body: 'This is a body of the black card, randomly generated',
            },
            currentJudge: 'Stellar, she\'s always judge',
            submissions: this.submissions,
            players: this.players
        };
    };
    SocketIoService.prototype.generateFakeHand = function () {
        var array = [];
        for (var count = 0; count < 7; count++) {
            array[count] = {
                cardId: Math.round(99 * Math.random()),
                body: 'This is a body of the white card, randomly generated ' + count,
                owner: 'player' + count
            };
        }
        return array;
    };
    SocketIoService.prototype.initSocket = function () {
        if (this.socket === undefined) {
            this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__({ query: 'name=' + this.playerName });
            // this.socket = SocketIo(this.SERVER_URL, { query: 'name=' + this.playerName });
        }
        else {
            this.socket.connect();
        }
        this.socket.emit('userJoined');
        console.log('init ran ' + this.socket);
    };
    Object.defineProperty(SocketIoService.prototype, "hasSocket", {
        get: function () {
            return !(this.socket === undefined);
        },
        enumerable: true,
        configurable: true
    });
    SocketIoService.prototype.send = function (message) {
        this.socket.emit('sendMsg', message);
    };
    SocketIoService.prototype.setPlayerName = function (playerName) {
        this.playerName = playerName;
    };
    SocketIoService.prototype.getSocketId = function () {
        return this.socket.id;
    };
    SocketIoService.prototype.onMessage = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIoService.prototype.onPlayerAmount = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('playerAmount', function (data) {
                console.log(data);
                observer.next(data);
            });
        });
    };
    SocketIoService.prototype.onDisplayUpdate = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('updateDisplay', function (data) {
                console.log('Socket got an update for display');
                observer.next(data);
            });
        });
    };
    SocketIoService.prototype.onReset = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('boardReset', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIoService.prototype.closeSocket = function () {
        return this.socket.disconnect();
    };
    SocketIoService.prototype.startGame = function () {
        this.socket.emit('startGame', null);
    };
    SocketIoService.prototype.resetGame = function () {
        this.socket.emit('reset', null);
    };
    SocketIoService.prototype.submitCard = function (card) {
        this.socket.emit('submission', card);
    };
    SocketIoService.prototype.submitJudgement = function (card) {
        this.socket.emit('judgment', card);
        console.log('judged');
    };
    SocketIoService.prototype.getPlayerLimit = function () {
        return this.http.get(this.location.prepareExternalUrl('') + '/playerLimit');
    };
    SocketIoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* Location */]])
    ], SocketIoService);
    return SocketIoService;
}());



/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  @import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\n#enter:hover, #about:hover, h1:hover{\r\n  background-color: white;\r\n  color: #ff5b5b;\r\n  cursor: pointer;\r\n}\r\n\r\n#enter:hover, #about:hover{\r\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n#about, #enter{\r\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all 0.2s cubic-bezier(.25,.8,.25,1);\r\n  transition: all 0.2s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n#enter{\r\n  float: left;\r\n}\r\n\r\n#about{\r\n  float: right;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1vw 4vw 1vw 3.5vw;\r\n  background-color: #ff5b5b;\r\n  color: #3b3e47;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  font-size: 5.5vw;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.overlay {\r\n  width: 55vw;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -110%);\r\n          transform: translate(-50%, -110%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [@splashButtonsAnimationState] = 'getState'>\n  <div id=\"enter\" (click)=\"toCore()\">\n    <h1>Enter</h1>\n  </div>\n  <div id=\"about\" (click)=\"toAbout()\">\n    <h1>About</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashNavigateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashNavigateComponent = /** @class */ (function () {
    function SplashNavigateComponent(router) {
        var _this = this;
        this.router = router;
        this.show = true;
        this.routeOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.stopEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.animate = function (callRoute) {
            console.log('redirecting to core');
            _this.routeOut.emit(null);
            _this.toggle();
            setTimeout(function () {
                callRoute();
            }, 500);
        };
        this.route = function () {
            _this.router.navigate(['/core']);
        };
    }
    SplashNavigateComponent.prototype.toCore = function () {
        this.animate(this.route);
    };
    // TODO
    SplashNavigateComponent.prototype.toAbout = function () {
        this.animate(this.route);
    };
    SplashNavigateComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SplashNavigateComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    SplashNavigateComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SplashNavigateComponent.prototype, "routeOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SplashNavigateComponent.prototype, "stopEnter", void 0);
    SplashNavigateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash-navigate',
            template: __webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('splashButtonsAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'translateX(-50%) translateY(-100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'translateX(-200%) translateY(-100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SplashNavigateComponent);
    return SplashNavigateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/splash/splash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Comfortaa');\r\n\r\napp-splash{\r\n  width: 100vw;\r\n  height: 20vw;\r\n  border-style: solid;\r\n}\r\n\r\n.splash-wrapper {\r\n  height: 40vw;\r\n  width: 30vw;\r\n\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.center-elements{\r\n  width: 60vw;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  padding-bottom: 2.3vw;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-bottom: 1vw solid #ff5b5b;\r\n}\r\n\r\nh1{\r\n  margin: 3vw 0 0 0;\r\n  margin-left: 3vw;\r\n  display: inline-block;\r\n  font-size: 7vw;\r\n  font-family: 'Comfortaa', cursive;\r\n  font-weight: bolder;\r\n  color: #ff5b5b;\r\n  vertical-align: top;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.goose-icon{\r\n  display: inline-block;\r\n  margin: 0 7vw 0 0 0;\r\n  height: 15vw;\r\n  width: 15vw;\r\n  -webkit-box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24);\r\n          box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splash-wrapper\">\n  <div class=\"center-elements\" [@splashAnimationState]='getState'>\n    <img src=\"assets/goose.svg\" class=\"goose-icon\">\n    <h1>Marmosad</h1>\n  </div>\n  <div class=\"nav-button\">\n    <app-splash-navigate (routeOut)=\"toggle()\"></app-splash-navigate>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
        this.show = true;
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SplashComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    SplashComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash',
            template: __webpack_require__("../../../../../src/app/splash/splash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash/splash.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('splashAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(-50%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        transform: 'translateX(100%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map