import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css'],
})
export class GuestListComponent implements OnInit {
  guestList$ = this.guestService.guests$;

  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';

  constructor(private guestService: GuestService) {}
  ngOnInit() {}
}
