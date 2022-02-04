import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss']
})
export class HamsterCardComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
