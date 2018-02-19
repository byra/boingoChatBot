import React from "react";
import {Component} from "react";
import Bot from "../containers/Bot";
import Login from "../containers/Login";
import SideNavBar from "../components/SideNavBar"

class Body extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="body-container">
                <div className="row">
                    <div className="col-md-3 col-xl-3">
                        <SideNavBar/>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <Login/>
                    </div>
                    <div className="col-md-4 col-md-4">
                        <Bot/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Body;