import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FilterSearchPipe } from './core/pipes/filter-search.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipeComponent,
    FilterSearchPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
