(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tareas-tarea-tarea-module"],{

/***/ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/tareas/components/add-tarea/add-tarea.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/tareas/components/add-tarea/add-tarea.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<br>\n\t<div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t\t<h2 class=\"card-title font-weight-bold text-center\">REGISTRAR TAREA</h2>\n\t\t\t<form (ngSubmit)=\"onGuardarTarea(formNew)\" #formNew=\"ngForm\" >\n\t\t\t  \t<div class=\"form-row\">\n\t\t\t\t    <div class=\"form-group col-md-6\">\n\t\t\t\t      <label >NOMBRE DE LA TAREA</label>\n\t\t\t\t      <input [(ngModel)]=\"tarea.nombre\" #nombre=\"ngModel\" type=\"text\" name=\"nombre\" id=\"nombre\" class=\"form-control\"  placeholder=\"Nombre tarea\">\n\t\t\t\t    </div>\t\t\t    \n\t\t\t\t    <div class=\"form-group col-md-6\">\n\t\t\t\t      <label >PRIORIDAD</label>\n\t\t\t\t      <select [(ngModel)]=\"tarea.prioridad\" #prioridad=\"ngModel\" name=\"prioridad\" id=\"prioridad\" class=\"form-control\">\n\t\t\t\t        <option selected>ALTA</option>\n\t\t\t\t        <option>MEDIA</option>\n\t\t\t\t        <option>BAJA</option>\n\t\t\t\t      </select>\n\t\t\t\t    </div>\n\t\t\t\t</div>\t\n\t\t\t\t<br>\t\t\t\t\t\t\t\t    \n\t\t\t  \t<div class=\"form-row\">\n\t\t\t  \t\t<label for=\"inputState\">PROYECTO</label>\n\t\t\t\t\t<select  [(ngModel)]=\"tarea.proyecto\" #proyecto=\"ngModel\"  name=\"proyecto\" id=\"proyecto\" class=\"form-control\">\n\t\t\t\t\t\t<option selected>- SELECTED -</option>\n\t\t\t\t\t  \t<option  *ngFor=\"let proyecto of proyectos\">\n\t\t\t\t\t  \t{{proyecto.nombre}}\n\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<br>\t\t    \n\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t   \t<label  for=\"inputState\"><span>DESCRIPCION</span></label>\n\t\t\t\t    <textarea  [(ngModel)]=\"tarea.descripcion\" #descripcion=\"ngModel\"  rows=\"6\" cols=\"50\" type=\"text\" class=\"form-control\" \n\t\t\t\t    name=\"descripcion\" id=\"descripcion\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t  \t<button type=\"submit\" class=\"btn btn-primary btn-lg\">GUARDAR<i class=\"far fa-save ml-2\"></i></button>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/tareas/components/add-tarea/add-tarea.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddTareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTareaComponent", function() { return AddTareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../proyectos/services/proyecto.service */ "./src/app/modules/proyectos/services/proyecto.service.ts");
/* harmony import */ var _services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tarea.service */ "./src/app/modules/tareas/services/tarea.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTareaComponent = /** @class */ (function () {
    function AddTareaComponent(proyectoService, tareaService) {
        this.proyectoService = proyectoService;
        this.tareaService = tareaService;
        this.editState = false;
        this.tareaProyecto = {
            nombre: ''
        };
        this.tarea = {
            nombre: '',
            prioridad: '',
            proyecto: '',
            descripcion: ''
        };
    }
    AddTareaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proyectoService.getProyectos().subscribe(function (proyectos) {
            console.log(proyectos);
            _this.proyectos = proyectos;
        });
    };
    AddTareaComponent.prototype.onGuardarTarea = function (myForm) {
        this.tareaService.addTarea(this.tarea);
        myForm.reset();
    };
    AddTareaComponent.prototype.editProyecto = function (event, proyecto) {
        this.editState = true;
        this.proyectoToEdit = proyecto;
    };
    AddTareaComponent.prototype.clearState = function () {
        this.editState = false;
        this.proyectoToEdit = null;
    };
    AddTareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tarea',
            template: __webpack_require__(/*! ./add-tarea.component.html */ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.html"),
            styles: [__webpack_require__(/*! ./add-tarea.component.css */ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.css")]
        }),
        __metadata("design:paramtypes", [_proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"], _services_tarea_service__WEBPACK_IMPORTED_MODULE_2__["TareaService"]])
    ], AddTareaComponent);
    return AddTareaComponent;
}());



