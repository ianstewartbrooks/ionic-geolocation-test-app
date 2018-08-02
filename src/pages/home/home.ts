import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  lat: any;
  lng: any;

  constructor(
    public navCtrl: NavController,
    private geo: Geolocation,
    private platform: Platform
  ) {
    this.platform.ready().then(resp => {
      this.getGeolocation();
    });
  }

  // Functions

  clickedGetGeolocation() {
    this.getGeolocation();
  }

  getGeolocation() {
    this.geo
      .getCurrentPosition()
      .then(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }
}
