import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  public tryToHandleError(): void {
    try {
      this.throwError();
    } catch (e) {
      console.warn('I catched an error inside my module, but still not know how to prcess it.');
      throw e;
    }
  }

  private throwError(): void {
    throw Error('Error in Second Module')
  }
}
