webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectivesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_constants__ = __webpack_require__(24);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObjectivesService = /** @class */ (function () {
    function ObjectivesService(firestore) {
        this.firestore = firestore;
    }
    ObjectivesService_1 = ObjectivesService;
    ObjectivesService.prototype.create = function (objective, idProject) {
        // Adds the objective to the collection 'objectives' in project
        return this.firestore.collection(ObjectivesService_1.getPath(idProject)).add(__assign({}, objective));
    };
    ObjectivesService.prototype.getObjectives = function (idProject) {
        return this.firestore.collection(ObjectivesService_1.getPath(idProject))
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    ObjectivesService.prototype.getOrderedObjectives = function (idProject) {
        return this.firestore.collection(ObjectivesService_1.getPath(idProject), function (ref) { return ref.orderBy('order'); })
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    ObjectivesService.prototype.findObjective = function (idProject, name) {
        return this.firestore.collection(ObjectivesService_1.getPath(idProject), function (ref) { return ref.where('name', '==', name); }).snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    ObjectivesService.prototype.update = function (id, idProject, data) {
        return this.firestore.doc(ObjectivesService_1.getPath(idProject) + "/" + id).update(data);
    };
    ObjectivesService.prototype.remove = function (id, idProject) {
        return this.firestore.doc(ObjectivesService_1.getPath(idProject) + "/" + id).delete();
    };
    ObjectivesService.getPath = function (idProj) {
        return __WEBPACK_IMPORTED_MODULE_3__util_constants__["h" /* pathObjectives */].replace(__WEBPACK_IMPORTED_MODULE_3__util_constants__["p" /* replaceId */], idProj);
    };
    ObjectivesService = ObjectivesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ObjectivesService);
    return ObjectivesService;
    var ObjectivesService_1;
}());

//# sourceMappingURL=objectives.service.js.map

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosize_autosize__ = __webpack_require__(1185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutosizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(element) {
        this.element = element;
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onInput", null);
    AutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'ion-textarea[autosize]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_random__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_random__);

/**
 * Utils class for custom method.
 * Only static methods accessible from everywhere.
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Cleans the undefined fields of the object by returning a new object containing only defined fields (can be null)
     *
     * Does NOT change the original object
     * @param obj
     * @return a new cleaned object
     */
    Utils.clean = function (obj) {
        var o = Object.assign({}, obj);
        Object.keys(o).forEach(function (key) { return o[key] === undefined && delete o[key]; });
        return o;
    };
    /**
     * @name pad2
     * @desc Return formatted string number OO.
     * @param {number} number: the number to pad.
     * @returns {string}
     * @memberOf Utils
     * @param {number} number
     */
    Utils.pad2 = function (number) {
        return (number < 10 ? '0' : '') + number;
    };
    /**
     * @name audioPath
     * @desc Create a new path for audio file.
     * @returns {string}: the audio path.
     * @memberOf Utils
     */
    Utils.audioPath = function (idProject) {
        return "audio/" + idProject + "/" + __WEBPACK_IMPORTED_MODULE_0_uuid_random___default()() + ".wav";
    };
    Utils.imagePath = function (idProject, idParticipant) {
        return "image/" + idProject + "/avatar/" + idParticipant;
    };
    /**
     * @name error
     * @desc Log a custom error.
     * @param message
     */
    Utils.error = function (message) {
        console.log(message);
    };
    /**
     * @name b64toBlob
     * @desc Convert string to blob.
     * @ref https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
     * @param {string} b64Data: the string to convert.
     * @param {string} contentType: type of content.
     * @param {number} sliceSize: buffer size.
     * @returns {Blob}
     * @memberOf Utils
     */
    Utils.b64toBlob = function (b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
     * @name float32ArraySpliceToArray
     * @desc Convert Float32Array to Array<Float32Array>.
     * @param {Float32Array} float32array
     * @param {number} tabSize
     * @returns {Array<Float32Array>}
     * @memberOf Utils
     */
    Utils.float32ArraySpliceToArray = function (float32array, tabSize) {
        var resultArray = new Array();
        var i = 0;
        var j = -1;
        float32array.forEach(function (val) {
            if (i % tabSize === 0) {
                resultArray.push(new Float32Array(tabSize));
                j++;
            }
            resultArray[j][i % tabSize] = val;
            i++;
        });
        return resultArray;
    };
    /**
     * @name dataViewToArray
     * @desc Convert DataView into Array<Float32Array>.
     * @param {DataView} dataView
     * @returns {Array<Float32Array>}
     * @memberOf Utils
     */
    Utils.dataViewToArray = function (dataView) {
        var index = 44;
        var result = new Float32Array(dataView.byteLength / 2);
        // - 32 because of Int16 size * index
        for (var i = 0; i < (dataView.byteLength / 2) - 32; i++) {
            result[i] = (dataView.getInt16(index, true) / 0x7FFF);
            index += 2;
        }
        return Utils.float32ArraySpliceToArray(result, 2048);
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_app_main_app_component__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = /** @class */ (function () {
    function LoginPage(authProvider, navCtrl, loadingCtrl) {
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.spinner = this.loadingCtrl.create({
            spinner: "crescent",
            content: 'Please wait...',
            duration: 10000,
            dismissOnPageChange: true
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log("try to retrieve login");
                        return [4 /*yield*/, this.authProvider.retrieveLogin()];
                    case 2:
                        _a.sent();
                        this.spinner.dismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewCanLeave = function () {
        return this.authProvider.isLoggedIn();
    };
    LoginPage.prototype.login = function () {
        try {
            this.authProvider.loginWithGoogle();
        }
        catch (e) {
            console.log(e);
        }
    };
    LoginPage.prototype.isLoggedIn = function () {
        return this.authProvider.isLoggedIn();
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_app_main_app_component__["a" /* MyMainApp */]);
        // this.navCtrl.setRoot('MyMainApp');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/login/login.html"*/'<ion-content padding class="no-scroll">\n  <ion-grid>\n    <ion-row style="height:20%">\n      <ion-col col-4></ion-col>\n      <ion-col col-4 style="height:100%"><img style="height:100%" src="assets/imgs/restit_logo.png"/></ion-col>\n      <ion-col *ngIf="authProvider.user$ | async as user; else signIn" col-4><p class="user">{{user.displayName}}</p></ion-col>\n      <ng-template #signIn><ion-col col-4><a (click)="login()"><p class="signin">{{\'login.sign_in\' | translate}}</p></a></ion-col></ng-template>\n    </ion-row>\n    <ion-row style="height:15%">\n      <ion-col col-12>\n        <p class="mainTitle">Restit UX</p>\n      </ion-col>\n    </ion-row>\n    <ion-row style="height:15%">\n      <ion-col col-12>\n        <p class="subTitle">{{\'login.subtitle\' | translate }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row style="height:50%">\n      <ion-col col-12 style="height:100%">\n        <button ion-button color="light" round (click)="goToHome()" [disabled]="!isLoggedIn()" #startBtn><p>{{\'login.start\' | translate }}<p></p></button>\n        <div class="grey-div"></div>\n        <div class="palo-it"><p>By Palo IT</p></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_persistence_objectives_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_persistence_question_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectSinglePage = /** @class */ (function () {
    function ProjectSinglePage(navParams, objectiveService, viewService, translate, questionService, alertCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.objectiveService = objectiveService;
        this.viewService = viewService;
        this.translate = translate;
        this.questionService = questionService;
        this.alertCtrl = alertCtrl;
        this.pageTitle = "View Project";
        this.tab = __WEBPACK_IMPORTED_MODULE_3__util_constants__["e" /* objectives */];
        this.subs = [];
        this.project = this.navParams.get('project');
        this.objectives = this.objectiveService.getOrderedObjectives(this.project.id).share();
        this.translate.get('project.single.toast.success.objectiveDeleted').take(1)
            .subscribe(function (value) { return _this.messageRemoveSuccess = value; });
        this.translate.get('project.single.toast.error.objectiveDeleted').take(1)
            .subscribe(function (value) { return _this.messageRemoveFail = value; });
        this.translate.get('project.single.alert.btn.deleteConfirm').take(1)
            .subscribe(function (value) { return _this.alertBtnConfirm = value; });
        this.translate.get('project.single.alert.btn.cancel').take(1).subscribe(function (value) { return _this.alertBtnCancel = value; });
        this.translate.get('project.single.alert.title').take(1).subscribe(function (value) { return _this.alertTitleRemove = value; });
        this.translate.get('project.single.alert.messageHasQuestions').take(1)
            .subscribe(function (value) { return _this.alertMessageRemoveHasQuestions = value; });
        this.translate.get('project.single.alert.messageNoQuestions').take(1)
            .subscribe(function (value) { return _this.alertMessageRemoveNoQuestions = value; });
        this.translate.get('project.single.toast.success.objectiveUpdated').take(1)
            .subscribe(function (value) { return _this.messageUpdateSuccess = value; });
        this.translate.get('project.single.toast.error.objectiveUpdated').take(1)
            .subscribe(function (value) { return _this.messageUpdateFail = value; });
    }
    ProjectSinglePage.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.objectives.subscribe(function (value) {
            var hasQuestions = [];
            var edit = [];
            for (var i = 0; i < value.length; i++) {
                hasQuestions.push(true);
                edit.push(false);
            }
            _this.hasQuestions = hasQuestions;
            _this.edit = edit;
            var _loop_1 = function (i) {
                _this.questionService.existForObjective(value[i].id, _this.project.id).share()
                    .subscribe(function (exists) {
                    _this.hasQuestions[i] = exists;
                });
            };
            for (var i = 0; i < value.length; i++) {
                _loop_1(i);
            }
        }));
    };
    Object.defineProperty(ProjectSinglePage.prototype, "canEdit", {
        get: function () {
            return this.project.preparation;
        },
        enumerable: true,
        configurable: true
    });
    ProjectSinglePage.prototype.remove = function (objectif, i) {
        var _this = this;
        var hasQ = this.hasQuestions[i];
        this.alertCtrl.create({
            title: this.alertTitleRemove,
            message: hasQ ? this.alertMessageRemoveHasQuestions : this.alertMessageRemoveNoQuestions,
            buttons: [
                {
                    text: this.alertBtnCancel,
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: this.alertBtnConfirm,
                    handler: function () {
                        _this.objectiveService.remove(objectif.id, _this.project.id)
                            .then(function () {
                            if (hasQ) {
                                _this.questionService.removeAllFromObjective(objectif.id, _this.project.id)
                                    .then(function () { return _this.viewService.showToast(_this.messageRemoveSuccess); })
                                    .catch(function () { return _this.viewService.showToast(_this.messageRemoveFail); });
                            }
                            else {
                                _this.viewService.showToast(_this.messageRemoveSuccess);
                            }
                        })
                            .catch(function () { return _this.viewService.showToast(_this.messageRemoveFail); });
                    }
                }
            ]
        }).present();
    };
    ProjectSinglePage.prototype.clickEdit = function (objectif, i) {
        this.edit[i] = true;
    };
    ProjectSinglePage.prototype.doEdit = function (objectif, i) {
        var _this = this;
        this.objectiveService.update(objectif.id, this.project.id, { name: objectif.name })
            .then(function (value) {
            _this.viewService.showToast(_this.messageUpdateSuccess);
            _this.edit[i] = false;
        }).catch(function (reason) { return _this.viewService.showToast(_this.messageUpdateFail + " " + reason); });
    };
    ProjectSinglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-single',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/project-single/project-single.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Project name\n    </ion-card-header>\n    <div class="line"></div>\n    <ion-card-content>\n      {{project.name}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Project description\n    </ion-card-header>\n    <div class="line"></div>\n    <ion-card-content>\n      {{project.description}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Project objectives\n    </ion-card-header>\n    <div class="line"></div>\n    <ion-card-content>\n      <ul>\n        <li *ngFor="let item of (objectives | async); let i = index">\n          <ng-container *ngIf="!edit[i]; then displayObjective else editObjective"></ng-container>\n\n          <ng-template #displayObjective>\n            <ion-item>\n              {{item.name}}\n              <button ion-button (click)="clickEdit(item, i)" round class="round" item-end *ngIf="canEdit">\n                <ion-icon name="create"></ion-icon>\n              </button>\n              <button ion-button (click)="remove(item, i)" round class="round" item-end *ngIf="canEdit">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-item>\n          </ng-template>\n          <ng-template #editObjective>\n            <ion-item>\n              <ion-label stacked>{{\'project.single.objective.name\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="item.name"></ion-input>\n              <button ion-button round class="round" item-end (click)="edit[i] = false; doEdit(item, i)">\n                <ion-icon name="checkmark"></ion-icon>\n              </button>\n            </ion-item>\n          </ng-template>\n\n        </li>\n      </ul>\n\n      <!--{{project.objectives}}-->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<!--<ion-footer>-->\n  <!--<custom-footer></custom-footer>-->\n<!--</ion-footer>-->\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/project-single/project-single.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_persistence_objectives_service__["a" /* ObjectivesService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_view_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_persistence_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ProjectSinglePage);
    return ProjectSinglePage;
}());

//# sourceMappingURL=project-single.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(firestore) {
        this.firestore = firestore;
    }
    ProjectService.prototype.create = function (project) {
        return this.firestore.collection(__WEBPACK_IMPORTED_MODULE_2__util_constants__["j" /* pathProjects */]).add(__assign({}, project));
    };
    ProjectService.prototype.getProject = function (id) {
        return this.firestore.doc(__WEBPACK_IMPORTED_MODULE_2__util_constants__["j" /* pathProjects */] + "/" + id).valueChanges().share();
    };
    ProjectService.prototype.getProjects = function () {
        return this.firestore.collection("projects")
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var project = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, project);
            });
        });
    };
    ProjectService.prototype.isProjectNameAvailable = function (name) {
        return this.getProjects().share()
            .map(function (projects) { return projects.filter(function (p) { return p.name === name; }); })
            .map(function (projects) { return !projects.length; });
    };
    ProjectService.prototype.update = function (id, data) {
        return this.firestore.doc(__WEBPACK_IMPORTED_MODULE_2__util_constants__["j" /* pathProjects */] + "/" + id).update(data);
    };
    ProjectService.prototype.remove = function (id) {
        return this.firestore.doc(__WEBPACK_IMPORTED_MODULE_2__util_constants__["j" /* pathProjects */] + "/" + id).delete();
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBRnUPvBqEelFRGk9PwU_WUhCCpXs2K_m0",
        authDomain: "restitux-194509.firebaseapp.com",
        databaseURL: "https://restitux-194509.firebaseio.com",
        projectId: "restitux-194509",
        storageBucket: "restitux-194509.appspot.com",
        messagingSenderId: "842187141527",
    },
    urlCloudFunctionSpeech: "https://us-central1-restitux-194509.cloudfunctions.net/speechRecognition",
    urlStorage: "gs://restitux-194509.appspot.com",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * RecordComponent
 * Class to manage interaction between app and server.
 * Can record audio and play it.
 */
var RecordService = /** @class */ (function () {
    /**
     * Constructor needs http object to send request.
     * @param {HttpClient} http
     */
    function RecordService(http) {
        this.http = http;
        this.recorder = null;
        this.mediaStream = null;
        this.sampleRate = 44100;
        this.context = null;
        this.resultText = null;
        this.loading = false;
    }
    RecordService_1 = RecordService;
    Object.defineProperty(RecordService.prototype, "getResultText", {
        /**
         * @name getResultText
         * @desc Return the result text sent by server.
         * @returns {String}
         * @memberOf RecordService
         */
        get: function () { return this.resultText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecordService.prototype, "isLoading", {
        /**
         * @name isLoading
         * @desc Return the actual loading state of process.
         * @returns {boolean}
         * @memberOf RecordService
         */
        get: function () { return this.loading; },
        enumerable: true,
        configurable: true
    });
    /**
     * @name setFlagsCollection
     * @desc Set the tag collection.
     * @param {Array} tagsCollection: the list of tags.
     * @memberOf RecordService
     */
    RecordService.prototype.setFlagsCollection = function (tagsCollection) { this.transcriptionCollection = tagsCollection; };
    /**
     * @name startRecordingFunction
     * @desc Start the recording of the voice.
     * @param {Array<Float32Array>} channel: the stored record.
     * @param {number} channelSize: the stored size of record.
     * @memberOf RecordService
     */
    RecordService.prototype.startRecordingFunction = function (channel, channelSize) {
        var _this = this;
        this.channel = channel;
        this.channelSize = channelSize;
        // Initialize recorder
        navigator.getUserMedia({
            audio: true
        }, function (e) {
            // creates the audio context
            _this.context = new AudioContext();
            // creates an audio node from the microphone incoming stream
            _this.mediaStream = _this.context.createMediaStreamSource(e);
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
            // bufferSize: the onaudioprocess event is called when the buffer is full
            var bufferSize = 2048;
            var numberOfInputChannels = 1;
            var numberOfOutputChannels = 1;
            if (_this.context.createScriptProcessor) {
                _this.recorder = _this.context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
            }
            else {
                _this.recorder = _this.context.createJavaScriptNode(bufferSize, numberOfInputChannels, numberOfOutputChannels);
            }
            _this.recorder.onaudioprocess = function (e) {
                _this.channel.push(new Float32Array(e.inputBuffer.getChannelData(0)));
                _this.channelSize += bufferSize;
            };
            _this.mediaStream.connect(_this.recorder);
            _this.recorder.connect(_this.context.destination);
        }, function (e) {
            console.error(e);
        });
    };
    /**
     * @name stopRecordingFunction
     * @desc Pause the recording of the voice.
     * @return {} all data needed to persist audio.
     * @memberOf RecordService
     */
    RecordService.prototype.stopRecordingFunction = function () {
        // Stop recording
        this.recorder.disconnect(this.context.destination);
        this.mediaStream.disconnect(this.recorder);
        var leftBuffer = RecordService_1.flattenArray(this.channel, this.channelSize);
        var buffer = new ArrayBuffer(44 + leftBuffer.length * 2);
        var view = new DataView(buffer);
        // RIFF chunk descriptor
        RecordService_1.writeUTFBytes(view, 0, 'RIFF');
        // view.setUint32(4, 44 + interleaved.length * 2, true);
        view.setUint32(4, 44 + leftBuffer.length * 2, true);
        RecordService_1.writeUTFBytes(view, 8, 'WAVE');
        // FMT sub-chunk
        RecordService_1.writeUTFBytes(view, 12, 'fmt ');
        view.setUint32(16, 16, true); // chunkSize
        view.setUint16(20, 1, true); // wFormatTag
        view.setUint16(22, 1, true); // wChannels: stereo (2 channels), mono (1)
        view.setUint32(24, this.sampleRate, true); // dwSamplesPerSec
        view.setUint32(28, this.sampleRate * 2, true); // dwAvgBytesPerSec sampleRate * nbChans * 2
        view.setUint16(32, 2, true); // wBlockAlign nbChans * 2
        view.setUint16(34, 16, true); // wBitsPerSample
        // Data sub-chunk
        RecordService_1.writeUTFBytes(view, 36, 'data');
        // view.setUint32(40, interleaved.length * 2, true);
        view.setUint32(40, leftBuffer.length * 2, true);
        // Write the PCM samples
        var index = 44;
        var volume = 1;
        for (var i = 0; i < leftBuffer.length; i++) {
            view.setInt16(index, leftBuffer[i] * (0x7FFF * volume), true);
            index += 2;
        }
        // Our final blob
        var blob = new Blob([view], { type: 'audio/wav' });
        // Create instance of audio source
        var url = window.URL.createObjectURL(blob);
        var audio = new Audio(url);
        return { audio: audio, blob: blob, channel: this.channel, channelSize: this.channelSize };
    };
    /**
     * @name play
     * @desc Play the recorded voice.
     * @param {Audio} audio: the audio to play.
     * @memberOf RecordService
     */
    RecordService.play = function (audio) {
        audio.play();
    };
    /**
     * @name stop
     * @desc Pause the recorded voice.
     * @param {Audio} audio: the audio to pause.
     * @memberOf RecordService
     */
    RecordService.stop = function (audio) {
        audio.pause();
    };
    /**
     * @name reset
     * @desc Reset the recorded voice.
     * @param {Audio} audio: the audio to reset.
     * @memberOf RecordService
     */
    RecordService.reset = function (audio) {
        audio.pause();
        audio.currentTime = 0;
    };
    /**
     * @name flattenArray
     * @desc Flat arrays.
     * @param {Array<Float32Array>} channelBuffer: the buffer to flat.
     * @param {number} recordingLength: the length of the array.
     * @returns {Float32Array} the flatten array.
     * @memberOf RecordService
     */
    RecordService.flattenArray = function (channelBuffer, recordingLength) {
        var result = new Float32Array(recordingLength);
        var offset = 0;
        for (var i = 0; i < channelBuffer.length; i++) {
            var buffer = channelBuffer[i];
            result.set(buffer, offset);
            offset += buffer.length;
        }
        return result;
    };
    /**
     * @name writeUTFBytes
     * @desc Fill a tab with UTF Bytes.
     * @param {DataView} view: the whole data.
     * @param {number} offset: the offset for writing.
     * @param {string} string: the string to write.
     * @memberOf RecordService
     */
    RecordService.writeUTFBytes = function (view, offset, string) {
        for (var i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    /**
     * @name httpGetAsync
     * @desc Send a request to process voice.
     * @param {string} theUrl: url to request.
     * @param {string} countryKey: the country key.
     * @param {Array} tagArray: the array of tags.
     * @param {string} interviewId: the id of the interview.
     * @param {string} projectId: the if of project.
     * @param {string} gcsUri: the Google Cloud Storage Uri to send.
     * @param {string} userId: the id of user.
     * @returns {Promise}
     * @memberOf RecordService
     */
    RecordService.prototype.httpGetAsync = function (theUrl, countryKey, tagArray, interviewId, projectId, userId, gcsUri) {
        var _this = this;
        var promise = Promise.resolve();
        return promise.then(function () {
            var fullUri = __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].urlStorage + "/" + gcsUri;
            var audio = {
                uri: fullUri,
            };
            var config = {
                enableWordTimeOffsets: true,
                encoding: "WAV",
                sampleRateHertz: 44100,
                languageCode: countryKey,
            };
            var myBody = {
                audio: audio,
                config: config,
            };
            var fullBody = {
                myBody: myBody,
                tags: tagArray,
                interviewId: interviewId,
                projectId: projectId,
                userId: userId,
            };
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'responseType': 'text'
                })
            };
            return _this.http.post(theUrl, fullBody, httpOptions).toPromise();
        });
    };
    /**
     * @name promiseFileReader
     * @desc Transform FileReader onloadend event into Promise.
     * @param {Blob} file: file to read.
     * @param {FileReader} fileReader: file reader.
     * @returns {Promise}
     * @memberOf RecordService
     */
    RecordService.prototype.promiseFileReaderURL = function (file, fileReader) {
        return new Promise(function (resolve, reject) {
            fileReader.onloadend = resolve;
            fileReader.readAsDataURL(file);
        });
    };
    /**
     * @name promiseFileReaderArrayBuffer
     * @desc Transform FileReader onloadend event into Promise.
     * @param {Blob} file: file to read.
     * @param {FileReader} fileReader: file reader.
     * @returns {Promise}
     * @memberOf RecordService
     */
    RecordService.prototype.promiseFileReaderArrayBuffer = function (file, fileReader) {
        return new Promise(function (resolve) {
            fileReader.onloadend = resolve;
            fileReader.readAsArrayBuffer(file);
        });
    };
    RecordService = RecordService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecordService);
    return RecordService;
    var RecordService_1;
}());

