import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PipesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
