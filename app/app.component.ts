import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    template : `<div class="container">                   
                   <my-tf></my-tf>
                   <my-rf></my-rf>                         
                </div>`
})

export class AppComponent{
    message:string = "Hello World";    
}