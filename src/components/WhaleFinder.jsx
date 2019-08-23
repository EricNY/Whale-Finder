import React, { Component } from "react";
import SideBar from "./SideBar";
import WhaleMap from "./WhaleMap";
import axios from "axios";

class WhaleFinder extends Component {
  state = {
    sightings: []
  };

  //  google maps api key
  //   AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU
  handleSeaMammalSelect = async mammal => {
    let endpoint =
      "http://hotline.whalemuseum.org/api.json?limit=1000&species=";
    endpoint += mammal;
    axios.get(endpoint).then(res => {
      const sightings = res.data;
      this.setState({ sightings });
    });
    this.setState({ selectedMammal: mammal });
  };

  render() {
    return (
      <React.Fragment>
        <SideBar onMammalSelect={this.handleSeaMammalSelect} />
        <WhaleMap sightings={this.state.sightings} />
      </React.Fragment>
    );
  }
}

export default WhaleFinder;
