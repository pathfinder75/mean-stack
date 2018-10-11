import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(sensors) {
        // return this.http.put('https://angular-http-projet.firebaseio.com/data.json', sensors);
        return this.http.post('http://localhost:5000/api/sensor/', sensors);
        
    }
}