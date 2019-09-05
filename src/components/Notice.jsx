import React, { Component } from "react";

class Notice extends Component {
  state = {};

  getContent(content) {
    // console.log(content);
    if (!content.selectedMammal) {
      return (
        <div>
          <p>
            Welcome to the Whale Finder. All data is collected from sightings
            reported to the{" "}
            <a
              href="https://whalemuseum.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whale Museum
            </a>
            .
          </p>
          <p>
            Please click on an animal on the left to get the latest sighting
            info.
          </p>
        </div>
      );
    } else if (content.selectedMammal && !content.sighting) {
      return (
        <div>
          There have been {content.count} {content.selectedMammal} sigthings.
          Click on each marker for details.
        </div>
      );
    } else {
      return (
        <div>
          <p>
            This {content.selectedMammal} was sighted at latitude:
            {content.sighting.latitude}, longitude: {content.sighting.longitude}
            .
          </p>
          <p>{content.sighting.description}</p>
        </div>
      );
    }
  }

  render() {
    return <div className="notice">{this.getContent(this.props.content)}</div>;
  }
}

export default Notice;
