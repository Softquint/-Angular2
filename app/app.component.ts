import { Component , Pipe, PipeTransform } from '@angular/core';

@Component({
    selector:'my-app',
    template : `<div class="container">
                    
                    <ul>
                        <li *ngFor="let item of Quotes">
                            <a href="#" (click)="selectedQuotes(item)">{{item.name}}</a>
                        </li>
                    </ul>
                    <my-quotes [data]=selecteditem></my-quotes>
                </div>`
})

export class AppComponent{
    public selecteditem :any ={};
    public Quotes = [
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
    }];

    selectedQuotes(item){
         this.selecteditem = item;
         console.log('in main');
         console.log(item);
    }
}