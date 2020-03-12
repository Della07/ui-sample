import React, { Component } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";

class Client extends Component {
  render() {
    return (
      <div className="clbg p-3">
        <Container className="p-lg-5 text-center">
          <Col className="cl text-center p-lg-5">
            <Row className="cltext">
              <p className="p-4">
                The Central Business Portal (CBP) offers a single site for all
                business-related information, which aims to promote effective
                service delivery and transparency in the government. It seeks to
                streamline the registration of business, renewal of permits, and
                other activities through online transactions.
              </p>
              <p className="p-4">
                Under Republic Act 11032, or the Ease of Doing Business and
                Efficient Delivery of Government Services Act, provides the
                creation of a single portal to make business transactions easier
                and faster.
              </p>
            </Row>
            <Row className="d-block d-sm-none pb-5">
              <Col className="py-3">
                <Image src="../sec.png" className="img-fluid logo" />
              </Col>
              <Col className="py-3">
                <Image src="../bir.png" className="img-fluid logo " />
              </Col>
              <Col className="py-3">
                <Image src="../dict.png" className="img-fluid logo " />
              </Col>
              <Col className="py-3">
                <Image src="../arta.png" className="img-fluid  logo" />
              </Col>
            </Row>
            <Col className="d-none d-sm-block">
              <div className="mx-auto d-inline-block">
                <Image src="../sec.png" className="img-fluid logo" />
                <Image src="../bir.png" className="img-fluid logo " />
                <Image src="../dict.png" className="img-fluid logo " />
                <Image src="../arta.png" className="img-fluid  logo" />
              </div>
            </Col>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Client;
