import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  texts = [];
  images = [];


  constructor() { }

  // addFriend('Peter', 'Hallo', '/assets/img/hamster/1.jpg')
  addFriend(name, text, image){
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
  }
}
