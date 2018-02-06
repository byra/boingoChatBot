import React from "react";
import {Component} from "react";

class BotResponse extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="p-2 chat-text__msg">
                <p className="h5">{this.props.response}</p>
            </div>
        );
    };
}

export default BotResponse;