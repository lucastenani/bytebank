import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferenceComponent } from './new-transference/new-transference.component';
import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [AppComponent, NewTransferenceComponent, StatementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
