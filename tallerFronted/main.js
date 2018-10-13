(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/proyectos/proyecto/proyecto.module": [
		"./src/app/modules/proyectos/proyecto/proyecto.module.ts",
		"modules-proyectos-proyecto-proyecto-module"
	],
	"./modules/tareas/tarea/tarea.module": [
		"./src/app/modules/tareas/tarea/tarea.module.ts",
		"modules-tareas-tarea-tarea-module"
	],
	"./modules/usuarios/usuario/usuario.module": [
		"./src/app/modules/usuarios/usuario/usuario.module.ts",
		"modules-usuarios-usuario-usuario-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  <div class=\"p-3 mb-2 bg-light text-dark\">\n  <router-outlet></router-outlet>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tallerFronted';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/proyectos/services/proyecto.service */ "./src/app/modules/proyectos/services/proyecto.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig, 'tellerfrontend'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_modules_proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_8__["ProyectoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var APP_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'inicio', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    {
        path: 'proyecto',
        loadChildren: './modules/proyectos/proyecto/proyecto.module#ProyectoModule'
    },
    {
        path: 'tarea',
        loadChildren: './modules/tareas/tarea/tarea.module#TareaModule'
    },
    {
        path: 'usuario',
        loadChildren: './modules/usuarios/usuario/usuario.module#UsuarioModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\">\n\t<br>\n\n\n<!-- BUSQUEDA POR NOMBRE -->\n  <div class=\"input-group mb-3\">\n    <input [(ngModel)]=\"valueInput\" type=\"text\" class=\"form-control\" placeholder=\"Buscar proyecto por nombre\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n    <br>\n    <div class=\"input-group-append\">\n      <div  *ngFor=\"let proyecto of proyectos\">\n        <div *ngIf=\"valueInput == proyecto.nombre\">\n          <div class=\"table-responsive\">\n            <br>\n          <table class=\"table table-responsive table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th scope=\"col\">NOMBRE</th>\n                <th scope=\"col\">RESPONSABLE</th>\n                <th scope=\"col\">FECHA INICIO</th>\n                <th scope=\"col\">FECHA ENTREGA</th>\n                <th scope=\"col\">ESTADO</th>\n                <th scope=\"col\">DESCRIPCION</th>\n                <th scope=\"col\">TAREAS</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{proyecto.nombre}}</td>\n                <td>{{proyecto.responsable}}</td>\n                <td>{{proyecto.fecha_inicio | date: 'dd/MM/yyyy'}}</td>\n                <td>{{proyecto.fecha_entrega | date: 'dd/MM/yyyy'}}</td>\n                <td>{{proyecto.estado}}</td>\n                <td>{{proyecto.descripcion}}</td>\n                <td >\n                  <div *ngFor=\"let tarea of tareas\">\n                    <div  *ngIf=\"proyecto.nombre == tarea.proyecto\">\n                      {{tarea.nombre}}\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<!-- TABLAS DE ESTADO -->\n\t<table class=\"table table-striped table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">NOMBRE PROYECTO</th>\n      <th scope=\"col\">FECHA INICIO</th>\n      <th scope=\"col\">FECHA ENTREGA</th>\n      <th scope=\"col\">ESTADO</th>\n      <th scope=\"col\">ACCIONES</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let proyecto of proyectos\" >\n    <tr *ngIf=\" proyecto.estado == 'En progreso'\">\n      <td>{{proyecto.nombre}}</td>\n      <td>{{proyecto.fecha_inicio  | date: 'dd/MM/yyyy'}}</td>\n      <td>{{proyecto.fecha_entrega | date: 'dd/MM/yyyy'}}</td>\n      <td>{{proyecto.estado}}</td>\n      <td>\n        <!-- BOTON VER -->\n        <button *ngIf=\"editState == false\" (click)=\"editVista($event, proyecto)\" type=\"button\" class=\"btn btn-info\">VER</button>\n        <!-- BOTON CERRAR -->\n      <button *ngIf=\"editState && vistaToEdit.id == proyecto.id\" (click)=\"clearState()\" type=\"button\" class=\" ml-2 btn btn-dark\">\n        <i class=\"fas fa-times-circle\"></i></button>\n        </td>\n    </tr>\n      <div *ngIf=\"editState && vistaToEdit.id == proyecto.id\">        \n          <form (ngSubmit)=\"onUpdateProyecto(proyecto)\" class=\"col s6\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label><span>NOMBRE DEL PROYECTO</span></label>\n                <input [(ngModel)]=\"proyecto.nombre\" #nombre=\"ngModel\" name=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del proyecto\" disabled>\n              </div>\n              <div class=\"col\">\n                <label><span>RESPONSABLE DEL PROYECTO</span></label>\n                <input [(ngModel)]=\"proyecto.responsable\" #responsable=\"ngModel\"\n                 name=\"responsable\" type=\"text\" class=\"form-control\" placeholder=\"Nombre de persona a cargo\" disabled>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col\">\n                <label><span>FECHA DE INICIO</span></label>\n                <input [(ngModel)]=\"proyecto.fecha_inicio\" #fecha_inicio=\"ngModel\"\n                 name=\"fecha_inicio\" type=\"date\" class=\"form-control\" disabled>\n              </div>\n              <div class=\"col\">\n                <label><span>FECHA DE ENTREGA</span></label>\n                <input [(ngModel)]=\"proyecto.fecha_entrega\" #fecha_entrega=\"ngModel\"\n                 name=\"fecha_entrega\" type=\"date\" class=\"form-control\"disabled>\n              </div>\n              <div class=\"col\">\n                <label for=\"inputState\">ESTADO</label>\n                <select [(ngModel)]=\"proyecto.estado\" #estado=\"ngModel\" name=\"estado\"\n                 id=\"inputState\" class=\"form-control\" disabled>\n                  <option selected>En progreso</option>\n                  <option>Terminado</option>\n                </select>\n              </div>\n            </div>\n            <br>\n              <div class=\"form-group text-center\">\n                <label for=\"inputState\"><span>DESCRIPCION</span></label>\n                <textarea [(ngModel)]=\"proyecto.descripcion\" #descripcion=\"ngModel\" rows=\"4\" cols=\"50\" type=\"text\" class=\"form-control\" name=\"descripcion\" id=\"descripcion\"\n                 disabled></textarea>\n              </div>\n              <div *ngFor=\"let tarea of tareas\">\n                <div *ngIf=\"proyecto.nombre == tarea.proyecto\">\n                <span>\n                  <strong>Tareas: </strong>{{tarea.nombre}}\n                </span>\n              </div>\n              </div>\n            <br>\n        </form>\n      </div>\n  </tbody>\n</table>\n<br><br>\n\n  <table class=\"table table-striped table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">NOMBRE TAREA</th>\n      <th scope=\"col\">PRIORIDAD</th>\n      <th scope=\"col\">PROYECTO</th>\n      <th scope=\"col\">DESCRIPCION</th>\n      <th scope=\"col\">ACCIONES</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let tarea of tareas\" >\n    <tr>\n      <td>{{tarea.nombre}}</td>\n      <td>{{tarea.prioridad}}</td>\n      <td>{{tarea.proyecto}}</td>\n      <td>{{tarea.descripcion}}</td>\n      <td><button type=\"button\" class=\"btn btn-info\">VER</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/proyectos/services/proyecto.service */ "./src/app/modules/proyectos/services/proyecto.service.ts");
/* harmony import */ var _modules_tareas_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/tareas/services/tarea.service */ "./src/app/modules/tareas/services/tarea.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(proyectoService, tareaService) {
        this.proyectoService = proyectoService;
        this.tareaService = tareaService;
        this.valueInput = '';
        this.estado1 = "Terminado";
        this.estado2 = "En progreso";
        this.fecha = Date.now();
        this.fechaR = "";
        this.editState = false;
        this.fechaR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.fecha, 'yyyyMMdd', 'en-US');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proyectoService.getProyectos().subscribe(function (proyectos) {
            console.log(proyectos);
            _this.proyectos = proyectos;
        });
        this.tareaService.getTareas().subscribe(function (tareas) {
            _this.tareas = tareas;
        });
        console.log(this.fechaR);
    };
    DashboardComponent.prototype.editVista = function (event, proyecto) {
        this.editState = true;
        this.vistaToEdit = proyecto;
    };
    DashboardComponent.prototype.clearState = function () {
        this.editState = false;
        this.vistaToEdit = null;
        console.log('clearState dashboard');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_proyectos_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            _modules_tareas_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__["TareaService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\t<div class=\"text-center\">\n\t\t<h4>PARA INICIAR SESION PORFAVOR INGRESA USUARIO Y CONTRASEÑA</h4>\n\t\t<form class=\"px-4 py-3\">\n\t    <div class=\"form-group\">\n\t      <label>NOMBRE DE USUARIO</label>\n\t      <input [(ngModel)]=\"nombres\" name=\"nombres\" type=\"email\" class=\"form-control\" placeholder=\"Nombre usuario\">\n\t    </div>\n\t    <div class=\"form-group\">\n\t      <label>CONTRASEÑA</label>\n\t      <input [(ngModel)]=\"passwords\" name=\"passwords\" type=\"password\" class=\"form-control\" placeholder=\"Contraseña\">\n\t    </div>\n\t    <div class=\"text-center\" *ngFor=\"let usuario of usuarios\">\n\t    \t<div *ngIf=\"usuario.nombre == nombres && usuario.password == passwords\">\n\t    \t\t<button [routerLink]=\"['/inicio']\" type=\"submit\" class=\"btn btn-primary\">INGRESAR</button>\n\t    \t</div>\n\t    \t\n\t\t</div>\n\t  </form>\n\t</div>\t  \n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_usuarios_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/usuarios/services/usuario.service */ "./src/app/modules/usuarios/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.nombres = '';
        this.passwords = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarios().subscribe(function (usuarios) {
            _this.usuarios = usuarios;
            console.log(usuarios);
        });
    };
    LoginComponent.prototype.ingresar = function (event, usuario) {
        if (usuario.nombre == this.nombres && usuario.password == this.passwords) {
            this.router.navigate(['/inicio']);
        }
        else {
            alert('usuario o contraseña incorrecto');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_usuarios_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/inicio']\"><h3><strong>PROYECTOS</strong></h3></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/inicio']\"><strong>INICIO <i class=\"fas fa-home\"></i></strong></a>\n          </li>\n        <li class=\"nav-item \"><a [routerLink]=\"['/proyecto']\" class=\"nav-link mr-2\">Proyecto</a> </li>\n        <li class=\"nav-item \"><a [routerLink]=\"['/tarea']\" class=\"nav-link mr-2\">Tarea</a> </li>\n        <li class=\"nav-item \"><a [routerLink]=\"['/usuario']\" class=\"nav-link mr-2\">Usuario</a> </li>\n      <li class=\"nav-item dropdown\">\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/proyectos/services/proyecto.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/proyectos/services/proyecto.service.ts ***!
  \****************************************************************/
/*! exports provided: ProyectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoService", function() { return ProyectoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProyectoService = /** @class */ (function () {
    function ProyectoService(afs) {
        this.afs = afs;
        //this.proyectos = afs.collection('projects').valueChanges();
        this.proyectosCollection = afs.collection('projects');
        this.proyectos = this.proyectosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    ProyectoService.prototype.getProyectos = function () {
        return this.proyectos;
    };
    ProyectoService.prototype.addProyecto = function (proyecto) {
        console.log('nuevo proyecto');
        this.proyectosCollection.add(proyecto);
    };
    ProyectoService.prototype.deleteProyecto = function (proyecto) {
        console.log('borrar proyecto');
        this.proyectosDoc = this.afs.doc("projects/" + proyecto.id);
        this.proyectosDoc.delete();
    };
    ProyectoService.prototype.upDateProyecto = function (proyecto) {
        console.log('actualizar proyecto');
        this.proyectosDoc = this.afs.doc("projects/" + proyecto.id);
        this.proyectosDoc.update(proyecto);
    };
    ProyectoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ProyectoService);
    return ProyectoService;
}());



/***/ }),

