import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Attributes from "../attributes";
import ScrollAttributes from "../scroll-attributes";

export default function AttributeGroup() {
  return (
    <Card>
      <Card.Body>
        <Row>
            <Col>
                <Attributes/>
            </Col>
            <Col>
                <ScrollAttributes/>
            </Col>
        </Row>
        </Card.Body>
    </Card>
  );
}