//# sourceMappingURL=record.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export questionTagType */
/* unused harmony export collectionProjects */
/* unused harmony export collectionObjectives */
/* unused harmony export collectionQuestions */
/* unused harmony export collectionParticipants */
/* unused harmony export collectionInterviews */
/* unused harmony export collectionTranscriptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return replaceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pathObjectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pathQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pathInterviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return pathTranscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pathProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pathParticipants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return objectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return preparation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return interviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return analysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return questionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return interviewTagPrepa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return participantsPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return upComingInterviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return finishedInterviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return rawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return syntheticData; });
var questionTagType = "questionTime";
var collectionProjects = "projects";
var collectionObjectives = "objectives";
var collectionQuestions = "questions";
var collectionParticipants = "participants";
var collectionInterviews = "interviews";
var collectionTranscriptions = "transcriptions";
var replaceId = "{id}";
var pathObjectives = collectionProjects + "/" + replaceId + "/" + collectionObjectives;
var pathQuestions = collectionProjects + "/" + replaceId + "/" + collectionQuestions;
var pathInterviews = collectionProjects + "/" + replaceId + "/" + collectionInterviews;
var pathTranscriptions = collectionProjects + "/" + replaceId + "/" + collectionTranscriptions;
var pathProjects = collectionProjects;
var pathParticipants = collectionProjects + "/" + replaceId + "/" + collectionParticipants;
var objectives = { name: "objectives", value: 1 };
var preparation = { name: "preparation", value: 2 };
var interviews = { name: "interviews", value: 3 };
var analysis = { name: "analysis", value: 4 };
var questionCreator = { name: 'questionCreator', value: 1 };
var interviewTagPrepa = { name: 'interviewTagPrepa', value: 2 };
var participantsPanel = { name: 'participantsPanel', value: 3 };
var upComingInterviews = { name: 'upComingInterviews', value: 1 };
var finishedInterviews = { name: 'finishedInterviews', value: 2 };
var rawData = { name: 'rawData', value: 1 };
var syntheticData = { name: 'syntheticData', value: 2 };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.preparation = true;
    }
    return Project;
}());

//# sourceMappingURL=Project.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCreatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_objectives_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_persistence_question_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interview_flow_interview_flow__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_Objective__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuestionCreatorPage = /** @class */ (function () {
    function QuestionCreatorPage(navCtrl, navParams, objectiveService, viewService, translate, questionService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.objectiveService = objectiveService;
        this.viewService = viewService;
        this.translate = translate;
        this.questionService = questionService;
        this.alertCtrl = alertCtrl;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["m" /* preparation */];
        this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["n" /* questionCreator */];
        this.objectives = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.questions = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.questionsTexts = [];
        this.editMode = -1;
        this.subs = [];
        this.adding = false;
        this.project = this.navParams.get("project");
        this.translate.get('tabs.title.preparation').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.translate.get('question.creator.toast.error.missingQuestion').take(1)
            .subscribe(function (value) { return _this.message = value; });
        this.translate.get('question.creator.toast.success.createdObjective').take(1)
            .subscribe(function (value) { return _this.messageSuccessObjective = value; });
        this.translate.get('question.creator.toast.success.createdQuestions').take(1)
            .subscribe(function (value) { return _this.messageSuccessQuestions = value; });
        this.translate.get('question.creator.toast.error.createdQuestions').take(1)
            .subscribe(function (value) { return _this.messageFailQuestions = value; });
        this.translate.get('tabs.title.questionCreator').take(1).subscribe(function (value) { return _this.pageSubTitle = value; });
        this.translate.get('question.creator.alert.title').take(1).subscribe(function (value) { return _this.alertTitleRemove = value; });
        this.translate.get('question.creator.alert.messageLastQuestion').take(1)
            .subscribe(function (value) { return _this.alertMessageRemoveLastQuestion = value; });
        this.translate.get('question.creator.alert.messageNotLastQuestion').take(1)
            .subscribe(function (value) { return _this.alertMessageRemoveNotLast = value; });
        this.translate.get('question.creator.alert.button.confirm').take(1)
            .subscribe(function (value) { return _this.alertBtnConfirm = value; });
        this.translate.get('question.creator.alert.button.cancel').take(1).subscribe(function (value) { return _this.alertBtnCancel = value; });
        this.translate.get('question.creator.toast.success.removedQuestion').take(1)
            .subscribe(function (value) { return _this.messageRemoveSuccess = value; });
        this.translate.get('question.creator.toast.error.removedQuestion').take(1)
            .subscribe(function (value) { return _this.messageRemoveFail = value; });
    }
    QuestionCreatorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.objectiveService.getOrderedObjectives(this.project.id).subscribe(function (value) {
            _this.objectives.next(value);
            _this.editMode = -1;
        }), this.questionService.getOrderedQuestions(this.project.id).subscribe(function (value) {
            var tmpDisplay = [];
            for (var _i = 0, _a = _this.objectives.getValue(); _i < _a.length; _i++) {
                var obj = _a[_i];
                var row = [];
                var numberQuestions = _this.getQuestionsSizeByObjective(obj.id);
                for (var i = 0; i < numberQuestions; i++) {
                    row.push(false);
                }
                tmpDisplay.push(row);
            }
            _this.edit = tmpDisplay;
            _this.questions.next(value);
        }));
    };
    QuestionCreatorPage.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    Object.defineProperty(QuestionCreatorPage.prototype, "createMode", {
        get: function () {
            return this.questions.getValue().length == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCreatorPage.prototype, "canEdit", {
        get: function () {
            return this.project.preparation;
        },
        enumerable: true,
        configurable: true
    });
    QuestionCreatorPage.prototype.getQuestionsSizeByObjective = function (idObjective) {
        return this.questions.getValue().filter(function (value) { return value.objectifId == idObjective; }).length;
    };
    QuestionCreatorPage.prototype.getQuestionByObjective = function (idObjective) {
        return this.questions.getValue().filter(function (value) { return value.objectifId == idObjective; });
    };
    QuestionCreatorPage.prototype.saveQuestions = function () {
        var _this = this;
        if (this.questionsTexts.length != this.objectives.getValue().length) {
            this.viewService.showToast(this.message);
            return;
        }
        this.questionService.createQuestions(this.questionsTexts, this.objectives.getValue(), this.project.id)
            .then(function () {
            _this.viewService.showToast(_this.messageSuccessQuestions);
        }).catch(function () {
            _this.viewService.showToast(_this.messageFailQuestions, 5000);
        });
    };
    QuestionCreatorPage.prototype.addObjective = function () {
        this.adding = true;
    };
    QuestionCreatorPage.prototype.detectEnterQuestion = function (keyCode, objectiveIndex) {
        if (keyCode == 13) {
            this.addQuestion(objectiveIndex);
        }
    };
    QuestionCreatorPage.prototype.addQuestion = function (objectiveIndex) {
        var _this = this;
        var objectiveId = this.objectives.getValue()[objectiveIndex].id;
        this.questionService.createOneQuestion(this.questionToAdd, objectiveId, this.project.id)
            .then(function () { return _this.viewService.showToast(_this.messageSuccessQuestions); })
            .catch(function (reason) { return _this.viewService.showToast(_this.messageFailQuestions + ": " + reason); });
        this.questionToAdd = "";
        this.editMode = -1;
    };
    QuestionCreatorPage.prototype.showAddQuestion = function (i) {
        this.questionToAdd = '';
        this.editMode = i;
    };
    QuestionCreatorPage.prototype.detectEnter = function (keyCode) {
        var _this = this;
        if (keyCode == 13) {
            this.adding = false;
            this.objectiveService.create(new __WEBPACK_IMPORTED_MODULE_10__model_Objective__["a" /* Objective */](this.newObjective, this.objectives.getValue().length), this.project.id)
                .then(function () {
                _this.edit.push([]);
                _this.viewService.showToast(_this.messageSuccessObjective);
                _this.newObjective = "";
            });
        }
    };
    QuestionCreatorPage.prototype.clear = function () {
        this.adding = false;
        this.newObjective = "";
    };
    QuestionCreatorPage.prototype.goToReorder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__interview_flow_interview_flow__["a" /* InterviewFlowPage */], { "project": this.project });
    };
    QuestionCreatorPage.prototype.updateQuestion = function (question) {
        var _this = this;
        this.questionService.update(question.id, this.project.id, { question: question.question })
            .then(function () { return _this.viewService.showToast(_this.messageSuccessQuestions); })
            .catch(function () { return _this.viewService.showToast(_this.messageFailQuestions); });
    };
    QuestionCreatorPage.prototype.deleteQuestion = function (question) {
        var _this = this;
        // lastQ: true if there will be no more questions after me, else false
        var lastQ = this.getQuestionsSizeByObjective(question.objectifId) == 1;
        this.alertCtrl.create({
            title: this.alertTitleRemove,
            message: lastQ ? this.alertMessageRemoveLastQuestion : this.alertMessageRemoveNotLast,
            buttons: [
                {
                    text: this.alertBtnCancel,
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: this.alertBtnConfirm,
                    handler: function () {
                        _this.questionService.remove(question.id, _this.project.id)
                            .then(function () {
                            if (lastQ) {
                                _this.objectiveService.remove(question.objectifId, _this.project.id)
                                    .then(function () { return _this.viewService.showToast(_this.messageRemoveSuccess); })
                                    .catch(function () { return _this.viewService.showToast(_this.messageRemoveFail); });
                            }
                            else {
                                _this.viewService.showToast(_this.messageRemoveSuccess);
                            }
                        }).catch(function () { return _this.viewService.showToast(_this.messageRemoveFail); });
                    }
                }
            ]
        }).present();
    };
    QuestionCreatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'question-creator',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/question-creator/question-creator.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n  <preparation-segments [pageTitle]="pageSubtitle" [tab]="subTab" [project]="project"></preparation-segments>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'question.creator.title\'|translate}}\n  </h3>\n  <div class="line"></div>\n  <ul>\n    <li *ngFor="let objective of (objectives | async); let i = index">\n      <span class="italic">{{objective.name}}</span>\n      <div *ngIf="createMode && canEdit; then textArea else content"></div>\n      <ng-template #textArea>\n        <ion-textarea placeholder="{{\'question.creator.placeholder.createQuestion\'|translate}}" autosize\n                      [(ngModel)]="questionsTexts[i]">\n        </ion-textarea>\n      </ng-template>\n      <ng-template #content>\n        <ion-card *ngFor="let question of getQuestionByObjective(objective.id); let j = index">\n          <ion-card-content>\n            <ng-container *ngIf="!edit[i][j] || !canEdit ; then questionContent else questionEdit">\n            </ng-container>\n            <ng-template #questionContent>\n              <ion-item>\n                {{question.question}}\n                <button ion-button round class="round" item-end (click)="edit[i][j]=true" *ngIf="canEdit">\n                  <ion-icon name="create"></ion-icon>\n                </button>\n                <button ion-button round class="round" item-end (click)="deleteQuestion(question); edit[i][j] = false"\n                        *ngIf="canEdit">\n                  <ion-icon name="close"></ion-icon>\n                </button>\n              </ion-item>\n            </ng-template>\n            <ng-template #questionEdit>\n              <ion-item>\n                <ion-input [(ngModel)]="question.question"></ion-input>\n                <button ion-button round class="round" item-end\n                        (click)="updateQuestion(question); edit[i][j] = false">\n                  <ion-icon name="checkmark"></ion-icon>\n                </button>\n              </ion-item>\n            </ng-template>\n          </ion-card-content>\n\n        </ion-card>\n        <button *ngIf="editMode == -1 && canEdit" ion-button (click)="showAddQuestion(i)">Add +</button>\n\n        <ion-item *ngIf="editMode == i">\n          <ion-input [(ngModel)]="questionToAdd" (keypress)="detectEnterQuestion($event.keyCode, i)"></ion-input>\n          <button ion-button (click)="editMode = -1" item-end>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-item>\n      </ng-template>\n    </li>\n    <li *ngIf="adding && canEdit">\n      <ion-item>\n        <ion-input [(ngModel)]="newObjective" placeholder="{{\'project.new.placeholder.objectives\'|translate}}"\n                   (keypress)="detectEnter($event.keyCode)"></ion-input>\n        <button ion-button color="light" type="button" item-right (click)="clear()">\n          <ion-icon name="close-circle" (click)="clear()"></ion-icon>\n        </button>\n      </ion-item>\n    </li>\n  </ul>\n\n  <div class="dashed-box" (click)="addObjective()" *ngIf="!adding && (createMode || canEdit)">\n    <div translate>question.creator.addObjective</div>\n  </div>\n\n  <ion-fab right bottom *ngIf="createMode">\n    <button ion-fab color="light" (click)="saveQuestions()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab right bottom *ngIf="!createMode">\n    <button ion-fab color="light" (click)="goToReorder()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/question-creator/question-creator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_persistence_objectives_service__["a" /* ObjectivesService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_view_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_persistence_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], QuestionCreatorPage);
    return QuestionCreatorPage;
}());

//# sourceMappingURL=question-creator.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__analysis_text_analysis_text__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_enum__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Controller of analysis list page.
 * This page display the list on interview for analyse.
 */
var AnalysisPage = /** @class */ (function () {
    /**
     * @name constructor
     * @desc Constructor init our values.
     * @param {NavParams} navParams
     * @param {NavController} navCtrl
     * @param {TranslateService} translate
     * @param {InterviewsService} interviewsService
     * @memberOf AnalysisPage
     */
    function AnalysisPage(navParams, navCtrl, translate, interviewsService) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.interviewsService = interviewsService;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["a" /* analysis */];
        this.project = this.navParams.get("project");
        this.translate.get('analysis.title.main').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.scheduledAnalysis = new Array();
        this.doneAnalysis = new Array();
    }
    /**
     * @name ngOnInit
     * @desc On init, subscribe to observable.
     * @memberOf AnalysisPage
     */
    AnalysisPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get data
        this.interviews = this.interviewsService.getInterviews(this.project.id);
        // Subscriptions
        this.subscriptions = new Array();
        this.subscriptions.push(this.interviews.subscribe(function (interviews) {
            _this.scheduledAnalysis = [];
            _this.doneAnalysis = [];
            interviews.forEach(function (e) {
                if (e.analysis === __WEBPACK_IMPORTED_MODULE_7__util_enum__["a" /* analysisStatus */].scheduled)
                    _this.scheduledAnalysis.push(e);
                else if (e.analysis === __WEBPACK_IMPORTED_MODULE_7__util_enum__["a" /* analysisStatus */].done)
                    _this.doneAnalysis.push(e);
            });
        }));
    };
    /**
     * @name ngOnDestroy
     * @desc On destroy, unsubscribe to all subscribed observable.
     * @memberOf AnalysisPage
     */
    AnalysisPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (e) { return e.unsubscribe(); });
    };
    /**
     * @name goToAnalysisInterview
     * @desc Go to AnalysisText page.
     * @param interviewId: the id of interview.
     * @memberOf AnalysisPage
     */
    AnalysisPage.prototype.goToAnalysisInterview = function (interviewId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__analysis_text_analysis_text__["a" /* AnalysisTextPage */], { "project": this.project, "interviewId": interviewId });
    };
    AnalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'analysis',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/analysis/analysis.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'analysis.title.scheduled\'|translate}}\n  </h3>\n  <div class="line"></div>\n\n  <!-- LIST OF INTERVIEW TO ANALYSE -->\n  <ion-card class="interview" (click)="goToAnalysisInterview(interview.id)" *ngFor="let interview of scheduledAnalysis">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            {{interview.participant}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n              {{interview.analysis}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.jobTitle}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.expertise}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n            {{interview.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <h3>\n    {{\'analysis.title.done\'|translate}}\n  </h3>\n  <div class="line"></div>\n\n  <!-- LIST OF INTERVIEW ANALYSED -->\n  <ion-card class="interview" (click)="goToAnalysisInterview(interview.id)" *ngFor="let interview of doneAnalysis">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            {{interview.participant}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n            {{interview.analysis}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.jobTitle}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.expertise}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n            {{interview.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/analysis/analysis.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__["a" /* InterviewsService */]])
    ], AnalysisPage);
    return AnalysisPage;
}());

//# sourceMappingURL=analysis.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranscriptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_utils__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recording_record_service__ = __webpack_require__(162);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TranscriptionsService = /** @class */ (function () {
    function TranscriptionsService(firestore, httpClient, recordService) {
        this.firestore = firestore;
        this.httpClient = httpClient;
        this.recordService = recordService;
    }
    TranscriptionsService_1 = TranscriptionsService;
    TranscriptionsService.prototype.create = function (transcription, idProject) {
        return this.firestore.collection(TranscriptionsService_1.getPath(idProject)).add(__assign({}, transcription));
    };
    TranscriptionsService.prototype.getTranscriptionById = function (idProject, idTranscription) {
        return this.firestore.doc(TranscriptionsService_1.getPath(idProject) + "/" + idTranscription).valueChanges().share();
    };
    TranscriptionsService.prototype.update = function (idProject, idTranscription, data) {
        return this.firestore.doc(TranscriptionsService_1.getPath(idProject) + "/" + idTranscription).update(data);
    };
    TranscriptionsService.prototype.remove = function (idProject, idTranscription) {
        return this.firestore.doc(TranscriptionsService_1.getPath(idProject) + "/" + idTranscription).delete();
    };
    TranscriptionsService.prototype.saveAudioBlob = function (audioBlob, metadata) {
        var fileReader = new FileReader();
        return this.recordService.promiseFileReaderURL(audioBlob, fileReader).then(function () {
            var promises = [];
            promises.push(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref(metadata.customMetadata.audioId).putString("{\"data\": \"" + fileReader.result + "\"}", 'raw', metadata));
            var temp = __WEBPACK_IMPORTED_MODULE_7__util_utils__["a" /* Utils */].audioPath(metadata.customMetadata.projectId);
            promises.push(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref(temp).put(audioBlob, metadata));
            return Promise.all(promises);
        });
    };
    TranscriptionsService.getAudioByRef = function (refToAudio) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child(refToAudio).getDownloadURL();
    };
    TranscriptionsService.prototype.getAudioBlobByUrl = function (url) {
        return this.httpClient.get(url).toPromise();
    };
    TranscriptionsService.getPath = function (idProj) {
        return __WEBPACK_IMPORTED_MODULE_5__util_constants__["l" /* pathTranscriptions */].replace(__WEBPACK_IMPORTED_MODULE_5__util_constants__["p" /* replaceId */], idProj);
    };
    TranscriptionsService = TranscriptionsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_8__recording_record_service__["a" /* RecordService */]])
    ], TranscriptionsService);
    return TranscriptionsService;
    var TranscriptionsService_1;
}());

//# sourceMappingURL=transcriptions.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.saveImage = function (idProject, idParticipant, imageFile) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref(__WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].imagePath(idProject, idParticipant)).put(imageFile);
    };
    ImageService.prototype.deleteImage = function (idProject, idParticipant) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref(__WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].imagePath(idProject, idParticipant)).delete();
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());

