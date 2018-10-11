import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { NgForm, FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators }
 from "@angular/forms";
declare var $: any;

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
    public userForm: FormGroup;
    protected submitted: Boolean = false;

    constructor(private fb: FormBuilder) { }
    ngOnInit() {
        this.userForm = this.fb.group({
          name: new FormGroup({
            firstname: new FormControl,
            lastname: new FormControl
          }),
          age: '2',
          address: 'buckingham palace'

      })
        console.log('form is',this.userForm.get('name').status);
    }

    onSubmit(e: any) {
      e.preventDefault();
        this.userForm.reset();
        console.warn(this.userForm.value);
        console.log(this.userForm.get('name').value);
        console.log(this.userForm.errors);
    }

    onBlur(event: any) {
        if(this.userForm.get(event.target.name)) {
            console.log(this.userForm.get(event.target.name).errors);
        };
        console.log('name is',this.userForm.get('name').status);
    }

    get name() {
      return this.userForm.get('name');
    }
    set name(param: any) {
      this.name = param;
    }

}
