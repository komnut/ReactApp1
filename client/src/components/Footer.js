import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { companyName: props.companyName, email: props.email }
    }

    render() {
        return (
            <div className="container-fluid">
                <hr />
                <div className="text-center text-uppercase">
                    <small>
                        <span className="text-danger">Powered By {this.state.companyName}</span>
                        {" "}|
                        <span className="text-muted"> Contact By Email : {this.state.email}</span>
                    </small>
                </div>
            </div>
        );
    }
}

export default Footer;
