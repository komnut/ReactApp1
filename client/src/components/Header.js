import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success">
                            Test React{" "}
                        </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-3">
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Header;
