import React, { Component } from "react";
import SideBar from "./SideBar";
import Notice from "./Notice";
import axios from "axios";

class WhaleFinder extends Component {
  state = {
    options: {
      center: { lat: 48, lng: -124 },
      zoom: 5
    },
    content: {}
  };

  onScriptLoad() {
    var map = new window.google.maps.Map(
      document.getElementById("myMap"),
      this.state.options
    );

    this.setState({ map });
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  handleSeaMammalSelect = async mammal => {
    let endpoint =
      "https://hotline.whalemuseum.org/api.json?limit=1000&species=";
    endpoint += mammal;

    axios.get(endpoint).then(res => {
      let sightings = res.data,
        markers = [],
        count = sightings.length,
        content = { count: count };

      if (this.state.markers) {
        for (let i = 0; i < this.state.markers.length; i++) {
          this.state.markers[i].setMap(null);
        }
      }

      sightings.map(sighting => {
        let marker = new window.google.maps.Marker({
          position: { lat: sighting.latitude, lng: sighting.longitude },
          map: this.state.map,
          animation: window.google.maps.Animation.DROP
        });
        marker.addListener("click", e => {
          content.sighting = sighting;
          this.setState({ content });
        });
        markers.push(marker);
        return 0;
      });

      content.selectedMammal = mammal;
      this.setState({ content, markers });
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <SideBar onMammalSelect={this.handleSeaMammalSelect} />
        <div className="right-side">
          <div
            style={{ width: "75%", height: "75%", margin: "10px auto" }}
            id="myMap"
          ></div>
          <Notice content={this.state.content} />
        </div>
      </div>
    );
  }
}

export default WhaleFinder;
