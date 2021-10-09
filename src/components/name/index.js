import React from "react";
import { Card, Form } from "react-bootstrap";
import "./style.css";

export default function Name() {
  return (
    <Card>
      <Card.Body>
        <Form.Group className="mb-3" controlId="race">
          <Form.Control size="lg" placeholder="Character Name" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};
