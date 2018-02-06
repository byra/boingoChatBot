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
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                        <Bot/>
                    </div>
                </div>
            </div>
        )
    };
}

export default Body;