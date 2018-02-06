import React from "react";
import {Component} from "react";
import dmLogo from "../assets/images/datamorphixLogo.png"

class Header extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="header-container">
                <div className="d-flex  justify-content-between">
                    <div className="align-self-center">
                        <div className="d-flex justify-content-end header-container__logo">
                            <img src={dmLogo}  alt="logo"/>
                        </div>
                    </div>

                    <div className="d-flex flex-column header-container__title">
                        <div className="p-2">
                            <div className="d-flex justify-content-center">
                                <a className="navbar-brand" href="#">
                                    <p className="h1">Datamorphix Converse Bot</p>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="d-flex justify-content-center">
                                <p className="h5">
                                    Welcome to the Datamorphix Converse Bot. Your assistant Tina is here to help.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="align-self-center header-container__button">
                        <button className="btn btn-info">Learn more</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;