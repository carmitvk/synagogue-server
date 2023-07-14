(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/3eb":
/*!*******************************************************************!*\
  !*** ./src/app/components/izkor-person/izkor-person.component.ts ***!
  \*******************************************************************/
/*! exports provided: IzkorPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzkorPersonComponent", function() { return IzkorPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_container_image_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-container/image-container.component */ "9QU+");



function IzkorPersonComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.izkorPerson.name, " ");
} }
function IzkorPersonComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.izkorPerson.date, " ");
} }
function IzkorPersonComponent_div_1_image_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image-container", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageName", ctx_r3.izkorPerson.img);
} }
function IzkorPersonComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.izkorPerson.footer, " ");
} }
function IzkorPersonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IzkorPersonComponent_div_1_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IzkorPersonComponent_div_1_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IzkorPersonComponent_div_1_image_container_5_Template, 1, 1, "image-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IzkorPersonComponent_div_1_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.izkorPerson.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.izkorPerson.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.izkorPerson.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.izkorPerson.footer);
} }
class IzkorPersonComponent {
    constructor() { }
    ngOnInit() {
    }
}
IzkorPersonComponent.ɵfac = function IzkorPersonComponent_Factory(t) { return new (t || IzkorPersonComponent)(); };
IzkorPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IzkorPersonComponent, selectors: [["app-izkor-person"]], inputs: { izkorPerson: "izkorPerson" }, decls: 2, vars: 1, consts: [[1, "izkor-person"], ["class", "person-container", 4, "ngIf"], [1, "person-container"], [1, "person-details"], ["class", "name", 4, "ngIf"], [1, "date-img-container"], ["class", "date", 4, "ngIf"], ["class", "person-img", 3, "imageName", 4, "ngIf"], ["class", "izkor-footer", 4, "ngIf"], [1, "name"], [1, "date"], [1, "person-img", 3, "imageName"], [1, "izkor-footer"]], template: function IzkorPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IzkorPersonComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.izkorPerson);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _image_container_image_container_component__WEBPACK_IMPORTED_MODULE_2__["ImageContainerComponent"]], styles: [".izkor-person[_ngcontent-%COMP%] {\n  background-image: url('bcg.jpg');\n  box-shadow: -1px 1px 12px 2px black;\n  -webkit-box-shadow: -1px 1px 55px 4px black;\n  -moz-box-shadow: -3px 1px 99px 4px black;\n  color: #020607ef;\n  font-weight: 800px;\n  -webkit-text-stroke-width: 0.5px;\n  border-radius: 12px;\n  margin: 5%;\n  padding: 10px;\n}\n.izkor-person[_ngcontent-%COMP%]   .person-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n.izkor-person[_ngcontent-%COMP%]   .person-container[_ngcontent-%COMP%]   .date-img-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l6a29yLXBlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBS0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBT0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQVZGO0FBV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVVJO0VBQ0UsYUFBQTtBQVJOIiwiZmlsZSI6Iml6a29yLXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pemtvci1wZXJzb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZycpOy8vY2FybWl0XG4gIC8vIGJveC1zaGFkb3c6IC0zcHggMXB4IDlweCA0cHggIzQxN2Q4ZmQ4O1xuICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMXB4IDlweCA0cHggIzQxN2Q4ZmQ4O1xuICAvLyAtbW96LWJveC1zaGFkb3c6IC0zcHggMXB4IDlweCA0cHggIzQxN2Q4ZmQ4O1xuXG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDEycHggMnB4IGJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDU1cHggNHB4IGJsYWNrO1xuICAtbW96LWJveC1zaGFkb3c6IC0zcHggMXB4IDk5cHggNHB4IGJsYWNrO1xuXG4gIGNvbG9yOiMwMjA2MDdlZjtcbiAgZm9udC13ZWlnaHQ6IDgwMHB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLy8gYm94LXNoYWRvdzogLTNweCAxcHggOXB4IDRweCByZ2JhKDIzMywxODksOTksMC43NSk7XG4gIC8vIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAxcHggOXB4IDRweCByZ2JhKDIzMywxODksOTksMC43NSk7XG4gIC8vIC1tb3otYm94LXNoYWRvdzogLTNweCAxcHggOXB4IDRweCByZ2JhKDIzMywxODksOTksMC43NSk7XG5cbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiA1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgLnBlcnNvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5kYXRlLWltZy1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAvLyAucGVyc29uLWltZ3tcbiAgICAvLyAgIC8vIGJvcmRlci1yYWRpdXM6IDUyJTtcbiAgICAvLyB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bennyvaknin/dev/synagogue/synagogue-server/synagogue-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "1eeH":
/*!***************************************************!*\
  !*** ./src/app/services/images-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ImagesLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesLoader", function() { return ImagesLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const ASSET_PATH = './../../assets/imgs/';
class ImagesLoader {
    constructor() {
        this.imageNames = [
            'barley2.jpg',
            'keep-clean2.png',
            'klaf2.jpg',
            'talk-tfila.gif',
            'candle-big.webp',
            'candle-small.gif',
            'shavuot.webp'
        ];
        this.images = {};
        this.initImages();
    }
    initImages() {
        this.imageNames.forEach((item) => {
            let img = document.createElement('img');
            img.src = ASSET_PATH + item;
            img.className = 'img-class';
            this.images[item] = img;
        });
    }
    getImage(imgName) {
        return this.images[imgName].cloneNode(true);
    }
}
ImagesLoader.ɵfac = function ImagesLoader_Factory(t) { return new (t || ImagesLoader)(); };
ImagesLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesLoader, factory: ImagesLoader.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4F7z":
/*!***************************************************************!*\
  !*** ./src/app/components/open-close/open-close.component.ts ***!
  \***************************************************************/
/*! exports provided: OpenCloseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseComponent", function() { return OpenCloseComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OpenCloseComponent {
    constructor() {
        this.isOpen = true;
    }
    ngOnInit() {
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
}
OpenCloseComponent.ɵfac = function OpenCloseComponent_Factory(t) { return new (t || OpenCloseComponent)(); };
OpenCloseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OpenCloseComponent, selectors: [["app-open-close"]], decls: 5, vars: 2, consts: [[1, "open-close-container"], [3, "click"]], template: function OpenCloseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpenCloseComponent_Template_button_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Toggle PopOver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("The box is now ", ctx.isOpen ? "Open" : "Closed", "!");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuLWNsb3NlLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                // animation triggers go here
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '100px', opacity: 0.5, backgroundColor: 'green' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')])
            ])
        ] } });


/***/ }),

/***/ "9QU+":
/*!*************************************************************************!*\
  !*** ./src/app/components/image-container/image-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainerComponent", function() { return ImageContainerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_images_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/images-loader.service */ "1eeH");




