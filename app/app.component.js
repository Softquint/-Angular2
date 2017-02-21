"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello World";
    }
    AppComponent.prototype.change = function () {
        this.message = 'I am changed';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container\">\n                    <h1>Property Binding</h1>\n                    <h2 innerHtml=\"{{message}}\">Hi, </h2>\n                    <h2 bind-innerHtml=\"message\">Hi, </h2>\n                    <h2 [innerHtml]=\"message\">Hi, </h2>\n\n                    <!-- Text-box Biniding Data -->\n                    <input type=\"text\" value=\"{{message}}\" class=\"form-control\">\n                    <input type=\"text\" bind-value=\"message\" class=\"form-control\">\n                    <input type=\"text\" [value]=\"message\" class=\"form-control\">\n\n                     <!-- Event Biniding Data -->\n                     <button on-click = \"change()\" class=\"btn btn-sm btn-primary\">click</button>\n                     <button (click) = \"change()\" class=\"btn btn-sm btn-primary\">click</button>\n\n                     <!-- Two way  Biniding Data -->\n                    <input type=\"text\" bindon-ngModel=\"message\" class=\"form-control\">\n                    <input type=\"text\" [(ngModel)]=\"message\" class=\"form-control\">                 \n                </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
