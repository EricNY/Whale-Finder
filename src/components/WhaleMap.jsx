import React, { Component } from "react";

class WhaleMap extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    var map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );

    this.setState({map});
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  updatePins = sighting =>{
    var infowindow = new window.google.maps.InfoWindow({
      content: sighting.description
    });

    var marker = new window.google.maps.Marker({
      position: { lat: sighting.latitude, lng: sighting.longitude },
      map: this.state.map,
      title: sighting.species
    });
    console.log(this.state.map);
    // marker.addListener('click', function() {
    //   infowindow.open(this.state.map, marker);
    // });

  }

  render() {
    return (
      <div 
        style={{ width: '75%', height: '90%', margin: '10px auto' }} 
        id={this.props.id} 
      >{this.props.sightings.map(sighting => {
        this.updatePins(sighting);
      })}</div>
    );
  }
}

export default WhaleMap;
// `https://maps.google.com/maps/api/js?key=AIzaSyCtMc04B4UNQSPJ0LbiZqkK7ZtlRFKmBSU`;