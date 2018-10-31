import React, { Component } from 'react';
import { Container, Row, Col, Label, Input, Button, Form, FormGroup } from "reactstrap";
import * as firebase from 'firebase';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "Content"
            , speedContent: ""
            , inputSpeed: ""
            , inputContent: ""
            , firebaseSpeed: ""
            , firebaseContent: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.id === "txtSpeed")
            this.setState({ inputSpeed: event.target.value });
        else if (event.target.id === "txtContent")
            this.setState({ inputContent: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        if (this.state.inputSpeed.length > 0 && this.state.inputContent.length > 0) {
            let insertFirebaseSpeed = this.state.inputSpeed;
            let insertFirebaseContent = this.state.inputContent;
            this.setState({ inputSpeed: "", inputContent: "" })


            const ref = firebase.database().ref("react/");
            ref.set({
                newContent: insertFirebaseContent,
                speed: insertFirebaseSpeed
            })
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        const contentRef = rootRef.child('newContent');
        speedRef.on('value', x => {
            this.setState({
                firebaseSpeed: x.val()
            })
        })
        contentRef.on('value', x => {
            this.setState({
                firebaseContent: x.val()
            })
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {/* <Col md="12" className="text-center">
                        {"Content : " + this.state.content}
                    </Col>
                    <Col md="12" className="text-center">
                        Speed = {this.props.user.speed}
                    </Col> */}
                    <Col md="12" className="text-center">
                        Firebase Speed = {this.state.firebaseSpeed}
                    </Col>
                    <Col md="12" className="text-center">
                        Firebase Content = {this.state.firebaseContent}
                    </Col>
                </Row>
                <Row>
                    <Form inline onSubmit={this.handleSubmit}>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Insert new speed</Label>
                            <Input placeholder="Input Speed" id="txtSpeed"
                                value={this.state.inputSpeed} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Insert new content</Label>
                            <Input placeholder="Input Content" id="txtContent"
                                value={this.state.inputContent} onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default Content;