//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 290:
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
webpackEmptyAsyncContext.id = 290;

/***/ }),

/***/ 334:
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
webpackEmptyAsyncContext.id = 334;

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messaging_messaging__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_env__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, translateService, firestore, messaging) {
        var _this = this;
        this.translateService = translateService;
        this.firestore = firestore;
        this.messaging = messaging;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            _this.initTranslation();
            _this.initPersistence();
            _this.initMessaging();
        });
        console.log("Environment Prod " + __WEBPACK_IMPORTED_MODULE_6__app_env__["a" /* ENV */].production);
        console.log("Environment Domain " + __WEBPACK_IMPORTED_MODULE_6__app_env__["a" /* ENV */].firebase.authDomain);
    }
    MyApp.prototype.initTranslation = function () {
        this.translateService.setDefaultLang('en');
        var locale = navigator.language.split('-')[0];
        console.log('i18n initialized with ' + locale);
        this.translateService.use(locale);
    };
    MyApp.prototype.initPersistence = function () {
        this.firestore.firestore.enablePersistence().then(function () {
            console.log("offline persitence enabled");
        })
            .catch(function (err) {
            console.log("failed to enable offline persistance");
        });
    };
    MyApp.prototype.initMessaging = function () {
        console.log("init messaging service");
        this.messaging.initSubscription();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_5__providers_messaging_messaging__["a" /* MessagingProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMainApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyMainApp = /** @class */ (function () {
    function MyMainApp(platform, statusBar, splashScreen, authProvider) {
        this.authProvider = authProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects__["a" /* ProjectsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyMainApp.prototype.ionViewCanEnter = function () {
        return this.authProvider.isLoggedIn();
    };
    MyMainApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/main-app/main-app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/main-app/main-app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyMainApp);
    return MyMainApp;
}());

//# sourceMappingURL=main-app.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_single_project_single__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_new_project_new__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_project_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_concatMap__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_every__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_every__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(navCtrl, projectService) {
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.pageTitle = "All projects";
        this.user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        this.subs = [];
        this.projects = this.projectService.getProjects().share();
        this.showProgress = true;
    }
    ProjectsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.projects.subscribe(function () { return _this.showProgress = false; }));
    };
    ProjectsPage.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ProjectsPage.prototype.gotoProject = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_single_project_single__["a" /* ProjectSinglePage */], { "project": project });
    };
    ProjectsPage.prototype.newProject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__project_new_project_new__["a" /* ProjectNewPage */]);
    };
    ProjectsPage.prototype.ionViewWillLeave = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ProjectsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subs.push(this.projects.subscribe(function () {
            _this.showProgress = false;
        }));
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projects',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/projects/projects.html"*/'<ion-header>\n  <projects-header [pageTitle]="pageTitle"></projects-header>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="showProgress" class="progress-materializecss">\n    <div class="indeterminate"></div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let project of projects | async">\n        <ion-card (click)="gotoProject(project)" tappable>\n          <button ion-item>\n            <ion-card-header>\n              {{project.name}}\n            </ion-card-header>\n            <ion-card-content>\n              <div>\n                {{project.description}}\n              </div>\n            </ion-card-content>\n          </button>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <div class="pointille" (click)="newProject()">\n          <div class="title">\n            Create new project\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/projects/projects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_persistence_project_service__["a" /* ProjectService */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(note) {
        this.isNote = true;
        this.note = note;
    }
    return Note;
}());

//# sourceMappingURL=Note.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Project__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_project_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_single_project_single__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_persistence_objectives_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validators_project_validator__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_Objective__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ProjectNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectNewPage = /** @class */ (function () {
    function ProjectNewPage(navCtrl, projectService, viewService, objectiveService, translate, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.viewService = viewService;
        this.objectiveService = objectiveService;
        this.formBuilder = formBuilder;
        this.pageTitle = 'New Project';
        this.submitAttempt = false;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__model_Project__["a" /* Project */]();
        translate.get("project.new.message.success").take(1).subscribe(function (value) { return _this.messageSuccess = value; });
        translate.get("project.new.message.fail").take(1).subscribe(function (value) { return _this.messageFail = value; });
        translate.get("project.new.button.retry").take(1).subscribe(function (value) { return _this.retryButton = value; });
        this.nameCtrl = formBuilder.control('', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].minLength(3)]), function (control) { return __WEBPACK_IMPORTED_MODULE_10__validators_project_validator__["a" /* ProjectValidator */].check(_this.projectService, control); });
        this.newProjectForm = formBuilder.group({
            name: this.nameCtrl,
            description: [''],
            objectives: ['']
        });
    }
    ProjectNewPage.prototype.save = function () {
        this.submitAttempt = true;
        if (this.newProjectForm.valid) {
            this.addProject();
        }
    };
    ProjectNewPage.prototype.addProject = function () {
        var _this = this;
        var obj = document.getElementById("objectives");
        this.projectService.create(this.project).then(function (projectRef) {
            _this.project.id = projectRef.id;
            var objectives = obj.innerText.trim().split('\n');
            objectives.forEach(function (o, index) {
                _this.objectiveService.create(new __WEBPACK_IMPORTED_MODULE_11__model_Objective__["a" /* Objective */](o, index), projectRef.id);
            });
            _this.viewService.showToast(_this.messageSuccess);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__project_single_project_single__["a" /* ProjectSinglePage */], { "project": _this.project });
        })
            .catch(function () {
            _this.viewService.showToast(_this.messageFail, 5000, 'bottom', function () { return _this.addProject(); }, true, _this.retryButton);
        });
    };
    ProjectNewPage.prototype.reviewChanges = function ($event) {
        var target = $event.target;
        var inner = target.innerHTML.trim();
        inner.includes('<ul>');
        if (!inner.includes("<ul>")) {
            target.innerHTML = "<ul><li>" + target.innerText + "</li></ul>";
        }
    };
    ProjectNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-new',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/project-new/project-new.html"*/'<ion-header>\n  <projects-header [pageTitle]="pageTitle"></projects-header>\n</ion-header>\n\n<ion-content padding>\n  Hi {{user?.displayName}}\n\n\n  <form [formGroup]="newProjectForm">\n    <ion-card>\n      <ion-card-header>\n        {{\'project.new.name\' | translate}}\n      </ion-card-header>\n      <div class="line"></div>\n      <ion-card-content>\n        <ion-item *ngIf="nameCtrl.dirty && nameCtrl.hasError(\'required\')" class="error">\n          <p>Project name is mandatory</p>\n        </ion-item>\n        <ion-item *ngIf="nameCtrl.dirty && nameCtrl.hasError(\'minlength\')" class="error">\n          <p>Project name should be 3 characters min</p>\n        </ion-item>\n        <ion-item *ngIf="nameCtrl.hasError(\'existed\')" class="error">\n          <p>Project name already exists. Please choose another name.</p>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="project.name" placeholder="{{\'project.new.placeholder.name\'| translate}}"\n                     formControlName="name" type="text"\n                     [class.invalid]="!nameCtrl.valid && (nameCtrl.dirty || submitAttempt)">\n          </ion-input>\n          <ion-spinner *ngIf="nameCtrl.pending" item-end></ion-spinner>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        {{\'project.new.description\' | translate}}\n      </ion-card-header>\n      <div class="line"></div>\n      <ion-card-content>\n        <ion-input [(ngModel)]="project.description" placeholder="{{\'project.new.placeholder.description\'| translate}}"\n                   formControlName="description" type="text">\n\n        </ion-input>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        {{\'project.new.objectives\'|translate}}\n\n        <div translate class="subtitle">project.new.objectivesExplanation</div>\n\n      </ion-card-header>\n      <div class="line"></div>\n      <ion-card-content>\n        <section id="objectives" contenteditable="true" (input)="reviewChanges($event)" formControlName="objectives"\n                 type="text" ngDefaultControl>\n          <ul>\n            <li></li>\n          </ul>\n        </section>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <ion-fab right bottom>\n    <button ion-fab color="light" [disabled]="newProjectForm.invalid" (click)="save()">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<!--<ion-footer>-->\n<!--<custom-footer></custom-footer>-->\n<!--</ion-footer>-->\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/project-new/project-new.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_persistence_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_persistence_objectives_service__["a" /* ObjectivesService */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */]])
    ], ProjectNewPage);
    return ProjectNewPage;
}());

//# sourceMappingURL=project-new.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Objective; });
var Objective = /** @class */ (function () {
    function Objective(name, index) {
        this.name = name;
        this.order = index;
    }
    return Objective;
}());

//# sourceMappingURL=Objective.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_messaging__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_messaging___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_messaging__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth__ = __webpack_require__(73);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagingProvider = /** @class */ (function () {
    function MessagingProvider(firestore, auth) {
        var _this = this;
        this.firestore = firestore;
        this.auth = auth;
        this.messaging = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["messaging"]();
        console.log("MessagingProvider initialized");
        navigator.serviceWorker.getRegistration().then(function (registration) {
            _this.registration = registration;
            _this.messaging.useServiceWorker(registration);
        });
    }
    MessagingProvider.prototype.initSubscription = function () {
        var _this = this;
        this.userSubscr = this.auth.user$
            .filter(function (user) { return !!user; }) // filter null
            .take(1) // take first real user
            .subscribe(function (user) {
            if (user) {
                console.log("Subscribe on messages : " + user.displayName);
                _this.getPermission(user);
                _this.monitorRefresh(user);
                _this.receiveMessages();
            }
        });
    };
    // get permission to send messages
    MessagingProvider.prototype.getPermission = function (user) {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            console.log("token " + +token);
            _this.saveToken(user, token);
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    // Listen for token refresh
    MessagingProvider.prototype.monitorRefresh = function (user) {
        var _this = this;
        this.messaging.onTokenRefresh(function () {
            _this.messaging.getToken()
                .then(function (refreshedToken) {
                console.log('Token refreshed.');
                _this.saveToken(user, refreshedToken);
            })
                .catch(function (err) { return console.log(err, 'Unable to retrieve new token'); });
        });
    };
    // save the permission token in firestore
    MessagingProvider.prototype.saveToken = function (user, token) {
        var currentTokens = user.fcmTokens || {};
        // If token does not exist in firestore, update db
        if (!currentTokens[token]) {
            console.log("token to save " + token);
            var userRef = this.firestore.collection('users').doc(user.uid);
            var tokens = __assign({}, currentTokens, (_a = {}, _a[token] = true, _a));
            userRef.update({ fcmTokens: tokens });
        }
        var _a;
    };
    // used to show message when app is open
    MessagingProvider.prototype.receiveMessages = function () {
        var _this = this;
        this.messaging.onMessage(function (payload) {
            console.log("Message received. " + payload);
            if (!payload.notification)
                return;
            var notificationTitle = payload.notification.title;
            var notificationOptions = {
                body: payload.notification.body,
                icon: payload.notification.icon
            };
            _this.registration.showNotification(notificationTitle, notificationOptions);
        });
    };
    MessagingProvider.prototype.ngOnDestroy = function () {
        console.log("unsubscribe messaging subscriptions");
        this.userSubscr.unsubscribe();
    };
    MessagingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_4__auth_auth__["a" /* AuthProvider */]])
    ], MessagingProvider);
    return MessagingProvider;
}());

//# sourceMappingURL=messaging.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewFlowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_question_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_Note__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InterviewFlowPage = /** @class */ (function () {
    function InterviewFlowPage(navParams, translate, questionService, viewService) {
        var _this = this;
        this.navParams = navParams;
        this.translate = translate;
        this.questionService = questionService;
        this.viewService = viewService;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["m" /* preparation */];
        this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["n" /* questionCreator */];
        this.edit = false;
        this.questions = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.notes = new __WEBPACK_IMPORTED_MODULE_8__model_Note__["a" /* Note */]();
        this.subs = [];
        this.savingOrder = false;
        this.project = this.navParams.get("project");
        this.translate.get('tabs.title.preparation').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.translate.get('tabs.title.questionCreator').take(1).subscribe(function (value) { return _this.pageSubtitle = value; });
        this.translate.get('interviewFlow.toast.success.reorder').take(1)
            .subscribe(function (value) { return _this.messageReorderSuccess = value; });
        this.translate.get('interviewFlow.toast.error.reorder').take(1).subscribe(function (value) { return _this.messageReorderFail = value; });
        this.translate.get('interviewFlow.toast.success.notes').take(1).subscribe(function (value) { return _this.messageNoteSuccess = value; });
        this.translate.get('interviewFlow.toast.error.notes').take(1).subscribe(function (value) { return _this.messageNoteFail = value; });
        this.translate.get('interviewFlow.button.reorder').take(1).subscribe(function (value) { return _this.buttonReorder = value; });
        this.translate.get('interviewFlow.button.done').take(1).subscribe(function (value) { return _this.buttonDoneReorder = value; });
        this.myNotes =
            this.questionService.getNote(this.project.id).map(function (value) { return value.length > 0 ? value[0] : new __WEBPACK_IMPORTED_MODULE_8__model_Note__["a" /* Note */](); }).share();
    }
    Object.defineProperty(InterviewFlowPage.prototype, "buttonReorderText", {
        get: function () {
            return this.edit ? this.buttonDoneReorder : this.buttonReorder;
        },
        enumerable: true,
        configurable: true
    });
    InterviewFlowPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.questionService.getOrderedQuestions(this.project.id).subscribe(function (value) {
            _this.questions.next(value);
        }), this.myNotes.subscribe(function (value) {
            _this.notes = value;
        }));
    };
    InterviewFlowPage.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) { return s.unsubscribe(); });
    };
    InterviewFlowPage.prototype.reorderItems = function ($event) {
        var questionsLocal = this.questions.getValue();
        this.reorder(questionsLocal, $event.from, $event.to);
        this.questions.next(questionsLocal);
    };
    InterviewFlowPage.prototype.reorder = function (array, fromIndex, toIndex) {
        var elementFrom = array[fromIndex];
        array.splice(fromIndex, 1);
        array.splice(toIndex, 0, elementFrom);
        array.forEach(function (elt, index) { return elt.order = index; });
    };
    InterviewFlowPage.prototype.addNotes = function () {
        this.addingNotes = true;
    };
    InterviewFlowPage.prototype.toggleEdit = function () {
        var _this = this;
        if (this.edit) {
            this.savingOrder = true;
            // save everything
            this.questionService.updateOrderBasedOnIndex(this.project.id, this.questions.getValue()).then(function (value) {
                _this.edit = false;
                _this.savingOrder = false;
                _this.viewService.showToast(_this.messageReorderSuccess);
            }).catch(function (reason) {
                _this.viewService.showToast(_this.messageReorderFail + ", reason: " + reason, 5000);
                _this.savingOrder = false;
            });
        }
        else {
            this.edit = true;
        }
    };
    InterviewFlowPage.prototype.saveNote = function () {
        var _this = this;
        // save (or update ?)
        if (this.notes.id) {
            this.questionService.updateNote(this.notes.note, this.project.id, this.notes.id).then(function (value) {
                _this.viewService.showToast(_this.messageNoteSuccess);
                _this.addingNotes = false;
            }).catch(function (reason) {
                _this.viewService.showToast(_this.messageNoteFail, 5000);
            });
        }
        else {
            this.questionService.createNote(this.notes.note, this.project.id).then(function (value) {
                _this.viewService.showToast(_this.messageNoteSuccess);
                _this.addingNotes = false;
            }).catch(function (reason) {
                _this.viewService.showToast(_this.messageNoteFail, 5000);
            });
        }
    };
    InterviewFlowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'interview-flow',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-flow/interview-flow.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n  <preparation-segments [pageTitle]="pageSubtitle" [tab]="subTab" [project]="project"></preparation-segments>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'interviewFlow.title\'|translate}}\n  </h3>\n  <div class="line"></div>\n  <ng-container *ngIf="addingNotes; then notesCard else notAdding"></ng-container>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-item>Questions\n        <button ion-button clear item-right (click)="toggleEdit()" [disabled]="savingOrder">\n          <ion-spinner *ngIf="savingOrder"></ion-spinner>\n          {{buttonReorderText}}\n        </button>\n      </ion-item>\n    </ion-list-header>\n    <ion-item-group reorder="{{edit}}" (ionItemReorder)="reorderItems($event)">\n      <ion-item *ngFor="let question of (questions | async); let i = index">\n        {{i}}. &nbsp;&nbsp;{{question.question}}\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ng-template #notAdding>\n    <ng-container *ngIf="!notes.id; then toAddNotes else previewNotes"></ng-container>\n  </ng-template>\n\n  <ng-template #notesCard>\n    <ion-card>\n      <ion-card-header>\n        {{\'interviewFlow.notes.title\'|translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-textarea [(ngModel)]="notes.note">\n\n          </ion-textarea>\n          <button item-right (click)="saveNote()">\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n  <ng-template #toAddNotes>\n    <div class="pointille" (click)="addNotes()">\n      <div translate class="title">interviewFlow.addNotes</div>\n    </div>\n  </ng-template>\n  <ng-template #previewNotes>\n    <ion-card>\n      <ion-card-header>\n        <ion-item>\n          {{\'interviewFlow.notes.title\'|translate}}\n          <button item-end (click)="this.addingNotes = true">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        {{notes.note}}\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-flow/interview-flow.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_persistence_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__["a" /* ViewService */]])
    ], InterviewFlowPage);
    return InterviewFlowPage;
}());

//# sourceMappingURL=interview-flow.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interview_record_interview_record__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_enum__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Controller of interview list page.
 * This page display the list of interviews.
 */
var InterviewPage = /** @class */ (function () {
    /**
     * @name constructor
     * @desc Constructor init our values.
     * @param {NavParams} navParams
     * @param {NavController} navCtrl
     * @param {TranslateService} translate
     * @param {InterviewsService} interviewsService
     * @memberOf InterviewPage
     */
    function InterviewPage(navParams, navCtrl, translate, interviewsService) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.interviewsService = interviewsService;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["d" /* interviews */];
        this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["r" /* upComingInterviews */];
        this.project = this.navParams.get("project");
        this.translate.get('interview.title').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.interviews = [];
        this.filteredInterviews = [];
    }
    /**
     * @name ngOnInit
     * @desc On init, subscribe to observable.
     * @memberOf InterviewPage
     */
    InterviewPage.prototype.ngOnInit = function () {
        var _this = this;
        // Subcriptions
        this.subscriptions = new Array();
        this.subscriptions.push(this.interviewsService.getInterviews(this.project.id).subscribe(function (data) {
            _this.interviews = data;
            if (_this.subTab === __WEBPACK_IMPORTED_MODULE_2__util_constants__["r" /* upComingInterviews */]) {
                _this.filterList(false);
            }
            else {
                _this.filterList(true);
            }
        }));
    };
    /**
     * @name ngOnDestroy
     * @desc On destroy, unsubscribe to all subscribed observable.
     * @memberOf InterviewPage
     */
    InterviewPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @name filterList
     * @desc Filter the list of interviews.
     * @param {boolean} filter
     * @memberOf InterviewPage
     */
    InterviewPage.prototype.filterList = function (filter) {
        if (filter) {
            this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["b" /* finishedInterviews */];
            this.filteredInterviews = this.interviews.filter(function (e) { return e.status === __WEBPACK_IMPORTED_MODULE_7__util_enum__["b" /* interviewStatus */].done; });
        }
        else {
            this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["r" /* upComingInterviews */];
            this.filteredInterviews = this.interviews.filter(function (e) { return e.status !== __WEBPACK_IMPORTED_MODULE_7__util_enum__["b" /* interviewStatus */].done; });
        }
    };
    /**
     * @name goToInterview
     * @desc Go to interview's recording page.
     * @param {Interview} interview
     * @memberOf InterviewPage
     */
    InterviewPage.prototype.goToInterview = function (interview) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__interview_record_interview_record__["a" /* InterviewRecordPage */], { "project": this.project, "interviewId": interview.id });
    };
    InterviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'interview',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview/interview.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n  <interview-segment [tab]="subTab" (filter)="filterList($event.filter)"></interview-segment>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'interview.title\'|translate}}\n  </h3>\n  <div class="line"></div>\n\n  <!-- THE LIST OF INTERVIEWS -->\n  <ion-card class="interview" (click)="goToInterview(interview)" *ngFor="let interview of filteredInterviews">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            {{interview.participant}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n            {{interview.status}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.jobTitle}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            {{interview.expertise}}\n          </ion-col>\n          <ion-col col-6 class="text-right">\n            {{interview.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview/interview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__["a" /* InterviewsService */]])
    ], InterviewPage);
    return InterviewPage;
}());

//# sourceMappingURL=interview.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_question_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_objectives_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_persistence_project_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_recording_record_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__analysis_analysis__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_persistence_transcriptions_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_utils__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_env__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Controller of interview record page.
 * This page manage the recording of an interview.
 */
