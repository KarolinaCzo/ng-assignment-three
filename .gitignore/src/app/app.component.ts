import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showParagraph = false;
  numberOfClicks = 0;

  onShowParagraph() {
    this.showParagraph = !this.showParagraph;
  }

  onClick() {
    this.numberOfClicks++;
  }

  getColor() {
    return this.numberOfClicks >= 5 ? '#008B8B' : 'transparent';
  }
}
