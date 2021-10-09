import React from "react";
import { Card, Form } from "react-bootstrap";

function Attribute({ name }) {
  return (
    <Card>
			<Card.Header>{name}</Card.Header>
      <Card.Body>
        <Form.Control size="lg" type="number" />
        <Form.Control size="sm" type="number" />
      </Card.Body>
    </Card>
  );
}

export default function Attributes() {
  return (
    <Card>
      <Card.Body>
        <Attribute name="Strength" />
        <Attribute name="Dexterity" />
        <Attribute name="Constitution" />
        <Attribute name="Intelligence" />
        <Attribute name="Wisdom" />
        <Attribute name="Charisma" />
      </Card.Body>
    </Card>
  );
}
