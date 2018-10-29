import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const onHandleChange = this.props.onHandleChange;
        const onResetInput = this.props.onResetInput;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>User Name</label>
                                                <input className="form-control" type="text" id="txtUsername"
                                                    onChange={onHandleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Password</label>
                                                <input className="form-control" type="password" id="txtPassword"
                                                    onChange={onHandleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="button" className="btn btn-secondary"
                                                    onClick={() => onResetInput()}>Reset</button>
                                                {" "}
                                                <button type="button" className="btn btn-primary">Login</button>
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
