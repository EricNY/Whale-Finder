import React, { Component } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";

class WhaleMap extends Component {
  state = {};

  render() {
    const { sightings } = this.props;
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{ lat: 48, lng: -122 }}
      >
        {console.log(sightings)}
        {sightings.map(sighting => (
          <Marker
            key={sighting.id}
            position={{
              lat: sighting.latitude,
              lng: sighting.longitude,
              infowindow: "lll"
            }}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU"
  apiKey: ""
})(WhaleMap);
