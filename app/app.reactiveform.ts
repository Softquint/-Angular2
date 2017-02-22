import { Component} from '@angular/core';
import {Form} from '@angular/from'

@Component({
    selector:'my-rf',
    template : `<form class="form-horizontal" #form="ngForm" (submit)="logForm(form.value)">
                    <div class="form-group">
                        <label>First Name: </label>
                        <input type="text" class="form-control" name="firstname" ngModel>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">submit</button>
                    </div>
                </form>`
})

export class ReactiveFomrs{

}