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
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_service_1 = require('./hero.service');
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
        this.navigated = false;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        }
        else {
            this.navigated = false;
            this.hero = new hero_1.Hero();
        }
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.save(this.hero).then(function (hero) {
            _this.hero = hero;
            _this.goBack(hero);
        }).catch(function (error) { return _this.error = error; });
    };
    HeroDetailComponent.prototype.goBack = function (hero) {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            styleUrls: ['app/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.RouteParams])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map