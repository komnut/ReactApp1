import React, { Component } from 'react';

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
        if(this.validateForm()){
            alert('Please input username or password');
            event.preventDefault();
        }
        else{
            alert('A name was submitted: ' + this.state.username + ' ' + this.state.password);
            this.setState({ username: "", password: "" });
            event.preventDefault();
        }
    }

    validateForm() {
        if (this.state.username.length === 0 && this.state.password.length === 0) return true;
        else return false;
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>User Name</label>
                                                <input className="form-control" type="text" id="txtUsername" value={this.state.username}
                                                    onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Password</label>
                                                <input className="form-control" type="password" id="txtPassword" value={this.state.password}
                                                    onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="button" className="btn btn-secondary"
                                                    onClick={() => this.handleReset()}>Reset</button>
                                                {" "}
                                                <button type="submit" className="btn btn-primary">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
