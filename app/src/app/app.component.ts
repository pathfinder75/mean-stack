import { Component } from '@angular/core';
import { ServerService } from "./server.service";
import { Sensor } from './model/Sensor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sensors: Sensor[] = [
    {
      name: 'testSensor',
      value: {},
      sequence: 10,
      id: this.generateId()
    },
    {
      name: 'LiveSensor',
      value: {},
      sequence: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.sensors.push({
      name: name,
      value: {},
      sequence: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.storeServers(this.sensors)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
      
    )
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
