import React from "react";
import {Component} from "react";
import {v4} from "node-uuid";

class BotReply extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-2  chat-text__msg">
                <div className="rounded">
                    {
                        this.props.reply.map(msg =>(
                            <p key={v4()} className="h5">{msg}</p>
                        ))
                    }
                </div>

            </div>
        )
    };
}

export default BotReply;