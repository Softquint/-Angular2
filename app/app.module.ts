import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SecondComponent} from './app.component2';

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent , SecondComponent],
    bootstrap:[AppComponent , SecondComponent]
})

export class AppModule { }