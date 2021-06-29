import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallingComponent } from './calling/calling.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScannerComponent } from './scanner/scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ScannerComponent,
    GuestListComponent,
    NavbarComponent,
    CallingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ReactiveFormsModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
