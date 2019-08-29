import React, { Component } from "react";
import SideBar from "./SideBar";
import WhaleMap from "./WhaleMap";
import Notice from "./Notice";
import axios from "axios";

class WhaleFinder extends Component {
  state = {
    sightings: []
  };

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
      <div className="main-wrapper">
        <SideBar onMammalSelect={this.handleSeaMammalSelect} />
        <div className="right-side">
          <WhaleMap sightings={this.state.sightings} />
          <Notice />
        </div>
      </div>
    );
  }
}

export default WhaleFinder;
