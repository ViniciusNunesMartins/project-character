import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Infos() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="class-name">
              <Form.Control size="sm" type="text" placeholder="Class" />
            </Form.Group>
            <Form.Group as={Col} controlId="level-class">
              <Form.Control size="sm" type="text" placeholder="Level" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="race">
            <Form.Control size="sm" placeholder="Race" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="background">
            <Form.Control size="sm" placeholder="Background" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="alignment">
            <Form.Control size="sm" placeholder="Alignment" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="player-name">
            <Form.Control size="sm" placeholder="Player name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="experience-points">
            <Form.Control size="sm" placeholder="Experience points" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};
