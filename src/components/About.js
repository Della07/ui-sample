import React, { Component } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container className="p-md-5 ">
        <Row className="p-lg-5">
          <Col className="d-none d-lg-block">
            <Image src="../asset1.png" className="apic float-left" />
          </Col>
          <Col>
            <h4>What is the Central Business Portal?</h4>
            <p className="atext pt-3">
              The Central Business Portal (CBP) is a platform for
              business-related applications and transactions where citizens and
              business owners can access online forms, information, clearances
              and requirements they need for their day-to-day business
              operations.
            </p>
            <p className="atext">
              There will only be one site to visit and remember for business
              transactions.
            </p>
          </Col>
        </Row>
        <Row className="p-lg-5">
          <Col className="d-none d-lg-block">
            <h4>What can the Central Business do?</h4>
            <p className="atext pt-3">
              The Central Business Portal (CBP) is a platform for
              business-related applications and transactions where citizens and
              business owners can access online forms, information, clearances
              and requirements they need for their day-to-day business
              operations.
            </p>
            <p className="atext">
              Learn more about types of businesses and how to use the CBP.
            </p>
            <Button size="lg" variant="outline-primary">
              Read the Guides and FAQs
            </Button>
          </Col>
          <Col className="d-none d-lg-block">
            <Image src="../asset1.png" className="apic float-right" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
