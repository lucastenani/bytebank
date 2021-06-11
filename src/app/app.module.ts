import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferenceComponent } from './new-transference/new-transference.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
