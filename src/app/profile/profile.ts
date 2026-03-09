import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  username = new FormControl();
  email = new FormControl();
  dob = new FormControl();
  count = 0;
  onSave() {
    console.log('UserName : ', this.username.value);
    console.log('email : ', this.email.value);
    console.log('Date of Birth : ', this.dob.value);
    this.count++;
    console.log('Number of Times Save Button. Clicked', this.count);
  }
  onReset() {
      this.username.reset();
      this.email.reset();
      this.dob.reset();
  }
}
