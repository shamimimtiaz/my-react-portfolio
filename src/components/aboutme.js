import React, { Component } from 'react';
import coverImage from "../../src/assets/cover-image.jpg"

class About extends Component {
  render() {
    return(
      <div><h1>About Page</h1>
      <h3>Who Am I?</h3>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </div>
    )
  }
}

export default About;
