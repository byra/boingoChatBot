import React from "react";
import {Component} from "react";
import Header from "./Header";
import Body from "../components/Body";
import Footer from "./Footer";

class Layout extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="container-fluid layout-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-header">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-body">
                        <Body/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Layout;