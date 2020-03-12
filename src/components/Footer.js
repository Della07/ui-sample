import React, { Component } from "react";
import { Image, Col, Row, Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="">
        <Container fluid className="footer">
          <Row className="">
            <Col className="d-flex justify-content-start my-auto col-12 col-md-4 p-4 p-md-1">
              <Image
                src="../cbp logo-05@3x.png"
                className="fl ml-md-5 mx-auto"
              />
            </Col>
            <Col className=" my-auto ftext col-12 col-md-4 d-none d-md-block">
              <Row className="">
                <h5>Terms of Use</h5>
                <span className="dot my-auto mx-3"></span>
                <h5>Privacy Policy</h5>
              </Row>
            </Col>
            <Col className="d-block d-md-none text-center p-1">
              <p className="text-light">Philippine National Trade Repository</p>
              <p className="text-light">About the Philippines</p>
            </Col>
            <Col className="d-flex justify-content-end pt-5 col-12 col-md-4">
              <Image src="../fbg.png" className="fl" />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="p-4">
            <Col className="d-flex justify-content-start col-12 col-sm-6">
              <Image
                src="../coa-footer@3x.png"
                className="fls ml-md-5 my-auto"
              />
              <h4 className="my-auto ml-3 text-primary font-weight-bold d-none d-sm-block">
                GOVPH
              </h4>
              <h1 className=" ml-3 text-primary d-block d-sm-none">GOVPH</h1>
            </Col>
            <Col className="col-12 col-sm-6">
              <div className=" d-none d-sm-block ">
                <a href="#!">GOV.PH</a>
                <span className="dots mx-3"></span>
                <a href="#!">Open Data</a>
                <span className="dots mx-3"></span>
                <a href="#!">Freedom of Information</a>
                <span className="dots mx-3"></span>
                <a href="#!">Official Gazette</a>
                <span className="dots mx-3"></span>
                <a href="#!">Philippine National Trade Repository</a>
                <span className="dots mx-3"></span>
                <a href="#!">Contact Center ng Bayan 1-6565</a>
              </div>
              <div className="d-block d-sm-none py-4">
                <a href="#!">Open Data</a>
                <span className="dots mx-3"></span>
                <a href="#!">Freedom of Information</a>
                <span className="dots mx-3"></span>
                <a href="#!">Official Gazette</a>
                <span className="dots mx-3"></span>
                <a href="#!">Philippine National Trade Repository</a>
                <span className="dots mx-3"></span>
                <a href="#!">Contact Center ng Bayan 1-6565</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
