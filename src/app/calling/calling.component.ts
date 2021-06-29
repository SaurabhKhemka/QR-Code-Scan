import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css'],
})
export class CallingComponent implements OnInit {
  link: string = '';
  constructor() {}
  ngOnInit() {}

  sendMessage() {
    var val = prompt('Enter phone number', '');
    if (val)
      this.link = 'https://wa.me/+91' + val + '?text=This is a test message';
  }

  makeCall() {
    var val = prompt('Enter phone number', '');
    if (val) this.link = 'https://wa.me/+91' + val + '';
  }
}