var InterviewRecordPage = /** @class */ (function () {
    /**
     * @name constructor
     * @desc Constructor init our values.
     * @param {NavParams} navParams
     * @param {TranslateService} translate
     * @param {InterviewsService} interviewsService
     * @param {QuestionService} questionService
     * @param {ObjectivesService} objectivesService
     * @param {RecordService} recordService
     * @param {TranscriptionsService} transcriptionsService
     * @param {ProjectService} projectService
     * @param {NavController} navCtrl
     * @param {AuthProvider} authService
     * @memberOf InterviewRecordPage
     */
    function InterviewRecordPage(navParams, translate, interviewsService, questionService, objectivesService, recordService, transcriptionsService, projectService, navCtrl, authService) {
        var _this = this;
        this.navParams = navParams;
        this.translate = translate;
        this.interviewsService = interviewsService;
        this.questionService = questionService;
        this.objectivesService = objectivesService;
        this.recordService = recordService;
        this.transcriptionsService = transcriptionsService;
        this.projectService = projectService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.tab = __WEBPACK_IMPORTED_MODULE_7__util_constants__["d" /* interviews */];
        this.project = this.navParams.get("project");
        this.interviewId = this.navParams.get('interviewId');
        this.translate.get('tabs.title.interviews').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.selectedQuestion = 0;
        this.timestampTotal = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.inPause = true;
        this.defaultTags = [{
                color: "#000000",
                type: "Commentary",
            }, {
                color: "#b20406",
                type: "Important",
            }, {
                color: "#243cd1",
                type: "Need",
            }, {
                color: "#2f9b42",
                type: "Joker",
            }];
        this.limitRequestTries = 5;
        this.totalRequestTries = 0;
        this.channel = [];
        this.channelSize = 0;
        this.questionTimeTag = "questionTime";
        this.audioIsUpToDate = false;
        this.refToAudio = null;
    }
    /**
     * @name ngOnInit
     * @desc On init, subscribe to observable.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get data
        this.questions = this.questionService.getOrderedQuestions(this.project.id);
        this.objectives = this.objectivesService.getOrderedObjectives(this.project.id);
        this.interview = this.interviewsService.getInterviewById(this.project.id, this.interviewId);
        this.note = this.questionService.getNote(this.project.id);
        // Subscription
        this.subscriptions = new Array();
        this.subscriptions.push(this.questions.subscribe(function (questions) {
            _this.questionTab = questions;
        }));
        this.subscriptions.push(this.interview.subscribe(function (interview) {
            _this.interviewRef = interview;
            _this.tags = interview.tags;
            _this.numberTags = interview.tags.filter((function (x) { return x.type !== _this.questionTimeTag; })).length;
            _this.tags.sort(function (x1, x2) {
                return x1.timestamp - x2.timestamp;
            });
            _this.refToAudio = interview.refToAudio;
            if (interview.refToAudio && !_this.audioIsUpToDate) {
                // Construct the audio blob
                __WEBPACK_IMPORTED_MODULE_11__providers_persistence_transcriptions_service__["a" /* TranscriptionsService */].getAudioByRef(interview.refToAudio).then(function (url) {
                    _this.transcriptionsService.getAudioBlobByUrl(url).then(function (audioBlob) {
                        _this.audioBlob = __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].b64toBlob(audioBlob.data.slice(22), 'audio/wav', 512);
                        _this.audioPlayer = new Audio(window.URL.createObjectURL(_this.audioBlob));
                        var fileReaderBuffer = new FileReader();
                        _this.recordService.promiseFileReaderArrayBuffer(_this.audioBlob, fileReaderBuffer).then(function () {
                            _this.channel = __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].dataViewToArray(new DataView(fileReaderBuffer.result));
                            _this.channelSize = _this.channel.length * 2048;
                        });
                    }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err); });
                });
                _this.timestampTotal = interview.duration * 1000;
                _this.seconds = (_this.timestampTotal / 1000) % 60;
                _this.minutes = (_this.timestampTotal / 1000) / 60;
            }
            _this.audioIsUpToDate = true;
        }));
        this.subscriptions.push(this.note.subscribe());
    };
    /**
     * @name ngOnDestroy
     * @desc On destroy, unsubscribe to all subscribed observable.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (e) { return e.unsubscribe(); });
    };
    /**
     * @name setFocusQuestion
     * @desc Set the focus to a question (default first).
     * @param {number} index: the index of question to focus.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.setFocusQuestion = function (index) {
        var oldQuestion = this.selectedQuestion;
        this.selectedQuestion = index;
        if (oldQuestion !== this.selectedQuestion) {
            if (!this.inPause) {
                this.addTag("#000000", this.questionTimeTag, this.questionTab[oldQuestion].id);
            }
        }
    };
    /**
     * @name updateTotalTimestamp
     * @desc Update timestamp each time component refresh it.
     * @param {} event: the event with sended data.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.updateTotalTimestamp = function (event) {
        this.timestampTotal = event.timestampTotal;
        this.seconds = (event.timestampTotal / 1000) % 60;
        this.minutes = (event.timestampTotal / 1000) / 60;
    };
    /**
     * @name startStopRecording
     * @desc Start/Stop recording when timer raises start_stop event.
     * @param {} event: the event with sended data.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.startStopRecording = function (event) {
        if (event.value) {
            // PLAY
            this.inPause = false;
            this.recordService.startRecordingFunction(this.channel, this.channelSize);
        }
        else {
            // PAUSE
            this.inPause = true;
            var record = this.recordService.stopRecordingFunction();
            this.audioPlayer = record.audio;
            this.audioBlob = record.blob;
            this.channel = record.channel;
            this.channelSize = record.channelSize;
            this.addTag("#000000", this.questionTimeTag, this.questionTab[this.selectedQuestion].id);
        }
    };
    /**
     * @name saveInterview
     * @desc Save the interview into database.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.saveInterview = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__analysis_analysis__["a" /* AnalysisPage */], { "project": this.project }).then(function () {
            _this.save();
        });
    };
    /**
     * @name save()
     * @desc Send all data to cloud function to persist transcription and audio.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.save = function () {
        // TODO FIX ERROR HttpResponse
        var _this = this;
        // Remove ref to avoid playing audio during updating in analysis
        var config = {
            enableWordTimeOffsets: true,
            encoding: "WAV",
            sampleRateHertz: 44100,
            languageCode: "fr-FR",
        };
        var audioId = this.refToAudio;
        if (!this.refToAudio) {
            audioId = __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].audioPath(this.project.id);
        }
        // Metadata needed by cloud function
        var metadata = {
            customMetadata: {
                'tags': JSON.stringify(this.tags),
                'interviewId': this.interviewId,
                'projectId': this.project.id,
                'userId': this.authService.getUserId,
                'config': JSON.stringify(config),
                'duration': this.audioPlayer.duration,
                'audioId': audioId
            }
        };
        // Save the audio into storage
        this.transcriptionsService.saveAudioBlob(this.audioBlob, metadata).then(function (data) {
            // Change the state of project
            _this.projectService.update(_this.project.id, {
                preparation: false,
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
            });
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
        });
    };
    InterviewRecordPage.prototype.request = function (uri) {
        var _this = this;
        this.recordService.httpGetAsync(__WEBPACK_IMPORTED_MODULE_13__app_env__["a" /* ENV */].urlCloudFunctionSpeech, "fr-FR", this.tags, this.interviewId, this.project.id, this.authService.getUserId, uri).then(function () {
            _this.totalRequestTries = 0;
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
            if (err.status !== 200 && _this.totalRequestTries < _this.limitRequestTries) {
                _this.request(uri);
                _this.totalRequestTries++;
            }
        });
    };
    /**
     * @name addTag
     * @desc Add a tag and save it.
     * @param {string} color: the color.
     * @param {string} type: the type.
     * @param {string} refToQuestion: the ref to the question.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.addTag = function (color, type, refToQuestion) {
        var tagToAdd = {
            color: color,
            type: type,
            refToQuestion: refToQuestion,
            timestamp: this.timestampTotal,
            id: this.tags.length,
        };
        this.tags.push(tagToAdd);
        this.interviewsService.update(this.project.id, this.interviewId, {
            tags: this.tags,
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
        });
    };
    /**
     * @name updateCommentary
     * @desc Update commentary in database.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.updateCommentary = function () {
        this.interviewsService.update(this.project.id, this.interviewId, {
            tags: this.tags,
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
        });
    };
    /**
     * @name deleteTag
     * @desc Delete a tag.
     * @param {string} id: the id of the tag.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.deleteTag = function (id) {
        this.tags = this.tags.filter(function (tag) { return tag.id !== id; });
        this.interviewsService.update(this.project.id, this.interviewId, {
            tags: this.tags,
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].error(err);
        });
    };
    /**
     * @name getFormatted
     * @desc Return formatted timer's time.
     * @returns {string} the formatted time.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.getFormattedTime = function () {
        return Math.floor(this.minutes) + ":" + __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].pad2(Math.floor(this.seconds));
    };
    /**
     * @name getFormattedTimeTag
     * @desc Return formatted time.
     * @returns {string} the formatted time.
     * @memberOf InterviewRecordPage
     */
    InterviewRecordPage.prototype.getFormattedTimeTag = function (time) {
        return Math.floor((time / 1000) / 60) + ":" + __WEBPACK_IMPORTED_MODULE_12__util_utils__["a" /* Utils */].pad2(Math.floor((time / 1000) % 60));
    };
    InterviewRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interview-record',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-record/interview-record.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n</ion-header>\n\n<ion-content class="background-content" padding>\n  <ion-grid>\n    <ion-row align-items-start>\n      <ion-col col-3 align-self-start class="left-pad-sm">\n        <ion-row>\n          <h2>{{(interview | async)?.participant}}</h2>\n        </ion-row>\n        <ion-row>\n          <h3>{{(interview | async)?.jobTitle}}</h3>\n        </ion-row>\n      </ion-col>\n\n      <!-- TIMER COMPONENT -->\n      <ion-col class="text-right" col-2 align-self-center>\n        <timer [time]="timestampTotal" icon="mic" (update)="updateTotalTimestamp($event)" (play_stop)="startStopRecording($event)"></timer>\n      </ion-col>\n      <ion-col class="text-left" *ngIf="!inPause" col-2 align-self-center class="text-timer">\n        {{\'interview.record.pauseTimer\' | translate}}\n      </ion-col>\n      <ion-col class="text-left" *ngIf="inPause && timestampTotal === 0" col-2 align-self-center class="text-timer">\n        {{\'interview.record.startTimer\' | translate}}\n      </ion-col>\n      <ion-col class="text-left" *ngIf="inPause && timestampTotal !== 0" col-2 align-self-center class="text-timer">\n        {{\'interview.record.resumeTimer\' | translate}}\n      </ion-col>\n\n      <!-- END INTERVIEW BUTTON -->\n      <ion-col offset-1 col-4 align-self-center>\n        <ion-row *ngIf="inPause && timestampTotal !== 0" class="end-button" align-items-end>\n          <button ion-button (click)="saveInterview()">{{\'interview.record.finish\' | translate}}</button>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- THE NOTE TO DISPLAY -->\n    <ion-row class="intro">\n      <h4>{{ \'interview.record.introduction\' | translate }}</h4>\n      <ion-col col-12>\n        <p *ngFor="let n of note | async">{{n.note}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <h4>{{\'interview.record.questions\' | translate}}</h4>\n      <!-- THE LIST OF QUESTIONS -->\n      <ion-col col-12 class="question" *ngFor="let question of questions | async; let i = index" (click)="setFocusQuestion(i)">\n        <h3>{{i + 1}}. {{question.question}}</h3>\n        <div class="selected-question text-center" *ngIf="selectedQuestion === i">\n          <span>rec</span>\n          <ion-icon name="radio-button-on"></ion-icon>\n        </div>\n        <div *ngFor="let tag of tags; let i = index">\n          <div class="tag" *ngIf="tag && tag.refToQuestion === question.id && tag.type !== questionTimeTag">\n            <ion-icon class="icon-tag-mini" name="bookmark" [ngStyle]="{\'color\': tag.color}"></ion-icon>\n            <button ion-button color="danger" (click)="deleteTag(tag.id)" class="delete-button">Delete</button>\n            <span class="type">{{tag.type}} </span>\n            <span class="time">{{getFormattedTimeTag(tag.timestamp)}}</span>\n            <ion-input type="text" [(ngModel)]="tag.commentary" placeholder="{{\'interview.record.writeNotes\' | translate}}" (change)="updateCommentary()"></ion-input>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- FOOTER TAGS -->\n<ion-footer>\n  <ion-grid>\n    <!--ion-row>\n      <ion-col class="tag-title" align-self-center>\n        {{\'interview.record.tags\' | translate}}\n      </ion-col>\n    </ion-row-->\n\n    <ion-row class="text-center">\n      <ion-col col-2 class="timer">\n        {{getFormattedTime()}}\n      </ion-col>\n\n      <ion-col col-2>\n        <div class="bookmarks">\n          <div>{{numberTags}}</div>\n          <span>bookmarks</span>\n          <div class="clearfix"></div>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-row>\n          <ion-col class="col-tag" *ngFor="let tag of defaultTags">\n            <ion-icon class="icon-tag" name="bookmark" [ngStyle]="{\'color\': tag.color}" (click)="addTag(tag.color, tag.type, questionTab[selectedQuestion].id)"></ion-icon>\n            <span class="type-tag">{{tag.type}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-record/interview-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_9__providers_persistence_interviews_service__["a" /* InterviewsService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_persistence_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_4__providers_persistence_objectives_service__["a" /* ObjectivesService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_recording_record_service__["a" /* RecordService */], __WEBPACK_IMPORTED_MODULE_11__providers_persistence_transcriptions_service__["a" /* TranscriptionsService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_persistence_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], InterviewRecordPage);
    return InterviewRecordPage;
}());

//# sourceMappingURL=interview-record.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_persistence_transcriptions_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_persistence_question_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_recording_record_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_utils__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Controller of analysis text page.
 * This page display the recorded text.
 */
var AnalysisTextPage = /** @class */ (function () {
    /**
     * @name constructor
     * @desc Constructor init our values.
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {TranslateService} translate
     * @param {TranscriptionsService} transcriptionsService
     * @param {QuestionService} questionService
     * @param {InterviewsService} interviewsService
     * @param {RecordService} recordService
     * @param {Platform} platform
     * @memberOf AnalysisTextPage
     */
    function AnalysisTextPage(navCtrl, navParams, translate, transcriptionsService, questionService, interviewsService, recordService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.transcriptionsService = transcriptionsService;
        this.questionService = questionService;
        this.interviewsService = interviewsService;
        this.recordService = recordService;
        this.platform = platform;
        this.subTab = __WEBPACK_IMPORTED_MODULE_4__util_constants__["o" /* rawData */];
        this.project = this.navParams.get("project");
        this.interviewId = this.navParams.get("interviewId");
        this.playTimer = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.inPause = true;
        this.isRawText = true;
        this.draggable = false;
        this.totalTimer = 0;
        this.questionTimeTag = "questionTime";
    }
    /**
     * @name ngOnInit
     * @desc On init, subscribe to observable.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get data
        this.interview = this.interviewsService.getInterviewById(this.project.id, this.interviewId);
        this.intro = this.questionService.getNote(this.project.id);
        this.subscriptions = new Array();
        // Subcriptions
        this.subscriptions.push(this.interview.subscribe(function (interview) {
            _this.tags = interview.tags;
            _this.filteredTags = interview.tags.filter(function (tag) { return tag.type !== _this.questionTimeTag; });
            // Get the text if ref exists
            if (interview.refToText) {
                // Get the transcription
                _this.transcription = _this.transcriptionsService.getTranscriptionById(_this.project.id, interview.refToText);
                // If subscription already exists we need to override it
                if (_this.subscriptions[1])
                    _this.subscriptions[1].unsubscribe();
                _this.subscriptions[1] = _this.transcription.subscribe(function (transcription) {
                    _this.currentPlainText = transcription.plainText;
                    _this.currentCutText = transcription.textByQuestions;
                    // If tab of cut text not null, subscribe to it and memorise data
                    if (_this.currentCutText) {
                        _this.currentCutText.forEach(function (q) {
                            _this.subscriptions.push(_this.questionService.getQuestionById(_this.project.id, q.refToQuestion).subscribe(function (data) {
                                q.questionName = data.question;
                                q.order = data.order;
                            }));
                        });
                        _this.currentCutText = _this.currentCutText.sort(function (x, y) { return x.order - y.order; });
                    }
                });
                // Remember the ref
                _this.transcriptionId = interview.refToText;
            }
            else {
                _this.transcription = null;
            }
            // Get the audio if ref exists
            if (interview.refToAudio) {
                _this.isAudio = true;
                // Get the file as a promise
                __WEBPACK_IMPORTED_MODULE_2__providers_persistence_transcriptions_service__["a" /* TranscriptionsService */].getAudioByRef(interview.refToAudio).then(function (url) {
                    _this.transcriptionsService.getAudioBlobByUrl(url).then(function (audioBlob) {
                        var blob = __WEBPACK_IMPORTED_MODULE_8__util_utils__["a" /* Utils */].b64toBlob(audioBlob.data.slice(22), '', 512);
                        _this.audioPlayer = new Audio(window.URL.createObjectURL(blob));
                        _this.totalTimer = Math.floor(interview.duration * 1000);
                    }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_8__util_utils__["a" /* Utils */].error(err); });
                });
            }
            else {
                // Hiding the player / timeline
                _this.isAudio = false;
                _this.totalTimer = 0;
            }
        }));
        this.subscriptions.push(this.intro.subscribe());
    };
    /**
     * @name ngOnDestroy
     * @desc On destroy, unsubscribe to all subscribed observable.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (e) { return e.unsubscribe(); });
    };
    /**
     * @name getTimer
     * @desc Get the timer if sent by component to us.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.getTimer = function (event) {
        this.playTimerComponent = event.timerComponent;
    };
    /**
     * @name updateTotalTimstamp
     * @desc Update timestamp each time component refresh it.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.updateTotalTimestamp = function (event) {
        this.playTimer = event.timestampTotal;
        this.seconds = (event.timestampTotal / 1000) % 60;
        this.minutes = (event.timestampTotal / 1000) / 60;
        // Prevent to exceed totalTimer value => stop the player
        if (this.playTimer >= this.totalTimer) {
            this.playTimerComponent.stop();
            this.startStopPlaying({ value: false });
            this.playTimer = this.totalTimer;
        }
    };
    /**
     * @name startStopPlaying
     * @desc Start/Stop playing when timer raises start_stop event.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.startStopPlaying = function (event) {
        if (event.value) {
            // If play is called at the end of the audio, it will reset the audio player.
            if (this.playTimer === this.totalTimer) {
                this.updateTotalTimestamp({ timestampTotal: 0 });
                this.playTimerComponent.backward();
                this.audioPlayer.currentTime = 0;
            }
            __WEBPACK_IMPORTED_MODULE_7__providers_recording_record_service__["a" /* RecordService */].play(this.audioPlayer);
            this.inPause = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_7__providers_recording_record_service__["a" /* RecordService */].stop(this.audioPlayer);
            this.inPause = true;
        }
    };
    /**
     * @name setDrag
     * @desc Set the timeline cursor draggable or not
     * @param {boolean} draggable: set timeline to draggable or not.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.setDrag = function (draggable) {
        this.draggable = draggable;
    };
    /**
     * @name dragPlayCursor
     * @desc On drag on timeline, move play cursor.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.dragPlayCursor = function (event) {
        if (this.draggable) {
            this.moveCursor(event);
        }
    };
    /**
     * @name moveCursor
     * @desc Move the play cursor.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.moveCursor = function (event) {
        if (this.inPause) {
            var totalTemp = this.platform.width() - 33;
            var currentTemp = event.screenX - 16;
            this.playTimer = ((currentTemp / totalTemp) * this.totalTimer);
            this.audioPlayer.currentTime = this.playTimer / 1000;
            // Avoid moving before the beginning
            if (this.playTimer < 0) {
                this.playTimer = 0;
            }
            // Avoid moving after the end
            if (this.playTimer > this.totalTimer) {
                this.playTimer = this.totalTimer;
            }
        }
    };
    /**
     * @name refreshValues
     * @desc On click on tag, the ref will be sent.
     * @param {} event: the event with sended data.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.refreshValues = function (event) {
        // TODO WAITING SPEC
    };
    /**
     * @name forward
     * @desc Add or remove seconds to player.
     * @param {number} time: the duration to increase.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.forward = function (time) {
        this.updateTotalTimestamp({ timestampTotal: this.playTimer + time * 1000 });
        this.audioPlayer.currentTime = this.playTimer / 1000;
        // Set bounds to player
        if (this.playTimer < 0)
            this.updateTotalTimestamp({ timestampTotal: 0 });
        if (this.playTimer >= this.totalTimer)
            this.updateTotalTimestamp({ timestampTotal: this.totalTimer });
    };
    /**
     * @name switchTextType
     * @desc Set the display of raw text or synthetic data.
     * @param {boolean} isRawText: the value to set.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.switchTextType = function (isRawText) {
        this.isRawText = isRawText;
    };
    /**
     * @name updatePlainText
     * @desc Update raw text when modified
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.updatePlainText = function () {
        this.transcriptionsService.update(this.project.id, this.transcriptionId, { textByQuestions: this.currentCutText }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_8__util_utils__["a" /* Utils */].error(err);
        });
    };
    /**
     * @name getFormatted
     * @desc Return formatted time.
     * @returns {string} the formatted time.
     * @memberOf AnalysisTextPage
     */
    AnalysisTextPage.prototype.getFormattedTime = function () {
        return Math.floor(this.minutes) + ":" + __WEBPACK_IMPORTED_MODULE_8__util_utils__["a" /* Utils */].pad2(Math.floor(this.seconds));
    };
    AnalysisTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analysis-text',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/analysis-text/analysis-text.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          {{\'analysis.text.back\' | translate}}\n        </ion-col>\n        <ion-col col-4 offset-1>\n          {{(interview | async)?.participant}}\n        </ion-col>\n        <ion-col col-3>\n          {{(interview | async)?.date | date: \'dd/MM/yyyy hh:mm\'}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-title>\n  </ion-navbar>\n\n  <analysis-segment [tab]="subTab" (switch)="switchTextType($event.switch)"></analysis-segment>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n\n      </ion-col>\n      <ion-col *ngIf="transcriptionId && isRawText" col-8 class="analysis-container">\n        <!-- RAW TEXT TO DISPLAY -->\n        <ion-row class="intro">\n          <h4>{{ \'analysis.text.intro\' | translate }}</h4>\n          <ion-col col-12>\n            <p *ngFor="let n of intro | async">{{n.note}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <h4 class="question">{{ \'analysis.text.questions\' | translate }}</h4>\n          <ion-col class="question" col-12 *ngFor="let response of currentCutText; let i = index;">\n            <h3>{{i + 1}}. {{response.questionName}}</h3>\n            <ion-textarea autosize [(ngModel)]="response.text" (focusout)="updatePlainText()"></ion-textarea>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- SYNTHETIC TEXT TO DISPLAY -->\n      <ion-col *ngIf="!(transcriptionId && isRawText)" col-8>\n        <ion-row>\n          Selected data ...\n        </ion-row>\n      </ion-col>\n      <ion-col col-2>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- FOOTER CONTAINING PLAYING TOOLS FOR AUDIO -->\n<ion-footer *ngIf="isAudio && totalTimer !== 0" (mouseup)="setDrag(false)" (mousemove)="dragPlayCursor($event)">\n  <ion-row>\n    <timeline [flags]="filteredTags" [totalTime]="totalTimer" [playedTime]="playTimer" [marks]="[]"\n                  (mousedown)="setDrag(true)" (refresh)="refreshValues($event)"></timeline>\n  </ion-row>\n\n  <ion-row class="text-center margin-top-md">\n    <ion-col col-1>\n      <button ion-button *ngIf="inPause" (click)="forward(-15)">-15</button>\n    </ion-col>\n    <ion-col col-2>\n      <timer [time]="playTimer" icon="play" (update)="updateTotalTimestamp($event)" (play_stop)="startStopPlaying($event)" (init)="getTimer($event)"></timer>\n    </ion-col>\n    <ion-col col-1>\n      <button ion-button *ngIf="inPause" (click)="forward(15)">+15</button>\n    </ion-col>\n    <ion-col col-1 class="font-lg grey">\n      {{getFormattedTime()}}\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n<ion-footer *ngIf="!(isAudio && totalTimer !== 0)" (mouseup)="setDrag(false)" (mousemove)="dragPlayCursor($event)">\n  <ion-row class="text-center margin-top-lg" align-items-center>\n    <ion-col col-12 align-self-center class="font-lg">\n      {{ \'analysis.text.loading\' | translate }}\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/analysis-text/analysis-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_persistence_transcriptions_service__["a" /* TranscriptionsService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_persistence_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_5__providers_persistence_interviews_service__["a" /* InterviewsService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_recording_record_service__["a" /* RecordService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], AnalysisTextPage);
    return AnalysisTextPage;
}());

