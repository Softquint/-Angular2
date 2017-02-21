import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SecondComponent} from './app.component2';
import {ListComponent} from './app.listComponent';
import {CounterComponent} from './app.calculation';

@NgModule({
    imports:[BrowserModule , FormsModule],
    declarations:[AppComponent , SecondComponent , ListComponent , CounterComponent],
    bootstrap:[AppComponent]
})

export class AppModule { }