const _c0 = ["imgContainer"];
class ImageContainerComponent {
    constructor(imagesLoader) {
        this.imagesLoader = imagesLoader;
        this.displayedImg = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    set imageName(name) {
        this.displayedImg.next(name);
    }
    ngAfterViewInit() {
        this.displayedImg.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((newImgName) => {
            let newImg = this.imagesLoader.getImage(newImgName);
            let containerNode = this.imgContainer.nativeElement;
            while (containerNode.firstChild) {
                containerNode.removeChild(containerNode.firstChild);
            }
            containerNode.appendChild(newImg);
        })).subscribe();
    }
}
ImageContainerComponent.ɵfac = function ImageContainerComponent_Factory(t) { return new (t || ImageContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_images_loader_service__WEBPACK_IMPORTED_MODULE_3__["ImagesLoader"])); };
ImageContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImageContainerComponent, selectors: [["image-container"]], viewQuery: function ImageContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, inputs: { imageName: "imageName" }, decls: 2, vars: 0, consts: [[1, "img-container"], ["imgContainer", ""]], template: function ImageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-container[_ngcontent-%COMP%]     .img-class {\n  object-fit: fill;\n  height: 100%;\n  width: 100%;\n  border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJpbWFnZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgOjpuZy1kZWVwIC5pbWctY2xhc3Mge1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "A3Ah":
/*!****************************************************************!*\
  !*** ./src/app/pages/views-manager/views-manager.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewsManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsManagerComponent", function() { return ViewsManagerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_view_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/view.interface */ "rxKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_views_two_boards_view_two_boards_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/views/two-boards-view/two-boards-view.component */ "jSPq");
/* harmony import */ var _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/image-container/image-container.component */ "9QU+");







function ViewsManagerComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewsManagerComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.openFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "full screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ViewsManagerComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewsManagerComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.getNextView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "next view");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ViewsManagerComponent_two_boards_view_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "two-boards-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r2.displayedView).viewFields);
} }
function ViewsManagerComponent_image_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "image-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageName", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r3.displayedView).img);
} }
class ViewsManagerComponent {
    // public toggleAnimation: boolean = true;
    constructor(datePipe) {
        var _a;
        this.datePipe = datePipe;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.displayedView = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        this.isFullScreen = false;
        (_a = this.timer$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.updateView(src_app_models_view_interface__WEBPACK_IMPORTED_MODULE_2__["MOCK_VIEWS_DATA"]);
    }
    updateView(views) {
        let currentDate = new Date();
        let formattedDate = this.datePipe.transform(currentDate, 'ddMMyyyy');
        this.selectedViewIndex = views.findIndex(view => view.showDates.includes(formattedDate));
        if (this.selectedViewIndex < 0) {
            let currentDay = currentDate.getDay();
            this.selectedViewIndex = views.findIndex(view => view.showDays.includes(currentDay));
        }
        this.displayedView.next(views[this.selectedViewIndex]);
        // this.toggleAnimation = !this.toggleAnimation;
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(this.getTimeTillNextDay()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.updateView(views);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
    }
    getNextView() {
        let views = src_app_models_view_interface__WEBPACK_IMPORTED_MODULE_2__["MOCK_VIEWS_DATA"];
        this.selectedViewIndex++;
        if (this.selectedViewIndex >= views.length) {
            this.selectedViewIndex = 0;
        }
        this.displayedView.next(views[this.selectedViewIndex]);
    }
    ngOnInit() {
    }
    getTimeTillNextDay() {
        const currentDate = new Date();
        // Set the target time to midnight (00:00 AM) of the next day
        const targetTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, // Add 1 day to reach the next day
        0, // Hour: 0 (midnight)
        0, // Minute: 0
        0 // Second: 0
        );
        // Calculate the time difference in milliseconds + 5 min (300000)
        const timeDifference = targetTime.getTime() - currentDate.getTime() + 300000;
        return timeDifference;
    }
    openFullscreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        this.isFullScreen = true;
    }
    closeFullscreen() {
        let elem = document.documentElement;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } //else if (document.webkitExitFullscreen) { /* Safari */
        //   document.webkitExitFullscreen();
        // } else if (document.msExitFullscreen) { /* IE11 */
        //   document.msExitFullscreen();
        // }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ViewsManagerComponent.ɵfac = function ViewsManagerComponent_Factory(t) { return new (t || ViewsManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"])); };
ViewsManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewsManagerComponent, selectors: [["app-views-manager"]], decls: 7, vars: 8, consts: [[1, "view-container"], ["class", "full-screen", 3, "click", 4, "ngIf"], ["class", "next-view", 3, "click", 4, "ngIf"], [3, "view", 4, "ngIf"], [3, "imageName", 4, "ngIf"], [1, "full-screen", 3, "click"], [1, "next-view", 3, "click"], [3, "view"], [3, "imageName"]], template: function ViewsManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewsManagerComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewsManagerComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ViewsManagerComponent_two_boards_view_3_Template, 2, 3, "two-boards-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ViewsManagerComponent_image_container_5_Template, 2, 3, "image-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.displayedView).viewType === "two-boards-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx.displayedView).viewType === "img-boards-view");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_views_two_boards_view_two_boards_view_component__WEBPACK_IMPORTED_MODULE_5__["TwoBoardsViewComponent"], _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_6__["ImageContainerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.view-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.full-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n}\n\n.next-view[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 85px;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZXdzLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBRUEsYUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InZpZXdzLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWV3LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mdWxsLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB6LWluZGV4OiA5OTk5O1xufVxuLm5leHQtdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogODVweCA7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BkEQ":
/*!****************************************************!*\
  !*** ./src/app/pages/shavuot/shavuot.component.ts ***!
  \****************************************************/
/*! exports provided: ShavuotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShavuotComponent", function() { return ShavuotComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




function ShavuotComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shabatTime_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shabatTime_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shabatTime_r2.value);
} }
function ShavuotComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shabatTime_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shabatTime_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shabatTime_r4.value);
} }
class ShavuotComponent {
    constructor(document) {
        this.document = document;
        this.neightTimes = [
            { title: 'כניסת החג', value: '19:10' },
            { title: 'מנחה ערב חג', value: '19:15' },
            { title: 'תיקון ליל שבועות', value: '23:00' },
        ];
        this.dayTimes = [
            { title: 'שחרית שבועות', value: '05:20' },
            { title: 'שיעור תורה ', value: '17:30' },
            { title: 'מנחה + מגילת רות', value: '18:45' },
            { title: 'ערבית צאת החג', value: '20:10' },
        ];
    }
    ngOnInit() {
        this.updateClock();
    }
    updateClock() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).subscribe(() => this.clock = new Date());
    }
    fullScreen() {
        console.log('inside method');
        document.documentElement.requestFullscreen();
    }
    openFullscreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
    closeFullscreen() {
        let elem = document.documentElement;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
ShavuotComponent.ɵfac = function ShavuotComponent_Factory(t) { return new (t || ShavuotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ShavuotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShavuotComponent, selectors: [["app-shavuot"]], decls: 20, vars: 6, consts: [["id", "home-container", 1, "shavuot", 3, "click"], [1, "header"], [1, "title"], [1, "clock"], [1, "times"], [1, "data-times"], [1, "title-shabat", "sub-title"], [1, "shabat-data-times-container"], ["class", "shabat-data-times", 4, "ngFor", "ngForOf"], [1, "data-times", "reg-data-times"], [1, "title-reg", "sub-title"], [1, "curr-footer"], [1, "shabat-data-times"], [1, "name"], [1, "data-time"]], template: function ShavuotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShavuotComponent_Template_section_click_0_listener() { return ctx.openFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u05D6\u05DE\u05E0\u05D9 \u05EA\u05E4\u05D9\u05DC\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u05EA\u05E4\u05D9\u05DC\u05D5\u05EA \u05DC\u05D9\u05DC \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ShavuotComponent_div_12_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u05EA\u05E4\u05D9\u05DC\u05D5\u05EA \u05D9\u05D5\u05DD \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ShavuotComponent_div_17_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " \u05D1\u05D9\u05EA \u05DB\u05E0\u05E1\u05EA \u05E8\u05E9\u05D1\"\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, ctx.clock, "H:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.neightTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dayTimes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".shavuot[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('barley2.jpg');\n  background-size: cover;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  height: 70px;\n  border-radius: 5px;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: black;\n  position: absolute;\n  left: 10px;\n}\n.shavuot[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex-grow: 1;\n  padding: 20px;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background: #ede574;\n  background: linear-gradient(to right, #e1f5c4, #ede574);\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #7e4c0b;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .reg-data-times[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ede574, #e1f5c4);\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 3vw;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 6vh;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.shavuot[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NoYXZ1b3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFETjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEo7QUFLRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUVBLG1CQUFBO0VBRUEsdURBQUE7QUFMSjtBQU9JO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UsdURBQUE7QUFOTjtBQVFJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFOTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTk47QUFRSTtFQUNFLDRCQUFBO0FBTk47QUFRSTtFQUNFLDBCQUFBO0FBTk47QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSx3Q0FBQTtBQVJKIiwiZmlsZSI6InNoYXZ1b3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhdnVvdCB7XG4gIGZvbnQtZmFtaWx5OiBoYWRhc2ltY2xtLWJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpcmVjdGlvbjogcnRsO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iYXJsZXkyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmMi5qcGdcIik7XG5cbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZ1wiKTtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IDRweCAjMTMxMjEyNTc7XG4gICAgfVxuXG4gICAgLmNsb2NrIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRpbWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5kYXRhLXRpbWVzIHtcbiAgICB3aWR0aDogNDQlO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNiU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDRweCAjMTMxMjEyNTc7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZWRlNTc0O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTFmNWM0LCAjZWRlNTc0KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMWY1YzQsICNlZGU1NzQpO1xuXG4gICAgLnN1Yi10aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U0YzBiO1xuICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLnJlZy1kYXRhLXRpbWVzIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VkZTU3NCwgI2UxZjVjNCk7XG4gICAgfVxuICAgIC5zaGFiYXQtZGF0YS10aW1lcy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogMCA0JTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBmb250LXNpemU6IDN2dztcbiAgICB9XG4gICAgLnNoYWJhdC1kYXRhLXRpbWVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctdG9wOiA2dmg7XG4gICAgfVxuICAgIC50aXRsZS1zaGFiYXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDUwJSAwJTtcbiAgICB9XG4gICAgLnRpdGxlLXJlZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDUwJSAwIDUwJTtcbiAgICB9XG4gIH1cblxuICAuY3Vyci1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDY1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmMi5qcGdcIik7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "DJd6":
/*!************************************************************************!*\
  !*** ./src/app/components/boards/image-board/image-board.component.ts ***!
  \************************************************************************/
/*! exports provided: ImageBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBoardComponent", function() { return ImageBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_container_image_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image-container/image-container.component */ "9QU+");


class ImageBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageBoardComponent.ɵfac = function ImageBoardComponent_Factory(t) { return new (t || ImageBoardComponent)(); };
ImageBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageBoardComponent, selectors: [["image-board"]], inputs: { board: "board" }, decls: 2, vars: 1, consts: [[1, "picture"], [3, "imageName"]], template: function ImageBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "image-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageName", ctx.board.title);
    } }, directives: [_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_1__["ImageContainerComponent"]], styles: [".picture[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ltYWdlLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJpbWFnZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJle1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "JKrb":
/*!**********************************************************!*\
  !*** ./src/app/pages/izkor-view/izkor-view.component.ts ***!
  \**********************************************************/
/*! exports provided: IzkorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzkorViewComponent", function() { return IzkorViewComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image-container/image-container.component */ "9QU+");
/* harmony import */ var _components_izkor_person_izkor_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/izkor-person/izkor-person.component */ "/3eb");






function IzkorViewComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.view.central.title, " ");
} }
function IzkorViewComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "image-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageName", ctx_r3.view.central.img);
} }
function IzkorViewComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.view.central.footer, " ");
} }
function IzkorViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IzkorViewComponent_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IzkorViewComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, IzkorViewComponent_div_1_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.view.central.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.view.central.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.view.central.footer);
} }
function IzkorViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-izkor-person", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const izkorPerson_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trackBy", ctx_r1.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("izkorPerson", izkorPerson_r5);
} }
class IzkorViewComponent {
    constructor() {
        this.displayedView = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        //
        this.view = {
            central: {
                title: 'לעילוי נשמת',
                img: 'candle-big.webp',
                footer: 'להנצחת קרובים נא לפנות לועד בית הכנסת',
            },
            izkorPersons: [
                {
                    img: 'candle-small.gif',
                    name: '  בן שלומית 1אברהם בוזגלו',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: '2יוחאי וענונו בן שרה',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: '3דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: '4דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: '5דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: '6דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
                {
                    img: 'candle-small.gif',
                    name: 'דן אלפסי',
                    date: 'כז חשון תשפ"א',
                    footer: 'ת.נ.צ.ב.ה'
                },
            ],
            durationSec: -1,
        };
        // 
    }
    updateView(views, index, moreToPresent) {
        console.log('updateView1: index=', index, 'moreToPresent=', moreToPresent);
        var currPresenting = moreToPresent < 15 ? moreToPresent : 15;
        var partPersons = views.izkorPersons.slice(index, index + currPresenting);
        this.displayedView.next(partPersons);
        if (views.durationSec > 0) {
            if (moreToPresent - currPresenting <= 0) {
                console.log('updateView2-need back');
                index = 0;
                moreToPresent = this.view.izkorPersons.length;
                currPresenting = 0;
            }
            this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(views.durationSec * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
                this.updateView(views, index + currPresenting, moreToPresent - currPresenting);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
        }
    }
    trackByFn(idx, izkorPerson) {
        return izkorPerson.name;
    }
    ngOnInit() {
        this.updateView(this.view, 0, this.view.izkorPersons.length);
    }
}
IzkorViewComponent.ɵfac = function IzkorViewComponent_Factory(t) { return new (t || IzkorViewComponent)(); };
IzkorViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IzkorViewComponent, selectors: [["app-izkor-view"]], inputs: { view: "view" }, decls: 4, vars: 4, consts: [[1, "izkor-grid"], ["class", "central-container", 4, "ngIf"], ["class", "izkor-person", 3, "trackBy", 4, "ngFor", "ngForOf"], [1, "central-container"], ["class", "central-title", 4, "ngIf"], ["class", "central-img", 4, "ngIf"], ["class", "central-footer", 4, "ngIf"], [1, "central-title"], [1, "central-img"], [3, "imageName"], [1, "central-footer"], [1, "izkor-person", 3, "trackBy"], [3, "izkorPerson"]], template: function IzkorViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IzkorViewComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IzkorViewComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.central);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.displayedView));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_4__["ImageContainerComponent"], _components_izkor_person_izkor_person_component__WEBPACK_IMPORTED_MODULE_5__["IzkorPersonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".izkor-grid[_ngcontent-%COMP%] {\n  background-image: url('bcg-blue.jpg');\n  background-size: cover;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 0.1px;\n  -webkit-text-stroke-color: black;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;\n  grid-template-rows: 33% 33% 33%;\n  grid-gap: 5px 5px;\n  font-family: \"Arial Narrow\";\n  font-size: 18px;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 50px 1fr 50px;\n  grid-column: 6/8;\n  grid-row: 1/5;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .central-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  font-size: 40px;\n  font-weight: 800px;\n  padding: 10px;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .central-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\n.izkor-grid[_ngcontent-%COMP%]   .app-izkor-person[_ngcontent-%COMP%] {\n  grid-column: 1/1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l6a29yLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBRUEsOENBQUE7RUFDQSwrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBTEY7QUFPQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBbUJBLGdCQUFBO0VBRUEsYUFBQTtBQXhCRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBU0E7RUFDSSxnQkFBQTtBQVBKIiwiZmlsZSI6Iml6a29yLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXprb3ItZ3JpZCB7XG5cbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAxMDE3NWQ4O1xuICAvLyBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLWJsdWUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gIGNvbG9yOiAjYjRjYmRkOy8vY2FybWl0XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcbiAgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzJSAzMyUgMzMlO1xuICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogNXB4IDVweDtcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnO1xuICBmb250LXNpemU6IDE4cHg7XG5cbi5jZW50cmFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA1MHB4O1xuICAuY2VudHJhbC10aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMHB4O1xuICAgIC8vIGZvbnQtZmFtaWx5OiAnQXJpYWwgTmFycm93JztcbiAgICBwYWRkaW5nOjEwcHg7XG4gIH1cbiAgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuY2VudHJhbC1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgZ3JpZC1jb2x1bW46IDYvODtcbiAgLy8gZ3JpZC1jb2x1bW46IDYvODtcbiAgZ3JpZC1yb3c6IDEvNTtcbn1cbi5hcHAtaXprb3ItcGVyc29uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "P/eQ":
/*!*******************************************!*\
  !*** ./src/app/services/times.service.ts ***!
  \*******************************************/
/*! exports provided: TimesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesService", function() { return TimesService; });
/* harmony import */ var _hebcal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hebcal/core */ "x/0h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const CURRENT_CITY = 'Petach Tikvah';
const SUNRISE = "zmanim.sunrise";
const SUNSET = "zmanim.sunset";
const SOF_ZMAN_SHMA_GRA = "zmanim.sofZmanShma";
const MINCHA_GEDOLA = "zmanim.minchaGedola";
const TZEIT_HAKOCHAVIM = "zmanim.tzeitHakochavim";
const SOF_ZMAN_SHMA_MGA = "zmanim.sofZmanShmaMGA";
const MINCHA_CHOL = "zmanim.minchaChol";
const KNISAT_HASHABAT = "zmanim.knisatHashabat";
const TZEIT_HASHABAT = "zmanim.tzeitHashabat";
const MINCHA_FRIDAY = "zmanim.minchaFriday";
const ARVIT_MOTASH = "zmanim.arvitMotash";
const MINCHA_SHABAT = "zmanim.minchaShabat";
const LESSON_PARASHA = "zmanim.lessonPash";
const LESSON_GEMARA = "zmanim.lessonGemara";
const PARASHA = "calendar.parash";
class TimesService {
    constructor() {
        let day = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HDate"]();
        // for (let index = 0; index < 52; index++) {
        //   let minchaShabat = this.getTimes('zmanim.minchaShabat');
        //   let arvitMotash = this.getTimes('zmanim.arvitMotash');
        //   let knisatHashabat = this.getTimes('zmanim.knisatHashabat');
        //   let lessonPash = this.getTimes('zmanim.tzeitHashabat');
        // }
        //       let onOrAfterFriday = new HDate().onOrAfter(5);
        //       let onOrAfterSuterday = new HDate().onOrAfter(6);
        //   const options = {
        //     // start: onOrAfterFriday,
        //     // end : onOrAfterSuterday,
        //     year:2023,
        //     isHebrewYear: false,
        //     il:true,
        //     sedrot: true,
        //     omer: true,
        //     candlelighting: true,
        //     location: Location.lookup(CURRENT_CITY),
        //     locale: 'he',
        //     noRoshChodesh: true,
        //     shabbatMevarchim: true,
        //   }
        //   var events = HebrewCalendar.calendar(options);
        //   console.log('start');
        //   for (const ev of events) {
        //     if(ev.mask === 8208)continue;//ignore modern events like family day
        //     //  if(ev.mask !== 524288)continue;//ignore modern events like family day
        //     //  if(ev.mask !== flags.SPECIAL_SHABBAT)continue;//ignore modern events like family day
        //     const hd = ev.getDate();
        //     const date = hd.greg();
        //     // console.log(ev.render('he'));
        //     // console.log(ev); 
        //     // console.log(ev.getFlags()); 
        //   }
        //   let date = new HDate(0,0,2023)
        //   for(let i=0; i < 365; i++){
        //     date = date.next()
        //     this.getParash(date);
        //   }
        // }
        // const options = {
        //   year: 2023,
        //   isHebrewYear: false,
        //   il:true,
        //   sedrot: true,
        //   omer: true,
        //   candlelighting: true,
        //   location: Location.lookup(CURRENT_CITY),
        //   locale: 'he',
        //   // start:new HDate(),
        //   // end: new HDate().next()
        // }
        // var location = Location.lookup(CURRENT_CITY);
        // var events = HebrewCalendar.calendar(options);
        // events = events.filter(item => item.mask === 32);
        // for (const ev of events) {
        //   const hd = ev.getDate();
        //   const date = hd.greg();
        //   // console.log(ev.render('he'));
        //   var zmanim = new Zmanim(hd, location.getLatitude(), location.getLongitude());
        //   console.log(ev.render('he'), 'tzeit=' + zmanim.tzeit(), 'from function' + this.getTzeitAshabat(hd), ev.date, ev); 
        //   // console.log('zmanim =', zmanim.tzeit());
        // }
        // let date = new HDate();
        // for (let index = 0; index < 365; index++) {
        //   var zmanim = new Zmanim(date, location.getLatitude(), location.getLongitude());
        //   // console.log('zmanim =', zmanim.tzeit());
        //   date = date.next()
        // }
    }
    getTimes(time, hdate = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HDate"]()) {
        let location = _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Location"].lookup(CURRENT_CITY);
        let zmanim = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Zmanim"](hdate, location.getLatitude(), location.getLongitude());
        let result = time;
        let hebrewDate;
        switch (time) {
            case SUNRISE:
                hebrewDate = zmanim.sunrise();
                break;
            case SUNSET:
                hebrewDate = zmanim.sunset();
                break;
            case SOF_ZMAN_SHMA_GRA:
                hebrewDate = zmanim.sofZmanShma();
                break;
            case SOF_ZMAN_SHMA_MGA:
                hebrewDate = zmanim.sofZmanShmaMGA();
                break;
            case MINCHA_GEDOLA:
                hebrewDate = zmanim.minchaGedola();
                break;
            case TZEIT_HAKOCHAVIM:
                hebrewDate = zmanim.sunsetOffset(18); // Add 18 minutes to sunset time
                break;
            case MINCHA_CHOL:
                hebrewDate = this.roundToNearestMinute(zmanim.sunsetOffset(-10)); // decrise 10 minutes to sunset time
                break;
            case MINCHA_FRIDAY:
                hebrewDate = this.roundToNearestMinute(zmanim.sunsetOffset(-10)); // decrise 10 minutes to sunset time
                break;
            case MINCHA_SHABAT:
                hebrewDate = this.getMinchaJerusalem(); // decrise 10 minutes to sunset time
                break;
            case PARASHA:
                result = this.getParash();
                break;
            case ARVIT_MOTASH:
                hebrewDate = this.roundToNearestMinute(new Date(this.getTzeitAshabat().getTime() - (5 * 60 * 1000))); // decrise 5 minutes from tzeit
                break;
            case LESSON_PARASHA:
                hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (130 * 60 * 1000));
                break;
            case LESSON_GEMARA:
                hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (70 * 60 * 1000));
                break;
            case KNISAT_HASHABAT:
                hebrewDate = zmanim.sunsetOffset(-20);
                break;
            case TZEIT_HASHABAT:
                hebrewDate = this.getTzeitAshabat();
                break;
        }
        if (hebrewDate) {
            result = hebrewDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
        }
        return result;
    }
    getMinchaJerusalem(hdate = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HDate"]()) {
        let locationJerusalem = _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Location"].lookup('Jerusalem');
        let onOrAfterSuterday = hdate.onOrAfter(6);
        let zmanimJerusalem = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Zmanim"](onOrAfterSuterday, locationJerusalem.getLatitude(), locationJerusalem.getLongitude());
        return this.roundToNearestMinute(zmanimJerusalem.sunsetOffset(-40));
    }
    getParash(hdate = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HDate"]()) {
        // let onOrAfterFriday = new HDate().onOrAfter(5);
        let onOrAfterSuterday = hdate.onOrAfter(6);
        const options = {
            start: onOrAfterSuterday,
            end: onOrAfterSuterday,
            isHebrewYear: false,
            il: true,
            sedrot: true,
            omer: true,
            candlelighting: true,
            location: _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Location"].lookup(CURRENT_CITY),
            locale: 'he',
            noRoshChodesh: true,
            shabbatMevarchim: true,
        };
        var events = _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HebrewCalendar"].calendar(options);
        let parasha = events.filter(item => item.mask === 512 || item.mask === 1024).sort((a, b) => a.mask - b.mask);
        let result = '';
        if (parasha.length > 0) {
            result = parasha[0].render('he');
            if (parasha.length > 1) {
                result += ' - ' + parasha[1].render('he');
            }
            // console.log('parash:' ,result);
        }
        return result;
    }
    getTzeitAshabat(hdate = new _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HDate"]()) {
        let result;
        // console.log('date ' + hdate.getDay());
        let onOrAfterSuterday = hdate.onOrAfter(6);
        const options = {
            start: onOrAfterSuterday,
            end: onOrAfterSuterday,
            isHebrewYear: false,
            il: true,
            sedrot: false,
            omer: true,
            candlelighting: true,
            location: _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["Location"].lookup(CURRENT_CITY),
            locale: 'he',
            noRoshChodesh: true,
        };
        var events = _hebcal_core__WEBPACK_IMPORTED_MODULE_0__["HebrewCalendar"].calendar(options);
        let tzeit = events.filter(item => item.mask === 32);
        if (!!(tzeit === null || tzeit === void 0 ? void 0 : tzeit.length)) {
            let tzeitEvent = tzeit[0];
            result = tzeitEvent.eventTime;
            // console.log('bb'+ result);
        }
        return result;
    }
    roundToNearestMinute(date) {
        var coeff = 1000 * 60 * 5; // <-- Replace {5} with interval
        return new Date(Math.ceil(date.getTime() / coeff) * coeff);
    }
    ;
}
TimesService.ɵfac = function TimesService_Factory(t) { return new (t || TimesService)(); };
TimesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimesService, factory: TimesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'synagogue';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-component"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Z0qv":
/*!******************************************************************************!*\
  !*** ./src/app/components/boards/boards-manager/boards-manager.component.ts ***!
  \******************************************************************************/
