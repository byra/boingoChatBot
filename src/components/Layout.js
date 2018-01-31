import React from "react";
import {Component} from "react";

class Layout extends Component{

    constructor(props) {
        super(props)

    }

    render(){
        return(
            <div>
                <div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id="titlespace">
                    </div>
                </div>
                <div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id="dataspace">
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;