import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Guest } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: any;
  hasDevices: boolean = false;
  hasPermission: boolean = false;
  qrResult: any;
  guestExist: boolean = false;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {}

  //Clears the QR code scanned
  clearResult(): void {
    this.qrResult = null;
  }

  //Scans the QR code
  onCodeResult(resultString: string): void {
    alert(resultString);
    // this.guestExist = false;
    // if (this.checkQRJSON(resultString)) {
    //   this.qrResult = JSON.parse(resultString);
    //   this.checkInGuest(this.qrResult);
    //   this.clearMessage();
    // } else {
    //   this.guestExist = false;
    //   this.clearMessage();
    // }
  }

  //Permission for the app to use the device camera
  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  //Checks if the QR code belongs to a valid guest
  checkInGuest(guestQR: Guest): void {
    this.guestService.guests$
      .pipe(
        map((guests) => guests.find((guest: Guest) => guest.id === guestQR.id))
      )
      .subscribe((guest) => {
        alert(JSON.stringify(guest));
        if (guest !== null && guest !== undefined) {
          this.guestExist = true;
        } else {
          this.guestExist = false;
        }
        this.clearResult();
        this.clearMessage();
      });
  }

  clearMessage() {
    setTimeout(() => {
      this.guestExist = false;
    }, 3000);
  }

  //This function check if the QR code has a valid JSON as data
  checkQRJSON(qrString: string): boolean {
    if (
      /^[\],:{}\s]*$/.test(
        qrString
          .replace(/\\["\\\/bfnrtu]/g, '@')
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            ']'
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
