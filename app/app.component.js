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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello World";
        this.pList = ['ABC', 'DEF', 'GHI', 'JKL'];
        this.sendnum = 2;
        this.error = false;
    }
    AppComponent.prototype.maxOut = function (flag) {
        if (flag) {
            this.errormessage = 'no more click';
            this.error = true;
        }
        else {
            this.error = false;
        }
    };
    AppComponent.prototype.change = function () {
        this.message = 'I am changed';
        document.getElementById('b1').addEventListener('click', this.myClick.bind(this));
    };
    AppComponent.prototype.myClick = function () {
        this.message = "ABC";
    };
    AppComponent.prototype.check = function (n) {
        this.message = "Hello, " + n;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container\">\n                    <h1>Property Binding</h1>\n                    <h2 innerHtml=\"{{message}}\">Hi, </h2>\n                    <h2 bind-innerHtml=\"message\">Hi, </h2>\n                    <h2 [innerHtml]=\"message\">Hi, </h2>\n\n                    <!-- Text-box Biniding Data -->\n                    <input type=\"text\" value=\"{{message}}\" class=\"form-control\">\n                    <input type=\"text\" bind-value=\"message\" class=\"form-control\">\n                    <input type=\"text\" [value]=\"message\" class=\"form-control\">\n\n                     <!-- Event Biniding Data -->\n                     <button on-click = \"change()\" class=\"btn btn-sm btn-primary\">click</button>\n                     <button (click) = \"change()\" class=\"btn btn-sm btn-primary\">click</button>\n\n                     <!-- Two way  Biniding Data -->\n                    <input type=\"text\" bindon-ngModel=\"message\" class=\"form-control\">\n                    <input type=\"text\" [(ngModel)]=\"message\" class=\"form-control\">\n                    <button id=b1 class=\"btn btn-sm btn-primary\">click</button> \n\n                    <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" (change)=\"check(name)\">\n                    <h3>{{name}}</h3>   \n                    <my-listapp [personList]=pList></my-listapp>\n                    <div class=\"alert alert-danger\" *ngIf=\"error\">{{errormessage}}</div>\n                    <counter [countby]=sendnum #c1 (onMax)=\"maxOut($event)\"></counter>\n                    <button (click)=\"c1.reset()\">reset</button>             \n                </div>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
