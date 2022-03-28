import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./CreateMerchant.css";
function CreateMerchant() {
  return (
    <>
      <Container className="main">
        <h4 className="">Create Merchant</h4>
        <form className="my-4">
          <Row className="rowcontainer">
            <h5 className="">Merchant Details</h5>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="tel" placeholder="Mobile No" />
              </Form.Group>
            </Col>
            <Col sm={12} className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Settle Currency *Note It's permanent.</Form.Label>
                <Form.Select>
                  <option> Select</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Business name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Business name(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Business location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Business location(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Job title</Form.Label>
                <Form.Control type="text" placeholder="Job title(Optional)" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="Website(Optional)" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Annual Processing Volume</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Annual Processing Volume(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Average Transaction Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Average Transaction Amount(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>
                  What is your current charge back percentage?
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Current charge back percentage?(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Currencies Require</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Currencies Require(Optional)"
                />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <button className="button-Cancel mx-lg-4">Cancel</button>
              <button className="button-Sent my-4">Sent Request</button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default CreateMerchant;
