import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallingComponent } from './calling/calling.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {
    path: '',
    component: CallingComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'guests',
    component: GuestListComponent,
  },
  {
    path: 'scanner',
    component: ScannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
