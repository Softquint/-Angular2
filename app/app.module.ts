import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {Quotes} from './app.quotelist';

@NgModule({
    imports:[BrowserModule , FormsModule , ReactiveFormsModule],
    declarations:[AppComponent, Quotes ],
    bootstrap:[AppComponent]
})

export class AppModule { }