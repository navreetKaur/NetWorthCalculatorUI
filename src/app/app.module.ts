import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NwCalculatorModule} from "./modules/nw-calculator/nw-calculator.module";
import {UtilService} from "./util.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApplicationMessageSnackBarService} from "./snackService";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NwCalculatorModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [UtilService, ApplicationMessageSnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