/***/ }),

/***/ "./src/app/modules/tareas/tarea/tarea-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/tareas/tarea/tarea-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TareaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaRoutingModule", function() { return TareaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarea.component */ "./src/app/modules/tareas/tarea/tarea.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'tarea', pathMatch: 'full' },
    { path: 'tarea', component: _tarea_component__WEBPACK_IMPORTED_MODULE_2__["TareaComponent"] }
];
var TareaRoutingModule = /** @class */ (function () {
    function TareaRoutingModule() {
    }
    TareaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TareaRoutingModule);
    return TareaRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/tareas/tarea/tarea.component.css":
/*!**********************************************************!*\
  !*** ./src/app/modules/tareas/tarea/tarea.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my_tag{\r\n\tfont-weight: 300;\r\n\tfont-size: 1rem;\r\n\tborder-radius: 3px;\r\n\tmargin-left: 0;\r\n\ttext-align: center;\r\n\tline-height: 22px;\r\n\tbox-sizing: border-box;\r\n\tmargin-right: 5px;\r\n\tpadding: 03rem;\r\n}"

/***/ }),

/***/ "./src/app/modules/tareas/tarea/tarea.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/tareas/tarea/tarea.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-tarea></app-add-tarea>\r\n<br><br>\r\n<div *ngIf=\"tareas?.length > 0; else noTareas\" class=\"container\">\r\n\t<ul *ngFor=\"let tarea of tareas\" class=\"list-group\">\r\n\t\t<li class=\"list-group-item text-left\">\r\n\t\t\t<!-- BOTON EDITAR -->\r\n\t\t\t<button *ngIf=\"editState == false\" (click)=\"editTarea($event, tarea)\" type=\"button\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i></button>\r\n\t\t\t<!-- BOTON CERRAR -->\r\n\t\t\t<button *ngIf=\"editState && tareaToEdit.id == tarea.id\" (click)=\"clearState()\" type=\"button\" class=\" ml-2 btn btn-dark\">\r\n\t\t\t\t<i class=\"fas fa-times-circle\"></i></button>\r\n\t\t\t<!-- BOTON ELIMINAR -->\r\n\t\t\t<button (click)=\"deleteTarea($event, tarea)\" type=\"button\" class=\"ml-2 btn btn-danger\">\r\n\t\t\t\t<i class=\"fas fa-trash-alt\"></i></button>\r\n\r\n\t\t\t\t<br><br>\r\n\t\t\t\t<strong><h3>{{tarea.nombre}}</h3></strong>\r\n\t\t\t\t<br>\r\n\t\t\t\t<blockquote>{{tarea.descripcion}}</blockquote>\r\n\t\t\t\t<br>\r\n\t\t\t\t<span class=\"my_tag p-3 mb-2 bg-primary text-white\">\r\n\t\t\t\t\t<strong>Prioridad: </strong>{{tarea.prioridad}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"my_tag p-3 mb-2 bg-primary text-white\">\r\n\t\t\t\t\t<strong>Proyecto: </strong>{{tarea.proyecto}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<br><br>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<div *ngIf=\"editState && tareaToEdit.id == tarea.id\" \r\n\t\t\t\tclass=\"container-updateTarea\">\r\n\t\t\t\t\t<!-- TODO FORM -->\r\n\r\n\t\t\t\t\t<form (ngSubmit)=\"onUpdateTarea(tarea)\" >\r\n\t\t\t\t\t  \t<div class=\"form-row\">\r\n\t\t\t\t\t\t    <div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t      <label >NOMBRE DE LA TAREA</label>\r\n\t\t\t\t\t\t      <input [(ngModel)]=\"tarea.nombre\" #nombre=\"ngModel\" type=\"text\" name=\"nombre\" id=\"nombre\" class=\"form-control\"  placeholder=\"Nombre tarea\">\r\n\t\t\t\t\t\t    </div>\t\t\t    \r\n\t\t\t\t\t\t    <div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t      <label >PRIORIDAD</label>\r\n\t\t\t\t\t\t      <select [(ngModel)]=\"tarea.prioridad\" #prioridad=\"ngModel\" name=\"prioridad\" id=\"prioridad\" class=\"form-control\">\r\n\t\t\t\t\t\t        <option>ALTA</option>\r\n\t\t\t\t\t\t        <option>MEDIA</option>\r\n\t\t\t\t\t\t        <option>BAJA</option>\r\n\t\t\t\t\t\t      </select>\r\n\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t<br>\t\t\t\t\t\t\t\t    \r\n\t\t\t\t\t  \t<div class=\"form-row\">\r\n\t\t\t\t\t  \t\t<label for=\"inputState\">PROYECTO</label>\r\n\t\t\t\t\t\t\t<select  [(ngModel)]=\"tarea.proyecto\" #proyecto=\"ngModel\"  name=\"proyecto\" id=\"proyecto\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option selected>- SELECTED -</option>\r\n\t\t\t\t\t\t\t  \t<option  *ngFor=\"let proyecto of proyectos\">\r\n\t\t\t\t\t\t\t  \t{{proyecto.nombre}} - {{proyecto.fecha_inicio}} - {{proyecto.fecha_entrega}} - {{proyecto.estado}}\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\t\t    \r\n\t\t\t\t\t\t<div class=\"form-group text-center\">\r\n\t\t\t\t\t\t   \t<label  for=\"inputState\"><span>DESCRIPCION</span></label>\r\n\t\t\t\t\t\t    <textarea  [(ngModel)]=\"tarea.descripcion\" #descripcion=\"ngModel\"  rows=\"4\" cols=\"50\" type=\"text\" class=\"form-control\" \r\n\t\t\t\t\t\t    name=\"descripcion\" id=\"descripcion\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t  \t<button type=\"submit\" class=\"btn btn-primary btn-lg\">ACTUALIZAR<i class=\"far fa-save ml-2\"></i></button>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\t<br>\r\n</div>\r\n<br>\r\n\r\n<ng-template #noTareas>\r\n\t<hr>\r\n\t<h5>NO EXISTEN TAREAS</h5>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/tareas/tarea/tarea.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/tareas/tarea/tarea.component.ts ***!
  \*********************************************************/
