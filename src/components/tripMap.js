import React, { Component } from "react";
import L from "leaflet";
import './../../node_modules/leaflet/dist/leaflet.css';
import "../assets/css/pictogram.css";
import "leaflet-polylinedecorator";

import { Segment } from "semantic-ui-react";

class tripMap extends Component {
  componentDidMount() {
    // create map
    var map = L.map("map", {
      center: [27.063622, 56.461369],
      zoom: 12,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ],
      zoomControl: true,
      scrollWheelZoom: false
    });
    // create a red polyline from an array of LatLng points
    var latlngs = [
      [27.09221, 56.447642],
      [27.084873, 56.444378],
      [27.077842, 56.435621],
      [27.068212, 56.428239],
      [27.053719, 56.425557],
      [27.049907, 56.440205]
    ];
    var polyline = L.polyline(latlngs, { color: "black" }).addTo(map);

    var marker = L.marker([27.084873, 56.444378], {title : 'mamad' ,alt: 'mamad'}).addTo(map);
  }
  render() {
    return (
      <>
        <Segment
          id="map"
          style={{ height: 300, marginTop: "1em", zIndex: 50 }}
        ></Segment>
      </>
    );
  }
}

export default tripMap;
