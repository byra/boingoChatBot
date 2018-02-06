import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {changeStatusToClose} from "../actions/status";
import {onEmail} from "../actions/chatMessages";
import Chat from "./Chat"

class ChatArea extends Component {
    constructor(props) {
        super(props);
    };



    render() {
        let userMsg="";
        return (
            <div className="chat-container">
                <div className="row justify-content-start">
                    <div className="col-lg-11 col-md-11 col-sm-11">
                        <div className="chat-header">
                            <div className="d-flex justify-content-between">
                                <p className="h6">
                                    Tina
                                </p>
                                <img className="figure-img img-fluid rounded chat-header__img" onClick={()=>this.props.statusUpdateToClose()} src={"./src/assets/images/closeIcon.svg"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-lg-11 col-md-11 col-sm-11">
                        <div className="chat-body">
                            <Chat/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-lg-11 col-md-11 col-sm-11">
                        <div className="chat-footer">
                            <div className="d-flex justify-content-between">
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                           ref={node =>
                                                {
                                                    userMsg = node
                                                }
                                            }
                                           onKeyPress={
                                               (event) => {
                                                   if (event.key === 'Enter' && userMsg.value.trim() !== "") {
                                                       this.props.fetchResponse(userMsg.value.trim());
                                                       userMsg.value = "";
                                                   }
                                               }
                                           }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return{
        //No states needed to be mapped to props
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        statusUpdateToClose : () => dispatch(changeStatusToClose()),
        fetchResponse: (customRequest) => dispatch(onEmail(customRequest)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);