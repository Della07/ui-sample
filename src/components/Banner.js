import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Banner extends Component {
  render() {
    return (
      <div>
        <Image
          src="../banner.png"
          className="mw-100 d-none d-md-block d-lg-block"
        />
        <Image src="../banner-sm.png" className="mw-100 d-block d-md-none" />
      </div>
    );
  }
}

export default Banner;