//# sourceMappingURL=analysis-text.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interviewStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return analysisStatus; });
var interviewStatus = {
    scheduled: "Scheduled",
    done: "Done",
};
var analysisStatus = {
    scheduled: "Scheduled",
    done: "Done",
};
//# sourceMappingURL=enum.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewTagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterviewTagPage = /** @class */ (function () {
    function InterviewTagPage(navParams, translate) {
        var _this = this;
        this.navParams = navParams;
        this.translate = translate;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["m" /* preparation */];
        this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["c" /* interviewTagPrepa */];
        this.project = this.navParams.get("project");
        this.translate.get('tabs.title.preparation').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.translate.get('tabs.title.interviewTag').take(1).subscribe(function (value) { return _this.pageSubtitle = value; });
    }
    InterviewTagPage.prototype.ngOnInit = function () {
    };
    InterviewTagPage.prototype.ngOnDestroy = function () {
    };
    InterviewTagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'interview-tag',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-tag/interview-tag.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n  <preparation-segments [pageTitle]="pageSubtitle" [tab]="subTab" [project]="project"></preparation-segments>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'interviewTag.title\'|translate}}\n  </h3>\n  <div class="line"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/interview-tag/interview-tag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], InterviewTagPage);
    return InterviewTagPage;
}());

//# sourceMappingURL=interview-tag.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_participant_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_date_picker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_persistence_image_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_random__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uuid_random__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_DisplayParticipant__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_Participant__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_amazing_time_picker__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_Interview__ = __webpack_require__(924);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ParticipantPanelPage = /** @class */ (function () {
    function ParticipantPanelPage(navParams, translate, participantService, interviewsService, modalCtrl, datePickerProvider, viewService, formBuilder, imageService, alertCtrl, atp) {
        this.navParams = navParams;
        this.translate = translate;
        this.participantService = participantService;
        this.interviewsService = interviewsService;
        this.modalCtrl = modalCtrl;
        this.datePickerProvider = datePickerProvider;
        this.viewService = viewService;
        this.imageService = imageService;
        this.alertCtrl = alertCtrl;
        this.atp = atp;
        this.tab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["m" /* preparation */];
        this.subTab = __WEBPACK_IMPORTED_MODULE_2__util_constants__["f" /* participantsPanel */];
        this.participants = [];
        this.display = [];
        this.project = this.navParams.get("project");
        this.translations();
        this.newParticipant = new __WEBPACK_IMPORTED_MODULE_13__model_Participant__["a" /* Participant */]();
        this.newParticipantForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            jobTitle: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            company: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].email])],
            phone: [''],
            expertise: [''],
            city: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            rdv: [''],
            notes: [''],
            proto: ['']
        });
    }
    ParticipantPanelPage_1 = ParticipantPanelPage;
    ParticipantPanelPage.prototype.translations = function () {
        var _this = this;
        this.translate.get('tabs.title.preparation').take(1).subscribe(function (value) { return _this.pageTitle = value; });
        this.translate.get('tabs.title.participantsPanel').take(1).subscribe(function (value) { return _this.pageSubtitle = value; });
        this.translate.get('participants.modal.remove.message').take(1).subscribe(function (value) { return _this.alertMessageRemove = value; });
        this.translate.get('participants.modal.remove.title').take(1).subscribe(function (value) { return _this.alertTitleRemove = value; });
        this.translate.get('participants.modal.remove.confirm').take(1).subscribe(function (value) { return _this.alertBtnConfirm = value; });
        this.translate.get('participants.modal.remove.cancel').take(1).subscribe(function (value) { return _this.alertBtnCancel = value; });
        this.translate.get('participants.message.deleteSuccess').take(1).subscribe(function (value) { return _this.messageDeleted = value; });
        this.translate.get('participants.message.deleteFail').take(1).subscribe(function (value) { return _this.messageDeletedFail = value; });
        this.translate.get('participants.message.updateSuccess').take(1).subscribe(function (value) { return _this.updateSuccess = value; });
        this.translate.get('participants.message.updateFail').take(1).subscribe(function (value) { return _this.updateFail = value; });
        this.translate.get('participants.message.uploadPaused').take(1)
            .subscribe(function (value) { return _this.messageUploadPaused = value; });
        this.translate.get('participants.message.interviewCreated').take(1).subscribe(function (value) { return _this.interviewCreated = value; });
        this.translate.get('participants.message.interviewFailed').take(1).subscribe(function (value) { return _this.interviewFailed = value; });
    };
    ParticipantPanelPage.prototype.initDisplay = function (length) {
        var display = [];
        for (var i = 0; i < length; i++) {
            display.push(new __WEBPACK_IMPORTED_MODULE_12__model_DisplayParticipant__["a" /* DisplayParticipant */]());
        }
        this.display = display;
    };
    ParticipantPanelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.participantService.getParticipants(this.project.id).share().subscribe(function (value) {
            if (value.length !== _this.participants.length) {
                // We change the display only if there is a participant added or deleted
                _this.initDisplay(value.length);
            }
            _this.participants = value;
        });
    };
    ParticipantPanelPage.prototype.launchDatePicker = function () {
        var _this = this;
        var datePickerOption = { minimumDate: new Date() };
        var dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
        dateSelected.subscribe(function (date) {
            _this.openTimePicker(date);
        });
    };
    ParticipantPanelPage.prototype.openTimePicker = function (date) {
        var _this = this;
        var timePicker = this.atp.open();
        timePicker.afterClose().subscribe(function (time) {
            var hm = time.split(':').map(function (v) { return +v; });
            date.setHours(hm[0], hm[1], 0);
            _this.newParticipant.rdv = date;
        });
    };
    ParticipantPanelPage.prototype.ngOnDestroy = function () {
    };
    ParticipantPanelPage.setUpload = function (display) {
        if (display)
            display.uploading = false;
    };
    ParticipantPanelPage.prototype.fileChanged = function ($event, participant, save, display) {
        var _this = this;
        if (save === void 0) { save = false; }
        if (display === void 0) { display = null; }
        if (!$event.target.files || !$event.target.files[0])
            return;
        this.uploadingImage = true;
        this.file = $event.target.files[0];
        var uploadTask = this.imageService.saveImage(this.project.id, participant.id, this.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_10_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            _this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_10_firebase_app__["storage"].TaskState.PAUSED:// or 'paused'
                    _this.viewService.showToast(_this.messageUploadPaused);
                    break;
                case __WEBPACK_IMPORTED_MODULE_10_firebase_app__["storage"].TaskState.RUNNING:// or 'running'
                    break;
            }
        }, function (error) {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
            _this.uploadingImage = false;
        }, function () {
            // Upload completed successfully, now we can get the download URL
            participant.urlImage = uploadTask.snapshot.downloadURL;
            if (save) {
                _this.update(participant, 'image');
                ParticipantPanelPage_1.setUpload(display);
            }
            _this.uploadingImage = false;
        });
    };
    ParticipantPanelPage.prototype.clickFinished = function () {
        if (this.newParticipantForm.valid) {
            this.addParticipant();
        }
    };
    ParticipantPanelPage.prototype.addParticipant = function () {
        var _this = this;
        this.participantService.createWithId(this.newParticipant, this.project.id).then(function () {
            _this.viewService.showToast("Haha");
            _this.addingParticipant = false;
            _this.newParticipant = new __WEBPACK_IMPORTED_MODULE_13__model_Participant__["a" /* Participant */]();
        }).catch(function (reason) {
            _this.viewService.showToast("Too bad: " + reason);
        });
    };
    ParticipantPanelPage.prototype.sendEmail = function (email, date) {
        // TODO see https://medium.com/@markgoho/create-a-contact-form-in-angular-using-cloud-functions-for-firebase-5e390bdf5600
        // alert("TODO send an email to participant (" + email + ")");
        window.open("mailto:" + email + "?subject=Schedule RDV for project " + this.project.name + "&body=Are you available on " + date + "?", "_self");
    };
    ParticipantPanelPage.prototype.schedule = function () {
        this.newParticipant.interviewStatus = 'waiting';
        this.sendEmail(this.newParticipant.email, this.newParticipant.rdv);
    };
    ParticipantPanelPage.prototype.scheduleRdv = function (participant) {
        this.sendEmail(participant.email, participant.rdv);
        participant.interviewStatus = 'waiting';
        this.update(participant, "interviewStatus");
    };
    ParticipantPanelPage.prototype.clickContact = function (participant, type) {
        if (type == 'email') {
            console.log("contacting " + participant.email);
        }
        else {
            console.log("contacting " + participant.phone);
        }
    };
    ParticipantPanelPage.prototype.update = function (participant, property) {
        var _this = this;
        var data = {};
        switch (property) {
            case "phone":
                data = { phone: participant.phone ? participant.phone : null };
                break;
            case "email":
                data = { email: participant.email ? participant.email : null };
                break;
            case "name":
                data = {
                    firstName: participant.firstName ? participant.firstName : null,
                    lastName: participant.lastName ? participant.lastName : null
                };
                break;
            case "job":
                data =
                    { job: participant.job ? participant.job : null, company: participant.company ? participant.company : null };
                break;
            case "city":
                data = { city: participant.city ? participant.city : null };
                break;
            case "level":
                data = { level: participant.level ? participant.level : null };
                break;
            case "proto":
                data = { proto: participant.proto ? participant.proto : null };
                break;
            case "note":
                data = { notes: participant.notes ? participant.notes : null };
                break;
            case "interviewStatus":
                data = { interviewStatus: participant.interviewStatus ? participant.interviewStatus : null };
                break;
            case "image":
                data = { urlImage: participant.urlImage ? participant.urlImage : null };
                break;
        }
        this.participantService.update(participant.id, data, this.project.id)
            .then(function () { return _this.viewService.showToast(_this.updateSuccess); })
            .catch(function (reason) { return _this.viewService.showToast(_this.updateFail); });
    };
    ParticipantPanelPage.prototype.showRemoveParticipant = function (participant) {
        var _this = this;
        this.alertCtrl.create({
            title: this.alertTitleRemove,
            message: this.alertMessageRemove + "\n" + participant.firstName + " " + participant.lastName,
            buttons: [
                {
                    text: this.alertBtnCancel,
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: this.alertBtnConfirm,
                    handler: function () {
                        _this.participantService.remove(participant.id, _this.project.id)
                            .then(function () { return _this.viewService.showToast(_this.messageDeleted); })
                            .catch(function (reason) { return _this.viewService.showToast(_this.messageDeletedFail); });
                    }
                }
            ]
        }).present();
    };
    ParticipantPanelPage.prototype.showAddParticipant = function () {
        this.addingParticipant = true;
        this.newParticipant.id = __WEBPACK_IMPORTED_MODULE_11_uuid_random___default()();
    };
    ParticipantPanelPage.prototype.cancelAddParticipant = function () {
        this.addingParticipant = false;
        if (this.newParticipant.urlImage) {
            // delete image saved
            this.imageService.deleteImage(this.project.id, this.newParticipant.id);
        }
        this.newParticipant = new __WEBPACK_IMPORTED_MODULE_13__model_Participant__["a" /* Participant */]();
    };
    ParticipantPanelPage.prototype.createInterview = function (participant) {
        var _this = this;
        if (participant.firstName && participant.lastName && participant.job) {
            this.interviewsService.create(new __WEBPACK_IMPORTED_MODULE_16__model_Interview__["a" /* Interview */](participant.firstName + " " + participant.lastName, participant.job, participant.level ? participant.level : "", participant.rdv ? participant.rdv : new Date(Date.now())), this.project.id)
                .then(function () {
                _this.viewService.showToast(_this.interviewCreated);
            });
        }
        else {
            this.viewService.showToast(this.interviewFailed);
        }
    };
    ParticipantPanelPage = ParticipantPanelPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'participant-panel',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/participant-panel/participant-panel.html"*/'<ion-header>\n  <custom-header [pageTitle]="pageTitle" [tab]="tab" [project]="project"></custom-header>\n  <preparation-segments [pageTitle]="pageSubtitle" [tab]="subTab" [project]="project"></preparation-segments>\n</ion-header>\n\n<ion-content padding>\n  <h3>\n    {{\'participants.title\'|translate}}\n  </h3>\n  <div class="line"></div>\n\n  <!-- This appears when we don\'t have participants yet -->\n  <div class="wrapper" *ngIf="!addingParticipant && participants.length == 0">\n    <button class="addParticipants" (click)="showAddParticipant()">\n      {{\'participants.button.add\'|translate}}\n      <ion-icon name="add-circle"></ion-icon>\n    </button>\n  </div>\n\n  <!-- This displays all the existing participants -->\n  <div *ngIf="!addingParticipant">\n    <ion-card *ngFor="let p of participants; let i = index">\n      <ng-container [ngTemplateOutlet]="display[i].expanded ? expandedContent: shortContent"\n                    [ngTemplateOutletContext]="{participant:p, display: display[i]}"></ng-container>\n    </ion-card>\n  </div>\n\n  <!-- Templates for short and expanded content-->\n  <ng-template #expandedContent let-participant="participant" let-display="display">\n    <ion-card-content class="contentExpanded">\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="participant.urlImage ? participant.urlImage : \'assets/imgs/avatar.png\'"\n               (click)="photoChange.click()">\n\n          <circle-progress *ngIf="uploadingImage" [percent]="progress" [radius]="39" [outerStrokeWidth]="10" [space]="1"\n                           [innerStrokeWidth]="1" [outerStrokeLinecap]="\'round\'" [titleFontSize]="16"\n                           [backgroundPadding]="0"\n                           item-end></circle-progress>\n          <input #photoChange type="file" accept="image/*" name="fichier" hidden\n                 (change)="fileChanged($event, participant, true, display); display.uploading = true;">\n        </ion-col>\n        <ion-col col-10>\n          <ion-row>\n            <ion-col col-6>\n              <ng-container *ngIf="!display.edit.name; then displayName else editName">\n              </ng-container>\n              <ng-template #displayName>\n                <div class="name" (mouseenter)="display.hover.name = true"\n                     (mouseleave)="display.hover.name = false">\n                  <ion-row>\n                    <ion-col col-10 class="display-name">\n                      {{participant.firstName}} {{participant.lastName}}\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" *ngIf="display.hover.name"\n                              (click)="display.edit.name = true; display.hover.name = false">\n                        <ion-icon name="create"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n              <ng-template #editName>\n                <div class="name">\n                  <ion-row>\n                    <ion-col col-5>\n                      <ion-item>\n                        <ion-label color="primary" stacked>{{\'participants.modal.firstname\'|translate}}</ion-label>\n                        <ion-input [(ngModel)]="participant.firstName" required #firstName="ngModel"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-5>\n                      <ion-item>\n                        <ion-label color="primary" stacked>{{\'participants.modal.lastname\'|translate}}</ion-label>\n                        <ion-input [(ngModel)]="participant.lastName" required #lastName="ngModel"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" [disabled]="firstName.invalid || lastName.invalid"\n                              (click)="update(participant,\'name\'); display.edit.name = false">\n                        <ion-icon name="checkmark"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf="!display.edit.job; then displayJob else editJob"></ng-container>\n              <ng-template #displayJob>\n                <div class="jobTitle" (mouseenter)="display.hover.job = true" (mouseleave)="display.hover.job = false">\n                  <ion-row>\n                    <ion-col col-10 class="display-job">\n                      {{participant.job ? participant.job :\n                      (\'participants.card.job\'|translate)}} / {{participant.company ? participant.company :\n                      (\'participants.card.company\'|translate)}}\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" *ngIf="display.hover.job"\n                              (click)="display.edit.job = true; display.hover.job = false">\n                        <ion-icon name="create"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n              <ng-template #editJob>\n                <div class="jobTitle">\n                  <ion-row>\n                    <ion-col col-5>\n                      <ion-item>\n                        <ion-label color="primary" stacked>{{\'participants.modal.job\'|translate}}</ion-label>\n                        <ion-input [(ngModel)]="participant.job" required #job="ngModel"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-5>\n                      <ion-item>\n                        <ion-label color="primary" stacked>{{\'participants.modal.company\'|translate}}</ion-label>\n                        <ion-input [(ngModel)]="participant.company"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-col col-2>\n                    <button ion-button round class="round" [disabled]="job.invalid"\n                            (click)="update(participant,\'job\'); display.edit.job = false">\n                      <ion-icon name="checkmark"></ion-icon>\n                    </button>\n                  </ion-col>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf="!display.edit.level; then displayLevel else editLevel"></ng-container>\n              <ng-template #displayLevel>\n                <div class="expertise" (mouseenter)="display.hover.level = true"\n                     (mouseleave)="display.hover.level = false">\n                  <ion-row>\n                    <ion-col col-10 class="display-level">\n                      {{participant.level ? participant.level : (\'participants.card.level\'| translate)}}\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" *ngIf="display.hover.level"\n                              (click)="display.edit.level = true; display.hover.level = false">\n                        <ion-icon name="create"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n              <ng-template #editLevel>\n                <div class="expertise">\n                  <ion-item>\n                    <ion-label color="primary" stacked>{{\'participants.modal.level\'|translate}}</ion-label>\n                    <ion-input [(ngModel)]="participant.level"></ion-input>\n                    <button ion-button round class="round" item-end\n                            (click)="update(participant,\'level\'); display.edit.level = false">\n                      <ion-icon name="checkmark"></ion-icon>\n                    </button>\n                  </ion-item>\n                </div>\n              </ng-template>\n            </ion-col>\n            <ion-col col-5>\n              <div float-end class="full-width">\n                <ion-select [(ngModel)]="participant.interviewStatus" interface="popover"\n                            (ionChange)="update(participant, \'interviewStatus\')">\n                  <ion-option value="toInvite">{{\'participants.card.interview.toInvite\'|translate}}</ion-option>\n                  <ion-option value="waiting">{{\'participants.card.interview.waiting\'|translate}}</ion-option>\n                  <ion-option value="confirmed">{{\'participants.card.interview.confirmed\'|translate}}</ion-option>\n                  <ion-option value="refused">{{\'participants.card.interview.refused\'|translate}}</ion-option>\n                  <ion-option value="toTreat">{{\'participants.card.interview.toTreat\'|translate}}</ion-option>\n                  <ion-option value="finished">{{\'participants.card.interview.finished\'|translate}}</ion-option>\n                </ion-select>\n              </div>\n              <div float-end class="full-width">\n                <button ion-button outline (click)="scheduleRdv(participant)" float-end>\n                  <span text-wrap>{{\'participants.card.schedule\'|translate}}</span>\n                </button>\n              </div>\n            </ion-col>\n            <ion-col col-1>\n              <button ion-button clear (click)="display.expanded = false">\n                <ion-icon name="ios-arrow-up"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <div class="contact" translate>participants.card.contact</div>\n          <ion-row>\n            <ion-col col-6>\n              <ng-container *ngIf="!display.edit.email; then displayEmail else editEmail"></ng-container>\n              <ng-template #displayEmail>\n                <div class="email" (mouseenter)="display.hover.email = true" (mouseleave)="display.hover.email = false">\n                  <ion-row>\n                    <ion-col col-10 class="display-email" (click)="clickContact(participant, \'email\')">\n                      <ion-icon name="mail"></ion-icon>&nbsp; {{participant.email}}\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" *ngIf="display.hover.email"\n                              (click)="display.edit.email = true; display.hover.email = false">\n                        <ion-icon name="create"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n              <ng-template #editEmail>\n                <div class="email">\n                  <ion-item>\n                    <ion-label color="primary" stacked>{{\'participants.modal.email\'|translate}}</ion-label>\n                    <ion-input [(ngModel)]="participant.email" #email="ngModel" required email></ion-input>\n                    <button ion-button round class="round" item-end [disabled]="email.invalid"\n                            (click)="update(participant, \'email\'); display.edit.email = false">\n                      <ion-icon name="checkmark"></ion-icon>\n                    </button>\n                  </ion-item>\n                </div>\n              </ng-template>\n            </ion-col>\n            <ion-col col-6>\n              <ng-container *ngIf="!display.edit.phone; then displayPhone else editPhone"></ng-container>\n              <ng-template #displayPhone>\n                <div class="phone" (mouseenter)="display.hover.phone = true" (mouseleave)="display.hover.phone = false">\n                  <ion-row>\n                    <ion-col col-10 class="display-phone" (click)="clickContact(participant, \'phone\')">\n                      <ion-icon name="call" item-start></ion-icon>&nbsp; {{participant.phone}}\n                    </ion-col>\n                    <ion-col col-2>\n                      <button ion-button round class="round" *ngIf="display.hover.phone"\n                              (click)="display.edit.phone = true; display.hover.phone = false">\n                        <ion-icon name="create"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ng-template>\n              <ng-template #editPhone>\n                <div class="phone">\n                  <ion-item>\n                    <ion-label color="primary" stacked>{{\'participants.modal.phone\'|translate}}</ion-label>\n                    <ion-input [(ngModel)]="participant.phone"></ion-input>\n                    <button ion-button (click)="display.edit.phone = false; update(participant, \'phone\');" round\n                            class="round" item-end>\n                      <ion-icon name="checkmark"></ion-icon>\n                    </button>\n                  </ion-item>\n                </div>\n              </ng-template>\n            </ion-col>\n          </ion-row>\n          <ng-container *ngIf="!display.edit.proto; then displayProto else editProto"></ng-container>\n          <ng-template #displayProto>\n            <div class="proto" (mouseenter)="display.hover.proto = true" (mouseleave)="display.hover.proto = false">\n              {{\'participants.card.proto\'|translate}}: {{participant.proto}}&nbsp;<span\n              *ngIf="display.hover.proto"><button ion-button round class="round"\n                                                  (click)="display.edit.proto = true; display.hover.proto = false">\n              <ion-icon name="create"></ion-icon></button></span>\n            </div>\n          </ng-template>\n          <ng-template #editProto>\n            <div class="proto">\n              <ion-item>\n                <ion-label color="primary" stacked>{{\'participants.modal.proto\'|translate}}</ion-label>\n                <ion-input [(ngModel)]="participant.proto"></ion-input>\n                <button ion-button (click)="display.edit.proto = false; update(participant, \'proto\');" round\n                        class="round" item-end>\n                  <ion-icon name="checkmark"></ion-icon>\n                </button>\n              </ion-item>\n            </div>\n          </ng-template>\n          <div class="side" translate>participants.card.notes</div>\n          <ng-container *ngIf="!display.edit.notes; then displayNotes else editNotes"></ng-container>\n          <ng-template #displayNotes>\n            <div class="notes" (mouseenter)="display.hover.notes = true" (mouseleave)="display.hover.notes = false">\n              <ion-row>\n                <ion-col col-10 class="display-notes">\n                  {{participant.notes}}\n                </ion-col>\n                <ion-col col-2>\n                  <button ion-button round class="round" *ngIf="display.hover.notes"\n                          (click)="display.edit.notes = true; display.hover.notes = false">\n                    <ion-icon name="create"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ng-template>\n          <ng-template #editNotes>\n            <div class="notes">\n              <ion-item>\n                <ion-textarea [(ngModel)]="participant.notes" autosize>\n                </ion-textarea>\n                <button ion-button (click)="display.edit.notes = false; update(participant, \'note\');" round\n                        class="round" item-end>\n                  <ion-icon name="checkmark"></ion-icon>\n                </button>\n              </ion-item>\n            </div>\n          </ng-template>\n\n          <button ion-button outline (click)="createInterview(participant)" float-start>\n            {{\'participants.card.button.createInterview\' | translate}}\n          </button>\n\n          <button ion-button outline (click)="showRemoveParticipant(participant)" class="button-outline-md-danger"\n                  float-end>\n            {{\'participants.card.button.delete\' | translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ng-template>\n\n  <ng-template #shortContent let-participant="participant" let-display="display">\n    <ion-card-content class="contentShort" (click)="display.expanded = true;">\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="participant.urlImage ? participant.urlImage : \'assets/imgs/avatar.png\'">\n        </ion-col>\n        <ion-col col-5>\n          <div class="name">{{participant.firstName}} {{participant.lastName}}</div>\n          <div class="jobTitle">{{participant.job ? participant.job :\n            (\'participants.card.job\'|translate)}} / {{participant.company ? participant.company :\n            (\'participants.card.company\'|translate)}}\n          </div>\n          <div class="expertise">{{participant.level ? participant.level : (\'participants.card.level\'| translate)}}\n          </div>\n        </ion-col>\n        <ion-col col-5 class="right-col">\n          <div class="interview" [ngSwitch]="participant.interviewStatus">\n            <span *ngSwitchCase="\'toInvite\'">{{\'participants.card.interview.toInvite\'|translate}}</span>\n            <span *ngSwitchCase="\'waiting\'">{{\'participants.card.interview.waiting\'|translate}}</span>\n            <span *ngSwitchCase="\'confirmed\'">{{\'participants.card.interview.confirmed\'|translate}}</span>\n            <span *ngSwitchCase="\'refused\'">{{\'participants.card.interview.refused\'|translate}}</span>\n            <span *ngSwitchCase="\'toTreat\'">{{\'participants.card.interview.toTreat\'|translate}}</span>\n            <span *ngSwitchCase="\'finished\'">{{\'participants.card.interview.finished\'|translate}}</span>\n          </div>\n          <div class="time">{{participant.rdv | date: "dd/MM/yyyy \'at\' HH:mm Z"}}</div>\n\n          <!--<div class="local-time">TODO Local time</div>-->\n          <button class="badge-md-light">\n            {{\'participants.card.button.contact\'|translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ng-template>\n\n  <!-- This is the add button -->\n  <ion-fab right bottom *ngIf="!addingParticipant && participants.length > 0">\n    <button ion-fab (click)="showAddParticipant()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <!-- This is the card to add a new participant -->\n  <ion-card *ngIf="addingParticipant" id="cardAdd">\n    <ion-card-header>\n      <ion-card-title>\n        <button (click)="cancelAddParticipant();" ion-button clear>{{\'participants.modal.exit\'|translate}}</button>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <div class="title" translate>participants.modal.title</div>\n        <img *ngIf="!uploadingImage"\n             [src]="newParticipant.urlImage ? newParticipant.urlImage : \'./assets/imgs/avatar.png\'"\n             alt="{{\'participants.modal.photo\' | translate}}"\n             (click)="photoInput.click()"\n             item-end>\n\n        <circle-progress *ngIf="uploadingImage" [percent]="progress" [radius]="39" [outerStrokeWidth]="10" [space]="1"\n                         [innerStrokeWidth]="1" [outerStrokeLinecap]="\'round\'" [titleFontSize]="16"\n                         [backgroundPadding]="0"\n                         item-end></circle-progress>\n        <input #photoInput type="file" accept="image/*" name="fichier" hidden\n               (change)="fileChanged($event, newParticipant)">\n\n      </ion-item>\n      <form [formGroup]="newParticipantForm">\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.firstname\'|translate}}*</ion-label>\n              <ion-input [(ngModel)]="newParticipant.firstName" formControlName="firstName"\n                         autocomplete="given-name"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.lastname\'|translate}}*</ion-label>\n              <ion-input [(ngModel)]="newParticipant.lastName" formControlName="lastName"\n                         autocomplete="family-name"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.job\'|translate}}*</ion-label>\n              <ion-input [(ngModel)]="newParticipant.job" formControlName="jobTitle"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.company\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="newParticipant.company" formControlName="company"\n                         autocomplete="organization"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div class="section" translate>participants.modal.contact<span><ion-icon\n          name="information-circle"></ion-icon></span></div>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.email\'|translate}}*</ion-label>\n              <ion-input [(ngModel)]="newParticipant.email" formControlName="email" autocomplete="email"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.phone\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="newParticipant.phone" formControlName="phone" autocomplete="tel"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div class="line"></div>\n\n        <div class="section" translate>participants.modal.additional</div>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.level\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="newParticipant.level" formControlName="expertise"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.city\'|translate}}*</ion-label>\n              <ion-input [(ngModel)]="newParticipant.city" formControlName="city"\n                         autocomplete="address-level2"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div class="section" translate>participants.modal.schedule<span><ion-icon\n          name="information-circle"></ion-icon></span></div>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button clear (click)="launchDatePicker()">\n              <ion-item>\n                <ion-icon name="calendar" item-start></ion-icon>\n                <span text-wrap>{{\'participants.modal.defineRdv\'|translate}}</span>\n                <div>\n                  {{newParticipant.rdv | date: "dd-MMM-yyyy \'at\' HH:mm Z"}}\n                </div>\n              </ion-item>\n            </button>\n            <input type="hidden" [(ngModel)]="newParticipant.rdv" formControlName="rdv"/>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <button ion-button (click)="schedule()">\n                <span text-wrap>{{\'participants.modal.sendEmail\'|translate}}</span>\n              </button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.side\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="newParticipant.notes" formControlName="notes"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label color="dark" floating>{{\'participants.modal.proto\'|translate}}</ion-label>\n              <ion-input [(ngModel)]="newParticipant.proto" formControlName="proto"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div class="wrapper">\n          <button ion-button (click)="clickFinished()" [disabled]="!newParticipantForm.valid">\n            {{\'participants.modal.finished\'|translate}}\n          </button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/pages/participant-panel/participant-panel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_persistence_participant_service__["a" /* ParticipantService */], __WEBPACK_IMPORTED_MODULE_15__providers_persistence_interviews_service__["a" /* InterviewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_date_picker__["DatePickerProvider"], __WEBPACK_IMPORTED_MODULE_7__providers_view_view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_persistence_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_14_amazing_time_picker__["b" /* AmazingTimePickerService */]])
    ], ParticipantPanelPage);
    return ParticipantPanelPage;
    var ParticipantPanelPage_1;
}());