/*! exports provided: TareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaComponent", function() { return TareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tarea.service */ "./src/app/modules/tareas/services/tarea.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TareaComponent = /** @class */ (function () {
    function TareaComponent(tareaService) {
        this.tareaService = tareaService;
        this.editState = false;
    }
    TareaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tareaService.getTareas().subscribe(function (tareas) {
            _this.tareas = tareas;
        });
    };
    TareaComponent.prototype.editTarea = function (event, tarea) {
        this.editState = true;
        this.tareaToEdit = tarea;
    };
    TareaComponent.prototype.onUpdateTarea = function (tarea) {
        this.tareaService.updateTarea(tarea);
        this.clearState();
    };
    TareaComponent.prototype.deleteTarea = function (event, tarea) {
        this.tareaService.deleteTarea(tarea);
        this.clearState();
    };
    TareaComponent.prototype.clearState = function () {
        this.editState = false;
        this.tareaToEdit = null;
    };
    TareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tarea',
            template: __webpack_require__(/*! ./tarea.component.html */ "./src/app/modules/tareas/tarea/tarea.component.html"),
            styles: [__webpack_require__(/*! ./tarea.component.css */ "./src/app/modules/tareas/tarea/tarea.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__["TareaService"]])
    ], TareaComponent);
    return TareaComponent;
}());



/***/ }),

/***/ "./src/app/modules/tareas/tarea/tarea.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/tareas/tarea/tarea.module.ts ***!
  \******************************************************/
/*! exports provided: TareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaModule", function() { return TareaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarea.component */ "./src/app/modules/tareas/tarea/tarea.component.ts");
/* harmony import */ var _components_add_tarea_add_tarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/add-tarea/add-tarea.component */ "./src/app/modules/tareas/components/add-tarea/add-tarea.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tarea_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarea-routing.module */ "./src/app/modules/tareas/tarea/tarea-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TareaModule = /** @class */ (function () {
    function TareaModule() {
    }
    TareaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tarea_routing_module__WEBPACK_IMPORTED_MODULE_5__["TareaRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _tarea_component__WEBPACK_IMPORTED_MODULE_2__["TareaComponent"],
                _components_add_tarea_add_tarea_component__WEBPACK_IMPORTED_MODULE_3__["AddTareaComponent"]
            ]
        })
    ], TareaModule);
    return TareaModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-tareas-tarea-tarea-module.js.map