import { FormControl, FormGroup } from '@angular/forms';

export type MemberFormGroup = FormGroup<{
  memberName: FormControl<string | null>;
}>;
