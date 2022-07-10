import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent {
  @Input() formGroupName: string | number | null = null;

  constructor() {}
}
