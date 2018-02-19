import React from "react";
import {Component} from "react";
import Authentication from "../containers/Authentication"
import dmLogo from "../assets/images/datamorphixLogo.png"

class Header extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="header-container">
                <div className="d-flex  justify-content-between">
                    <div className="align-self-center header-container__logo">
                        <img src={dmLogo} alt="logo"/>
                    </div>
                    <div className="d-flex flex-column header-container__title">
                        <div className="d-flex justify-content-center">
                            <a className="navbar-brand" href="http://www.datamorphix.com">
                                <p className="h1">Datamorphix Converse Bot</p>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="h5">
                                Welcome to the Datamorphix Converse Bot. Your assistant Tina is here to help.
                            </p>
                        </div>
                    </div>
                    <div className="align-self-center header-container__button">
                        <Authentication/>
                    </div>
                </div>
            </div>
        );
    };
}


export default Header;