//# sourceMappingURL=participant-panel.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_utils__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_service__ = __webpack_require__(272);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var ParticipantService = /** @class */ (function () {
    function ParticipantService(firestore, imageService) {
        this.firestore = firestore;
        this.imageService = imageService;
    }
    ParticipantService_1 = ParticipantService;
    ParticipantService.prototype.create = function (participant, idProject) {
        return this.firestore.collection(ParticipantService_1.getPath(idProject))
            .add(__assign({}, __WEBPACK_IMPORTED_MODULE_3__util_utils__["a" /* Utils */].clean(participant)));
    };
    ParticipantService.prototype.createWithId = function (participant, idProject) {
        var id = participant.id, p = __rest(participant, ["id"]);
        return this.firestore.doc(ParticipantService_1.getPath(idProject) + "/" + id)
            .set(__assign({}, __WEBPACK_IMPORTED_MODULE_3__util_utils__["a" /* Utils */].clean(p)));
    };
    ParticipantService.prototype.getParticipants = function (idProject) {
        return this.firestore.collection(ParticipantService_1.getPath(idProject))
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var participant = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, participant);
            });
        });
    };
    ParticipantService.prototype.update = function (id, data, idProject) {
        return this.firestore.doc(ParticipantService_1.getPath(idProject) + "/" + id).update(data);
    };
    ParticipantService.prototype.remove = function (id, idProject) {
        this.imageService.deleteImage(idProject, id);
        return this.firestore.doc(ParticipantService_1.getPath(idProject) + "/" + id).delete();
    };
    ParticipantService.getPath = function (idProject) {
        return __WEBPACK_IMPORTED_MODULE_2__util_constants__["i" /* pathParticipants */].replace(__WEBPACK_IMPORTED_MODULE_2__util_constants__["p" /* replaceId */], idProject);
    };
    ParticipantService = ParticipantService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_4__image_service__["a" /* ImageService */]])
    ], ParticipantService);
    return ParticipantService;
    var ParticipantService_1;
}());

//# sourceMappingURL=participant.service.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(683);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_env__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_persistence_project_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_app_main_app_module__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_persistence_objectives_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_view_view_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_persistence_question_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_persistence_interviews_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_recording_record_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_persistence_transcriptions_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_storage__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_messaging_messaging__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_persistence_participant_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_date_picker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ionic2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_persistence_image_service__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md' // 'md' | 'ios' | 'wp'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__app_env__["a" /* ENV */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_25_ionic2_date_picker__["DatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_11__main_app_main_app_module__["a" /* MainAppModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_messaging_messaging__["a" /* MessagingProvider */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_storage__["a" /* AngularFireStorage */],
                __WEBPACK_IMPORTED_MODULE_9__providers_persistence_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_persistence_objectives_service__["a" /* ObjectivesService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_persistence_participant_service__["a" /* ParticipantService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_persistence_question_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_persistence_interviews_service__["a" /* InterviewsService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_persistence_image_service__["a" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_persistence_transcriptions_service__["a" /* TranscriptionsService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_view_view_service__["a" /* ViewService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_recording_record_service__["a" /* RecordService */],
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormBuilder */],
                __WEBPACK_IMPORTED_MODULE_16__providers_view_view_service__["a" /* ViewService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, firestore) {
        var _this = this;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.user$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.isLogged = false;
        this.onAuthUnsubscribe = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            console.log("onAuthStateChanged");
            console.log(user ? "User : " + user.displayName : 'Not logged in');
            if (user) {
                _this.isLogged = true;
                _this.user$.next(user);
            }
            else {
                _this.isLogged = false;
                _this.user$.next(null);
            }
        });
    }
    Object.defineProperty(AuthProvider.prototype, "getUserId", {
        get: function () { return this.user$.getValue().uid; },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.loginWithGoogle = function () {
        console.log("call loginWithGoogle");
        return this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    AuthProvider.prototype.retrieveLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.getRedirectResult().then(function (credential) {
                            if (credential.user) {
                                _this.updateUserData(credential.user);
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.updateUserData = function (user) {
        console.log("updateUserData");
        var userRef = this.firestore.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        userRef.set(data)
            .then(function () { return console.log("user updated"); })
            .catch(function () { return console.log("error on update"); });
    };
    AuthProvider.prototype.ngOnDestroy = function () {
        console.log("unsubscribe authentification subscriptions");
        this.onAuthUnsubscribe();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewService = /** @class */ (function () {
    function ViewService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ViewService.prototype.showToast = function (message, duration, position, callback, showCloseButton, closeButtonText) {
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'bottom'; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (closeButtonText === void 0) { closeButtonText = 'close'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText,
        });
        toast.onDidDismiss(function () { return callback; });
        return toast.present();
    };
    ViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"]])
    ], ViewService);
    return ViewService;
}());

//# sourceMappingURL=view.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Note__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_random__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_random__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Question__ = __webpack_require__(883);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionService = /** @class */ (function () {
    function QuestionService(firestore) {
        this.firestore = firestore;
    }
    QuestionService_1 = QuestionService;
    QuestionService.prototype.create = function (question, idProject) {
        return this.firestore.collection(QuestionService_1.getPath(idProject)).add(__assign({}, question));
    };
    /**
     * @desc Create all questions linked to the objectives in a transaction
     * @param {string[]} questionsTexts the questions in the form of blocks of texts (questionsTexts[0] corresponds
     * to objectives[0], with N questions (separated by '\n' character).
     * @param {Objective[]} objectives the related objectives
     * @param {string} idProject id of the project
     * @returns {Promise<[]>} succeeds if all questions were saved, else fails
     */
    QuestionService.prototype.createQuestions = function (questionsTexts, objectives, idProject) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().runTransaction(function (transaction) {
            var createPromises = [];
            questionsTexts.forEach(function (questionBlocks, index) {
                var questions = questionBlocks.trim().split('\n');
                questions.forEach(function (question) {
                    createPromises.push(_this.transactionSetQuestion(transaction, QuestionService_1.newRandomIdQuestion(idProject), new __WEBPACK_IMPORTED_MODULE_7__model_Question__["a" /* Question */](question, Number.MAX_SAFE_INTEGER, objectives[index].id, new Date())));
                });
            });
            return Promise.all(createPromises);
        });
    };
    /**
     * Creates a question linked to an objective
     *
     * @param {string} questionText
     * @param {string} objectiveId
     * @param {string} idProject
     * @return {Promise<DocumentReference>}
     */
    QuestionService.prototype.createOneQuestion = function (questionText, objectiveId, idProject) {
        return this.create(new __WEBPACK_IMPORTED_MODULE_7__model_Question__["a" /* Question */](questionText, Number.MAX_SAFE_INTEGER, objectiveId, new Date()), idProject);
    };
    QuestionService.prototype.updateOrderBasedOnIndex = function (projectId, questions) {
        var _this = this;
        var projectPath = QuestionService_1.getPath(projectId);
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().runTransaction(function (transaction) {
            var updatePromises = [];
            var i;
            for (i = 0; i < questions.length; i++) {
                var refQuestion = QuestionService_1.getQuestionReferenceFromPath(projectPath, questions[i].id);
                updatePromises.push(_this.transactionUpdateQuestion(transaction, refQuestion, { order: i }));
            }
            return Promise.all(updatePromises);
        });
    };
    QuestionService.prototype.transactionUpdateQuestion = function (transaction, idQuestion, question) {
        return transaction.get(idQuestion).then(function (snapshot) {
            transaction.update(snapshot.ref, __assign({}, question));
        });
    };
    QuestionService.prototype.getQuestions = function (idProject) {
        return this.firestore.collection(QuestionService_1.getPath(idProject))
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    QuestionService.prototype.existForObjective = function (idObjective, idProj) {
        return this.firestore.collection(QuestionService_1.getPath(idProj), function (ref) { return ref.where('objectifId', '==', idObjective); })
            .valueChanges(['added', 'removed']).map(function (q) { return q.length > 0; });
    };
    QuestionService.prototype.removeAllFromObjective = function (idObjective, idProject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestore.collection(QuestionService_1.getPath(idProject), function (ref) { return ref.where('objectifId', '==', idObjective); })
                .snapshotChanges().take(1).subscribe(function (snapshot) {
                var batch = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().batch();
                snapshot.forEach(function (doc) { return batch.delete(doc.payload.doc.ref); });
                batch.commit().then(function () { return resolve(); }, function (error) { return reject(error); });
            });
        });
    };
    QuestionService.prototype.getOrderedQuestions = function (idProject) {
        return this.firestore.collection(QuestionService_1.getPath(idProject), function (ref) { return ref.orderBy('order').orderBy('dateCreation'); })
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    QuestionService.prototype.getQuestionById = function (idProject, idQuestion) {
        return this.firestore.doc(QuestionService_1.getPath(idProject) + "/" + idQuestion).valueChanges();
    };
    QuestionService.prototype.findQuestion = function (idProject, name) {
        return this.firestore.collection(QuestionService_1.getPath(idProject), function (ref) { return ref.where('name', '==', name); }).snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    QuestionService.prototype.update = function (id, idProject, data) {
        return this.firestore.doc(QuestionService_1.getPath(idProject) + "/" + id).update(data);
    };
    QuestionService.prototype.remove = function (id, idProject) {
        return this.firestore.doc(QuestionService_1.getPath(idProject) + "/" + id).delete();
    };
    QuestionService.prototype.createNote = function (note, idProject) {
        return this.firestore.collection(QuestionService_1.getPath(idProject)).add(__assign({}, new __WEBPACK_IMPORTED_MODULE_1__model_Note__["a" /* Note */](note)));
    };
    QuestionService.prototype.updateNote = function (note, idProject, idNote) {
        return this.firestore.collection(QuestionService_1.getPath(idProject)).doc(idNote).update({ note: note });
    };
    QuestionService.prototype.getNote = function (idProject) {
        return this.firestore.collection(QuestionService_1.getPath(idProject), function (ref) { return ref.where('isNote', '==', true).limit(1); })
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    QuestionService.prototype.transactionSetQuestion = function (transaction, randomIdQuestion, question) {
        return transaction.get(randomIdQuestion).then(function (snapshot) {
            transaction.set(snapshot.ref, __assign({}, question));
        });
    };
    QuestionService.getQuestionReferenceFromPath = function (pathToProject, idQuestion) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection(pathToProject).doc(idQuestion);
    };
    QuestionService.newRandomIdQuestion = function (idProject) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("" + QuestionService_1.getPath(idProject)).doc(__WEBPACK_IMPORTED_MODULE_6_uuid_random___default()());
    };
    QuestionService.getPath = function (idProj) {
        return __WEBPACK_IMPORTED_MODULE_5__util_constants__["k" /* pathQuestions */].replace(__WEBPACK_IMPORTED_MODULE_5__util_constants__["p" /* replaceId */], idProj);
    };
    QuestionService = QuestionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], QuestionService);
    return QuestionService;
    var QuestionService_1;
}());

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(question, order, objectifId, date) {
        this.question = question;
        this.order = order;
        this.objectifId = objectifId;
        this.dateCreation = date;
    }
    return Question;
}());

