import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TemplateFomrs} from './app.templateforms';
import {ReactiveFomrs} from './app.reactiveform';

@NgModule({
    imports:[BrowserModule , FormsModule , ReactiveFormsModule],
    declarations:[AppComponent , TemplateFomrs , ReactiveFomrs],
    bootstrap:[AppComponent]
})

export class AppModule { }