import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.target.id === "txt_fName" && this.setState({ firstName: event.target.value });
        event.target.id === "txt_lName" && this.setState({ lastName: event.target.value });
    }

    render() {
        return (
            <div className="container-fluid">
                <label>
                    First Name:
              <input type="text" id="txt_fName" value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
              <input type="text" id="txt_lName" value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <br />
                <p>My name is {this.state.firstName + " " + this.state.lastName}</p>
            </div>
        );
    }
}

export default Content;
