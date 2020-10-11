import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin: 40px">
      <button (click)="throwError()">Throw Error</button>
    </div>
    `
})
export class AppComponent {
  public throwError(): void {
    throw new Error('Example error to handle globally');
  }
}
