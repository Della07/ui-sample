import React, { Component } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";

class Advisory extends Component {
  render() {
    return (
      <div className="ad d-none d-lg-block">
        <Container className="pt-4">
          <Row className="">
            <Col className="col-2">
              <Image className="adpic" src="../boy.png" />
            </Col>
            <Col className="col-10">
              <h4>Service Advisory</h4>
              <p className="adtext">
                Depending on the type of business, applicants may be required to
                complete the SEC documentary requirements outside the CBP and
                pay the fees over-the-counter.
              </p>
              <p className="adtext font-weight-bold">
                Show types of businesses
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Advisory;
