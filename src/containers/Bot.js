import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import ChatArea from "./ChatArea";
import {changeStatusToOpen} from "../actions/status";
import messageLogo from "../assets/images/message.svg"

class Bot extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.status){
            return(<ChatArea/>);
        }
        else{
            return(
                <div className="col-2 col-lg-2 col-sm-2 col-md-2 offset-md-9 offset-lg-9 offset-9 offset-sm-9">
                    <div className="d-flex justify-content-end">
                        <div className="action-container">
                            <img src={messageLogo} onClick={()=>this.props.statusUpdateToOpen()}/>
                        </div>
                    </div>
                </div>

            );
        }

    };
}

const mapStateToProps = (state) =>{
    return{
        status : state.status.gate
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        statusUpdateToOpen : ()=> dispatch(changeStatusToOpen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bot);