import React from "react";
import { Card } from "react-bootstrap";
import Name from "../name";
import Infos from "../infos";
import AttributesGroup from "../attributes-group";
import Initiative from "../Initiative";
import "./style.css";

export default function Sheet() {
  return (
    <Card>
      <Card.Header>Dungeons & Dragons</Card.Header>
      <Card.Body>
        <Name />
        <Infos />
        <AttributesGroup />
        <Initiative />
      </Card.Body>
    </Card>
  );
}
