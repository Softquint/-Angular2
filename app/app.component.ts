import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    template : `<div class="container">                   
                    <!-- Text-box Biniding Data -->
                    <input type="text" value="{{message}}" class="form-control">
                    <input type="text" bind-value="message" class="form-control">
                    <input type="text" [value]="message" class="form-control">                              
                </div>`
})

export class AppComponent{
    message:string = "Hello World";    
}