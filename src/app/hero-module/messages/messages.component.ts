import { Component, OnInit } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Hero } from 'src/app/hero';
// import { HEROES } from 'src/app/hero-mock';
import { MessageService } from './message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor( public messageService: MessageService) { }

  ngOnInit(): void {
  }


}
