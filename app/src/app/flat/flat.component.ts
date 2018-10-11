import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {
  message: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.onMessage().subscribe();
  }
  sendMessage() {
    this.messageService.sendMessage(this.message);
  }

}
