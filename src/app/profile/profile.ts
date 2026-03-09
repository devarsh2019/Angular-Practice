import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  username = '';
  email = '';
  dob = '';
  count = 0;
  onSave() {
    console.log("UserName : ", this.username);
    console.log('email : ', this.email);
    console.log("Date of Birth : ", this.dob)
    this.count++;
    console.log("Number of Times Save Button. Clicked", this.count);
  }
  onReset()
  {
      this.username = '';
      this.email = '';
      this.dob = '';
  }
}
