import React, { Component } from 'react';
import {
    Button, Container, Row, Col, Card, CardBody,
    Form, FormGroup
} from "reactstrap";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReset() {
        this.setState({ username: "", password: "" });
    }

    handleChange(event) {
        event.target.id === "txtUsername" && this.setState({ username: event.target.value });
        event.target.id === "txtPassword" && this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        if (this.validateForm()) {
            alert('Please input username or password');
            this.setState({ password: "" });
            event.preventDefault();
        }
        else {
            this.setState({ username: "", password: "" });
            this.props.onChangeLogin(this.state.username);
        }
    }

    validateForm() {
        if (this.state.username.length === 0 || this.state.password.length === 0) return true;
        else return false;
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Row>
                                            <Col md="12">
                                                <label>User Name</label>
                                                <input className="form-control"
                                                    type="text"
                                                    id="txtUsername"
                                                    value={this.state.username}
                                                    onChange={this.handleChange} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col md="12">
                                                <label>Password</label>
                                                <input className="form-control" type="password" id="txtPassword" value={this.state.password}
                                                    onChange={this.handleChange} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col md="12" className="text-center">
                                                <Button type="button" color="secondary"
                                                    onClick={() => this.handleReset()}>
                                                    Reset
                                                </Button>
                                                {" "}
                                                <Button type="submit" color="success">
                                                    Login
                                                </Button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
