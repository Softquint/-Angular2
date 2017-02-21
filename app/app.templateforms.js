"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TemplateFomrs = (function () {
    function TemplateFomrs() {
    }
    TemplateFomrs.prototype.logForm = function (value) {
        console.log(value);
    };
    TemplateFomrs.prototype.logFormGroup = function (value) {
        console.log(value);
    };
    return TemplateFomrs;
}());
TemplateFomrs = __decorate([
    core_1.Component({
        selector: 'my-tf',
        template: "<form class=\"form-horizontal\" #form=\"ngForm\" (submit)=\"logForm(form.value)\">\n                    <div class=\"form-group\">\n                        <label>First Name: </label>\n                        <input type=\"text\" class=\"form-control\" name=\"firstname\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Last Name: </label>\n                        <input type=\"text\" class=\"form-control\" name=\"lasttname\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>City: </label>\n                        <input type=\"text\" class=\"form-control\" name=\"city\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Zip: </label>\n                        <input type=\"text\" class=\"form-control\" name=\"zip\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n                    </div>\n                </form>\n                <hr>\n                <form class=\"form-horizontal\" #formgroup=\"ngForm\" (submit)=\"logFormGroup(formgroup.value)\">\n                    <div ngModelGroup=\"name\">\n                        <div class=\"form-group\">\n                            <label>First Name: </label>\n                            <input type=\"text\" class=\"form-control\" name=\"firstname\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Last Name: </label>\n                            <input type=\"text\" class=\"form-control\" name=\"lasttname\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n                        </div>\n                    </div>\n                </form>                \n                "
    })
], TemplateFomrs);
exports.TemplateFomrs = TemplateFomrs;
