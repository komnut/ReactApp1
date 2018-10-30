import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { content: "Content" }
    }

    render() {
        // const currentUser = this.props.user;

        return (
            <Container fluid>
                <Row>
                    <Col md="12" className="text-center">
                        {this.state.content}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Content;
