import React from "react";
import {Component} from "react";
import Bot from "../containers/Bot"

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
                </div>
            </div>
        )
    };
}

export default Body;