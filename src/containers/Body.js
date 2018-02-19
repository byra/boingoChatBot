import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import Bot from "./Bot";
import Login from "./Login";

class Body extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="body-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 offset-md-6 offset-lg-6 offset-6 offset-sm-6">
                        <Bot/>
                    </div>
                    <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-3">
                        <Login/>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authen.authenticated,
        getCredentials: state.authen.getCredentials
    };
};


const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);