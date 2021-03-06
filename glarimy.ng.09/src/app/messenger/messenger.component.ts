import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
