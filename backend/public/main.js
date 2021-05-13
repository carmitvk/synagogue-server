(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\97252\Desktop\CodingAcademy\synagogue\synagogue-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
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
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
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
class HomeComponent {
    constructor(document) {
        this.document = document;
        this.parasha = "פרשת במדבר";
        // public minhaNeight:string = "19:11";
        // public shahritShabat:string = "19:11";
        // public minhaShabat:string = "19:11";
        // public sheurShabat:string = "19:11";
        // public shahritReg:string = "19:11";
        // public minhaReg:string = "19:11";
        this.shabatTimes = [
            { title: 'כניסת שבת', value: '19:10' },
            { title: 'מנחה ערב שבת', value: '19:15' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור במסכת ברכות', value: '17:30' },
            { title: 'מנחה שבת + פרקי אבות', value: '18:40' },
            { title: 'ערבית מוצ"ש', value: '20:10' },
        ];
        this.regTimes = [
            { title: 'תפילת שחרית', value: '07:00' },
            { title: 'מנחה', value: '19:15' },
            { title: 'ערבית', value: '19:40' },
            { title: 'שיעור ביום שלישי', value: '21:00' },
        ];
    }
    ngOnInit() {
        this.updateClock();
    }
    ngAfterViewInit() {
    }
    updateClock() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => this.clock = new Date());
    }
    fullScreen() {
        console.log('inside method');
        document.documentElement.requestFullscreen();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 22, vars: 7, consts: [["id", "home-container", 1, "home", 3, "click"], [1, "header"], [1, "parasha"], [1, "title"], [1, "clock"], [1, "times"], [1, "data-times"], [1, "title-shabat", "sub-title"], [1, "shabat-data-times-container"], ["class", "shabat-data-times", 4, "ngFor", "ngForOf"], [1, "data-times", "reg-data-times"], [1, "title-reg", "sub-title"], [1, "curr-footer"], [1, "shabat-data-times"], [1, "name"], [1, "data-time"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_section_click_0_listener() { return ctx.fullScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u05D6\u05DE\u05E0\u05D9 \u05EA\u05E4\u05D9\u05DC\u05D4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u05EA\u05E4\u05D9\u05DC\u05D5\u05EA \u05E9\u05D1\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " \u05EA\u05E4\u05D9\u05DC\u05D5\u05EA \u05D7\u05D5\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " \u05D1\u05D9\u05EA \u05DB\u05E0\u05E1\u05EA \u05E8\u05E9\u05D1\"\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.parasha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 4, ctx.clock, "H:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.shabatTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regTimes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('klaf2.jpg');\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  height: 70px;\n  border-radius: 5px;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .parasha[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 65px;\n  color: black;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: black;\n  position: absolute;\n  left: 10px;\n}\n.home[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex-grow: 1;\n  padding: 20px;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background: #ede574;\n  background: linear-gradient(to right, #e1f5c4, #ede574);\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #7e4c0b;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .reg-data-times[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ede574, #e1f5c4);\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 3vw;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 6vh;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsNEJBQUE7RUFFQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFJQSxrQ0FBQTtBQUpGO0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFkRjtBQWdCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0FBZE47QUFrQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWhCTjtBQW1CSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBakJOO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBbkJKO0FBcUJFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLHNDQUFBO0VBRUEsbUJBQUE7RUFFQSx1REFBQTtBQXRCSjtBQXdCSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBdEJOO0FBeUJJO0VBQ0UsdURBQUE7QUF2Qk47QUF5Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXZCTjtBQXlCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQXlCSTtFQUNFLDRCQUFBO0FBdkJOO0FBMEJJO0VBQ0UsMEJBQUE7QUF4Qk47QUE0QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUExQkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuXHJcbiBmb250LWZhbWlseTogaGFkYXNpbWNsbS1ib2xkOyBcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZycpO1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JjZy5qcGcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblxyXG4gIC8vIGJhY2tncm91bmQ6ICNmZGM4MzA7IFxyXG4gIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRjODMwLCAjZjM3MzM1KTtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgLy8gICB0byByaWdodCxcclxuICAvLyAgICNmZGM4MzAsXHJcbiAgLy8gICAjZjM3MzM1XHJcbiAgLy8gKTsgXHJcbi5oZWFkZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmMi5qcGcnKTtcclxuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy93aGl0ZS1rbGFmLmpwZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJhc2hhe1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvY2t7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC5kYXRhLXRpbWVzIHtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWY2LnBuZycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNiU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE5cHggNHB4ICMxMzEyMTI1NztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlNTc0OyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTFmNWM0LCAjZWRlNTc0KTsgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMWY1YzQsICNlZGU1NzQgKTtcclxuICAgIFxyXG4gICAgLnN1Yi10aXRsZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdlNGMwYjtcclxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVnLWRhdGEtdGltZXN7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZWRlNTc0LCAjZTFmNWM0ICk7IFxyXG4gICAgfVxyXG4gICAgLnNoYWJhdC1kYXRhLXRpbWVzLWNvbnRhaW5lcntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIHBhZGRpbmc6IDAgNCU7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG4gICAgLnNoYWJhdC1kYXRhLXRpbWVze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA2dmg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtc2hhYmF0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgNTAlIDAlO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLnRpdGxlLXJlZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1MCUgMCA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnJyk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCA0cHggIzEzMTIxMjU3O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


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

/***/ "BE/z":
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clock/clock.component */ "dAqx");
/* harmony import */ var _date_cmp_date_cmp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-cmp/date-cmp.component */ "YyXi");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "date-cmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clock_clock_component__WEBPACK_IMPORTED_MODULE_1__["ClockComponent"], _date_cmp_date_cmp_component__WEBPACK_IMPORTED_MODULE_2__["DateCmpComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICBoZWlnaHQ6IDh2aDtcclxufSJdfQ== */"] });


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

/***/ "YyXi":
/*!*****************************************************!*\
  !*** ./src/app/cmps/date-cmp/date-cmp.component.ts ***!
  \*****************************************************/
/*! exports provided: DateCmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCmpComponent", function() { return DateCmpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateCmpComponent {
    constructor() { }
    ngOnInit() {
    }
    get currTime() {
        var date = Date.now();
        return date;
    }
}
DateCmpComponent.ɵfac = function DateCmpComponent_Factory(t) { return new (t || DateCmpComponent)(); };
DateCmpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateCmpComponent, selectors: [["date-cmp"]], decls: 0, vars: 0, template: function DateCmpComponent_Template(rf, ctx) { }, styles: [".home[_ngcontent-%COMP%] {\n  font-family: hadasimclm-bold;\n  display: flex;\n  flex-direction: column;\n  direction: rtl;\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n  background-image: url('klaf2.jpg');\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  height: 70px;\n  align-items: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  height: 70px;\n  border-radius: 5px;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .parasha[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 65px;\n  color: black;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: black;\n  position: absolute;\n  left: 10px;\n}\n.home[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex-grow: 1;\n  padding: 20px;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-right: 1%;\n  margin-left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 6%;\n  box-shadow: 0px 0px 19px 4px #13121257;\n  background: #ede574;\n  background: linear-gradient(to right, #e1f5c4, #ede574);\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  background-color: #7e4c0b;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 50px;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .reg-data-times[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ede574, #e1f5c4);\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 1;\n  padding: 0 4%;\n  width: 90%;\n  font-size: 3vw;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .shabat-data-times[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 6vh;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-shabat[_ngcontent-%COMP%] {\n  border-radius: 50% 0% 50% 0%;\n}\n.home[_ngcontent-%COMP%]   .data-times[_ngcontent-%COMP%]   .title-reg[_ngcontent-%COMP%] {\n  border-radius: 0 50% 0 50%;\n}\n.home[_ngcontent-%COMP%]   .curr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-weight: 700;\n  font-size: 65px;\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  width: 40%;\n  background-image: url('klaf2.jpg');\n  box-shadow: 10px 10px 19px 4px #13121257;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXRlLWNtcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDRCQUFBO0VBRUMsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7QUFGSDtBQUlDO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSDtBQUlLO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0VBQ0Esd0NBQUE7QUFIUDtBQU9LO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMUDtBQVFLO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFOUDtBQVVHO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUkw7QUFVRztFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxzQ0FBQTtFQUVBLG1CQUFBO0VBRUEsdURBQUE7QUFYTDtBQWFLO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFYUDtBQWNLO0VBQ0UsdURBQUE7QUFaUDtBQWNLO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFaUDtBQWNLO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWlA7QUFjSztFQUNFLDRCQUFBO0FBWlA7QUFlSztFQUNFLDBCQUFBO0FBYlA7QUFpQkc7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUFmTCIsImZpbGUiOiJkYXRlLWNtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuXHJcbiAgZm9udC1mYW1pbHk6IGhhZGFzaW1jbG0tYm9sZDsgXHJcbiBcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiBcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9rbGFmMi5qcGcnKTtcclxuIFxyXG4gLmhlYWRlcntcclxuICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIHdpZHRoOiA5MCU7XHJcbiAgIGhlaWdodDogNzBweDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gXHJcbiAgICAgLnRpdGxle1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjIuanBnJyk7XHJcbiAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCA0cHggIzEzMTIxMjU3O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy93aGl0ZS1rbGFmLmpwZycpO1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5wYXJhc2hhe1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLmNsb2Nre1xyXG4gICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgbGVmdDogMTBweDtcclxuICAgICB9XHJcbiAgIH1cclxuIFxyXG4gICAudGltZXN7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuICAgfVxyXG4gICAuZGF0YS10aW1lcyB7XHJcbiAgICAgd2lkdGg6IDQ0JTtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIFxyXG4gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mva2xhZjYucG5nJyk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNiU7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDRweCAjMTMxMjEyNTc7XHJcbiBcclxuICAgICBiYWNrZ3JvdW5kOiAjZWRlNTc0OyBcclxuICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UxZjVjNCwgI2VkZTU3NCk7IFxyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UxZjVjNCwgI2VkZTU3NCApO1xyXG4gICAgIFxyXG4gICAgIC5zdWItdGl0bGV7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U0YzBiO1xyXG4gICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLnJlZy1kYXRhLXRpbWVze1xyXG4gICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlZGU1NzQsICNlMWY1YzQgKTsgXHJcbiAgICAgfVxyXG4gICAgIC5zaGFiYXQtZGF0YS10aW1lcy1jb250YWluZXJ7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICBwYWRkaW5nOiAwIDQlO1xyXG4gICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgIH1cclxuICAgICAuc2hhYmF0LWRhdGEtdGltZXN7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIHBhZGRpbmctdG9wOiA2dmg7XHJcbiAgICAgfVxyXG4gICAgIC50aXRsZS1zaGFiYXR7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgNTAlIDAlO1xyXG4gICBcclxuICAgICB9XHJcbiAgICAgLnRpdGxlLXJlZ3tcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNTAlIDAgNTAlO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgLmN1cnItZm9vdGVye1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgIG1hcmdpbjogMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgd2lkdGg6IDQwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2tsYWYyLmpwZycpO1xyXG4gICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IDRweCAjMTMxMjEyNTc7XHJcbiAgIH1cclxuIFxyXG4gfVxyXG4gIl19 */"] });


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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _cmps_clock_clock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/clock/clock.component */ "dAqx");
/* harmony import */ var _cmps_date_cmp_date_cmp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/date-cmp/date-cmp.component */ "YyXi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _cmps_clock_clock_component__WEBPACK_IMPORTED_MODULE_6__["ClockComponent"],
        _cmps_date_cmp_date_cmp_component__WEBPACK_IMPORTED_MODULE_7__["DateCmpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "dAqx":
/*!***********************************************!*\
  !*** ./src/app/cmps/clock/clock.component.ts ***!
  \***********************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClockComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClockComponent.ɵfac = function ClockComponent_Factory(t) { return new (t || ClockComponent)(); };
ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockComponent, selectors: [["clock"]], decls: 2, vars: 0, template: function ClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clock works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG9jay5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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