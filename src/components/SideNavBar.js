import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {botTrainingForm, conversationtrainingform, deployingbot, testingbot} from "../actions/authen";


class SideNavBar extends Component{
    constructor(props){
        super(props);
    };


    render(){
		return(
      <div className="sidenavdiv btn-md "> 
				<div className="btn-sm btn-custom ">
            <button className="btn btn-info sidenavbtn" onClick={() => this.props.botTrainingForm()} data-toggle="modal" data-target="#exampleModalCenter">Train BOT</button></div>
          <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={() => this.props.conversationtrainingform()} data-toggle="modal" data-target="#exampleModalCenter">Train Conversation</button></div>
          <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={() => this.props.deployingbot()} data-toggle="modal" data-target="#exampleModalCenter">Deploy BOT</button></div>
          <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={() => this.props.testingbot()} data-toggle="modal" data-target="#exampleModalCenter">Test BOT</button></div>

      </div> 
			);
    }
}

const mapStateToProps = state =>{
    return{
        //isFormOpen:state.status.formStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        botTrainingForm: () => dispatch(botTrainingForm()),
        conversationtrainingform: () => dispatch(conversationtrainingform()),
        deployingbot: () => dispatch(deployingbot()),
        testingbot: () => dispatch(testingbot())
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar);