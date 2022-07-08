import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <app-pipes></app-pipes>
      <div class="row mt-3">
        <div class="col-12">
          <app-custom-pipe></app-custom-pipe>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {}
