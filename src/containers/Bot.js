import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import ChatArea from "./ChatArea";
import {changeStatusToOpen} from "../actions/status";

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
                <div className="d-flex justify-content-center">
                    <div className="action-container">
                    <button className="btn btn-lg" onClick={()=>this.props.statusUpdateToOpen()}> Get Help</button>
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