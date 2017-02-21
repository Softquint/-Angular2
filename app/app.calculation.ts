import { Component, Input , EventEmitter , Output } from '@angular/core';

@Component({
    selector: 'counter',
    template: ` <h2>Counter Assignment</h2> 
                <input type="number" value="{{count}}">
                <button class="btn btn-info" (click)="inc()" [disabled]=flag>+</button>
                <button class="btn btn-info" (click)="dec()" [disabled]=flag>-</button>`
})
export class CounterComponent {
    count: number = 0;
    _clickCount: number = 0;

    @Output() onMax = new EventEmitter<boolean>();

    set clickCount(value:number){
        this._clickCount = value;
        if (this._clickCount > 9) {
            this.flag = true;
            this.onMax.emit(true);
        } else{
            this.flag = false;
        }
    }
    get clickCount(){
        return this._clickCount;
    }
    flag: boolean = false;
    @Input() countby: number = 0;
    private reset() {
        this.clickCount = 0;
        console.log("Reset Called.");
        this.count = 0;
         this.onMax.emit(false);
    }
    manageClickCount() {
        this.clickCount += 1;
    }
    private inc() {
        this.count += this.countby;
        this.manageClickCount();
    }
    private dec() {
        this.count -= this.countby;
        this.manageClickCount();
    }
}