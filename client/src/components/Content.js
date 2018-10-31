import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { content: "Content" }
    }

    render() {
        // const currentUser = this.props.user;
        console.log(this.props)
        return (
            <Container fluid>
                <Row>
                    <Col md="12" className="text-center">
                        {this.state.content}
                        <br />
                        Speed = {this.props.user.speed}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Content;
