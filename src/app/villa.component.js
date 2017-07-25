"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var villa_service_1 = require("./villa.service");
var VillaComponent = (function () {
    function VillaComponent(villaService, route) {
        this.villaService = villaService;
        this.route = route;
    }
    VillaComponent.prototype.getLiikmed = function () {
        var _this = this;
        this.villaService.getLiikmed().then(function (returnedliikmed) { return _this.liikmed = returnedliikmed; });
        console.log(this.liikmed);
        console.log("heroes");
    };
    VillaComponent.prototype.getHeroes = function () {
        var _this = this;
        this.villaService.getHeroes().then(function (returnedheroes) { return _this.heroes = returnedheroes; });
        console.log("heroes");
    };
    VillaComponent.prototype.ngOnInit = function () {
        this.getLiikmed();
    };
    return VillaComponent;
}());
VillaComponent = __decorate([
    core_1.Component({
        selector: 'villa',
        templateUrl: './villa.component.html'
    }),
    __metadata("design:paramtypes", [villa_service_1.VillaService,
        router_1.ActivatedRoute])
], VillaComponent);
exports.VillaComponent = VillaComponent;
//# sourceMappingURL=villa.component.js.map