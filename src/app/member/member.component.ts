import { Component, Input } from '@angular/core';
import { MemberFormGroup } from '../types';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent {
  @Input() formGroup?: MemberFormGroup;

  constructor() {}
}
