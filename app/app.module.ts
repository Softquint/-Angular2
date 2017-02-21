import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SecondComponent} from './app.component2';

@NgModule({
    imports:[BrowserModule , FormsModule],
    declarations:[AppComponent , SecondComponent],
    bootstrap:[AppComponent]
})

export class AppModule { }