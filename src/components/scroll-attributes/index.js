import React from "react";
import { InputGroup, FormControl, Form, Card } from "react-bootstrap";

function ResistenceSkils({ value, title }) {
  return (
    <Form.Check type="checkbox">
      <Form.Check.Input type="checkbox" isValid />
      <Form.Check.Label>{`${value} ${title}`}</Form.Check.Label>
    </Form.Check>
  );
}

export default function ScrollAttributes() {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon2" />
        <InputGroup.Text id="basic-addon2">Inspiration</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon2" />
        <InputGroup.Text id="basic-addon2">Proficiency</InputGroup.Text>
      </InputGroup>
      <Card className="mb-3">
				<Card.Header>Resistence Test</Card.Header>
        <Card.Body>
          <Form>
            <ResistenceSkils value={0} title="Strength" />
            <ResistenceSkils value={0} title="Dexterity" />
            <ResistenceSkils value={0} title="Constitution" />
            <ResistenceSkils value={0} title="Intelligence" />
            <ResistenceSkils value={0} title="Wisdom" />
            <ResistenceSkils value={0} title="charisma" />
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-3">
				<Card.Header>Skils</Card.Header>
        <Card.Body>
          <Form>
            <ResistenceSkils value={0} title="Strength" />
            <ResistenceSkils value={0} title="Dexterity" />
            <ResistenceSkils value={0} title="Constitution" />
            <ResistenceSkils value={0} title="Intelligence" />
            <ResistenceSkils value={0} title="Wisdom" />
            <ResistenceSkils value={0} title="charisma" />

            <ResistenceSkils value={0} title="Strength" />
            <ResistenceSkils value={0} title="Dexterity" />
            <ResistenceSkils value={0} title="Constitution" />
            <ResistenceSkils value={0} title="Intelligence" />
            <ResistenceSkils value={0} title="Wisdom" />
            <ResistenceSkils value={0} title="charisma" />

            <ResistenceSkils value={0} title="Strength" />
            <ResistenceSkils value={0} title="Dexterity" />
            <ResistenceSkils value={0} title="Constitution" />
            <ResistenceSkils value={0} title="Intelligence" />
            <ResistenceSkils value={0} title="Wisdom" />
            <ResistenceSkils value={0} title="charisma" />
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
