import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";

class WhaleMap extends Component {
  state = {};

  // onMarkerClick = (props, marker, e) => {

  // };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  componentDidMount() {}

  render() {
    const { sightings } = this.props;
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    // <p>map goes here</p>;
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={4}
          style={mapStyles}
          initialCenter={{ lat: 48, lng: -122 }}
        >
          {sightings.map(sighting => (
            <Marker
              key={sighting.id}
              onClick={this.onMarkerClick}
              position={{
                lat: sighting.latitude,
                lng: sighting.longitude,
                infowindow: "lll"
              }}
            >
              {true && (
                <InfoWindow
                  key="info-#{sighting.id}"
                  marker={this.state.activeMarker}
                  visible={true}
                >
                  <div>
                    <p>hihihih</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </Map>

        {/* 
          <Marker
            onClick={this.onMarkerClick}
            name={"Dolores park"}
            position={{ lat: 37.759703, lng: -122.428093 }}
          >
            <InfoWindow marker={this.state.activeMarker} visible={true}>
              <div>
                <h1>po8765</h1>
              </div>
            </InfoWindow>
          </Marker>

        </Map> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU"
  apiKey: ""
})(WhaleMap);
