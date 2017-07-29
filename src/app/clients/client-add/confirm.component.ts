import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html'
})
export class Confirm {
  constructor(public dialogRef: MdDialogRef<Confirm>) {}
}
