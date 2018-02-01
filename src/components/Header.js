import React from "react";
import {Component} from "react";

class Header extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header-title">
                <h3>Technical Support Assistant </h3>
            </div>
        )
    }
}

export default Header;