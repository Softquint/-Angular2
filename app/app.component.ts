import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    template : `<div class="container">
                    <h1>Property Binding</h1>
                    <h2 innerHtml="{{message}}">Hi, </h2>
                    <h2 bind-innerHtml="message">Hi, </h2>
                    <h2 [innerHtml]="message">Hi, </h2>

                    <!-- Text-box Biniding Data -->
                    <input type="text" value="{{message}}" class="form-control">
                    <input type="text" bind-value="message" class="form-control">
                    <input type="text" [value]="message" class="form-control">

                     <!-- Event Biniding Data -->
                     <button on-click = "change()" class="btn btn-sm btn-primary">click</button>
                     <button (click) = "change()" class="btn btn-sm btn-primary">click</button>

                     <!-- Two way  Biniding Data -->
                    <input type="text" bindon-ngModel="message" class="form-control">
                    <input type="text" [(ngModel)]="message" class="form-control">                 
                </div>`
})

export class AppComponent{
    message:string = "Hello World";

    change(){
        this.message = 'I am changed'
    }
}