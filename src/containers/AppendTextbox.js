import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {removeIntentTextbox} from "../actions/authen";
import {handleFollowupChange} from "../actions/authen";
//import {handleFollowupResponseIntentChange} from "../actions/authen";



class AppendTextbox extends Component{

	constructor(props){
        super(props);
        this.state = {FollowupIntentChange:"",FollowupResponseIntentChange:""};
        this.handleFollowupIntentChange = this.handleFollowupIntentChange.bind(this);
        this.handleFollowupResponseIntentChange = this.handleFollowupResponseIntentChange.bind(this);
    };

    handleFollowupIntentChange(event) {
        this.setState({FollowupIntentChange: event.target.value});
        this.props.handleFollowupChange(textbox_id, this.state.FollowupIntentChange, this.state.FollowupResponseIntentChange);
    }

    handleFollowupResponseIntentChange( event) {
        this.setState({FollowupResponseIntentChange: event.target.value});
        this.props.handleFollowupChange(textbox_id, this.state.FollowupResponseIntentChange, this.state.handleFollowupResponseIntentChange);
    }





    render(){

    	if(this.props.textboxappend ) {
        return(
        	<div>{this.props.textboxappend.map(textbox =>(
        		
        	<div className=" px-3" key={textbox.idx}>
                <label htmlFor="exampleInputPassword1">Intent Followup</label>
                <input type="text" className="form-control form-control-lg form-padding poptextbox"
                       id="exampleInputPassword1" placeholder="Intent Followup" required
                       value={this.state.FollowupIntentChange} onChange={this.handleFollowupIntentChange}
                />            
                <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                       id="exampleInputPassword1" placeholder="Intent Followup Response" required
                       value={this.state.FollowupResponseIntentChange} onChange={this.handleFollowupResponseIntentChange}
                       
                />
                <button type="button" onClick={() => this.props.removeIntentTextbox(textbox.idx)} className="removetextintent">-</button>
            </div>
             ))}</div>
        )}
        else{
            return(<div>

            </div>)
        }
    };

}

const mapStateToProps = (state) => {
    return {
        isformBOTStatus: state.status.formBotStatus,
        textboxappend: state.status_append,
       
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeIntentTextbox: (textbox_id)=>dispatch(removeIntentTextbox(textbox_id)),
       /* handleFollowupIntentChange: (textbox_id)=>dispatch(handleFollowupIntentChange(textbox_id)),
        handleFollowupResponseIntentChange: (textbox_id)=>dispatch(handleFollowupResponseIntentChange(textbox_id))*/
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppendTextbox);