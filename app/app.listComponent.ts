import { Component , Input} from '@angular/core';

@Component({
    selector:'my-listapp',
    template:`<h2>Coming form parent List of person</h2>
                <h3>Selected Person:{{sPerson}}</h3>
                <ul class="group-list">
                    <li *ngFor="let item of personList">
                        <a href="" (click)=select($event,item)>{{item}}</a>
                    </li>
                </ul>`
})

export class ListComponent{
    @Input() personList:Array<string>;
    sPerson : string;
    select(event , item:string){
        event.preventDefault();
        this.sPerson = item;
    }
}