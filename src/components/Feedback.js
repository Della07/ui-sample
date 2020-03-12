import React, { Component } from "react";
import {
  Col,
  Row,
  Alert,
  Form,
  Card,
  Image,
  Button,
  Accordion
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleUp,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

class Feedback extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card className="border-0 rounded-0">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="fbg">
            <h6 className="text-center my-auto p-3">
              Help make the Central Business Portal better. Leave a feedback or
              report an issue.
              <FontAwesomeIcon icon={(fab, faAngleUp)} className="ml-2" />
            </h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="text-center">
              <Row className="p-lg-5">
                <Col className="p-md-3 ml-lg-5 col-12 col-lg-5 d-none d-lg-block">
                  <h5 className="text-muted p-4">Found an issue?</h5>
                  <span className="text-muted">
                    Please report all bugs and issues to
                  </span>
                  <br />
                  <a href="#!">helpdesk@business.gov.ph</a>
                </Col>
                <Col className="p-md-5 mx-lg-5 col-12 col-lg-5">
                  <h5 className="">
                    Help us improve the Central Business Portal
                  </h5>
                  <Alert variant="danger" className="m-5">
                    <FontAwesomeIcon
                      icon={(fab, faExclamationTriangle)}
                      className="mr-3"
                    />
                    Please select your answer.
                  </Alert>

                  <h6 className="">
                    How satisfied are you with the website design?
                  </h6>
                  <Row className="align-middle py-3">
                    <Col className="text-right col-3">
                      <small className="text-muted">Not at all satisfied</small>
                    </Col>
                    <Col className="col-6">
                      <Form.Row className="rbg">
                        <div key={`inline-radio`} className="p-2">
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-1`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-2`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-3`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-4`}
                          />
                        </div>
                      </Form.Row>
                    </Col>
                    <Col className="text-left col-3">
                      <small className="text-muted">Very satisfied</small>
                    </Col>
                  </Row>

                  <h6 className="pt-3">
                    How easy was it to navigate the website?
                  </h6>
                  <Row className="align-middle py-3">
                    <Col className="text-right col-3">
                      <small className="text-muted">Not at all satisfied</small>
                    </Col>
                    <Col className="col-6">
                      <Form.Row className="rbg">
                        <div key={`inline-radio`} className="p-2">
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-1`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-2`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-3`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-4`}
                          />
                        </div>
                      </Form.Row>
                    </Col>
                    <Col className="text-left col-3">
                      <small className="text-muted">Very satisfied</small>
                    </Col>
                  </Row>

                  <h6 className="pt-3">How useful is the search interface?</h6>
                  <Row className="align-middle py-3">
                    <Col className="text-right col-3">
                      <small className="text-muted">Not at all satisfied</small>
                    </Col>
                    <Col className="col-6">
                      <Form.Row className="rbg">
                        <div key={`inline-radio`} className="p-2">
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-1`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-2`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-3`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-4`}
                          />
                        </div>
                      </Form.Row>
                    </Col>
                    <Col className="text-left col-3">
                      <small className="text-muted">Very satisfied</small>
                    </Col>
                  </Row>

                  <h6 className="pt-3">
                    How satisfied are you with the process provided?{" "}
                  </h6>
                  <Row className="align-middle py-3">
                    <Col className="text-right col-3">
                      <small className="text-muted">Not at all satisfied</small>
                    </Col>
                    <Col className="col-6">
                      <Form.Row className="rbg">
                        <div key={`inline-radio`} className="p-2">
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-1`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-2`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-3`}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            id={`inline-radio-4`}
                          />
                        </div>
                      </Form.Row>
                    </Col>
                    <Col className="text-left col-3">
                      <small className="text-muted">Very satisfied</small>
                    </Col>
                  </Row>

                  <h6 className="p-3">Please give us your comment</h6>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Type here specific areas for improvement or features that you would like to see in our portal."
                      />
                    </Form.Group>
                  </Form>
                  <h6 className="p-3">
                    Provide your email address if you wish to get a response
                  </h6>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="me@email.com" />
                    </Form.Group>
                  </Form>
                  <Alert variant="secondary" className="p-3 mt-5">
                    <Row>
                      <Col className="text-left my-auto col-12 col-md-5 ">
                        <span className="">
                          Let us know that you are human by checking "I'm not a
                          robot".
                        </span>
                      </Col>
                      <Col className="col-12 col-md-7">
                        <Card className="">
                          <Form.Row className="mx-auto p-3">
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check
                                type="checkbox"
                                label="I'm not a robot"
                                className=""
                              />
                            </Form.Group>
                            <Image src="../captcha.png" className="cap ml-2 " />
                          </Form.Row>
                        </Card>
                      </Col>
                    </Row>
                  </Alert>
                  <Button variant="primary" size="lg" active>
                    Submit Feedback
                  </Button>
                </Col>
                <Col className="pl-sm-5 pt-4 pb-4 col-12 d-block d-lg-none text-left">
                  <h2 className="text-muted">Found an issue?</h2>
                  <span className="text-muted">
                    Please report all bugs and issues to
                  </span>
                  <br />
                  <a href="#!">helpdesk@business.gov.ph</a>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default Feedback;
