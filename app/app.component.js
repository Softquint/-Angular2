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
        this.selecteditem = {};
        this.Quotes = [
            {
                name: "Fowler",
                quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
            },
            {
                name: "Twain",
                quote: "Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
            },
            {
                name: "Poe",
                quote: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
            },
            {
                name: "Plato",
                quote: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else. "
            }
        ];
    }
    AppComponent.prototype.selectedQuotes = function (item) {
        this.selecteditem = item;
        console.log('in main');
        console.log(item);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container\">\n                    \n                    <ul>\n                        <li *ngFor=\"let item of Quotes\">\n                            <a href=\"#\" (click)=\"selectedQuotes(item)\">{{item.name}}</a>\n                        </li>\n                    </ul>\n                    <my-quotes [data]=selecteditem></my-quotes>\n                </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
