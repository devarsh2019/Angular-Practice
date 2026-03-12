import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-bookingflight',
  standalone: false,
  templateUrl: './bookingflight.html',
  styleUrl: './bookingflight.scss',
  providers: [DatePipe],
})
export class Bookingflight {
  constructor(private datePipe: DatePipe) {}
  flightType = 'oneway';
  departureDate = '';
  returnDate = '';
  todayDate = '';
  showSuccess = false;

  ngOnInit() {
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }
  onSubmit() {
    console.log(this.departureDate);
    console.log(this.returnDate);
    console.log(this.todayDate);
    if (this.departureDate < this.todayDate) {
      window.alert('Please Enter the correct Departure date');
      return;
    }
    if (this.returnDate) {
      if (this.returnDate < this.departureDate) {
        window.alert('Please Enter the correct Return date');
        return;
      }
    }
    this.showSuccess = true;
  }
  closeCard() {
    this.showSuccess = false;
  }
}