/*! exports provided: BoardsManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsManagerComponent", function() { return BoardsManagerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _time_and_text_board_time_and_text_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time-and-text-board/time-and-text-board.component */ "wcBd");
/* harmony import */ var _image_board_image_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-board/image-board.component */ "DJd6");






function BoardsManagerComponent_time_and_text_board_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "time-and-text-board", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("board", ctx_r0.displayedBoard);
} }
function BoardsManagerComponent_image_board_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "image-board", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("board", ctx_r1.displayedBoard);
} }
class BoardsManagerComponent {
    constructor() {
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.toggleAnimation = true;
    }
    set data(boards) {
        var _a;
        (_a = this.timer$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.updateBoard(boards, 0);
    }
    updateBoard(boards, index) {
        this.displayedBoard = boards[index];
        this.toggleAnimation = !this.toggleAnimation;
        if (this.displayedBoard.durationSec > 0) {
            this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(this.displayedBoard.durationSec * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
                this.updateBoard(boards, (index + 1) % boards.length);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.timer$.unsubscribe();
    }
}
BoardsManagerComponent.ɵfac = function BoardsManagerComponent_Factory(t) { return new (t || BoardsManagerComponent)(); };
BoardsManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BoardsManagerComponent, selectors: [["boards-manager"]], inputs: { data: "data" }, decls: 3, vars: 2, consts: [[1, "board-container"], [3, "board", 4, "ngIf"], [3, "board"]], template: function BoardsManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BoardsManagerComponent_time_and_text_board_1_Template, 1, 1, "time-and-text-board", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BoardsManagerComponent_image_board_2_Template, 1, 1, "image-board", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedBoard.type === "time&text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedBoard.type === "image");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _time_and_text_board_time_and_text_board_component__WEBPACK_IMPORTED_MODULE_4__["TimeAndTextBoardComponent"], _image_board_image_board_component__WEBPACK_IMPORTED_MODULE_5__["ImageBoardComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.board-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JvYXJkcy1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYm9hcmRzLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_talk_talk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/talk/talk.component */ "mTQV");
/* harmony import */ var _pages_shavuot_shavuot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shavuot/shavuot.component */ "BkEQ");
/* harmony import */ var _components_boards_time_and_text_board_time_and_text_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/boards/time-and-text-board/time-and-text-board.component */ "wcBd");
/* harmony import */ var _pages_views_manager_views_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/views-manager/views-manager.component */ "A3Ah");
/* harmony import */ var _components_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/open-close/open-close.component */ "4F7z");
/* harmony import */ var _components_boards_image_board_image_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/boards/image-board/image-board.component */ "DJd6");
/* harmony import */ var _components_boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/boards/boards-manager/boards-manager.component */ "Z0qv");
/* harmony import */ var _components_views_two_boards_view_two_boards_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/views/two-boards-view/two-boards-view.component */ "jSPq");
/* harmony import */ var _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/image-container/image-container.component */ "9QU+");
/* harmony import */ var _pages_izkor_view_izkor_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/izkor-view/izkor-view.component */ "JKrb");
/* harmony import */ var _components_izkor_person_izkor_person_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/izkor-person/izkor-person.component */ "/3eb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_talk_talk_component__WEBPACK_IMPORTED_MODULE_4__["TalkComponent"],
        _pages_shavuot_shavuot_component__WEBPACK_IMPORTED_MODULE_5__["ShavuotComponent"],
        _components_boards_time_and_text_board_time_and_text_board_component__WEBPACK_IMPORTED_MODULE_6__["TimeAndTextBoardComponent"],
        _pages_views_manager_views_manager_component__WEBPACK_IMPORTED_MODULE_7__["ViewsManagerComponent"],
        _components_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_8__["OpenCloseComponent"],
        _components_boards_image_board_image_board_component__WEBPACK_IMPORTED_MODULE_9__["ImageBoardComponent"],
        _components_boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_10__["BoardsManagerComponent"],
        _components_views_two_boards_view_two_boards_view_component__WEBPACK_IMPORTED_MODULE_11__["TwoBoardsViewComponent"],
        _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_12__["ImageContainerComponent"],
        _pages_izkor_view_izkor_view_component__WEBPACK_IMPORTED_MODULE_13__["IzkorViewComponent"],
        _components_izkor_person_izkor_person_component__WEBPACK_IMPORTED_MODULE_14__["IzkorPersonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "jSPq":
/*!*******************************************************************************!*\
  !*** ./src/app/components/views/two-boards-view/two-boards-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TwoBoardsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoBoardsViewComponent", function() { return TwoBoardsViewComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _hebcal_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hebcal/core */ "x/0h");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_times_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/times.service */ "P/eQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../boards/boards-manager/boards-manager.component */ "Z0qv");








function TwoBoardsViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.view.rightTitle, " ");
} }
function TwoBoardsViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.currentHebrewDate, " ");
} }
function TwoBoardsViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TwoBoardsViewComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.dimention = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r3.clock, "H:mm"), " ");
} }
function TwoBoardsViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TwoBoardsViewComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.dimention = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" H:", ctx_r4.dimHeight, "|W:", ctx_r4.dimWidth, " ");
} }
class TwoBoardsViewComponent {
    // public hebrewDate2 = require("hdate-he");
    // <script type="text/javascript" charset="utf-8"
    // src="https://www.hebcal.com/etc/hdate-en.js"></script>
    constructor(router, timesService) {
        this.router = router;
        this.timesService = timesService;
        this.myjson = JSON;
        this.dimention = false;
        this.hebrewDate = __webpack_require__(/*! hebrew-date */ "aHNE");
    }
    ngOnInit() {
        this.updateClock();
        this.initCurrentHebrewDate();
    }
    ngAfterViewInit() {
        this.dimHeight = screen.height;
        this.dimWidth = screen.width;
    }
    updateClock() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).subscribe(() => this.clock = new Date());
    }
    refresh(event) {
        event.stopPropagation();
        event.preventDefault();
        window.location.reload();
    }
    initCurrentHebrewDate() {
        this.currentHebrewDate = new _hebcal_core__WEBPACK_IMPORTED_MODULE_1__["HDate"]().renderGematriya(false);
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(3600 * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.initCurrentHebrewDate();
        })).subscribe();
        //     var currTime = new Date();
        //     console.log('currTime=',currTime)
        //     console.log('currTime=',currTime.getUTCHours() , ':',currTime.getMinutes() )
        //     // new Sedra().get(hDate) ;
        // console.log('diff', (24-currTime.getUTCHours())-(currTime.getMinutes()/60))
        /*
          1. get the current time 10:42
          2. x = calcuate how much time to 00:01
          3. setTimer (x) run it once
          4. the function in the timer should be:
             this.currentHebrewDate = new HDate().renderGematriya(); // if this day is not friday or saterday
             else
          4. go back to 1
        */
    }
    ngOnDestroy() {
        this.timer$.unsubscribe();
    }
}
TwoBoardsViewComponent.ɵfac = function TwoBoardsViewComponent_Factory(t) { return new (t || TwoBoardsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_times_service__WEBPACK_IMPORTED_MODULE_5__["TimesService"])); };
TwoBoardsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TwoBoardsViewComponent, selectors: [["two-boards-view"]], inputs: { view: "view" }, decls: 18, vars: 8, consts: [["id", "home-container", 1, "home"], [1, "header"], ["class", "parasha", 4, "ngIf", "ngIfElse"], ["noRightTitle", ""], [1, "title"], [1, "title-text", 3, "click"], ["class", "clock", 3, "click", 4, "ngIf"], [1, "times"], [1, "board", "right-board"], [3, "data"], [1, "board", "left-board"], [1, "curr-footer"], [1, "footer-text"], [1, "parasha"], [1, "clock", 3, "click"]], template: function TwoBoardsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TwoBoardsViewComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TwoBoardsViewComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TwoBoardsViewComponent_Template_div_click_6_listener($event) { return ctx.refresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TwoBoardsViewComponent_div_8_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TwoBoardsViewComponent_div_9_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "boards-manager", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "boards-manager", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.view.rightTitle)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.timesService.getTimes(ctx.view.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.view.showClock && !ctx.dimention);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.view.showClock && ctx.dimention);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.view.rightBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.view.leftBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.view.footer, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_7__["BoardsManagerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('bcg-blue.jpg');\n  background-size: cover;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 95%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 15px;\n  border-radius: 5px;\n  height: 70px;\n  box-shadow: 10px 10px 19px 4px #13121257;\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 65px;\n  align-items: center;\n  display: flex;\n  height: 70px;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .parasha[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  font-size: 45px;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n  position: absolute;\n  left: 0px;\n}\n.home[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 20px;\n  flex-grow: 1;\n  overflow: hidden;\n}\n.home[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .left-board[_ngcontent-%COMP%] {\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin: 0px 10px 10px 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('bcg.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  font-size: 50px;\n  align-self: center;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R3by1ib2FyZHMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFNQSxxQ0FBQTtFQUNBLHNCQUFBO0FBSkY7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLHdDQUFBO0VBQ0EsZ0NBQUE7QUFmTjtBQWtCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFoQlI7QUFvQkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFsQk47QUFzQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUFyQk47QUF5QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXZCSjtBQTBCRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLHNDQUFBO0VBS0EsZ0NBQUE7QUE3Qko7QUFrQ0U7RUFFRSxnQ0FBQTtBQWpDSjtBQXNDRTtFQUNFLDBCQUFBO0FBcENKO0FBdUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxnQ0FBQTtFQUNBLHdDQUFBO0FBdENKO0FBd0NJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF0Q04iLCJmaWxlIjoidHdvLWJvYXJkcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICBmb250LWZhbWlseTogaGFkYXNpbWNsbS1ib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpcmVjdGlvbjogcnRsO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gZm9udC1mYW1pbHk6IGN1cnNpdmU7XG5cbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnXCIpO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTc1ZDg7Ly9jYXJtaXRcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLWJsdWUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5cbiAgLy8gYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuXG4gIC8vIGJhY2tncm91bmQ6ICNmZGM4MzA7XG4gIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRjODMwLCAjZjM3MzM1KTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAvLyAgIHRvIHJpZ2h0LFxuICAvLyAgICNmZGM4MzAsXG4gIC8vICAgI2YzNzMzNVxuICAvLyApO1xuICAuaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZ1wiKTsvL2Nhcm1pdFxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAxMDE3NWQ4O1xuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZycpOy8vY2FybWl0XG4gICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5cbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBhcmFzaGEge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIGNvbG9yOiAjYjRjYmRkOy8vY2FybWl0XG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcbiAgICAgIC8vIGNvbG9yOiBibGFjazsvL2Nhcm1pdFxuICAgIH1cblxuICAgIC5jbG9jayB7XG4gICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICBjb2xvcjogI2I0Y2JkZDsvL2Nhcm1pdFxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XG4gICAgICAvLyBjb2xvcjogYmxhY2s7Ly9jYXJtaXRcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudGltZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJvYXJkIHtcbiAgICB3aWR0aDogNDQlO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmNi5wbmcnKTtcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcblxuICAgIC8vIGJhY2tncm91bmQ6ICNlZGU1NzQ7XG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMWY1YzQsICNlZGU1NzQpO1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UxZjVjNCwgI2VkZTU3NCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZ1wiKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5sZWZ0LWJvYXJkIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZGU1NzQsICNlMWY1YzQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JjZy5qcGdcIik7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIFxuICB9XG5cbiAgLnRpdGxlLXJlZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA1MCUgMCA1MCU7XG4gIH1cblxuICAuY3Vyci1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnXCIpOy8vY2FybWl0XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9iY2cuanBnJyk7Ly9jYXJtaXRcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCA0cHggIzEzMTIxMjU3O1xuXG4gICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "mTQV":
/*!**********************************************!*\
  !*** ./src/app/pages/talk/talk.component.ts ***!
  \**********************************************/
/*! exports provided: TalkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkComponent", function() { return TalkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TalkComponent {
    constructor() { }
    ngOnInit() {
    }
}
TalkComponent.ɵfac = function TalkComponent_Factory(t) { return new (t || TalkComponent)(); };
TalkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TalkComponent, selectors: [["talk"]], decls: 8, vars: 0, consts: [[1, "clean"], [1, "cls1"], [1, "cls2"], [1, "cls3"]], template: function TalkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DE\u05D5\u05EA\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05DC\u05D3\u05D1\u05E8 \u05D1\u05E9\u05E2\u05EA \u05D4\u05EA\u05E4\u05D9\u05DC\u05D4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "> \u05E8\u05E7 \u05E2\u05DD \u05D4 \u05D9\u05EA\u05D1\u05E8\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">\n");
    } }, styles: [".clean[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhbGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtBQUFGIiwiZmlsZSI6InRhbGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYW57XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcHJheS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "rxKN":
/*!******************************************!*\
  !*** ./src/app/models/view.interface.ts ***!
  \******************************************/
/*! exports provided: MOCK_VIEWS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_VIEWS_DATA", function() { return MOCK_VIEWS_DATA; });
const MOCK_VIEWS_DATA = [
    {
        viewName: 'תצוגה לשבת',
        showDays: [5, 6],
        showDates: [],
        viewType: 'two-boards-view',
        viewFields: {
            title: 'calendar.parash',
            rightBoard: [
                {
                    title: 'זמני התפילות',
                    rows: [
                        { title: 'מנחה ערב שבת', value: '19:35' },
                        { title: 'שחרית שבת', value: '08:30' },
                        { title: 'מנחה מוקדמת', value: '13:20' },
                        { title: 'מנחה שבת', value: '19:10' },
                        { title: 'ערבית מוצ"ש', value: '20:25' },
                    ],
                    durationSec: -1,
                    type: 'time&text'
                }
            ],
            leftBoard: [
                {
                    title: 'שיעורי תורה',
                    rows: [
                        { title: 'תהילים לילדים', value: '10:15' },
                        { title: 'שיעור פרשת שבוע', value: '17:00' },
                        { title: 'שיעור לנשים בתנ"ך', value: '17:15' },
                        { title: 'מסכת בכורות', value: '18:05' },
                    ],
                    durationSec: 30,
                    type: 'time&text'
                },
                {
                    title: 'keep-clean2.png',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'תפילות חול',
                    rows: [
                        { title: 'שחרית מנין ראשון', value: '07:00' },
                        { title: 'שחרית מנין שני', value: '08:10' },
                        { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
                        { title: '--------', value: '--------' },
                        { title: 'יום שני - ספר התניא', value: '21:00' },
                        { title: 'יום שלישי - מגילה', value: '21:00' }
                    ],
                    durationSec: 30,
                    type: 'time&text'
                },
                {
                    title: 'זמני השבוע',
                    rows: [
                        { title: 'הנץ החמה', value: 'zmanim.sunrise' },
                        { title: 'סוף ק"ש למ"א', value: 'zmanim.sofZmanShmaMGA' },
                        { title: 'סוף ק"ש לגר"א', value: 'zmanim.sofZmanShma' },
                        { title: 'זמן מנחה גדולה', value: 'zmanim.minchaGedola' },
                        { title: 'שקיעת החמה', value: 'zmanim.sunset' },
                        { title: 'צאת הכוכבים', value: 'zmanim.tzeitHakochavim' }
                    ],
                    durationSec: 15,
                    type: 'time&text'
                },
                {
                    title: 'talk-tfila.gif',
                    type: 'image',
                    durationSec: 7,
                },
            ],
            footer: 'בית הכנסת רשב"י',
            showClock: true
        }
    },
    {
        viewName: 'תצוגה ליום חול',
        showDays: [0, 1, 2, 3, 4],
        showDates: [],
        viewType: 'two-boards-view',
        viewFields: {
            title: 'זמני התפילות',
            rightBoard: [
                {
                    title: 'תפילות חול',
                    rows: [
                        { title: 'שחרית מנין ראשון', value: '07:00' },
                        { title: 'שחרית מנין שני', value: '08:10' },
                        { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
                        { title: '--------', value: '--------' },
                        { title: 'יום שני - ספר התניא', value: '21:00' },
                        { title: 'יום שלישי - מגילה', value: '21:00' }
                    ],
                    durationSec: -1,
                    type: 'time&text'
                }
            ],
            leftBoard: [
                {
                    title: 'talk-tfila.gif',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'זמני השבוע',
                    rows: [
                        { title: 'הנץ החמה', value: 'zmanim.sunrise' },
                        { title: 'סוף ק"ש למ"א', value: 'zmanim.sofZmanShmaMGA' },
                        { title: 'סוף ק"ש לגר"א', value: 'zmanim.sofZmanShma' },
                        { title: 'זמן מנחה גדולה', value: 'zmanim.minchaGedola' },
                        { title: 'שקיעת החמה', value: 'zmanim.sunset' },
                        { title: 'צאת הכוכבים', value: 'zmanim.tzeitHakochavim' }
                    ],
                    durationSec: 30,
                    type: 'time&text'
                },
                {
                    title: 'keep-clean2.png',
                    type: 'image',
                    durationSec: 6,
                },
            ],
            footer: 'בית הכנסת רשב"י',
            showClock: true,
        }
    }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_izkor_view_izkor_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/izkor-view/izkor-view.component */ "JKrb");