//# sourceMappingURL=Question.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectValidator; });
var ProjectValidator = /** @class */ (function () {
    function ProjectValidator() {
    }
    ProjectValidator.check = function (projectService, control) {
        var name = control.value;
        return projectService.getProjects().take(1)
            .map(function (projects) { return projects.filter(function (p) { return p.name === name; }); })
            .map(function (projects) { return !!projects.length; })
            .map(function (hasValue) { return hasValue ? ProjectValidator.mapErr(control, hasValue) : null; });
    };
    ProjectValidator.mapErr = function (c, value) {
        var err;
        if (value) {
            err = { existed: true };
        }
        else {
            err = null;
        }
        c.setErrors(err);
        return err;
    };
    return ProjectValidator;
}());

//# sourceMappingURL=project-validator.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_project_new_project_new__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_project_single_project_single__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_question_creator_question_creator__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_directives_module__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_analysis_analysis__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_interview_interview__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_interview_flow_interview_flow__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_interview_tag_interview_tag__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_participant_panel_participant_panel__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_interview_record_interview_record__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_analysis_text_analysis_text__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_amazing_time_picker__ = __webpack_require__(591);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var MainAppModule = /** @class */ (function () {
    function MainAppModule() {
    }
    MainAppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_app_component__["a" /* MyMainApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_project_new_project_new__["a" /* ProjectNewPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_project_single_project_single__["a" /* ProjectSinglePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_question_creator_question_creator__["a" /* QuestionCreatorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_interview_interview__["a" /* InterviewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_interview_flow_interview_flow__["a" /* InterviewFlowPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_interview_tag_interview_tag__["a" /* InterviewTagPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_interview_record_interview_record__["a" /* InterviewRecordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_participant_panel_participant_panel__["a" /* ParticipantPanelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_analysis_analysis__["a" /* AnalysisPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_analysis_text_analysis_text__["a" /* AnalysisTextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_app_component__["a" /* MyApp */], {
                    mode: 'md' // 'md' | 'ios' | 'wp'
                }),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_23_amazing_time_picker__["a" /* AmazingTimePickerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__main_app_component__["a" /* MyMainApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_project_new_project_new__["a" /* ProjectNewPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_project_single_project_single__["a" /* ProjectSinglePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_question_creator_question_creator__["a" /* QuestionCreatorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_interview_interview__["a" /* InterviewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_interview_flow_interview_flow__["a" /* InterviewFlowPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_interview_tag_interview_tag__["a" /* InterviewTagPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_interview_record_interview_record__["a" /* InterviewRecordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_participant_panel_participant_panel__["a" /* ParticipantPanelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_analysis_analysis__["a" /* AnalysisPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_analysis_text_analysis_text__["a" /* AnalysisTextPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], MainAppModule);
    return MainAppModule;
}());

//# sourceMappingURL=main-app.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_footer_custom_footer__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_header_custom_header__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_header_projects_header__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preparation_segments_preparation_segments__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interview_segment_interview_segment__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timer_app_component__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__analysis_segment_analysis_segment__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timeline_timeline__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_circle_progress_circle__ = __webpack_require__(931);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__custom_footer_custom_footer__["a" /* CustomFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__projects_header_projects_header__["a" /* ProjectsHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__preparation_segments_preparation_segments__["a" /* PreparationSegmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__custom_header_custom_header__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__interview_segment_interview_segment__["a" /* InterviewSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__timer_app_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__analysis_segment_analysis_segment__["a" /* AnalysisSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_10__progress_circle_progress_circle__["a" /* CircleProgressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__custom_footer_custom_footer__["a" /* CustomFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__preparation_segments_preparation_segments__["a" /* PreparationSegmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__projects_header_projects_header__["a" /* ProjectsHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__custom_header_custom_header__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__interview_segment_interview_segment__["a" /* InterviewSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__timer_app_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__analysis_segment_analysis_segment__["a" /* AnalysisSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_10__progress_circle_progress_circle__["a" /* CircleProgressComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__progress_circle_progress_circle__["b" /* CircleProgressOptions */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CustomFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomFooterComponent = /** @class */ (function () {
    function CustomFooterComponent() {
        this.text = 'Hello World';
    }
    CustomFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-footer',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/custom-footer/custom-footer.html"*/'<ion-navbar>\n  <ion-title>Footer</ion-title>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/custom-footer/custom-footer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomFooterComponent);
    return CustomFooterComponent;
}());

//# sourceMappingURL=custom-footer.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_project_single_project_single__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Project__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_question_creator_question_creator__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_interview_interview__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_analysis_analysis__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CustomHeaderComponent = /** @class */ (function () {
    function CustomHeaderComponent(authProvider, navCtrl, viewCtrl) {
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.tabObjectives = __WEBPACK_IMPORTED_MODULE_1__pages_project_single_project_single__["a" /* ProjectSinglePage */];
        this.tabPreparation = __WEBPACK_IMPORTED_MODULE_6__pages_question_creator_question_creator__["a" /* QuestionCreatorPage */];
        this.tabInterviews = __WEBPACK_IMPORTED_MODULE_8__pages_interview_interview__["a" /* InterviewPage */];
        this.tabAnalysis = __WEBPACK_IMPORTED_MODULE_9__pages_analysis_analysis__["a" /* AnalysisPage */];
        this.objectives = __WEBPACK_IMPORTED_MODULE_7__util_constants__["e" /* objectives */];
        this.preparation = __WEBPACK_IMPORTED_MODULE_7__util_constants__["m" /* preparation */];
        this.interviews = __WEBPACK_IMPORTED_MODULE_7__util_constants__["d" /* interviews */];
        this.analysis = __WEBPACK_IMPORTED_MODULE_7__util_constants__["a" /* analysis */];
    }
    CustomHeaderComponent.prototype.ngOnInit = function () {
        this.tabName = this.tab.name;
    };
    CustomHeaderComponent.prototype.selectTab = function (tab) {
        var forward = (tab.value - this.tab.value) > 0;
        switch (tab) {
            case __WEBPACK_IMPORTED_MODULE_7__util_constants__["e" /* objectives */]:
                this.replacePageWith(this.tabObjectives, { "project": this.project }, "Objectifs", forward, tab);
                break;
            case __WEBPACK_IMPORTED_MODULE_7__util_constants__["m" /* preparation */]:
                this.replacePageWith(this.tabPreparation, { "project": this.project }, "Preparation", forward, tab);
                break;
            case __WEBPACK_IMPORTED_MODULE_7__util_constants__["d" /* interviews */]:
                this.replacePageWith(this.tabInterviews, { "project": this.project }, "Interviews", forward, tab);
                break;
            case __WEBPACK_IMPORTED_MODULE_7__util_constants__["a" /* analysis */]:
                this.replacePageWith(this.tabAnalysis, { "project": this.project }, "Analysis", forward, tab);
                break;
        }
    };
    CustomHeaderComponent.prototype.replacePageWith = function (page, params, title, forward, tab) {
        var _this = this;
        this.pageTitle = title;
        this.tab = tab;
        this.navCtrl.push(page, params, { animate: true, direction: forward ? 'forward' : 'back', animation: 'transition' })
            .then(function () {
            // first we find the index of the current view controller
            var index = _this.viewCtrl.index;
            // then we remove it from the navigation stack
            _this.navCtrl.remove(index);
        });
    };
    CustomHeaderComponent.prototype.goToHome = function () {
        this.pageTitle = "Projects";
        this.navCtrl.popToRoot();
    };
    CustomHeaderComponent.prototype.logout = function () {
        var _this = this;
        try {
            this.authProvider.logout().then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__model_Project__["a" /* Project */])
    ], CustomHeaderComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CustomHeaderComponent.prototype, "tab", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-header',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/custom-header/custom-header.html"*/'<ion-navbar>\n  <ion-row>\n    <ion-col col-2>\n      <ion-title>\n        <div (click)="goToHome()">\n          {{pageTitle}}\n        </div>\n      </ion-title>\n    </ion-col>\n    <ion-col col-8>\n      <ion-segment [(ngModel)]="tabName">\n        <ion-segment-button value="{{objectives.name}}" (ionSelect)="selectTab(objectives)">\n          Objectives\n        </ion-segment-button>\n        <ion-segment-button value="{{preparation.name}}" (ionSelect)="selectTab(preparation)">\n          Preparation\n        </ion-segment-button>\n        <ion-segment-button value="{{interviews.name}}" (ionSelect)="selectTab(interviews)">\n          Interviews\n        </ion-segment-button>\n        <ion-segment-button value="{{analysis.name}}" (ionSelect)="selectTab(analysis)">\n          Analysis\n        </ion-segment-button>\n      </ion-segment>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button (click)="logout()">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/custom-header/custom-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_constants__ = __webpack_require__(24);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterviewsService = /** @class */ (function () {
    function InterviewsService(firestore) {
        this.firestore = firestore;
    }
    InterviewsService_1 = InterviewsService;
    InterviewsService.prototype.create = function (interview, idProject) {
        return this.firestore.collection(InterviewsService_1.getPath(idProject)).add(__assign({}, interview));
    };
    InterviewsService.prototype.getInterviews = function (idProject) {
        return this.firestore.collection(InterviewsService_1.getPath(idProject))
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    InterviewsService.prototype.getInterviewById = function (idProject, idInterview) {
        return this.firestore.doc(InterviewsService_1.getPath(idProject) + "/" + idInterview).valueChanges();
    };
    InterviewsService.prototype.update = function (idProject, idInterview, data) {
        return this.firestore.doc(InterviewsService_1.getPath(idProject) + "/" + idInterview).update(data);
    };
    InterviewsService.prototype.remove = function (idProject, idInterview) {
        return this.firestore.doc(InterviewsService_1.getPath(idProject) + "/" + idInterview).delete();
    };
    InterviewsService.getPath = function (idProj) {
        return __WEBPACK_IMPORTED_MODULE_3__util_constants__["g" /* pathInterviews */].replace(__WEBPACK_IMPORTED_MODULE_3__util_constants__["p" /* replaceId */], idProj);
    };
    InterviewsService = InterviewsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], InterviewsService);
    return InterviewsService;
    var InterviewsService_1;
}());

//# sourceMappingURL=interviews.service.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsHeaderComponent = /** @class */ (function () {
    function ProjectsHeaderComponent(navCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
    }
    ProjectsHeaderComponent.prototype.logout = function () {
        var _this = this;
        try {
            this.authProvider.logout().then(function (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProjectsHeaderComponent.prototype, "pageTitle", void 0);
    ProjectsHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projects-header',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/projects-header/projects-header.html"*/'<ion-navbar>\n  <ion-row>\n    <ion-col col-2>\n      <ion-icon name="home">\n      </ion-icon>\n    </ion-col>\n    <ion-col col-8>\n      <ion-title>\n        {{pageTitle}}\n      </ion-title>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button (click)="logout()">\n        <ion-icon name="person" id="logout"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/projects-header/projects-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProjectsHeaderComponent);
    return ProjectsHeaderComponent;
}());

//# sourceMappingURL=projects-header.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparationSegmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Project__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_question_creator_question_creator__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_constants__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_interview_tag_interview_tag__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_participant_panel_participant_panel__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreparationSegmentsComponent = /** @class */ (function () {
    function PreparationSegmentsComponent(navCtrl, viewCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.tabQuestionCreator = __WEBPACK_IMPORTED_MODULE_3__pages_question_creator_question_creator__["a" /* QuestionCreatorPage */];
        this.tabInterviewTagPreparation = __WEBPACK_IMPORTED_MODULE_5__pages_interview_tag_interview_tag__["a" /* InterviewTagPage */];
        this.tabParticipantsPanel = __WEBPACK_IMPORTED_MODULE_6__pages_participant_panel_participant_panel__["a" /* ParticipantPanelPage */];
        this.questionCreator = __WEBPACK_IMPORTED_MODULE_4__util_constants__["n" /* questionCreator */];
        this.interviewTagPrepa = __WEBPACK_IMPORTED_MODULE_4__util_constants__["c" /* interviewTagPrepa */];
        this.participantsPanel = __WEBPACK_IMPORTED_MODULE_4__util_constants__["f" /* participantsPanel */];
        this.translate.get('tabs.title.questionCreator').take(1).subscribe(function (value) { return _this.tabNameQuestionCreator = value; });
        this.translate.get('tabs.title.interviewTag').take(1).subscribe(function (value) { return _this.tabNameInterviewTagPrepa = value; });
        this.translate.get('tabs.title.participantsPanel').take(1)
            .subscribe(function (value) { return _this.tabNameParticipantsPanel = value; });
    }
    PreparationSegmentsComponent.prototype.ngOnInit = function () {
        this.tabName = this.tab.name;
    };
    PreparationSegmentsComponent.prototype.selectTab = function (tab) {
        var forward = (tab.value - this.tab.value) > 0;
        switch (tab) {
            case __WEBPACK_IMPORTED_MODULE_4__util_constants__["n" /* questionCreator */]:
                this.replacePageWith(this.tabQuestionCreator, { "project": this.project }, forward, tab);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__util_constants__["c" /* interviewTagPrepa */]:
                this.replacePageWith(this.tabInterviewTagPreparation, { "project": this.project }, forward, tab);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__util_constants__["f" /* participantsPanel */]:
                this.replacePageWith(this.tabParticipantsPanel, { "project": this.project }, forward, tab);
                break;
        }
    };
    PreparationSegmentsComponent.prototype.replacePageWith = function (page, params, forward, tab) {
        var _this = this;
        this.tab = tab;
        this.navCtrl.push(page, params, { animate: true, direction: forward ? 'forward' : 'back', animation: 'transition' })
            .then(function () {
            // first we find the index of the current view controller
            var index = _this.viewCtrl.index;
            // then we remove it from the navigation stack
            _this.navCtrl.remove(index);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PreparationSegmentsComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_Project__["a" /* Project */])
    ], PreparationSegmentsComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PreparationSegmentsComponent.prototype, "tab", void 0);
    PreparationSegmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'preparation-segments',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/preparation-segments/preparation-segments.html"*/'<ion-navbar>\n  <ion-segment [(ngModel)]="tabName">\n    <ion-segment-button value="{{questionCreator.name}}" (ionSelect)="selectTab(questionCreator)">\n      {{tabNameQuestionCreator}}\n    </ion-segment-button>\n    <ion-segment-button value="{{interviewTagPrepa.name}}" (ionSelect)="selectTab(interviewTagPrepa)">\n      {{tabNameInterviewTagPrepa}}\n    </ion-segment-button>\n    <ion-segment-button value="{{participantsPanel.name}}" (ionSelect)="selectTab(participantsPanel)">\n      {{tabNameParticipantsPanel}}\n    </ion-segment-button>\n  </ion-segment>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/preparation-segments/preparation-segments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], PreparationSegmentsComponent);
    return PreparationSegmentsComponent;
}());

//# sourceMappingURL=preparation-segments.js.map

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 472,
	"./af.js": 472,
	"./ar": 473,
	"./ar-dz": 474,
	"./ar-dz.js": 474,
	"./ar-kw": 475,
	"./ar-kw.js": 475,
	"./ar-ly": 476,
	"./ar-ly.js": 476,
	"./ar-ma": 477,
	"./ar-ma.js": 477,
	"./ar-sa": 478,
	"./ar-sa.js": 478,
	"./ar-tn": 479,
	"./ar-tn.js": 479,
	"./ar.js": 473,
	"./az": 480,
	"./az.js": 480,
	"./be": 481,
	"./be.js": 481,
	"./bg": 482,
	"./bg.js": 482,
	"./bm": 483,
	"./bm.js": 483,
	"./bn": 484,
	"./bn.js": 484,
	"./bo": 485,
	"./bo.js": 485,
	"./br": 486,
	"./br.js": 486,
	"./bs": 487,
	"./bs.js": 487,
	"./ca": 488,
	"./ca.js": 488,
	"./cs": 489,
	"./cs.js": 489,
	"./cv": 490,
	"./cv.js": 490,
	"./cy": 491,
	"./cy.js": 491,
	"./da": 492,
	"./da.js": 492,
	"./de": 493,
	"./de-at": 494,
	"./de-at.js": 494,
	"./de-ch": 495,
	"./de-ch.js": 495,
	"./de.js": 493,
	"./dv": 496,
	"./dv.js": 496,
	"./el": 497,
	"./el.js": 497,
	"./en-au": 498,
	"./en-au.js": 498,
	"./en-ca": 499,
	"./en-ca.js": 499,
	"./en-gb": 500,
	"./en-gb.js": 500,
	"./en-ie": 501,
	"./en-ie.js": 501,
	"./en-nz": 502,
	"./en-nz.js": 502,
	"./eo": 503,
	"./eo.js": 503,
	"./es": 504,
	"./es-do": 505,
	"./es-do.js": 505,
	"./es-us": 506,
	"./es-us.js": 506,
	"./es.js": 504,
	"./et": 507,
	"./et.js": 507,
	"./eu": 508,
	"./eu.js": 508,
	"./fa": 509,
	"./fa.js": 509,
	"./fi": 510,
	"./fi.js": 510,
	"./fo": 511,
	"./fo.js": 511,
	"./fr": 512,
	"./fr-ca": 513,
	"./fr-ca.js": 513,
	"./fr-ch": 514,
	"./fr-ch.js": 514,
	"./fr.js": 512,
	"./fy": 515,
	"./fy.js": 515,
	"./gd": 516,
	"./gd.js": 516,
	"./gl": 517,
	"./gl.js": 517,
	"./gom-latn": 518,
	"./gom-latn.js": 518,
	"./gu": 519,
	"./gu.js": 519,
	"./he": 520,
	"./he.js": 520,
	"./hi": 521,
	"./hi.js": 521,
	"./hr": 522,
	"./hr.js": 522,
	"./hu": 523,
	"./hu.js": 523,
	"./hy-am": 524,
	"./hy-am.js": 524,
	"./id": 525,
	"./id.js": 525,
	"./is": 526,
	"./is.js": 526,
	"./it": 527,
	"./it.js": 527,
	"./ja": 528,
	"./ja.js": 528,
	"./jv": 529,
	"./jv.js": 529,
	"./ka": 530,
	"./ka.js": 530,
	"./kk": 531,
	"./kk.js": 531,
	"./km": 532,
	"./km.js": 532,
	"./kn": 533,
	"./kn.js": 533,
	"./ko": 534,
	"./ko.js": 534,
	"./ky": 535,
	"./ky.js": 535,
	"./lb": 536,
	"./lb.js": 536,
	"./lo": 537,
	"./lo.js": 537,
	"./lt": 538,
	"./lt.js": 538,
	"./lv": 539,
	"./lv.js": 539,
	"./me": 540,
	"./me.js": 540,
	"./mi": 541,
	"./mi.js": 541,
	"./mk": 542,
	"./mk.js": 542,
	"./ml": 543,
	"./ml.js": 543,
	"./mr": 544,
	"./mr.js": 544,
	"./ms": 545,
	"./ms-my": 546,
	"./ms-my.js": 546,
	"./ms.js": 545,
	"./mt": 547,
	"./mt.js": 547,
	"./my": 548,
	"./my.js": 548,
	"./nb": 549,
	"./nb.js": 549,
	"./ne": 550,
	"./ne.js": 550,
	"./nl": 551,
	"./nl-be": 552,
	"./nl-be.js": 552,
	"./nl.js": 551,
	"./nn": 553,
	"./nn.js": 553,
	"./pa-in": 554,
	"./pa-in.js": 554,
	"./pl": 555,
	"./pl.js": 555,
	"./pt": 556,
	"./pt-br": 557,
	"./pt-br.js": 557,
	"./pt.js": 556,
	"./ro": 558,
	"./ro.js": 558,
	"./ru": 559,
	"./ru.js": 559,
	"./sd": 560,
	"./sd.js": 560,
	"./se": 561,
	"./se.js": 561,
	"./si": 562,
	"./si.js": 562,
	"./sk": 563,
	"./sk.js": 563,
	"./sl": 564,
	"./sl.js": 564,
	"./sq": 565,
	"./sq.js": 565,
	"./sr": 566,
	"./sr-cyrl": 567,
	"./sr-cyrl.js": 567,
	"./sr.js": 566,
	"./ss": 568,
	"./ss.js": 568,
	"./sv": 569,
	"./sv.js": 569,
	"./sw": 570,
	"./sw.js": 570,
	"./ta": 571,
	"./ta.js": 571,
	"./te": 572,
	"./te.js": 572,
	"./tet": 573,
	"./tet.js": 573,
	"./th": 574,
	"./th.js": 574,
	"./tl-ph": 575,
	"./tl-ph.js": 575,
	"./tlh": 576,
	"./tlh.js": 576,
	"./tr": 577,
	"./tr.js": 577,
	"./tzl": 578,
	"./tzl.js": 578,
	"./tzm": 579,
	"./tzm-latn": 580,
	"./tzm-latn.js": 580,
	"./tzm.js": 579,
	"./uk": 581,
	"./uk.js": 581,
	"./ur": 582,
	"./ur.js": 582,
	"./uz": 583,
	"./uz-latn": 584,
	"./uz-latn.js": 584,
	"./uz.js": 583,
	"./vi": 585,
	"./vi.js": 585,
	"./x-pseudo": 586,
	"./x-pseudo.js": 586,
	"./yo": 587,
	"./yo.js": 587,
	"./zh-cn": 588,
	"./zh-cn.js": 588,
	"./zh-hk": 589,
	"./zh-hk.js": 589,
	"./zh-tw": 590,
	"./zh-tw.js": 590
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 917;

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayParticipant; });
/* unused harmony export EditParticipant */
var DisplayParticipant = /** @class */ (function () {
    function DisplayParticipant() {
        this.expanded = false;
        this.uploading = false;
        this.edit = new EditParticipant();
        this.hover = new EditParticipant();
    }
    return DisplayParticipant;
}());

