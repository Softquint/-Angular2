import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    template : `<div class="container">
                    <h3>Template Form</h3>                   
                   <my-tf></my-tf>
                   <h3>Reactive Form</h3>
                   <my-rf></my-rf>                         
                </div>`
})

export class AppComponent{
    message:string = "Hello World";    
}