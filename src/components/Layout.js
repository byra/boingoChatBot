import React from "react";
import {Component} from "react";
import Header from "./Header";
import Body from "./Body";

class Layout extends Component{

    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div>
                <div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Header/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Body/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;