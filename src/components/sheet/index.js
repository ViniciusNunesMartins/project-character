import React from 'react'
import {Card, Row} from 'react-bootstrap'
import Name from '../name'
import Infos from '../infos'
import AttributesGroup from '../attributes-group'
import './style.css'


export default () => {
    return (
        <div id="sheet">
            <h1>Dungeons & Dragons</h1>
            <Card>
                <Card.Body><Name/></Card.Body>
            </Card>
            <Card>
                <Card.Body><Infos/></Card.Body>
            </Card>
            <Card>
                <Card.Body><AttributesGroup/></Card.Body>
            </Card>
        </div>
    )
}