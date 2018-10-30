import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { aaa: "aaa" }
    }

    render() {
        // const currentUser = this.props.user;

        return (
            <Container fluid>
                <Row>
                    <Col md="8">
                        Content-Left
                    </Col>
                    <Col md="4">
                        Content-Right
                   </Col>
                </Row>
            </Container>
        );
    }
}

export default Content;
