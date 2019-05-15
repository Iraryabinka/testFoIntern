import { Component } from '@angular/core';
import * as L from 'leaflet';
//import 'leaflet-routing-machine';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My test App for Internship';

  ngAfterViewInit() {

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJhY2hlcnZ5YWtvdmEiLCJhIjoiY2p2bnpuajlpMW53MDRhbWdnZjRnYmw1MiJ9.-tHANnuP63SqxXhPsySFbg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  var marker = L.marker([51.5, -0.09]).addTo(mymap);

}
}
