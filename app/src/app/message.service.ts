import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url = 'http://localhost:5000';
  private socket;
  constructor() { 
    this.socket = io(this.url);
  }
  public sendMessage(message) {
    this.socket.emit('message', message);
  }
  public onMessage(): Observable<String> {
    return new Observable(observer => {
      this.socket.on('message', msg => {
      console.log('received message from websocket server :', msg);
      observer.next(msg);
      })
    });
  }
}
