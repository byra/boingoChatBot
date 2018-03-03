import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {removeIntentTextbox} from "../actions/authen";
import {handleFollowupChange} from "../actions/authen";
//import {handleFollowupResponseIntentChange} from "../actions/authen";



class AppendTextbox extends Component{

	constructor(props){
        super(props);
        this.state = {followupIntentChange:"",followupResponseIntentChange:"", holder:{}};
       /* this.handleFollowupIntentChange = this.handleFollowupIntentChange.bind(this);
        this.handleFollowupResponseIntentChange = this.handleFollowupResponseIntentChange.bind(this);*/
    };

   /* handleFollowupIntentChange(event,textbox_id) {
        this.setState({followupIntentChange: event.target.value});
        this.props.handleFollowupChange(textbox_id, this.state.followupIntentChange, this.state.followupResponseIntentChange);
    }

    handleFollowupResponseIntentChange(event,textbox_id) {
        this.setState({followupResponseIntentChange: event.target.value});
        this.props.handleFollowupChange(textbox_id, this.state.followupResponseIntentChange, this.state.handleFollowupResponseIntentChange);
    }


*/

    render(){
    	console.log(this.props.textBoxAppend);
    	if(this.props.textBoxAppend ) {
        return(
        	<div>{this.props.textBoxAppend.map(followup_content =>(
        		
        	<div className=" px-3" key={followup_content.idx}>
                <label htmlFor="exampleInputPassword1">Intent Followup</label>
                <input type="text" className="form-control form-control-lg form-padding poptextbox"
                       id="exampleInputPassword1" placeholder="Intent Followup" required/>            
                <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                       id="exampleInputPassword1" placeholder="Intent Followup Response" required/>
                <button type="button" onClick={() => this.props.removeIntentTextbox(followup_content.idx)} className="removetextintent">-</button>
            </div>
             ))}</div>
        )}
        else{
            return(null)
        }
    };

}

const mapStateToProps = (state) => {
	debugger;

    return {
        textBoxAppend: state.status.indentTrain,
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