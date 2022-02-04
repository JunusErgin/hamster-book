import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse.'
  ];

  postImages = [
    'assets/img/hamster/1.jpg',
    'assets/img/hamster/2.jpg',
    'assets/img/hamster/3.jpg',
    'assets/img/hamster/4.jpg'
  ];

  buttonClicked() {
    alert('Hallo, wie geht es dir?');
  }
}
