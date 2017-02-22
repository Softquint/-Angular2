import { Component , Input } from '@angular/core';

@Component({
    selector:'my-quotes',
    template : `<div class="container">
                    {{data.quote}}
                </div>`
})

export class Quotes{
    @Input() data;
    constructor(){
        console.log(this.data);
    }
}