import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.formBuilder.group({
    groupName: ['', Validators.required],
    members: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  get members() {
    return this.form.get('members') as FormArray;
  }

  addMember() {
    this.members.push(
      this.formBuilder.group({
        memberName: ['', Validators.required],
      })
    );
  }

  removeMember(index: number) {
    this.members.removeAt(index);
  }
}
