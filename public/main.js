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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _image_container_image_container_component__WEBPACK_IMPORTED_MODULE_2__["ImageContainerComponent"]], styles: [".izkor-person[_ngcontent-%COMP%] {\n  background-image: url('bcg.jpg');\n  box-shadow: -1px 1px 12px 2px black;\n  -webkit-box-shadow: -1px 1px 55px 4px black;\n  -moz-box-shadow: -3px 1px 99px 4px black;\n  color: #020607ef;\n  font-weight: 800px;\n  -webkit-text-stroke-width: 0.5px;\n  border-radius: 12px;\n  margin: 5%;\n  padding: 10px;\n}\n.izkor-person[_ngcontent-%COMP%]   .person-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n.izkor-person[_ngcontent-%COMP%]   .person-container[_ngcontent-%COMP%]   .date-img-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpemtvci1wZXJzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUtBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQU9BLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFWRjtBQVdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFVSTtFQUNFLGFBQUE7QUFSTiIsImZpbGUiOiJpemtvci1wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXprb3ItcGVyc29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZycpOy8vY2FybWl0XHJcbiAgLy8gYm94LXNoYWRvdzogLTNweCAxcHggOXB4IDRweCAjNDE3ZDhmZDg7XHJcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDFweCA5cHggNHB4ICM0MTdkOGZkODtcclxuICAvLyAtbW96LWJveC1zaGFkb3c6IC0zcHggMXB4IDlweCA0cHggIzQxN2Q4ZmQ4O1xyXG5cclxuICBib3gtc2hhZG93OiAtMXB4IDFweCAxMnB4IDJweCBibGFjaztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDU1cHggNHB4IGJsYWNrO1xyXG4gIC1tb3otYm94LXNoYWRvdzogLTNweCAxcHggOTlweCA0cHggYmxhY2s7XHJcblxyXG4gIGNvbG9yOiMwMjA2MDdlZjtcclxuICBmb250LXdlaWdodDogODAwcHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcblxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC8vIGJveC1zaGFkb3c6IC0zcHggMXB4IDlweCA0cHggcmdiYSgyMzMsMTg5LDk5LDAuNzUpO1xyXG4gIC8vIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAxcHggOXB4IDRweCByZ2JhKDIzMywxODksOTksMC43NSk7XHJcbiAgLy8gLW1vei1ib3gtc2hhZG93OiAtM3B4IDFweCA5cHggNHB4IHJnYmEoMjMzLDE4OSw5OSwwLjc1KTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLnBlcnNvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5kYXRlLWltZy1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAvLyAucGVyc29uLWltZ3tcclxuICAgIC8vICAgLy8gYm9yZGVyLXJhZGl1czogNTIlO1xyXG4gICAgLy8gfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\97252\Desktop\CodingAcademy\synagogue\synagogue-ui\src\main.ts */"zUnb");


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
            'mask-put.png',
            'klaf2.jpg',
            'talk-tfila.gif',
            'candle-big.webp',
            'candle-small.gif',
            'lesson.png',
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
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-container[_ngcontent-%COMP%]     .img-class {\n  object-fit: fill;\n  height: 100%;\n  width: 100%;\n  border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbWFnZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIDo6bmctZGVlcCAuaW1nLWNsYXNzIHtcclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlXHJcbiAgfVxyXG59Il19 */"] });


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






function ViewsManagerComponent_two_boards_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "two-boards-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r0.displayedView).viewFields);
} }
class ViewsManagerComponent {
    // public toggleAnimation: boolean = true;
    constructor() {
        var _a;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.displayedView = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        (_a = this.timer$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.updateView(src_app_models_view_interface__WEBPACK_IMPORTED_MODULE_2__["MOCK_VIEWS_DATA"], 0);
    }
    updateView(views, index) {
        this.displayedView.next(views[index]);
        // this.toggleAnimation = !this.toggleAnimation;
        if (views[index].durationSec > 0) {
            this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(views[index].durationSec * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
                this.updateView(views, (index + 1) % views.length);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
        }
    }
    ngOnInit() {
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
ViewsManagerComponent.ɵfac = function ViewsManagerComponent_Factory(t) { return new (t || ViewsManagerComponent)(); };
ViewsManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewsManagerComponent, selectors: [["app-views-manager"]], decls: 3, vars: 3, consts: [[1, "view-container", 3, "click"], [3, "view", 4, "ngIf"], [3, "view"]], template: function ViewsManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewsManagerComponent_Template_div_click_0_listener() { return ctx.openFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewsManagerComponent_two_boards_view_1_Template, 2, 3, "two-boards-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.displayedView).viewType === "two-boards-view");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_views_two_boards_view_two_boards_view_component__WEBPACK_IMPORTED_MODULE_5__["TwoBoardsViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.view-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3cy1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidmlld3MtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52aWV3LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".shavuot[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('barley2.jpg');\n  background-size: cover;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  height: 70px;\n  border-radius: 5px;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.shavuot[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: black;\n  position: absolute;\n  left: 10px;\n}\n.shavuot[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex-grow: 1;\n  padding: 20px;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background: #ede574;\n  background: linear-gradient(to right, #e1f5c4, #ede574);\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #7e4c0b;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .reg-data-times[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ede574, #e1f5c4);\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 3vw;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 6vh;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.shavuot[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.shavuot[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGF2dW90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0FBQU47QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRE47QUFLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFFQSxtQkFBQTtFQUVBLHVEQUFBO0FBTEo7QUFPSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTE47QUFRSTtFQUNFLHVEQUFBO0FBTk47QUFRSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBTk47QUFRSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU5OO0FBUUk7RUFDRSw0QkFBQTtBQU5OO0FBUUk7RUFDRSwwQkFBQTtBQU5OO0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUFSSiIsImZpbGUiOiJzaGF2dW90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYXZ1b3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBoYWRhc2ltY2xtLWJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhcmxleTIuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmMi5qcGdcIik7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZ1wiKTtcclxuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvY2sge1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpbWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLmRhdGEtdGltZXMge1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDRweCAjMTMxMjEyNTc7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2VkZTU3NDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTFmNWM0LCAjZWRlNTc0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UxZjVjNCwgI2VkZTU3NCk7XHJcblxyXG4gICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTRjMGI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZy1kYXRhLXRpbWVzIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWRlNTc0LCAjZTFmNWM0KTtcclxuICAgIH1cclxuICAgIC5zaGFiYXQtZGF0YS10aW1lcy1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgcGFkZGluZzogMCA0JTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgICAuc2hhYmF0LWRhdGEtdGltZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNnZoO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLXNoYWJhdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwJSA1MCUgMCU7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtcmVnIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1MCUgMCA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3Vyci1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnXCIpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_1__["ImageContainerComponent"]], styles: [".picture[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImltYWdlLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3R1cmV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_image_container_image_container_component__WEBPACK_IMPORTED_MODULE_4__["ImageContainerComponent"], _components_izkor_person_izkor_person_component__WEBPACK_IMPORTED_MODULE_5__["IzkorPersonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".izkor-grid[_ngcontent-%COMP%] {\n  background-image: url('bcg-blue.jpg');\n  background-size: cover;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 0.1px;\n  -webkit-text-stroke-color: black;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;\n  grid-template-rows: 33% 33% 33%;\n  grid-gap: 5px 5px;\n  font-family: \"Arial Narrow\";\n  font-size: 18px;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 50px 1fr 50px;\n  grid-column: 6/8;\n  grid-row: 1/5;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .central-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  font-size: 40px;\n  font-weight: 800px;\n  padding: 10px;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n}\n.izkor-grid[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .central-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\n.izkor-grid[_ngcontent-%COMP%]   .app-izkor-person[_ngcontent-%COMP%] {\n  grid-column: 1/1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpemtvci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUscUNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUVBLDhDQUFBO0VBQ0EsK0JBQUE7RUFFQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUxGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQW1CQSxnQkFBQTtFQUVBLGFBQUE7QUF4QkY7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtBQUhKO0FBS0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQVNBO0VBQ0ksZ0JBQUE7QUFQSiIsImZpbGUiOiJpemtvci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml6a29yLWdyaWQge1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTc1ZDg7XHJcbiAgLy8gY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLWJsdWUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBjb2xvcjogI2I0Y2JkZDsvL2Nhcm1pdFxyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLy8gbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDJmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzJSAzMyUgMzMlO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDVweCA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbi5jZW50cmFsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA1MHB4O1xyXG4gIC5jZW50cmFsLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMHB4O1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmNlbnRyYWwtZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBncmlkLWNvbHVtbjogNi84O1xyXG4gIC8vIGdyaWQtY29sdW1uOiA2Lzg7XHJcbiAgZ3JpZC1yb3c6IDEvNTtcclxufVxyXG4uYXBwLWl6a29yLXBlcnNvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _time_and_text_board_time_and_text_board_component__WEBPACK_IMPORTED_MODULE_4__["TimeAndTextBoardComponent"], _image_board_image_board_component__WEBPACK_IMPORTED_MODULE_5__["ImageBoardComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.board-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9hcmRzLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJib2FyZHMtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boards/boards-manager/boards-manager.component */ "Z0qv");




function TwoBoardsViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.view.rightTitle, " ");
} }
function TwoBoardsViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.clock, "H:mm"), " ");
} }
class TwoBoardsViewComponent {
    constructor() {
        this.myjson = JSON;
    }
    ngOnInit() {
        this.updateClock();
    }
    updateClock() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).subscribe(() => this.clock = new Date());
    }
}
TwoBoardsViewComponent.ɵfac = function TwoBoardsViewComponent_Factory(t) { return new (t || TwoBoardsViewComponent)(); };
TwoBoardsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TwoBoardsViewComponent, selectors: [["two-boards-view"]], inputs: { view: "view" }, decls: 15, vars: 5, consts: [["id", "home-container", 1, "home"], [1, "header"], ["class", "parasha", 4, "ngIf"], [1, "title"], [1, "title-text"], ["class", "clock", 4, "ngIf"], [1, "times"], [1, "board", "right-board"], [3, "data"], [1, "board", "left-board"], [1, "curr-footer"], [1, "footer-text"], [1, "parasha"], [1, "clock"]], template: function TwoBoardsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TwoBoardsViewComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TwoBoardsViewComponent_div_6_Template, 3, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "boards-manager", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "boards-manager", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u05D1\u05D9\u05EA \u05DB\u05E0\u05E1\u05EA \u05E8\u05E9\u05D1\"\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.rightTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.view.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.showClock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.view.rightBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.view.leftBoard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _boards_boards_manager_boards_manager_component__WEBPACK_IMPORTED_MODULE_3__["BoardsManagerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('bcg-blue.jpg');\n  background-size: cover;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35%;\n  height: 70px;\n  border-radius: 5px;\n  box-shadow: 10px 10px 19px 4px #13121257;\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 65px;\n  align-self: center;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .parasha[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 50px;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #b4cbdd;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n  position: absolute;\n  left: 10px;\n}\n.home[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 20px;\n  flex-grow: 1;\n}\n.home[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .left-board[_ngcontent-%COMP%] {\n  background-image: url('bcg.jpg');\n}\n.home[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin: 0px 10px 10px 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('bcg.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  font-size: 50px;\n  align-self: center;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHdvLWJvYXJkcy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQU1BLHFDQUFBO0VBQ0Esc0JBQUE7QUFKRjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFiSjtBQWVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0Esd0NBQUE7RUFDQSxnQ0FBQTtBQWZOO0FBa0JNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFoQlI7QUFvQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFsQk47QUFzQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUFyQk47QUF5QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF2Qko7QUEwQkU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxzQ0FBQTtFQUtBLGdDQUFBO0FBN0JKO0FBa0NFO0VBRUUsZ0NBQUE7QUFqQ0o7QUFzQ0U7RUFDRSwwQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFDQSx3Q0FBQTtBQXRDSjtBQXdDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdENOIiwiZmlsZSI6InR3by1ib2FyZHMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICBmb250LWZhbWlseTogaGFkYXNpbWNsbS1ib2xkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZ1wiKTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTc1ZDg7Ly9jYXJtaXRcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9iY2ctYmx1ZS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblxyXG4gIC8vIGJhY2tncm91bmQ6ICNmZGM4MzA7XHJcbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZGM4MzAsICNmMzczMzUpO1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAvLyAgIHRvIHJpZ2h0LFxyXG4gIC8vICAgI2ZkYzgzMCxcclxuICAvLyAgICNmMzczMzVcclxuICAvLyApO1xyXG4gIC5oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnXCIpOy8vY2FybWl0XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNzVkODtcclxuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9iY2cuanBnJyk7Ly9jYXJtaXRcclxuICAgICAgLy8gYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cclxuICAgICAgLnRpdGxlLXRleHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXJhc2hhIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBjb2xvcjogI2I0Y2JkZDsvL2Nhcm1pdFxyXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xyXG4gICAgICAvLyBjb2xvcjogYmxhY2s7Ly9jYXJtaXRcclxuICAgIH1cclxuXHJcbiAgICAuY2xvY2sge1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjYjRjYmRkOy8vY2FybWl0XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XHJcbiAgICAgIC8vIGNvbG9yOiBibGFjazsvL2Nhcm1pdFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQge1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjYucG5nJyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCA0cHggIzEzMTIxMjU3O1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQ6ICNlZGU1NzQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UxZjVjNCwgI2VkZTU3NCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMWY1YzQsICNlZGU1NzQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubGVmdC1ib2FyZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZGU1NzQsICNlMWY1YzQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmNnLmpwZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnRpdGxlLXJlZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwJSAwIDUwJTtcclxuICB9XHJcblxyXG4gIC5jdXJyLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnXCIpOy8vY2FybWl0XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JjZy5qcGcnKTsvL2Nhcm1pdFxyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuXHJcbiAgICAuZm9vdGVyLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, styles: [".clean[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWxrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsc0JBQUE7QUFBRiIsImZpbGUiOiJ0YWxrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFue1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcHJheS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbn0iXX0= */"] });


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
        viewFields: {
            title: 'זמני התפילות',
            rightTitle: 'ואתחנן',
            rightBoard: [
                {
                    title: 'תפילות שבת',
                    rows: [
                        { title: 'מנחה ערב שבת', value: '19:30' },
                        { title: 'שחרית שבת', value: '08:30' },
                        { title: 'שיעור מסכת תענית', value: '18:00' },
                        { title: 'מנחה שבת', value: '19:10' },
                        { title: 'ערבית מוצ"ש', value: '20:15' },
                    ],
                    durationSec: -1,
                    type: 'time&text'
                }
            ],
            leftBoard: [
                {
                    title: 'keep-clean2.png',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'mask-put.png',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'תפילות חול',
                    rows: [
                        { title: 'שחרית', value: '07:00' },
                        { title: ' מנחה וערבית', value: '19:35' },
                        { title: '--------', value: '--------' },
                        { title: 'יום שני - ספר התניא', value: '21:00' },
                        { title: 'יום שלישי - ברכות', value: '21:00' },
                    ],
                    durationSec: 30,
                    type: 'time&text'
                },
                {
                    title: 'זמני השבוע',
                    rows: [
                        { title: 'הנץ החמה', value: '05:54' },
                        { title: 'סוף ק"ש למ"א', value: '08:35' },
                        { title: 'סוף ק"ש לגר"א', value: '09:17' },
                        { title: 'זמן מנחה גדולה', value: '13:17' },
                        { title: 'שקיעת החמה', value: '19:47' },
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
            showClock: true,
        },
        durationSec: 1,
        viewType: 'two-boards-view'
    },
    {
        viewFields: {
            title: 'זמני התפילות',
            rightBoard: [
                {
                    title: 'תפילות חול',
                    rows: [
                        { title: 'שחרית', value: '07:00' },
                        { title: ' מנחה וערבית', value: '19:35' },
                        { title: '--------', value: '--------' },
                        { title: 'יום שני - ספר התניא', value: '21:00' },
                        { title: 'יום שלישי - ברכות', value: '21:00' },
                    ],
                    durationSec: -1,
                    type: 'time&text'
                }
            ],
            leftBoard: [
                {
                    title: 'talk-tfila2y2.png',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'זמני השבוע',
                    rows: [
                        { title: 'הנץ החמה', value: '05:53' },
                        { title: 'סוף ק"ש למ"א', value: '08:35' },
                        { title: 'סוף ק"ש לגר"א', value: '09:17' },
                        { title: 'זמן מנחה גדולה', value: '13:17' },
                        { title: 'שקיעת החמה', value: '19:45' },
                    ],
                    durationSec: 30,
                    type: 'time&text'
                },
                {
                    title: 'mask-put.png',
                    type: 'image',
                    durationSec: 6,
                },
                {
                    title: 'keep-clean2.png',
                    type: 'image',
                    durationSec: 6,
                },
            ],
            footer: 'בית הכנסת רשב"י',
            showClock: true,
        },
        durationSec: -1,
        viewType: 'two-boards-view'
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value);
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
    constructor() {
        // const options = {
        //   year: 2021,
        //   isHebrewYear: false,
        //   candlelighting: true,
        //   location: Location.lookup('Petach Tikvah'),
        //   sedrot: true,
        //   omer: true,
        //   locale: 'he',
        //   // candleLightingMins: 1
        // };
        // // Locale.useLocale('he');
        // const events = HebrewCalendar.calendar(options);
        // let index = 1;
        // for (const ev of events) {
        //   console.log(ev);
        //   // ev.render('he'); 
        //   const hd = ev.getDate();
        //   const date = hd.greg()
        //   console.log('date is',date.toLocaleDateString());
        //   console.log( 'ev is',ev.render('he'));
        //   console.log('hd is', hd.render('he'));
        //   console.log('day is', ev.getDate().greg().getUTCDay());
        //   index++;
        //   if (index > 0)return;
        // }
    }
    ngOnInit() {
    }
}
TimeAndTextBoardComponent.ɵfac = function TimeAndTextBoardComponent_Factory(t) { return new (t || TimeAndTextBoardComponent)(); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".time-and-text-board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  align-items: center;\n  overflow: hidden;\n  height: 100%;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 3vh;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 6vh;\n  line-height: 6vh;\n}\n.time-and-text-board[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #010175d8;\n  background-color: #417d8fd8;\n  color: #b4cbdd;\n  color: black;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGltZS1hbmQtdGV4dC1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdBO0VBQ0UsNEJBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZGO0FBT0U7RUFFRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEoiLCJmaWxlIjoidGltZS1hbmQtdGV4dC1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnRpbWUtYW5kLXRleHQtYm9hcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4uc2hhYmF0LWRhdGEtdGltZXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogM3ZoO1xyXG59XHJcbi50aXRsZS1zaGFiYXR7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDUwJSAwJTtcclxufVxyXG5cclxuLnNoYWJhdC1kYXRhLXRpbWVzLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAwIDQlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiA2dmg7XHJcbiAgbGluZS1oZWlnaHQ6IDZ2aDtcclxufVxyXG5cclxuXHJcbiAgXHJcbiAgLnN1Yi10aXRsZXtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3ZTRjMGI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTc1ZDg7Ly9jYXJtaXRcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTdkOGZkODsvL2Nhcm1pdFxyXG4gICAgY29sb3I6ICNiNGNiZGQ7Ly9jYXJtaXRcclxuICAgIGNvbG9yOiBibGFjazsvL2Nhcm1pdFxyXG4gICAgLy8gY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59Il19 */"] });


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