/* harmony import */ var _pages_views_manager_views_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/views-manager/views-manager.component */ "A3Ah");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { OpenCloseComponent } from './components/open-close/open-close.component';
// import { CleanComponent } from './pages/clean/clean.component';
// import { ShavuotComponent } from './pages/shavuot/shavuot.component';



const routes = [
    // { path: '', component: OpenCloseComponent }
    { path: '', component: _pages_views_manager_views_manager_component__WEBPACK_IMPORTED_MODULE_2__["ViewsManagerComponent"] },
    { path: 'izkor', component: _pages_izkor_view_izkor_view_component__WEBPACK_IMPORTED_MODULE_1__["IzkorViewComponent"] }
    // { path: '', component: ShavuotComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wcBd":
/*!****************************************************************************************!*\
  !*** ./src/app/components/boards/time-and-text-board/time-and-text-board.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TimeAndTextBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAndTextBoardComponent", function() { return TimeAndTextBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_times_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/times.service */ "P/eQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TimeAndTextBoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.board.title, " ");
} }
function TimeAndTextBoardComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.timesService.getTimes(item_r2.value));
} }
function TimeAndTextBoardComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TimeAndTextBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeAndTextBoardComponent_div_3_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeAndTextBoardComponent_div_3_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.img);
} }
class TimeAndTextBoardComponent {
    constructor(timesService) {
        this.timesService = timesService;
    }
    ngOnInit() {
    }
}
TimeAndTextBoardComponent.ɵfac = function TimeAndTextBoardComponent_Factory(t) { return new (t || TimeAndTextBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_times_service__WEBPACK_IMPORTED_MODULE_1__["TimesService"])); };
TimeAndTextBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeAndTextBoardComponent, selectors: [["time-and-text-board"]], inputs: { board: "board" }, decls: 4, vars: 2, consts: [[1, "time-and-text-board"], ["class", "title-shabat sub-title", 4, "ngIf"], [1, "shabat-data-times-container"], ["class", "shabat-data-times", 4, "ngFor", "ngForOf"], [1, "title-shabat", "sub-title"], [1, "shabat-data-times"], [1, "name"], ["class", "data-time", 4, "ngIf"], ["class", "picture", 4, "ngIf"], [1, "data-time"], [1, "picture"], [3, "src"]], template: function TimeAndTextBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeAndTextBoardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeAndTextBoardComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.board.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".time-and-text-board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  align-items: center;\n  overflow: hidden;\n  height: 100%;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 3vh;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 6vh;\n  line-height: 6vh;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #010175d8;\n  background-color: #417d8fd8;\n  color: #b4cbdd;\n  color: black;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RpbWUtYW5kLXRleHQtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFERjtBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREY7QUFHQTtFQUNFLDRCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQU9FO0VBRUUsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVBKIiwiZmlsZSI6InRpbWUtYW5kLXRleHQtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnRpbWUtYW5kLXRleHQtYm9hcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpcmVjdGlvbjogcnRsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG5cbi5zaGFiYXQtZGF0YS10aW1lc3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xufVxuLnRpdGxlLXNoYWJhdHtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDUwJSAwJTtcbn1cblxuLnNoYWJhdC1kYXRhLXRpbWVzLWNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDAgNCU7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogNnZoO1xuICBsaW5lLWhlaWdodDogNnZoO1xufVxuXG5cbiAgXG4gIC5zdWItdGl0bGV7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzdlNGMwYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTc1ZDg7Ly9jYXJtaXRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE3ZDhmZDg7Ly9jYXJtaXRcbiAgICBjb2xvcjogI2I0Y2JkZDsvL2Nhcm1pdFxuICAgIGNvbG9yOiBibGFjazsvL2Nhcm1pdFxuICAgIC8vIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map