var EditParticipant = /** @class */ (function () {
    function EditParticipant() {
        this.phone = false;
        this.email = false;
        this.name = false;
        this.lastName = false;
        this.job = false;
        this.company = false;
        this.level = false;
        this.proto = false;
        this.notes = false;
    }
    return EditParticipant;
}());

//# sourceMappingURL=DisplayParticipant.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Participant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Person__ = __webpack_require__(923);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Participant = /** @class */ (function (_super) {
    __extends(Participant, _super);
    function Participant() {
        var _this = _super.call(this) || this;
        _this.interviewStatus = 'toInvite';
        return _this;
    }
    return Participant;
}(__WEBPACK_IMPORTED_MODULE_0__Person__["a" /* Person */]));

//# sourceMappingURL=Participant.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());

//# sourceMappingURL=Person.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interview; });
var Interview = /** @class */ (function () {
    function Interview(participant, jobTitle, expertise, date) {
        this.participant = participant;
        this.jobTitle = jobTitle;
        this.expertise = expertise;
        this.date = date;
        this.refToAudio = "";
        this.refToText = "";
        this.tags = [];
        this.isFinished = false;
        this.duration = 0;
        this.status = "Scheduled";
        this.analysis = "Scheduled";
    }
    return Interview;
}());

//# sourceMappingURL=Interview.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewSegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_constants__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterviewSegmentComponent = /** @class */ (function () {
    function InterviewSegmentComponent(navCtrl, viewCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.filter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.upComingInterviews = __WEBPACK_IMPORTED_MODULE_3__util_constants__["r" /* upComingInterviews */];
        this.finishedInterviews = __WEBPACK_IMPORTED_MODULE_3__util_constants__["b" /* finishedInterviews */];
        this.translate.get('tabs.title.upComingInterview').take(1).subscribe(function (value) { return _this.tabNameUpComingInterviews = value; });
        this.translate.get('tabs.title.finishedInterviews').take(1).subscribe(function (value) { return _this.tabNameFinishedInterviews = value; });
    }
    InterviewSegmentComponent.prototype.ngOnInit = function () {
        this.tabName = this.tab.name;
    };
    InterviewSegmentComponent.prototype.selectTab = function (isFinished) {
        this.filter.emit({
            filter: isFinished,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InterviewSegmentComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InterviewSegmentComponent.prototype, "tab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InterviewSegmentComponent.prototype, "filter", void 0);
    InterviewSegmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'interview-segment',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/interview-segment/interview-segment.html"*/'<ion-navbar>\n  <ion-segment [(ngModel)]="tabName">\n    <ion-segment-button value="{{upComingInterviews.name}}" (ionSelect)="selectTab(false)">\n      {{tabNameUpComingInterviews}}\n    </ion-segment-button>\n    <ion-segment-button value="{{finishedInterviews.name}}" (ionSelect)="selectTab(true)">\n      {{tabNameFinishedInterviews}}\n    </ion-segment-button>\n  </ion-segment>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/interview-segment/interview-segment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], InterviewSegmentComponent);
    return InterviewSegmentComponent;
}());

//# sourceMappingURL=interview-segment.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * TimerComponent
 * Manage the buttons and implicit timers.
 */
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        /*
         * Events sent to parent
         */
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.play_stop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.init = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._timer = new __WEBPACK_IMPORTED_MODULE_1__timer__["a" /* Timer */](this.update, this.clock);
        this._state = new __WEBPACK_IMPORTED_MODULE_2__state__["a" /* State */]();
        this.time = this._timer.timestampTotal;
    }
    /**
     * @name ngOnInit
     * @desc Called on init of component.
     * @memberOf TimerComponent
     */
    TimerComponent.prototype.ngOnInit = function () {
        // Send component to parent
        this.init.emit({
            timerComponent: this,
        });
    };
    /**
     * @name play
     * @desc Start the timer.
     * @memberOf TimerComponent
     */
    TimerComponent.prototype.play = function () {
        this._timer.setTotalTime(this.time / 10);
        this._timer.start();
        this._state.setPlay();
        // True for send PLAY
        this.play_stop.emit({
            value: true,
            timerComponent: this
        });
    };
    /**
     * @name stop
     * @desc Pause the timer.
     * @memberOf TimerComponent
     */
    TimerComponent.prototype.stop = function () {
        this._timer.stop();
        this._state.setStop();
        // False for send STOP
        this.play_stop.emit({
            value: false,
        });
    };
    /**
     * @name backward
     * @desc Reset the component.
     * @memberOf TimerComponent
     */
    TimerComponent.prototype.backward = function () {
        this._timer.reset();
        this._state.setBackward();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "play_stop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "clock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "init", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "icon", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/timer/app.component.html"*/'<div class="container">\n  <div class="text-center">\n      <!-- button ion-button color="danger" *ngIf="_state.backward" (click)="backward()">{{resetButton}}</button -->\n      <button ion-button *ngIf="_state.stop" class="pausebutton" (click)="stop()"><ion-icon name="pause"></ion-icon></button>\n      <button ion-button *ngIf="_state.play" class="playbutton" (click)="play()"><ion-icon [name]="icon"></ion-icon></button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/timer/app.component.html"*/,
        })
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/**
 * Timer
 * Manage the implicit timer.
 */
var Timer = /** @class */ (function () {
    /**
     * @name constructor
     * @desc Constructor of class.
     * @param {EventEmitter<any>} update
     * @param {EventEmitter<any>} clock
     * @memberOf Timer
     */
    function Timer(update, clock) {
        this.update = update;
        this.clock = clock;
    }
    Object.defineProperty(Timer.prototype, "timestampTotal", {
        /**
         * @name timestampTotal
         * @desc Get the timestamp of timer.
         * @returns {number}
         * @memberOf Timer
         */
        get: function () { return this._totaltime * 10; },
        enumerable: true,
        configurable: true
    });
    /**
     * @name start
     * @desc Start a new timer.
     * @memberOf Timer
     */
    Timer.prototype.start = function () {
        var _this = this;
        this._timer = setInterval(function () {
            // Increments the timer every O.O1 sec
            _this._totaltime++;
            // Update parent value
            _this.update.emit({
                timestampTotal: _this.timestampTotal,
            });
            // Send a mark every 10 sec
            if (_this.timestampTotal % 10000 === 0) {
                _this.clock.emit({
                    time: _this.timestampTotal,
                });
            }
        }, 10);
    };
    /**
     * @name stop
     * @desc Pause the timer.
     * @memberOf Timer
     */
    Timer.prototype.stop = function () {
        clearInterval(this._timer);
    };
    /**
     * @name reset
     * @desc Reset the timer.
     * @memberOf Timer
     */
    Timer.prototype.reset = function () {
        this._totaltime = 0;
        // Send reset to parent
        this.update.emit({
            timestampTotal: this.timestampTotal,
            reset: true,
        });
    };
    /**
     * @name setTotalTime
     * @desc Set the totalTime.
     * @param {number} newTimer
     * @memberOf Timer
     */
    Timer.prototype.setTotalTime = function (newTimer) {
        this._totaltime = newTimer;
    };
    return Timer;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/**
 * State
 * Different states of timer.
 * To manage buttons.
 */
var State = /** @class */ (function () {
    function State() {
        this._play = true;
        this._stop = false;
        this._backward = false;
    }
    Object.defineProperty(State.prototype, "stop", {
        /**
         * @name stop
         * @desc Return true if state is stop. False else.
         * @returns {boolean}
         * @memberOf State
         */
        get: function () { return this._stop; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "backward", {
        /**
         * @name backward
         * @desc Return true if state is backward. False else.
         * @returns {boolean}
         * @memberOf State
         */
        get: function () { return this._backward; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "play", {
        /**
         * @name play
         * @desc Return true if state is stop. False else.
         * @returns {boolean}
         * @memberOf State
         */
        get: function () { return this._play; },
        enumerable: true,
        configurable: true
    });
    /**
     * @name setPlay
     * @desc Set to the play state.
     * @returns {boolean}
     * @memberOf State
     */
    State.prototype.setPlay = function () {
        this._stop = true;
        this._play = this._backward = false;
    };
    /**
     * @name setStop
     * @desc Set to the stop state.
     * @returns {boolean}
     * @memberOf State
     */
    State.prototype.setStop = function () {
        this._stop = false;
        this._play = this._backward = true;
    };
    /**
     * @name setBackward
     * @desc Set to the backward state.
     * @returns {boolean}
     * @memberOf State
     */
    State.prototype.setBackward = function () {
        this._stop = true;
        this._play = this._backward = false;
    };
    return State;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisSegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_constants__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalysisSegmentComponent = /** @class */ (function () {
    function AnalysisSegmentComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.switch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rawData = __WEBPACK_IMPORTED_MODULE_2__util_constants__["o" /* rawData */];
        this.syntheticData = __WEBPACK_IMPORTED_MODULE_2__util_constants__["q" /* syntheticData */];
        this.translate.get('tabs.title.rawData').take(1).subscribe(function (value) { return _this.tabRawData = value; });
        this.translate.get('tabs.title.selectedData').take(1).subscribe(function (value) { return _this.tabSyntheticData = value; });
    }
    AnalysisSegmentComponent.prototype.ngOnInit = function () {
        this.tabName = this.tab.name;
    };
    AnalysisSegmentComponent.prototype.selectTab = function (isNormalText) {
        this.switch.emit({
            switch: isNormalText,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnalysisSegmentComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AnalysisSegmentComponent.prototype, "tab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AnalysisSegmentComponent.prototype, "switch", void 0);
    AnalysisSegmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'analysis-segment',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/analysis-segment/analysis-segment.html"*/'<ion-navbar>\n  <ion-segment [(ngModel)]="tabName">\n    <ion-segment-button value="{{rawData.name}}" (ionSelect)="selectTab(true)">\n      {{tabRawData}}\n    </ion-segment-button>\n    <ion-segment-button value="{{syntheticData.name}}" (ionSelect)="selectTab(false)">\n      {{tabSyntheticData}}\n    </ion-segment-button>\n  </ion-segment>\n</ion-navbar>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/analysis-segment/analysis-segment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AnalysisSegmentComponent);
    return AnalysisSegmentComponent;
}());

//# sourceMappingURL=analysis-segment.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * TimelineComponent
 * Manage and display the timeline.
 * Methods here for print current/total timers.
 */
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TimelineComponent_1 = TimelineComponent;
    /**
     * @name sendSelectedFlag
     * @desc Send the selected flag to parent.
     * @param {number} id: the id of selected flag.
     * @memberOf TimelineComponent
     */
    TimelineComponent.prototype.sendSelectedFlag = function (id) {
        this.refresh.emit({
            selectedFlag: id,
        });
    };
    /**
     * @name getFormattedTime
     * @desc Return formatted time "0:00:00".
     * @param {number} time: the timestamp to convert.
     * @returns {string} the formatted time as a string.
     * @memberOf TimelineComponent
     */
    TimelineComponent.prototype.getFormattedTime = function (time) {
        return TimelineComponent_1.getMinutes(time) + ":"
            + TimelineComponent_1.getSeconds(time) + ":"
            + TimelineComponent_1.getCentiSeconds(time);
    };
    /**
     * @name getSeconds
     * @desc Return seconds / 100.
     * @param {number} totalTime: the timestamp to exploit.
     * @returns {string} 1/100 seconds as a string.
     * @memberOf TimelineComponent
     */
    TimelineComponent.getCentiSeconds = function (totalTime) {
        return TimelineComponent_1.pad2(Math.floor((totalTime % 1000) / 10));
    };
    /**
     * @name getMinutes
     * @desc Return seconds.
     * @param {number} totalTime: the timestamp to exploit.
     * @returns {string} seconds as a string.
     * @memberOf TimelineComponent
     */
    TimelineComponent.getSeconds = function (totalTime) {
        return TimelineComponent_1.pad2(TimelineComponent_1.floor((totalTime / 1000) % 60));
    };
    /**
     * @name getHours
     * @desc Return minutes.
     * @param {number} totalTime: the timestamp to exploit.
     * @returns {string} minutes as a string.
     * @memberOf TimelineComponent
     */
    TimelineComponent.getMinutes = function (totalTime) {
        return TimelineComponent_1.floor(totalTime / 60000);
    };
    /**
     * @name floor
     * @desc Floor a number.
     * @param {number} number: the number to floor.
     * @returns {number} the floored number.
     * @memberOf TimelineComponent
     */
    TimelineComponent.floor = function (number) {
        return Math.floor(number);
    };
    /**
     * @name pad2
     * @desc Return formatted string number OO.
     * @param {number} number: the number to pad.
     * @returns {string} the padded number.
     * @memberOf TimelineComponent
     */
    TimelineComponent.pad2 = function (number) {
        return (number < 10 ? '0' : '') + number;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "flags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "marks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "playedTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "totalTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "refresh", void 0);
    TimelineComponent = TimelineComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',template:/*ion-inline-start:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/timeline/timeline.html"*/'<div class="timeline">\n\n  <!-- FOREACH FLAGS -->\n  <div *ngFor="let flag of flags" class="flag tooltip" [ngStyle]="{\'left\': (((flag.timestamp * 100) / totalTime) - 1) + \'%\', \'color\': flag.color}">\n    <ion-icon (click)="sendSelectedFlag(flag.id)" name="bookmark"></ion-icon>\n    <span class="tooltiptext">{{getFormattedTime(flag.timestamp)}}</span>\n  </div>\n  <!-- END FOREACH FLAGS -->\n\n  <!-- FOREACH MARKS -->\n  <div *ngFor="let mark of marks" class="mark" [ngStyle]="{\'left\': ((mark * 100) / totalTime) + \'%\'}">\n    <div class="mark-icon" [ngClass]="{\'large\': ((mark % 60000) === 0)}"></div>\n  </div>\n  <!-- END FOREACH MARKS -->\n\n</div>\n\n<!-- CURSOR -->\n<div class="play-cursor" [ngStyle]="{\'left\': (totalTime !== 0) ? (((playedTime * 100) / totalTime) - 1) + \'%\' : \'-1%\'}">\n</div>\n\n<!-- BEGIN / END OF TIMELINE -->\n<div class="end">{{getFormattedTime(totalTime)}}</div>\n'/*ion-inline-end:"/Users/jeromeruby/Documents/Formation/ProjetPalo/restitUx/src/components/timeline/timeline.html"*/
        })
    ], TimelineComponent);
    return TimelineComponent;
    var TimelineComponent_1;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsColor = '#444444';
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#24a5c0';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#98e2e5';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = false;
        this.showUnits = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
    }
    return CircleProgressOptions;
}());

var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions) {
        var _this = this;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i = 0, _a = Object.keys(_this.options); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                    _this.options[name_1] = _this[name_1];
                }
                else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                    _this.options[name_1] = _this.templateOptions[name_1];
                }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = Math.abs(+_this.options.percent);
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.render = function () {
            _this.applyOptions();
            if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate();
            }
            else {
                _this.draw(_this.options.percent);
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 *
                (_this.options.clockwise ? circlePercent : (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                _a = _this.options.clockwise ? [1, 1] : [1, 0], largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = _this.options.clockwise ? [0, 1] : [0, 0], largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = formatted.slice();
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = _this.options.title.slice();
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = formatted.slice();
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = _this.options.subtitle.slice();
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var rowCount = 0, rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                for (var _i = 0, _c = title.texts; _i < _c.length; _i++) {
                    var span = _c[_i];
                    title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                for (var _d = 0, _e = subtitle.texts; _d < _e.length; _d++) {
                    var span = _e[_d];
                    subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // Bring it all together
            _this.svg = {
                width: boxSize,
                height: boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + " \n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 -
                        _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
            };
            var _a, _b;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.getAnimationParameters = function () {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            if (_this.options.percent >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = _this.options.percent;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && _this.options.percent > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function () {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var _a = _this.getAnimationParameters(), step = _a.step, interval = _a.interval;
            var count = 0;
            _this._timerSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, interval).subscribe(function () {
                count += step;
                if (count <= _this.options.percent) {
                    if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                        _this.draw(_this.options.percent);
                        _this._timerSubscription.unsubscribe();
                    }
                    else {
                        _this.draw(count);
                    }
                }
                else {
                    _this.draw(_this.options.percent);
                    _this._timerSubscription.unsubscribe();
                }
            });
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate();
            }
            _this.onClick.emit(event);
        };
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    CircleProgressComponent.prototype.isDrawing = function () {
        return !!(this._timerSubscription && !this._timerSubscription.closed);
    };
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CircleProgressComponent.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "radius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "space", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "percent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "toFixed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "maxPercent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "renderOnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "units", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "unitsColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CircleProgressComponent.prototype, "titleFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "titleColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "animationDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showSubtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showUnits", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showBackground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", CircleProgressOptions)
    ], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'circle-progress',
            template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n         [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\"\n         [attr.class]=\"options.class\">\n      <circle *ngIf=\"options.showBackground\"\n              [attr.cx]=\"svg.backgroundCircle.cx\"\n              [attr.cy]=\"svg.backgroundCircle.cy\"\n              [attr.r]=\"svg.backgroundCircle.r\"\n              [attr.fill]=\"svg.backgroundCircle.fill\"\n              [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n              [attr.stroke]=\"svg.backgroundCircle.stroke\"\n              [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n      <circle *ngIf=\"options.showInnerStroke\"\n              [attr.cx]=\"svg.circle.cx\"\n              [attr.cy]=\"svg.circle.cy\"\n              [attr.r]=\"svg.circle.r\"\n              [attr.fill]=\"svg.circle.fill\"\n              [attr.stroke]=\"svg.circle.stroke\"\n              [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n      <path\n        [attr.d]=\"svg.path.d\"\n        [attr.stroke]=\"svg.path.stroke\"\n        [attr.stroke-width]=\"svg.path.strokeWidth\"\n        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n        [attr.fill]=\"svg.path.fill\"/>\n      <text *ngIf=\"options.showTitle || options.showUnits || options.showSubtitle\"\n            alignment-baseline=\"baseline\"\n            [attr.x]=\"svg.circle.cx\"\n            [attr.y]=\"svg.circle.cy\"\n            [attr.text-anchor]=\"svg.title.textAnchor\">\n        <ng-container *ngIf=\"options.showTitle\">\n          <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                 [attr.x]=\"svg.title.x\"\n                 [attr.y]=\"svg.title.y\"\n                 [attr.dy]=\"tspan.dy\"\n                 [attr.font-size]=\"svg.title.fontSize\"\n                 [attr.fill]=\"svg.title.color\">{{tspan.span}}\n          </tspan>\n        </ng-container>\n        <tspan *ngIf=\"options.showUnits\"\n               [attr.font-size]=\"svg.units.fontSize\"\n               [attr.fill]=\"svg.units.color\">{{svg.units.text}}\n        </tspan>\n        <ng-container *ngIf=\"options.showSubtitle\">\n          <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                 [attr.x]=\"svg.subtitle.x\"\n                 [attr.y]=\"svg.subtitle.y\"\n                 [attr.dy]=\"tspan.dy\"\n                 [attr.font-size]=\"svg.subtitle.fontSize\"\n                 [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}\n          </tspan>\n        </ng-container>\n      </text>\n    </svg>\n  "
        }),
        __metadata("design:paramtypes", [CircleProgressOptions])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

//# sourceMappingURL=progress-circle.js.map

/***/ })

},[678]);
//# sourceMappingURL=main.js.map