/***/ "./src/app/modules/tareas/services/tarea.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/tareas/services/tarea.service.ts ***!
  \**********************************************************/
/*! exports provided: TareaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaService", function() { return TareaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TareaService = /** @class */ (function () {
    function TareaService(afs) {
        //this.tareas = afs.collection('tareas').valueChanges();
        this.afs = afs;
        this.tareasCollection = afs.collection('tareas');
        this.tareas = this.tareasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    TareaService.prototype.getTareas = function () {
        return this.tareas;
    };
    TareaService.prototype.addTarea = function (tarea) {
        console.log('new tarea');
        this.tareasCollection.add(tarea);
        alert('Tarea agregada exitosamente');
    };
    TareaService.prototype.deleteTarea = function (tarea) {
        this.tareaDoc = this.afs.doc("tareas/" + tarea.id);
        this.tareaDoc.delete();
    };
    TareaService.prototype.updateTarea = function (tarea) {
        this.tareaDoc = this.afs.doc("tareas/" + tarea.id);
        this.tareaDoc.update(tarea);
    };
    TareaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], TareaService);
    return TareaService;
}());



/***/ }),

/***/ "./src/app/modules/usuarios/services/usuario.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/usuarios/services/usuario.service.ts ***!
  \**************************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    function UsuarioService(afs) {
        this.afs = afs;
        //this.usuarios = afs.collection('usuarios').valueChanges();
        this.usuariosCollection = afs.collection('usuarios');
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.usuarios;
    };
    UsuarioService.prototype.addUsuario = function (usuario) {
        console.log('nuevo usuario');
        this.usuariosCollection.add(usuario);
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBE7UB5HgmKLFUF5W6zhLoD8cArn0aQ9lU",
        authDomain: "tellerfrontend.firebaseapp.com",
        databaseURL: "https://tellerfrontend.firebaseio.com",
        projectId: "tellerfrontend",
        storageBucket: "tellerfrontend.appspot.com",
        messagingSenderId: "698019407056"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BRIAN\angular\projects\tallerFrontend\tallerFronted\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map