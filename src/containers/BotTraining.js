import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import closeLogo from "../assets/images/closeIcon.svg";
import {statusUpdateToLoginClose} from "../actions/authen";
import {addIntentTextbox} from "../actions/authen";
import {v4} from "node-uuid";
import AppendTextbox from "./AppendTextbox";
import {removeIntentTextbox, formClose} from "../actions/authen";

class BotTraining extends Component {

 
    constructor(props) {
        super(props);
        this.state = {intent:"", intent_followup:"", intent_followup_response:"",text_id:'', textboxes:'', inputs: ['input-0'], shareholders: [{ name: '' }]};
        this.handlefollowresponseChange = this.handlefollowresponseChange.bind(this);
        this.handleIntentChange = this.handleIntentChange.bind(this);
        this.handleIntentfollowChange = this.handleIntentfollowChange.bind(this);
        this.handleSubmitintent = this.handleSubmitintent.bind(this);
        this.handeladdIntentTextbox = this.handeladdIntentTextbox.bind(this);        
    };

    handleIntentChange(event) {
        this.setState({intent: event.target.value});
    }

    handleIntentfollowChange(event) {
        this.setState({intent_followup: event.target.value});
    }

    handlefollowresponseChange(event) {
        this.setState({intent_followup_response: event.target.value});
    }

    handleSubmitintent(event){
        event.preventDefault();      
    }

  
    handeladdIntentTextbox(event){
      //event.preventDefault();
      this.setState({text_id:v4()});
      this.props.addIntentTextbox(this.state.text_id);
    }  


    render() {
        if (!this.props.authenticated && this.props.isformBOTStatus) {


            return (
                <div className="sidenavdiv-container ">
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-header">
                                <div className="d-flex justify-content-between">
                                    <p className="h6 text-white">
                                        BOT Action Training
                                    </p>
                                    <img className="figure-img img-fluid rounded sidenavdiv-header__img cursor"
                                         onClick={() => this.props.statusUpdateToLoginClose()} src={closeLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-body intentscroll">
                                <form onSubmit={this.handleSubmitintent}>
                                    <div className="form-group px-3 pt-3">
                                        <label htmlFor="exampleInputEmail1">Intent</label>
                                        <input type="text" className="popuptextalighfull form-control form-control-lg form-padding"
                                               id="exampleInputEmail1" aria-describedby="emailHelp"
                                               placeholder="Enter Intent" required
                                              value={this.state.intent} onChange={this.handleIntentChange}
                                        />
                                       
                                    </div>
                                    <div className=" px-3">
                                        <label htmlFor="exampleInputPassword1">Intent Followup</label>
                                        <input type="text" className="form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup" required
                                              value={this.state.intent_followup} onChange={this.handleIntentfollowChange}
                                        />
                                    
                                        <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                                        <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup Response" required
                                               value={this.state.intent_followup_response} onChange={this.handlefollowresponseChange}
                                        />
                                    </div>


                                    <AppendTextbox/>                                    



                                    <div className="d-flex justify-content-between px-5 pb-3">
                                        <button type="button" className="p-2 btn btn-info mr-1" onClick={this.handeladdIntentTextbox}>ADD More</button>
                                        <button type="submit" className="p-2 btn btn-info">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                null
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isformBOTStatus: state.status.formBotStatus,
        /*textboxappend: state.status.idx*/
       
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        statusUpdateToLoginClose: ()=>dispatch(statusUpdateToLoginClose()),
        addIntentTextbox: (text_id)=>dispatch(addIntentTextbox(text_id)),
        //removeIntentTextbox: (textbox_id)=>dispatch(removeIntentTextbox(textbox_id)),
        formClose: () => dispatch(formClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotTraining);
