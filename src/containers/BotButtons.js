import React from "react";
import {Component} from "react";
import {v4} from "node-uuid";
import {connect} from "react-redux";
import * as actions from "../actions/chatMessages";

class BotButtons extends Component{
    constructor(props){
        super(props);
    };

    nextAction(actionRequested){
        switch(actionRequested){
            case "TechnicalSupport":
                this.props.onTechnicalSupport();
                break;
            case "CannotConnectToWifi":
                this.props.onCannotConnectToWifi();
                break;
            case "Helpful":
                this.props.onHelpful();
                break;
            case "MainMenu":
                this.props.onMainMenu();
                break;
            case "NotHelpful":
                this.props.onNotHelpful();
                break;
            case "ManageAccount":
            case "BillingInquiry":
            case "AccountCancellation":
        }
    };

    render(){
        if(this.props.buttons) {
            return (
                <div className="p-2 d-flex justify-content-start ">
                    <div className="btn-group btn-group-sm">
                    {
                        this.props.buttons.map(button => (
                            <button type="button" className="btn-secondary btn-sm" role="group" key={v4()}
                                    onClick={() => this.nextAction(button.replace(/\s/g, ''))}>{button}</button>
                        ))
                    }
                    </div>
                </div>
            );
        }
        else{
            return(<div>

            </div>)
        }
    };
}

const mapStateToProps = (state) =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onTechnicalSupport: () => dispatch(actions.onTechnicalSupport()),
        onCannotConnectToWifi:() => dispatch(actions.onCannotConnectToWifi()),
        onHelpful:() => dispatch(actions.onHelpful()),
        onMainMenu:() => dispatch(actions.onMainMenu()),
        onNotHelpful:()=> dispatch(actions.onNotHelpful()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotButtons);