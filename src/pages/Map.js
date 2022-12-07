import React, { Component } from "react";
import "../assets/style.css";
import * as styles from "../";

class Map extends Component {
  map = null;
  loadMap() {
    this.map = new vietmapgl.Map({
      container: "map",
      style:
        "https://maps.vietmap.vn/mt/tm/style.json?apikey=YOUR_API_KEY", // stylesheet location
      center: [106.69799977311857, 10.772520403841128], // starting position [lng, lat]
      zoom: 15,
      pitch: 90, // starting zoom
    });
  }
  addMarker() {
    //add marker to map
    new vietmapgl.Marker()
      .setLngLat([106.69799977311857, 10.772520403841128])
      .addTo(this.map);
  }
  componentDidMount() {
    this.loadMap();
    this.addMarker();
  }
  render() {
    return <div id="map"></div>;
  }
}

export default Map;
