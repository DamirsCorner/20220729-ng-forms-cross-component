import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberFormGroup } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.formBuilder.group({
    groupName: ['', Validators.required],
    members: this.formBuilder.array<MemberFormGroup>([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  get members(): FormArray<MemberFormGroup> {
    return this.form.controls.members;
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

  getMember(index: number) {
    return this.members.at(index) as FormGroup;
  }
}
