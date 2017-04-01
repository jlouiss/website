webpackJsonp([1,5],{

/***/ 404:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(536);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(197);
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
    function AppComponent(router) {
        router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationStart */]) {
                if (window.localStorage) {
                    if (!localStorage.getItem('firstLoad')) {
                        localStorage['firstLoad'] = true;
                        window.location.reload();
                    }
                    else
                        localStorage.removeItem('firstLoad');
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(602),
            styles: [__webpack_require__(590)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_page_scroll__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fullscreen_video_fullscreen_video_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__secondary_video_secondary_video_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__staff_staff_component__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'staff', component: __WEBPACK_IMPORTED_MODULE_14__staff_staff_component__["a" /* StaffComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__fullscreen_video_fullscreen_video_component__["a" /* FullscreenVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__secondary_video_secondary_video_component__["a" /* SecondaryVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__staff_staff_component__["a" /* StaffComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_6_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.title = 'Contact';
    }
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(603),
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(604),
            styles: [__webpack_require__(592)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullscreenVideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullscreenVideoComponent = (function () {
    function FullscreenVideoComponent() {
    }
    FullscreenVideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-fullscreen-video',
            template: __webpack_require__(605),
            styles: [__webpack_require__(593)]
        }), 
        __metadata('design:paramtypes', [])
    ], FullscreenVideoComponent);
    return FullscreenVideoComponent;
}());
//# sourceMappingURL=fullscreen-video.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Home';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            var staffSVG = Raphael('staff-svg', '1244.2', '847.3');
            var raphaelStaff = [];
            var paths = [{
                    path: 'M161.9,843.3 167.2,803.4 171.6,783.1 177.8,742.5 177.8,716.9 161.9,682.4 136.3,618 123.9,571.2 117.8,528.8 117.8,499.7 105.4,490.9 96.6,490.9 54.2,427.6 35.7,389.4 60.4,350.5 102.7,307.3 116.9,290.5 115.1,276.4 120.4,261.4 130.1,253.4 138.9,247.2 135.4,235.8 136.3,228.7 137.2,209.3 133.6,194.3 136.3,184.5 146,167.8 154.8,129.8 167.2,111.3 183.1,101.6 206.9,97.2 238.7,105.1 257.2,116.6 266.1,113.9 275.8,120.1 282,136.9 286.4,174.8 286.4,196.9 278.4,209.3 286.4,233.1 286.4,252.5 286.4,271.9 297.8,282.5 297.8,294 304,308.1 299.6,314.3 294.3,330.2 283.7,354.9 252.8,401.7 239.6,427.6 244,446.7 261.7,470.2 277.5,470.2 266.1,553.6 261.7,644.5 259.9,662.1 249.3,695.7 252.8,729.2 250.2,760.1 240.5,791 226.3,827.2 224.6,843.3 z',
                    name: ''
                }, {
                    path: 'M342.9,843.3 342.9,820.2 338.5,801.6 318.2,796.3 298.7,781.3 298.7,746.9 267.8,746.9 257.2,738.1 257.2,677.1 259.9,662.1 266.8,548.4 277.5,470.2 261.7,470.2 244,446.7 239.6,427.6 283.7,354.9 299.6,314.3 304,308.1 312,300.2 312,289.6 314.6,279.9 314.6,264.9 317.3,249 311.1,216.3 304,181 321.7,132.5 348.2,116.6 374.6,112.2 395,119.2 410.8,124.5 428.5,152.8 433.8,181 429.4,226.9 425,264 420.6,281.7 433.8,293.1 424.1,302.8 425,310.8 411.7,334.6 394.1,367.3 385.2,395.5 389.7,419.4 426.7,433.5 433.8,435.3 433.8,505.9 433.8,570.3 425.9,599.5 433.8,625.9 433.8,731.9 429.4,767.2 428.5,774.3 410,782.2 402,784 410.8,843.3 z',
                    name: ''
                }, {
                    path: 'M496.5,843.3 483.2,816.6 473.5,792.8 468.2,752.2 468.2,724.8 457.6,676.3 433.8,625.9 425.9,599.5 433.8,570.3 433.8,435.3 389.7,419.4 385.2,395.5 394.1,367.3 425,310.8 424.1,302.8 433.8,293.1 440.9,265.8 462,239.3 466.5,227.8 496.5,222.5 526.5,209.3 541.5,188.1 534.4,177.5 527.4,136.9 521.2,117.5 523,89.2 524.7,60.1 520.3,46 541.5,33.6 557.4,23 579.5,23 599.8,27.4 621.7,37.1 628,51.2 621.7,58.3 628,74.2 628,90.1 628,105.1 634.2,106.9 634.2,124.5 621.7,147.5 614.8,157.2 613,170.4 621.7,189 628,198.7 679.2,230.5 696,239.3 703,254.3 711,283.4 711,327.6 711,366.4 697.8,396.4 683.6,427.6 688,470.2 690.7,572.1 688,603 673.9,632.1 666,640.1 661.6,668.3 655.4,694.8 651,736.3 653.6,782.2 660.7,843.3 589.2,843.3 590.1,829 584.8,821.9 572.4,758.4 564.4,718.6 559.2,727.5 553,768.1 554.7,795.4 568,829 573.3,843.3 z',
                    name: 'Claudio Nieddu'
                }, {
                    path: 'M714.5,843.3 722.5,805.2 732.2,793.7 732.2,698.3 711,624.2 700.4,563.3 700.4,532.4 716.3,491.8 700.4,460.9 700.4,439.7 691.6,427.6 691.6,410 711,366.4 711,283.4 703,254.3 724.2,222.5 732.2,216.3 727.8,216.3 716.3,191.6 706.6,153.7 711,121 725.1,87.4 743.7,67.1 775.4,62.7 799.3,72.4 824.9,97.2 832.8,112.2 832.8,139.5 827.5,158.1 823.1,192.5 816,216.3 809.9,221.6 800.2,220.7 824,246.3 822.2,265.8 863.7,327.6 877.8,364.6 873.4,400.8 877.8,427.6 877.8,458.2 877.8,474.1 862.8,491.8 877.8,540.3 883.1,572.1 883.1,601.2 863.7,614.5 854,613.6 828.4,741.6 809,843.3 z',
                    name: 'Laura Balsemin'
                }, {
                    path: 'M863.7,843.3 809,843.3 854,613.6 863.7,614.5 883.1,601.2 883.1,572.1 877.8,540.3 862.8,491.8 877.8,474.1 877.8,427.6 873.4,400.8 877.8,364.6 863.7,327.6 822.2,265.8 824,246.3 839,188.1 854,175.7 883.1,165.1 893.7,151.9 893.7,115.7 887.6,98.9 893.7,80.4 898.1,84.8 904.3,57.4 919.3,39.8 943.2,33.6 966.1,38.9 981.1,54.8 985.5,76.8 985.5,94.5 981.1,99.8 985.5,102.4 981.1,121 969.7,130.7 961.7,150.1 967,168.7 985.5,189 990,194.3 990,249 990,280.8 983.8,288.7 974.9,308.1 966.1,325.8 959.9,339 970.5,359.3 974.1,368.2 975.8,411.4 995.3,444.1 1006.7,462.6 987.3,519.1 986.4,536.8 981.1,554.4 975.8,587.1 971.4,665.7 977.6,684.2 982.9,708 990,753.1 991.7,827.2 986.4,843.3 923.7,843.3 922,787.5 922,766.3 919.3,744.2 907.9,729.2 897.3,671 888.4,620.6 883.1,610.1 872.5,650.7 868.1,675.4 869,716.9 869.9,767.2 z',
                    name: 'Enrico Nieddu'
                }, {
                    path: 'M992.6,843.3 1006.7,796.3 1016.4,738.1 1027,681.6 1018.2,657.7 987.3,618 987.3,587.1 987.3,568.6 986.4,536.8 987.3,519.1 1006.7,462.6 975.8,411.4 974.1,368.2 959.9,339 990,280.8 990,194.3 1002.3,166.9 1027,148.4 1039.4,148.4 1050.9,143.1 1067.6,148.4 1093.2,170.4 1112.7,202.2 1121.5,240.2 1127.7,274.6 1139.1,286.1 1139.1,305.5 1147.1,324.9 1147.1,339.9 1151.5,365.5 1165.6,387.6 1165.6,407 1175.3,410.5 1185.9,433.2 1191.2,442.3 1191.2,449.4 1194.8,477.7 1184.2,497.1 1170,498.8 1155,497.9 1152.4,509.4 1145.3,516.5 1141.8,544.7 1131.2,587.1 1126.8,628.6 1118.8,653.3 1131.2,744.2 1140,819.3 1138.3,834.3 1133.9,843.3 1065,843.3 1070.3,817.5 1068.5,796.3 1052.6,824.6 1043.8,843.3 z',
                    name: 'Gessica'
                }];
            paths.forEach(function (path, index) {
                var staffPath = staffSVG.path(path.path);
                staffPath.attr({
                    id: 'path' + index,
                    fill: 'rgba(0,0,0,0.2)',
                    //          fill: 'white',
                    stroke: 'none',
                    opacity: '1'
                })
                    .data('id', 'path' + index)
                    .data('name', path.name)
                    .mouseover(function (e) {
                    this.node.style.opacity = 0;
                })
                    .mouseout(function (e) {
                    this.node.style.opacity = 1;
                })
                    .click(function (e) {
                    console.log(e);
                });
                raphaelStaff.push(staffPath);
            });
            for (var i = 0; i < raphaelStaff.length; i++) {
                if (raphaelStaff[i].data('id') == 'path22')
                    raphaelStaff[i].node.setAttribute('fill', 'gold');
            }
            // $('.video-overlay').on('click', function() {
            //   if (isPrimaryVideoMuted)
            //     primaryVideo.unMute()
            //   else
            //     primaryVideo.mute()
            //
            //   isPrimaryVideoMuted = !isPrimaryVideoMuted
            // })
            $(window).on('load resize', function () {
                console.log('onload');
                // if ( $('#primary-video').length ) rescale(primaryVideo);
                // if ( $('#secondary-video').length ) rescale(secondaryVideo);
                if ($('#staff-svg').length)
                    fixSVG();
            });
            fixSVG();
            function fixSVG() {
                console.log('fix svg');
                var imgWidth = $('#staff-img').width();
                var imgHeight = $('#staff-img').height();
                var svgWidth = $('#staff-svg svg').width();
                var ratio = (imgWidth + imgHeight) / (1244.2 + 847.3);
                //      ratio = (imgWidth / 1244.2)
                //      ratio = (imgHeight / 847.3)
                ratio *= 1.01;
                console.log(ratio);
                $('path').css({
                    'transform': 'scale(' + ratio + ')'
                });
                $('#staff-svg svg').css({
                    'max-width': imgWidth + 'px',
                    'max-height': imgHeight + 'px',
                    'position': 'absolute',
                    'top': 'auto',
                    'bottom': '0',
                    'left': '50%',
                    'transform': 'translate(-50%)'
                });
                $('#staff-svg').css({ opacity: 1 });
            }
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(606),
            styles: [__webpack_require__(594)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(607),
            styles: [__webpack_require__(595)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryVideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondaryVideoComponent = (function () {
    function SecondaryVideoComponent() {
    }
    SecondaryVideoComponent.prototype.ngOnInit = function () {
    };
    SecondaryVideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-secondary-video',
            template: __webpack_require__(608),
            styles: [__webpack_require__(596)]
        }), 
        __metadata('design:paramtypes', [])
    ], SecondaryVideoComponent);
    return SecondaryVideoComponent;
}());
//# sourceMappingURL=secondary-video.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffComponent = (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            var staffSVG = Raphael('staff-svg', '1244.2', '847.3');
            var raphaelStaff = [];
            var paths = [{
                    path: 'M161.9,843.3 167.2,803.4 171.6,783.1 177.8,742.5 177.8,716.9 161.9,682.4 136.3,618 123.9,571.2 117.8,528.8 117.8,499.7 105.4,490.9 96.6,490.9 54.2,427.6 35.7,389.4 60.4,350.5 102.7,307.3 116.9,290.5 115.1,276.4 120.4,261.4 130.1,253.4 138.9,247.2 135.4,235.8 136.3,228.7 137.2,209.3 133.6,194.3 136.3,184.5 146,167.8 154.8,129.8 167.2,111.3 183.1,101.6 206.9,97.2 238.7,105.1 257.2,116.6 266.1,113.9 275.8,120.1 282,136.9 286.4,174.8 286.4,196.9 278.4,209.3 286.4,233.1 286.4,252.5 286.4,271.9 297.8,282.5 297.8,294 304,308.1 299.6,314.3 294.3,330.2 283.7,354.9 252.8,401.7 239.6,427.6 244,446.7 261.7,470.2 277.5,470.2 266.1,553.6 261.7,644.5 259.9,662.1 249.3,695.7 252.8,729.2 250.2,760.1 240.5,791 226.3,827.2 224.6,843.3 z',
                    name: ''
                }, {
                    path: 'M342.9,843.3 342.9,820.2 338.5,801.6 318.2,796.3 298.7,781.3 298.7,746.9 267.8,746.9 257.2,738.1 257.2,677.1 259.9,662.1 266.8,548.4 277.5,470.2 261.7,470.2 244,446.7 239.6,427.6 283.7,354.9 299.6,314.3 304,308.1 312,300.2 312,289.6 314.6,279.9 314.6,264.9 317.3,249 311.1,216.3 304,181 321.7,132.5 348.2,116.6 374.6,112.2 395,119.2 410.8,124.5 428.5,152.8 433.8,181 429.4,226.9 425,264 420.6,281.7 433.8,293.1 424.1,302.8 425,310.8 411.7,334.6 394.1,367.3 385.2,395.5 389.7,419.4 426.7,433.5 433.8,435.3 433.8,505.9 433.8,570.3 425.9,599.5 433.8,625.9 433.8,731.9 429.4,767.2 428.5,774.3 410,782.2 402,784 410.8,843.3 z',
                    name: ''
                }, {
                    path: 'M496.5,843.3 483.2,816.6 473.5,792.8 468.2,752.2 468.2,724.8 457.6,676.3 433.8,625.9 425.9,599.5 433.8,570.3 433.8,435.3 389.7,419.4 385.2,395.5 394.1,367.3 425,310.8 424.1,302.8 433.8,293.1 440.9,265.8 462,239.3 466.5,227.8 496.5,222.5 526.5,209.3 541.5,188.1 534.4,177.5 527.4,136.9 521.2,117.5 523,89.2 524.7,60.1 520.3,46 541.5,33.6 557.4,23 579.5,23 599.8,27.4 621.7,37.1 628,51.2 621.7,58.3 628,74.2 628,90.1 628,105.1 634.2,106.9 634.2,124.5 621.7,147.5 614.8,157.2 613,170.4 621.7,189 628,198.7 679.2,230.5 696,239.3 703,254.3 711,283.4 711,327.6 711,366.4 697.8,396.4 683.6,427.6 688,470.2 690.7,572.1 688,603 673.9,632.1 666,640.1 661.6,668.3 655.4,694.8 651,736.3 653.6,782.2 660.7,843.3 589.2,843.3 590.1,829 584.8,821.9 572.4,758.4 564.4,718.6 559.2,727.5 553,768.1 554.7,795.4 568,829 573.3,843.3 z',
                    name: 'Claudio Nieddu'
                }, {
                    path: 'M714.5,843.3 722.5,805.2 732.2,793.7 732.2,698.3 711,624.2 700.4,563.3 700.4,532.4 716.3,491.8 700.4,460.9 700.4,439.7 691.6,427.6 691.6,410 711,366.4 711,283.4 703,254.3 724.2,222.5 732.2,216.3 727.8,216.3 716.3,191.6 706.6,153.7 711,121 725.1,87.4 743.7,67.1 775.4,62.7 799.3,72.4 824.9,97.2 832.8,112.2 832.8,139.5 827.5,158.1 823.1,192.5 816,216.3 809.9,221.6 800.2,220.7 824,246.3 822.2,265.8 863.7,327.6 877.8,364.6 873.4,400.8 877.8,427.6 877.8,458.2 877.8,474.1 862.8,491.8 877.8,540.3 883.1,572.1 883.1,601.2 863.7,614.5 854,613.6 828.4,741.6 809,843.3 z',
                    name: 'Laura Balsemin'
                }, {
                    path: 'M863.7,843.3 809,843.3 854,613.6 863.7,614.5 883.1,601.2 883.1,572.1 877.8,540.3 862.8,491.8 877.8,474.1 877.8,427.6 873.4,400.8 877.8,364.6 863.7,327.6 822.2,265.8 824,246.3 839,188.1 854,175.7 883.1,165.1 893.7,151.9 893.7,115.7 887.6,98.9 893.7,80.4 898.1,84.8 904.3,57.4 919.3,39.8 943.2,33.6 966.1,38.9 981.1,54.8 985.5,76.8 985.5,94.5 981.1,99.8 985.5,102.4 981.1,121 969.7,130.7 961.7,150.1 967,168.7 985.5,189 990,194.3 990,249 990,280.8 983.8,288.7 974.9,308.1 966.1,325.8 959.9,339 970.5,359.3 974.1,368.2 975.8,411.4 995.3,444.1 1006.7,462.6 987.3,519.1 986.4,536.8 981.1,554.4 975.8,587.1 971.4,665.7 977.6,684.2 982.9,708 990,753.1 991.7,827.2 986.4,843.3 923.7,843.3 922,787.5 922,766.3 919.3,744.2 907.9,729.2 897.3,671 888.4,620.6 883.1,610.1 872.5,650.7 868.1,675.4 869,716.9 869.9,767.2 z',
                    name: 'Enrico Nieddu'
                }, {
                    path: 'M992.6,843.3 1006.7,796.3 1016.4,738.1 1027,681.6 1018.2,657.7 987.3,618 987.3,587.1 987.3,568.6 986.4,536.8 987.3,519.1 1006.7,462.6 975.8,411.4 974.1,368.2 959.9,339 990,280.8 990,194.3 1002.3,166.9 1027,148.4 1039.4,148.4 1050.9,143.1 1067.6,148.4 1093.2,170.4 1112.7,202.2 1121.5,240.2 1127.7,274.6 1139.1,286.1 1139.1,305.5 1147.1,324.9 1147.1,339.9 1151.5,365.5 1165.6,387.6 1165.6,407 1175.3,410.5 1185.9,433.2 1191.2,442.3 1191.2,449.4 1194.8,477.7 1184.2,497.1 1170,498.8 1155,497.9 1152.4,509.4 1145.3,516.5 1141.8,544.7 1131.2,587.1 1126.8,628.6 1118.8,653.3 1131.2,744.2 1140,819.3 1138.3,834.3 1133.9,843.3 1065,843.3 1070.3,817.5 1068.5,796.3 1052.6,824.6 1043.8,843.3 z',
                    name: 'Gessica'
                }];
            paths.forEach(function (path, index) {
                var staffPath = staffSVG.path(path.path);
                staffPath.attr({
                    id: 'path' + index,
                    fill: 'rgba(0,0,0,0.2)',
                    //          fill: 'white',
                    stroke: 'none',
                    opacity: '1'
                })
                    .data('id', 'path' + index)
                    .data('name', path.name)
                    .mouseover(function (e) {
                    this.node.style.opacity = 0;
                })
                    .mouseout(function (e) {
                    this.node.style.opacity = 1;
                })
                    .click(function (e) {
                    console.log(e);
                });
                raphaelStaff.push(staffPath);
            });
            for (var i = 0; i < raphaelStaff.length; i++) {
                if (raphaelStaff[i].data('id') == 'path22')
                    raphaelStaff[i].node.setAttribute('fill', 'gold');
            }
            // $('.video-overlay').on('click', function() {
            //   if (isPrimaryVideoMuted)
            //     primaryVideo.unMute()
            //   else
            //     primaryVideo.mute()
            //
            //   isPrimaryVideoMuted = !isPrimaryVideoMuted
            // })
            $(window).on('load resize', function () {
                console.log('onload');
                // if ( $('#primary-video').length ) rescale(primaryVideo);
                // if ( $('#secondary-video').length ) rescale(secondaryVideo);
                if ($('#staff-svg').length)
                    fixSVG();
            });
            fixSVG();
            function fixSVG() {
                console.log('fix svg');
                var imgWidth = $('#staff-img').width();
                var imgHeight = $('#staff-img').height();
                var svgWidth = $('#staff-svg svg').width();
                var ratio = (imgWidth + imgHeight) / (1244.2 + 847.3);
                //      ratio = (imgWidth / 1244.2)
                //      ratio = (imgHeight / 847.3)
                ratio *= 1.01;
                console.log(ratio);
                $('path').css({
                    'transform': 'scale(' + ratio + ')'
                });
                $('#staff-svg svg').css({
                    'max-width': imgWidth + 'px',
                    'max-height': imgHeight + 'px',
                    'position': 'absolute',
                    'top': 'auto',
                    'bottom': '0',
                    'left': '50%',
                    'transform': 'translate(-50%)'
                });
                $('#staff-svg').css({ opacity: 1 });
            }
        });
    };
    StaffComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-staff',
            template: __webpack_require__(609),
            styles: [__webpack_require__(597)]
        }), 
        __metadata('design:paramtypes', [])
    ], StaffComponent);
    return StaffComponent;
}());
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ 536:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".footer {\n  border-top: 1px solid #636c72;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  font-family: 'Roboto Condensed'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".video-wrapper, .video-overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-wrapper {\n  position: relative;\n  overflow: hidden;\n  z-index: 10;\n  height: calc(100vh - 58px); }\n\n.video-overlay {\n  z-index: -20;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .video-overlay #chevron {\n    position: absolute;\n    bottom: 1rem;\n    color: #636c72;\n    -webkit-transition: color .2s ease-in-out;\n    transition: color .2s ease-in-out; }\n    .video-overlay #chevron:hover {\n      color: #f7f7f9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "#main-content {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  min-height: 250vh;\n  margin: 0; }\n  @media (min-width: 767px) {\n    #main-content {\n      min-height: 100vh; } }\n  #main-content > .col-12 {\n    min-height: calc(100% - 4rem);\n    width: 100%; }\n    @media (min-width: 767px) {\n      #main-content > .col-12:first-child {\n        padding-right: 0; } }\n    @media (min-width: 767px) {\n      #main-content > .col-12:last-child {\n        padding-left: 0; } }\n  #main-content .col-12:last-of-type .teaser {\n    height: 100%; }\n  #main-content .teaser {\n    width: 100%;\n    height: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "a.navbar-brand {\n  padding: 0.3rem 0; }\n\n.navbar-toggler {\n  margin: 0.3rem 0; }\n\n.navbar {\n  border-bottom: 1px solid #636c72;\n  background-color: #000 !important;\n  font-family: Cinzel, serif; }\n\n.nav-link {\n  letter-spacing: .3rem;\n  margin-right: .5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".video-wrapper, .video-overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-wrapper {\n  position: relative;\n  overflow: hidden;\n  z-index: 10;\n  height: 90vh; }\n\n.video-overlay {\n  z-index: -20;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-top: 1px solid #636c72; }\n\n#secondary-video {\n  z-index: -30;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n#staff-svg {\n  opacity: 0;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 100%;\n  height: 100%;\n  max-width: 1244.2px;\n  max-height: 847.3px; }\n  #staff-svg img {\n    z-index: -10;\n    max-width: 100%;\n    max-height: 75%;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%); }\n    @media (min-width: 320px) {\n      #staff-svg img {\n        bottom: -5px; } }\n    @media (min-width: 600px) {\n      #staff-svg img {\n        bottom: -7px; } }\n  #staff-svg svg path {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".video-wrapper, .video-overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-wrapper {\n  position: relative;\n  overflow: hidden;\n  z-index: 10;\n  height: 90vh; }\n\n.video-overlay {\n  z-index: -20;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-top: 1px solid #636c72; }\n\n#secondary-video {\n  z-index: -30;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n#staff-svg {\n  opacity: 0;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 100%;\n  height: 100%;\n  max-width: 1244.2px;\n  max-height: 847.3px; }\n  #staff-svg img {\n    z-index: -10;\n    max-width: 100%;\n    max-height: 75%;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%); }\n    @media (min-width: 320px) {\n      #staff-svg img {\n        bottom: -5px; } }\n    @media (min-width: 600px) {\n      #staff-svg img {\n        bottom: -7px; } }\n  #staff-svg svg path {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-12\">\n\n    <h3 class=\"text-center m-5\">Contattaci</h3>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"email-input\">Indirizzo Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email-input\" aria-describedby=\"emailHelp\" placeholder=\"Inserisci il tuo indirizzo email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">Non invieremo il tuo indirizzo email a nessuno.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email-body\">Messaggio</label>\n        <textarea id=\"email-body\" rows=\"10\" class=\"form-control\"></textarea>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-inverse\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-4 text-center\">\n        <h5>Funny World</h5>\n      </div>\n      <div class=\"col-12 col-sm-4 text-center\">\n        <h5>Nailium</h5>\n      </div>\n      <div class=\"col-12 col-sm-4 text-center\">\n        <h5>Skultura M.A.</h5>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <span class=\"text-muted text-center\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt incidunt magnam nesciunt officia repellendus sunt tempore veniam. Cumque delectus dolores exercitationem expedita ipsa, ipsum pariatur perferendis quod sequi totam.\n      </span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-wrapper\">\n  <div class=\"video-overlay\">\n    <img src=\"../../assets/logos/skultura-white.svg\" alt=\"Skultura\">\n    <a pageScroll href=\"#main-content\"><i class=\"fa fa-chevron-down\" id=\"chevron\"></i></a>\n  </div>\n  <div id=\"primary-video\"></div>\n</div>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<app-fullscreen-video id=\"app-fullscreen-video\"></app-fullscreen-video>\n\n<app-secondary-video id=\"app-secondary-video\"></app-secondary-video>\n\n<div class=\"row\" id=\"main-content\">\n\n  <div class=\"col-12 col-md-7\">\n    <div class=\"teaser col-12\">\n      <img src=\"//lorempixel.com/400/250\" alt=\"Skultura\" class=\"col-8 rounded img-responsive\">\n      <div class=\"col-4 teaser-text text-left ml-3\">\n        <h3>Test Title</h3>\n        <p clsas=\"mb-0\">Short description of some type</p>\n        <a href=\"#\" class=\"text-white\"><i class=\"fa fa-chevron-right\"></i> Link to full article</a>\n      </div>\n    </div>\n\n    <div class=\"teaser col-12\">\n      <div class=\"col-4 teaser-text text-right mr-3\">\n        <h3>Test Title</h3>\n        <p clsas=\"mb-0\">Short description of some type</p>\n        <a href=\"#\" class=\"text-white\"><i class=\"fa fa-chevron-right\"></i> Link to full article</a>\n      </div>\n      <img src=\"//lorempixel.com/400/250\" alt=\"Skultura\" class=\"col-8 rounded img-responsive\">\n    </div>\n  </div>\n\n  <div class=\"col-12 col-md-5\">\n    <div class=\"teaser col-12\">\n      <div class=\"col-4 teaser-text text-right mr-3\">\n        <h3>Test Title</h3>\n        <p clsas=\"mb-0\">Short description of some type</p>\n        <a href=\"#\" class=\"text-white\"><i class=\"fa fa-chevron-right\"></i> Link to full article</a>\n      </div>\n      <img src=\"//lorempixel.com/300/550\" alt=\"Skultura\" class=\"col-8 rounded img-responsive\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\"\n          data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n          (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/logos/skultura-logotype-white.svg\" width=\"auto\" height=\"35\" alt=\"Skultura\">\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"\n       [ngbCollapse]=\"isNavbarCollapsed\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/staff\">Staff</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Chi Siamo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"#\" class=\"nav-link\">Corsi</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/contact\">Contatti</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-wrapper\">\n  <div class=\"video-overlay\">\n    <!--<h1 class=\"display-3 text-center\">Meet the Staff</h1>-->\n    <div id=\"staff-svg\">\n      <img src=\"../../assets/team.png\" alt=\"skultura staff\" id=\"staff-img\">\n    </div>\n  </div>\n  <div id=\"secondary-video\"></div>\n</div>\n"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-wrapper\">\n  <div class=\"video-overlay\">\n    <!--<h1 class=\"display-3 text-center\">Meet the Staff</h1>-->\n    <div id=\"staff-svg\">\n      <img src=\"../../assets/team.png\" alt=\"skultura staff\" id=\"staff-img\">\n    </div>\n  </div>\n  <div id=\"secondary-video\"></div>\n</div>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ })

},[631]);
//# sourceMappingURL=main.bundle.js.map