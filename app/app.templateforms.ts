import { Component} from '@angular/core';

@Component({
    selector:'my-tf',
    template : `<form class="form-horizontal" #form="ngForm" (submit)="logForm(form.value)">
                    <div class="form-group">
                        <label>First Name: </label>
                        <input type="text" class="form-control" name="firstname" ngModel>
                    </div>
                    <div class="form-group">
                        <label>Last Name: </label>
                        <input type="text" class="form-control" name="lasttname" ngModel>
                    </div>
                    <div class="form-group">
                        <label>City: </label>
                        <input type="text" class="form-control" name="city" ngModel>
                    </div>
                    <div class="form-group">
                        <label>Zip: </label>
                        <input type="text" class="form-control" name="zip" ngModel>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">submit</button>
                    </div>
                </form>
                <hr>
                <form class="form-horizontal" #formgroup="ngForm" (submit)="logFormGroup(formgroup.value)">
                    <div ngModelGroup="name">
                        <div class="form-group">
                            <label>First Name: </label>
                            <input type="text" class="form-control" name="firstname" ngModel>
                        </div>
                        <div class="form-group">
                            <label>Last Name: </label>
                            <input type="text" class="form-control" name="lasttname" ngModel>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">submit</button>
                        </div>
                    </div>
                </form>                
                `
})

export class TemplateFomrs{
    logForm(value:any){
        console.log(value);
    }
    logFormGroup(value:any){
        console.log(value);
    }
}