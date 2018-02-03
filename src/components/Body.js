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
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <Bot/>
                    </div>
                </div>
            </div>
        )
    };
}

export default Body;