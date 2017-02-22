"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ReactiveFomrs = (function () {
    function ReactiveFomrs() {
    }
    return ReactiveFomrs;
}());
ReactiveFomrs = __decorate([
    core_1.Component({
        selector: 'my-rf',
        template: "<form class=\"form-horizontal\" #form=\"ngForm\" (submit)=\"logForm(form.value)\">\n                    <div class=\"form-group\">\n                        <label>First Name: </label>\n                        <input type=\"text\" class=\"form-control\" name=\"firstname\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n                    </div>\n                </form>"
    })
], ReactiveFomrs);
exports.ReactiveFomrs = ReactiveFomrs;
