import React from "react";
import {Component} from "react";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container login-container">
                <div className="row justify-content-center">
                    <div className="col">
                        <form>
                            <div className="d-flex flex-column">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control form-control-lg" id="exampleFormControlInput1"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

{/*<form>*/
}
{/*<div className="form-group">*/
}
{/*<label htmlFor="exampleInputEmail1">Email address</label>*/
}
{/*<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>*/
}
{/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label htmlFor="exampleInputPassword1">Password</label>*/
}
{/*<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>*/
}
{/*</div>*/
}
{/*<div className="form-check">*/
}
{/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/
}
{/*<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/
}
{/*</div>*/
}
{/*<button type="submit" className="btn btn-primary">Submit</button>*/
}
{/*</form>*/
}