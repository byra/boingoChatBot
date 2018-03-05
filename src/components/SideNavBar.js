import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {botTrainingForm, conversationtrainingform, deployingbot, testingbot, statusUpdateToEmptyForm,} from "../actions/authen";
import {changeStatusToOpen} from "../actions/status";


class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.handelEmptyIntentDiv = this.handelEmptyIntentDiv.bind(this);
    };

    handelEmptyIntentDiv(event){
      this.props.botTrainingForm()
      this.props.statusUpdateToEmptyForm();
    }  

    render() {
        if (this.props.authenticated) {
            return (
              <div className="sidenavdiv btn-md ">
                <div className="btn-sm btn-custom ">
                    <button className="btn btn-info sidenavbtn" onClick={this.handelEmptyIntentDiv} data-toggle="modal" data-target="#exampleModalCenter">Train BOT</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" /*onClick={() => this.props.conversationtrainingform()}*/ data-toggle="modal" data-target="#exampleModalCenter">Train Conversation</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" /*onClick={() => this.props.deployingbot()}*/ data-toggle="modal" data-target="#exampleModalCenter">Deploy BOT</button></div>
                  <div className="btn-sm btn-custom ">  <button className="btn btn-info sidenavbtn" onClick={() => this.props.statusUpdateToOpen()} data-toggle="modal" data-target="#exampleModalCenter">Test BOT</button></div>

              </div>
            );
        }
        else {
            return(null);
        }

    };
}

const mapStateToProps = state =>{
    return{
        authenticated:state.status.authenticated
    };
};

const mapDispatchToProps = dispatch =>{
    return{
      botTrainingForm: () => dispatch(botTrainingForm()),
      conversationtrainingform: () => dispatch(conversationtrainingform()),
      deployingbot: () => dispatch(deployingbot()),
      testingbot: () => dispatch(testingbot()),
      statusUpdateToEmptyForm: () => dispatch(statusUpdateToEmptyForm()),
      statusUpdateToOpen: () => dispatch(changeStatusToOpen())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SideNavBar);
