import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

export default function Initiative() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
              <Card.Body>
                <Form.Control size="sm" type="text" />
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
              <Card.Body>
                <Form.Control size="lg" type="text" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
