import { Component, OnInit } from '@angular/core';
import { Sensor } from "../../model/Sensor";
import { SENSORS } from "../../mock/mock-sensor";
import { ServerService } from "../../server.service";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  sensors: {name: 'sensor test', value: {test: 'value'}, sequence: number}
  sensorState: boolean;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }
  onClick(sensor) { return this.serverService.storeServers(sensor) }

}
