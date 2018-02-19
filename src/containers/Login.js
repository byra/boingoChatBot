import React from "react";
import {Component} from "react";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        if(!this.props.authenticated && this.props.credentials){
            return (
                <div className="justify-content-center">
                    <form>
                        <div className="d-flex flex-column">
                            <div className="">
                                <label>Email address</label>
                                <input type="email" className="form-control-lg" id="exampleFormControlInput1"/>
                            </div>
                            <div className="">
                                <label>Password</label>
                                <input type="password" className="form-control-lg"
                                       id="exampleFormControlInput1"/>
                            </div>
                        </div>
                    </form>
                </div>

            )
        }
        else{
            return(
                <div>

                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        credentials:state.authen.credentials,
        authenticated:state.authen.authenticated

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
