import React, { Component } from "react";

class Notice extends Component {
  state = {};

  getContent(content) {
    // console.log(content);
    if (content.content) {
      return content.content.description;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="notice">
        <p>{this.getContent(this.props)}</p>
      </div>
    );
  }
}

export default Notice;
