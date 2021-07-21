import React, { Component } from "react";
import {
  Col,
  Row,
  Alert,
  Form,
  Card,
  Image,
  Button,
  Accordion,
  Toast,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleUp,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { additionalFiles: [], error: null, show: false };
  }

  render() {
    const { additionalFiles } = this.state;
    console.log("rrr", this.state);

    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card className="border-0 rounded-0">
            <Accordion.Toggle as={Card.Header} eventKey="0" className="fbg">
              <h6 className="text-center my-auto p-3">
                Help make the Central Business Portal better. Leave a feedback
                or report an issue.
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
                        <small className="text-muted">
                          Not at all satisfied
                        </small>
                      </Col>
                      <Col className="col-6 mx-auto">
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
                        <small className="text-muted">
                          Not at all satisfied
                        </small>
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
                      How useful is the search interface?
                    </h6>
                    <Row className="align-middle py-3">
                      <Col className="text-right col-3">
                        <small className="text-muted">
                          Not at all satisfied
                        </small>
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
                        <small className="text-muted">
                          Not at all satisfied
                        </small>
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
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // const { token } = {
                        //   // token: Buffer.from(
                        //   //   JSON.stringify({
                        //   //     id: "60cbf80fb9c02a46d721b19b",
                        //   //     code: "C5AV5N",
                        //   //   })
                        //   // ).toString("base64"),
                        //   // additionalAttachments: this.additionalAttachments,
                        //   token:
                        //     "yJpZCI6IjYwY2JmODBmYjljMDJhNDZkNzIxYjE5YiIsImNvZGUiOiJDNUFWNU4ifQ%3D%3D",
                        // };

                        // const token =
                        //   "yJpZCI6IjYwY2JmODBmYjljMDJhNDZkNzIxYjE5YiIsImNvZGUiOiJDNUFWNU4ifQ%3D%3D";

                        const buildedFormData = {
                          code: "C5AV5N",
                          patient: {
                            id: "60cbf80fb9c02a46d721b19a",
                            contactDetails: [
                              {
                                type: "mobile",
                                value: "09287107743",

                                createdAt: "2021-06-18T01:34:07.148Z",
                                updatedAt: "2021-07-20T17:55:37.060Z",
                                id: "60cbf80fb9c02a46d721b198",
                              },
                              {
                                type: "email",
                                value: "eric@cynder.io",
                                createdAt: "2021-06-18T01:39:00.531Z",
                                updatedAt: "2021-07-20T17:55:37.062Z",

                                id: "60cbf934b9c02a46d721b1ad",
                              },
                            ],
                            address: {
                              id: "60cbf934b9c02a46d721b1ac",
                              line1: "199 Dupax Street",
                              line2: "",
                              city: "QUEZON CITY",
                              cityId: "5fd93b9badff9a52fefbe24a",
                              brgy: "",
                              brgyId: "5fd93b9badff9a52fefbe28e",
                            },
                          },
                          deletedFiles: [],
                          type: "rx",
                          branch: "6024aff2a0d84c4ef4fbec6c",
                          pickup: false,
                          vendor: "6024af43a0d84c4ef4fbec69",
                        };

                        const formData = new FormData();

                        formData.append(
                          "data",
                          JSON.stringify(buildedFormData)
                        );

                        console.log("nnn", additionalFiles);

                        additionalFiles.forEach((file) => {
                          formData.append("files[additionalAttachments]", file);
                        });

                        // fetch(
                        //   `https://api.erx.staging.nowna.com.ph/prescriptions/confirm?token=${token}`,
                        //   {
                        //     method: "PUT",
                        //     body: { test: "test" },
                        //     // body: formData,
                        //     // headers: { "Content-Type": "multipart/form-data" },
                        //     headers: { "Content-Type": "application/json" },
                        //   }
                        // );

                        // fetch(
                        //   `https://api.erx.staging.nowna.com.ph/prescriptions/test?id=60cbf80fb9c02a46d721b19b`,
                        //   {
                        //     method: "POST",
                        //     body: { test: "test" },
                        //     // body: formData,
                        //     // headers: { "Content-Type": "multipart/form-data" },
                        //     headers: { "Content-Type": "application/json" },
                        //   }
                        // );

                        axios
                          .post(
                            "https://api.erx.staging.nowna.com.ph/prescriptions/test?id=60cbf80fb9c02a46d721b19b",
                            formData
                          )
                          .then()
                          .catch((err) => {
                            const error =
                              err &&
                              typeof err === "object" &&
                              JSON.stringify(err);

                            if (error) {
                              this.setState({ error, show: true });
                            }
                          });

                        // return fetch(
                        //   `https://api.erx.staging.nowna.com.ph/prescription/test?id=60cbf80fb9c02a46d721b19b`,
                        //   {
                        //     method: "PUT",
                        //     body: formData,
                        //     headers: { "Content-Type": "multipart/form-data" },
                        //   }
                        // );
                      }}
                      // method="post"
                      // enctype="multipart/form-data"
                    >
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload File</Form.Label>
                        {/* <Form.Control
                        type="file"
                        onChange={({ target }) => {
                          this.setState({ additionalFiles: target.files });
                        }}
                      /> */}
                        <input
                          capture
                          ref={this.myRef}
                          Tell
                          fluid
                          hidden
                          location
                          max={3}
                          maxLength={3}
                          multiple
                          name="customerPhotoId"
                          onChange={({ target }) => {
                            // const reader = new FileReader();

                            // const dataURItoBlob = (dataURI) => {
                            //   // convert base64 to raw binary data held in a string
                            //   const byteString = window.atob(
                            //     dataURI.split(",")[1]
                            //   );

                            //   // separate out the mime component
                            //   const mimeString = dataURI
                            //     .split(",")[0]
                            //     .split(":")[1]
                            //     .split(";")[0];

                            //   // write the bytes of the string to an ArrayBuffer
                            //   const arrayBuffer = new ArrayBuffer(
                            //     byteString.length
                            //   );
                            //   const ia = new Uint8Array(arrayBuffer);
                            //   for (let i = 0; i < byteString.length; i += 1) {
                            //     ia[i] = byteString.charCodeAt(i);
                            //   }

                            //   const dataView = new DataView(arrayBuffer);
                            //   const blob = new Blob([dataView], {
                            //     type: mimeString,
                            //   });
                            //   return blob;
                            // };
                            // reader.onload = () => {
                            //   const blob = dataURItoBlob(reader.result);
                            //   this.setState({ additionalFiles: [blob] });
                            // };
                            // reader.readAsDataURL(target.files[0]);

                            return this.setState({
                              additionalFiles: [target.files[0]],
                            });
                          }}
                          placeholder="Customer Photo ID"
                          type="file"
                          us
                          your
                        />
                        <Button
                          size="sm"
                          onClick={() => {
                            this.myRef.current.click();
                          }}
                        >
                          Upload
                        </Button>
                        <Button size="sm" type="submit">
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>

                    <Alert variant="secondary" className="p-3 mt-5">
                      <Row>
                        <Col className="text-left my-auto col-12 col-md-5 ">
                          <span className="">
                            Let us know that you are human by checking "I'm not
                            a robot".
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
                              <Image
                                src="../captcha.png"
                                className="cap ml-2 "
                              />
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
        <Toast
          show={this.state.show}
          onClose={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{this.state.error}</Toast.Body>
        </Toast>
      </>
    );
  }
}

export default Feedback;
